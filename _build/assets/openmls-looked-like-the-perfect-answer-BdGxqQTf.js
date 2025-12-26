import{M as s}from"./index-D1tvG0iQ.js";import{b as n,m as l}from"./solid-DLBwXPei.js";import"./web-D4Sjcv9r.js";const r=[{title:"OpenMLS Looked Like the Perfect Answer — Until It Wasn’t",href:"#openmls-looked-like-the-perfect-answer--until-it-wasnt",children:[{title:"Why OpenMLS was so appealing",href:"#why-openmls-was-so-appealing",children:[]},{title:"The sequential processing wall",href:"#the-sequential-processing-wall",children:[]},{title:"Where it breaks for shared state",href:"#where-it-breaks-for-shared-state",children:[]},{title:"The hard-earned lesson",href:"#the-hard-earned-lesson",children:[]},{title:"What I took away from it",href:"#what-i-took-away-from-it",children:[]}]}],a={title:"OpenMLS Looked Like the Perfect Answer — Until It Wasn’t",created:"2025-12-19",published:"2025-12-19",thumbnail:"",blurb:" On paper, it checked all the boxes.  In practice, I eventually ran into a hard constraint that made it the wrong fit for what I was trying to build."};function i(t){const e={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return[n(e.h2,{id:"openmls-looked-like-the-perfect-answer--until-it-wasnt",get children(){return n(e.a,{"data-auto-heading":"",href:"#openmls-looked-like-the-perfect-answer--until-it-wasnt",children:"OpenMLS Looked Like the Perfect Answer — Until It Wasn’t"})}}),`
`,n(e.p,{children:"For a long time, OpenMLS felt like the obvious solution for encrypting shared group state."}),`
`,n(e.p,{children:"It’s well-designed, thoughtfully specified, and built to solve a real problem: secure group messaging with strong guarantees around membership, forward secrecy, and compromise recovery."}),`
`,n(e.p,{children:"On paper, it checked all the boxes."}),`
`,n(e.p,{children:"In practice, I eventually ran into a hard constraint that made it the wrong fit for what I was trying to build."}),`
`,n(e.h3,{id:"why-openmls-was-so-appealing",get children(){return n(e.a,{"data-auto-heading":"",href:"#why-openmls-was-so-appealing",children:"Why OpenMLS was so appealing"})}}),`
`,n(e.p,{get children(){return["MLS is great at what it’s designed for: ",n(e.strong,{children:"ordered group communication"}),"."]}}),`
`,n(e.p,{children:"Everyone agrees on:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"group membership"}),`
`,n(e.li,{children:"a shared cryptographic state"}),`
`,n(e.li,{children:"a linear sequence of messages"}),`
`]}}),`
`,n(e.p,{children:"Keys evolve as messages are processed. Membership changes advance the group epoch. Everything stays tightly synchronized."}),`
`,n(e.p,{children:"For chat, this is exactly what you want."}),`
`,n(e.p,{children:"For shared state, it turns out to be a problem."}),`
`,n(e.h3,{id:"the-sequential-processing-wall",get children(){return n(e.a,{"data-auto-heading":"",href:"#the-sequential-processing-wall",children:"The sequential processing wall"})}}),`
`,n(e.p,{children:"The realization came slowly, then all at once:"}),`
`,n(e.p,{get children(){return n(e.strong,{children:"MLS requires messages to be processed in sequence."})}}),`
`,n(e.p,{children:"If a client misses a message, processes one out of order, or goes offline for a while, it can’t simply decrypt the next message. It has to catch up, step by step, to rebuild the correct group state."}),`
`,n(e.p,{children:"That’s not a flaw — it’s a core design property."}),`
`,n(e.p,{children:"But it means:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"you can’t apply updates independently"}),`
`,n(e.li,{children:"you can’t merge changes out of order"}),`
`,n(e.li,{children:"you can’t treat updates as unordered facts"}),`
`]}}),`
`,n(e.p,{children:"And that’s exactly what distributed state systems need."}),`
`,n(e.h3,{id:"where-it-breaks-for-shared-state",get children(){return n(e.a,{"data-auto-heading":"",href:"#where-it-breaks-for-shared-state",children:"Where it breaks for shared state"})}}),`
`,n(e.p,{get children(){return["When you’re encrypting group ",n(e.em,{children:"messages"}),", sequence is the point."]}}),`
`,n(e.p,{get children(){return["When you’re encrypting group ",n(e.em,{children:"state"}),", sequence becomes a liability."]}}),`
`,n(e.p,{children:"Local-first and offline-first systems assume:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"peers will disconnect"}),`
`,n(e.li,{children:"updates will arrive late"}),`
`,n(e.li,{children:"operations will be merged, not replayed"}),`
`]}}),`
`,n(e.p,{children:"If every encrypted update depends on all prior updates being processed first, the system becomes fragile. One missing message can block everything that follows."}),`
`,n(e.p,{get children(){return["That’s the moment it became clear: ",n(e.strong,{children:"MLS and CRDT-style state sync are philosophically incompatible."})]}}),`
`,n(e.h3,{id:"the-hard-earned-lesson",get children(){return n(e.a,{"data-auto-heading":"",href:"#the-hard-earned-lesson",children:"The hard-earned lesson"})}}),`
`,n(e.p,{children:"I didn’t arrive at this conclusion casually. It took real implementation work to hit this wall."}),`
`,n(e.p,{children:`OpenMLS is not “bad.”
It’s just extremely good at a different problem than the one I needed solved.`}),`
`,n(e.p,{children:`MLS secures conversations.
State sync secures convergence.`}),`
`,n(e.p,{children:"Those are related, but not interchangeable."}),`
`,n(e.h3,{id:"what-i-took-away-from-it",get children(){return n(e.a,{"data-auto-heading":"",href:"#what-i-took-away-from-it",children:"What I took away from it"})}}),`
`,n(e.p,{children:"The big lesson wasn’t about OpenMLS specifically. It was about respecting design intent."}),`
`,n(e.p,{children:"A system that enforces strict ordering gives you powerful guarantees — but only if your problem actually wants those guarantees."}),`
`,n(e.p,{children:"Once you need:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"unordered updates"}),`
`,n(e.li,{children:"partial history"}),`
`,n(e.li,{children:"offline merges"}),`
`]}}),`
`,n(e.p,{children:"you need a different abstraction."}),`
`,n(e.p,{children:"It’s a humbling reminder that sometimes the hardest part of system design isn’t building the thing — it’s recognizing when the thing you’re excited about doesn’t fit."}),`
`,n(e.p,{children:"And moving on anyway."})]}function p(t={}){const{wrapper:e}={...s(),...t.components};return e?n(e,l(t,{get children(){return n(i,t)}})):i(t)}const o={frontmatter:typeof a<"u"?a??{}:{},toc:typeof r<"u"?r:void 0,editLink:"",lastUpdated:1766771022e3};typeof window<"u"&&(window.$$SolidBase_page_data??={},window.$$SolidBase_page_data["/home/runner/work/website-src/website-src/src/routes/post/openmls-looked-like-the-perfect-answer.md"]=o);const u=o;export{u as $$SolidBase_page_data,p as default,a as frontmatter};
