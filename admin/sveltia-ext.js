import { render } from "@solidjs/web";
import html from "@solidjs/html";
import { createSignal, createEffect } from "solid-js";

const [hash, setHash] = createSignal(location.hash);
addEventListener("hashchange", () => setHash(location.hash));

/** @type {Map<string, {id, label, icon, route, render}>} */
const pages = new Map();

export function registerPage({
  id,
  label,
  icon = "bookmark_manager",
  section,
  render,
}) {
  pages.set(id, {
    id,
    label,
    icon,
    section,
    render,
    route: `#/collections/__${id}`,
  });
  schedule();
}

/** @type {Map<string, HTMLElement>} */
const sectionHosts = new Map();

function sectionInner(tree, label) {
  if (!label) return tree;

  let group = sectionHosts.get(label);
  if (group?.isConnected) return group.querySelector(".inner");
  sectionHosts.delete(label);

  group = document.createElement("div");
  group.className = "sui option-group sx-group";
  group.setAttribute("role", "group");
  group.id = `sx-group-${sectionHosts.size}`;
  group.setAttribute("aria-labelledby", `${group.id}-label`);
  group.innerHTML =
    `<div role="none" id="${group.id}-label" class="label"></div>` +
    `<div role="none" class="inner"></div>`;
  group.querySelector(".label").textContent = label;
  tree.append(group);
  sectionHosts.set(label, group);
  return group.querySelector(".inner");
}
const activePage = () => [...pages.values()].find((p) => p.route === hash());

const NavItem = (props) => {
  let el;
  createEffect(
    () => hash() === props.page.route,
    (active) => el.setAttribute("aria-selected", String(active)),
  );
  return html`<div
    ref=${(n) => (el = n)}
    role="treeitem"
    class="sui treeitem sx-item"
    tabindex="-1"
    aria-level="1"
    data-label=${props.page.label}
    data-value=${props.page.id}
    onClick=${(e) => {
      location.hash = props.page.route;
    }}
  >
    <div role="none" class="row" style="--sui-tree-item-level:1">
      <span role="none" class="chevron placeholder"></span>
      <span class="sui icon material-symbols-outlined" aria-hidden="true"
        >${props.page.icon}</span
      >
      <span role="none" class="label">${props.page.label}</span>
    </div>
  </div>`;
};

const PageShell = (props) =>
  html`<div class="sx-page">
    <div class="sx-toolbar"><h2>${props.page.label}</h2></div>
    <div class="sx-content">${props.page.render()}</div>
  </div>`;

/** @type {Map<string, {host: HTMLElement, dispose: () => void}>} */
const navRoots = new Map();
const pageRoots = new Map();

function reap(roots) {
  for (const [id, root] of roots) {
    if (!root.host.isConnected) {
      root.dispose();
      roots.delete(id);
    }
  }
}

function mount(roots, parent, page, Component) {
  if (roots.has(page.id)) return;
  const host = document.createElement("div");
  host.className = "sx-host";
  host.dataset.sxId = page.id;
  parent.append(host);
  roots.set(page.id, {
    host,
    dispose: render(() => Component({ page }), host),
  });
}

function sync() {
  reap(navRoots);
  reap(pageRoots);

  const inner = document.querySelector(
    'nav.primary-sidebar [role="tree"] .inner',
  );
  const container = document.querySelector("#collection-container");
  const current = activePage();

  for (const page of pages.values()) {
    if (inner)
      mount(navRoots, sectionInner(inner, page.section), page, NavItem);
    if (container) mount(pageRoots, container, page, PageShell);

    const root = pageRoots.get(page.id);
    if (root) root.host.hidden = page !== current;
  }

  for (const [label, group] of sectionHosts) {
    if (!group.isConnected) sectionHosts.delete(label);
  }

  container?.classList.toggle("sx-active", !!current);
}

let queued = false;
const schedule = () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => {
    queued = false;
    sync();
  });
};

new MutationObserver(schedule).observe(document.body, {
  childList: true,
  subtree: true,
});
addEventListener("hashchange", schedule);
schedule();
