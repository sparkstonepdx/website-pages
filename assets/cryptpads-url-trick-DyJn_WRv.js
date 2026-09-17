import{n as e}from"./mdx-11PLl7Dz.js";import{lt as t,yt as n}from"./link-DS_xRDVh.js";var r={title:`CryptPad's URL Trick Is Genius`,created:`2025-12-19`,published:`2025-12-19`,thumbnail:null,blurb:"CryptPad stores the shared encryption key in the URL fragment, the part after the `#`. That one choice solves a whole class of secure-sharing problems."};function i(n){let r={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...e(),...n.components};return[t(r.p,{children:`While revisiting CryptPad's architecture recently, something finally clicked.`}),`
`,t(r.p,{get children(){return[t(r.strong,{get children(){return[`CryptPad stores the shared encryption key in the URL fragment, the part after the `,t(r.code,{children:`#`}),`.`]}}),` That one choice solves a whole class of secure-sharing problems.`]}}),`
`,t(r.p,{children:`It turned out to be the missing piece I needed to safely create invite links with shared keys.`}),`
`,t(r.h2,{get children(){return[`Why the `,t(r.code,{children:`#`}),` matters`]}}),`
`,t(r.p,{get children(){return[`Anything after `,t(r.code,{children:`#`}),` in a URL is never sent to the server. The browser keeps it entirely client-side.`]}}),`
`,t(r.p,{children:`That means the server can host and sync encrypted data without ever seeing the key used to decrypt it. The trust boundary is clean and enforced by the platform itself, not by policy or convention.`}),`
`,t(r.p,{children:`In CryptPad's case, the server only knows about a document ID. The browser extracts the key locally and does the decryption on its own.`}),`
`,t(r.h2,{children:`Secure sharing without gymnastics`}),`
`,t(r.p,{children:`Before fully internalizing this pattern, invite links always felt risky. If a key is passed through a request or stored server-side, you're constantly guarding against leaks.`}),`
`,t(r.p,{children:`The fragment approach flips that model.`}),`
`,t(r.p,{children:`You can share a link like:`}),`
`,t(r.pre,{get children(){return t(r.code,{children:`https://example.com/doc/abc123#<shared-secret>
`})}}),`
`,t(r.p,{children:`The server handles availability. The client handles secrecy. Possession of the link is possession of the key, nothing more and nothing less.`}),`
`,t(r.h3,{children:`Where it still needs care`}),`
`,t(r.p,{get children(){return[`The fragment stays out of request logs, but it does not stay out of everything. It lands in browser history, it rides along in `,t(r.code,{children:`Referer`}),` headers on older browsers unless you set a referrer policy, and any script on the page can read `,t(r.code,{children:`location.hash`}),`. A link pasted into a chat app is a key pasted into a chat app.`]}}),`
`,t(r.p,{children:`The guarantee is specific: your server never sees the key. Everything between the sender and the recipient's browser is still your problem.`}),`
`,t(r.h2,{children:`The piece I was missing`}),`
`,t(r.p,{children:`I've spent a lot of time working on encrypted and local-first systems. I had solid key management, device trust, and encryption primitives in place.`}),`
`,t(r.p,{get children(){return[`What I didn't have was a `,t(r.strong,{children:`simple, human-shareable invite mechanism`}),` that didn't weaken the system.`]}}),`
`,t(r.p,{children:`CryptPad's approach made it obvious: an invite link can just be a pointer plus a secret, as long as the secret never leaves the client.`}),`
`,t(r.p,{children:`No server trust. No invite state. No extra protocol.`}),`
`,t(r.h2,{children:`Elegant in the best way`}),`
`,t(r.p,{children:`What I love about this design is how unremarkable it is.`}),`
`,t(r.p,{children:`It uses standard URLs, well-understood browser behavior, and clear boundaries. No new crypto, no clever hacks, just a small decision with big consequences.`}),`
`,t(r.p,{children:`It's the kind of idea that feels obvious in hindsight and transformative once you really see it.`}),`
`,t(r.h2,{children:`Credit where it's due`}),`
`,t(r.p,{children:`CryptPad doesn't just promise privacy. Their architecture enforces it.`}),`
`,t(r.p,{get children(){return[`That tiny `,t(r.code,{children:`#`}),` is doing an enormous amount of work, and it deserves recognition. It unblocked a major design problem for me, and if you're building encrypted, shareable tools, it might unblock one for you too.`]}})]}function a(r={}){let{wrapper:a}={...e(),...r.components};return a?t(a,n(r,{get children(){return t(i,r)}})):i(r)}export{a as default,r as frontmatter};