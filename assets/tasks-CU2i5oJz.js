import{n as e}from"./mdx-CDmMuJ4B.js";import{St as t,ft as n}from"./link-CcE4bZR5.js";var r={order:13,title:`Tasks`,audience:`business`,created:`2024-11-13`,published:`2024-11-13`,thumbnail:`/Screenshot 2026-09-08 at 9.04.29 AM.png`,thumbnailAlt:``,blurb:`Local-first, collaborative notes and tasks—built for offline reliability.`,isOpensource:!0};function i(t){let r={a:`a`,br:`br`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return[n(r.p,{get children(){return[n(r.strong,{children:`Tasks`}),` is a local-first, collaborative notes and tasks app built for reliability, offline resilience, and open collaboration. It’s designed for users who want full control over their data while still benefiting from modern real-time collaboration.`]}}),`
`,n(r.p,{children:`Packaged as a lightweight Progressive Web App (PWA), Tasks works offline by default and syncs efficiently when connectivity is available.`}),`
`,n(r.p,{get children(){return n(r.strong,{children:`Links:`})}}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{get children(){return[n(r.strong,{children:`Live demo:`}),` `,n(r.a,{href:`https://tasks-eight-dun.vercel.app`,children:`https://tasks-eight-dun.vercel.app`})]}}),`
`,n(r.li,{get children(){return[n(r.strong,{children:`Source code:`}),` `,n(r.a,{href:`https://github.com/odama626/tasks`,children:`https://github.com/odama626/tasks`})]}}),`
`]}}),`
`,n(r.hr,{}),`
`,n(r.h2,{children:`What it does`}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Local-first storage`}),n(r.br,{}),`
Data is cached using IndexedDB and service workers, allowing the app to function fully offline.`]}}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return n(r.strong,{children:`Real-time collaboration`})}}),`
`,n(r.p,{children:`Peer-to-peer syncing with Yjs and WebRTC enables collaborative editing without centralized servers.`}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Offline-first sync model`}),n(r.br,{}),`
Changes sync efficiently between devices using PocketBase subscriptions, with future plans for ActivityPub federation.`]}}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return n(r.strong,{children:`Open source by design`})}}),`
`,n(r.p,{get children(){return[`Licensed under `,n(r.strong,{children:`AGPL-3.0`}),`, ensuring the project remains transparent, forkable, and user-respecting.`]}}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Progressive Web App`}),n(r.br,{}),`
Installable on desktop and mobile—no app stores, no lock-in.`]}}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return n(r.strong,{children:`Flexible content model`})}}),`
`,n(r.p,{children:`Notes and tasks are stored as blocks, supporting rich text, embedded files, and quick-action templates.`}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Dynamic theming`}),n(r.br,{}),`
Customizable CSS-based themes adapt the UI without heavy frameworks.`]}}),`
`]}}),`
`]}}),`
`,n(r.h2,{children:`Architecture overview`}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{get children(){return[n(r.strong,{children:`Frontend:`}),` Vanilla TypeScript + Web Components`]}}),`
`,n(r.li,{get children(){return[n(r.strong,{children:`Collaboration layer:`}),` Yjs (CRDT) + WebRTC + IndexedDB persistence`]}}),`
`,n(r.li,{get children(){return[n(r.strong,{children:`Optional backend:`}),` PocketBase for presence and event subscriptions`]}}),`
`,n(r.li,{get children(){return[n(r.strong,{children:`Deployment:`}),` Optimized for edge hosting (Vercel, Cloudflare)`]}}),`
`]}}),`
`,n(r.h2,{children:`Why it exists`}),`
`,n(r.p,{get children(){return[`Task and note apps often trade control and durability for convenience. `,n(r.strong,{children:`Tasks`}),` takes the opposite approach: offline-first, user-owned data, and collaboration that doesn’t depend on a central service.`]}}),`
`,n(r.p,{get children(){return[`It’s an exploration of what practical, everyday software looks like when `,n(r.strong,{children:`local-first principles`}),` are treated as a foundation rather than a feature.`]}})]}function a(r={}){let{wrapper:a}={...e(),...r.components};return a?n(a,t(r,{get children(){return n(i,r)}})):i(r)}export{a as default,r as frontmatter};