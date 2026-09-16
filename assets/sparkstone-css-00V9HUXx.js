import{n as e}from"./mdx-DBYvEVUD.js";import{F as t,et as n,lt as r,yt as i}from"./link-BlaBDQYy.js";var a=n(`<video src=/css.mp4 controls>`),o={order:12,title:`sparkstone/css`,audience:`developer`,created:`2025-12-18`,published:`2025-12-18`,thumbnail:null,blurb:`I Finally Built the CSS Framework I Wanted`,tags:[`css`],isOpensource:!0};function s(n){let i={a:`a`,code:`code`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e(),...n.components};return[r(i.p,{get children(){return[`I’ve been using `,r(i.a,{href:`https://picocss.com`,children:`Pico.css`}),` for years on a lot of projects. Liveframe.app is even built with it. But I’ve had to hack on it quite a bit to get adjustable per-user theming, and it ends up being kind of heavy when you include all the colors. I wanted something a little more dynamic, and I’ve finally built it.`]}}),`
`,r(i.p,{get children(){return[`It’s called `,r(i.code,{children:`@sparkstone/css`}),`, and it’s built for people like me: folks who want semantic HTML, zero bloat, and a color system that actually makes sense when you start tweaking things. (`,r(i.a,{href:`https://www.npmjs.com/package/@sparkstone/css`,children:`@sparkstone/css on npm`}),`)`]}}),`
`,r(i.p,{children:`This isn’t meant to compete with the big players. It’s not Tailwind. It’s not Bootstrap. It’s what I needed, and maybe you do too.`}),`
`,r(i.hr,{}),`
`,r(i.h2,{children:`Why I Love Pico.css (And What I Needed More Of)`}),`
`,r(i.p,{children:`I’ve used Pico on a dozen projects. I love the simplicity of it, and how you can just start building things and rarely even need to reach for classes to adjust stuff. Honestly, I tried just making a fork of it to start with — Pico has almost everything I want. But over time, I kept running into the same issues:`}),`
`,r(i.ul,{get children(){return[`
`,r(i.li,{children:`Wanting to use a specific color palette for special cases`}),`
`,r(i.li,{children:`Wanting to be able to let the user choose their own theming`}),`
`,r(i.li,{children:`Wishing I could just swap a base color and have everything update beautifully`}),`
`,r(i.li,{children:`Needing a few more classes… but not that many`}),`
`]}}),`
`,r(i.p,{children:`So after I realized that hacking on Pico was going to be harder than starting from a new foundation, I started designing.`}),`
`,t(a),`
`,r(i.h2,{get children(){return[`Enter `,r(i.code,{children:`@sparkstone/css`})]}}),`
`,r(i.p,{get children(){return[`This project is heavily inspired by Pico, but rebuilt from scratch around `,r(i.code,{children:`oklch()`}),`. If you’ve ever struggled to tune your colors across light and dark mode, or wanted a theme system that actually reflects your palette’s structure — you’ll get why this matters. After I got the color system working, I built a page and put it side by side with Pico to get it close — like I said, I still love Pico.`]}}),`
`,r(i.p,{children:`Here’s how it works:`}),`
`,r(i.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return r(i.code,{get children(){return[r(i.span,{class:`line`,get children(){return r(i.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`/* these are the defaults */`})}}),`
`,r(i.span,{class:`line`,get children(){return[r(i.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`:root`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}}),`
`,r(i.span,{class:`line`,get children(){return[r(i.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`  --color`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),r(i.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`rebeccapurple`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}}),`
`,r(i.span,{class:`line`,get children(){return[r(i.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`  --primary-color`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),r(i.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`blue`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}}),`
`,r(i.span,{class:`line`,get children(){return[r(i.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`  --accent-color`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),r(i.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`oklch`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(from `}),r(i.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`var`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),r(i.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`--color`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) l c `}),r(i.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`calc`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(h `}),r(i.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`+`}),r(i.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 180`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`));`})]}}),`
`,r(i.span,{class:`line`,get children(){return[r(i.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`  --error-color`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),r(i.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`maroon`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}}),`
`,r(i.span,{class:`line`,get children(){return r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}})]}})}}),`
`,r(i.p,{children:`That’s it. The rest cascades from there. Text colors, surface backgrounds, borders, shadows — all tuned based on perceptual lightness and chroma. You don’t need to invent a palette. You just pick a color, and everything adjusts accordingly.`}),`
`,r(i.hr,{}),`
`,r(i.h2,{children:`What You Get`}),`
`,r(i.ul,{get children(){return[`
`,r(i.li,{children:`✨ Light / dark mode that works by default (system-aware, but overrideable)`}),`
`,r(i.li,{get children(){return[`✨ Minimal classes (`,r(i.code,{children:`.card`}),`, `,r(i.code,{children:`.secondary`}),`, `,r(i.code,{children:`.ghost`}),`, etc.) when you need them (largely Pico-compatible)`]}}),`
`,r(i.li,{children:`✨ Fully native HTML elements styled with care: forms, dialogs, buttons, etc.`}),`
`,r(i.li,{children:`✨ A Sass layer with functions for color derivation (but you don’t need it)`}),`
`]}}),`
`,r(i.p,{get children(){return[`There’s `,r(i.strong,{children:`no runtime`}),`. No JS required for the styles. Just smart CSS.`]}}),`
`,r(i.hr,{}),`
`,r(i.h2,{children:`Try It Live`}),`
`,r(i.p,{children:`I put together a docs site using the framework itself:`}),`
`,r(i.p,{get children(){return r(i.a,{href:`https://sparkstonepdx.github.io/css/docs`,children:`https://sparkstonepdx.github.io/css/docs`})}}),`
`,r(i.p,{children:`The docs include:`}),`
`,r(i.ul,{get children(){return[`
`,r(i.li,{children:`Forms`}),`
`,r(i.li,{children:`Color Palettes`}),`
`,r(i.li,{children:`Containers & Dialogs`}),`
`]}}),`
`,r(i.p,{children:`Everything is copyable and live-styled with your chosen theme.`}),`
`,r(i.hr,{}),`
`,r(i.h2,{children:`Install It`}),`
`,r(i.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return r(i.code,{get children(){return r(i.span,{class:`line`,get children(){return[r(i.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`pnpm`}),r(i.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` add`}),r(i.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` @sparkstone/css`})]}})}})}}),`
`,r(i.p,{children:`Then import it however you like:`}),`
`,r(i.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return r(i.code,{get children(){return[r(i.span,{class:`line`,get children(){return r(i.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// scss (for full control)`})}}),`
`,r(i.span,{class:`line`,get children(){return[r(i.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`import`}),r(i.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '@sparkstone/css/src/theme.scss'`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}}),`
`,r(i.span,{class:`line`}),`
`,r(i.span,{class:`line`,get children(){return r(i.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// or plain css`})}}),`
`,r(i.span,{class:`line`,get children(){return[r(i.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`import`}),r(i.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '@sparkstone/css/theme.css'`}),r(i.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}})]}})}}),`
`,r(i.hr,{}),`
`,r(i.h2,{children:`I Made This For Me (But It’s for all of us)`}),`
`,r(i.p,{children:`I’ve spent years building local-first, minimal, durable tools, after outgrowing a decade of chasing the new shiny. Always reaching for libraries that almost worked the way I wanted. This one finally does.`}),`
`,r(i.p,{children:`If you’re like me, and you want your CSS to feel like it’s helping, and not just there — I think you might like it too.`}),`
`,r(i.p,{children:`— Adam
Founder @ Sparkstone`})]}function c(t={}){let{wrapper:n}={...e(),...t.components};return n?r(n,i(t,{get children(){return r(s,t)}})):s(t)}export{c as default,o as frontmatter};