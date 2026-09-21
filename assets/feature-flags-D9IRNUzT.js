import{n as e}from"./mdx-CvdavGbu.js";import{lt as t,yt as n}from"./link-D-5fxqYS.js";var r={order:8,title:`feature-flags`,audience:`developer`,created:`2025-09-30`,published:`2025-09-30`,thumbnail:null,blurb:`Tiny, framework-agnostic feature flags for TypeScript.`,isOpensource:!0};function i(n){let r={a:`a`,br:`br`,code:`code`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e(),...n.components};return[t(r.p,{get children(){return[t(r.strong,{children:`@sparkstone/feature-flags`}),` is a small, framework-agnostic TypeScript library for defining and evaluating feature flags. It supports simple boolean “allow” flags as well as integer-based constraints (exact, minimum, and maximum), making it useful for feature rollouts, limits, and environment-based behavior.`]}}),`
`,t(r.p,{get children(){return t(r.strong,{children:`Links:`})}}),`
`,t(r.ul,{get children(){return[`
`,t(r.li,{get children(){return[t(r.strong,{children:`GitHub:`}),` `,t(r.a,{href:`https://github.com/Sparkstonepdx/feature-flags`,children:`https://github.com/Sparkstonepdx/feature-flags`})]}}),`
`,t(r.li,{get children(){return[t(r.strong,{children:`npm:`}),` `,t(r.a,{href:`https://www.npmjs.com/package/@sparkstone/feature-flags`,children:`https://www.npmjs.com/package/@sparkstone/feature-flags`})]}}),`
`]}}),`
`,t(r.hr,{}),`
`,t(r.h2,{children:`What it does`}),`
`,t(r.ul,{get children(){return[`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Boolean feature flags`}),t(r.br,{}),`
Simple on/off flags using `,t(r.code,{children:`type: "allow"`}),`.`]}}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Integer constraints & ranges`}),t(r.br,{}),`
Exact values, minimums, and maximums for limits like quotas, thresholds, or build numbers.`]}}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Tier-based segmentation`}),t(r.br,{}),`
Every flag includes a free-form `,t(r.code,{children:`tier`}),` string for environments, cohorts, regions, or plans.`]}}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Framework-agnostic`}),t(r.br,{}),`
Works anywhere TypeScript or JavaScript runs—no React, no hooks, no globals required.`]}}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Multi-format builds`}),t(r.br,{}),`
Ships ESM, CJS, and UMD bundles with type definitions.`]}}),`
`]}}),`
`]}}),`
`,t(r.h2,{children:`Installation`}),`
`,t(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return t(r.code,{get children(){return t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`npm`}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` i`}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` @sparkstone/feature-flags`})]}})}})}}),`
`,t(r.p,{children:`or`}),`
`,t(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return t(r.code,{get children(){return t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`pnpm`}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` add`}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` @sparkstone/feature-flags`})]}})}})}}),`
`,t(r.p,{children:`or`}),`
`,t(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return t(r.code,{get children(){return t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`yarn`}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` add`}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` @sparkstone/feature-flags`})]}})}})}}),`
`,t(r.h2,{children:`Quick start`}),`
`,t(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return t(r.code,{get children(){return[t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`import`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` { featureFlags, FeatureFlag } `}),t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`from`}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "@sparkstone/feature-flags"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}}),`
`,t(r.span,{class:`line`}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` flags`}),t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` FeatureFlag`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`[] `}),t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  { name: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"newDashboard"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, tier: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"beta"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, type: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"allow"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, value: `}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`true`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` },`})]}}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  { name: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"maxUploads"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, tier: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`""`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, type: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"int:max"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, value: `}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`10`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` },`})]}}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  { name: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"minAge"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, tier: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"eu"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, type: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"int:min"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, value: `}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`16`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` },`})]}}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  { name: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"build"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, tier: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"qa"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, type: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"int"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, value: `}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1234`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` },`})]}}),`
`,t(r.span,{class:`line`,get children(){return t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})}}),`
`,t(r.span,{class:`line`}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`featureFlags.`}),t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`load`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(flags);`})]}}),`
`,t(r.span,{class:`line`}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (featureFlags.`}),t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isAllowed`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"newDashboard"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"beta"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) {`})]}}),`
`,t(r.span,{class:`line`,get children(){return t(r.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`  // show experimental UI`})}}),`
`,t(r.span,{class:`line`,get children(){return t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}}),`
`,t(r.span,{class:`line`}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (featureFlags.`}),t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isInRange`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"maxUploads"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`""`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`7`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) {`})]}}),`
`,t(r.span,{class:`line`,get children(){return t(r.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`  // within allowed cap`})}}),`
`,t(r.span,{class:`line`,get children(){return t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}})]}})}}),`
`,t(r.h2,{children:`How tiers work`}),`
`,t(r.p,{get children(){return[`Each flag is uniquely identified by `,t(r.strong,{children:`name + tier`}),`. Internally the key is:`]}}),`
`,t(r.pre,{get children(){return t(r.code,{children:`{name}.{tier}
`})}}),`
`,t(r.p,{children:`This makes tiers a flexible way to segment behavior:`}),`
`,t(r.ul,{get children(){return[`
`,t(r.li,{get children(){return[`environments: `,t(r.code,{children:`dev`}),`, `,t(r.code,{children:`qa`}),`, `,t(r.code,{children:`prod`})]}}),`
`,t(r.li,{get children(){return[`cohorts: `,t(r.code,{children:`beta`}),`, `,t(r.code,{children:`control`})]}}),`
`,t(r.li,{get children(){return[`regions: `,t(r.code,{children:`eu`}),`, `,t(r.code,{children:`us`})]}}),`
`,t(r.li,{get children(){return[`plans: `,t(r.code,{children:`free`}),`, `,t(r.code,{children:`pro`})]}}),`
`]}}),`
`,t(r.p,{children:`Keeping names stable and varying tiers makes it easy to reason about rollout logic.`}),`
`,t(r.h2,{children:`Browser & Node support`}),`
`,t(r.ul,{get children(){return[`
`,t(r.li,{get children(){return[t(r.strong,{children:`Browser / UMD:`}),` drop-in via `,t(r.code,{children:`dist/main.umd.js`})]}}),`
`,t(r.li,{get children(){return[t(r.strong,{children:`ESM:`}),` modern bundlers and Node`]}}),`
`,t(r.li,{get children(){return[t(r.strong,{children:`CJS:`}),` legacy Node environments`]}}),`
`,t(r.li,{get children(){return[t(r.strong,{children:`Types:`}),` included `,t(r.code,{children:`.d.ts`}),` files`]}}),`
`]}}),`
`,t(r.p,{children:`Microbundle is used to produce all outputs cleanly.`}),`
`,t(r.h2,{children:`Why it exists`}),`
`,t(r.p,{get children(){return[`Feature flags are often over-engineered or tightly coupled to frameworks. `,t(r.strong,{children:`feature-flags`}),` focuses on the core mechanics—clear semantics, predictable evaluation, and zero runtime magic—so you can layer your own persistence, reactivity, or remote loading on top without fighting the library.`]}}),`
`,t(r.p,{children:`It’s designed to be small, explicit, and easy to delete if your needs change.`})]}function a(r={}){let{wrapper:a}={...e(),...r.components};return a?t(a,n(r,{get children(){return t(i,r)}})):i(r)}export{a as default,r as frontmatter};