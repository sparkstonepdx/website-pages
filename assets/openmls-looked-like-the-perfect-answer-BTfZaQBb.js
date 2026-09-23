import{n as e}from"./mdx-CDmMuJ4B.js";import{St as t,ft as n}from"./link-CcE4bZR5.js";var r={title:`OpenMLS Looked Like the Perfect Answer, Until It Wasn't`,created:`2025-12-19`,published:`2025-12-19`,thumbnail:null,blurb:`On paper, it checked all the boxes. In practice, I ran into a hard constraint that made it the wrong fit for what I was trying to build.`};function i(t){let r={em:`em`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return[n(r.p,{children:`For a long time, OpenMLS felt like the obvious solution for encrypting shared group state.`}),`
`,n(r.p,{children:`It's well-designed, thoughtfully specified, and built to solve a real problem: secure group messaging with strong guarantees around membership, forward secrecy, and compromise recovery.`}),`
`,n(r.p,{children:`On paper, it checked all the boxes.`}),`
`,n(r.p,{children:`In practice, I ran into a hard constraint that made it the wrong fit for what I was trying to build.`}),`
`,n(r.h3,{children:`Why OpenMLS was so appealing`}),`
`,n(r.p,{get children(){return[`MLS is great at what it's designed for: `,n(r.strong,{children:`ordered group communication`}),`.`]}}),`
`,n(r.p,{children:`Everyone agrees on:`}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{children:`group membership`}),`
`,n(r.li,{children:`a shared cryptographic state`}),`
`,n(r.li,{children:`a linear sequence of epochs`}),`
`]}}),`
`,n(r.p,{children:`Keys evolve as the group changes. Membership changes advance the epoch. Everything stays tightly synchronized.`}),`
`,n(r.p,{children:`For chat, this is exactly what you want.`}),`
`,n(r.p,{children:`For shared state, it turns out to be a problem.`}),`
`,n(r.h3,{children:`The sequential processing wall`}),`
`,n(r.p,{children:`The realization came slowly, then all at once:`}),`
`,n(r.p,{get children(){return n(r.strong,{children:`MLS requires commits to be processed in order.`})}}),`
`,n(r.p,{children:`This is worth being precise about, because MLS has three kinds of message and they behave differently. Application messages are the ones carrying your payload, and they tolerate some reordering: each sender has a ratchet within the epoch, and OpenMLS keeps skipped keys, so a message that arrives late still decrypts. Proposals are unordered by design. Commits are the problem. Each one derives epoch N+1 from epoch N, which means they form a chain you have to walk.`}),`
`,n(r.p,{children:`If a client misses a commit or goes offline while the group changes, it can't read anything from the later epochs. It has to catch up, one commit at a time, to rebuild the correct group state.`}),`
`,n(r.p,{children:`That's not a flaw, it's a core design property.`}),`
`,n(r.p,{children:`But it means:`}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{children:`every membership or key change forces a commit`}),`
`,n(r.li,{children:`commits serialize, so the epoch chain serializes`}),`
`,n(r.li,{children:`you can't merge two branches of that chain`}),`
`]}}),`
`,n(r.p,{children:`And that's exactly what distributed state systems need to do.`}),`
`,n(r.h3,{children:`Where it breaks for shared state`}),`
`,n(r.p,{get children(){return[`When you're encrypting group `,n(r.em,{children:`messages`}),`, an agreed sequence is the point.`]}}),`
`,n(r.p,{get children(){return[`When you're encrypting group `,n(r.em,{children:`state`}),`, it becomes a liability.`]}}),`
`,n(r.p,{children:`Local-first and offline-first systems assume:`}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{children:`peers will disconnect`}),`
`,n(r.li,{children:`updates will arrive late`}),`
`,n(r.li,{children:`operations will be merged, not replayed`}),`
`]}}),`
`,n(r.p,{children:`The payload layer would actually be fine here. The trouble is underneath it: if two peers each commit while partitioned, they land on two different epoch N+1s, and there's no merge. One of them has to be thrown away and replayed. A CRDT's whole premise is that this never has to happen.`}),`
`,n(r.p,{get children(){return[`That's the moment it became clear: `,n(r.strong,{children:`MLS and CRDT-style state sync are philosophically incompatible.`})]}}),`
`,n(r.h3,{children:`The hard-earned lesson`}),`
`,n(r.p,{children:`I didn't arrive at this conclusion casually. It took real implementation work to hit this wall.`}),`
`,n(r.p,{children:`OpenMLS is not "bad."
It's just extremely good at a different problem than the one I needed solved.`}),`
`,n(r.p,{children:`MLS secures conversations.
State sync secures convergence.`}),`
`,n(r.p,{children:`Those are related, but not interchangeable.`}),`
`,n(r.h3,{children:`What I took away from it`}),`
`,n(r.p,{children:`The big lesson wasn't about OpenMLS specifically. It was about respecting design intent.`}),`
`,n(r.p,{children:`A system that enforces strict ordering gives you powerful guarantees, but only if your problem actually wants those guarantees.`}),`
`,n(r.p,{children:`Once you need:`}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{children:`unordered updates`}),`
`,n(r.li,{children:`partial history`}),`
`,n(r.li,{children:`offline merges`}),`
`]}}),`
`,n(r.p,{children:`you need a different abstraction.`}),`
`,n(r.p,{children:`It's a humbling reminder that sometimes the hardest part of system design isn't building the thing, it's recognizing when the thing you're excited about doesn't fit.`}),`
`,n(r.p,{children:`And moving on anyway.`})]}function a(r={}){let{wrapper:a}={...e(),...r.components};return a?n(a,t(r,{get children(){return n(i,r)}})):i(r)}export{a as default,r as frontmatter};