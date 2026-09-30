import { registerPage } from "./sveltia-ext.js";
import html from "@solidjs/html";

registerPage({
  id: "analytics",
  label: "Analytics",
  icon: "insights",
  render: () => html`
    <iframe
      style='flex: auto; border: 0; width: 100%; height: 100%'
      class="sx-frame"
      src="https://stats.sparkstonepdx.com"
      title="GoatCounter"
    ></iframe>
  `,
});
