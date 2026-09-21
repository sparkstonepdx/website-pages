import{n as e}from"./mdx-MJVE5zWE.js";import{lt as t,yt as n}from"./link-DExnhhic.js";var r={order:14,title:`version-json`,audience:`developer`,created:`2022-08-10`,published:`2022-08-10`,thumbnail:null,blurb:`Effortless versioning for long-lived JSON payloads.`,isOpensource:!0};function i(n){let r={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e(),...n.components};return[t(r.p,{get children(){return[t(r.strong,{children:`version-json`}),` is a lightweight utility for managing and upgrading long-lived JSON data structures. You define transformation functions for each version, and it upgrades incoming payloads to the latest shape—keeping your data consistent as your schema evolves.`]}}),`
`,t(r.p,{get children(){return t(r.strong,{children:`Links:`})}}),`
`,t(r.ul,{get children(){return[`
`,t(r.li,{get children(){return[t(r.strong,{children:`GitHub:`}),` `,t(r.a,{href:`https://github.com/odama626/version-json`,children:`https://github.com/odama626/version-json`})]}}),`
`,t(r.li,{get children(){return[t(r.strong,{children:`npm:`}),` `,t(r.a,{href:`https://www.npmjs.com/package/version-json`,children:`https://www.npmjs.com/package/version-json`})]}}),`
`]}}),`
`,t(r.hr,{}),`
`,t(r.h2,{children:`What it does`}),`
`,t(r.ul,{get children(){return[`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Version-aware transformations`}),t(r.br,{}),`
Define a chain of upgrades that move payloads from one version to the next.`]}}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Flexible version detection`}),t(r.br,{}),`
Use a dedicated version field (like `,t(r.code,{children:`version`}),`) or provide a custom function that infers the version from the payload shape.`]}}),`
`]}}),`
`,t(r.li,{get children(){return[`
`,t(r.p,{get children(){return[t(r.strong,{children:`Simple integration`}),t(r.br,{}),`
Small API surface: describe upgrades with `,t(r.code,{children:`.add()`}),`, then normalize data with `,t(r.code,{children:`.process()`}),`.`]}}),`
`]}}),`
`]}}),`
`,t(r.h2,{children:`Example`}),`
`,t(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return t(r.code,{get children(){return[t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` upVersion`}),t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` VersionJson`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"version"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}}),`
`,t(r.span,{class:`line`}),`
`,t(r.span,{class:`line`,get children(){return t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`upVersion`})}}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  .`}),t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`add`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, (`}),t(r.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`p`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) `}),t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=>`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` p)`})]}}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  .`}),t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`add`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, (`}),t(r.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`p`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) `}),t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=>`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    p.newData `}),t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` p.data;`})]}}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    delete`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` p.data;`})]}}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    return`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` p;`})]}}),`
`,t(r.span,{class:`line`,get children(){return t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  });`})}}),`
`,t(r.span,{class:`line`}),`
`,t(r.span,{class:`line`,get children(){return[t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` newData`}),t(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` upVersion.`}),t(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`process`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`({ version: `}),t(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, data: `}),t(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"hello world"`}),t(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` });`})]}}),`
`,t(r.span,{class:`line`,get children(){return t(r.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// => { version: 2, newData: "hello world" }`})}})]}})}}),`
`,t(r.h2,{children:`Why it exists`}),`
`,t(r.p,{get children(){return[`If you persist JSON in a database, local cache, config files, or synced documents, schemas inevitably change. `,t(r.strong,{children:`version-json`}),` gives you a clear, explicit place to keep migrations so you can accept older payloads without scattering compatibility logic throughout your codebase.`]}}),`
`,t(r.blockquote,{get children(){return[`
`,t(r.p,{children:`“We created version-json to simplify the process of managing evolving JSON data structures, making data migrations effortless and reliable.”
— The Sparkstone Team`}),`
`]}})]}function a(r={}){let{wrapper:a}={...e(),...r.components};return a?t(a,n(r,{get children(){return t(i,r)}})):i(r)}export{a as default,r as frontmatter};