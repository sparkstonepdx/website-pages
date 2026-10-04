import{n as e}from"./mdx-CFwy6W3y.js";import{K as t,Nt as n,ft as r,xt as i}from"./link-YbTYLWsA.js";var a=r(`<video src=/css.mp4 controls>`),o={order:12,title:`sparkstone/css`,audience:`developer`,created:`2025-12-18`,published:`2025-12-18`,thumbnail:null,blurb:`I Finally Built the CSS Framework I Wanted`,tags:[`css`],isOpensource:!0};function s(n){let r={a:`a`,code:`code`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e(),...n.components};return[i(r.p,{get children(){return[`I’ve been using `,i(r.a,{href:`https://picocss.com`,children:`Pico.css`}),` for years on a lot of projects. Liveframe.app is even built with it. But I’ve had to hack on it quite a bit to get adjustable per-user theming, and it ends up being kind of heavy when you include all the colors. I wanted something a little more dynamic, and I’ve finally built it.`]}}),`
`,i(r.p,{get children(){return[`It’s called `,i(r.code,{children:`@sparkstone/css`}),`, and it’s built for people like me: folks who want semantic HTML, zero bloat, and a color system that actually makes sense when you start tweaking things. (`,i(r.a,{href:`https://www.npmjs.com/package/@sparkstone/css`,children:`@sparkstone/css on npm`}),`)`]}}),`
`,i(r.p,{children:`This isn’t meant to compete with the big players. It’s not Tailwind. It’s not Bootstrap. It’s what I needed, and maybe you do too.`}),`
`,i(r.hr,{}),`
`,i(r.h2,{children:`Why I Love Pico.css (And What I Needed More Of)`}),`
`,i(r.p,{children:`I’ve used Pico on a dozen projects. I love the simplicity of it, and how you can just start building things and rarely even need to reach for classes to adjust stuff. Honestly, I tried just making a fork of it to start with — Pico has almost everything I want. But over time, I kept running into the same issues:`}),`
`,i(r.ul,{get children(){return[`
`,i(r.li,{children:`Wanting to use a specific color palette for special cases`}),`
`,i(r.li,{children:`Wanting to be able to let the user choose their own theming`}),`
`,i(r.li,{children:`Wishing I could just swap a base color and have everything update beautifully`}),`
`,i(r.li,{children:`Needing a few more classes… but not that many`}),`
`]}}),`
`,i(r.p,{children:`So after I realized that hacking on Pico was going to be harder than starting from a new foundation, I started designing.`}),`
`,t(a),`
`,i(r.h2,{get children(){return[`Enter `,i(r.code,{children:`@sparkstone/css`})]}}),`
`,i(r.p,{get children(){return[`This project is heavily inspired by Pico, but rebuilt from scratch around `,i(r.code,{children:`oklch()`}),`. If you’ve ever struggled to tune your colors across light and dark mode, or wanted a theme system that actually reflects your palette’s structure — you’ll get why this matters. After I got the color system working, I built a page and put it side by side with Pico to get it close — like I said, I still love Pico.`]}}),`
`,i(r.p,{children:`Here’s how it works:`}),`
`,i(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return i(r.code,{get children(){return[i(r.span,{class:`line`,get children(){return i(r.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`/* these are the defaults */`})}}),`
`,i(r.span,{class:`line`,get children(){return[i(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`:root`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}}),`
`,i(r.span,{class:`line`,get children(){return[i(r.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`  --color`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),i(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`rebeccapurple`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}}),`
`,i(r.span,{class:`line`,get children(){return[i(r.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`  --primary-color`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),i(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`blue`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}}),`
`,i(r.span,{class:`line`,get children(){return[i(r.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`  --accent-color`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),i(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`oklch`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(from `}),i(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`var`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),i(r.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`--color`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) l c `}),i(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`calc`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(h `}),i(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`+`}),i(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 180`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`));`})]}}),`
`,i(r.span,{class:`line`,get children(){return[i(r.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`  --error-color`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),i(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`maroon`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}}),`
`,i(r.span,{class:`line`,get children(){return i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}})]}})}}),`
`,i(r.p,{children:`That’s it. The rest cascades from there. Text colors, surface backgrounds, borders, shadows — all tuned based on perceptual lightness and chroma. You don’t need to invent a palette. You just pick a color, and everything adjusts accordingly.`}),`
`,i(r.hr,{}),`
`,i(r.h2,{children:`What You Get`}),`
`,i(r.ul,{get children(){return[`
`,i(r.li,{children:`✨ Light / dark mode that works by default (system-aware, but overrideable)`}),`
`,i(r.li,{get children(){return[`✨ Minimal classes (`,i(r.code,{children:`.card`}),`, `,i(r.code,{children:`.secondary`}),`, `,i(r.code,{children:`.ghost`}),`, etc.) when you need them (largely Pico-compatible)`]}}),`
`,i(r.li,{children:`✨ Fully native HTML elements styled with care: forms, dialogs, buttons, etc.`}),`
`,i(r.li,{children:`✨ A Sass layer with functions for color derivation (but you don’t need it)`}),`
`]}}),`
`,i(r.p,{get children(){return[`There’s `,i(r.strong,{children:`no runtime`}),`. No JS required for the styles. Just smart CSS.`]}}),`
`,i(r.hr,{}),`
`,i(r.h2,{children:`Try It Live`}),`
`,i(r.p,{children:`I put together a docs site using the framework itself:`}),`
`,i(r.p,{get children(){return i(r.a,{href:`https://sparkstonepdx.github.io/css/docs`,children:`https://sparkstonepdx.github.io/css/docs`})}}),`
`,i(r.p,{children:`The docs include:`}),`
`,i(r.ul,{get children(){return[`
`,i(r.li,{children:`Forms`}),`
`,i(r.li,{children:`Color Palettes`}),`
`,i(r.li,{children:`Containers & Dialogs`}),`
`]}}),`
`,i(r.p,{children:`Everything is copyable and live-styled with your chosen theme.`}),`
`,i(r.hr,{}),`
`,i(r.h2,{children:`Install It`}),`
`,i(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return i(r.code,{get children(){return i(r.span,{class:`line`,get children(){return[i(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`pnpm`}),i(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` add`}),i(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` @sparkstone/css`})]}})}})}}),`
`,i(r.p,{children:`Then import it however you like:`}),`
`,i(r.pre,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,get children(){return i(r.code,{get children(){return[i(r.span,{class:`line`,get children(){return i(r.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// scss (for full control)`})}}),`
`,i(r.span,{class:`line`,get children(){return[i(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`import`}),i(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '@sparkstone/css/src/theme.scss'`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}}),`
`,i(r.span,{class:`line`}),`
`,i(r.span,{class:`line`,get children(){return i(r.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// or plain css`})}}),`
`,i(r.span,{class:`line`,get children(){return[i(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`import`}),i(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '@sparkstone/css/theme.css'`}),i(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}})]}})}}),`
`,i(r.hr,{}),`
`,i(r.h2,{children:`I Made This For Me (But It’s for all of us)`}),`
`,i(r.p,{children:`I’ve spent years building local-first, minimal, durable tools, after outgrowing a decade of chasing the new shiny. Always reaching for libraries that almost worked the way I wanted. This one finally does.`}),`
`,i(r.p,{children:`If you’re like me, and you want your CSS to feel like it’s helping, and not just there — I think you might like it too.`}),`
`,i(r.p,{children:`— Adam
Founder @ Sparkstone`})]}function c(t={}){let{wrapper:r}={...e(),...t.components};return r?i(r,n(t,{get children(){return i(s,t)}})):s(t)}export{c as default,o as frontmatter};