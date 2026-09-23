import{n as e}from"./mdx-CfbRIYMA.js";import{St as t,ft as n}from"./link-CyCNcIsc.js";var r={order:8,title:`feature-flags`,audience:`developer`,created:`2025-09-30`,published:`2025-09-30`,thumbnail:null,blurb:`Tiny, framework-agnostic feature flags for TypeScript.`,isOpensource:!0};function i(t){let r={a:`a`,br:`br`,code:`code`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e(),...t.components};return[n(r.p,{get children(){return[n(r.strong,{children:`@sparkstone/feature-flags`}),` is a small, framework-agnostic TypeScript library for defining and evaluating feature flags. It supports simple boolean “allow” flags as well as integer-based constraints (exact, minimum, and maximum), making it useful for feature rollouts, limits, and environment-based behavior.`]}}),`
`,n(r.p,{get children(){return n(r.strong,{children:`Links:`})}}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{get children(){return[n(r.strong,{children:`GitHub:`}),` `,n(r.a,{href:`https://github.com/Sparkstonepdx/feature-flags`,children:`https://github.com/Sparkstonepdx/feature-flags`})]}}),`
`,n(r.li,{get children(){return[n(r.strong,{children:`npm:`}),` `,n(r.a,{href:`https://www.npmjs.com/package/@sparkstone/feature-flags`,children:`https://www.npmjs.com/package/@sparkstone/feature-flags`})]}}),`
`]}}),`
`,n(r.hr,{}),`
`,n(r.h2,{children:`What it does`}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Boolean feature flags`}),n(r.br,{}),`
Simple on/off flags using `,n(r.code,{children:`type: "allow"`}),`.`]}}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Integer constraints & ranges`}),n(r.br,{}),`
Exact values, minimums, and maximums for limits like quotas, thresholds, or build numbers.`]}}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Tier-based segmentation`}),n(r.br,{}),`
Every flag includes a free-form `,n(r.code,{children:`tier`}),` string for environments, cohorts, regions, or plans.`]}}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Framework-agnostic`}),n(r.br,{}),`
Works anywhere TypeScript or JavaScript runs—no React, no hooks, no globals required.`]}}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Multi-format builds`}),n(r.br,{}),`
Ships ESM, CJS, and UMD bundles with type definitions.`]}}),`
`]}}),`
`]}}),`
`,n(r.h2,{children:`Installation`}),`
`,n(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return n(r.code,{get children(){return n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`npm`}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` i`}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` @sparkstone/feature-flags`})]}})}})}}),`
`,n(r.p,{children:`or`}),`
`,n(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return n(r.code,{get children(){return n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`pnpm`}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` add`}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` @sparkstone/feature-flags`})]}})}})}}),`
`,n(r.p,{children:`or`}),`
`,n(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return n(r.code,{get children(){return n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`yarn`}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` add`}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` @sparkstone/feature-flags`})]}})}})}}),`
`,n(r.h2,{children:`Quick start`}),`
`,n(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return n(r.code,{get children(){return[n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`import`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` { featureFlags, FeatureFlag } `}),n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`from`}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "@sparkstone/feature-flags"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}}),`
`,n(r.span,{class:`line`}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` flags`}),n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` FeatureFlag`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`[] `}),n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  { name: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"newDashboard"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, tier: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"beta"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, type: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"allow"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, value: `}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`true`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` },`})]}}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  { name: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"maxUploads"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, tier: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`""`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, type: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"int:max"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, value: `}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`10`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` },`})]}}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  { name: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"minAge"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, tier: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"eu"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, type: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"int:min"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, value: `}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`16`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` },`})]}}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  { name: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"build"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, tier: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"qa"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, type: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"int"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, value: `}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1234`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` },`})]}}),`
`,n(r.span,{class:`line`,get children(){return n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})}}),`
`,n(r.span,{class:`line`}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`featureFlags.`}),n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`load`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(flags);`})]}}),`
`,n(r.span,{class:`line`}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (featureFlags.`}),n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isAllowed`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"newDashboard"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"beta"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) {`})]}}),`
`,n(r.span,{class:`line`,get children(){return n(r.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`  // show experimental UI`})}}),`
`,n(r.span,{class:`line`,get children(){return n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}}),`
`,n(r.span,{class:`line`}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (featureFlags.`}),n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isInRange`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"maxUploads"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`""`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`7`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) {`})]}}),`
`,n(r.span,{class:`line`,get children(){return n(r.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`  // within allowed cap`})}}),`
`,n(r.span,{class:`line`,get children(){return n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}})]}})}}),`
`,n(r.h2,{children:`How tiers work`}),`
`,n(r.p,{get children(){return[`Each flag is uniquely identified by `,n(r.strong,{children:`name + tier`}),`. Internally the key is:`]}}),`
`,n(r.pre,{get children(){return n(r.code,{children:`{name}.{tier}
`})}}),`
`,n(r.p,{children:`This makes tiers a flexible way to segment behavior:`}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{get children(){return[`environments: `,n(r.code,{children:`dev`}),`, `,n(r.code,{children:`qa`}),`, `,n(r.code,{children:`prod`})]}}),`
`,n(r.li,{get children(){return[`cohorts: `,n(r.code,{children:`beta`}),`, `,n(r.code,{children:`control`})]}}),`
`,n(r.li,{get children(){return[`regions: `,n(r.code,{children:`eu`}),`, `,n(r.code,{children:`us`})]}}),`
`,n(r.li,{get children(){return[`plans: `,n(r.code,{children:`free`}),`, `,n(r.code,{children:`pro`})]}}),`
`]}}),`
`,n(r.p,{children:`Keeping names stable and varying tiers makes it easy to reason about rollout logic.`}),`
`,n(r.h2,{children:`Browser & Node support`}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{get children(){return[n(r.strong,{children:`Browser / UMD:`}),` drop-in via `,n(r.code,{children:`dist/main.umd.js`})]}}),`
`,n(r.li,{get children(){return[n(r.strong,{children:`ESM:`}),` modern bundlers and Node`]}}),`
`,n(r.li,{get children(){return[n(r.strong,{children:`CJS:`}),` legacy Node environments`]}}),`
`,n(r.li,{get children(){return[n(r.strong,{children:`Types:`}),` included `,n(r.code,{children:`.d.ts`}),` files`]}}),`
`]}}),`
`,n(r.p,{children:`Microbundle is used to produce all outputs cleanly.`}),`
`,n(r.h2,{children:`Why it exists`}),`
`,n(r.p,{get children(){return[`Feature flags are often over-engineered or tightly coupled to frameworks. `,n(r.strong,{children:`feature-flags`}),` focuses on the core mechanics—clear semantics, predictable evaluation, and zero runtime magic—so you can layer your own persistence, reactivity, or remote loading on top without fighting the library.`]}}),`
`,n(r.p,{children:`It’s designed to be small, explicit, and easy to delete if your needs change.`})]}function a(r={}){let{wrapper:a}={...e(),...r.components};return a?n(a,t(r,{get children(){return n(i,r)}})):i(r)}export{a as default,r as frontmatter};