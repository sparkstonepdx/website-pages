import{n as e}from"./mdx-11PLl7Dz.js";import{lt as t,yt as n}from"./link-DS_xRDVh.js";var r={order:13,title:`Tasks`,audience:`business`,created:`2024-11-13`,published:`2024-11-13`,thumbnail:`/Screenshot 2026-09-08 at 9.04.29 AM.png`,thumbnailAlt:``,blurb:`Local-first, collaborative notes and tasks—built for offline reliability.`,isOpensource:!0};function i(n){let r={a:`a`,br:`br`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...n.components};return[t(r.p,{get children(){return[t(r.strong,{children:`Tasks`}),` is a local-first, collaborative notes and tasks app built for reliability, offline resilience, and open collaboration. It’s designed for users who want full control over their data while still benefiting from modern real-time collaboration.`]}}),`
`,t(r.p,{children:`Packaged as a lightweight Progressive Web App (PWA), Tasks works offline by default and syncs efficiently when connectivity is available.`}),`
`,t(r.p,{get children(){return t(r.strong,{children:`Links:`})}}),`
`,t(r.ul,{get children(){return[`
`,t(r.li,{get children(){return[t(r.strong,{children:`Live demo:`}),` `,t(r.a,{href:`https://tasks-eight-dun.vercel.app`,children:`https://tasks-eight-dun.vercel.app`})]}}),`
`,t(r.li,{get children(){return[t(r.strong,{children:`Source code:`}),` `,t(r.a,{href:`https://github.com/odama626/tasks`,children:`https://github.com/odama626/tasks`})]}}),`
`]}}),`
`,t(r.hr,{}),`
`,t(r.h2,{children:`What it does`}),`
`,t(r.ul,{get children(){return[`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Local-first storage`}),t(r.br,{}),`
Data is cached using IndexedDB and service workers, allowing the app to function fully offline.`]}}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return t(r.strong,{children:`Real-time collaboration`})}}),`
`,t(r.p,{children:`Peer-to-peer syncing with Yjs and WebRTC enables collaborative editing without centralized servers.`}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Offline-first sync model`}),t(r.br,{}),`
Changes sync efficiently between devices using PocketBase subscriptions, with future plans for ActivityPub federation.`]}}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return t(r.strong,{children:`Open source by design`})}}),`
`,t(r.p,{get children(){return[`Licensed under `,t(r.strong,{children:`AGPL-3.0`}),`, ensuring the project remains transparent, forkable, and user-respecting.`]}}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Progressive Web App`}),t(r.br,{}),`
Installable on desktop and mobile—no app stores, no lock-in.`]}}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return t(r.strong,{children:`Flexible content model`})}}),`
`,t(r.p,{children:`Notes and tasks are stored as blocks, supporting rich text, embedded files, and quick-action templates.`}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Dynamic theming`}),t(r.br,{}),`
Customizable CSS-based themes adapt the UI without heavy frameworks.`]}}),`
`]}}),`
`]}}),`
`,t(r.h2,{children:`Architecture overview`}),`
`,t(r.ul,{get children(){return[`
`,t(r.li,{get children(){return[t(r.strong,{children:`Frontend:`}),` Vanilla TypeScript + Web Components`]}}),`
`,t(r.li,{get children(){return[t(r.strong,{children:`Collaboration layer:`}),` Yjs (CRDT) + WebRTC + IndexedDB persistence`]}}),`
`,t(r.li,{get children(){return[t(r.strong,{children:`Optional backend:`}),` PocketBase for presence and event subscriptions`]}}),`
`,t(r.li,{get children(){return[t(r.strong,{children:`Deployment:`}),` Optimized for edge hosting (Vercel, Cloudflare)`]}}),`
`]}}),`
`,t(r.h2,{children:`Why it exists`}),`
`,t(r.p,{get children(){return[`Task and note apps often trade control and durability for convenience. `,t(r.strong,{children:`Tasks`}),` takes the opposite approach: offline-first, user-owned data, and collaboration that doesn’t depend on a central service.`]}}),`
`,t(r.p,{get children(){return[`It’s an exploration of what practical, everyday software looks like when `,t(r.strong,{children:`local-first principles`}),` are treated as a foundation rather than a feature.`]}})]}function a(r={}){let{wrapper:a}={...e(),...r.components};return a?t(a,n(r,{get children(){return t(i,r)}})):i(r)}export{a as default,r as frontmatter};