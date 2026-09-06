import{M as r}from"./index-BGZVogms.js";import{b as e,m as l}from"./solid-B0ppho7y.js";import"./web-C2CdMWpm.js";const d={title:"feature-flags",layout:"project",created:"2025-09-30",published:"2025-09-30",thumbnail:null,blurb:"Tiny, framework-agnostic feature flags for TypeScript."};function s(n){const i={a:"a",br:"br",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...n.components};return[e(i.p,{get children(){return[e(i.strong,{children:"@sparkstone/feature-flags"})," is a small, framework-agnostic TypeScript library for defining and evaluating feature flags. It supports simple boolean “allow” flags as well as integer-based constraints (exact, minimum, and maximum), making it useful for feature rollouts, limits, and environment-based behavior."]}}),`
`,e(i.p,{get children(){return e(i.strong,{children:"Links:"})}}),`
`,e(i.ul,{get children(){return[`
`,e(i.li,{get children(){return[e(i.strong,{children:"GitHub:"})," ",e(i.a,{href:"https://github.com/Sparkstonepdx/feature-flags",children:"https://github.com/Sparkstonepdx/feature-flags"})]}}),`
`,e(i.li,{get children(){return[e(i.strong,{children:"npm:"})," ",e(i.a,{href:"https://www.npmjs.com/package/@sparkstone/feature-flags",children:"https://www.npmjs.com/package/@sparkstone/feature-flags"})]}}),`
`]}}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"What it does"}),`
`,e(i.ul,{get children(){return[`
`,e(i.li,{get children(){return[`
`,e(i.p,{get children(){return[e(i.strong,{children:"Boolean feature flags"}),e(i.br,{}),`
Simple on/off flags using `,e(i.code,{children:'type: "allow"'}),"."]}}),`
`]}}),`
`,e(i.li,{get children(){return[`
`,e(i.p,{get children(){return[e(i.strong,{children:"Integer constraints & ranges"}),e(i.br,{}),`
Exact values, minimums, and maximums for limits like quotas, thresholds, or build numbers.`]}}),`
`]}}),`
`,e(i.li,{get children(){return[`
`,e(i.p,{get children(){return[e(i.strong,{children:"Tier-based segmentation"}),e(i.br,{}),`
Every flag includes a free-form `,e(i.code,{children:"tier"})," string for environments, cohorts, regions, or plans."]}}),`
`]}}),`
`,e(i.li,{get children(){return[`
`,e(i.p,{get children(){return[e(i.strong,{children:"Framework-agnostic"}),e(i.br,{}),`
Works anywhere TypeScript or JavaScript runs—no React, no hooks, no globals required.`]}}),`
`]}}),`
`,e(i.li,{get children(){return[`
`,e(i.p,{get children(){return[e(i.strong,{children:"Multi-format builds"}),e(i.br,{}),`
Ships ESM, CJS, and UMD bundles with type definitions.`]}}),`
`]}}),`
`]}}),`
`,e(i.h2,{children:"Installation"}),`
`,e(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",get children(){return e(i.code,{get children(){return e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"npm"}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" i"}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" @sparkstone/feature-flags"})]}})}})}}),`
`,e(i.p,{children:"or"}),`
`,e(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",get children(){return e(i.code,{get children(){return e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"pnpm"}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" add"}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" @sparkstone/feature-flags"})]}})}})}}),`
`,e(i.p,{children:"or"}),`
`,e(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",get children(){return e(i.code,{get children(){return e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"yarn"}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" add"}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" @sparkstone/feature-flags"})]}})}})}}),`
`,e(i.h2,{children:"Quick start"}),`
`,e(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",get children(){return e(i.code,{get children(){return[e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { featureFlags, FeatureFlag } "}),e(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "@sparkstone/feature-flags"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}}),`
`,e(i.span,{className:"line"}),`
`,e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),e(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" flags"}),e(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" FeatureFlag"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"[] "}),e(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ["})]}}),`
`,e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  { name: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"newDashboard"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", tier: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"beta"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", type: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"allow"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", value: "}),e(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"true"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" },"})]}}),`
`,e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  { name: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"maxUploads"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", tier: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'""'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", type: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"int:max"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", value: "}),e(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"10"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" },"})]}}),`
`,e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  { name: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"minAge"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", tier: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"eu"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", type: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"int:min"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", value: "}),e(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"16"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" },"})]}}),`
`,e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  { name: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"build"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", tier: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"qa"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", type: "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"int"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", value: "}),e(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1234"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" },"})]}}),`
`,e(i.span,{className:"line",get children(){return e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"];"})}}),`
`,e(i.span,{className:"line"}),`
`,e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"featureFlags."}),e(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"load"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(flags);"})]}}),`
`,e(i.span,{className:"line"}),`
`,e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"if"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (featureFlags."}),e(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"isAllowed"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"newDashboard"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"beta"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")) {"})]}}),`
`,e(i.span,{className:"line",get children(){return e(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // show experimental UI"})}}),`
`,e(i.span,{className:"line",get children(){return e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}}),`
`,e(i.span,{className:"line"}),`
`,e(i.span,{className:"line",get children(){return[e(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"if"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (featureFlags."}),e(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"isInRange"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"maxUploads"'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),e(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'""'}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),e(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"7"}),e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")) {"})]}}),`
`,e(i.span,{className:"line",get children(){return e(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // within allowed cap"})}}),`
`,e(i.span,{className:"line",get children(){return e(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}})]}})}}),`
`,e(i.h2,{children:"How tiers work"}),`
`,e(i.p,{get children(){return["Each flag is uniquely identified by ",e(i.strong,{children:"name + tier"}),". Internally the key is:"]}}),`
`,e(i.pre,{get children(){return e(i.code,{children:`{name}.{tier}
`})}}),`
`,e(i.p,{children:"This makes tiers a flexible way to segment behavior:"}),`
`,e(i.ul,{get children(){return[`
`,e(i.li,{get children(){return["environments: ",e(i.code,{children:"dev"}),", ",e(i.code,{children:"qa"}),", ",e(i.code,{children:"prod"})]}}),`
`,e(i.li,{get children(){return["cohorts: ",e(i.code,{children:"beta"}),", ",e(i.code,{children:"control"})]}}),`
`,e(i.li,{get children(){return["regions: ",e(i.code,{children:"eu"}),", ",e(i.code,{children:"us"})]}}),`
`,e(i.li,{get children(){return["plans: ",e(i.code,{children:"free"}),", ",e(i.code,{children:"pro"})]}}),`
`]}}),`
`,e(i.p,{children:"Keeping names stable and varying tiers makes it easy to reason about rollout logic."}),`
`,e(i.h2,{children:"Browser & Node support"}),`
`,e(i.ul,{get children(){return[`
`,e(i.li,{get children(){return[e(i.strong,{children:"Browser / UMD:"})," drop-in via ",e(i.code,{children:"dist/main.umd.js"})]}}),`
`,e(i.li,{get children(){return[e(i.strong,{children:"ESM:"})," modern bundlers and Node"]}}),`
`,e(i.li,{get children(){return[e(i.strong,{children:"CJS:"})," legacy Node environments"]}}),`
`,e(i.li,{get children(){return[e(i.strong,{children:"Types:"})," included ",e(i.code,{children:".d.ts"})," files"]}}),`
`]}}),`
`,e(i.p,{children:"Microbundle is used to produce all outputs cleanly."}),`
`,e(i.h2,{children:"Why it exists"}),`
`,e(i.p,{get children(){return["Feature flags are often over-engineered or tightly coupled to frameworks. ",e(i.strong,{children:"feature-flags"})," focuses on the core mechanics—clear semantics, predictable evaluation, and zero runtime magic—so you can layer your own persistence, reactivity, or remote loading on top without fighting the library."]}}),`
`,e(i.p,{children:"It’s designed to be small, explicit, and easy to delete if your needs change."})]}function k(n={}){const{wrapper:i}={...r(),...n.components};return i?e(i,l(n,{get children(){return e(s,n)}})):s(n)}export{k as default,d as frontmatter};
