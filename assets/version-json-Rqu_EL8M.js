import{n as e}from"./mdx-ByN1DirU.js";import{St as t,ft as n}from"./link-B3Dlgyg2.js";var r={order:14,title:`version-json`,audience:`developer`,created:`2022-08-10`,published:`2022-08-10`,thumbnail:null,blurb:`Effortless versioning for long-lived JSON payloads.`,isOpensource:!0};function i(t){let r={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e(),...t.components};return[n(r.p,{get children(){return[n(r.strong,{children:`version-json`}),` is a lightweight utility for managing and upgrading long-lived JSON data structures. You define transformation functions for each version, and it upgrades incoming payloads to the latest shape—keeping your data consistent as your schema evolves.`]}}),`
`,n(r.p,{get children(){return n(r.strong,{children:`Links:`})}}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{get children(){return[n(r.strong,{children:`GitHub:`}),` `,n(r.a,{href:`https://github.com/odama626/version-json`,children:`https://github.com/odama626/version-json`})]}}),`
`,n(r.li,{get children(){return[n(r.strong,{children:`npm:`}),` `,n(r.a,{href:`https://www.npmjs.com/package/version-json`,children:`https://www.npmjs.com/package/version-json`})]}}),`
`]}}),`
`,n(r.hr,{}),`
`,n(r.h2,{children:`What it does`}),`
`,n(r.ul,{get children(){return[`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Version-aware transformations`}),n(r.br,{}),`
Define a chain of upgrades that move payloads from one version to the next.`]}}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Flexible version detection`}),n(r.br,{}),`
Use a dedicated version field (like `,n(r.code,{children:`version`}),`) or provide a custom function that infers the version from the payload shape.`]}}),`
`]}}),`
`,n(r.li,{get children(){return[`
`,n(r.p,{get children(){return[n(r.strong,{children:`Simple integration`}),n(r.br,{}),`
Small API surface: describe upgrades with `,n(r.code,{children:`.add()`}),`, then normalize data with `,n(r.code,{children:`.process()`}),`.`]}}),`
`]}}),`
`]}}),`
`,n(r.h2,{children:`Example`}),`
`,n(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return n(r.code,{get children(){return[n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` upVersion`}),n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` VersionJson`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"version"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}}),`
`,n(r.span,{class:`line`}),`
`,n(r.span,{class:`line`,get children(){return n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`upVersion`})}}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  .`}),n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`add`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, (`}),n(r.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`p`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) `}),n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=>`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` p)`})]}}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  .`}),n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`add`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, (`}),n(r.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`p`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) `}),n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=>`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    p.newData `}),n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` p.data;`})]}}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    delete`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` p.data;`})]}}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    return`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` p;`})]}}),`
`,n(r.span,{class:`line`,get children(){return n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  });`})}}),`
`,n(r.span,{class:`line`}),`
`,n(r.span,{class:`line`,get children(){return[n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` newData`}),n(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` upVersion.`}),n(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`process`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`({ version: `}),n(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, data: `}),n(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"hello world"`}),n(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` });`})]}}),`
`,n(r.span,{class:`line`,get children(){return n(r.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// => { version: 2, newData: "hello world" }`})}})]}})}}),`
`,n(r.h2,{children:`Why it exists`}),`
`,n(r.p,{get children(){return[`If you persist JSON in a database, local cache, config files, or synced documents, schemas inevitably change. `,n(r.strong,{children:`version-json`}),` gives you a clear, explicit place to keep migrations so you can accept older payloads without scattering compatibility logic throughout your codebase.`]}}),`
`,n(r.blockquote,{get children(){return[`
`,n(r.p,{children:`“We created version-json to simplify the process of managing evolving JSON data structures, making data migrations effortless and reliable.”
— The Sparkstone Team`}),`
`]}})]}function a(r={}){let{wrapper:a}={...e(),...r.components};return a?n(a,t(r,{get children(){return n(i,r)}})):i(r)}export{a as default,r as frontmatter};