import html from "@solidjs/html";
import {
  For,
  Show,
  createMemo,
  createSignal,
  createEffect,
  onCleanup,
} from "solid-js";
import { registerPage, cmsConfig } from "sveltia-ext";

html.define({ For, Show });

const ICON = {
  success: ["check_circle", "var(--sui-success-foreground-color)"],
  failure: ["cancel", "var(--sui-error-foreground-color)"],
  cancelled: ["do_not_disturb_on", "var(--sui-secondary-foreground-color)"],
  in_progress: ["progress_activity", "var(--sui-info-foreground-color)"],
  queued: ["schedule", "var(--sui-secondary-foreground-color)"],
};

const iconFor = (run) =>
  ICON[run.status === "completed" ? run.conclusion : run.status] ?? [
    "help",
    "var(--sui-secondary-foreground-color)",
  ];

const when = (iso) => {
  const mins = Math.round((Date.now() - Date.parse(iso)) / 60000);
  if (mins < 60) return `${mins}m ago`;
  if (mins < 1440) return `${Math.round(mins / 60)}h ago`;
  return new Date(iso).toLocaleDateString();
};

const isLocal = () =>
  ["local", "proxy"].includes(
    JSON.parse(localStorage.getItem("sveltia-cms.user") ?? "{}").backendName,
  );

const Notice = (props) =>
  html`<div class="sx-notice">
    <span class="sui icon material-symbols-outlined" aria-hidden="true"
      >${props.icon}</span
    >
    <div>
      <p>${props.title}</p>
      <p class="sx-notice-detail">${props.detail}</p>
    </div>
  </div>`;

const Actions = () => {
  const config = createMemo(async () => cmsConfig());
  const repo = () => config()?.backend?.repo;
  const apiRoot = () => config()?.backend?.api_root ?? "https://api.github.com";

  const [runs, setRuns] = createSignal([]);
  const [error, setError] = createSignal("");
  const [busy, setBusy] = createSignal(false);

  const token = () =>
    JSON.parse(localStorage.getItem("sveltia-cms.user") ?? "{}").token;

  const headers = () => ({
    Authorization: `Bearer ${token()}`,
    Accept: "application/vnd.github+json",
  });

  async function load() {
    const r = repo();
    if (!r || !token()) return;

    try {
      const res = await fetch(
        `${apiRoot()}/repos/${r}/actions/runs?per_page=10`,
        {
          headers: headers(),
        },
      );

      if (res.status === 401)
        return setError("Session expired. Sign out and back in.");
      if (!res.ok) return setError(`GitHub returned ${res.status}.`);

      setError("");
      setRuns((await res.json()).workflow_runs ?? []);
    } catch {
      setError("Couldn't reach GitHub.");
    }
  }

  async function rebuild() {
    const run = runs()[0];
    if (!run || busy()) return;

    setBusy(true);

    try {
      const res = await fetch(
        `${apiRoot()}/repos/${repo()}/actions/workflows/${run.workflow_id}/dispatches`,
        {
          method: "POST",
          headers: { ...headers(), "Content-Type": "application/json" },
          body: JSON.stringify({
            ref: run.head_branch ?? config()?.backend?.branch,
          }),
        },
      );

      if (res.status === 422) {
        setError("That workflow has no workflow_dispatch trigger.");
      } else if (!res.ok) {
        setError(`Rebuild failed: ${res.status}.`);
      } else {
        setError("");
        setTimeout(load, 3000);
      }
    } finally {
      setBusy(false);
    }
  }

  createEffect(
    () => repo(),
    (r) => {
      if (r) load();
    },
  );

  const timer = setInterval(load, 30000);
  onCleanup(() => clearInterval(timer));

  return html`<${Show}
    when=${() => config()?.backend?.name === "github"}
    fallback=${() =>
      Notice({
        icon: "info",
        title: "Deploy status needs the GitHub backend.",
        detail: `This site uses the "${config()?.backend?.name}" backend.`,
      })}
  >
    <${Show}
      when=${() => !isLocal()}
      fallback=${() =>
        Notice({
          icon: "construction",
          title: "Deploy status isn't available in local development.",
          detail:
            "The local backend works against files on disk and has no GitHub token, " +
            "so there are no workflow runs to show. This page works on the published site.",
        })}
    >
      <div class="sx-actions-bar">
        <button
          class="sx-button"
          disabled=${() => busy()}
          onClick=${(e) => rebuild()}
        >
          Rebuild site
        </button>
        <span class="sx-error">${() => error()}</span>
      </div>
      <div class="sx-runs">
        <${For} each=${runs}>
          ${(run) =>
            html`<a
              class="sx-run"
              href=${run.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <span
                class="sui icon material-symbols-outlined"
                style=${`color:${iconFor(run)[1]}`}
                aria-hidden="true"
                >${iconFor(run)[0]}</span
              >
              <span class="sx-run-title">${run.display_title ?? run.name}</span>
              <span class="sx-run-branch">${run.head_branch}</span>
              <span class="sx-run-time">${when(run.created_at)}</span>
            </a>`}
        <//>
      </div>
    <//>
  <//>`;
};

registerPage({
  id: "actions",
  label: "Deploys",
  icon: "rocket_launch",
  section: "Site",
  render: Actions,
});
