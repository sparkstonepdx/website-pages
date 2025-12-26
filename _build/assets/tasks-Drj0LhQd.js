import{M as o}from"./index-C0sStgJ9.js";import{b as n,m as s}from"./solid-B45ZUGaf.js";import"./web-BBvT38jz.js";const r=[{title:"What it does",href:"#what-it-does",children:[]},{title:"Architecture overview",href:"#architecture-overview",children:[]},{title:"Why it exists",href:"#why-it-exists",children:[]}],i={title:"tasks",layout:"project",created:"2024-11-13",published:"2024-11-13",thumbnail:null,blurb:"Local-first, collaborative notes and tasks—built for offline reliability."};function a(t){const e={a:"a",br:"br",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return[n(e.p,{get children(){return[n(e.strong,{children:"Tasks"})," is a local-first, collaborative notes and tasks app built for reliability, offline resilience, and open collaboration. It’s designed for users who want full control over their data while still benefiting from modern real-time collaboration."]}}),`
`,n(e.p,{children:"Packaged as a lightweight Progressive Web App (PWA), Tasks works offline by default and syncs efficiently when connectivity is available."}),`
`,n(e.p,{get children(){return n(e.strong,{children:"Links:"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.strong,{children:"Live demo:"})," ",n(e.a,{href:"https://tasks-eight-dun.vercel.app",children:"https://tasks-eight-dun.vercel.app"})]}}),`
`,n(e.li,{get children(){return[n(e.strong,{children:"Source code:"})," ",n(e.a,{href:"https://github.com/odama626/tasks",children:"https://github.com/odama626/tasks"})]}}),`
`]}}),`
`,n(e.hr,{}),`
`,n(e.h2,{id:"what-it-does",get children(){return n(e.a,{"data-auto-heading":"",href:"#what-it-does",children:"What it does"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Local-first storage"}),n(e.br,{}),`
Data is cached using IndexedDB and service workers, allowing the app to function fully offline.`]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Real-time collaboration"}),n(e.br,{}),`
Peer-to-peer syncing with Yjs and WebRTC enables collaborative editing without centralized servers.`]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Offline-first sync model"}),n(e.br,{}),`
Changes sync efficiently between devices using PocketBase subscriptions, with future plans for ActivityPub federation.`]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Open source by design"}),n(e.br,{}),`
Licensed under `,n(e.strong,{children:"AGPL-3.0"}),", ensuring the project remains transparent, forkable, and user-respecting."]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Progressive Web App"}),n(e.br,{}),`
Installable on desktop and mobile—no app stores, no lock-in.`]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Flexible content model"}),n(e.br,{}),`
Notes and tasks are stored as blocks, supporting rich text, embedded files, and quick-action templates.`]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Dynamic theming"}),n(e.br,{}),`
Customizable CSS-based themes adapt the UI without heavy frameworks.`]}}),`
`]}}),`
`]}}),`
`,n(e.h2,{id:"architecture-overview",get children(){return n(e.a,{"data-auto-heading":"",href:"#architecture-overview",children:"Architecture overview"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.strong,{children:"Frontend:"})," Vanilla TypeScript + Web Components"]}}),`
`,n(e.li,{get children(){return[n(e.strong,{children:"Collaboration layer:"})," Yjs (CRDT) + WebRTC + IndexedDB persistence"]}}),`
`,n(e.li,{get children(){return[n(e.strong,{children:"Optional backend:"})," PocketBase for presence and event subscriptions"]}}),`
`,n(e.li,{get children(){return[n(e.strong,{children:"Deployment:"})," Optimized for edge hosting (Vercel, Cloudflare)"]}}),`
`]}}),`
`,n(e.h2,{id:"why-it-exists",get children(){return n(e.a,{"data-auto-heading":"",href:"#why-it-exists",children:"Why it exists"})}}),`
`,n(e.p,{get children(){return["Task and note apps often trade control and durability for convenience. ",n(e.strong,{children:"Tasks"})," takes the opposite approach: offline-first, user-owned data, and collaboration that doesn’t depend on a central service."]}}),`
`,n(e.p,{get children(){return["It’s an exploration of what practical, everyday software looks like when ",n(e.strong,{children:"local-first principles"})," are treated as a foundation rather than a feature."]}})]}function u(t={}){const{wrapper:e}={...o(),...t.components};return e?n(e,s(t,{get children(){return n(a,t)}})):a(t)}const l={frontmatter:typeof i<"u"?i??{}:{},toc:typeof r<"u"?r:void 0,editLink:"",lastUpdated:1766772101e3};typeof window<"u"&&(window.$$SolidBase_page_data??={},window.$$SolidBase_page_data["/home/runner/work/website-src/website-src/src/routes/project/tasks.md"]=l);const g=l;export{g as $$SolidBase_page_data,u as default,i as frontmatter};
