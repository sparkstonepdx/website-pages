import{n as e}from"./mdx-MJVE5zWE.js";import{F as t,et as n,lt as r,yt as i}from"./link-DExnhhic.js";var a=n(`<div id=my-cal-inline-free-20-minute-consultation style=width:100%;height:100%;overflow:scroll>`),o=n(`<script type=text/javascript>

(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", "free-20-minute-consultation", {origin:"https://app.cal.com"});

Cal.config = Cal.config || {};

Cal.config.forwardQueryParams = true;

Cal.ns["free-20-minute-consultation"]("inline", {

  elementOrSelector:"#my-cal-inline-free-20-minute-consultation",

  config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"},

  calLink: "sparks/free-20-minute-consultation",

});

Cal.ns["free-20-minute-consultation"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});

`),s={route:`/contact`,heading:`Contact`,intro:``,seo:{title:``,description:``,image:``,keywords:[]}};function c(e){return[t(a),`
`,t(o)]}function l(t={}){let{wrapper:n}={...e(),...t.components};return n?r(n,i(t,{get children(){return r(c,t)}})):c(t)}export{l as default,s as frontmatter};