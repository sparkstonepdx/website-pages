import{M as i}from"./index-BGZVogms.js";import{b as n,m as s}from"./solid-B0ppho7y.js";import"./web-C2CdMWpm.js";const c={title:"CryptPad’s URL Trick Is Genius",created:"2025-12-19",published:"2025-12-19",thumbnail:null,blurb:"CryptPad stores the shared encryption key in the URL fragment — the part after the `#`. That one choice quietly solves a whole class of secure-sharing problems."};function r(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return[n(e.p,{children:"While revisiting CryptPad’s architecture recently, something finally clicked."}),`
`,n(e.p,{get children(){return[n(e.strong,{get children(){return["CryptPad stores the shared encryption key in the URL fragment — the part after the ",n(e.code,{children:"#"}),"."]}}),`
That one choice quietly solves a whole class of secure-sharing problems.`]}}),`
`,n(e.p,{children:"And it turned out to be the missing piece I needed to safely create invite links with shared keys."}),`
`,n(e.h3,{get children(){return["Why the ",n(e.code,{children:"#"})," matters"]}}),`
`,n(e.p,{get children(){return["Anything after ",n(e.code,{children:"#"})," in a URL is never sent to the server. The browser keeps it entirely client-side."]}}),`
`,n(e.p,{children:"That means the server can host and sync encrypted data without ever seeing the key used to decrypt it. The trust boundary is clean and enforced by the platform itself, not policy or convention."}),`
`,n(e.p,{children:"In CryptPad’s case, the server only knows about a document ID. The browser extracts the key locally and does the decryption on its own."}),`
`,n(e.h3,{children:"Secure sharing without gymnastics"}),`
`,n(e.p,{children:"Before fully internalizing this pattern, invite links always felt risky. If a key is passed through a request or stored server-side, you’re constantly guarding against leaks."}),`
`,n(e.p,{children:"The fragment approach flips that model."}),`
`,n(e.p,{children:"You can share a link like:"}),`
`,n(e.pre,{get children(){return n(e.code,{children:`https://example.com/doc/abc123#<shared-secret>
`})}}),`
`,n(e.p,{children:"The server handles availability. The client handles secrecy. Possession of the link is possession of the key — nothing more, nothing less."}),`
`,n(e.h3,{children:"The piece I was missing"}),`
`,n(e.p,{children:"I’ve spent a lot of time working on encrypted and local-first systems. I had solid key management, device trust, and encryption primitives in place."}),`
`,n(e.p,{get children(){return["What I didn’t have was a ",n(e.strong,{children:"simple, human-shareable invite mechanism"})," that didn’t weaken the system."]}}),`
`,n(e.p,{children:`CryptPad’s approach made it obvious:
an invite link can just be a pointer plus a secret, as long as the secret never leaves the client.`}),`
`,n(e.p,{children:"No server trust. No invite state. No extra protocol."}),`
`,n(e.h3,{children:"Elegant in the best way"}),`
`,n(e.p,{children:"What I love about this design is how unremarkable it is."}),`
`,n(e.p,{children:"It uses standard URLs, well-understood browser behavior, and clear boundaries. No new crypto, no clever hacks — just a small decision with big consequences."}),`
`,n(e.p,{children:"It’s the kind of idea that feels obvious in hindsight, and transformative once you really see it."}),`
`,n(e.h3,{children:"Credit where it’s due"}),`
`,n(e.p,{children:"CryptPad doesn’t just promise privacy. Their architecture enforces it."}),`
`,n(e.p,{get children(){return["That tiny ",n(e.code,{children:"#"})," is doing an enormous amount of work, and it deserves recognition. It certainly unblocked a major design problem for me — and if you’re building encrypted, shareable tools, it might unblock one for you too."]}})]}function l(t={}){const{wrapper:e}={...i(),...t.components};return e?n(e,s(t,{get children(){return n(r,t)}})):r(t)}export{l as default,c as frontmatter};
