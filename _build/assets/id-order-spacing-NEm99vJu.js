import{M as i}from"./index-BGZVogms.js";import{b as n,m as s}from"./solid-B0ppho7y.js";import"./web-C2CdMWpm.js";const l={title:"id-order-spacing",layout:"project",created:"2025-03-24",published:"2025-06-24",thumbnail:null,blurb:"Minimal, collision-safe ordering for sortable lists."};function t(r){const e={a:"a",br:"br",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...r.components};return[n(e.p,{get children(){return[n(e.strong,{children:"id-order-spacing"})," is a lightweight utility for managing item order when inserting or moving elements within a sorted array. It calculates stable order values and applies the smallest possible adjustments to avoid collisions—making it ideal for database-backed lists."]}}),`
`,n(e.p,{get children(){return n(e.strong,{children:"Links:"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.strong,{children:"GitHub:"})," ",n(e.a,{href:"https://github.com/odama626/id-order-spacing",children:"https://github.com/odama626/id-order-spacing"})]}}),`
`,n(e.li,{get children(){return[n(e.strong,{children:"npm:"})," ",n(e.a,{href:"https://www.npmjs.com/package/@sparkstone/id-order-spacing",children:"https://www.npmjs.com/package/@sparkstone/id-order-spacing"})]}}),`
`]}}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"What it does"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Collision-safe inserts"}),n(e.br,{}),`
Calculate a new order value when inserting an item at a specific index—or appending to the end.`]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Stable move operations"}),n(e.br,{}),`
Move items within a list while minimizing changes to surrounding items.`]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Minimal database writes"}),n(e.br,{}),`
Only items that require order adjustments are returned, reducing update churn.`]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Configurable spacing"}),n(e.br,{}),`
Customize spacing behavior using exposed `,n(e.code,{children:"step"})," and ",n(e.code,{children:"minimumStep"})," values."]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[n(e.strong,{children:"Batch-friendly updates"}),n(e.br,{}),`
Includes helpers for batching database writes efficiently.`]}}),`
`]}}),`
`]}}),`
`,n(e.h2,{children:"Installation"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",get children(){return n(e.code,{get children(){return n(e.span,{className:"line",get children(){return[n(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"pnpm"}),n(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" install"}),n(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" @sparkstone/id-order-spacing"})]}})}})}}),`
`,n(e.pre,{get children(){return n(e.code,{children:`
or

\`\`\`bash
npm install @sparkstone/id-order-spacing
\`\`\`

## Basic usage

### Inserting items

\`\`\`ts
import { calculateInsert } from "@sparkstone/id-order-spacing";

const items = [
  { id: "a", order: 100 },
  { id: "b", order: 200 },
  { id: "c", order: 300 },
];

const newItem = { id: "d", order: 0 };

const result = calculateInsert(items, newItem);

// Insert result.item into the database
await db.create(result.item);

// Apply only the required order updates
for (const [id, order] of result.changes.entries()) {
  await db.update(id, { order });
}
\`\`\`

### Moving items

\`\`\`ts
import {
  calculateUpdateFromMove,
  batchIterator,
} from "@sparkstone/id-order-spacing";

const result = calculateUpdateFromMove(items, fromIndex, toIndex);

for (const subset of batchIterator(result.changes.entries(), 10)) {
  const batch = db.createBatch();
  for (const [id, order] of subset) {
    batch.update(id, { order });
  }
  await batch.send();
}
\`\`\`

## Configuration

Advanced spacing control is available via exported constants:

\`\`\`ts
import { step, minimumStep } from "@sparkstone/id-order-spacing";

console.log(step); // Default spacing step (e.g. 100)
console.log(minimumStep); // Minimum gap before rebalance
\`\`\`

These values can also be overridden per operation.

## Why it exists

Sortable lists are deceptively tricky when backed by a database—especially when items are frequently reordered. **id-order-spacing** provides a predictable, low-churn approach to ordering that scales well over time, avoids full-list rebalances, and keeps write operations to a minimum.

It’s designed to be small, explicit, and easy to reason about—whether you’re building task lists, kanban boards, or drag-and-drop UIs.
`})}})]}function c(r={}){const{wrapper:e}={...i(),...r.components};return e?n(e,s(r,{get children(){return n(t,r)}})):t(r)}export{c as default,l as frontmatter};
