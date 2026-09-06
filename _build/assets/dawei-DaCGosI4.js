import{M as i}from"./index-BGZVogms.js";import{b as n,m as a}from"./solid-B0ppho7y.js";import"./web-C2CdMWpm.js";const c={title:"dawei",layout:"project",created:"2021-01-16",published:"2021-01-16",thumbnail:null,blurb:"Minimal, flexible state management for React."};function r(t){const e={a:"a",br:"br",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...t.components};return[n(e.p,{get children(){return[n(e.strong,{children:"dawei"})," is a tiny but powerful state management library for React. Inspired by Zustand and Recoil, it provides a simple API that works without context—while still supporting deeply nested values, subscriptions, and scoped stores. It’s built for projects that want fine-grained control without boilerplate."]}}),`
`,n(e.p,{get children(){return n(e.strong,{children:"Links:"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.strong,{children:"GitHub:"})," ",n(e.a,{href:"https://github.com/odama626/dawei",children:"https://github.com/odama626/dawei"})]}}),`
`,n(e.li,{get children(){return[n(e.strong,{children:"npm:"})," ",n(e.a,{href:"https://www.npmjs.com/package/dawei",children:"https://www.npmjs.com/package/dawei"})]}}),`
`]}}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"What it does"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Minimal API"}),n(e.br,{}),`
No providers, no reducers, no boilerplate—just `,n(e.code,{children:"createStore()"})," and ",n(e.code,{children:"store.use()"}),"."]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Deep state access"}),n(e.br,{}),`
Read and write nested keys like `,n(e.code,{children:"company.name"}),", even if parts of the path don’t exist yet."]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Global reactivity"}),n(e.br,{}),`
Components stay in sync automatically. No selector ceremony or memo gymnastics.`]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Direct control"}),n(e.br,{}),`
Update from anywhere with `,n(e.code,{children:"store.set()"})," and listen with ",n(e.code,{children:"store.subscribe()"}),"."]}}),`
`]}}),`
`]}}),`
`,n(e.h2,{children:"Installation"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",get children(){return n(e.code,{get children(){return n(e.span,{className:"line",get children(){return[n(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"npm"}),n(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" install"}),n(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" dawei"})]}})}})}}),`
`,n(e.pre,{get children(){return n(e.code,{children:`
or

\`\`\`bash
yarn add dawei
\`\`\`

## Usage

\`\`\`tsx
import { createStore } from "dawei";

const formStore = createStore({});

const Input = () => {
  const [name, setName] = formStore.use("name");
  const [email, setEmail] = formStore.use("email");
  const [companyName, setCompanyName] = formStore.use("company.name");

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
    </form>
  );
};

function randomBitOfApi() {
  formStore.set({ saved: true });
}

const unsubscribe = formStore.subscribe((state) => {
  console.log("formStore changed", state);
});
\`\`\`

## Notes

- **Concurrent React:** use **dawei >= 0.14.0**. Earlier versions can fail due to how \`forceUpdate\` was implemented.
- The API has stabilized and is expected to avoid breaking changes going forward—version \`1.0.0\` would make sense once that stability has held for a while.

## Why it exists

React state patterns often drift toward either heavy ceremony (context + reducers) or brittle homegrown stores. **dawei** aims for the sweet spot: a tiny API with practical ergonomics, predictable behavior, and enough power to model real app state without bringing in a whole framework.

> “Dawei gives us the store behavior we want — without the noise.”
> — The Sparkstone Team
`})}})]}function h(t={}){const{wrapper:e}={...i(),...t.components};return e?n(e,a(t,{get children(){return n(r,t)}})):r(t)}export{h as default,c as frontmatter};
