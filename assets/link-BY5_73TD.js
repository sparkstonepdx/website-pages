var e=class extends Error{source;constructor(e){let t=Error,n=t.stackTraceLimit;n!==void 0&&(t.stackTraceLimit=0),super(),n!==void 0&&(t.stackTraceLimit=n),this.source=e}},t=class extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}};function n(e){return e instanceof t?e.cause:e}var r=class extends Error{constructor(){super(``)}},i=class extends Error{constructor(){super(``)}},a=1024,o=2048,s=4096,c=1024,l=2048,u=4096,d=16384,f=1<<17,p=1<<18,m=1<<19,h=1<<21,g={},_={},ee={};function v(e){return e===ee?void 0:e}var te=typeof Proxy==`function`,ne={},re=Symbol(`refresh`),ie=new WeakMap,y=new Set;function ae(e){let t=ie.get(e);if(t)return b(t);let n=(e.o?.Gt)?.o?.Oe,r=n?b(n):null;return t={nn:e,he:new Set,tn:[[],[]],rn:null,ge:C,an:r},ie.set(e,t),y.add(t),oe(e.o?.Le,t),oe(e.o?.Qe,t),t}function oe(e,t){if(!e)return;let n=ie.get(e);if(!n)return;let r=b(n);r!==t&&r.nn===e&&!r.an&&(r.an=t)}function b(e){for(;e.rn;)e=e.rn;return e}function se(e){if(!e.ge)return!1;for(let t of e.he)if($e(t)!==null)return!0;return!1}function ce(e,t){if(e=b(e),t=b(t),e===t)return e;t.rn=e;for(let n of t.he)e.he.add(n);return t.he.clear(),e.tn[0].push(...t.tn[0]),e.tn[1].push(...t.tn[1]),t.tn[0].length=0,t.tn[1].length=0,e}function le(e){let t=e.o?.Oe;if(!t)return;let n=b(t);if(y.has(n))return n;e.o!==null&&(e.o.Oe=void 0)}function ue(e){if(de(e)&&e.o?.Ot){let t=R(e).Ot=k(e.o?.Ot);if(t.ft!==!0)return t;e.o!==null&&(e.o.Ot=null)}return le(e)?.ge??e.ge}function de(e){let t=e.o;return t!==null&&t.be!==void 0&&t.be!==g}function fe(e,t){let n=b(t),r=e.o?.Oe;if(r){if(r.rn){R(e).Oe=t,e.T|=c;return}let i=b(r);if(y.has(i)){i!==n&&!de(e)&&(n.an&&b(n.an)===i?(R(e).Oe=t,e.T|=c):i.an&&b(i.an)===n||ce(n,i));return}}R(e).Oe=t,e.T|=c}var pe=new Set,x={eE:Array(2e3).fill(void 0),tE:!1,Ke:0,EE:0},me={eE:Array(2e3).fill(void 0),tE:!1,Ke:0,EE:0};function he(e){e.ie&16?e.ie&=-12:(ot(e,me),e.ie&=-4)}var S=0,C=null,ge=!1,_e=!1,ve=!1,ye=0,w=!1,be=0;function xe(){be++}function Se(){be--}var Ce=new Set;function we(e){let t=e.m;return pe.size===0&&y.size===0&&e.Xt.length===0&&t.it.length===0&&t.A.length===0&&t.En.size===0&&Ce.size===0}function Te(){if(Ce.size!==0)for(let e of Ce){if(e.u!==null){Ce.delete(e);continue}e.Ge===g&&(e.o?.be===void 0||e.o?.be===g)&&(e.o?.t||(Ce.delete(e),e.T&262144?gn(e):e.o?.Ct?.()))}}function T(e){w=e}function Ee(){return{_e:S,$t:[],Re:new Map,it:[],A:[],En:new Set,ue:[],ei:{ti:[[],[]],Xt:[]},ft:!1,lt:new Set,Et:null}}function De(e,t){t.ft=e,e.ue.push(...t.ue);for(let n of y)n.ge===t&&(n.ge=e);t.it.length&&(e.it.push(...t.it),t.it.length=0),t.A.length&&(e.A.push(...t.A),t.A.length=0);for(let n of t.En)e.En.add(n);for(let[n,r]of t.Re){let t=e.Re.get(n);t||e.Re.set(n,t=new Set);for(let e of r)t.add(e)}for(let n of t.lt)e.lt.add(n);t.Et&&(e.Et??=[]).push(...t.Et)}function E(){if(_e){ke();return}ge||(ge=!0,!ye&&!O.sn&&!w&&queueMicrotask(Ye))}function Oe(e){if(_e)return;_e=!0;let t=`[REACTIVITY_HALTED]`,n=e!==void 0&&globalThis.reportError;n||e===void 0?console.error(t):console.error(t,e),n&&n(e)}function ke(){ve||(ve=!0,console.error(`[REACTIVITY_HALTED]`))}var Ae=0,je=class{qe=null;ti=[[],[]];Xt=[];ii=0;created=S;addChild(e){this.Xt.push(e),e.qe=this}removeChild(e){let t=this.Xt.indexOf(e);t>=0&&(this.Xt.splice(t,1),e.qe=null)}notify(e,t,n,r){return this.qe?this.qe.notify(e,t,n,r):!1}run(e){if(this.ti[e-1].length){let t=this.ti[e-1];this.ti[e-1]=[],Xe(t,e)}let t=this.Xt,n=++Ae;for(let r=0;r<t.length;){let i=t[r];if(i.ii!==n&&(i.ii=n,i.run?.(e),t[r]!==i)){r=0;continue}r++}}enqueue(e,t){e&&(L?b(L).tn[e-1].push(t):this.ti[e-1].push(t)),E()}stashQueues(e){e.ti[0].push(...this.ti[0]),e.ti[1].push(...this.ti[1]),this.ti=[[],[]];for(let t=0;t<this.Xt.length;t++){let n=this.Xt[t],r=e.Xt[t];r||(r={ti:[[],[]],Xt:[]},e.Xt[t]=r),n.stashQueues(r)}}restoreQueues(e){this.ti[0].push(...e.ti[0]),this.ti[1].push(...e.ti[1]);for(let t=0;t<e.Xt.length;t++){let n=e.Xt[t],r=this.Xt[t];r&&r.restoreQueues(n)}}},D=class e extends je{sn=!1;m=Ee();static Fe;static We;static ct;static ni=null;static p=null;static G=null;static M=null;static N=null;static kt=null;static Lt=null;static pe=null;static Ne=null;static ke=null;static un=null;static wt=null;static Wt=null;static jt=null;static st=null;static k=null;static ri=null;static si=null;static Bt=null;static fn=null;static cn=null;static dn=null;static In=null;static ln=null;static Zt=null;static qt=null;static Mt=null;static Kt=null;static nt=null;static ot=null;static Qt=null;static ut=null;static ye=null;static Yt=null;static zt=null;static Nn=null;flush(){if(!this.sn){if(C===null&&x.EE<x.Ke&&this.ti[0].length===0&&this.ti[1].length===0&&this.Xt.length===0&&we(this)){this.sn=!0;try{At(),Ue()}finally{this.sn=!1}S++,ge=x.EE>=x.Ke||this.ti[0].length!==0||this.ti[1].length!==0||this.m.$t.length!==0;return}this.sn=!0;try{if(At(),lt(x,e.Fe),C){if(!Qe(C)){let t=C;lt(me,this.m===t?he:e.Fe),this.m===t&&(Je=this.m=Ee()),y.size&&(e.In(1),e.In(2)),this.stashQueues(t.ei),S++,ge=x.EE>=x.Ke||this.m.$t.length>0,qe(t.$t),C=null,We(null,!0);return}let t=C,n=this.m;if(n!==t&&n.$t.push(...t.$t),this.restoreQueues(t.ei),pe.delete(t),C=null,qe(n.$t),We(t),n===t){let e=Ee();e.$t=n.$t,e.it=n.it,e.A=n.A,e.En=n.En,Je=this.m=e}}else we(this)?(Ue(),x.EE>=x.Ke&&(lt(x,e.Fe),Ue())):(pe.size&&lt(me,e.Fe),We());S++,ge=x.EE>=x.Ke||C!==null,y.size&&e.In(1),this.run(1),y.size&&e.In(2),this.run(2)}finally{this.sn=!1}}}notify(t,n,r,i){if(n&1){if(r&1){let n=i??t.o?._;if(n?.l)return!0;if(n&&(!C&&!t.ge&&Je.$t.length&&this.initTransition(),C)){let r=n.source,i=C.Re.get(r);i||C.Re.set(r,i=new Set);let a=i.size;i.add(t),i.size!==a&&(E(),e.si?.(C))}}return!0}return!1}initTransition(e){if(e&&(e=k(e),e.ft===!0||e===C)||!e&&C&&C._e===S)return;if(!C)C=e??Ee();else if(e){let t=C;De(e,t),this.restoreQueues(t.ei),pe.delete(t),C=e}pe.add(C),C._e=S;let t=this.m;if(t!==C){for(let e=0;e<t.$t.length;e++){let n=t.$t[e];n.ge=C,C.$t.push(n)}for(let e=0;e<t.it.length;e++){let n=t.it[e];n.ge=C,C.it.push(n)}t.A.length&&C.A.push(...t.A);for(let e of t.En)C.En.add(e);if(t.lt.size){for(let e of t.lt)C.lt.add(e);t.lt.clear()}Je=this.m=C}for(let e of y)e.ge||=C;E()}};function Me(e){Je.$t.push(e)}var Ne=!1,Pe=0;function Fe(){Pe++}var Ie=0;function Le(e){let t=Ie;return Ie=e,t}function Re(e,t=!1){e.At=Pe;let n=e.T,r=(n&1024?e.o?.Oe:void 0)||L,i=!!(n&512)&&e.o?.ze!==void 0,a=Ne;for(let n=e.u;n!==null;n=n.Te){let e=n.Ie;if(a&&(e.ie&=~o),e.ie&4&&n.yt===e.tt&&n!==e.et&&(e.ie|=s),i&&e.T&8){e.ie|=256;continue}t&&r?(e.ie|=128,fe(e,r)):t&&(e.ie|=128,e.o&&(e.o.Oe=void 0)),nt(e)}}function ze(e){let t=e;if(!t.oe){e.Ge!==g&&(e.me=e.Ge,e.Ge=g),e.T&256&&D.un(e);return}e.Ge!==g&&(e.me=e.Ge,e.Ge=g,e.Ce&&e.Ce!==3&&(e.He=!0),e.o&&(e.o.Ue=!1)),t.Ae=!1,t.ie&=~a,t.S&1?e.T|=h:t.S&=-5,t.o!=null&&(t.o.Xe!==null||t.o.Je!==null)&&D.We(t,!1,!0),e.T&256&&D.un(e)}var Be=null;function Ve(e){Be=e}var He=[];function Ue(){let e=Je.$t;for(let t=0;t<e.length;t++){let n=e[t];ze(n),n.ge=null,n.T&131072&&(n.T&=~f,He.push(n))}e.length=0,Be?.()}function We(e=null,t=!1){let n=Je,r=!t;r&&Ue(),!t&&O.Xt.length&&Ge(O);let i=e?.Et,a=r&&(e??n).it.length!==0;if(i&&!a)for(let e of i)e.ie&64||nt(e);let o=x.EE>=x.Ke;if(o&&lt(x,D.Fe),r){if(Je!==n){if(e===null||e===n)return}else o&&Ue();let t=e??n;if(t.it.length&&D.fn(t.it),i&&a){for(let e of i)e.ie&64||nt(e);E()}if(t.lt.size){for(let e of t.lt)e.ie&64||nt(e);t.lt.clear(),E()}if(t.A.length&&(D.G(t.A),O.Xt.length&&Ge(O)),t.En.size&&D.ni(t.En,e),He.length!==0){for(;He.length;)Re(He.pop());x.EE>=x.Ke&&(lt(x,D.Fe),Ue())}Te(),y.size&&D.dn(e)}}function Ge(e){for(let t of e.Xt)t.se?.(),Ge(t)}var Ke=0;function qe(e){for(let t=0;t<e.length;t++)e[t].ge=C}var O=new D,Je=O.m;function Ye(e){if(be>0)return e?e():void 0;if(e){ye++;try{return e()}finally{try{Ye()}finally{ye--}}}if(!O.sn&&!_e){for(;ge||C;)O.flush();Ie=0}}function Xe(e,t){for(let n=0;n<e.length;n++)e[n](t)}function Ze(t,n){if(t.ie&96)return!1;if(t.o?.le?.has(n))return!0;for(let e=t.fe;e;e=e.ae){let t=e.Se;for(;t;){if(t===n||t.ce===n)return!0;t=t.o?.Gt}}return!!(t.S&1&&t.o?._ instanceof e&&t.o?._.source===n)}function Qe(e){if(e.ft)return!0;if(e.ue.length)return!1;let t=!0;for(let[n,r]of e.Re){let i=!1;for(let e of r){if(Ze(e,n)){i=!0;break}r.delete(e)}if(!i)e.Re.delete(n);else if(n.S&1&&n.o?._?.source===n){t=!1;break}}return t&&D.cn?.(e)&&(t=!1),t&&(e.ft=!0),t}function k(e){for(;e.ft&&typeof e.ft==`object`;)e=e.ft;return e}function $e(e){for(let t of pe)if(t.Re.has(e))return t;return null}function et(e,t){let n=C;try{return C=k(e),t()}finally{C=n}}function tt(e){return e.ie&32?me:x}function nt(e){let t=tt(e);t.Ke>e.Be&&(t.Ke=e.Be),it(e,t)}function rt(e,t){let n=(e.qe?.gt?e.qe.bt?.Be:e.qe?.Be)??-1;n>=e.Be&&(e.Be=n+1);let r=e.Be,i=t.eE[r];if(i===void 0)t.eE[r]=e;else{let t=i.Tt;t.Nt=e,e.Tt=t,i.Tt=e}r>t.EE&&(t.EE=r)}function it(e,t){let n=e.ie;n&1036||(n&1?e.ie=n&-4|10:(e.ie=n|8,t.tE&&ct(e)),n&16||rt(e,t))}function at(e,t){let n=e.ie;n&1052||(e.ie=n|16,rt(e,t))}function ot(e,t){let n=e.ie;if(!(n&24))return;e.ie=n&-25;let r=e.Be;if(e.Tt===e)t.eE[r]=void 0;else{let n=e.Nt,i=t.eE[r],a=n??i;e===i?t.eE[r]=n:e.Tt.Nt=n,a.Tt=e.Tt}e.Tt=e,e.Nt=void 0}function st(e){if(!e.tE){e.tE=!0;for(let t=0;t<=e.EE;t++)for(let n=e.eE[t];n!==void 0;n=n.Nt)n.ie&8&&ct(n)}}function ct(e,t=2){let n=e.ie;if(!((n&3)>=t)){e.ie=n&-4|t;for(let t=e.u;t!==null;t=t.Te)ct(t.Ie,1);if(e.T&4096)for(let t=e.o.i;t!==null;t=t.Ee)for(let e=t.u;e!==null;e=e.Te)ct(e.Ie,1)}}function lt(e,t){for(e.tE=!1,e.Ke=0;e.Ke<=e.EE;e.Ke++){let n=e.eE[e.Ke];for(;n!==void 0;)n.ie&8?t(n):ut(n,e),n=e.eE[e.Ke]}e.EE=0}function ut(e,t){ot(e,t);let n=e.Be;for(let t=e.fe;t;t=t.ae){let e=t.Se,r=e.ce||e;r.oe&&r.Be>=n&&(n=r.Be+1)}if(e.Be!==n){e.Be=n;for(let t=e.u;t!==null;t=t.Te)at(t.Ie,tt(t.Ie))}}var dt={};function ft(e){let t=e.Ye;for(;t;){let e=t.ie;t.ie=e|32,e&24&&(ot(t,e&32?me:x),e&8?it(t,me):at(t,me)),ft(t),t=t.Ze}}function pt(e,t=!1,n){let r=e.ie;if(r&64)return;if(t){e.ie=r|64;let t=e;(t.o?.Le||t.o?.Qe)&&D.un(t)}t&&e.oe&&e.o!==null&&(e.o.Pe=null);let i=n?e.o?.Xe??null:e.Ye;for(;i;){let e=i.Ze,t=i;t.T&=-33,ot(t,tt(t)),Dt(t),pt(i,!0),i=e}if(n?e.o!==null&&(e.o.Xe=null):(e.Ye=null,e.$e=0),t&&!n&&!(r&32)&&e.qe!==null&&!(e.qe.ie&64)){let t=e.St,n=e.Ze;t===null?e.qe.Ye=n:t.Ze=n,n!==null&&(n.St=t),e.St=null}if(mt(e,n),t&&e.Ht){let t=e.Ht;e.Ht=void 0,t()}}function mt(e,t){let n=t?e.o?.Je:e.we;if(n){if(Array.isArray(n))for(let e=0;e<n.length;e++){let t=n[e];t.call(t)}else n.call(n);t?e.o!==null&&(e.o.Je=null):e.we=null}}function ht(e,t){let n=e;for(;n.T&4&&n.qe;)n=n.qe;if(n.id!=null)return yt(n.id,t?n.$e++:n.$e);throw Error(``)}function gt(e){return ht(e,!0)}function _t(e,t,n){return e?.id??(t?n?.id:n?.id==null?void 0:gt(n))}function vt(e){return ht(e,!1)}function yt(e,t){let n=t.toString(36),r=n.length-1;return e+(r?String.fromCharCode(64+r):``)+n}function A(){return P||F?dt:M?I:null}function j(){return I}function bt(e){return I&&(I.we?Array.isArray(I.we)?I.we.push(e):I.we=[I.we,e]:I.we=e),e}function xt(e){return!!(e.ie&96)}function St(e=!0){pt(this,e)}function Ct(e){let t=I,n=e?.transparent??!1,r={id:_t(e,n,t),T:n?4:0,gt:!0,bt:t?.gt?t.bt:t,Ye:null,Ze:null,St:null,we:null,C:t?.C??O,xe:t?.xe||ne,$e:0,o:null,qe:t,dispose:St};if(t){let e=t.Ye;e===null?t.Ye=r:(r.Ze=e,e.St=r,t.Ye=r)}return r}function wt(e,t){let n=Ct(t);return H(n,()=>e(()=>n.dispose()))}function Tt(e){let t=e.Se,n=e.ae,r=e.Te,i=e.en;if(r===null?t.dt=i:r.en=i,i!==null)i.Te=r;else if(t.u=r,r===null){t.T&262144?gn(t):t.o?.Ct?.();let e=t;e.oe&&e.T&32&&!(e.ie&32)&&!(e.S&1)&&Ot(e)}return n}function Et(e){let t=e.et,n=t===null?e.fe:t.ae;if(n!==null){do n=Tt(n);while(n!==null);t===null?e.fe=null:t.ae=null}}function Dt(e){let t=e.fe;if(t){do t=Tt(t);while(t!==null);e.fe=null,e.et=null}}function Ot(e){ot(e,tt(e)),Dt(e),pt(e,!0)}var kt=new Set;function At(){if(kt.size!==0){for(let e of kt)!e.u&&e.T&32&&!(e.S&1)&&!(e.ie&96)&&Ot(e);kt.clear()}}function jt(e,t,n=!1){let r=t.et;if(r!==null&&r.Se===e){r.je&&=n;return}let i=null,a=t.ie&4;if(a&&(i=r===null?t.fe:r.ae,i!==null&&i.Se===e)){i.yt=t.tt,t.et=i,i.je=n;return}let o=e.dt;if(o!==null&&o.Ie===t&&(!a||o.yt===t.tt)){a?o.je&&=n:o.je=n;return}let s=t.et=e.dt={Se:e,Ie:t,ae:i,en:o,Te:null,yt:t.tt,je:n};r===null?t.fe=s:r.ae=s,o===null?e.u=s:o.Te=s,Fe()}function Mt(e,t){return!e.o?.le?.has(t)&&((R(e).le??=new Set).add(t),!0)}function Nt(e,t){let n=e.o?.le;return n?.delete(t)?(n.size||(e.o.le=void 0),!0):!1}function Pt(e){e.o!==null&&(e.o.le=void 0)}function Ft(e,t){for(let n=e.fe;n;n=n.ae){let e=n.Se.ce||n.Se;if(e===t||e.o?.le?.has(t))return!0}return!1}function It(e,t){R(e).de=!0,t.source&&Mt(e,t.source),e.S&2||Lt(e,t.source,t)}function Lt(t,n,r){if(!n){t.o!==null&&(t.o._=null);return}if(r instanceof e&&r.source===n){R(t)._=r;return}let i=t.o?._;(!(i instanceof e)||i.source!==n)&&(R(t)._=new e(n))}function Rt(e,t){for(let n=e.u;n!==null;n=n.Te)t(n.Ie,n);for(let n=e.o?.i??null;n!==null;n=n.Ee)for(let e=n.u;e!==null;e=e.Te)t(e.Ie,e)}function zt(e){e.oe&&e.T&32&&!e.u&&!(e.ie&32)&&!(e.S&1)&&Ot(e)}function Bt(e){let t,n=new Set,r=e=>{n.has(e)||(n.add(e),!e.u&&e.T&32&&(t??=[]).push(e),Rt(e,r))};if(Rt(e,r),t)for(let e of t)zt(e)}function Vt(e,t){let n=!1,r=new Set,i=e=>{r.has(e)||(r.add(e),e.o?._===t&&(nt(e),n=!0),Rt(e,i))};Rt(e,i),n&&E()}function Ht(e,t=e){Nt(e,t);let n=!1,r,i=new Set,a=D.Ne,o=s=>{if(i.has(s)||t!==e&&Ft(s,t)||!Nt(s,t))return;i.add(s),s._e=S;let c=s.o?.le?.values().next().value,l=s.S&2;c?(l||Lt(s,c),a?.(s)):(s.S&=-2,l||Lt(s),a?.(s),s.o?.de&&(nt(s),n=!0),s.o!==null&&(s.o.de=!1),!s.u&&s.T&32&&(r??=[]).push(s)),Rt(s,o)};if(Rt(e,o),r)for(let e of r)zt(e);n&&E()}function Ut(e){return typeof e==`object`&&!!e&&typeof e.then==`function`}function Wt(e){let t=e.o?.De;t!=null&&(e.o.De=null,t())}function Gt(t,n,r){let i=!1,a=!1;if(typeof n==`object`&&n&&z(()=>{i=n[Symbol.asyncIterator],a=!i&&Ut(n)}),!a&&!i)return t.o!==null&&(t.o.Pe=null),t.Ae=!1,n;R(t).Pe=n;let o=Ie,s,c=()=>{let e=ue(t);if(t.o?.Oe&&(e=$e(t)??e),e&&t.S&4&&!k(e).Re.has(t)){t.ge=null;return}O.initTransition(e)},l=r=>{if(t.o?.Pe!==n)return;let i=r instanceof e;if(i&&t.Ae){t.o!==null&&(t.o.Pe=null),It(t,r),t._e=S;return}c(),qt(t,i?1:2,r),i&&Ht(t),t._e=S,i||Bt(t)},u=(e,i)=>{if(t.o?.Pe!==n||t.ie&130)return;Le(o),c();let a=!!(t.S&4),s=t.o?.Ue;Et(t),Kt(t),s&&(t.o.Ue=!0);let u=le(t);if(u&&u.he.delete(t),r){try{r(e)}catch(e){l(e);return}a&&Kt(t,!0)}else if(t.o?.be!==void 0)t.Ge===g&&Me(t),t.Ge=e,D.pe?.(t,e),de(t)?D.ye(t,e):Re(t),t._e=S;else if(u){let n=t.Ce,r=t.me,i=t.ve;try{(!n&&a||!i||!i(e,r))&&(t.me=e,t._e=S,D.pe?.(t,e),Re(t,!0))}catch(e){qt(t,2,e)}}else try{V(t,()=>e)}catch(e){qt(t,2,e)}t.Ge===g&&(t.Ae=!1,s&&(t.o.Ue=!1)),Ht(t),E(),Ye(),i?.()},d=()=>t.T&32&&!t.u&&!(t.S&1)?(Ot(t),!0):!1,f=(e,r)=>{let i=e[Symbol.asyncIterator](),a=!1,o=!1,c=!r,f=()=>{if(!o){o=!0;try{let e=i.return?.();Ut(e)&&e.then(void 0,()=>{})}catch{}}};r?r(f):bt(f),R(t).De=f;let p=()=>{d()||m()},m=()=>{let e,r,f=!1,h=!1,g=!0,_=i.next();if((Ut(_)?_:{then:e=>void e(_)}).then(r=>{if(g&&c)e=r,f=!0,r.done&&(o=!0);else if(t.o?.Pe!==n)return;else r.done?(o=!0,a?(E(),Ye()):u(void 0),d()):(a=!0,u(r.value,p))},e=>{g&&c?(r=e,h=!0):t.o?.Pe===n&&(o=!0,l(e),d())}),g=!1,h){if(o=!0,l(r),c)throw r;return!0}return f&&!e.done?(s=e.value,a=!0,m()):f&&e.done},h=m();return c=!1,a||h},p=null,m=(e,t)=>{let n=!1;if(typeof e==`object`&&e&&z(()=>{n=e[Symbol.asyncIterator]}),!n)return!1;let r=f(e,t);return t||(p=r),!0};if(a){let r=!1,i=!1,a,o=!0,c=e=>{t.we?Array.isArray(t.we)?t.we.push(e):t.we=[t.we,e]:t.we=e};if(n.then(e=>{o?(s=e,r=!0):t.o?.Pe===n&&!(t.ie&64)&&m(e,c)||(u(e),d())},e=>{o?(a=e,i=!0):(l(e),d())}),o=!1,i)throw l(a),a;if(r)m(s)||(t.Ae=!1);else{if(t.Ae)return t.me;throw O.initTransition(ue(t)),new e(I)}}if(i&&m(n),p!==null){if(!p){if(t.Ae)return t.me;throw O.initTransition(ue(t)),new e(I)}t.Ae=!1}return s}function Kt(e,t=!1){e.o?.le&&Pt(e),e.o?.de&&e.o!==null&&(e.o.de=!1),e.o!==null&&(e.o.Ue=!1),e.S=t?0:e.S&4,e.o?._&&Lt(e),(e.o?.Le||e.o?.Qe)&&D.Ne(e),e.o?.i&&e.T&2048&&D.ke!==null&&D.ke(e);let n=fn(e);n&&n.call(e)}function qt(n,r,i,a,o){r===2&&!(i instanceof t)&&!(i instanceof e)&&(i=new t(n,i));let s=r===1&&i instanceof e?i.source:void 0,c=s===n,l=r===1&&n.o?.be!==void 0&&!c,u=l&&de(n);a||(r===1&&s?(Mt(n,s),n.S&1||(n.T&=~h),n.S=1|n.S&4,Lt(n,s,i)):(Pt(n),n.S=r|(r===2?0:n.S&4),R(n)._=i),D.Ne?.(n),n.o?.i&&n.T&2048&&D.ke!==null&&D.ke(n)),o&&!a&&fe(n,o);let d=a||u,f=a||l?void 0:o,p=fn(n);if(p){if(a&&r===1)return;d?p.call(n,r,i):p.call(n);return}Rt(n,(t,n)=>{if(t._e=S,r===1&&s&&!t.o?.le?.has(s)||r!==1&&(t.o?._!==i||t.o?.le)){if(n.je&&r!==1&&!(i instanceof e)){nt(t),E();return}!d&&!t.ge&&Me(t),qt(t,r,i,d,f)}})}D.Fe=e=>{e.Ce===3?(ot(e,tt(e)),e.He=!0,e.C.enqueue(2,e.Ve)):on(e)},D.We=pt;var M=!1;function Jt(e){P=e}function Yt(e){F=e}function Xt(e){I=e}var N=!1,P=!1,F=!1,I=null,L=null,Zt=!1,Qt=null;function $t(e){for(;e;){if(e.Me)return!0;e=e.qe}return!1}function en(e){Zt=e,e&&!Qt&&(Qt=new Set)}function tn(e){e.Me=!0}function nn(e){e.Me=!1,rn(e),E()}function rn(e){let t=e.Ye;for(;t;){if(t.Me){t=t.Ze;continue}if(t.oe){let e=t;e.T&=-9,e.ie&256&&(e.ie&=-257,e.ie|=2,x.Ke>e.Be&&(x.Ke=e.Be),it(e,x))}rn(t),t=t.Ze}}function an(){if(Qt){for(let e of Qt)delete e.o?.ze,e.sp!==void 0&&(e.sp=void 0);Qt=null}Zt=!1}function on(t,n=!1){Fe();let r=t.Ce;if(!n){if(t.ge&&(!r||C)&&C!==t.ge&&O.initTransition(t.ge),ot(t,tt(t)),t.o!==null&&(t.o.Pe=null,Wt(t)),t.ge||r===3)pt(t);else if(t.Ye!==null||t.we!==null){ft(t);let e=R(t);e.Je=t.we,e.Xe=t.Ye,t.we=null,t.Ye=null,t.$e=0}}let i=!!(t.ie&128),a=!!(t.T&128)&&t.o?.be!==g&&t.o?.be!==void 0,c=!!(t.S&4),l=t.S&2?t.o?._:void 0,u=t.S&1?t.o?.le:void 0,d=t.o?.le?.has(t),f=(t.ie&o)!==0,p=t.Ae,m=I;I=t,t.et=null,t.tt++,t.ie=4,t._e=S;let h=t.Ge===g?t.me:t.Ge,_=t.Be,te=!1,ne=M,re=L;M=!0;let ie=F;if(F=!1,i){let e=D.nt(t,!0);e?L=e:e===!1&&(i=!1)}else if(C&&!n&&C.it.length){let e=D.nt(t,!1);e&&(i=!0,L=e)}let y=r&&r!==2,ae=N;y&&(N=!0),r&&C!==null&&C.lt.size&&C.lt.delete(t);try{if(t.T&64)h=t.oe(h),t.o!==null&&(t.o.Pe=null),t.Ae=!1;else{let e=t.o?.Pe,n=t.oe(h),r=typeof n==`object`&&!!n,i=t.o?.Pe!==e;h=i||!r?n:Gt(t,n),!i&&!r&&(t.o!==null&&(t.o.Pe=null),t.Ae=!1)}(t.S!==0||t.o!==null)&&Kt(t,n),t.T&1024&&t.o?.Oe&&D.ut(t)}catch(n){let r=n instanceof e;if(r&&t.Ae)It(t,n);else{r&&L&&D.ot(t);let e=!1;r&&(R(t).de=!0,D.st!==null&&(e=D.st(t,f))),qt(t,r?1:2,n,void 0,r?t.o?.Oe:void 0),r&&d&&!t.o?.Pe&&Ht(t),e&&D.k(t)}}finally{M=ne,F=ie,y&&(N=ae),te=(t.ie&s)!==0,t.ie=0|(n?t.ie&256:0),I=m}if(!t.o?._){Et(t);let e=a?v(t.o?.be):i||t.Ge===g?t.me:t.Ge,o=!1;try{o=!r&&c||!t.ve||!t.ve(e,h)}catch(e){qt(t,2,e)}if(r&&o&&(t.He=!t.o?._,!n)){t.C.enqueue(r,t.rt??=D.ct.bind(null,t));let e=t._t;e!==C&&(t._t=C,e!==null&&(e=k(e))!==C&&!e.ft&&((e.Et??=[]).push(t),C!==null&&(C.Et??=[]).push(t)))}if(!t.o?._){if(o){let e=a?t.o?.be:void 0;n||r&&(C!==t.ge||C===null||t.T&32768)||i?(t.me=h,a&&i&&(R(t).be=h===void 0?ee:h,t.Ge=g)):(t.Ge=h,p&&(t.Ae=!0),(C||t.ge)&&D.pe!==null&&D.pe(t,h)),t.u!==null&&(!a||i||t.o?.be!==e)?Re(t,i||a):a&&!i&&t.o.It!==S&&D.ye(t,h)}else if(a)t.Ge===g&&Me(t),t.Ge=h,p&&(t.Ae=!0),D.ye(t,h);else if(t.Be!=_)for(let e=t.u;e!==null;e=e.Te)at(e.Ie,tt(e.Ie))}if(!o&&!t.o?._&&(l!==void 0&&Vt(t,l),u))for(let e of u)e!==t&&Ht(t,e);d&&!(t.S&5)&&Ht(t)}L=re,(t.Ge!==g||t.o!==null&&(t.o.Xe!==null||t.o.Je!==null)||t.S&5)&&(!n||t.S&1)&&(!t.ge||a)&&Me(t),t.ge&&r&&C!==t.ge&&et(t.ge,()=>on(t)),te&&(nt(t),E())}function sn(e){if(!(e.ie&68)){if(e.ie&1)for(let t=e.fe;t;t=t.ae){let n=t.Se,r=n.ce||n;if(r.oe&&sn(r),e.ie&2)break}(e.ie&130||e.o?._&&e._e<S&&!e.o?.Pe)&&on(e),e.ie&=280}}function cn(e,t){let n=t?.transparent??!1,r=typeof t==`object`&&!!t&&`loadingValue`in t,i={id:_t(t,n,I),T:(n?4:0)|!!t?.ownedWrite|(!I||t?.lazy?32:0)|(t?.sync?64:0)|(t?.H?2:0)|(Zt&&$t(I)?8:0),ve:t?.equals??Cn,we:null,C:I?.C??O,xe:I?.xe??ne,$e:0,oe:e,me:r?t.loadingValue:void 0,Be:0,Nt:void 0,Tt:null,fe:null,et:null,tt:0,u:null,dt:null,qe:I,Ze:null,St:null,Ye:null,ie:t?.lazy?512:0,S:r?0:4,_e:S,Ge:g,ge:null,At:-1,Ae:r,o:null};return t?.unobserved&&(R(i).Ct=t.unobserved),mn(i,t),i}function R(e){return e.o??={be:void 0,Ot:void 0,It:0,Rt:0,Oe:void 0,Le:void 0,Qe:void 0,Gt:void 0,t:0,Pe:null,De:null,_:void 0,de:void 0,le:void 0,h:void 0,Ue:!1,i:null,Ct:void 0,ze:void 0,Je:null,Xe:null,Dt:void 0}}function ln(e,t,n,r,i){let a=i?.transparent??!1,o={id:_t(i,a,I),T:(a?4:0)|!!i?.ownedWrite|(i?.sync?64:0)|(i?.Pt??0)|(Zt&&$t(I)?8:0),ve:!1,we:null,C:I?.C??O,xe:I?.xe??ne,$e:0,oe:e,me:void 0,Be:0,Nt:void 0,Tt:null,fe:null,et:null,tt:0,u:null,dt:null,qe:I,Ze:null,St:null,Ye:null,ie:512,S:4,_e:S,Ge:g,ge:null,At:-1,Ae:!1,He:!1,Ft:void 0,ht:t,vt:n,Ht:void 0,Ce:r,_t:null,o:null};return i?.unobserved&&(R(o).Ct=i.unobserved),mn(o,pn),o}var un=null;function dn(e){un=e}function fn(e){let t=e.o?.h;return t===void 0?e.Ce?un??void 0:void 0:t}var pn={lazy:!0};function mn(e,t){e.Tt=e;let n=I?.gt?I.bt:I;if(I){let t=I.Ye;t===null?I.Ye=e:(e.Ze=t,t.St=e,I.Ye=e)}n&&(e.Be=n.Be+1),D.kt!==null&&D.kt(e),!t?.lazy&&on(e,!0),Zt&&!t?.lazy&&!(e.S&1)&&!(e.T&2)&&(R(e).ze=e.me===void 0?_:e.me,e.T|=512,Qt.add(e))}function hn(e,t,n=null){let r={ve:t?.equals??Cn,T:+!!t?.ownedWrite|(t?.H?2:0),me:e,u:null,dt:null,_e:S,ce:n,Ee:n?.o?.i||null,Vt:null,Ge:g,ge:null,At:-1,o:null};return t?.unobserved&&(R(r).Ct=t.unobserved),n&&vn(n,r),Zt&&!(r.T&2)&&!((n?.S??0)&1)&&(R(r).ze=e===void 0?_:e,r.T|=512,Qt.add(r)),r}var gn;function _n(e){gn=e}function vn(e,t){let n=t.Ee;n!==null&&(n.Vt=t),R(e).i=t,e.T|=u}function yn(e){let t=e,n=t.ce;if(!n)return;let r=t.Vt,i=t.Ee;r===null?n.o.i===t&&(n.o.i=i):r.Ee=i,i!==null&&(i.Vt=r),t.Vt=null}function bn(e,t,n,r,i,a=null){let o={ve:t,T:1|p,me:e,u:null,dt:null,_e:S,ce:a,Ee:a?.o?.i||null,Vt:null,Ge:g,ge:null,At:-1,o:null,Ut:n,xt:r,acc:i,px:void 0,pxv:void 0};return a&&vn(a,o),Zt&&!((a?.S??0)&1)&&(R(o).ze=e===void 0?_:e,o.T|=512,Qt.add(o)),o}function xn(e,t){let n=hn(e,t);return R(n).be=g,n.T|=128,n}function Sn(e,t){let n=cn(e,t);return R(n).be=g,n.T|=128,n}function Cn(e,t){return e===t}function z(e,t){if(D.Lt===null&&!M)return e();let n=M;M=!1;try{return D.Lt===null?e():D.Lt(e)}finally{M=n}}function wn(e,t){e.ie&512?(e.ie&=-513,on(e,!0)):e.ie&64?e.T&32&&on(e,!0):t&&sn(e)}var Tn=Symbol(`read-slow`);function En(e,t){let n=e.ge;if(n===null||n===C)return!1;let r=k(n),i=t._t;return(i==null||k(i)!==r)&&r.lt.add(t),!0}function Dn(e){if(F||P||e.oe||e.ce||e.o?.be!==void 0||e.o?.ze!==void 0||C!==null||L!==null||Zt)return Tn;let t=I;return t?.gt&&(t=t.bt),t&&M&&jt(e,t),!t||e.Ge===g||t.T&16||N&&En(e,t)?e.me:e.Ge}function B(e){if(F)return D.wt(e);let t=I;t?.gt&&(t=t.bt);let n=e,r=e.ce,i=r||e;if(P?D.Wt(e,t,i,r):typeof n.oe==`function`&&wn(e,!1),!n.oe&&i===e&&e.o?.be===void 0&&e.o?.ze===void 0&&C===null&&L===null&&!Zt)return t&&M&&jt(e,t),!t||e.Ge===g||t.T&16||N&&En(e,t)?e.me:e.Ge;if(t&&M&&(jt(e,t,P),i.oe)){let n=tt(e);i.Be>=n.Ke?(ct(t),st(n),sn(i)):t.T&65536&&sn(i);let r=i.Be;r>=t.Be&&e.qe!==t&&(t.Be=r+1)}if(i.S&1){if(t&&(!N||i.S&4||i.T&2097152||i.T&1024&&D.Mt(i)||!En(i,t))){if(L===null||D.qt(i))throw!M&&e!==t&&jt(e,t),i.o?._}else if(!t&&i.S&4)throw i.o?._}if(i.oe&&i.S&2){if(M&&!P&&i._e<S)return on(i),B(e);throw i.o?._}if(Zt&&t&&t.T&8){let n=e.o?.ze;if(n!==void 0){let r=n===_?void 0:n;return(e.Ge===g?e.me:e.Ge)!==r&&(t.ie|=256),r}}if(e.o?.be!==void 0&&e.o?.be!==g){if(!(t&&t.T&8192))return t&&e.T&524288?D.Yt(e):v(e.o?.be);e.T|=d}if(L!==null&&C!==null&&t!==null&&D.Zt(e,i,t))return e.me;let a=!t||L!==null&&D.Kt(e,i,t)||e.Ge===g||t.T&16||N&&En(e,t)||e.T&131072&&!F&&!(t.T&8192)?e.me:e.Ge;return P&&D.jt(e,a),!t&&i===e&&typeof n.oe==`function`&&e.T&32&&!(i.S&1)&&!e.u&&(kt.add(e),E()),a}function V(e,t){if(e.ge&&C!==e.ge&&O.initTransition(e.ge),e.T&128){if(!w)return D.Bt(e,t);let n=e.o?.be;if(n!==void 0&&n!==g)return D.zt(e,t)}let n=e.Ge===g?e.me:e.Ge;if(typeof t==`function`&&(t=t(n)),!(e.S&4||!e.ve||!e.ve(n,t)))return t;let r=e.Ge!==g;return r||Me(e),e.Ge=t,e.T&256&&D.pe!==null&&D.pe(e,t),e.oe!==void 0&&(e._e=S),r&&e.At===Pe&&L===null?t:(Re(e),E(),t)}function On(e){ot(e,tt(e)),!(e.ie&1024)&&e.Ge===g&&(Me(e),E()),e.ie=e.ie&-4|a,e.Jt=S}function kn(e,t){let n=V(e,t);return On(e),n}function H(e,t){let n=I,r=M;I=e,M=!1;try{return t()}finally{I=n,M=r}}function An(e,t=!0){let n=N;N=t;try{return e()}finally{N=n}}function jn(e,t=j()){if(!t)throw new r;let n=t.xe[e.id];if(n===void 0&&(n=e.defaultValue),n===void 0)throw new i;return n}function Mn(e,t,n=j()){if(!n)throw new r;n.xe={...n.xe,[e.id]:t===void 0?e.defaultValue:t}}function Nn(e,t){let n=e.o?.be!==g,r=n?v(e.o?.be):e.me;if(typeof t==`function`&&(t=t(r)),!(e.S&4||(e.ie??0)&3||!e.ve||!e.ve(r,t))){if(n){let t=ue(e);t&&C!==t&&O.initTransition(t),Ie>e.o.Rt&&(e.o.Rt=Ie)}return t}n?O.initTransition(ue(e)):O.m.it.push(e),R(e).Ot=C,R(e).It=S,R(e).Rt=Ie;let i=ae(e);return R(e).Oe=i,e.T=(e.T|c)&~m,R(e).be=t===void 0?ee:t,(e.o?.Le!==void 0||e.o?.Qe!==void 0)&&D.pe!==null&&D.pe(e,t),e.oe!==void 0&&(e._e=S),Re(e,!0),E(),t}function Pn(t){for(let n=0;n<t.it.length;n++){let r=t.it[n];if(de(r)&&`S`in r&&r.S&1&&r.o?._ instanceof e)return!0}return!1}function Fn(e){let t=e.length;for(let n=0;n<t;n++){let t=e[n];t.o!==null&&(t.o.Oe=void 0),t.S&1||(t.S&=-5);let r=t.o?.be;R(t).be=g;let i=(t.T&m)!==0;t.T&=~m,!i&&r!==g&&t.me!==v(r)&&Re(t,!0),t.ge=null,t.o!==null&&(t.o.Ot=null)}for(let n=0;n<t;n++){let t=e[n];(t.o?.Le||t.o?.Qe)&&D.un(t);let r=t.o?.Gt;r&&(r.o?.Le===t||r.o?.Qe===t)&&D.un(r)}e.splice(0,t)}function In(e,t){if(e.ve&&e.ve(t,v(e.o.be))){if(!(e.T&524288)){e.T&16384&&D.Qt?.(e);return}e.T&=~m}else{if(Ie&&Ie<e.o.Rt)return;e.T|=m;let t=e.o?.Oe;if(t){let n=b(t),r=[e];for(;r.length;){let e=r.pop(),t=e.o?.Oe;if(t&&b(t)===n){e.o.Oe=void 0,n.he.delete(e);for(let t=e.u;t!==null;t=t.Te)r.push(t.Ie)}}}}Re(e)}function Ln(e){return N&&e.ge&&C!==e.ge?v(e.o?.be):e.Ge===g?e.me:e.Ge}function Rn(e,t){let n=e.Ge===g?e.me:e.Ge;return typeof t==`function`&&(t=t(n)),e.Ge===g&&Me(e),e.Ge=t,D.pe?.(e,t),In(e,t),E(),t}function zn(e,t){for(let n=0;n<e.length;n++)e[n](t|4)}function Bn(e){for(let t of y){if(t.rn||se(t))continue;let n=t.tn[e-1];n.length&&(t.tn[e-1]=[],zn(n,e))}e===1&&D.ln?.()}function Vn(e){for(let t of y)(e?t.ge===e:!t.ge)&&(t.rn||(t.tn[0].length&&zn(t.tn[0],1),t.tn[1].length&&zn(t.tn[1],2)),t.nn.o?.Oe===t&&t.nn.o!==null&&(t.nn.o.Oe=void 0),t.he.clear(),t.tn[0].length=0,t.tn[1].length=0,y.delete(t),ie.delete(t.nn))}function Hn(e){if(e.S&4)return!0;let t=e.o?.Oe;return t?b(t)===b(L)&&!de(e):!1}function Un(e){return le(e)!==void 0}function Wn(e,t,n){return F||e.Ge===g||e.oe||t!==e&&!(t.ie&1024)?!1:(C.lt.add(n),!0)}function Gn(e,t,n){return e.o?.be!==void 0||e.o?.Oe||t.S&1?(e.Ge!==g&&e.Ge!==e.me&&(C??O.m).lt.add(n),!0):t===e&&N&&n.o?.Gt!==e?(e.Ge!==g&&(C??O.m).lt.add(n),!0):!1}function Kn(e,t){if(t){let t=le(e);return t?!O.sn&&!C&&!t.ge&&t.nn.o?.Gt!==void 0&&e.o?.be===void 0?(e.o!==null&&(e.o.Oe=void 0),!1):t:null}for(let t=e.fe;t;t=t.ae){let n=t.Se;if(n.ie&128){let t=le(n);if(t)return e.ie|=128,fe(e,t),t}}return null}function qn(e){let t=b(L);t.nn!==e&&(t.he.add(e),R(e).Oe=t,e.T|=c)}function Jn(e){let t=le(e);t&&t.he.delete(e)}function Yn(e){O.m.En.add(e),E()}function Xn(){D.Bt===null&&(D.Bt=Nn,D.fn=Fn,D.cn=Pn,D.dn=Vn,D.In=Bn,D.ye=In,D.Yt=Ln,D.zt=Rn,D.Zt=Wn,D.qt=Hn,D.Mt=Un,D.Kt=Gn,D.nt=Kn,D.ot=qn,D.ut=Jn,D.Nn=Yn)}Xn();var Zn=null,Qn=new Map;function $n(e){let t=e.ce;t&&(t.T|=l,(R(t).Dt??=new Set).add(e))}function er(e){let t=e.o?.Le;return t||(t=xn(!1,{ownedWrite:!0}),R(e).Le=t,e.T|=256,$n(e),R(t).Gt=e,or(e)&&V(t,!0)),t}function tr(e){if(!Zn)return;Zn.sources.add(e);let t=e.ce||e;t!==e&&Zn.sources.add(t)}function nr(e){Zn?.sources.add(e)}function rr(e,t){if(e.o?.t)return!0;if(e.S&2||t.has(e))return!1;t.add(e);let n=e.ce;if(n&&rr(n,t))return!0;let r=e,i=r.ie&4?r.et:void 0;if(i!==null)for(let e=r.fe??null;e!==null;e=e.ae){if(!e.je&&rr(e.Se,t))return!0;if(e===i)break}return!1}function ir(e){if(e.o?.le){for(let t of e.o.le)if(!t.o?.Ue)return!1;return!0}return e.o?.Ue??!1}function ar(e){return!!(e.S&1)&&!(e.S&4)&&!ir(e)}function or(e){let t=e;if(t.ie&64)return!1;if(Ke!==0&&rr(e,new Set))return!0;let n=e.ce;if(e.o?.Gt){let t=e.o?.Gt;return ar(t.ce||t)}if(n&&e.Ge!==g&&!de(e))return!!(n.ie&1024)||!n.o?.Pe&&!(n.S&1)||!!(n.S&1)&&ir(n);if(e.Ge!==g&&!(t.S&4)&&!t.Ae){if(de(e))return!e.ve||!e.ve(e.Ge,v(e.o?.be));if(!t.o?.Ue)return!0}return ar(t)}function sr(e,t){e.o?.Le&&cr(e),e.o?.Qe&&V(e.o?.Qe,t)}function cr(e){e.o?.Le&&V(e.o?.Le,or(e)),e.o?.Qe&&cr(e.o?.Qe)}function lr(e){let t=e.o?.Dt;if(t!==void 0)for(let e of t)cr(e)}function ur(e,t=!1){let n=t?fr:cr,r=new Set,i=e=>{if(!r.has(e)){r.add(e),(e.o?.Le||e.o?.Qe)&&n(e);for(let t=e.u;t!==null;t=t.Te)i(t.Ie);for(let t=e.o?.i??null;t!==null;t=t.Ee)i(t)}};i(e)}function dr(e){if(Qn.size===0)return;let t=!1;for(let[n,r]of Qn){let i=n.ge,a=i?k(i):null;if(!a){Qn.delete(n);continue}if(a!==e)continue;Qn.delete(n);let o=n.o?.Le?.o?.Oe;for(let e of r)e.ie&64||(e.ie|=128,o?fe(e,o):e.o!==null&&(e.o.Oe=void 0),nt(e),t=!0)}t&&E()}function fr(e){Qn.size!==0&&Qn.delete(e);let t=e.o?.Le;if(t&&(t.o?.be===void 0||t.o?.be===g)){let n=or(e);(t.me!==n||t.Ge!==g)&&(t.me=n,t.Ge=g,Re(t),E())}let n=e.o?.Qe;n&&!(n.ie&64)&&((n.o?.be===void 0||n.o?.be===g)&&n.Ge===g&&!Object.is(n.me,e.me)&&!(n.ie&3)&&(n.ie|=2,it(n,tt(n)),Re(n),E()),fr(n))}function pr(e){let t=e.o?.Qe;if(t&&t.ie&64&&(t=void 0),!t){let n=F;Yt(!1);let r=P;Jt(!1);let i=I;Xt(null),t=Sn(()=>B(e)),R(e).Qe=t,e.T|=256,$n(e),R(t).Gt=e,e.Ge!==g&&!de(e)&&V(t,e.Ge),Xt(i),Jt(r),Yt(n)}return t}function mr(t){let n=pr(t),r=F;Yt(!1);let i=t.o?.be!==void 0&&t.o?.be!==g?v(t.o?.be):t.me,a;try{let e=tt(n);if(n.Be>=e.Ke&&!(n.ie&96)){st(e);let t=P;Jt(!1);try{wn(n,!0)}finally{Jt(t)}}a=B(n)}catch(n){if(n instanceof e&&(!I||!(t.S&4)))return i;throw n}finally{Yt(r)}if(n.S&1)return i;if(N&&L&&n.o?.Oe){let e=b(n.o?.Oe);if(e!==b(L)&&se(e))return i}return n.Ge!==g&&!de(n)&&!(N&&n.ge&&C!==n.ge)?n.Ge:a}function hr(e){if(typeof e.oe!=`function`)return!1;let t=e.o?.Gt;return t!==void 0&&!((t.ce||t).S&4)}function gr(e,t,n,r){Jt(!1),typeof e.oe==`function`&&wn(e,!0);let i=n.S;if(t&&i&1&&i&4&&!hr(n))throw M&&e!==t&&jt(e,t),Jt(!0),n.o?._;tr(e),r&&tr(r),Jt(!0)}function _r(e){let t=e.ge,n=t?k(t):C;if(!n||n.ft)return!1;if(n.ue.length&&!e.oe)return!0;if(!t)return!1;for(let[e,t]of n.Re)if(t.size&&e.S&1&&e.o?._?.source===e)return!0;return!1}function vr(e,t){if(Zn!==null&&e.Ge!==g&&t===e.Ge){if(_r(e))return;Zn.freshReads.add(e)}}function yr(e,t){let n=!!(e.S&1),r=t&&!(n&&!e.o?.Ue),i=n&&(e.o?.Ue??!1)!==r;return r?R(e).Ue=!0:e.o!==null&&(e.o.Ue=!1),i}function br(e){let t=F;Yt(!0);try{return e()}finally{Yt(t)}}function xr(t){let n=P,r=Zn;Jt(!0);let i=Zn={found:!1,sources:new Set,freshReads:new Set,suppressed:[]},a=()=>{Jt(!1);let e=F;Yt(!1);try{i.sources.forEach(e=>{B(er(e))&&(i.freshReads.has(e)?i.suppressed.push(e):i.found=!0)})}finally{Yt(e),Jt(!0)}if(!i.found&&i.suppressed.length&&I&&typeof I.oe==`function`)for(let e of i.suppressed){let t=Qn.get(e);t||Qn.set(e,t=new Set),t.add(I)}};try{return t(),a(),i.found}catch(t){if(a(),t instanceof e){let e=!!(t.source?.S&4);if(i.found&&!e)return!0;if(I&&e)throw t}return i.found}finally{Jt(n),Zn=r}}D.pe=sr,D.Ne=cr,D.ke=lr,D.un=fr,D.wt=mr,D.Wt=gr,D.jt=vr,D.st=yr,D.k=ur,D.ri=nr,D.si=dr;function Sr(e,t,n,r){let i=ln(e,t,n,r?.user?2:1,r);on(i,!0),!r?.defer&&(i.Ce===2||r?.schedule?i.C.enqueue(i.Ce,wr.bind(null,i)):wr(i,4))}function Cr(e,t){let r=e===void 0?this.S:e,i=t===void 0?this.o?._:t;if(r&2){if(this.C.notify(this,1,0),this.Ce===2){this.S&2&&(this.He=!0,this.C.enqueue(this.Ce,this.rt??=wr.bind(null,this)));return}if(!this.C.notify(this,2,2))throw Oe(n(i)),i}else this.Ce===1&&this.C.notify(this,3,r,i)}function wr(e,r){if(!e.He||e.ie&64)return;if(e._t!==null&&!k(e._t).ft&&(r&4?!e.o?.Oe:C!==null)){e.C.enqueue(e.Ce,e.rt);return}if(e.S&2&&e.Ce===2){let t=n(e.o?._);e.Ft=e.me,e.He=!1;try{e.vt?e.vt(t,()=>{let t=e.Ht;e.Ht=void 0,t?.()}):console.error(t)}catch(t){if(!e.C.notify(e,2,2))throw Oe(t),t}return}let i=e.Ht;e.Ht=void 0;try{i?.(),e.Ht=e.ht(e.me,e.Ft)}catch(n){if(R(e)._=new t(e,n),e.S|=2,!e.C.notify(e,2,2))throw Oe(n),n}finally{e.Ft=e.me,e.He=!1}}D.ct=wr;function Tr(e,t){let n=()=>{if(!(!r.He||r.ie&64))try{r.He=!1,on(r)}finally{}},r=cn(()=>{let t=r.Ht;r.Ht=void 0,t?.();let n=An(e);r.Ht=n},{...t,lazy:!0});r.Ht=void 0,r.T=r.T&-33|16,r.He=!0,r.Ce=3,r.Ve=n,nt(r),E()}dn(Cr);function Er(e){return bt(e)}function Dr(e){let t=B.bind(null,e);return t[re]=e,t}function Or(e,t){if(typeof e==`function`){let n=cn(e,t);return n.T&=-33,[Dr(n),kn.bind(null,n)]}let n=hn(e,t);return[Dr(n),V.bind(null,n)]}function U(e,t){return Dr(cn(e,t))}function kr(e,t,n){Sr(e,t.effect||t,t.error,{user:!0,...n})}function Ar(e,t,n){Sr(e,t,void 0,n)}function jr(e){let t=j();t&&!(t.T&16)?Tr(()=>z(e),void 0):O.enqueue(2,()=>{e()})}var W=Symbol(0),Mr=new WeakMap;function Nr(e){return e[W]!==void 0}function Pr(e,t){let n=e[W];return n!==void 0&&n.fam===t?n:(t?.map??Mr).get(e)}var Fr=null;function Ir(e){let t=e;for(;t&&!t.d;)t.d=!0,t=t.u}var Lr=Symbol(0),G=Symbol(0),Rr=Symbol(0),zr=Symbol(0),Br=new WeakSet,Vr=!1;function Hr(e){return Vr&&Br.has(e)}function Ur(e){if(qr(e)){if(e[G]!==void 0)return;Vr=!0,Br.add(e)}}function Wr(e){if(Array.isArray(e))for(let t=0,n=e.length;t<n;t++)Ur(e[t]);else for(let t in e)Ur(e[t])}var Gr=Object.prototype,Kr=new WeakMap;function qr(e){if(typeof e!=`object`||!e||Object.isFrozen(e))return!1;let t=Object.getPrototypeOf(e);if(t===Gr||t===null||Array.isArray(e))return!0;let n=Kr.get(t);return n===void 0&&(n=Object.prototype.toString.call(e)===`[object Object]`&&(typeof Node>`u`||!(e instanceof Node)),Kr.set(t,n)),n}var Jr=!1;function K(e){Jr=e}function q(){return Jr}function Yr(e){return Reflect.ownKeys(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function Xr(e,t,n){for(let[r,i]of Zr)r.o?.t&&i.scope.has(t)&&(i.key===void 0||i.key===n)&&(D.M(e),i.inherited.push(e))}var Zr=new Map;function Qr(){return Zr.size>0}function $r(e,t){let n=e.n?.[zr];if(n?.o?.t&&D.ri(n),Zr.size){let r=e.v;for(let[e,i]of Zr)if(e!==n&&e.o?.t&&(i.key===void 0||i.key===t)){let t=r;for(;;){if(i.scope.has(t)){D.ri(e);break}let n=t?.[G];if(n===void 0)break;let r=n.pb??n.v;if(r===t)break;t=r}}}}function ei(){this.v=void 0,this.ch=void 0,this.pb=void 0,this.n=void 0,this.h=void 0,this.k=void 0,this.dk=void 0,this.u=void 0,this.pk=void 0,this.px=void 0,this.d=void 0,this.a=void 0,this.sc=void 0,this.kc=void 0,this.nc=void 0,this.ab=void 0,this.fam=void 0,this.s=void 0,this.ovl=void 0,this.del=void 0,this.wk=void 0,this.hv=void 0,this.ht=void 0}ei.prototype=Object.prototype;function ti(e,t,n,r=t?.fam??null){let i=Array.isArray(e)?[]:new ei;return i.v=e,i.ch=e[G]!==void 0,i.pb=null,i.n=null,i.h=null,i.k=null,i.dk=null,i.wk=null,i.u=t,i.pk=n,i.px=null,i.d=!1,i.a=!1,i.sc=0,i.kc=0,i.nc=0,i.ab=null,i.fam=r,i.s=!1,i.ovl=!1,i.del=null,i.hv=null,i.ht=null,i.px=new Proxy(i,_a),i[Rr]=i.px,(r?.map??Mr).set(e,i),i}function ni(e,t=null,n=null,r=t?.fam??null){if(Vr&&Hr(e))return e;let i=Pr(e,r);if(i!==void 0)return i.px;let a=e[G];return a!==void 0&&a.px===e&&(r===null||a.fam===r)?e:ti(e,t,n,r).px}function J(e){if(typeof e!=`object`||!e)return e;let t=e[G];return t!==void 0&&t.px===e&&t.v!==void 0?(t.ovl&&_i(t),t.pb??t.v):e}var ri=function(e,t){return Cn(e,t)||si(this.Ut,e,t)};_n(e=>{if(e.o?.t)return;let t=e.Ut,n=e.xt;t.n&&t.n[n]===e&&(delete t.n[n],t.nc--,yn(e))});function ii(e,t,n,r=-1){let i=e.n??=Object.create(null),a=i[t];if(a===void 0){let o=ai(e);o!==null&&(n=e.hv[t]);let s=a=bn(n,ri,e,t,r===-1?ca(e.pb??e.v,t):r===1,e.fam?.node??void 0);e.fam?.opt&&(R(s).be=g,s.T|=128),t!==zr&&Qr()&&Xr(s,e.v,t),o!==null&&oi(s,e.v[t],o),i[t]=a,e.nc++,Ir(e)}return a}function ai(e){if(e.ht===null||e.ht===yi||xi(e)===null)return null;let t=k(e.ht);return t.ft===!1?t:null}function oi(e,t,n){ri.call(e,e.me,t)||(e.Ge=t,e.ge=n,n.$t.push(e))}function si(e,t,n){if(typeof t!=`object`||!t||typeof n!=`object`||!n)return!1;let r=Pr(t,e.fam);return r!==void 0&&r===Pr(n,e.fam)}function ci(e,t,n){let r=e.h??=Object.create(null),i=r[t];if(i===void 0){let a=i=hn(n,{equals:Cn,unobserved(){a.o?.t||e.h&&e.h[t]===a&&(delete e.h[t],yn(a))}},e.fam?.node??void 0);a.T|=1,e.fam?.opt&&(R(a).be=g,a.T|=128),Qr()&&Xr(a,e.v,t),r[t]=i,Ir(e)}return i}function li(e){let t=e.k;if(t===null){let n=t=hn(0,{equals:!1,unobserved(){e.k===n&&(e.k=null,yn(n))}},e.fam?.node??void 0);n.T|=1,e.fam?.opt&&(R(n).be=g,n.T|=128),e.k=t,Ir(e)}return t}function ui(e){e.dk!==null&&V(e.dk,1)}var di=new Map,fi=!1;function pi(e,t){if(t.sc||hi(t),t.sc===2){let n={...e};return n[W]=t,n}let n=Object.getOwnPropertyDescriptors(e);for(let r of Reflect.ownKeys(n)){let i=n[r];r===`length`&&Array.isArray(e)||(i.configurable=!0,!i.get&&!i.set?i.writable=!0:t.a=!0)}let r=Array.isArray(e)?Object.defineProperties([],n):Object.create(Object.getPrototypeOf(e),n);return r[W]=t,r}function mi(e,t,n){let r=Object.getOwnPropertyDescriptor(t,n);r.get||r.set||!r.enumerable||!r.writable||!r.configurable?Object.defineProperty(e,n,r):e[n]=r.value}function hi(e){let t=e.v,n=Reflect.ownKeys(t),r=Object.getPrototypeOf(t)===Object.prototype;for(let i of n){if(aa.call(t,i)!==void 0||oa.call(t,i)!==void 0){e.a=!0,r=!1;break}r&&!sa.call(t,i)&&(r=!1)}return e.sc=r?2:1,e.kc=n.length,!e.a}var gi=32;function _i(e){if(!e.ovl)return;let t=e.pb,n=pi(e.v,e);for(let e of Reflect.ownKeys(t))mi(n,t,e);if(e.del!==null){for(let t of e.del)delete n[t];e.del=null}e.pb=n,e.ovl=!1}function vi(e){let t=e.pb;if(t!==null&&!Oi.has(t)&&e.fam?.opt===!0&&!w&&!q()&&Ei.has(e)&&(Di.set(e,t),t=e.pb=null),C!==null&&Ei.set(e,C),t===null){let n=e.v;if(!e.fam?.opt&&!e.ch&&!Array.isArray(n)&&(e.sc===0?hi(e):!e.a)&&e.kc>gi&&Nr(n)?(t=e.pb=Object.create(n),e.ovl=!0):t=e.pb=pi(n,e),e.fam?.opt&&!w&&!q()){Oi.add(t);let n=e.n;if(n!==null)for(let e of Reflect.ownKeys(n)){let r=n[e];la(r)&&(t[e]=v(r.o?.be))}let r=e.h;if(r!==null)for(let e of Reflect.ownKeys(r)){let n=r[e];la(n)&&!v(n.o?.be)&&delete t[e]}}Ti(e)}return t}var yi=Symbol(`plainHold`),bi=!1;function xi(e){let t=e.ht;return t===null?null:t!==yi&&k(t)?.ft===!0?e.ht=e.hv=null:e.hv}function Si(e,t,n=!1){n||(Ti(e),e.pb===null?e.ab??=di.get(e):(e.ovl&&_i(e),e.ab=e.pb)),q()?e.ht=e.hv=null:(C!==null||!n&&bi)&&(xi(e)===null&&(e.hv=e.v),e.ht=C??yi,!n&&C!==null&&Xi.add(e)),e.pb=null,e.ovl=!1,e.del=null,e.sc=0,e.a=!1,e.wk=null,e.v=t,e.ch=t[G]!==void 0;let r=t[W];r!==void 0&&r.fam===e.fam?t[W]=e:(e.fam?.map??Mr).set(t,e)}var Ci=new Set,wi=e=>{let t=Object.getPrototypeOf(e);return t===Object.prototype||t===Array.prototype||t===null};function Ti(e){di.has(e)||(fi||(fi=!0,Ve(Ni)),E(),di.set(e,e.v))}var Ei=new WeakMap,Di=new WeakMap,Oi=new WeakSet;function ki(e){return e.pb===null||!Oi.has(e.pb)}function Ai(e){if(Nr(e.v))return;let t=e.v;if(e.v=pi(t,e),e.ch=!1,e.u){Ai(e.u),e.u.v;let n=e.u.v,r=ji(e,t);n[r]===t&&(n[r]=e.v)}}function ji(e,t){let n=e.pk,r=e.u.v;if(r[n]===t||!Array.isArray(r))return n;let i=r.indexOf(t);return i===-1?n:(e.pk=i,i)}function Mi(e,t){Ai(e);let n=e.v;for(let r of Reflect.ownKeys(t))e.sc===2?n[r]=t[r]:mi(n,t,r);if(e.del!==null){for(let t of e.del)delete n[t];e.del=null}e.pb=null,e.ovl=!1,e.wk=null}function Ni(){if(di.size===0)return;let e=[...di];di.clear();for(let[t,n]of e){if(t.ht===yi&&(t.ht=t.hv=null),t.pb!==null){let e=Ei.get(t);if(e!==void 0){if(k(e).ft===!1){di.set(t,n);continue}Ei.delete(t)}let r=!1,i=t.pb,a=t.n;if(a!==null){let e=t.wk,n=e===null||e===Ci||t.a===!0||!wi(t.ovl?t.v:i)?Reflect.ownKeys(a):e;for(let e of n){let t=a[e];if(t!==void 0&&t.Ge!==g){r=!0;break}}}if(r){di.set(t,n);continue}if(t.ovl)Mi(t,i);else if(t.v!==n){Ai(t);let e=t.v,r=t.wk;if(r!==null&&r!==Ci)for(let t of r)X.call(i,t)?mi(e,i,t):delete e[t];else{for(let t of Reflect.ownKeys(i)){let r=Object.getOwnPropertyDescriptor(i,t);r.get||r.set||!r.enumerable||!r.writable||!r.configurable?Object.defineProperty(e,t,r):(r.value!==n[t]||!X.call(n,t))&&(e[t]=r.value)}for(let t of Reflect.ownKeys(n))X.call(i,t)||delete e[t]}t.pb=null,t.wk=null}else t.v=i,t.ch=!1,t.pb=null,t.wk=null}let e=t.ab;if(t.ab=null,t.v!==n&&t.u){let e=ji(t,n);t.u.v[e]===n&&(Ai(t.u),t.u.v,t.u.v[e]=t.v)}e!==null&&e!==t.v&&Ui(t,e,t.v)}}function Pi(e){let t=e.pb;if(t===null)return;if(e.fam?.opt){if(!w&&!q()){Fr.notifyOptimisticWrites(e,t);return}if(!w){T(!0);try{Pi(e)}finally{T(!1)}return}}let n=e.v,r=e.n,i=e.wk,a=i===Ci||e.a===!0||!wi(e.ovl?e.v:t)?null:i;if(r!==null){let i=a??Reflect.ownKeys(r);for(let a of i){let i=r[a];if(i===void 0)continue;if(i.acc===!0||X.call(t,a)&&aa.call(t,a)!==void 0){i.acc=ca(t,a);let e=Object.getOwnPropertyDescriptor(n,a),r=Object.getOwnPropertyDescriptor(t,a);if(e&&(e.get||e.set)||r&&(r.get||r.set)){(e?.get!==r?.get||e?.set!==r?.set||e?.value!==r?.value)&&V(i,()=>Fi);continue}Cn(e?.value,r?.value)||V(i,()=>r?.value);continue}let o=e.del!==null&&e.del.has(a)?void 0:t[a];V(i,()=>o)}}let o=e.h;if(o!==null){let n=a??Reflect.ownKeys(o);for(let r of n){let n=o[r];n!==void 0&&V(n,r in t&&!(e.del!==null&&e.del.has(r)))}}if(e.dk!==null){if(e.del!==null&&e.del.size!==0)ui(e);else for(let r of a??Reflect.ownKeys(t)){if(r===W)continue;let i=t[r],a=n[r];if(typeof i==`object`&&i?!Ii(a,i):!Cn(a,i)){ui(e);break}}}if(e.k!==null){let r;if(e.ovl){if(r=e.del!==null&&e.del.size!==0,!r){for(let e of Reflect.ownKeys(t))if(!X.call(n,e)){r=!0;break}}}else r=Array.isArray(t)&&Array.isArray(n)?Li(n,t):Ri(n,t);r&&V(e.k,e=>e+1)}if(e.fam!==null&&e.pb!==null&&q()&&C===null){if(e.ht!==null&&(e.ht=e.hv=null),e.ovl)return Mi(e,t);let n=e.v;if(e.pb=null,e.v=t,e.ch=!1,e.u){let r=ji(e,n);e.u.v[r]===n&&(Ai(e.u),e.u.v,e.u.v[r]=t)}}}var Fi=Symbol();function Ii(e,t){if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;let n=Pr(e,null);return n!==void 0&&n===Pr(t,null)}function Li(e,t){if(e.length!==t.length)return!0;for(let n=0;n<t.length;n++){let r=e[n],i=t[n];if(!Cn(r,i)&&!Ii(r,i))return!0}return!1}function Ri(e,t){let n=Reflect.ownKeys(t);if(Reflect.ownKeys(e).length-+Nr(e)!=n.length-+Nr(t))return!0;for(let t of n)if(t!==W&&!(t in e))return!0;return!1}function zi(e,t,n,r,i=!0){if(e.acc===!0||i&&X.call(r,t)&&aa.call(r,t)!==void 0){e.acc=ca(r,t);let i=Object.getOwnPropertyDescriptor(n,t),a=Object.getOwnPropertyDescriptor(r,t);if(i&&(i.get||i.set)||a&&(a.get||a.set)){(i?.get!==a?.get||i?.set!==a?.set||i?.value!==a?.value)&&V(e,()=>Fi);return}let o=i?.value,s=a?.value;!Cn(o,s)&&!Ii(o,s)&&V(e,typeof s==`function`?()=>s:s)}else{let i=n[t],a=r[t];!Cn(i,a)&&!Ii(i,a)&&V(e,typeof a==`function`?()=>a:a)}}function Bi(e){return e.acc===!0}function Vi(e,t,n,r,i,a){if(e.acc===!0){zi(e,t,i,a,!1);return}!Cn(n,r)&&!Ii(n,r)&&V(e,typeof r==`function`?()=>r:r)}function Hi(e,t,n){let r=e.h;if(r!==null)for(let e of Reflect.ownKeys(r))V(r[e],e in n);e.k!==null&&(Array.isArray(n)&&Array.isArray(t)?Li(t,n):Ri(t,n))&&V(e.k,e=>e+1)}function Ui(e,t,n){if(e.dk!==null&&t!==n&&ui(e),e.fam?.opt&&!w){T(!0);try{Ui(e,t,n)}finally{T(!1)}return}let r=e.n;if(r!==null)for(let e of Reflect.ownKeys(r))zi(r[e],e,t,n);let i=e.h;if(i!==null)for(let e of Reflect.ownKeys(i))V(i[e],e in n);e.k!==null&&(Array.isArray(n)&&Array.isArray(t)?Li(t,n):Ri(t,n))&&V(e.k,e=>e+1)}var Wi=0,Gi=null;function Ki(e){if(e.fam!==null)return e.fam;let t=e;for(;t.u!==null;)t=t.u;return t}function Y(e){return Gi!==null&&Gi.has(Ki(e))}function qi(e,t,n){return typeof n==`object`&&n&&n[G]!==void 0?Ji(e,ni(n,e,t)):n}function Ji(e,t){if(Gi!==null&&Y(e)){let e=t?.[G];e!==void 0&&e.v!==void 0&&Gi.add(Ki(e))}return t}var Yi=new Set,Xi=new Set;function Zi(){let e=[...Xi];Xi.clear();for(let t of e){let e=t.ab;e!==null&&e!==t.v&&(Ui(t,e,t.v),t.ab=t.v)}}var Qi=new Set([`__proto__`,`prototype`,`constructor`]);function $i(){let e=j();if(e===null)return!1;let t=e.gt?e.bt:e;return t!=null&&!(t.T&16)}function ea(){let e=j();if(e===null)return!1;let t=e.gt?e.bt:e;return t!=null&&!!(t.T&16)}function ta(e){let t=e.n;if(t===null)return!1;for(let e of Reflect.ownKeys(t)){let n=t[e];if(n.Ge!==g&&n.ge!=null&&n.ge.ft!==!0)return!0}return!1}function na(e){if(e.ht!==null&&!F&&!Y(e)&&!q()&&!$i()){let t=xi(e);if(t!==null)return t}return ra(e,!1)?e.pb:e.v}function ra(e,t){return e.pb!==null&&(Y(e)||q()||(t||$i())&&!ia(e)||e.fam!==null&&!ia(e)&&!ta(e)&&!ea())}function ia(e){if(e.fam?.opt!==!0||F||da())return!1;let t=Ei.get(e);return t!==void 0&&Fr.retainsOptimism(t)}var X=Object.prototype.hasOwnProperty,aa=Object.prototype.__lookupGetter__,oa=Object.prototype.__lookupSetter__,sa=Object.prototype.propertyIsEnumerable;function ca(e,t){return X.call(e,t)&&(aa.call(e,t)!==void 0||oa.call(e,t)!==void 0)}function la(e){return e.o?.be!==void 0&&e.o?.be!==g}function ua(){let e=I;return e!==null&&!!(e.T&8192)}function da(){return w||q()||ua()}function fa(e,t){let n=!da()&&la(e)?v(e.o?.be):e.Ge!==g&&(F||($i()||da())&&!(e.T&131072&&!da()))?e.Ge:t;return n===Fi?t:n}function pa(e,t,n){let r=e.v[G];if(r.ch){let e=pa(r,t,n);return e===n?n:ni(e,r,t)}let i=Pr(n,r.fam);return i===void 0?(r.v[t]===n||r.pb?.[t]===n)&&qr(n)?ni(n,r,t):n:i.px}function ma(e,t,n,r,i,a=-1){let o=e.ch&&r===e.v,s=n;if(t===`length`&&e.fam?.opt===!0&&!o&&Array.isArray(r)){if(!Y(e)){let r=e.n?.length;r===void 0?A()!==null&&B(ii(e,t,n)):A()!==null&&B(r)}return(da()?r:Fr.optimisticView(e,r)).length}if(Y(e)){if(e.fam?.opt&&ki(e)&&!da()){let n=e.n?.[t];n!==void 0&&la(n)&&(s=v(n.o?.be))}}else if(i!==void 0){if(A()!==null){let e=Dn(i);e===Tn&&(e=B(i)),(!o||la(i))&&(s=e===Fi?n:e)}else(!o||la(i))&&(s=fa(i,n))}else A()!==null&&B(i=ii(e,t,n,a));if(e.s)return qi(e,t,s);if(e.ch&&!o&&typeof s==`object`&&s&&s[G]===void 0&&(s=pa(e,t,s)),i!==void 0){if(i.pxv===s&&s!==void 0)return Ji(e,i.px);if(!qr(s))return s;let n=ni(s,e,t);return i.px=n,i.pxv=s,Ji(e,n)}return qr(s)?Ji(e,ni(s,e,t)):s}function ha(e){if(w||q())return;let t=e.fam?.node;t!=null&&t.S&6&&B(t)}function ga(e){let t=e.fam.node;if(t==null)return;let n=F;Yt(!1);let r=bi;bi=!0;try{wn(t,!0)}finally{bi=r,Yt(n)}}var _a={get(e,t,n){if(typeof t!=`string`){if(t===G)return e;if(t===Rr)return n;if(t===W)return;if(t===re)return e.fam?.node??void 0;if(t===Lr){if(P&&$r(e,t),e.fam!==null&&A()===null&&!Y(e)&&ha(e),!Y(e)&&A()!==null){B(li(e));let t=na(e);t[G]!==void 0&&t[Lr]}return}}P&&$r(e,t),e.fam!==null&&A()===null&&!Y(e)&&ha(e),e.fam!==null&&F&&!Y(e)&&!q()&&ga(e);let r=na(e);if(e.del!==null&&r===e.pb&&e.del.has(t)){!Y(e)&&A()!==null&&B(ii(e,t,void 0));return}let i=e.n?.[t];if(e.ch===!1&&Gi===null){let n=i;if(n!==void 0&&n.acc!==!0&&A()!==null){let r=Dn(n);if(r===Tn&&(r=B(n)),typeof r!=`object`||!r)return r;if(e.s)return qi(e,t,r);if(n.pxv===r)return n.px;if(qr(r)){let i=ni(r,e,t);return n.px=i,n.pxv=r,i}return r}}let a=-1;{let o;if(i===void 0?!Y(e)&&A()!==null?(o=ca(r,t),r===(e.pb??e.v)&&(a=+!!o)):o=!1:o=i.acc===!0,o){!Y(e)&&A()!==null&&B(i??ii(e,t,void 0,a));let o=Reflect.get(r,t,n);return e.s?qi(e,t,o):qr(o)?Ji(e,ni(o,e,t)):o}}let o=e.ovl&&r===e.pb;if((t===`constructor`||t===`__proto__`||t===`prototype`)&&!X.call(r,t)&&!(o&&X.call(e.v,t)))return;let s=r[t];if(s===void 0&&!X.call(r,t)&&!(o&&X.call(e.v,t))){if(s=Reflect.get(r,t,n),typeof s==`function`)return s;if(s===void 0&&!Y(e)){A()!==null&&B(ii(e,t,void 0,a));let n=e.n?.[t];if(n){let r=fa(n,void 0);return e.s?qi(e,t,r):qr(r)?Ji(e,ni(r,e,t)):r}}else if(s===void 0&&Y(e)&&e.fam?.opt&&ki(e)&&!da()){let n=e.n?.[t];n!==void 0&&la(n)&&(s=v(n.o?.be))}return e.s?qi(e,t,s):qr(s)?Ji(e,ni(s,e,t)):s}return typeof s==`function`&&!X.call(r,t)&&!(o&&X.call(e.v,t))?s:ma(e,t,s,r,i,a)},has(e,t){if(t===G||t===Rr||t===Lr)return!0;if(t===W)return!1;P&&$r(e,t),e.fam!==null&&A()===null&&!Y(e)&&ha(e);let n=na(e),r=t in n;if(r&&e.del!==null&&n===e.pb&&e.del.has(t)&&(r=!1),!Y(e)){if(A()!==null){let n=ci(e,t,r),i=B(n);la(n)&&(r=!!i)}else if(!da()){let n=e.h?.[t];n!==void 0&&la(n)&&(r=!!v(n.o?.be))}}else if(e.fam?.opt&&ki(e)&&!da()){let n=e.h?.[t];n!==void 0&&la(n)&&(r=!!v(n.o?.be))}return r},ownKeys(e){return P&&$r(e),e.fam!==null&&A()===null&&!Y(e)&&ha(e),!Y(e)&&A()!==null&&B(li(e)),ba(e,na(e))},getOwnPropertyDescriptor(e,t){if(t===W)return;let n=xa(e,na(e),t);if(n!==void 0)return t===`length`&&Array.isArray(e)||(n.configurable=!0),n},set(e,t,n){let r=Y(e),i=!r&&q();if(!r&&!i||t===`__proto__`)return!0;let a=e.s?n:J(n),o=vi(e);if(Yi.add(e),Array.isArray(o)){if(t===`length`)e.wk=Ci;else if(e.wk!==Ci){let n=e.wk??=new Set;n.add(t),n.add(`length`)}}else e.wk!==Ci&&(e.wk??=new Set).add(t),t in o||e.kc++;return Qi.has(t)?(Object.defineProperty(o,t,{value:a,writable:!0,enumerable:!0,configurable:!0}),e.del!==null&&e.del.delete(t),!0):(e.ovl&&e.sc!==2&&!X.call(o,t)?Object.defineProperty(o,t,{value:a,writable:!0,enumerable:!0,configurable:!0}):o[t]=a,e.del!==null&&e.del.delete(t),e.s&&typeof a==`object`&&a&&Ur(a),i&&Pi(e),!0)},defineProperty(e,t,n){let r=Y(e),i=!r&&q();if(!r&&!i||t===`__proto__`)return!0;(n.get||n.set)&&(e.a=!0),`value`in n&&(n={...n,value:J(n.value)});let a=vi(e);return(e.a||!(n.enumerable&&n.writable&&n.configurable))&&(e.sc=1),Yi.add(e),e.wk!==Ci&&(e.wk??=new Set).add(t),Object.defineProperty(a,t,n),e.del!==null&&e.del.delete(t),i&&Pi(e),!0},deleteProperty(e,t){let n=Y(e),r=!n&&q();if(!n&&!r)return!0;let i=vi(e);return Yi.add(e),e.wk!==Ci&&(e.wk??=new Set).add(t),delete i[t],e.ovl&&X.call(e.v,t)&&(e.del??=new Set).add(t),r&&Pi(e),!0}};function va(e,t,n=!0){let r=e[G],i=Gi;Gi=new Set,Gi.add(Ki(r)),Wi++;let a;try{a=t(e)}finally{if(Wi--,Gi=i,Wi===0&&Yi.size){let e=[...Yi];Yi.clear();for(let t of e)Pi(t)}}a!==void 0&&a!==e&&qr(a)&&(r.fam?.opt&&!w&&!q()?Fr.notifyOptimisticWrites(r,J(a)):Si(r,J(a))),Wi===0&&Xi.size&&Zi()}function ya(e,t=!1){let n=ni(e);return t&&(n[G].s=!0,Wr(e)),[n,e=>va(n,e)]}function ba(e,t){let n;if(e.ovl&&t===e.pb){n=Reflect.ownKeys(e.v);let r=e.del;r!==null&&r.size!==0&&(n=n.filter(e=>!r.has(e)));for(let r of Reflect.ownKeys(t))X.call(e.v,r)||n.push(r)}else n=Reflect.ownKeys(t);for(let e=n.length-1;e>=0&&typeof n[e]==`symbol`;e--)if(n[e]===W){n.splice(e,1);break}if(!da()&&e.fam?.opt&&e.h!==null&&(!Y(e)||ki(e))){let t=null;for(let r of Reflect.ownKeys(e.h)){let i=e.h[r];la(i)&&(t??=new Set(n),v(i.o?.be)?t.add(r):t.delete(r))}if(t!==null)return[...t]}return n}function xa(e,t,n){let r=Object.getOwnPropertyDescriptor(t,n);if(e.ovl&&t===e.pb){if(e.del!==null&&e.del.has(n))return;r===void 0&&(r=Object.getOwnPropertyDescriptor(e.v,n))}if(!da()&&e.fam?.opt&&!Y(e)){let t=e.h?.[n];if(t!==void 0&&la(t)){if(!v(t.o?.be))return;if(r===void 0){let t=e.n?.[n];return{value:t===void 0?void 0:fa(t,void 0),writable:!0,enumerable:!0,configurable:!0}}}}return r}function Sa(e,t,n){let r=typeof n?.keyed==`function`?n.keyed:void 0,i=t.length>1,a=t,o={ts:Ct(),ss:0,es:e,rs:[],ns:a,hs:[],fs:[],xt:r,cs:r||n?.keyed===!1?[]:void 0,ls:i&&n?.keyed!==!1?[]:void 0,us:n?.keyed===!1,ps:n?.fallback},s=cn(Ea.bind(o),void 0);return o.ts.bt=s,s.T&=-33,Dr(s)}var Ca={ownedWrite:!0};function wa(e,t,n,r){let i=e.rs,a=e.ss-1,o=[],s=[],c=[],l=256,u=r,d=r,f=!1;for(;u<=a&&d<=n-1;){let e=i[u],r=t[d];if(e===r){f||=(c.push(u,d,0),!0),c[c.length-1]++,u++,d++;continue}f=!1;let p=-1,m=Math.min(32-o.length,a-u,l);for(let e=1;e<=m;e++)if(i[u+e]===r){p=e;break}l-=p===-1?m:p;let h=-1;m=Math.min(32-s.length,n-1-d,l);for(let n=1;n<=m;n++)if(t[d+n]===e){h=n;break}if(l-=h===-1?m:h,p!==-1&&(h===-1||p<=h)){for(;p-->0;)o.push(u++);continue}if(h!==-1){for(;h-->0;)s.push(d++);continue}if(l<=0||o.length===32||s.length===32)return!1;o.push(u++),s.push(d++)}for(;u<=a;u++){if(o.length===32)return!1;o.push(u)}for(;d<=n-1;d++){if(s.length===32)return!1;s.push(d)}return Ta(e,t,n,o,s,c)}function Ta(e,t,n,r,i,a){let o=e.rs,s,c,l;if(i.length!==0)for(l=Array(r.length),c=0;c<i.length;c++){let e=-1;for(s=0;s<r.length;s++)if(!l[s]&&o[r[s]]===t[i[c]]){e=s;break}if(e===-1)return!1;l[e]=!0,i[c]=i[c]<<6|e}if(r.length!==0||i.length!==0){let e=new Set;for(s=0;s<r.length;s++)e.add(o[r[s]]);for(c=0;c<i.length;c++)e.add(t[i[c]>>6]);for(let t=0;t<a.length;t+=3){let n=a[t];for(let r=0,i=a[t+2];r<i;r++)if(e.has(o[n+r]))return!1}}let u=e.hs,d=e.fs,f=u.slice(0,n),p=d.slice(0,n);for(let e=0;e<a.length;e+=3){let t=a[e],n=a[e+1];if(t!==n)for(let r=0;r<a[e+2];r++)f[n+r]=u[t+r],p[n+r]=d[t+r]}for(c=0;c<i.length;c++){let e=i[c]>>6,t=r[i[c]&63];f[e]=u[t],p[e]=d[t]}for(e.hs=f,e.fs=p,e.ss=n,e.rs=t.slice(0),s=0;s<r.length;s++)(l===void 0||!l[s])&&d[r[s]].dispose();return!0}function Ea(){let e=this.es()||[],t=e.length;return e[Lr],H(this.ts,()=>{let n,r,i,a,o=this.cs?this.us?()=>(i[r]=hn(e[r],Ca),this.ns(Dr(i[r]),r)):()=>(i[r]=hn(e[r],Ca),a&&(a[r]=hn(r,Ca)),this.ns(Dr(i[r]),a?Dr(a[r]):void 0)):this.ls?()=>{let t=e[r];return a[r]=hn(r,Ca),this.ns(t,Dr(a[r]))}:()=>{let t=e[r];return this.ns(t)};if(t===0)this.ss!==0&&(this.ts.dispose(!1),this.fs=[],this.rs=[],this.hs=[],this.ss=0,this.cs&&=[],this.ls&&=[]),this.ps&&!this.hs[0]&&(this.fs[0]?.dispose(),this.hs[0]=H(this.fs[0]=Ct(),this.ps));else if(this.ss===0){let s=Array(t),c=Array(t);i=this.cs&&Array(t),a=this.ls&&Array(t);try{for(r=0;r<t;r++)s[r]=H(c[r]=Ct(),o)}catch(e){for(n=0;n<=r;n++)c[n]?.dispose();throw e}this.fs[0]&&this.fs[0].dispose(),this.hs=s,this.fs=c,i&&(this.cs=i),a&&(this.ls=a),this.rs=e.slice(0),this.ss=t}else{let s,c,l,u,d,f,p,m,h;for(s=0,c=Math.min(this.ss,t);s<c&&(this.rs[s]===e[s]||this.cs&&Da(this.xt,this.rs[s],e[s]));s++)this.cs&&V(this.cs[s],e[s]);for(c=this.ss-1,l=t-1;c>=s&&l>=s&&(this.rs[c]===e[l]||this.cs&&Da(this.xt,this.rs[c],e[l]));c--,l--);if(s===t&&this.ss===t){this.rs=e.slice(0);return}if(t<=this.ss&&c-s>64&&this.cs===void 0&&this.ls===void 0){let n=s+(l-s>>1),r=e[n],i=Math.min(c,n+32),a=Math.max(s,n-32);for(;a<=i&&this.rs[a]!==r;)a++;if(a<=i&&wa(this,e,t,s))return}let g=t-this.ss,_=Array(t),ee=Array(t);for(i=this.cs?Array(t):void 0,a=this.ls?Array(t):void 0,f=new Map,p=Array(l+1),r=l;r>=s;r--)u=e[r],d=this.xt?this.xt(u):u,n=f.get(d),p[r]=n===void 0?-1:n,f.set(d,r);for(n=s;n<=c;n++)u=this.rs[n],d=this.xt?this.xt(u):u,r=f.get(d),r!==void 0&&r!==-1?(_[r]=this.hs[n],ee[r]=this.fs[n],i&&(i[r]=this.cs[n]),a&&(a[r]=this.ls[n]),r=p[r],f.set(d,r)):(m??=[]).push(this.fs[n]);try{for(r=s;r<=l;r++)ee[r]===void 0&&((h??=[]).push(ee[r]=Ct()),_[r]=H(ee[r],o))}catch(e){if(h)for(n=0;n<h.length;n++)h[n].dispose();throw e}for(n=0;n<s;n++)_[n]=this.hs[n],ee[n]=this.fs[n],i&&(i[n]=this.cs[n]),a&&(a[n]=this.ls[n]);for(r=s;r<=l;r++)i&&V(i[r],e[r]),a&&V(a[r],r);for(r=l+1;r<t;r++)_[r]=this.hs[r-g],ee[r]=this.fs[r-g],i&&(i[r]=this.cs[r-g],V(i[r],e[r])),a&&(a[r]=this.ls[r-g],g!==0&&V(a[r],r));if(this.hs=_,this.fs=ee,i&&(this.cs=i),a&&(this.ls=a),this.ss=t,this.rs=e.slice(0),m)for(n=0;n<m.length;n++)m[n].dispose()}}),this.hs}function Da(e,t,n){return!e||e(t)===e(n)}function Oa(e,t,n,r=!1){if(t==null)throw Error(``);let i=t?.[G];if(i===void 0||i.px!==t)throw Error(``);i.ovl&&_i(i);let a=n===null?null:typeof n==`string`?e=>e?.[n]:n;if(r&&e!==t&&e?.[G]!==void 0){if((i.pb??i.v)===e)return;Si(i,e);return}let o=J(e);if(a){let e=a(i.pb??i.v);if(e!==void 0&&!ja(a(o),e)){if(!r)throw Error(``);let e=i.pb??i.v;Nr(e)?delete e[W]:(i.fam?.map??Mr).delete(e),Si(i,o);return}}if(i.fam?.opt===!0&&!w&&!q()){Fr.applyTentative(i,o,a);return}ka(i,o,a,r)}function ka(e,t,n,r=!1){let i=e.pb??e.v;if(t===i&&!Nr(i))return;let a=e.fam,o=a?.opt===!0?Fr.optimisticView(e,i):i,s=Array.isArray(t),c=a===null,l=e.s===!0,u=i;if(Si(e,t,c),l&&Wr(t),Array.isArray(o)!==s){c&&Ui(e,u,t);return}if(s){let i=o,s=t,d=c?e.n:null,f=0;if(n&&!l){let o=i.length,c=s.length,l=!1,p=0;for(let m=Math.min(o,c);p<m;p++){let o=s[p],c=i[p];if(c!==o&&!(typeof c==`object`&&c&&typeof o==`object`&&o&&ja(n(c),n(o))))break;if((c!==o||typeof o==`object`&&o&&Nr(o))&&typeof o==`object`&&o&&Ma(J(c),o,n,a,r),e.dk!==null&&!l&&!(typeof o==`object`&&o?Ii(c,o):Cn(c,o))&&(ui(e),l=!0),d!==null){let e=d[p];e!==void 0&&(f++,Vi(e,p,u[p],o,u,t))}}e.dk!==null&&!l&&p<s.length&&ui(e);let m=p,h=null;for(;p<s.length;p++){let e=s[p];if(typeof e==`object`&&e){let t=n(e),o;if(t!==void 0){if(h===null){h=new Map;for(let e=m;e<i.length;e++){let t=J(i[e]);if(typeof t==`object`&&t){let r=n(t);if(r===void 0)continue;let i=h.get(r);i===void 0?h.set(r,e):Array.isArray(i)?i.push(e):h.set(r,[i,e])}}}let e=h.get(t);e===void 0?o=void 0:Array.isArray(e)?(o=J(i[e.shift()]),e.length===1&&h.set(t,e[0])):(o=J(i[e]),h.delete(t))}else o=J(i[p]);Ma(o,e,n,a,r)}if(d!==null){let e=d[p];e!==void 0&&(f++,zi(e,p,u,t,!1))}}}else{let o=Math.min(i.length,s.length),c=s.length,p=!1;for(let m=0;m<c;m++){let c=s[m];if(!l&&m<o&&typeof c==`object`&&c&&Ma(J(i[m]),c,n,a,r),e.dk!==null&&!p&&!(typeof c==`object`&&c?Ii(i[m],c):Cn(i[m],c))&&(ui(e),p=!0),d!==null){let e=d[m];e!==void 0&&(f++,zi(e,m,u,t,!1))}}}if(c){if(d!==null&&f<e.nc)for(let e of Reflect.ownKeys(d)){let n=typeof e==`string`?+e:NaN;n>=0&&n<s.length||zi(d[e],e,u,t,!1)}Hi(e,u,t)}return}{let i=c?e.n:null,s=0,d=!1;for(let c in t){let f=t[c],p=u[c],m=typeof f==`object`&&!!f;if(p===f&&(!m||!Nr(f))&&(i===null||i[c]===void 0||!Bi(i[c]))){i!==null&&i[c]!==void 0&&s++;continue}if(m&&!l&&Ma(J(o[c]),f,n,a,r),e.dk!==null&&!d&&!(m?Ii(p,f):Cn(p,f))&&(ui(e),d=!0),i!==null){let e=i[c];e!==void 0&&(s++,Vi(e,c,p,f,u,t))}}let f=Object.getOwnPropertySymbols(t);for(let e=0;e<f.length;e++){let c=f[e];if(c===W)continue;let d=t[c];if(!l&&typeof d==`object`&&d&&Ma(J(o[c]),d,n,a,r),i!==null){let e=i[c];e!==void 0&&(s++,Vi(e,c,u[c],d,u,t))}}if(c){if(i!==null&&s<e.nc)for(let e of Reflect.ownKeys(i))Aa.call(t,e)||zi(i[e],e,u,t,!1);Hi(e,u,t)}return}}var Aa=Object.prototype.hasOwnProperty;function ja(e,t){return e===t||e!==e&&t!==t}function Ma(e,t,n,r,i=!1){if(typeof e!=`object`||!e||typeof t!=`object`||!t)return;let a=Pr(e,r);if(a!==void 0&&qr(t)&&!(Vr&&Hr(t))&&(t=J(t),Array.isArray(e)===Array.isArray(t))){if(n){let r=n(e),i=n(t);if(r!==void 0&&i!==void 0&&!ja(r,i))return}(i||n===null||a.d)&&ka(a,t,n,i)}}function Na(e,t,n){let r=e=>n?n(e):e();return new Proxy(Array.isArray(e)?[]:{},{get(r,i){let a,o=w;K(!0),T(!0);try{a=e[i]}finally{K(!1),T(o)}return i===G?a:typeof a==`object`&&a?Na(a,t,n):a},has(t,n){let r,i=w;K(!0),T(!0);try{r=n in e}finally{K(!1),T(i)}return r},set(n,i,a){if(t&&!t())return!0;let o=w;K(!0),T(!0);try{r(()=>{e[i]=a})}finally{K(!1),T(o)}return!0},deleteProperty(n,i){if(t&&!t())return!0;let a=w;K(!0),T(!0);try{r(()=>{delete e[i]})}finally{K(!1),T(a)}return!0},ownKeys(){let t=w;K(!0),T(!0);try{return Reflect.ownKeys(e)}finally{K(!1),T(t)}},getOwnPropertyDescriptor(t,n){let r,i=w;K(!0),T(!0);try{r=Reflect.getOwnPropertyDescriptor(e,n)}finally{K(!1),T(i)}return r&&(r.configurable=!0),r},defineProperty(n,i,a){if(t&&!t())return!0;let o=w;K(!0),T(!0);try{r(()=>{Reflect.defineProperty(e,i,a)})}finally{K(!1),T(o)}return!0}})}function Pa(e,t,n){let r={map:new WeakMap,node:null,shallow:!!n?.shallow},i=ni(t,null,null,r);r.shallow&&(i[G].s=!0,Wr(t));let a;n?.seedLoadingValue&&(a={loadingValue:void 0});let o=cn(()=>{r.node||=j(),Ia(i,e,n?.key===void 0?`id`:n.key)},a);return o.T&=-33,r.node=o,{store:i,node:o}}function Fa(e,t,n){let{store:r,node:i}=Pa(e,t,n);return[r,e=>{On(i),va(r,e)}]}function Ia(e,t,n,r,i){let a=j(),o=!1,s,c=a.Ae?JSON.parse(JSON.stringify(e[G].v)):null;return va(Na(e,()=>!o||a.o?.Pe===s,i),i=>{s=t(c??i),o=!0;let l=t=>{if(c&&(t===void 0||t===c)&&(t=JSON.parse(JSON.stringify(c))),t===i||t===void 0)return;let a=()=>va(e,e=>Oa(t,e,n,!0),!1);r?r(a,t):a()},u=Gt(a,s,l);a.Ae||l(u)},!1),a}function La(e,t,n){return typeof e==`function`?Fa(e,t,n):ya(e,!!t?.shallow)}function Ra(e,t){let r=cn(e,{lazy:!0});return R(r).h=(e,t)=>{let i=e===void 0?r.S:e,a=t===void 0?r.o?._:t;r.S&=~r.R;let o=r.C.notify(r,3,i,a),s=i&~r.R&3;if(s&&(r.S&=~s,r.o?._===a&&!(r.S&3)&&r.o!==null&&(r.o._=void 0)),!o&&i&2)throw Oe(n(a)),a},r.R=t,r.T&=-33,on(r,!0),r}function za(e,t,n,r){let i=e.C;return i.addChild(e.C=n),bt(()=>i.removeChild(e.C)),H(e,()=>{let e=cn(t);return Ra(()=>Ga(B(e)),r)})}var Ba=Symbol(),Va=class extends je{ee;v=new Set;te;U=!0;D=hn(!1,{ownedWrite:!0,H:!0});_;P=hn(!1,{ownedWrite:!0,H:!0});W;L=!1;re;ne=Ba;constructor(e){super(),this.ee=e}run(e){if(e&&!B(this.D))return super.run(e)}notify(e,t,r,i){if(!(t&this.ee))return super.notify(e,t,r,i);if(this.L&&this.re){let e=z(()=>{try{return this.re()}catch{return Ba}});e!==this.ne&&(this.ne=e,this.L=!1,this.v.clear())}if(this.ee&1&&this.L)return super.notify(e,t,r,i);if(r&this.ee){this.U=!0;let t=i?.source||e.o?._?.source;if(t){let e=this.v.size===0;this.v.add(t),e&&V(this.D,!0),this.ee&2&&V(this._,n(t.o?._))}}return t&=~this.ee,!t||super.notify(e,t,r,i)}se(){for(let e of this.v)(e.ie&64||!e.o?.t&&!(e.S&this.ee)&&!(this.ee&2&&e.S&1))&&this.v.delete(e);if(!this.v.size&&(this.U=this.ee&1&&this.U&&!this.L&&this.te?!!(this.te.S&this.ee):!1,!this.U&&(V(this.D,!1),this.re)))try{this.ne=z(()=>this.re())}catch{}}};function Ha(t,n,r,i){let a=Ct(),o=new Va(t);t===2&&(o._=hn(void 0,{ownedWrite:!0,H:!0})),i&&(o.re=i);let s=o.te=za(a,n,o,t);return z(()=>{let n=!1;try{B(s)}catch(t){if(t instanceof e)n=!0;else throw t}o.U=n||!!(s.S&t)||s.o?._ instanceof e}),Dr(cn(()=>{if(!B(o.D)){let e=B(s);if(!z(()=>B(o.D)))return o.L=!0,e}return r(o)},{H:!0}))}function Ua(e,t,n){return Ha(1,e,()=>t(),n?.on)}function Wa(e,t){return Ha(2,e,e=>t(Dr(e._),()=>{for(let t of e.v)t.oe!==void 0&&on(t);E()}))}function Ga(e,t){if(typeof e==`function`&&!e.length){if(t?.doNotUnwrap)return e;do e=e();while(typeof e==`function`&&!e.length)}if(!t?.skipNonRendered||e!=null&&e!==!0&&e!==!1&&e!==``){if(Array.isArray(e)){let n=[];return Ka(e,n,t)?()=>{let e=[];return Ka(n,e,{...t,doNotUnwrap:!1}),e}:n}return e}}function Ka(t,n=[],r){let i=null,a=!1;for(let o=0;o<t.length;o++)try{let e=t[o];if(typeof e==`function`&&!e.length){if(r?.doNotUnwrap){n.push(e),a=!0;continue}do e=e();while(typeof e==`function`&&!e.length)}Array.isArray(e)?a=Ka(e,n,r)||a:r?.skipNonRendered&&(e==null||e===!0||e===!1||e===``)||n.push(e)}catch(t){if(!(t instanceof e))throw t;i=t}if(i)throw i;return a}function qa(){return!0}var Ja={get(e,t,n){return t===Rr?n:e.get(t)},has(e,t){return t===Rr||e.has(t)},set:qa,deleteProperty:qa,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:qa,deleteProperty:qa}},ownKeys(e){return e.keys()}};function Ya(e){return(e=typeof e==`function`?e():e)?e:{}}var Xa=Symbol(0);function Za(e){return e!=null&&e[Rr]===e?e[Xa]:void 0}function Qa(...e){if(e.length===1&&typeof e[0]!=`function`)return e[0];let t=!1,n=[];for(let r=0;r<e.length;r++){let i=e[r];t||=!!i&&Rr in i;let a=!!i&&i[Xa];if(a)for(let e=0;e<a.length;e++)n.push(a[e]);else n.push(typeof i==`function`?(t=!0,U(i)):i)}if(te&&t)return new Proxy({get(e){if(e===Xa)return n;for(let t=n.length-1;t>=0;t--){let r=Ya(n[t]);if(e in r)return r[e]}},has(e){for(let t=n.length-1;t>=0;t--)if(e in Ya(n[t]))return!0;return!1},keys(){let e=new Set;for(let t=0;t<n.length;t++){let r=Yr(Ya(n[t]));for(let t=0;t<r.length;t++)e.add(r[t])}return[...e]}},Ja);let r=Object.create(null),i=!1,a=n.length-1;for(let e=a;e>=0;e--){let t=n[e];if(!t){e===a&&a--;continue}let o=Object.getOwnPropertyNames(t);for(let n=o.length-1;n>=0;n--){let s=o[n];if(s!==`__proto__`&&s!==`constructor`&&!r[s]){i||=e!==a;let n=Object.getOwnPropertyDescriptor(t,s);r[s]=n.get?{enumerable:!0,configurable:!0,get:n.get.bind(t)}:n}}}if(!i)return n[a];let o={},s=Object.keys(r);for(let e=s.length-1;e>=0;e--){let t=s[e],n=r[t];n.get?Object.defineProperty(o,t,n):o[t]=n.value}return o[Xa]=n,o}function $a(e,...t){if(te&&Rr in e)return new Proxy({get(n){return n===Xa||t.includes(n)?void 0:e[n]},has(n){return n!==Xa&&!t.includes(n)&&n in e},keys(){return Yr(e).filter(e=>!t.includes(e))}},Ja);let n={},r=Object.getOwnPropertyNames(e),i=t.length>4&&r.length>t.length?new Set(t):void 0;for(let a of r)if(i?!i.has(a):!t.includes(a)){let t=Object.getOwnPropertyDescriptor(e,a);!t.get&&!t.set&&t.enumerable&&t.writable&&t.configurable?n[a]=t.value:Object.defineProperty(n,a,t)}return n}var eo=!1;function to(e,t){let n=Symbol(t&&t.name||``);function r(e){return wt(()=>(Mn(r,e.value),ro(()=>e.children)))}return r.id=n,r.defaultValue=e,r}function no(e){return jn(e)}function ro(e){let t=U(e,{lazy:!0}),n=U(()=>Ga(t()),{lazy:!0,sync:!0});return n.toArray=()=>{let e=n();return Array.isArray(e)?e:e==null?[]:[e]},n}var io={id:Symbol(`NoHydrateContext`),defaultValue:!1},Z={hydrating:!1,registry:void 0,done:!1};function ao(){let e=j();if(!e)throw Error(`getNextContextId cannot be used under non-hydrating context`);if(!jn(io))return gt(e)}var oo=null,so=0,co=!1,lo=null;function uo(){if(lo)return;let e=j();if(e){for(;e._parent;)e=e._parent;tn(e),lo=e}}function fo(){return!co&&(Z.hydrating||so>0)}function po(e){if(co||!Z.hydrating&&so===0){queueMicrotask(e);return}oo||=[],oo.push(e)}function mo(){if(co)return;co=!0,_o=!0,an(),en(!1),Ye();let e=oo;if(oo=null,e)for(let t of e)t();setTimeout(()=>{globalThis._$HY&&(globalThis._$HY.done=!0),Z.registry?.clear()})}function ho(){!go&&so===0&&mo()}var go=!1,_o=!1,vo,yo,bo,xo,So,Co,wo,To,Eo=(()=>{class e{catch(){return new e}then(){return new e}finally(){return new e}}for(let t of[`all`,`allSettled`,`any`,`race`,`reject`,`resolve`])e[t]=()=>new e;return e})();function Do(e,t){let n=fetch,r=Promise;try{window.fetch=()=>new Eo,Promise=Eo;let n=e(t);return n&&typeof n[Symbol.asyncIterator]==`function`&&n[Symbol.asyncIterator]().next(),n&&typeof n.then==`function`&&n.then(void 0,()=>{}),n}finally{window.fetch=n,Promise=r}}function Oo(e){return{then(t){t(e)}}}function ko(e,t,n){if(t(),typeof e==`object`&&e){if(Io(n)&&typeof e.then==`function`)return{then:e.then.bind(e)};if(e.s===2)throw typeof e.then==`function`&&e.then(void 0,()=>{}),e.v;if(e.s===1)return e.v}return e}var Ao=new WeakSet;function jo(e,t,n){let r=j();return Z.done||!Z.has(r.id)?e(t):(Ao.has(r)?n?.ssrSource!==`hybrid`&&Fo():Ao.add(r),ko(Z.load(r.id),()=>{let r=Do(e,t);return n?.ssrSource!==`hybrid`&&r!=null&&r[No]&&Fo(),r},n))}var Mo={then(){}},No=Symbol.for(`solid.LiveSource`),Po;function Fo(){if(!Po){let[e,t]=Or(!1);Po=e,po(()=>{Po=void 0,t(!0)})}Po()}function Io(e){return typeof e==`object`&&!!e&&(`loadingValue`in e||e.seedLoadingValue===!0)}function Lo(e,t){let n=e.return?.(t);return n&&typeof n.then==`function`?n:Oo(n??{done:!0,value:t})}function Ro(e,t){let n=!0,r=null;return{next(){if(n){n=!1;let r=e.next();return r&&typeof r.then==`function`?r:t?Promise.resolve(r):Oo(r)}if(r){let e=r;return r=null,e}let i=e.next();if(i&&typeof i.then==`function`)return i;let a=i;for(;!i.done;){let t=e.next();if(t&&typeof t.then==`function`){r=t;break}i=t,i.done?a!==i&&(r=Promise.resolve(i)):a=i}return Promise.resolve(a)},return(t){return r=null,Lo(e,t)}}}function zo(e,t){for(let n of t){let t=n[0],r=e;for(let e=0;e<t.length-1;e++)r=r[t[e]];let i=t[t.length-1];n.length===1?Array.isArray(r)?r.splice(i,1):delete r[i]:n.length===3?r.splice(i,0,n[1]):r[i]=n[1]}}function Bo(e){return e!=null&&typeof e[Symbol.asyncIterator]==`function`}function Vo(e){let t=JSON.parse(JSON.stringify(e)),n=!0;return{proxy:new Proxy(t,{get(r,i){return n?t[i]:e[i]},set(r,i,a){return n?(t[i]=a,!0):Reflect.set(e,i,a)},deleteProperty(r,i){return n?(delete t[i],!0):Reflect.deleteProperty(e,i)},has(r,i){return i in(n?t:e)},ownKeys(){return Reflect.ownKeys(n?t:e)},getOwnPropertyDescriptor(r,i){return Object.getOwnPropertyDescriptor(n?t:e,i)}}),activate(){n=!1}}}function Ho(e,t){let n=e[Symbol.asyncIterator](),r=!0;return{[Symbol.asyncIterator](){return{next(){let e=n.next();return r?(r=!1,e.then(e=>(t(),e.done?e:{done:!1,value:void 0}))):e},return(e){return Lo(n,e)}}}}}function Uo(e,t,n){let r=vt(j());if(!Z.has(r))return null;let i=Z.load(r);if(!Bo(i))return null;let a=Ro(i[Symbol.asyncIterator](),Io(n)),o=!1,s={next(){let e=a.next();return{then(t,n){return e.then(e=>(e.done&&(o=!0),t(e)),e=>{if(o=!0,n)return n(e);throw e})}}},return(e){return a.return(e)}},c={[Symbol.asyncIterator](){return s}};return e(e=>o?t(e):(Do(t,e),c),n)}function Wo(e,t,n,r){let i=vt(j());if(!Z.has(i))return null;let a=Z.load(i);if(!Bo(a))return null;let o=a[Symbol.asyncIterator](),s=Io(r),c=!0,l=null,u=!1,d=e=>{throw u=!0,e};return e(e=>{if(u)return t(e);let{proxy:n}=Vo(e);Do(t,n);let r=t=>{if(t.done)return u=!0,{done:!0,value:void 0};if(c){c=!1,en(!1);try{if(Array.isArray(t.value)){for(let n=0;n<t.value.length;n++)e[n]=t.value[n];e.length=t.value.length}else{for(let n of Object.keys(e))n in t.value||delete e[n];Object.assign(e,t.value)}}finally{en(!0)}}else zo(e,t.value);return{done:!1,value:void 0}};return{[Symbol.asyncIterator](){return{next(){if(c){let e=o.next();return e&&typeof e.then==`function`?{then(t,n){e.then(e=>{let i;try{i=r(e)}catch(e){u=!0,n(e);return}t(i)},e=>{u=!0,n(e)})}}:s?new Promise(t=>{po(()=>t(r(e)))}):Oo(r(e))}if(l){let e=l;return l=null,e.then(r,d)}let e=o.next();return e&&typeof e.then==`function`?e.then(r,d):new Promise(t=>{po(()=>{let n=r(e);for(;!e.done;){let t=o.next();if(t&&typeof t.then==`function`){l=t;break}e=t,e.done||(n=r(e))}t(n)})})},return(e){return l=null,Lo(o,e)}}}}},n,r)}function Go(e){let[t,n]=Or(!1,{ownedWrite:!0}),r=e(t);return n(!0),r}function Ko(e,t,n){uo();let r=n?.ssrSource;if(r===`client`)return Go(r=>e(e=>r()?t(e):Mo,n));if(r===`hybrid`&&Z.has(vt(j()))){let r=!1,i=e=>{let n=t(e);return r=Bo(n),n};return Go(a=>e(e=>a()&&r?t(e):jo(i,e,n),n))}let i=Uo(e,t,n);return i===null?e(e=>jo(t,e,n),n):i}function qo(e,t){return!Z.hydrating||t?.transparent?U(e,t):Ko(U,e,t)}function Jo(e,t){return typeof e!=`function`||!Z.hydrating?Or(e,t):Ko(Or,e,t)}function Yo(e,t){if(!Z.hydrating)return Wa(e,t);uo();let n=vt(j());if(Z.has(n)){let r=Z.load(n);if(r!==void 0){let n=!0;return Wa(()=>{if(n)throw n=!1,r;return e()},t)}}return Wa(e,t)}function Xo(e,t){return n=>jo(()=>e(n),n,t)}function Zo(e,t,n,r,i){if(i===`client`)return Go(i=>e(e=>i()?t(e):Mo,n,r));if(i===`hybrid`)return Go(i=>e(e=>{let n=j();if(!i())return Z.has(n.id)?ko(Z.load(n.id),()=>Do(t,e),r):t(e);let{proxy:a,activate:o}=Vo(e),s=t(a);return Bo(s)?Ho(s,o):s},n,r));let a=Wo(e,t,n,r);return a===null?e(Xo(t,r),n,r):a}function Qo(e,t,n,r){return uo(),Zo(e,t,n,r,r?.ssrSource)}function $o(e,t,n,r){if(!Z.hydrating||r?.transparent)return e(t,n,r);if(r?.ssrSource===`client`){let i=!1;Go(a=>e(e=>a()?(i=!0,t(e)):e,(e,t)=>{if(i)return n(e,t)},r));return}uo(),e(e=>jo(t,e),n,r)}function es(e,t,n){return $o(Ar,e,t,n)}function ts(e,t,n){return $o(kr,e,t,n)}function ns(e,t,n){let r=j(),i=r&&r.id!=null?vt(r):void 0,a=i==null?void 0:globalThis._$HY?.modules?.[i];if(a){let e=n?a[n]:a.default;return()=>e}if(!e&&t)throw Error(`lazy() module "${t}" (hydration id "${i}") was not preloaded before hydration.`);return e}function rs(){vo=qo,yo=Jo,bo=Yo,wo=Qo,xo=es,So=ts,Co=Ns,To=ns,Z.getNextContextId=ao,Z.isHydrationInProgress=fo,Z.onHydrationEnd=po;let e=globalThis._$HY;if(e&&!e.fr){e.f||=_s,e.fr={pending:Cs,subscribe:ws,claim:ys,release:bs};let t=e.fe;e.fe=(e,n)=>{t&&t(e,n);for(let t of ms)t(e,n)},Ts(e)}go=Z.hydrating,_o=Z.done,Object.defineProperty(Z,"hydrating",{get(){return go},set(e){let t=go;go=e,!t&&e?(co=!1,_o=!1,en(!0),lo=null):t&&!e&&(lo&&=(nn(lo),null),ho())},configurable:!0,enumerable:!0}),Object.defineProperty(Z,"done",{get(){return _o},set(e){_o=e,e&&mo()},configurable:!0,enumerable:!0})}var Q=(...e)=>(vo||U)(...e),is=(...e)=>(yo||Or)(...e),as=(...e)=>(bo||Wa)(...e),os=(...e)=>typeof e[0]==`function`&&Z.hydrating?wo(La,e[0],e[1]??{},e[2]):La(...e),ss=(...e)=>(xo||Ar)(...e),cs=(...e)=>(So||kr)(...e);function ls(){en(!1);let[e,t]=Or(void 0,{equals:!1});return e(),en(!0),t}function us(e,t,n,r,i=!0){let a=Z.boundaryScopes?.get(t);if(!r())return;if(xt(e)){ho();return}let o=Z.registry,s=Z.gather;a&&(Z.registry=a.registry,Z.gather=a.gather);try{i&&Z.gather?.(t),go=i,i&&(tn(e),lo=e),n(),Ye(),i&&(lo=null),go=!1,i&&nn(e),Ye()}finally{a&&(Z.registry=o,Z.gather=s)}ho()}function ds(e,t){so++,Z.captureBoundaryScope?.(t);let n=!1,r=()=>{if(n)return!1;n=!0,so--,Z.boundaryScopes?.delete(t);let e=fs.get(t);return e&&(e.claimed=!1),!0};Er(()=>{xt(e)&&(Z.cleanupFragment?.(t),r()&&ho())});let i=ls();return[i,n=>us(e,t,i,r,n),r]}var fs=new Map,ps=new Set,ms=new Set,hs=new Map;function gs(e){let t=fs.get(e);return t||fs.set(e,t={}),t}function _s(e){let t=gs(e);return!co||t.claimed?globalThis.$dfr(e):(t.held=!0,0)}function vs(e){let t=fs.get(e);t&&t.held&&(t.held=!1,globalThis.$dfr(e))}function ys(e){gs(e).claimed=!0,vs(e)}function bs(e){let t=fs.get(e);t&&(t.claimed=!1)}function xs(e,t){if(ps.has(t))return!1;let n=e.r[t+`_fr`];return!n||typeof n!=`object`?!1:n.s?e.v&&e.v[t]||!document.getElementById(t)?!1:!!document.getElementById(`pl-`+t):!0}function Ss(e){let t=globalThis._$HY;return t&&t.v&&t.v[e]||document.getElementById(e)?!1:!!document.getElementById(`pl-`+e)}function Cs(){let e=globalThis._$HY;if(!e||!e.r)return!1;for(let t in e.r)if(t.length>3&&t.endsWith(`_fr`)&&xs(e,t.slice(0,-3)))return!0;return!1}function ws(e){return ms.add(e),()=>ms.delete(e)}function Ts(e){typeof document>`u`||document.readyState!==`loading`||document.addEventListener(`DOMContentLoaded`,()=>{if(e.r){for(let t in e.r){if(t.length<=3||!t.endsWith(`_fr`))continue;let n=e.r[t];n&&typeof n==`object`&&!n.s&&Ds(e,t.slice(0,-3))}setTimeout(()=>Es(e))}},{once:!0})}function Es(e){let t=globalThis.$R;if(!t||typeof t!=`object`)return;let n,r=t=>{if(!t||typeof t!=`object`||typeof t.f!=`function`||!t.p||typeof t.p.then!=`function`||t.p.s)return;if(!n){n=new Map;for(let t in e.r)n.set(e.r[t],t)}let r=n.get(t.p);if(r!==void 0){delete e.r[r];return}let i=Error(`Hydration value was truncated: the stream ended before it settled.`);t.f(i),t.p.s=2,t.p.v=i,t.p.then(void 0,()=>{})};for(let e in t){let n=t[e];if(Array.isArray(n))for(let e of n)r(e);else r(n)}}function Ds(e,t){if(ps.has(t))return;ps.add(t);let n=Error(`Hydration fragment "${t}" was truncated: the stream ended before its content arrived.`),r=e.r[t+`_fr`];r&&typeof r==`object`&&(r.s=2,r.v=n);let i=hs.get(t);i&&(hs.delete(t),i(n));for(let e of ms)e(t)}function Os(e){return new Promise((t,n)=>hs.set(e,n))}function ks(e,t,n,r=!0,i){let a=(i?Promise.race([Promise.resolve(e),i]):Promise.resolve(e)).then(()=>(e&&typeof e==`object`&&(e.s=1),!0),t=>(e&&typeof e==`object`&&(e.s=2,e.v=t),r));if(!n){a.then(e=>t(e));return}let o=n.then(()=>!0,e=>(As(e),!1));Promise.all([a,o]).then(([e,n])=>t(n?e:!1))}function As(e){console.error(`Hydration module preload failed; rendering boundary content on the client:`,e)}function js(e,t,n){Z.gather?.(e);let r=()=>queueMicrotask(t);return n?(n.then(r,e=>{As(e),queueMicrotask(()=>t(!1))}),!0):(r(),!1)}var Ms=(e,t,n)=>(Co||Ua)(e,t,n);function Ns(e,t,n){if(!Z.hydrating)return Ua(e,t,n);let r=!1;return U(()=>{let i=j(),a=i.id,o;if(Z.hydrating&&Z.has(a+`_assets`)){let e=Z.load(a+`_assets`);e&&typeof e==`object`&&(o=Z.loadModuleAssets?.(e))}if(Z.hydrating&&Z.has(a)){let s=Z.load(a),c;if(s&&(typeof s!=`object`||s.s==null?c=s:s.s===1||s.s===2?Z.gather?.(a):c=s),s&&typeof s==`object`&&s.s===1&&c==null&&!r){if(o){r=!0;let[,e]=ds(i,a);js(a,e,o);return}return Ua(e,t,n)}if(c){let[e,n,r]=ds(i,a);if(c!==`$$f`)ks(c,n,o);else{let t=()=>{r()&&(e(),ho())};o?o.then(()=>queueMicrotask(t),e=>{As(e),queueMicrotask(t)}):queueMicrotask(t)}return t()}}if(Z.hydrating&&Z.has(a+`_fr`)&&!r){let s=Z.load(a+`_fr`);if(vs(a),s&&typeof s==`object`&&s.s===1&&!o&&!Ss(a))return Z.gather?.(a),Ua(e,t,n);r=!0;let[,c]=ds(i,a);if(s&&typeof s==`object`&&s.s===1&&Ss(a)){let e=()=>c(!1);return o?o.then(()=>queueMicrotask(e),t=>{As(t),queueMicrotask(e)}):queueMicrotask(e),t()}if(s&&typeof s==`object`&&(s.s===1||s.s===2)){if(s.s===2){s.catch?.(()=>{});let e=()=>c(!1);o?o.then(()=>queueMicrotask(e),t=>{As(t),queueMicrotask(e)}):queueMicrotask(e);return}js(a,c,o);return}return ys(a),ks(s,c,o,!1,Os(a)),t()}if(o&&!Z.has(a)){let[,e]=ds(i,a);o.then(()=>e(),t=>{As(t),e(!1)});return}return Ua(e,t,n)})}function Ps(e,t,n){return z(()=>e(t||{}))}function Fs(e,t,n){let r=t?.export,i,a,o=()=>{if(a)return a;let t=a=e();return t.then(e=>{i=()=>r?e[r]:e.default},()=>{a===t&&(a=void 0)}),t},s=e=>{Z.hydrating&&(i=To(i,n,r));let t=i;t||=(o(),U(()=>o().then(e=>r?e[r]:e.default)));let a;return U(()=>(a=(i||t)())?z(()=>a(e)):``,{sync:!0})};return s.preload=o,s.moduleUrl=n,s}var Is=e=>`Stale read from <${e}>.`;function Ls(e){let t=`fallback`in e?{keyed:e.keyed,fallback:()=>e.fallback}:{keyed:e.keyed},n=j(),r,i=()=>H(n,()=>Sa(()=>e.each,e.children,t));return Z.hydrating&&(r=i()),()=>(r??=i())()}function Rs(e){let t=e.keyed,n=U(()=>e.when,void 0),r=t?n:U(n,{equals:(e,t)=>!e==!t,sync:!0});return U(()=>{let i=r();if(i){let a=e.children;return typeof a==`function`&&a.length>0?z(t?()=>a(i):()=>a(()=>{if(!z(r))throw Is(`Show`);return n()}),eo):a}return e.fallback},{sync:!0})}function zs(e){let t=ro(()=>e.children),n=U(()=>{let e=t.toArray(),n=()=>void 0;for(let t=0;t<e.length;t++){let r=t,i=e[t];if(i==null)continue;let a=n,o=U(()=>a()?void 0:i.when,void 0),s=i.keyed?o:U(o,{equals:(e,t)=>!e==!t,sync:!0});n=()=>{let e=a();if(e)return e;let t=s();return t?[r,t,o,i]:void 0}}return n},{sync:!0});return U(()=>{let t=n()();if(!t)return e.fallback;let[r,i,a,o]=t,s=o.children;return typeof s==`function`&&s.length>0?o.keyed?z(()=>s(i),eo):z(()=>s(()=>{if(z(n)()?.[0]!==r)throw Is(`Match`);return a()}),eo):s},{sync:!0})}function Bs(e){return e}function Vs(e){return as(()=>e.children,(t,n)=>{let r=e.fallback;return typeof r==`function`&&r.length?r(t,n):r})}function Hs(e){return Ms(()=>e.children,()=>e.fallback,`on`in e?{on:()=>e.on}:void 0)}var Us=`modulepreload`,Ws=function(e){return`/`+e},Gs={},Ks=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ws(t,n),t=s(t),t in Gs)return;Gs[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Us,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},qs={INPUT:{value:1,defaultValue:2,checked:1,defaultChecked:2},SELECT:{value:1},OPTION:{value:1,selected:1,defaultSelected:2},TEXTAREA:{value:1,defaultValue:2},VIDEO:{muted:1,defaultMuted:2},AUDIO:{muted:1,defaultMuted:2}},Js=new Set([`innerHTML`,`textContent`,`innerText`,`children`]),$=Symbol(`slot`),Ys=Symbol(`host`),Xs=new Set([`beforeinput`,`click`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`]),Zs={svg:`http://www.w3.org/2000/svg`,mathml:`http://www.w3.org/1998/Math/MathML`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`},Qs={transparent:!0,sync:!0},$s={sync:!0};function ec(e,t,n){ss(e,t,n?{sync:!0,...n,transparent:!n.scope}:Qs)}function tc(e){return Q(()=>e(),$s)}function nc(e,t,n,r){let i=n.length,a=t.length,o=i,s=0,c=0,l=t[a-1],u=l[$],d=l.parentNode===e&&(!u||u===r)?l.nextSibling:r||null,f=null,p,m,h=t=>{if(!t)return!1;let n=t[$];return t.parentNode===e&&(!n||n===r)};for(;s<a||c<o;){if(t[s]===n[c]&&h(t[s])){s++,c++;continue}for(;t[a-1]===n[o-1]&&h(t[a-1]);)a--,o--;if(a===s){let t;if(o<i){if(c){let i=n[c-1],a=i[$];t=i.parentNode===e&&(!a||a===r)?i.nextSibling:d}else t=n[o-c]}else t=d;for(;c<o;){let i=n[c++];e.insertBefore(i,t),r&&(i[$]=r)}}else if(o===c)for(;s<a;){let n=t[s++];if(!f||!f.has(n)){let t=n[$];n.parentNode===e&&(!t||t===r)&&n.remove()}}else if((p=t[s])===n[o-1]&&n[c]===t[a-1]&&p.parentNode===e&&(!(m=p[$])||m===r)){if(r)do{let n=t[--a];if(e.insertBefore(n,p),n[$]=r,c++,s>=a-1||c>=o)break}while(t[s]===n[o-1]&&n[c]===t[a-1]);else do if(e.insertBefore(t[--a],p),c++,s>=a-1||c>=o)break;while(t[s]===n[o-1]&&n[c]===t[a-1])}else{if(!f){f=new Map;let e=c;for(;e<o;)f.set(n[e],e++)}let i=f.get(t[s]);if(i!=null){if(c<i&&i<o){let l=s,u=1,p;for(;++l<a&&l<o&&(p=f.get(t[l]))!=null&&p===i+u;)u++;if(u>i-c){let a=t[s],o=a[$],l=a.parentNode===e&&(!o||o===r)?a:d;for(;c<i;){let t=n[c++];e.insertBefore(t,l),r&&(t[$]=r)}}else{let i=t[s++],a=n[c++],o=i[$];i.parentNode===e&&(!o||o===r)?e.replaceChild(a,i):e.insertBefore(a,d),r&&(a[$]=r)}}else s++}else{let n=t[s++],i=n[$];n.parentNode===e&&(!i||i===r)&&n.remove()}}}}var rc=new Set([`title`,`meta`,`link`,`style`,`script`,`base`]),ic=/^[a-zA-Z_][a-zA-Z0-9_:.-]*$/,ac=new Set([`preload`,`modulepreload`,`prefetch`,`preconnect`,`dns-prefetch`,`stylesheet`]),oc=[`as`,`crossorigin`,`type`,`media`,`imagesrcset`,`imagesizes`],sc=new Set([`crossorigin`,`integrity`,`referrerpolicy`,`fetchpriority`]);function cc(e){return typeof e==`function`?e():e}function lc(e,t){let n={};for(let r in e)n[r]=t&&r in t?t[r]:cc(e[r]);return n}function uc(e){let t=e.tag;if(t===`link`){let t=cc(e.props&&e.props.rel);return{resource:ac.has(t),rel:t}}return t===`style`?{resource:!!(e.props&&`href`in e.props)}:t===`script`?{resource:!!(e.props&&`src`in e.props)}:{resource:!1}}function dc(e,t){if(t==null||t===!1)return null;if(e===`imagesrcset`||e===`imagesizes`)return typeof t==`string`&&t!==``?t:null;let n=t===!0?``:String(t);return e===`as`?fc(n):e===`crossorigin`?n.length===15&&n.toLowerCase()===`use-credentials`?n.toLowerCase():`anonymous`:n}function fc(e){return e.replace(/[A-Z]/g,e=>String.fromCharCode(e.charCodeAt(0)+32))}function pc(e,t){let n=String(t.href||t.src||``),r=`res:`+e+`:`+(t.rel||``)+`:`+n.length+`:`+n;for(let e=0;e<oc.length;e++){let n=oc[e],i=dc(n,t[n]);i!==null&&(r+=`:`+n+`=`+i.length+`:`+i)}return r}function mc(e,t,n,r){if(e===`title`)return`title`;if(e===`base`)return`base`;if(e===`meta`&&t.charset!=null)return`charset`;if(n!=null)return e+`:key:`+n;if(e===`meta`){for(let e of[`name`,`property`,`http-equiv`])if(t[e]!=null)return`meta:`+e+`:`+t[e]+(t.media==null?``:`:media=`+t.media);return r}if(e===`link`){let e=t.rel||``;return e===`icon`||e===`apple-touch-icon`?`link:`+e+(t.sizes==null?``:`:sizes=`+t.sizes)+(t.type==null?``:`:type=`+t.type):`link:`+e+`:`+(t.href||``)}return r}function hc(e){let t=new Map,n=e.slice().sort((e,t)=>e.seq-t.seq);for(let e=0;e<n.length;e++){let r=n[e],i=new Map;for(let e=0;e<r.tags.length;e++){let t=r.tags[e],n=i.get(t.identity);n||i.set(t.identity,n=[]),n.push(t)}for(let[e,n]of i)e===`title`?t.set(e,{seq:r.seq,tags:[n[n.length-1]]}):t.set(e,{seq:r.seq,tags:n})}return t}var gc=Symbol.for(`solid.ServerFunctionMetadata`);function _c(e){if(typeof e==`function`)return e[gc]||void 0}function vc(e){return typeof e==`function`&&!!e[gc]}var yc=Symbol.for(`solid.ServerFunctionRPC`);function bc(){return globalThis[yc]}var xc=new WeakMap,Sc=e=>{let t=xc.get(e);t||(H(null,()=>{t=Q(()=>e)}),xc.set(e,t)),t()},Cc=`_$SOLID_EVENT_OWNER`,wc=Symbol(),Tc=Object.prototype.hasOwnProperty,Ec={},Dc=new Set,Oc=new Map;function kc(){}function Ac(e){return null}var jc=kc;function Mc(e,t,n,r={}){let i;Ic(t);try{wt(a=>{if(i=a,t===document){let t=e();ec(()=>Ga(t),()=>{})}else{let i=e();cl(t,()=>i,t.firstChild?null:void 0,n,{...r.insertOptions,schedule:!0})}},{id:r.renderId}),Ye()}catch(e){throw i&&i(),Lc(t),e}return()=>{i(),Lc(t),t.textContent=``}}function Nc(e,t,n){let r=document.createElement(`template`);return r.innerHTML=e,n===2?r.content.firstChild.firstChild:r.content.firstChild}function Pc(e,t){let n;return t===1?r=>document.importNode(n||=Nc(e,r,t),!0):r=>(n||=Nc(e,r,t)).cloneNode(!0)}function Fc(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];Dc.has(n)||(Dc.add(n),Oc.forEach((e,t)=>Bc(n,t,e)))}}function Ic(e){let t=Rc(e,e);t&&(t.roots=(t.roots||0)+1)}function Lc(e){let t=Oc.get(e);t&&(t.roots>1?t.roots--:delete t.roots),zc(e,e)}function Rc(e,t=e){if(!e||!t)return;let n=Oc.get(e);return n||Oc.set(e,n={owners:new Map,handlers:new Map}),n.owners.set(t,(n.owners.get(t)||0)+1),Dc.forEach(t=>Bc(t,e,n)),n}function zc(e,t=e){let n=Oc.get(e);if(!n)return;let r=n.owners.get(t);r>1?n.owners.set(t,r-1):n.owners.delete(t),!n.owners.size&&(n.handlers.forEach((t,n)=>e.removeEventListener(n,t)),Oc.delete(e))}function Bc(e,t,n){if(n.handlers.has(e))return;let r=e=>Xl(e,t,n);n.handlers.set(e,r),t.addEventListener(e,r)}function Vc(e,t){let n=e,r=0;for(;n;){if(t.owners.has(n))return{owner:n,distance:r};r++,n=n._$host||n.parentNode||n.host}}var Hc=null,Uc=Symbol.for(`solid.element-claims`);function Wc(e){return(Hc||=globalThis[Uc]=[]).push(e),()=>{let t=Hc.indexOf(e);t>-1&&Hc.splice(t,1)}}function Gc(e){if(Hc!==null)for(let t=0;t<Hc.length;t++)Hc[t](e);return e}function Kc(e,t,n){if(Kl(e))return;let r=t===`multiple`&&e.localName===`select`;if(n==null||n===!1)e.removeAttribute(t);else if(e.setAttribute(t,n===!0?``:n),r&&!e._$multiple){let t=e.options;for(let e=0;e<t.length;e++)t[e].defaultSelected&&(t[e].selected=!0)}r&&(e._$multiple=!0),Hc!==null&&(t===`href`||t===`action`)&&Gc(e)}function qc(e,t,n,r){Kl(e)||(r==null||r===!1?e.removeAttributeNS(t,n.indexOf(`:`)>-1?n.split(`:`).pop():n):e.setAttributeNS(t,n,r===!0?``:r))}function Jc(e,t,n){if(typeof t==`number`&&(t=``+t),typeof n==`number`&&(n=``+n),Kl(e)){e._$classes=t&&typeof t==`object`?ql(t):void 0;return}if(t==null||t===!1){(n||e._$classes)&&(e.removeAttribute(`class`),e._$classes=void 0);return}if(typeof t==`string`){e._$classes=void 0,t!==n&&e.setAttribute(`class`,t);return}let r;typeof n==`string`?(r={},e.removeAttribute(`class`)):r=e._$classes||ql(n||{}),t=ql(t);let i=Object.keys(t),a=Object.keys(r),o,s;for(o=0,s=a.length;o<s;o++){let n=a[o];n&&n!==`undefined`&&!t[n]&&e.classList.remove(n)}for(o=0,s=i.length;o<s;o++){let n=i[o],a=!!t[n];n&&n!==`undefined`&&r[n]!==a&&a&&e.classList.add(n)}e._$classes=t}function Yc(e,t,n,r){if(r){let r=`$$${t}`,i;Array.isArray(n)?(i=n[1],e[r]=n[0]):e[r]=n,e[`${r}Data`]=i;return}if(Array.isArray(n)){let r=n[0],i=t=>r.call(e,n[1],t);return i[wc]=n,e.addEventListener(t,i),i}return e.addEventListener(t,n,typeof n!=`function`&&n),n}function Xc(e,t,n){if(Kl(e))return;if(!t){(n||e._$styles)&&(Kc(e,`style`),e._$styles=void 0);return}let r=e.style;if(typeof t==`string`)return e._$styles=void 0,r.cssText=t;typeof n==`string`&&(r.cssText=``,n=void 0);let i=e._$styles;i||=e._$styles=n?{...n}:{};let a,o;for(o in i)(!Tc.call(t,o)||t[o]==null)&&(r.removeProperty(o),delete i[o]);for(o in t)Tc.call(t,o)&&(a=t[o],a!=null&&a!==i[o]&&(r.setProperty(o,a),i[o]=a))}function Zc(e){if(typeof e!=`object`||!e)return e;if(Array.isArray(e))return e.map(Zc);if(e[Rr]!==e)return e;let t=Qc(e),n={};for(let r=0;r<t.length;r++){let i=t[r];typeof i==`string`&&(n[i]=e[i])}return n}function Qc(e){return e[Rr]===e?Reflect.ownKeys(e):Object.keys(e)}function $c(e,t,n){let r={},i=()=>(typeof t==`function`?t():t)??{};return n||cl(e,()=>{let e=i();return Tc.call(e,`children`)?e.children:void 0}),ec(()=>{let t=i(),n=Tc.call(t,`ref`)&&t.ref;(typeof n==`function`||Array.isArray(n))&&nl(()=>n,e)},()=>{}),ec(()=>{let e=i(),t={},n=Za(e);if(n!==void 0)for(let e=0;e<n.length;e++){let r=n[e];typeof r==`function`&&(r=r()),r!=null&&el(t,r)}else el(t,e);return t},t=>ll(e,t,!0,r,!0)),r}function el(e,t){let n=Qc(t);for(let r=0;r<n.length;r++){let i=n[r];if(typeof i!=`string`||i===`children`||i===`ref`)continue;let a=t[i];e[i]=i===`style`||i===`class`?Zc(a):a}}function tl(e,t){Array.isArray(e)?e.flat(1/0).forEach(e=>e&&e(t)):e(t)}function nl(e,t){let n=z(e);H(null,()=>tl(n,t))}function rl(e){return e.$s=!0,e}var il={scope:!0},al=null;function ol(){al={claimInitial(e,t,n){return Kl(e)&&(!t&&n===void 0&&e&&(n=[...e.childNodes]),Array.isArray(n)&&sl(n)),n},reclaimRegion(e,t,n){if(!Z.hydrating||!e||!t.isConnected)return e;let r=Array.isArray(e)?e[0]:e;if(!r||!r.nodeType||r.isConnected)return e;let i;if(n){i=[];let e=n.previousSibling,t=0;for(;e;){if(e.nodeType===8){let n=e.nodeValue;if(n===`/`)t++;else if(n===`$`){if(t===0)break;t--}}i.unshift(e),e=e.previousSibling}}else i=[...t.childNodes];return sl(i)},dedupEvent(e){return!!(Z.registry&&Z.events&&Z.events.find(([t,n])=>n===e))}}}function sl(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=r.nodeType;if(i===8){let e=r.nodeValue;if(e===`!$`){r.remove();continue}if(e.startsWith(`pl-`))continue}else if(i===1&&r.localName===`template`&&r.id.startsWith(`pl-`))continue;e[t++]=r}return e.length=t,e}function cl(e,t,n,r,i){let a=n!==void 0,o=i&&i.host;if(a&&!r&&(r=[]),al!==null&&(r=al.claimInitial(e,a,r)),typeof t!=`function`&&(t=Ql(t,r,a,!0),typeof t!=`function`)){Zl(e,t,r,n),o&&$l(t,o);return}if(a&&r.length===0){let t=document.createTextNode(``);e.insertBefore(t,n),r=[t]}let s=r;ec(r=>{al!==null&&(s=al.reclaimRegion(s,e,n));let c=Ql(t(),s,a,!0);return typeof c==`function`?(ec(()=>(al!==null&&(s=al.reclaimRegion(s,e,n)),Ql(c,s,a)),t=>{s=Zl(e,t,s,n),o&&$l(s,o)},r!==void 0&&!(i&&i.schedule)?{...i,schedule:!0}:i),Ec):c},t=>{t!==Ec&&(s=Zl(e,t,s,n),o&&$l(s,o))},t.$s?i?{...i,scope:!0}:il:i)}function ll(e,t,n,r={},i=!1){let a=e.nodeName;t||={};for(let n in r)if(!(n in t)){if(n===`children`)continue;r[n]=Yl(e,n,null,r[n],i,a)}for(let o in t){if(o===`children`){n||Zl(e,Ql(t.children,void 0,!1));continue}r[o]=Yl(e,o,t[o],r[o],i,a)}}var ul=100,dl=new Map;function fl(e){return e.policy===`exclusive`?`x|`+e.key:e.type===`inline-style`?`i|`+e.id:e.type+`|`+e.href}function pl(e,t,n,r){let i=document.querySelectorAll(e);outer:for(let e=0;e<i.length;e++)if(i[e].getAttribute(t)===n){if(!r)return i[e];for(let t=0;t<oc.length;t++){let n=oc[t];if(dc(n,r[n])!==dc(n,i[e].getAttribute(n)))continue outer}return i[e]}return null}function ml(e,t){for(let n in t)e.setAttribute(n,t[n])}function hl(e){let t;if(e.type===`inline-style`)t=pl(`style[data-asset]`,`data-asset`,e.id),t||(t=document.createElement(`style`),t.setAttribute(`data-asset`,e.id),t.textContent=e.content||``);else{let n=e.type===`module`?`modulepreload`:`stylesheet`;t=pl(`link[rel="${n}"]`,`href`,e.href),t||(t=document.createElement(`link`),t.rel=n,t.href=e.href)}return e.attrs&&ml(t,e.attrs),t.isConnected||document.head.appendChild(t),t}var gl=Promise.resolve();function _l(e,t){if(e.loadPromise)return;let n=e.element,r=n.sheet!=null;if(!r&&t&&typeof performance<`u`&&performance.getEntriesByName&&(r=performance.getEntriesByName(n.href).length>0),r){e.loadState=`loaded`,e.loadPromise=gl;return}e.loadState=`pending`,e.loadPromise=new Promise(t=>{let r=n=>{e.loadState=n,t()};n.addEventListener(`load`,()=>r(`loaded`),{once:!0}),n.addEventListener(`error`,()=>r(`errored`),{once:!0})})}function vl(e){if(e.policy===`exclusive`||e.type===`inline-style`)return;let t=fl(e),n=dl.get(t);n||(n={count:0,element:null,timer:null},dl.set(t,n));let r=!0;if(!n.element||!n.element.isConnected){let t=pl(`link[rel="${e.type===`module`?`modulepreload`:`stylesheet`}"]`,`href`,e.href);!t&&e.type===`style`&&(t=pl(`link[rel="preload"][as="style"]`,`href`,e.href)),t||(r=!1,t=document.createElement(`link`),e.type===`style`?(t.setAttribute(`rel`,`preload`),t.setAttribute(`as`,`style`)):t.setAttribute(`rel`,`modulepreload`),t.setAttribute(`href`,e.href),document.body||t.setAttribute(`blocking`,`render`)),e.attrs&&ml(t,e.attrs),t.isConnected||document.head.appendChild(t),n.element=t,n.loadState=void 0,n.loadPromise=void 0}return e.type===`style`&&_l(n,r),n}function yl(e){let t=fl(e),n=dl.get(t);if(e.policy===`exclusive`){n||(n={original:e.get(),set:e.set,writers:[]},dl.set(t,n));let r={value:e.value};n.writers.push(r),n.set(r.value);let i=!1;return()=>{if(i)return;i=!0;let e=n.writers.indexOf(r),a=e===n.writers.length-1;n.writers.splice(e,1),a&&(n.writers.length?n.set(n.writers[n.writers.length-1].value):(n.set(n.original),dl.delete(t)))}}n||(n={count:0,element:null,timer:null},dl.set(t,n)),n.timer&&(clearTimeout(n.timer),n.timer=null),n.count++,!n.element||!n.element.isConnected?n.element=hl(e):e.type===`style`&&n.element.getAttribute(`rel`)===`preload`&&(n.element.removeAttribute(`as`),n.element.setAttribute(`rel`,`stylesheet`));let r=!1;return()=>{r||(r=!0,!(--n.count>0)&&(n.timer=setTimeout(()=>{dl.delete(t),n.element&&n.element.remove()},ul)))}}var bl=null,xl=0,Sl=0,Cl=null,wl=null,Tl=null,El=!1,Dl=new Set;function Ol(){if(bl)return;bl=[],Cl=new Map,wl=new Map;let e=document.querySelector(`title`);Tl=e?e.hasAttribute(`data-dh`)?e.getAttribute(`data-dhf`):e.textContent:null,globalThis._$HY&&(globalThis._$HY.h=kl)}function kl(e){for(let t=0;t<e.length;t++){let n=e[t],r=n[0]===`t`?`title`:n[1];if(!Cl.has(r)){if(n[0]===`t`)jl(n[1]);else if(n[0]===`r`){let e=Al(r);for(let t=0;t<e.length;t++)e[t].remove()}else{let e=document.createElement(n[2]);for(let t in n[3])e.setAttribute(t,n[3][t]);n[4]!=null&&(e.textContent=n[4]),e.setAttribute(`data-dh`,r),document.head.appendChild(e)}}}}function Al(e){let t=document.head.querySelectorAll(`[data-dh]`),n=[];for(let r=0;r<t.length;r++)t[r].getAttribute(`data-dh`)===e&&n.push(t[r]);return n}function jl(e){let t=document.querySelector(`title`);return t||(t=document.createElement(`title`),document.head.appendChild(t)),t.textContent=e,t.setAttribute(`data-dh`,`title`),t}function Ml(){El||(El=!0,queueMicrotask(Nl))}function Nl(){if(Z.hydrating){setTimeout(Nl,0);return}El=!1;let e=hc(bl);for(let[t,n]of Cl)if(!e.has(t)){if(Cl.delete(t),wl.delete(t),t===`title`){if(Tl!=null){let e=jl(Tl);e.removeAttribute(`data-dh`),e.removeAttribute(`data-dhf`)}}else for(let e=0;e<n.length;e++)n[e].remove()}for(let[t,n]of e){let e=``;for(let t=0;t<n.tags.length;t++)e+=n.tags[t].tag+JSON.stringify(n.tags[t].props)+`|`;if(wl.get(t)===e||(wl.set(t,e),t===`base`||t===`charset`))continue;if(t===`title`){let e=n.tags[0].props.children;jl(e==null?``:String(e)),Cl.set(t,[]);continue}let r=Al(t),i=[];for(let e=0;e<n.tags.length;e++)i.push(Fl(n.tags[e],t,r));for(let e=0;e<r.length;e++)i.indexOf(r[e])===-1&&r[e].remove();Cl.set(t,i)}}function Pl(e,t){let n=document.createElement(e);for(let e in t){if(e===`children`||e===`ref`||e.slice(0,2)===`on`||!ic.test(e))continue;let r=t[e];r!=null&&r!==!1&&n.setAttribute(e,r===!0?``:String(r))}return t.children!=null&&(n.textContent=String(t.children)),n}function Fl(e,t,n){for(let t=0;t<n.length;t++)if(Il(n[t],e))return n.splice(t,1)[0];let r=Pl(e.tag,e.props);return r.setAttribute(`data-dh`,t),document.head.appendChild(r),r}function Il(e,t){if(e.tagName.toLowerCase()!==t.tag)return!1;for(let n in t.props){if(n===`children`||n===`ref`||n.slice(0,2)===`on`||!ic.test(n))continue;let r=t.props[n];if(r==null||r===!1){if(e.hasAttribute(n))return!1}else if(e.getAttribute(n)!==(r===!0?``:String(r)))return!1}let n=t.props.children;return(n==null?``:String(n))===e.textContent}function Ll(e,t){let n=pc(e,t);if(Dl.has(n))return;Dl.add(n);let r=t.href||t.src,i=null;e===`link`&&r==null&&typeof t.imagesrcset==`string`?i=pl(`link[rel="${t.rel}"]`,`href`,null,t):r!=null&&(i=e===`link`?pl(`link[rel="${t.rel}"]`,`href`,r,t):e===`script`?pl(`script[src]`,`src`,r):pl(`style[href]`,`href`,r)),i||document.head.appendChild(Pl(e,t))}function Rl(e){let t={type:e.rel===`stylesheet`?`style`:`module`,href:e.href},n=e.rel===`stylesheet`&&e.href!=null,r=null;for(let t in e){if(t===`rel`||t===`href`||(sc.has(t)||(n=!1),!ic.test(t)))continue;let i=e[t];i!=null&&i!==!1&&((r||={})[t]=i===!0?``:String(i))}r&&(t.attrs=r),ec(()=>{let e=vl(t);n&&e.loadState===`pending`&&typeof Sc==`function`&&Sc(e.loadPromise)},()=>yl(t))}function zl(e){Ol();let t={seq:-1,tags:null},n=++Sl;ec(()=>{let t=typeof e==`function`?e():e;Array.isArray(t)||(t=[t]);let r=[],i=[];for(let e=0;e<t.length;e++){let a=t[e];if(!a||!rc.has(a.tag))continue;let o=uc(a),s=lc(a.props||{},o.rel===void 0?void 0:{rel:o.rel});if(o.resource)a.tag===`link`&&(s.rel===`stylesheet`||s.rel===`modulepreload`)?Rl(s):a.tag===`link`?Ll(a.tag,s):i.push({tag:a.tag,props:s});else{let t=cc(a.key);r.push({tag:a.tag,props:s,identity:mc(a.tag,s,t,`u:c`+n+`:`+e)})}}return{replaceable:r,resources:i}},e=>{for(let t=0;t<e.resources.length;t++)Ll(e.resources[t].tag,e.resources[t].props);return t.tags=e.replaceable,t.seq<0&&(t.seq=++xl),bl.indexOf(t)===-1&&bl.push(t),Ml(),()=>{let e=bl.indexOf(t);e>-1&&bl.splice(e,1),Ml()}})}function Bl(e){let t=globalThis._$HY;if(!t)return;let n=[];for(let r in e){if(t.modules[r])continue;let i=new URL(e[r],document.baseURI).href;t.loading[r]||(t.loading[r]=Ks(()=>import(i).then(e=>{t.modules[r]=e},e=>{throw delete t.loading[r],e}),[])),n.push(t.loading[r])}return n.length?Promise.all(n).then(()=>{}):void 0}function Vl(e,t,n={}){if(rs(),ol(),globalThis._$HY.done)return Mc(e,t,[...t.childNodes],n);let r=(t.nodeType===9?t:t.ownerDocument).head;if(r&&t.contains(r)){let e=r.firstChild;for(;e&&e.nodeType===1&&e.hasAttribute(`data-dh`)&&!e.hasAttribute(`data-dhf`);){let t=e.nextSibling;r.appendChild(e),e=t}}n.renderId||=``,globalThis._$HY.modules||(globalThis._$HY.modules={}),globalThis._$HY.loading||(globalThis._$HY.loading={}),Z.completed=globalThis._$HY.completed,Z.events=globalThis._$HY.events,Z.load=e=>globalThis._$HY.r[e],Z.has=e=>e in globalThis._$HY.r,Z.gather=e=>iu(t,e),Z.loadModuleAssets=Bl,Z.cleanupFragment=e=>{let t=document.getElementById(`pl-`+e);if(t){let n=t.nextSibling;for(;n;){let t=n.nextSibling;if(n.nodeType===8&&n.nodeValue===`pl-`+e){n.remove();break}n.remove(),n=t}t.remove()}},Z.registry=new Map,Z.boundaryScopes||=new Map,Z.captureBoundaryScope=e=>{Z.registry&&Z.boundaryScopes.set(e,{registry:Z.registry,gather:Z.gather})},Z.hydrating=!0;let i=globalThis._$HY.r,a=i&&(i[n.renderId+`_assets`]||i._assets);if(a&&typeof a==`object`){let r=Bl(a);if(r){iu(t,n.renderId);let i=Z.registry,a=Z.gather,o;return r.then(()=>{Z.registry=i,Z.gather=a,Z.hydrating=!0;try{o=Mc(e,t,[...t.childNodes],n)}finally{Z.hydrating=!1}},r=>{if(Z.hydrating=!1,Z.registry=void 0,t.nodeType===9){(globalThis.reportError||console.error)(r);return}console.error(`Hydration module preload failed, falling back to client render:`,r),o=Mc(e,t,[...t.childNodes],n)}),()=>o&&o()}}try{return iu(t,n.renderId),Mc(e,t,[...t.childNodes],n)}finally{Z.hydrating=!1}}function Hl(e){let t,n;if(!Kl()||!(t=Z.registry.get(n=au()))){if(!e)throw Error(`Hydration Mismatch. Unable to find DOM nodes for hydration key: ${n}`);return e(!0)}return Z.completed&&Z.completed.add(t),Z.registry.delete(n),t}function Ul(e,t){for(;e&&e.localName!==t;)e=e.nextSibling;return e}function Wl(e){let t=e,n=0,r=[];if(Kl(e))for(;t;){if(t.nodeType===8){let e=t.nodeValue;if(e===`$`)n++;else if(e===`/`){if(n===0)return[t,r];n--}}r.push(t),t=t.nextSibling}return[t,r]}function Gl(){Z.events&&!Z.events.queued&&(queueMicrotask(()=>{let{completed:e,events:t}=Z;if(t){for(t.queued=!1;t.length;){let[n,r]=t[0];if(!e.has(n))return;t.shift();let i,a,o,s;for(let[e,t]of Oc){if(!t.handlers.has(r.type))continue;let n=Vc(r.target,t);n&&(i?(s||=[{container:i,state:a,distance:o}],s.push({container:e,state:t,distance:n.distance})):(i=e,a=t,o=n.distance))}if(s){s.sort((e,t)=>e.distance-t.distance);for(let e=0;e<s.length;e++)Xl(r,s[e].container,s[e].state)}else i&&Xl(r,i,a)}Z.done&&(Z.events=_$HY.events=null,Z.completed=_$HY.completed=null)}}),Z.events.queued=!0)}function Kl(e){if(!Z.hydrating)return!1;if(!e||e.isConnected)return!0;let t=Z.claimRoots;if(t){for(let n=0;n<t.length;n++)if(t[n].contains(e))return!0}return!1}function ql(e){if(Array.isArray(e)){let t={};Jl(e,t),e=t}if(e&&typeof e==`object`){let t={},n=Object.keys(e);for(let r=0,i=n.length;r<i;r++){let i=n[r];if(!e[i])continue;let a=i.trim().split(/\s+/);for(let e=0,n=a.length;e<n;e++)a[e]&&(t[a[e]]=!0)}return t}return e}function Jl(e,t){for(let n=0,r=e.length;n<r;n++){let r=e[n];Array.isArray(r)?Jl(r,t):typeof r==`object`&&r?Object.assign(t,r):typeof r!=`boolean`&&(r||r===0)&&(t[r]=!0)}}function Yl(e,t,n,r,i,a){if(t===`style`)return Xc(e,n,r),n;if(t===`class`)return Jc(e,n,r),n;if(n===r&&qs[a]?.[t]!==1)return r;if(t===`ref`)return!i&&n&&nl(()=>n,e),n;let o=t.indexOf(`:`)>-1;if(!o&&t.slice(0,2)===`on`){let i=t.slice(2).toLowerCase(),a=Xs.has(i);if(!a&&r){if(Array.isArray(n)&&typeof r==`function`&&r[wc]===n)return r;e.removeEventListener(i,r,typeof r!=`function`&&r)}if(a||n){let t=Yc(e,i,n,a);if(a&&Fc([i]),!a)return t}}else if(o&&t.slice(0,5)===`prop:`||Js.has(t)||qs[a]?.[t]){if(o)t=t.slice(5);else if(Kl(e))return n;t===`value`&&a===`SELECT`?queueMicrotask(()=>e.value=n)||(e.value=n):(t===`value`||t===`defaultValue`)&&(a===`INPUT`||a===`TEXTAREA`)?e[t]=n??``:e[t]=n}else{let r=o&&Zs[t.split(`:`)[0]];r?qc(e,r,t,n):Kc(e,t,n)}return n}function Xl(e,t,n){if(al!==null&&al.dedupEvent(e))return;let r=e[Cc],i;if(r){if(r===!0||r===t||!t.contains(r))return;i=r}let a=n&&(n.owners.size===1&&n.owners.has(t)?t:Vc(e.target,n)?.owner);if(n&&!a||a&&a===i)return;e[Cc]=a||!0;let o=i||e.target,s=`$$${e.type}`,c=e.target,l=a||t||e.currentTarget,u=t=>Object.defineProperty(e,"target",{configurable:!0,value:t}),d=()=>{let t=o[s];if(t===void 0&&o.hasAttribute&&o.hasAttribute(`_bnd`)){let n=globalThis[Symbol.for(`solid.bnd`)];n&&(t=n.resolve(o,e.type))}if(t&&!o.disabled){let n=o[`${s}Data`];if(n===void 0?typeof t==`function`?t.call(o,e):t.handleEvent(e):t.call(o,n,e),e.cancelBubble)return}return o.host&&typeof o.host!=`string`&&!o.host._$host&&o.contains(e.target)&&u(o.host),!0},f=()=>{for(;o&&d()&&o!==l&&o.parentNode!==l;)o=o._$host||o.parentNode||o.host};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return o||l||document}}),i)i===e.target&&(o=i._$host||i.parentNode||i.host),o&&o!==l&&f();else if(e.composedPath){let t=e.composedPath();if(t.length){u(t[0]);for(let e=0;e<t.length&&(o=t[e],d());e++){if(o._$host){o=o._$host,f();break}if(o===l||o.parentNode===l)break}}else f()}else f();u(c)}function Zl(e,t,n,r){if(al!==null&&Kl(e)){if(t&&t!==n){let e=Array.isArray(t);for(let r of e?t:[t])if(r&&r.nodeType){if(!Kl(r))return n}else if(e&&(typeof r==`string`||typeof r==`number`))return n}return t}if(t===n)return t;let i=typeof t,a=r!==void 0;if(i===`string`||i===`number`){let r=typeof n;r===`string`||r===`number`?e.firstChild.data=t:tu(e,n)?e.textContent=t:(nu(e,n),e.insertBefore(document.createTextNode(t),e.firstChild))}else if(t===void 0)ru(e,n,r);else if(t.nodeType)Array.isArray(n)?ru(e,n,a?r:null,t):n&&n.nodeType?n.parentNode===e?e.replaceChild(t,n):e.appendChild(t):n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t),r&&(t[$]=r);else if(Array.isArray(t)){let i=n&&Array.isArray(n);for(let e=0,r=t.length;e<r;e++){let r=t[e],a=typeof r;if(a===`string`||a===`number`){let a=i?n[e]:void 0;a&&a.nodeType===3?(a.data!==``+r&&(a.data=r),t[e]=a):t[e]=document.createTextNode(r)}}t.length===0?ru(e,n,r):i?n.length===0?eu(e,t,r):nc(e,n,t,r):(n&&ru(e,n),eu(e,t))}return t}function Ql(e,t,n,r){if(e=Ga(e,{skipNonRendered:!0,doNotUnwrap:r}),r&&typeof e==`function`)return e;if(n&&!Array.isArray(e)&&(e=[e??``]),Z.hydrating&&Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n],i=t&&t[n],a=typeof r;(a===`string`||a===`number`)&&i&&i.nodeType===3&&Kl(i)&&(e[n]=i)}return e}function $l(e,t){if(Array.isArray(e))for(let n=0,r=e.length;n<r;n++)$l(e[n],t);else e&&e.nodeType&&e[Ys]!==t&&(e[Ys]=t,Object.defineProperty(e,"_$host",{get:t,configurable:!0}))}function eu(e,t,n=null){for(let r=0,i=t.length;r<i;r++){let i=t[r];e.insertBefore(i,n),n&&(i[$]=n)}}function tu(e,t){if(t==null)return!0;if(Array.isArray(t))return t.length?e.firstChild===t[0]&&e.lastChild===t[t.length-1]:e.firstChild===null;if(t===``)return e.firstChild===null;if(t.nodeType)return e.firstChild===t&&e.lastChild===t;let n=e.firstChild;return n!==null&&n.nodeType===3&&e.lastChild===n}function nu(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++){let r=t[n];r.parentNode===e&&r.remove()}else if(t.nodeType)t.parentNode===e&&t.remove();else{let t=e.firstChild;t&&t.nodeType===3&&t.remove()}}function ru(e,t,n,r){if(n===void 0)return tu(e,t)?e.textContent=``:nu(e,t);if(t.length){let i=!1;for(let a=t.length-1;a>=0;a--){let o=t[a];if(r!==o){let t=o[$],s=o.parentNode===e&&(!t||t===n);r&&!i&&!a?s?e.replaceChild(r,o):e.insertBefore(r,n):s&&o.remove()}else i=!0}}else r&&e.insertBefore(r,n);r&&n&&(r[$]=n)}function iu(e,t){let n=e.querySelectorAll(`*[_hk]`);for(let r=0;r<n.length;r++){let i=n[r],a=i.getAttribute(`_hk`);if(t){if(!a.startsWith(t))continue}else{let t=i.closest(`[data-fid]`);if(t&&t!==e&&e.contains(t))continue}Z.registry.has(a)||Z.registry.set(a,i)}}function au(){return Z.getNextContextId()}var ou=Symbol.for(`solid.ResponseEnvelope`);function su(e){return!!(e&&typeof e==`object`&&e[ou])}var cu=`X-Revalidate`;function lu(e,t){}var uu=/^(?:[a-z0-9]+:)?\/\//i,du=/^\/+|(\/)\/+$/g,fu=`http://sr`;function pu(e,t=!1){let n=e.replace(du,`$1`);return n?t||/^[?#]/.test(n)?n:`/`+n:``}var mu=e=>pu(e.split(/[?#]/,1)[0]).toLowerCase().replace(/\/$/,``);function hu(e,t,n){if(uu.test(t))return;let r=pu(e),i=n&&pu(n),a=``;return a=!i||t.startsWith(`/`)?r:i.toLowerCase().indexOf(r.toLowerCase())===0?i:r+i,(a||`/`)+pu(t,!a)}function gu(e,t){if(e==null)throw Error(t);return e}function _u(e,t){return pu(e).replace(/\/*(\*.*)?$/g,``)+pu(t)}function vu(e){let t={};return e.searchParams.forEach((e,n)=>{n in t?Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]:t[n]=e}),t}function yu(e,t,n){let[r,i]=e.split(`/*`,2),a=r.split(`/`).filter(Boolean),o=a.length;return e=>{let r=e.split(`/`);if(r[0]===``&&r.shift(),r.length&&r[r.length-1]===``&&r.pop(),r.includes(``))return null;let s=r.length-o;if(s<0||s>0&&i===void 0&&!t)return null;let c={path:o?``:`/`,params:{}},l=e=>n===void 0?void 0:n[e];for(let e=0;e<o;e++){let t=a[e],n=t[0]===`:`,i=n?r[e]:r[e].toLowerCase(),o=n?t.slice(1):t.toLowerCase();if(n&&bu(i,l(o)))c.params[o]=i;else if(n||!bu(i,o))return null;c.path+=`/${i}`}if(i){let e=s?r.slice(-s).join(`/`):``;if(bu(e,l(i)))c.params[i]=e;else return null}return c}}function bu(e,t){let n=t=>t===e;return t===void 0?!0:typeof t==`string`?n(t):typeof t==`function`?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp&&t.test(e)}function xu(e){let[t,n]=e.pattern.split(`/*`,2),r=t.split(`/`).filter(Boolean);return r.reduce((e,t)=>e+(t.startsWith(`:`)?2:3),r.length-(n===void 0?0:1))}function Su(e){let t=new Map,n=j();return new Proxy({},{get(r,i){return t.has(i)||H(n,()=>t.set(i,Q(()=>e()[i]))),t.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(t,n){return n in e()}})}function Cu(e,t){let n=new URLSearchParams(e);Object.entries(t).forEach(([e,t])=>{t==null||t===``||t instanceof Array&&!t.length?n.delete(e):t instanceof Array?(n.delete(e),t.forEach(t=>{n.append(e,String(t))})):n.set(e,String(t))});let r=n.toString();return r?`?${r}`:``}function wu(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length),i=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)i.push(n+=t[1]),r=r.slice(t[0].length);return wu(r).reduce((e,t)=>[...e,...i.map(e=>e+t)],[])}function Tu(e,t){return Object.defineProperty(e,"name",{value:t,writable:!1,configurable:!1}),e}var Eu=e=>String(e).split(`/`).map(encodeURIComponent).join(`/`),Du=Symbol.for(`solid.Href`);function Ou(e=e=>e,t=``){let n=(t,n=``)=>e(t||`/`)+n;function r(e){return new Proxy((...t)=>{let i=e;for(let e=0;e<t.length;e++){let r=t[e];if(typeof r==`object`&&r){let a=typeof t[e+1]==`string`?`#${t[e+1]}`:``;return n(i,Cu(``,r)+a)}i+=`/${Eu(r)}`}return t.length?r(i):n(i)},{get(t,i){return i===`toString`?()=>n(e):typeof i==`symbol`?i===Symbol.toPrimitive?()=>n(e):i===Du?e||`/`:void 0:r(`${e}/${i}`)}})}return r(pu(t))}var ku=100,Au=to(),ju=to();function Mu(e){try{return no(e)}catch{return}}var Nu=()=>gu(no(Au),`<A> and 'use' router primitives can be only used inside a Route.`),Pu=()=>Nu().location,Fu=e=>encodeURIComponent(e).replace(/%(2B|40|3A|24|26|2C|3B|3D)/g,e=>decodeURIComponent(e)),Iu=new WeakMap,Lu=0,[Ru,zu]=is(0);function Bu(){return Ru()}function Vu(e){let t=Iu.get(e);return t||Iu.set(e,t={thunk:e}),t}function Hu(e){if(e.resolved)return e.resolved;if(e.error!==void 0)throw e.sweep||(e.sweep=!0,queueMicrotask(()=>e.error=e.sweep=void 0)),e.error;return e.promise||=Promise.resolve(e.thunk()).then(t=>(e.resolved=Array.isArray(t)?t:t.default||t.routes||[],Lu++,zu(Lu),e.resolved),t=>{throw e.error=t??Error(),e.sweep=!0,queueMicrotask(()=>e.error=e.sweep=void 0),e.promise=void 0,t})}function Uu(e){let t=[];for(let n of e)n.route.lazy&&!n.route.lazy.resolved&&t.push(n.route.lazy);return t}function Wu(e,t){let n=e+`/*`;return{key:t,originalPath:`*`,pattern:n,matcher:yu(n),lazy:t}}function Gu(e,t=``){let{component:n,preload:r,children:i,info:a}=e,o=!i||Array.isArray(i)&&!i.length,s={key:e,component:n,preload:r,info:a};return qu(e.path).reduce((n,r)=>{for(let i of wu(r)){let a=_u(t,i),c=o?a:a.split(`/*`,1)[0];c=c.split(`/`).map(e=>e.startsWith(`:`)||e.startsWith(`*`)?e:Fu(e)).join(`/`),n.push({...s,originalPath:r,pattern:c,matcher:yu(c,!o,e.matchFilters)})}return n},[])}function Ku(e,t=0){return{routes:e,score:xu(e[e.length-1])*1e4-t,matcher(t){let n=[];for(let r=e.length-1;r>=0;r--){let i=e[r],a=i.matcher(t);if(!a)return null;n.unshift({...a,route:i})}return n}}}function qu(e){return Array.isArray(e)?e:[e]}function Ju(e,t=``,n=[],r=[]){let i=qu(e);for(let e=0,a=i.length;e<a;e++){let a=i[e];if(a&&typeof a==`object`){a.path===void 0&&(a.path=``);let e=Gu(a,t);for(let t of e){n.push(t);let e=a.children;if(typeof e==`function`){let i=Vu(e);if(i.resolved)e=i.resolved;else{n.push(Wu(t.pattern,i)),r.push(Ku([...n],r.length)),n.pop(),n.pop();continue}}let i=Array.isArray(e)&&e.length===0;if(e&&!i)Ju(e,t.pattern,n,r);else{let e=Ku([...n],r.length);r.push(e)}n.pop()}}}return n.length?r:r.sort((e,t)=>t.score-e.score)}function Yu(e,t){for(let n=0,r=e.length;n<r;n++){let r=e[n].matcher(t);if(r)return r}return[]}function Xu(e){let t={};for(let n=0;n<e.length;n++)Object.assign(t,e[n].params);return t}function Zu(e,t,n){let r=new URL(fu),i=Q((t=r)=>{let n=e();try{return new URL(n[0]===`/`?fu+n:n,r)}catch{return t}},{equals:(e,t)=>e.href===t.href}),a=Q(()=>i().pathname),o=Q(()=>i().search),s=Q(()=>i().hash),c=()=>``,l=Q(()=>vu(i()));return{get pathname(){return a()},get search(){return o()},get hash(){return s()},get state(){return t()},get key(){return c()},query:n?n(l):Su(l)}}var Qu,$u=new Map;function ed(e){return $u.set(e,Qu&&Qu(e)),()=>{let t=$u.get(e);$u.delete(e),t&&t()}}function td(e){if(!Qu){Qu=e;for(let[t,n]of $u)n||$u.set(t,e(t))}}var nd;function rd(e){nd||=e}var id;function ad(){return id||Mu(Au)?.intent?.()}var od=!1;function sd(){return od}function cd(e){od=e}function ld(t,n,r,i={}){let{signal:[a,o],utils:s={}}=t,c=s.parsePath||(e=>e),l=s.renderPath||(e=>e),u=s.beforeLeave||{},d=hu(``,i.base||``),f=z(a);if(d===void 0)throw Error(`${d} is not a valid base path`);d&&!f.value&&o({value:d,replace:!0,scroll:!1,_navigation:1});let p=Zu(()=>a().value,()=>a().state,s.queryWrapper),m,h=j(),g=new WeakMap,_=e=>{let t=g.get(e);return t||(t=H(h,()=>Q(()=>{let t=Hu(e);return t instanceof Promise?t.then(()=>void 0):void 0},{name:`lazyRoutes`})),g.set(e,t)),t()},ee=Q(()=>{let e=typeof i.transformUrl==`function`?i.transformUrl(p.pathname):p.pathname,t=Yu(n(),e),r=Uu(t);if(r.length)for(let e of r)_(e);return t},{name:`matches`}),v=Q(()=>xr(()=>{try{ee()}catch(t){if(t instanceof e)throw t}p.search,p.hash}),{name:`routingPending`}),te=()=>v()||xr(a),ne=()=>{if(!xr(a))return;let e=br(a)._navigation;return e===-1?`native`:e&&e>0?`navigate`:void 0},re=()=>{if(!te())return;let e=br(a);return e._navigation&&e._navigation>0?e:void 0},ie=()=>Xu(ee()),y=s.paramsWrapper?e=>s.paramsWrapper(e,n):e=>Su(e),ae=y(ie),oe={pattern:d,params:ae,path:()=>d,outlet:()=>null,resolvePath(e){return hu(d,e)}};return{base:oe,location:p,params:ae,wrapParams:y,isRouting:te,intent:ne,get pendingTarget(){return re()},renderPath:l,parsePath:c,navigatorFactory:se,matches:ee,beforeLeave:u,preloadRoute:ce,singleFlight:i.singleFlight===void 0||i.singleFlight,get submissions(){return m||=is([],{ownedWrite:!0})}};function b(e,t,n){z(()=>{if(typeof t==`number`){t&&s.go&&s.go(t);return}typeof t!=`string`&&(t=t[Du]||t.toString()),t[0]===`#`&&(t=c(t));let{replace:r,resolve:i,scroll:l,state:d}={replace:!1,resolve:!0,scroll:!0,...n},f;if(!i)f=hu((!t||t[0]===`?`)&&p.pathname||``,t);else if(t[0]===`/`)f=e.resolvePath(t);else{let e=new URL(t,fu+p.pathname+p.search+p.hash);f=e.origin===`http://sr`?e.pathname+e.search+e.hash:void 0}if(f===void 0)throw Error(`Path '${t}' is not a routable path`);let m=br(a),h=xr(a)&&m._navigation!==void 0&&m._navigation>0?m._navigation:0;if(h>=ku)throw Error(`Too many redirects`);(f!==m.value||d!==m.state)&&(!u.current||u.current.confirm(f,n))&&H(null,()=>o({value:f,state:d,replace:h?m.replace:r,scroll:h?m.scroll:l,_navigation:h+1}))})}function se(e){return e=e||Mu(ju)||oe,(t,n)=>b(e,t,n)}function ce(e,t){let i=Yu(n(),e.pathname),a=i.find(e=>e.route.lazy&&!e.route.lazy.resolved);if(a)try{Hu(a.route.lazy).then(()=>ce(e,t),()=>{})}catch{}let o=id;id=`preload`;for(let n in i){let{route:a,params:o}=i[n];a.component&&a.component.preload&&a.component.preload();let{preload:s}=a;od=!0,t&&s&&H(r(),()=>s({params:o,location:{pathname:e.pathname,search:e.search,hash:e.hash,query:vu(e),state:null,key:``},intent:`preload`})),od=!1}id=o}}function ud(e,t,n,r,i=()=>[r()]){let{base:a,location:o,wrapParams:s}=e,{pattern:c,component:l,preload:u}=r().route,d=Q(()=>r().path),f=s(()=>Xu(i()));l&&l.preload&&l.preload(),od=!0;let p=u?u({params:f,location:o,intent:e.intent?.()||`initial`}):void 0;return od=!1,{parent:t,pattern:c,params:f,path:d,outlet:()=>l?Ps(l,{params:f,location:o,data:p,get children(){return n()}}):n(),resolvePath(e){return hu(a.path(),e,d())}}}var dd=e=>e==null||e===``,fd=(e,t)=>{if(e&&typeof e==`object`)return t.split(`.`).reduce((e,t)=>e&&e[t]!==void 0?e[t]:void 0,e)};function pd(e,t,n){let r=(e,t)=>dd(e)?void 0:n[t.indexId]?.[String(e)],i=(e,t)=>r(e,t)?.key??null,a=(t,n)=>{let i=r(t,n);if(!i)return null;let a=e[i.key];if(!i.item)return c(a,i.key,``);let[o,s]=i.item;return c(fd(a,o)[s],i.key,o)},o=(e,t)=>dd(e)?null:Array.isArray(e)?e.map(e=>i(e,t)).filter(Boolean):i(e,t),s=(e,t)=>dd(e)?null:Array.isArray(e)?e.map(e=>a(e,t)).filter(Boolean):a(e,t);function c(e,n=``,r=``){if(!e||typeof e!=`object`)return e;let i={};if(n)for(let[e,r]of Object.entries(t))(n===e||n.startsWith(e+`/`)||e.endsWith(n)||n.endsWith(e))&&Object.assign(i,r);return Array.isArray(e)?new Proxy(e,{get(e,t,i){if(t===`toJSON`)return()=>e;let a=Reflect.get(e,t,i);return typeof t==`string`&&!isNaN(Number(t))?c(a,n,r):a}}):new Proxy(e,{get(e,t,a){if(t===`toJSON`)return()=>e;let l=Reflect.get(e,t,a);if(typeof t!=`string`||t===`then`||t===`constructor`)return l;let u=r?`${r}.`:``,d=[`${u}${t}`];typeof e.type==`string`&&d.push(`${u}${e.type}.${t}`);let f=d.find(e=>i[e]);if(f){if(dd(l))return null;let e=i[f],t=s(l,e),n=o(l,e);return{value:l,path:n,content:t,toJSON:()=>({value:l,path:n,content:t})}}return c(l,n,`${u}${t}`)}})}return new Proxy(e,{get(t,n,r){if(n===`toJSON`)return()=>t;if(n===`raw`)return e;let i=Reflect.get(t,n,r);return i&&c(i,String(n))}})}var md=pd({"/data/contributors/adam-sparks":{name:`Adam Sparks`,profilePhoto:`/1746036416537.webp`,role:`Founder`,testimony:`Everyone should have the freedom to build software they’re proud of without sacrificing joy, balance, or humanity.`,body:`
undefined
`,collectionType:`Contributors`},"/data/contributors/lin-wang":{name:`Lin Wang`,profilePhoto:`/signal-2025-12-18-173706_002.webp`,role:`Analytics & AI Engineering Lead`,testimony:`It’s early in the process so that every contribution you can make is significant in shaping the products and there are real intellectual debates to get things done.`,body:`
undefined
`,collectionType:`Contributors`},"/data/contributors/monica-welty":{name:`Monica Welty`,profilePhoto:`/img_4164.webp`,role:`Cofounder of Grim Choices`,testimony:`Working with Sparkstone you are guaranteed purpose, humor and heart. With a thoughtful and adaptable approach, their platforms are engaging, intuitive, and genuinely fun to use.`,body:`
undefined
`,collectionType:`Contributors`},"/data/contributors/you":{name:`You?`,profilePhoto:`/gemini_generated_image_ltkdraltkdraltkd.webp`,role:``,testimony:`We're still small, but if you're inspired, reach out and we may be able to make space for you.`,body:``,collectionType:`Contributors`},"/data/home":{featuredOn:[{url:`https://podcasts.apple.com/us/podcast/08-backend-magic-you-never-see/id1823317397?i=1000739770799`,name:`Behind the Creative Curtain`,logo:{alt:`Text graphic reading "Behind the Creative Curtain" on a red theater background framed by lights`,aspectRatio:1,optimized:`/behind-the-creative-curtain.opt.webp`,original:`/behind-the-creative-curtain.webp`,tiny:`/behind-the-creative-curtain.tiny.webp`,widgetType:`optimizedImage`}},{url:`https://www.narwhalpod.com/explore-the-pod`,name:`NarwhalPod`,logo:{alt:`Logo featuring the text Narwhal Pod and four cute cartoon narwhals swimming around it`,aspectRatio:4.021447721179625,optimized:`/narwhalpod-r3-lockup-alt.opt.webp`,original:`/narwhalpod-r3-lockup-alt.webp`,tiny:`/narwhalpod-r3-lockup-alt.tiny.webp`,widgetType:`optimizedImage`}},{url:`https://creativemornings.com/blog/fun-stuff-to-click-on-479`,name:`Creative Mornings`,logo:{alt:`Creative Mornings logo in white text on a black speech bubble background`,aspectRatio:3.1894736842105265,optimized:`/creativemornings.com_cities_pdx.opt.webp`,original:`/creativemornings.com_cities_pdx.png`,tiny:`/creativemornings.com_cities_pdx.tiny.webp`,widgetType:`optimizedImage`}}],testimonials:[`allie-6ad7c2ecd738`,`wendy-shih-cac86a8c3361`],featured:[{type:`case_study`,entry:`2026-07-29-the-map-i-never-meant-to-build`},{type:`product`,entry:`liveframe`},{type:`case_study`,entry:`2026-09-14-a-library-that-fits-in-a-free-library`}],services:[{title:`Custom Applications`,description:`the internal tool or portal you can't buy off the shelf`},{title:`Project rescue`,description:`take over a build that stalled, or clean up after a vendor`},{title:`Fractional CTO`,description:`support for teams that need direction, architecture, or product leadership without full-time overhead.`},{title:`Technical review`,description:`a paid second opinion on a vendor's proposal before you sign`}],body:`
import content from 'virtual:vite-sveltia'

<div class="highlight">
<h1 style='font-size: 1.5rem'>Custom software and websites for medical practices, law firms, and specialty contractors in Portland.</h1>
</div>

I'm Adam. I run Sparkstone, a one-person software studio. I build the systems your business actually runs on: intake, scheduling, referral portals, client dashboards, and the sites that feed them. I work on a monthly retainer, so the person who built your systems is the one keeping them running.

<Link role='button' item={content['/data/links/book-a-call']}/>
`,collectionType:`home`},"/data/json-ld/org":{"@context":`https://schema.org`,"@type":`Organization`,name:`Sparkstone LLC`,url:`https://sparkstonepdx.com`,logo:{"@type":`ImageObject`,url:`https://sparkstonepdx.com/favicon-96x96.png`},sameAs:[`https://github.com/Sparkstonepdx/`,`https://bsky.app/profile/sparkstonepdx.com`,`https://www.linkedin.com/company/sparkstonepdx`,`https://www.youtube.com/@sparkstonepdx`]},"/data/links/book-a-call":{label:`Book a call`,description:`A free 20-minute call to talk through what your business needs and whether I'm the right fit.`,url:`https://cal.com/sparks/free-20-minute-consultation`,parent:``,visible:!0,customAttributes:`data-cal-link="sparks/free-20-minute-consultation"             data-cal-namespace="free-20-minute-consultation"             data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'`,body:``,collectionType:`links`},"/data/menus/footer":{name:`Footer`,displayTitle:`Footer`,items:[{type:`page_item`,item:`case-studies`},{type:`page_item`,item:`products`},{type:`page_item`,item:`blog`},{type:`page_item`,item:`open-source`},{type:`link_item`,item:`book-a-call`},{type:`page_item`,item:`mentions`},{type:`page_item`,item:`alignment`},{type:`page_item`,item:`about`}],body:``,collectionType:`menus`},"/data/menus/header":{name:`Header`,displayTitle:`Header`,items:[{type:`page_item`,item:`case-studies`},{type:`page_item`,item:`products`},{type:`page_item`,item:`blog`},{type:`page_item`,item:`open-source`},{type:`link_item`,item:`book-a-call`}],body:``,collectionType:`menus`},"/data/pages/[...404]":{route:`/[...404]`,heading:`Page not found`,intro:`That link didn't go anywhere. Here's the way back.`,seo:{title:`Page not found | Sparkstone LLC`,description:`That page doesn't exist. Find case studies, products, open source projects, and the blog.`},body:`
You've hit a link that doesn't exist, which is either my mistake or a typo.
Either way, here's where everything lives:

- [Case studies](/case-studies): what I've built and how it went
- [Products](/products): software I run and maintain myself
- [Open source](/open-source): tools you can fork and own
- [Blog](/posts): write-ups worth keeping
- [About](/about): who I am and how I work

If you came from somewhere on this site and something's broken, I'd like to
know. <Link name='book-a-call'>Book a call</Link> or find me through any of
the links in the footer.
`,collectionType:`pages`},"/data/pages/about":{route:`/about`,heading:`About`,intro:``,seo:{title:``,description:`I'm Adam Sparks. I build and maintain the software Portland medical practices, law firms, and specialty contractors run on, on a monthly retainer.`,image:``,keywords:[]},body:`import { Contributors } from '~/components/about-section'

## The person who builds it is the person who maintains it.

I'm Adam Sparks. Sparkstone is my one-person software studio in
Portland. I build the systems local businesses actually run on, and
then I stay on to keep them running.

<div>
  <Link role='button' name='book-a-call'>Book a call</Link>
<br />
<br />
</div>

## Who I work with

Medical and dental practices, law firms, and specialty contractors
around Portland. The work usually starts in one of four places:

- A tool or portal you can't buy off the shelf: intake, scheduling,
  referrals, client dashboards
- A build that stalled, or a vendor who left you with something
  half-finished
- Ongoing technical direction, without a full-time hire
- A paid second opinion on a proposal before you sign it

## How it works

We start with a call. If it's a fit, I scope the work in writing so
you know what you're getting before anything gets built. You deal
with me the whole way through, not an account manager and a rotating
team.

After launch, I work on a monthly retainer. Software isn't finished
when it ships: forms change, staff turn over, integrations break.
The retainer means the person who knows how your system works is
still the one answering the phone.

## Who you'll work with

<Contributors />

## What I bring to it

Fifteen years of building software, most of it on systems that had to
keep working after launch. I work in the open where I can: the tools
I've released are on the [open source](/open-source) page, and I
write up the projects worth learning from on the
[blog](/posts).

I care about software you own. Your data stays yours, your systems
stay portable, and nothing I build locks you into me.

Outside the studio I'm co-chair of the North Tabor Neighborhood
Association, which is how I ended up building
[a yard sale map three neighborhoods now use](/case-studies/2026-07-29-the-map-i-never-meant-to-build).

## Let's talk about what your business needs.

A free 20-minute call. I'll tell you honestly whether I'm the right
fit, and point you elsewhere if I'm not.

<Link name='book-a-call'>Book a call</Link>
`,collectionType:`pages`},"/data/pages/alignment":{route:`/links/aligned`,heading:`Alignment`,intro:`Projects, tools, and writing that shape how I build software.`,body:`## Projects and writing aligned with my values

This is a small, intentional list of projects, tools, and writing I respect and learn from.

These links are here because they align with how I think about software, agency, and care.

<LinkPreview url='https://henry.codes/writing/a-website-to-destroy-all-websites/' />

<LinkPreview url='https://www.davidmcraney.com/howmindschangehome' />

<LinkPreview url="https://app.thestorygraph.com/books/a90c7f47-0dea-48d3-867b-33a5f664aae1" />

<LinkPreview title='White Fragility' description="Why it's so hard for white people to talk about racism" url='https://bookshop.org/p/books/white-fragility-why-it-s-so-hard-for-white-people-to-talk-about-racism-dr-robin-diangelo/9bb312f941d2a646' />

<LinkPreview url='https://app.thestorygraph.com/books/c45e8002-8791-46fd-90e8-177f67b11513' />

<LinkPreview url='https://www.youtube.com/watch?v=3C1Gnxhfok0' />
`,collectionType:`pages`},"/data/pages/blog":{route:`/posts`,heading:`Blog`,intro:`How I build software that lasts: project write-ups, technical deep dives, and lessons from a one-person studio in Portland.`,body:``,collectionType:`pages`},"/data/pages/case-studies":{route:`/case-studies`,heading:`Case Studies`,intro:`Real projects, start to finish: the problem, what I built, and how it held up. Custom software from a one-person studio in Portland.`,body:``,collectionType:`pages`},"/data/pages/contact":{route:`/contact`,heading:`Contact`,intro:``,seo:{title:``,description:``,image:``,keywords:[]},body:`
<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline-free-20-minute-consultation"></div>

<script type="text/javascript">{\`

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

\`}<\/script>
`,collectionType:`pages`},"/data/pages/home":{route:`/`,heading:`Home`,intro:`Custom software for Portland medical practices, law firms, and specialty contractors: intake, scheduling, referral portals, and dashboards.`,seo:{title:`Sparkstone | Custom Software for Portland Businesses.`,description:`Custom software for Portland medical practices, law firms, and specialty contractors: intake, scheduling, referral portals, and dashboards. I work on a monthly retainer, so the person who built your systems is the one keeping them running.`,image:`/meta-image.webp`},body:``,collectionType:`pages`},"/data/pages/mentions":{route:`/links/mentions`,heading:`Mentions`,intro:``,seo:{title:``,description:`Places around the web that link to Sparkstone or reference the work, from podcast episodes to project directories.`,image:``,keywords:[]},body:`
This page lists places around the web that link to Sparkstone or reference my work.

It exists for transparency and appreciation. Inclusion here does not imply endorsement or alignment.

## Sparkstone

<LinkPreview url='https://podcasts.apple.com/us/podcast/08-backend-magic-you-never-see/id1823317397?i=1000739770799' />

<LinkPreview url='https://sveltiacms.app/en/showcase' />

<LinkPreview url='https://www.northtabor.org/2026/03/2026-tabor-neighbors-yard-sale/' />

<LinkPreview url='https://lzr.life/zines/' />

## Liveframe

<LinkPreview url='https://peerlist.io/sparkstonepdx/project/liveframe' />

<LinkPreview  url='https://confettisaas.com/saas/liveframe-app' />

<LinkPreview url='https://www.indiehackers.com/product/liveframe' />

<LinkPreview url='https://www.launchvibe.app/launch/39' />

<LinkPreview url='https://www.sideprojectors.com/project/57347/liveframe' />

<LinkPreview image='/preview/fun-stuff.jpg' title='Fun Stuff to Click On' description='CreativeMornings is a breakfast lecture series for the creative community. Join us at one of our free monthly events around the world or watch the talks online!' url='https://creativemornings.com/blog/fun-stuff-to-click-on-479' />

<LinkPreview url='https://www.kelseyetc.com/tag/weekend-links/' />

<LinkPreview image='/preview/loverly.jpg' url='https://loverly.com/vendors/liveframeapp-1' />

<LinkPreview url='https://urbanartantiques.com/2026/06/14/browsing-portlands-rose-city-book-paper-fair/' />
`,collectionType:`pages`},"/data/pages/open-source":{route:`/open-source`,heading:`Open Source`,intro:`Tools and libraries I've released for anyone to use, fork, and own, from single-file sync to a neighborhood yard-sale map.`,body:``,collectionType:`pages`},"/data/pages/products":{route:`/products`,heading:`Products`,intro:`Software I build, ship, and maintain myself, from Liveframe's event photo sharing to small libraries and hobby apps.`,seo:{title:``,description:``,image:``,keywords:[]},body:``,collectionType:`pages`},"/data/settings":{headerMenu:`header`,footerMenu:`footer`,companyName:`Sparkstone LLC`,booking_cta:{heading:`This remind you of a problem you've been dealing with?`,body:`I'd be happy to discuss it with you and see if it's something we could turn into a solution.`,action_label:``},seo:{title:`Sparkstone | Custom Software for Portland Businesses.`,description:`Custom software for Portland medical practices, law firms, and specialty contractors: intake, scheduling, referral portals, and dashboards. I work on a monthly retainer, so the person who built your systems is the one keeping them running.`,image:`/meta-image.webp`,keywords:[`custom software portland`,`medical practice software`,`law firm software`,`contractor software`,`patient intake system`,`appointment scheduling software`,`referral portal`,`client dashboard`,`fractional cto portland`,`software project rescue`]},body:``,collectionType:`settings`},"/data/testimonials/allie-6ad7c2ecd738":{name:`Allie`,title:`A Liveframe User`,organization:``,quote:`I am forever grateful to liveframe for giving us the opportunity to see our big day from the perspective of our loved ones.`,photo:``,photoAlt:``,url:`https://www.zola.com/wedding-vendors/wedding-extras/liveframe`,approved:!0,received:`2026-04-11`,body:``,collectionType:`testimonials`},"/data/testimonials/wendy-shih-cac86a8c3361":{name:`Wendy Shih`,title:``,organization:`Little Zine Revolution`,quote:`We are a tiny team with big dreams of making zines more accessible for
everyone. Adam showed sincere interest in our project, listened to our
ramblings, asked great questions, and helped us build a website beyond what
we'd hoped for. He was extremely creative, organized, and responsive
throughout the process, which made him a great collaborator.`,photo:``,photoAlt:``,url:`https://lzr.life`,approved:!0,received:`2026-09-14`,body:``,collectionType:`testimonials`},"/[...404]":{route:`/[...404]`,heading:`Page not found`,intro:`That link didn't go anywhere. Here's the way back.`,seo:{title:`Page not found | Sparkstone LLC`,description:`That page doesn't exist. Find case studies, products, open source projects, and the blog.`}},"/about":{route:`/about`,heading:`About`,intro:``,seo:{title:``,description:`I'm Adam Sparks. I build and maintain the software Portland medical practices, law firms, and specialty contractors run on, on a monthly retainer.`,image:``,keywords:[]}},"/contact":{route:`/contact`,heading:`Contact`,intro:``,seo:{title:``,description:``,image:``,keywords:[]}},"/links/aligned":{route:`/links/aligned`,heading:`Alignment`,intro:`Projects, tools, and writing that shape how I build software.`},"/links/mentions":{route:`/links/mentions`,heading:`Mentions`,intro:``,seo:{title:``,description:`Places around the web that link to Sparkstone or reference the work, from podcast episodes to project directories.`,image:``,keywords:[]}},"/case-studies/2026-07-29-the-map-i-never-meant-to-build":{title:`The Map I Never Meant to Build`,client:`NTNA`,segment:`community`,engagement:`volunteer`,services:[`custom-application`],products:[`ntna-yard-sale-map`],blurb:`Sixty thousand views, three neighborhoods asking to borrow it, and a little map that got a bit better every spring until it turned into something anyone can run.`,problem:``,built:``,result:``,timeline:``,url:``,testimonial:[``],created:`2026-07-28T09:01:00`,published:`2026-07-28T09:00:00`,thumbnail:`/yardsale-map.webp`,thumbnailAlt:`A web map of a Portland neighborhood dotted with yard-sale pins`,booking_cta:{heading:`Got a system that's held together with manual steps?`,body:`That map started as a spreadsheet someone retyped by hand every spring. Most of the work I do for Portland businesses starts the same way: one process everyone tolerates because there's no obvious fix, until the person doing it gets tired enough to ask.

If something in your business looks like that, I'm happy to take a look at it.`,action_label:``,cta:``},body:`
Here is a number I did not expect: 60,653.

That is how many times people opened a map of my neighborhood last spring. Not a map of the parks, or of where the good coffee is. A map of other people's garages.

So here is the question I keep turning over. How does a neighborhood yard sale pull the kind of traffic a small business would pay real money for? And how did the little map behind it end up with three other neighborhoods emailing to ask if they could run their own?

To get there, I have to tell two stories at the same time. One is about a block coming alive. The other is about a piece of software I never meant to make.

## The Block

Spring 2025. My wife and I organized [North Tabor's first-ever neighborhood-wide yard sale](https://www.northtabor.org/2025/03/yardsale-2025/). She heads communications for the association and I serve as co-chair, so this was the kind of thing we handle on a weeknight and then keep talking about at dinner.

We scheduled it exactly one week before the neighborhood cleanup, which turned out to be the smartest part: sell what you can on Saturday, and haul the rest to the dumpsters the following week. Thirty-eight households signed up. People wandered from sale to sale with coffee in hand, and the [Rainbow Garden](https://www.facebook.com/RainbowGardenAtTomAliRanch) plant sale sold out before noon.

That was the whole point, not the map. The map only mattered because thirty-eight sales scattered across a neighborhood are impossible to find without one.

## The Map That Broke Itself

So, the map. The first version was already better than it had any right to be. It was a live Leaflet map that read straight from the Google Form's spreadsheet and redrew itself every time a neighbor signed up. There was no dragging pins around by hand, and I was proud of it.

It had one flaw, and it was fatal. To turn a street address into a dot on the map, it called the Google geocoding API in the browser, every time the page loaded, for every single pin.

You can probably see where this goes. A map that re-checks every address every time someone opens it will chew through a free API quota fast, and the more popular the map gets, the faster it dies. The thing worked so well that its own traffic strangled it. The night before the sale, with people about to go hunting for couches at 9 a.m., the map went dark.

So I did the unglamorous thing: I dumped every pin into a Google MyMaps by hand and left both of them running. That began as an emergency patch, but it stuck around for a better reason. A MyMaps map syncs straight into the Google Maps app people already have on their phones, so a neighbor can pull up the sales and get directions from the app they use for everything else. We still rebuild it by hand the night before every sale, since MyMaps offers no public API to automate against. The live web map on the site is the one I maintain, and the MyMaps is the copy that rides along in everyone's pocket.

## The Fix

When it came time to run the sale again, I did not rewrite the whole thing. I fixed the one part that hurt.

Instead of geocoding addresses in the browser on every load, I moved that work into the spreadsheet itself. A small script now runs once, the moment a neighbor submits the form: it looks up their coordinates and writes them into the sheet next to their address. The map simply reads the numbers that are already sitting there. Each address is looked up once and kept, instead of being recomputed thousands of times a day.

That was the [entire second version](https://www.northtabor.org/2026/03/2026-tabor-neighbors-yard-sale/): one boring, load-bearing fix. It is also the reason the 2026 map pulled 39,456 views without a single panicked, night-before scramble, while the original 2025 map kept right on going, its own view count now past sixty thousand. By then the sale had a new name, Tabor Neighbors, because it had spilled past North Tabor into the neighborhoods around us. Fifty-six households signed up that year.

## The Emails

Here is the part I did not plan for.

The first email arrived after our very first sale, back in 2025. Someone from the Reed Neighborhood Association had found our map, popped the hood, and written to say that it looked like "Leaflet but fed by your spreadsheet data," and that they just needed a way to get their own sign-up sheet into the same format. They had already reverse-engineered the whole approach. They just wanted the bridge.

The other two came a year later, after our second sale, and close together. Sunnyside, starting from scratch: "Apps you use, fees that you charge, whatever you have would be helpful." And Paul, organizing the Mt. Tabor sale, who wanted the harder stuff: a two-day weekend version, and a way for neighbors to log back in and edit their own listing, because the previous year people had sent him changes right up until the morning of the sale.

Three neighborhoods. And there is an old rule in software for exactly this moment: you do not build the reusable version of a thing until you have watched the same need turn up three separate times. Once is a fluke. Twice is a coincidence. The third time is the work telling you what it wants to be.

Reed was the one who saw it first. Mt. Tabor was the one whose ask I actually built. And somewhere in there, the goal changed. It was no longer "make next year's North Tabor sale a little smoother." It was "make this something a stranger could run without me in the room."

## The Thing It Became

So the third time I opened this code, I did not just patch it. I pulled it out of North Tabor's website entirely and rebuilt it as its own small open-source project: a set of web components, released under the GPLv3.

This was the pass where it grew the parts other neighborhoods needed. A search box that filters the map and the list at the same time. Day checkboxes, so that Mt. Tabor's Saturday-only and Sunday-only sellers each show up on the right day. The features that turn "my neighborhood's map" into "a map."

Here is how you run it now: drop a few tags on a page, point it at a Google Form's responses, and you get the map, a searchable list of who is selling what, and the search box tying them together. Setup takes about twenty minutes and is mostly clicking around in Google, with one short snippet to paste at the end. If you would rather not touch that part, it is a block you can hand to whoever manages your site.

The whole thing sits on a spreadsheet you own, a form you own, and your own website. No per-sale fee. No accounts. Nothing in the middle to lock you in or to turn your neighbors' addresses into somebody's dataset. It is GPL, so it stays that way.

The walkthrough and the code are here: [github.com/sparkstonepdx/yardsale-map](https://github.com/sparkstonepdx/yardsale-map).

I keep coming back to that plant sale selling out before noon. The map was never the interesting part. The interesting part was a couple hundred people leaving their houses on the same Saturday to go meet each other over folding tables. The software just had to get out of the way and let that happen.

If your neighborhood wants to run one, grab it, and reach out if you get stuck. I will help you get it standing. And if you do use it, let me know. I like watching the small things I build show up doing real work out in the world.
`,collectionType:`case-studies`},"/case-studies/2026-09-14-a-library-that-fits-in-a-free-library":{title:`A Library That Fits in a Free Little Library`,client:`Little Zine Revolution`,segment:`community`,engagement:`partner`,services:[`custom-application`],products:[],blurb:`A zine catalog, a printing guide, and an events page, built from a pile of draft copy in about two weeks.`,problem:`A colleague distributing anti-colonial zines to free little libraries around Portland needed a place where anyone could find them, print them, and put them out in their own neighborhood. She had the copy written and no site.`,built:`A static site with a self-serve CMS the client's team runs themselves. Zine catalog with tag and fold-type filtering, a step-by-step how-to guide, an events page with per-event calendar links and a subscribable feed, a community photo gallery, and a downloadable brand kit for people starting their own chapter.`,result:`62 zines in the catalog`,timeline:`About two weeks, two video calls`,url:`https://lzr.life`,testimonials:[`wendy-shih-cac86a8c3361`],created:`2026-09-14`,published:`2026-09-14`,thumbnail:`/media/case-studies/lzr-library.webp`,thumbnailAlt:`A table at a zine distribution event, with white baskets of free zines, a pink LZR sign reading "Join the Little Zine Revolution, radically inclusive" with a QR code, and a hand-lettered flyer for a Zine Folding Party on Saturday March 21, 1:30 to 3:30 pm.`,booking_cta:{heading:`Need a site that does one job well?`,body:`If you've got the words and none of the time, that's the version of this work I do most often.`,action_label:``,cta:``},body:`
A colleague I'd met volunteering at Positive Charge PDX got in touch about
a project. She runs a little free library and distributes zines around
Portland, and she wanted a place where anyone could find them, print them,
and put them out in their own neighborhood.

What she had was a document full of copy and a clear sense of the thing.
What she needed was a website.

## Starting with the look, not the code

We started with a mood board. I pitched sketchy Japanese print against a
muted Bauhaus palette, which sounds like an odd pairing until you see zines
next to it: hand-made texture, hard structure underneath. She had the taste
and I had the tools, so settling the look first meant the rest of the build
never got stuck arguing about it. The logo came out of the same pass, which
is why the site and the mark look like they were made by the same hand.

Then she handed me her draft copy and I started building.

## One pass, then a real conversation

Four or five days later we got on a video call and went through what I had.
That call was the actual design work. Her copy was written as one long
piece, and on screen it was obvious it wanted to be several pages: a
catalog, a how-to guide for printing and folding and distributing, events,
a gallery of zines out in the wild.

We took notes on how the pages should point at each other, since somebody
who lands on a single zine needs an obvious path to "here's how you print
this." A few days of back and forth by text, then a second call: demo, live
edits while she watched, and out the door for a soft launch.

That call turned one page into four. The how-to instructions living on the
homepage became their own step-by-step guide, with just the basic steps
staying behind on the front page so a first-time visitor still sees what to
do. We added a page for photos from events and from the community, so the
work shows up as people doing it rather than as a description of it. And
somewhere in that conversation the community kit appeared: a page of design
guidelines and downloadable branding, so anyone starting their own little
zine revolution can make it look like part of the same thing without asking
permission.

None of that was in the original copy. It came out of looking at a real
page together and asking what was missing.

## What it does

The part that mattered most isn't visible from the front page: her whole
team runs the site themselves.

I walked them through creating GitHub accounts, and they each log into a
CMS that edits the site directly. Adding a zine means filling out a form:
the PDF, a cover photo for the catalog preview, tags, and which folding
method it uses. Those last two aren't decoration. They drive the filters in
the catalog, so someone hunting for a single-sheet fold they can print on a
lunch break finds it in two clicks instead of opening twelve PDFs.

Events work the same way. They add one, it appears on the upcoming events
page in date order, and the page generates iCal and Google Calendar links
automatically. There's also a subscribe link that adds the whole calendar at
once, so every event they post from then on lands in your phone without you
ever visiting the site again. A visitor taps once and the folding parties
show up on their own, which is the difference between meaning to go and
going. The feed is a plain file rebuilt whenever they publish, so there's no
server sitting there waiting to answer calendar requests.

There's no login for visitors either. The site is static, the zines download
straight to your printer, and the people who made it can change it without
calling me.
`,collectionType:`case-studies`},"/posts/2026-06-28-filesync":{title:`Syncing Single Files Across Repos Without Ceremony`,audience:`developer`,products:[],created:`2026-06-28`,published:`2026-06-28`,updated:``,thumbnail:null,thumbnailAlt:``,blurb:`Shared files drift across repos. npm is too heavy and copying by hand makes a mess. filesync closes the gap with git merges, a one-line provenance header, and private-first regions.`,body:`
We all have that one \`utils.ts\` or \`Makefile\` or generic config that lives in ten different repositories. You tweak it a little for each project, and it drifts. Eventually you want those tweaks to flow back, so one version slowly hardens into something solid, whether for everyone else or just for future you.

But how do you sync a file safely across repos without losing history?

Publishing to an npm registry makes that pull-only and heavy on ceremony. Copying by hand clobbers changes and loses the git trail entirely.

I liked the idea of **bit.dev** for sharing components years ago, but the overhead it enforced was too much to justify. And that project has since pivoted full speed into AI, no thanks. I've also used the shadcn CLI a bit and liked how it could just drop a single file into your project for you.

## The Rule of Three

When I'm deciding whether a file (or one of those functions I always reach for in a new repo) is solid enough to justify the ceremony of a full-blown npm package, I think back to a developer and friend I used to work with, Yusuke. I really respect his instincts, and his rule went something like this: before you turn something into a library, you should have reached for it in at least three projects. Once it's stable enough that you no longer have to tweak it for edge cases every time you pull it into a new project, it's finally ready to become something real that you document.

I've used that as a rule of thumb ever since, and it's stopped me from throwing up a pile of one-off libraries.

But what if you want to keep something private for personal use? Or you don't want the ceremony of building out a full project and npm-linking it every time you want to touch it? Or what if it isn't even something that belongs on npm at all?

I want to move files between my repos quickly and constantly, and I want them to be eventually consistent, but I want to edit my local copy first, so if a change breaks something else, I can opt into that update instead of being surprised by it.

I couldn't find anything that fit, and I couldn't justify writing it myself, because I was busy hand-writing the code I actually share. I still believe code should be written without AI assistance, and that it doesn't belong in my editor. But this was something for me to use personally, so why not?

So I opened the Claude web UI, gave it a long list of exactly what I wanted, and it became filesync.

I vibe-coded \`filesync\` purely for myself, as a single binary with zero transitive dependencies.

## Lightweight by Design

You point it at a git remote to initialize, and it clones that remote into a local cache. From there you add individual files with a simple push or pull, and it stamps a single comment line at the top of each file that records the commit it was forked from, which git uses as the base for a 3-way merge.

And that's it. It leans on git as much as it possibly can: git does the merging, and every push commits a new version to the canonical repo.

It's completely stateless and deterministic: everything it needs lives in that one comment line at the top of the file.

\`\`\`ts
// @sync utils.ts sha=a1b2c3d
export function parse(x: string) { ... }
\`\`\`

That line is the only state. It records the canonical path and the commit you forked from, and it rides along inside the file, so a copy you paste into a new repo is still self-describing. There's no lockfile, no \`.filesync\` directory, no hidden database tracking what's what. Delete the header and the file is just a file again.

## What if I have multiple files with the same name?

This was the first thing that bugged me. I have a \`Makefile\` in my Deno projects and a \`Makefile\` in my Solid projects, and they are absolutely not the same file. If they both pushed to a slot called \`Makefile\`, they'd stomp all over each other.

So filesync has "contexts." But a context isn't some clever tagging system. It's just a folder. The canonical repo is a normal git repo with files in it, and a context is a path prefix inside it:

\`\`\`sh
filesync push -c deno  Makefile     # -> deno/Makefile
filesync push -c solid Makefile     # -> solid/Makefile
\`\`\`

Two slots, two folders, and they never merge into each other. The context gets written into the header so the file remembers who it is:

\`\`\`sh
# @sync context=deno Makefile sha=a1b2c3d
\`\`\`

I kept going back and forth on whether this needed to be something smarter, and every time the answer was no. It's folders. You already understand folders. That's the whole feature.

If you decide a file actually belongs in a different context later, you just push it with a new \`-c\` and it re-slots. The old slot is left alone, because some other project might still be tracking it. I really didn't want a "move" command that quietly deletes something out from under another repo. If nothing's using the old slot anymore, \`unsync\` clears it.

## What if I want to reuse the logic but have secrets in my Makefile?

This is the one that almost killed the whole idea. The entire point is to share the _logic_ of a Makefile across projects, but half of mine have a deploy target with a per-project image tag, or an env line with something I very much do not want landing in a shared git repo.

So filesync has local regions. There are two flavors, depending on how much of the line you want to keep private.

**Full mask**: the content is project-local, full stop. Never pushed, never merged, never even eligible to show up as a conflict:

\`\`\`sh
# @filesync disable
API_SECRET=local-only-value
# @filesync enable

# @filesync ignore
NEXT_LINE_IS_LOCAL=too
\`\`\`

Canonical only ever sees the empty markers, like a template. Every project fills in its own values between them, and none of those values leave your machine.

**Local-wins with redaction**: this is the one I actually reach for most. Sometimes I want the _key_ to be shared, so that adding a new config option in one project propagates it everywhere, but I want the _value_ to stay per-project. You give \`local-start\` a delimiter and it splits on it:

\`\`\`sh
# @filesync local-start =
github_account = you        # canonical stores: github_account = xxxxx
github_repo = your-repo
# @filesync local-end
\`\`\`

Everything before the \`=\` (the key) syncs; everything after gets replaced with a placeholder in canonical, so the real value never leaves. If a plain \`=\` is too blunt, you can hand it a regex delimiter instead:

\`\`\`sh
# @filesync local-start r/\\s=\\s/
key = secret
# @filesync local-end
\`\`\`

The part I was most paranoid about: these markers are recognized in _any_ comment style, not just the one filesync guessed for the file type. So if it ever misdetects the comment prefix on some weird file, it still can't silently skip a \`disable\` block and leak the thing you were trying to protect. Given how I feel about silent, destructive behavior in tooling, that one felt non-negotiable.

## filesync was built after I already had the problem

Here's the awkward part. I didn't build this and then start using it cleanly from day one. I built it _because_ I already had ten drifted copies of the same file scattered across projects, each edited a little differently, with no shared ancestor anywhere. And if there's no shared ancestor, there's nothing for a 3-way merge to stand on.

That's what \`plan\` is for. You point it at the canonical slot and every copy:

\`\`\`sh
filesync plan utils.ts ../proj-*/src/utils.ts
\`\`\`

By default it's read-only. It ranks all the copies, tells you which one to seed canonical from, and writes absolutely nothing to disk. It picks the seed from a mix of last-modified time (a rough proxy for "closest to the original") and centrality: the copy with the smallest total diff to all the others. When those two signals disagree, like when the oldest copy is also a weird outlier, it recommends the central one and tells you why.

Add \`--run\` and it turns into an interactive driver. It seeds canonical from the copy you pick, then each round it recomputes how close every remaining copy is to the _current_ canonical, recommends the easiest next merge, and lets you take it, skip it, or stop. And it isn't faking any of this: it runs the real \`adopt\`/\`push\`/\`pull\` underneath, so a conflict behaves exactly like a normal conflict: the markers get written into the file, you resolve them by hand, and you continue.

The part I'm proudest of is that the driver keeps no state of its own. Every step just re-reads each copy's header and compares it to canonical HEAD. Converged copies get skipped; a copy sitting mid-conflict gets detected and held. Which means resuming is free: re-running the _exact same_ \`plan --run\` command picks up right where you left off. Resolve a conflict, run the same command again, and it moves on to the next copy. Pressing "continue" in the loop and re-running by hand are literally the same code path. (\`--yes\` drives the whole thing start to finish for CI.)

## You mentioned you don't vibe code, but this is vibe-coded?

I think it makes sense to vibe-code this one, since it's an internal tool I only ever intended to use myself. But since it's open source, I figure it's fine to let other people know about it too, with the understanding that you're using it at your own risk. I'm openly warning you: it was not built for client consumption, and I take no responsibility for how badly it might behave. I also had it add tests, but who knows how good those actually are. I haven't cared enough yet to really dig in, and Go seems simple enough that it can almost convincingly write it.

## What about sharing with my teammates?

Everything above uses your global default repo, the one you set once with \`filesync init -g <remote>\`. I use mine for personal stuff. But a file's repo is resolved by _location_, never stored in the header, and that's what makes teams work.

If you want a file to sync with your team instead of your global default, you drop a \`filesync.config.toml\` next to it (or anywhere up the tree) pointing at a shared remote:

\`\`\`toml
remote = "git@github.com:yourteam/shared-configs.git"
\`\`\`

When you push or pull, filesync walks up from the file looking for the nearest config. If it finds one, that's the repo; if it doesn't, it falls back to your global default. So your private files keep syncing there, the shared ones sync to the team remote, and the two never cross, because the routing is purely about where the file lives on disk.

The reason the header deliberately doesn't store the remote: I didn't want cross-repo names leaking into a codebase. A \`filesync.config.toml\` can only ever name its own one repo, which makes it completely safe to commit, even into a shared private repo. So you check it in alongside the rest of the project, a teammate clones the repo, and filesync just starts working for them in that project too. No setup step, no "hey, did you run init," because the config traveled with the code.

It's a single \`main.go\` (plus tests) up on GitHub if you want to poke at it: [github.com/sparkstonepdx/filesync](https://github.com/sparkstonepdx/filesync).
`,collectionType:`Posts`},"/posts/arcanetable-insight":{title:`Arcanetable Insight`,audience:`developer`,products:[`arcanetable`],created:`2026-01-05`,published:`2026-01-05`,updated:``,thumbnail:null,thumbnailAlt:``,blurb:`I checked in on an app I hadn't touched in over a year, and what I found had me utterly gobsmacked.`,body:`
Last night I randomly decided to check in on Arcanetable.app, an app I basically haven't touched in over a year, and what I found had me utterly gobsmacked.

I started writing software pretty young, when a friend and I had a competition to build a messenger. After the initial excitement wore off, we ended up spending most of our time building games together in OpenGL, and it was a blast. Fast forward to the present day: we live on opposite ends of the country, but we still try to keep in touch. My wife surprised me for my birthday in 2024 by flying him out to spend the week with us.

We got pretty deep back into Magic: The Gathering while he was here, and it made me realize there was a massive hole in the market. He headed back home after the visit, and I started writing code on a new pet project. I wanted to mess around with cards the same way we did in person, without needing to constantly pay for plane tickets, and that didn't seem to exist. After several months of sleepless nights, and a desire to code I hadn't felt since those small games in my youth, we were both able to join the same session and see each other moving cards around. We played a couple of sessions over the next few weeks, then I got back to the real world and to building products for Sparkstone, and eventually forgot about Arcanetable.

Which brings us back to last night.

It has grown to over 100 weekly users, roughly 20 a day. Digging in deeper, I realized these are people investing serious time in it: more than 30 sessions lasting over 20 minutes in the past 90 days, and one that ran over an hour and a half.

I've been focused on building products I perceived as creating value, and I've kept my passion projects on the shelf, assuming my toy projects were just a waste of time. Am I still stuck chasing shareholder value even though I'm the only shareholder at Sparkstone? Maybe old habits die hard.

Maybe there's something to Arcanetable, and I should take another look. Have you ever shelved a passion project because you thought it would get in the way of profits? Did you have second thoughts about it?

If you don't know what Arcanetable is and would like to, here's a good place to start.

<div style="left:0;width:100%;height:0;position:relative;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/W-MgOhw-4vU?rel=0" title="Arcanetable: a browser-based 3D table for playtesting card games" style="top:0;left:0;width:100%;height:100%;position:absolute;border:0" allowfullscreen scrolling="no" allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" referrerpolicy="strict-origin"></iframe></div>
`,collectionType:`Posts`},"/posts/build-with-people":{title:`Build With People, Not In Isolation`,audience:`developer`,products:[],created:`2025-12-19`,published:`2025-12-19`,updated:`2026-06-08`,thumbnail:null,thumbnailAlt:``,blurb:`A lot of us want to help by building good, useful things. But retreating to make the elegant, principled "right thing" in isolation is a trap. Software matters because it gets used, and the surest way to get it used is to build it with the people who need it.`,body:`
Things feel pretty intense right now, and a lot of us respond to that by wanting to help. We want to build good software, useful tools, things that matter. And when everything feels chaotic, there's a strong pull to retreat into making the _right thing_: something elegant, principled, technically solid, built exactly the way you think it should be.

I love that instinct. I also think it's a trap.

Because if you build in isolation, you're guessing. It doesn't matter how well-intentioned or well-engineered the thing is. Guessing is a poor substitute for working directly with the people who actually need the help.

## The part that stuck with me

A while back I was watching an LTT video with Linus Torvalds on it, where he's watching the lesser Linus build him a computer. At one point he said something that stuck.

He said he doesn't really care how popular Linux is. He's not chasing adoption numbers or mindshare. But then he added the part that mattered: _users matter_.

Not because popularity is the goal. Because without users, the work stops making sense. If nobody were running Linux, there'd be no reason to keep building it. It wouldn't matter how correct or elegant or well-designed it was. It would just be time spent in a vacuum.

That framing feels especially relevant right now.

## Perfect isn't the same as useful

It's tempting to believe that if you just build the _best_ version of a thing, the cleanest architecture, the most principled approach, people will eventually find it and it'll all have been worth it.

Sometimes that happens. Mostly it doesn't.

A perfect tool that nobody uses doesn't help anyone. And it's worse than neutral, because it drains your energy while convincing you you're making progress. You can spend months polishing something that was never going to connect with anyone, and feel productive the entire time.

Value shows up when the work meets real people with real needs. Not before.

## Community comes first, even though it's the least glamorous part

The most reliable way I've found to build something useful is also the least glamorous. You talk to people. You listen more than you explain. You work alongside them, and you build small things together instead of one big correct thing in the dark.

When you do that, the work changes underneath you. Your assumptions get challenged early, while they're still cheap to change. Features you were sure were essential fall away. Problems you never would have noticed become obvious the second someone hits one in front of you.

That's not the work going wrong. That's the work getting grounded.

## Collaboration reshapes the product

When you ship gradually, in the open, with real users, the thing you end up with is almost never the thing you first imagined. It's usually smaller. More opinionated. More human. It carries the marks of real tradeoffs and constraints and lived experience instead of just your technical ideals.

That drift isn't a failure of vision. It's the clearest sign the work is connected to something outside your own head.

## Build where the need already is

If you want to help, start by finding people who are already stuck on a problem. Work with them directly. Let what they need pull the direction of what you build, instead of deciding the direction up front and hoping they show up for it.

Software doesn't matter because it's clever. It matters because it's used. And the surest way to make sure something gets used is to build it _with_ the people who need it, instead of handing it to them fully formed from a distance.

That's how the work stays meaningful. It's also the part I have to keep relearning.
`,collectionType:`Posts`},"/posts/cryptpads-url-trick":{title:`CryptPad's URL Trick Is Genius`,created:`2025-12-19`,published:`2025-12-19`,thumbnail:null,blurb:"CryptPad stores the shared encryption key in the URL fragment, the part after the `#`. That one choice solves a whole class of secure-sharing problems.",body:`
While revisiting CryptPad's architecture recently, something finally clicked.

**CryptPad stores the shared encryption key in the URL fragment, the part after the \`#\`.** That one choice solves a whole class of secure-sharing problems.

It turned out to be the missing piece I needed to safely create invite links with shared keys.

## Why the \`#\` matters

Anything after \`#\` in a URL is never sent to the server. The browser keeps it entirely client-side.

That means the server can host and sync encrypted data without ever seeing the key used to decrypt it. The trust boundary is clean and enforced by the platform itself, not by policy or convention.

In CryptPad's case, the server only knows about a document ID. The browser extracts the key locally and does the decryption on its own.

## Secure sharing without gymnastics

Before fully internalizing this pattern, invite links always felt risky. If a key is passed through a request or stored server-side, you're constantly guarding against leaks.

The fragment approach flips that model.

You can share a link like:

\`\`\`
https://example.com/doc/abc123#<shared-secret>
\`\`\`

The server handles availability. The client handles secrecy. Possession of the link is possession of the key, nothing more and nothing less.

### Where it still needs care

The fragment stays out of request logs, but it does not stay out of everything. It lands in browser history, it rides along in \`Referer\` headers on older browsers unless you set a referrer policy, and any script on the page can read \`location.hash\`. A link pasted into a chat app is a key pasted into a chat app.

The guarantee is specific: your server never sees the key. Everything between the sender and the recipient's browser is still your problem.

## The piece I was missing

I've spent a lot of time working on encrypted and local-first systems. I had solid key management, device trust, and encryption primitives in place.

What I didn't have was a **simple, human-shareable invite mechanism** that didn't weaken the system.

CryptPad's approach made it obvious: an invite link can just be a pointer plus a secret, as long as the secret never leaves the client.

No server trust. No invite state. No extra protocol.

## Elegant in the best way

What I love about this design is how unremarkable it is.

It uses standard URLs, well-understood browser behavior, and clear boundaries. No new crypto, no clever hacks, just a small decision with big consequences.

It's the kind of idea that feels obvious in hindsight and transformative once you really see it.

## Credit where it's due

CryptPad doesn't just promise privacy. Their architecture enforces it.

That tiny \`#\` is doing an enormous amount of work, and it deserves recognition. It unblocked a major design problem for me, and if you're building encrypted, shareable tools, it might unblock one for you too.
`,collectionType:`Posts`},"/posts/edible-neighborhoods":{title:`Edible Neighborhoods`,audience:`business`,products:[],created:`2026-05-01T11:02:00`,published:`2026-05-01T11:01:00`,updated:``,thumbnail:`/PXL_20260501_030943906.jpg`,thumbnailAlt:`A room full of people all looking intently up towards the projected screen`,blurb:`Evenings like this remind me why local matters, and that the best networks aren't always digital ones.`,body:`
Last night the [North Tabor Neighborhood Association](https://www.northtabor.org) hosted a workshop on creating edible landscapes, in partnership with the [East Multnomah Soil & Water Conservation District](https://emswcd.org). My wife heads communications for the association and I serve as co-chair, so events like this are genuinely close to home for us. We had 40 signups and a waiting list.

The topic itself was chosen by the neighborhood. We sent out a list of options in the newsletter and ran ranked choice voting on the results. It took 5 rounds to decide.

![A spreadsheet showing 5 rounds of ranked choice voting among 22 neighborhood association members. Creating an Edible Landscape won in round 5 with 12 votes, the majority needed, beating out topics including Native Plants, Climate Resilience, and Rain Gardens 101.](/1000043592.png "Ranked Choice Voting Results — Edible Landscape Workshop Topic Selection")

It was the first in-person workshop we've hosted, and honestly we were a little nervous — 2.5 hours is a long ask on a weeknight. But the room stayed engaged the whole time, and neighbors stuck around afterwards with plenty of questions.

From annual veggies and herbs to perennial berries and fruit trees, the workshop covered design tips, building fertile soil, conserving water while producing a harvest, and native plants like salal, Oregon grape, salmonberry, and huckleberry that attract beneficial insects while also feeding you.

![A presentation slide titled "Consider Adding Edible Pacific NW Natives" showing photos of salal, Oregon grape, salmonberry, evergreen huckleberry, and blue elderberry, with photo credits to the University of Oregon and University of Washington.](/PXL_20260501_020652170.jpg "Edible Pacific NW Native Plants — Workshop Presentation Slide")

The workshop was led by Lydia Cox of [Radish Gardens](https://radishgardens.com), who offers landscape design and consultation services including edible plants, habitat for wildlife, and water-wise design. Multi-neighbor and small group consultations are available if you want to take the next step with your own yard.

I spend most of my days thinking about software and systems. But evenings like this remind me why local matters, and that the best networks aren't always digital ones.

East Multnomah Soil & Water runs these workshops regularly. Worth following them at [emswcd.org](https://emswcd.org).
`,collectionType:`Posts`},"/posts/openmls-looked-like-the-perfect-answer":{title:`OpenMLS Looked Like the Perfect Answer, Until It Wasn't`,created:`2025-12-19`,published:`2025-12-19`,thumbnail:null,blurb:`On paper, it checked all the boxes. In practice, I ran into a hard constraint that made it the wrong fit for what I was trying to build.`,body:`
For a long time, OpenMLS felt like the obvious solution for encrypting shared group state.

It's well-designed, thoughtfully specified, and built to solve a real problem: secure group messaging with strong guarantees around membership, forward secrecy, and compromise recovery.

On paper, it checked all the boxes.

In practice, I ran into a hard constraint that made it the wrong fit for what I was trying to build.

### Why OpenMLS was so appealing

MLS is great at what it's designed for: **ordered group communication**.

Everyone agrees on:

* group membership
* a shared cryptographic state
* a linear sequence of epochs

Keys evolve as the group changes. Membership changes advance the epoch. Everything stays tightly synchronized.

For chat, this is exactly what you want.

For shared state, it turns out to be a problem.

### The sequential processing wall

The realization came slowly, then all at once:

**MLS requires commits to be processed in order.**

This is worth being precise about, because MLS has three kinds of message and they behave differently. Application messages are the ones carrying your payload, and they tolerate some reordering: each sender has a ratchet within the epoch, and OpenMLS keeps skipped keys, so a message that arrives late still decrypts. Proposals are unordered by design. Commits are the problem. Each one derives epoch N+1 from epoch N, which means they form a chain you have to walk.

If a client misses a commit or goes offline while the group changes, it can't read anything from the later epochs. It has to catch up, one commit at a time, to rebuild the correct group state.

That's not a flaw, it's a core design property.

But it means:

* every membership or key change forces a commit
* commits serialize, so the epoch chain serializes
* you can't merge two branches of that chain

And that's exactly what distributed state systems need to do.

### Where it breaks for shared state

When you're encrypting group *messages*, an agreed sequence is the point.

When you're encrypting group *state*, it becomes a liability.

Local-first and offline-first systems assume:

* peers will disconnect
* updates will arrive late
* operations will be merged, not replayed

The payload layer would actually be fine here. The trouble is underneath it: if two peers each commit while partitioned, they land on two different epoch N+1s, and there's no merge. One of them has to be thrown away and replayed. A CRDT's whole premise is that this never has to happen.

That's the moment it became clear: **MLS and CRDT-style state sync are philosophically incompatible.**

### The hard-earned lesson

I didn't arrive at this conclusion casually. It took real implementation work to hit this wall.

OpenMLS is not "bad."
It's just extremely good at a different problem than the one I needed solved.

MLS secures conversations.
State sync secures convergence.

Those are related, but not interchangeable.

### What I took away from it

The big lesson wasn't about OpenMLS specifically. It was about respecting design intent.

A system that enforces strict ordering gives you powerful guarantees, but only if your problem actually wants those guarantees.

Once you need:

* unordered updates
* partial history
* offline merges

you need a different abstraction.

It's a humbling reminder that sometimes the hardest part of system design isn't building the thing, it's recognizing when the thing you're excited about doesn't fit.

And moving on anyway.
`,collectionType:`Posts`},"/products/arcanetable":{order:4,title:`Arcanetable`,audience:`business`,created:`2024-08-24`,published:`2024-08-24`,thumbnail:`/arcanetable.webp`,thumbnailAlt:`A robed figure stands beneath a gnarled tree, reaching toward a large swirling spiral, surrounded by pastel pink and mint green clouds and faint circuit-line patterns in the background.`,blurb:`A browser-based 3D virtual tabletop built for playtesting trading card games. Arcanetable gives designers and playgroups a flexible, shared space to test ideas together without enforcing rules or workflows.`,tags:[`multiplayer`],isOpensource:!0,body:`
## Playtest card games together, anywhere

**Arcanetable is live at:** https://arcanetable.app

Arcanetable is a browser-based, 3D virtual tabletop built specifically for playtesting trading card games. It focuses on fast setup, shared state, and realistic table interactions—without the overhead of matchmaking, accounts for spectators, or heavy game rules engines.

Arcanetable is designed for friends, playtest groups, and designers who want a flexible digital table that feels close to playing in person.

***

## What Arcanetable is

Arcanetable provides a shared 3D play space where players can shuffle decks, draw cards, move objects, and test ideas together in real time.

It does not enforce rules or automate gameplay. Instead, it gives players the same freedom they would have at a physical table, with the convenience of being online.

***

## How it works

1. **Create a table**
   Start a session and invite others with a link.
2. **Load decks**

   Bring in custom card sets for testing and iteration.

3. **Play together**
   Draw, shuffle, stack, tap, and move cards naturally on a shared table.
4. **Iterate fast**

   Adjust cards, mechanics, and layouts between games without friction.

***

## Built for playtesting

Arcanetable is intentionally focused on the needs of designers and serious playtesters.

* No matchmaking or public lobbies
* No automated rules enforcement
* No pressure to "play correctly"
* Full control over the table state

This makes it ideal for early-stage ideas, custom formats, and experimental mechanics.

***

## Features

### 3D virtual tabletop

A spatial, shared table that mirrors the feel of physical card play, including stacking, positioning, and table presence.

### Real-time multiplayer

Play together instantly using simple invite links.

### Custom cards and decks

Test your own card designs and iterate quickly as ideas evolve.

### Flexible interactions

Move, rotate, stack, and organize cards freely—no rigid zones required.

### Lightweight and browser-based

No downloads required. Works directly in the browser.

### Open-source foundation

Arcanetable is licensed under the AGPL and designed with openness and extensibility in mind.

***

## Use cases

* Trading card game playtesting
* Indie card game design
* Custom formats and house rules
* Remote playtest sessions
* Teaching and prototyping mechanics

***

## Why Arcanetable

Most digital card game platforms focus on finished products.

Arcanetable focuses on the process.

It gives designers and players a shared space to experiment, discuss, and refine ideas without locking them into predefined systems.

***

## From Sparkstone

Arcanetable is built by **Sparkstone**, a Portland-based product studio focused on thoughtful, human-centered software and tools for creative collaboration.

We believe experimental tools should be approachable, flexible, and respectful of how people actually work and play.

***

## Get started

Create a table or learn more at https://arcanetable.app

Arcanetable is under active development. Feedback from designers and playtesters is always welcome.
`,collectionType:`products`},"/products/blathadex":{order:5,title:`Blathadex`,audience:`personal`,created:`2022-02-06`,published:`2022-02-06`,thumbnail:`/(iPhone SE).png`,thumbnailAlt:`A stylized owl icon with crescent moon eyes and a diamond nose, rendered in blue-purple gradients, surrounded by pastel pink, mint, and lavender geometric and circuit-board design elements.`,blurb:`a companion guide for Animal Crossing: New Horizons, designed to help players track, discover, and plan around the creatures, flowers, villagers, and items available on their island.`,isOpensource:!0,body:`
## A friendly field guide for island life

Blathadex is a companion guide for _Animal Crossing: New Horizons_, designed to help players track, discover, and plan around the creatures, flowers, villagers, and items available on their island.

Blathadex is live at [blathadex.com](https://www.blathadex.com/)

It brings everything together in one calm, approachable interface—making it easier to know what’s available, when to find it, and what you’ve already collected.

***

## What Blathadex does

Blathadex acts as a living reference for island life.

Players can browse creatures, flowers, gyroids, villagers, and items, mark entries as collected, and quickly see when and where things appear throughout the year.

Rather than replacing in-game discovery, Blathadex supports it—helping players plan sessions, set goals, and avoid missing seasonal content.

***

## Designed for clarity and calm

Blathadex was designed to feel lightweight and friendly, matching the tone of the game itself.

- Clean, readable layouts
- Soft colors and simple iconography
- Touch-friendly navigation
- Clear visual indicators for availability and progress

The goal was to make information easy to scan without overwhelming the player.

***

## Key features

### Creature tracking

Browse fish, bugs, and sea creatures with clear indicators for location, time of day, seasonality, and size. Mark creatures as caught and quickly see what’s still missing.

### Seasonal availability

Visual timelines show when creatures appear throughout the year, helping players plan ahead and avoid missing limited-time content.

### Flowers and variations

Explore flower types and color variations in a simple grid, making it easier to understand breeding outcomes and collection goals.

### Villagers and items

Browse villagers and items with clear categorization and visual consistency.

### Progress at a glance

Track what you’ve collected and what’s still available with minimal friction.

***

## Built as a learning project

Blathadex was created as a collaborative design and development project during the early days of the pandemic.

It served as an opportunity to explore:

- Interface design for large datasets
- Visual hierarchy and information density
- Client-side performance and responsiveness
- Building friendly, non-commercial tools for fan communities

The project is open source and continues to be a meaningful snapshot of Sparkstone’s early product thinking.

***

## From Sparkstone

Blathadex was built by **Sparkstone** as an early example of our approach to product design: thoughtful interfaces, respectful use of data, and tools that support people without demanding attention.

It reflects our belief that even playful tools deserve care and craft.
`,collectionType:`products`},"/products/dawei":{order:6,title:`dawei`,audience:`developer`,url:``,repo:``,package:``,created:`2021-01-16`,published:`2021-01-16`,thumbnail:null,thumbnailAlt:``,blurb:`Minimal, flexible state management for React.`,tags:[],isOpensource:!0,body:`
**dawei** is a tiny but powerful state management library for React. Inspired by Zustand and Recoil, it provides a simple API that works without context—while still supporting deeply nested values, subscriptions, and scoped stores. It’s built for projects that want fine-grained control without boilerplate.

**Links:**

- **GitHub:** https://github.com/odama626/dawei
- **npm:** https://www.npmjs.com/package/dawei

***

## What it does

- **Minimal API**  
  No providers, no reducers, no boilerplate—just \`createStore()\` and \`store.use()\`.
- **Deep state access**  

  Read and write nested keys like \`company.name\`, even if parts of the path don’t exist yet.

- **Global reactivity**  
  Components stay in sync automatically. No selector ceremony or memo gymnastics.
- **Direct control**  

  Update from anywhere with \`store.set()\` and listen with \`store.subscribe()\`.

## Installation

\`\`\`bash
npm install dawei
\`\`\`

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
`,collectionType:`products`},"/products/feature-flags":{order:8,title:`feature-flags`,audience:`developer`,created:`2025-09-30`,published:`2025-09-30`,thumbnail:null,blurb:`Tiny, framework-agnostic feature flags for TypeScript.`,isOpensource:!0,body:`
**@sparkstone/feature-flags** is a small, framework-agnostic TypeScript library for defining and evaluating feature flags. It supports simple boolean “allow” flags as well as integer-based constraints (exact, minimum, and maximum), making it useful for feature rollouts, limits, and environment-based behavior.

**Links:**

- **GitHub:** https://github.com/Sparkstonepdx/feature-flags
- **npm:** https://www.npmjs.com/package/@sparkstone/feature-flags

---

## What it does

- **Boolean feature flags**  
  Simple on/off flags using \`type: "allow"\`.

- **Integer constraints & ranges**  
  Exact values, minimums, and maximums for limits like quotas, thresholds, or build numbers.

- **Tier-based segmentation**  
  Every flag includes a free-form \`tier\` string for environments, cohorts, regions, or plans.

- **Framework-agnostic**  
  Works anywhere TypeScript or JavaScript runs—no React, no hooks, no globals required.

- **Multi-format builds**  
  Ships ESM, CJS, and UMD bundles with type definitions.

## Installation

\`\`\`bash
npm i @sparkstone/feature-flags
\`\`\`

or

\`\`\`bash
pnpm add @sparkstone/feature-flags
\`\`\`

or

\`\`\`bash
yarn add @sparkstone/feature-flags
\`\`\`

## Quick start

\`\`\`ts
import { featureFlags, FeatureFlag } from "@sparkstone/feature-flags";

const flags: FeatureFlag[] = [
  { name: "newDashboard", tier: "beta", type: "allow", value: true },
  { name: "maxUploads", tier: "", type: "int:max", value: 10 },
  { name: "minAge", tier: "eu", type: "int:min", value: 16 },
  { name: "build", tier: "qa", type: "int", value: 1234 },
];

featureFlags.load(flags);

if (featureFlags.isAllowed("newDashboard", "beta")) {
  // show experimental UI
}

if (featureFlags.isInRange("maxUploads", "", 7)) {
  // within allowed cap
}
\`\`\`

## How tiers work

Each flag is uniquely identified by **name + tier**. Internally the key is:

\`\`\`
{name}.{tier}
\`\`\`

This makes tiers a flexible way to segment behavior:

- environments: \`dev\`, \`qa\`, \`prod\`
- cohorts: \`beta\`, \`control\`
- regions: \`eu\`, \`us\`
- plans: \`free\`, \`pro\`

Keeping names stable and varying tiers makes it easy to reason about rollout logic.

## Browser & Node support

- **Browser / UMD:** drop-in via \`dist/main.umd.js\`
- **ESM:** modern bundlers and Node
- **CJS:** legacy Node environments
- **Types:** included \`.d.ts\` files

Microbundle is used to produce all outputs cleanly.

## Why it exists

Feature flags are often over-engineered or tightly coupled to frameworks. **feature-flags** focuses on the core mechanics—clear semantics, predictable evaluation, and zero runtime magic—so you can layer your own persistence, reactivity, or remote loading on top without fighting the library.

It’s designed to be small, explicit, and easy to delete if your needs change.
`,collectionType:`products`},"/products/grim-choices":{order:3,title:`Grim Choices`,audience:`business`,created:`2025-12-18`,published:`2025-12-18`,thumbnail:`/Screenshot 2026-09-08 at 8.43.59 AM.png`,thumbnailAlt:`A cute chibi-style Grim Reaper with a skull face, teal hood, and blue-purple robe, holding a scythe in one hand and making a peace sign with the other, against a pastel pink, mint, and lavender abstract background.`,blurb:`A human-centered planning tool for documenting end-of-life decisions with clarity and care. Designed to reduce uncertainty and emotional burden for loved ones.`,body:`
## Thoughtful planning for life’s hardest moments

**Early access is available.** Join the mailing list at https://grimchoices.com/ to receive updates and early access invitations.

Grim Choices is a human-centered planning tool designed to help people think through end-of-life decisions before they become emergencies.

It provides a calm, guided way to document wishes, responsibilities, and important information—so loved ones aren’t left guessing during already difficult times.

***

## What Grim Choices is

Grim Choices helps individuals organize and communicate critical decisions around end-of-life planning in one place.

Rather than focusing on legal complexity or fear-based messaging, it emphasizes clarity, reflection, and practical preparedness.

The goal is not to replace legal advice, but to make conversations and documentation easier to start, revisit, and share when appropriate.

***

## How it works

1. **Answer guided questions**
   Users are prompted with clear, plain-language questions covering common end-of-life scenarios.
2. **Record decisions and preferences**

   Capture wishes around care, guardianship, responsibilities, and important contacts.

3. **Organize critical information**
   Keep key details structured and accessible in one place.
4. **Share intentionally**

   Choose when and with whom information is shared.

***

## Designed to reduce burden

Grim Choices is built around the idea that good planning is an act of care.

* Calm, non-alarmist language
* Clear explanations without legal jargon
* Focus on reducing stress for loved ones
* Designed for revisiting over time, not one-time completion

***

## Key areas covered

### Care preferences

Document wishes related to medical care, quality of life considerations, and decision-making preferences.

### Guardianship and dependents

Capture plans and intent around children, pets, and other dependents.

### Responsibilities and roles

Clarify who should handle specific tasks and decisions.

### Important information

Organize contacts, documents, and details that are often scattered or forgotten.

***

## Why Grim Choices

End-of-life planning is often avoided because tools are overwhelming, impersonal, or framed around fear.

Grim Choices takes a different approach.

It treats planning as a reflective, ongoing process—one that respects emotional reality while still delivering practical value.

***

## Built with care

Grim Choices is being developed with a strong emphasis on privacy, respect, and long-term trust.

User data is treated as deeply personal, and design decisions prioritize dignity over engagement metrics.

***

## From Sparkstone

Grim Choices is built by **Sparkstone**, a Portland-based product studio focused on thoughtful, human-centered software.

We believe tools dealing with serious life events should be calm, clear, and worthy of trust.

***

## Status

Grim Choices is under active development. Early feedback from individuals, families, and advisors helps shape its direction.
`,collectionType:`products`},"/products/id-order-spacing":{order:9,title:`id-order-spacing`,audience:`developer`,url:``,repo:``,package:``,created:`2025-03-24`,published:`2025-06-24`,thumbnail:null,thumbnailAlt:``,blurb:`Minimal, collision-safe ordering for sortable lists.`,tags:[],isOpensource:!0,body:`
**id-order-spacing** is a lightweight utility for managing item order when inserting or moving elements within a sorted array. It calculates stable order values and applies the smallest possible adjustments to avoid collisions—making it ideal for database-backed lists.

**Links:**

- **GitHub:** https://github.com/odama626/id-order-spacing
- **npm:** https://www.npmjs.com/package/@sparkstone/id-order-spacing

***

## What it does

- **Collision-safe inserts**  
  Calculate a new order value when inserting an item at a specific index—or appending to the end.
- **Stable move operations**  

  Move items within a list while minimizing changes to surrounding items.

- **Minimal database writes**  
  Only items that require order adjustments are returned, reducing update churn.
- **Configurable spacing**  

  Customize spacing behavior using exposed \`step\` and \`minimumStep\` values.

- **Batch-friendly updates**  
  Includes helpers for batching database writes efficiently.

## Installation

\`\`\`bash
pnpm install @sparkstone/id-order-spacing
\`\`\`

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
`,collectionType:`products`},"/products/katachi":{order:10,title:`katachi`,audience:`personal`,created:`2025-01-07`,published:`2025-01-07`,thumbnail:`/Screenshot 2026-09-08 at 8.26.30 AM.png`,thumbnailAlt:`A scattered pattern of small illustrated skulls, crosses, and gift boxes in light blue and pink on a white background, with some icons grouped inside pink rectangular outlines.`,blurb:`Fast-paced, real-time puzzle battles. Last stack standing.`,tags:[`game`,`multiplayer`],body:`
**Katachi** is a real-time, browser-based puzzle battle where precision, speed, and survival instincts collide. Inspired by the classics and built for modern competition, Katachi turns familiar falling-block mechanics into a live, high-stakes multiplayer experience.

**Links:**

* **Play now:** https://www.katachi.pro

***

## What it is

* **Real-time puzzle royale**\\
  Drop into an active arena with other players. Clear lines to stay alive, send pressure, and outlast the chaos.
* **Classic mechanics, modern flow**\\

  Familiar falling-block gameplay with clean controls and smooth browser performance—no downloads, no friction.

* **Competitive by design**\\
  No gimmicks. No pay-to-win. Just skill, reflexes, and the tension of outlasting the field.
* **Instant-play in the browser**\\

  Jump into a match in seconds at katachi.pro. No accounts or installs required.

## Why it exists

Puzzle games are at their best when they’re fast, fair, and intense. **Katachi** strips away randomness and progression tricks to focus on what matters: mechanical skill, decision-making under pressure, and the thrill of live competition.

> “Katachi is what we wanted as kids — a Tetris-style game that’s alive, intense, and truly multiplayer.”\\
> — The Sparkstone Team
`,collectionType:`products`},"/products/liveframe":{order:1,title:`Liveframe`,audience:`business`,url:``,repo:``,package:``,created:`2025-12-18`,published:`2025-12-18`,thumbnail:`/meta-image-1.webp`,thumbnailAlt:`Two hands forming a heart shape in front of a large pink and purple heart, overlaid with pastel mint, pink, and lavender geometric beams, with a stylized cityscape and circuit-line patterns in the background.`,blurb:`A private Instagram for your events. Guests scan a QR code to share photos, messages, and polls in real time with no app installs and no accounts for your guests.`,tags:[`community`,`events`],testimonials:[`allie-6ad7c2ecd738`],booking_cta:{heading:``,body:``,action_label:``},body:`
## Live photos, messages, and moments, shared instantly together

**Liveframe is live at:** https://liveframe.app

Liveframe is a lightweight, privacy-first live slideshow and audience engagement tool for events. Guests scan a QR code to post photos, messages, and reactions that appear instantly on the projector or display—no apps, no accounts, no friction.

Whether you’re hosting a wedding, conference, community meetup, classroom session, or neighborhood event, Liveframe turns passive audiences into active participants.

***

## How it works

1. **Create an event**\\
   Start a Liveframe session in seconds. Each event gets a unique QR code.
2. **Guests scan and post**\\
   Attendees scan the QR code with their phone to submit photos or messages—no login required.
3. **Cast live**\\
   Submissions appear instantly on the shared screen as a live, dynamic slideshow.
4. **Control the moment**\\
   Switch between open interaction and facilitator-controlled mode as your event unfolds.

***

## Built for real-world events

Liveframe is designed for the messy, joyful reality of in-person gatherings.

* Works on any phone using just a browser
* No apps to install or accounts to manage
* Fast and reliable for live projection
* Human-centered and easy to explain in a room

***

## Features

### Live photo sharing

Guests post photos in real time, creating a shared visual record of the event as it happens.

### Live messages

Attendees can submit notes, shout-outs, questions, or reflections—perfect for panels, celebrations, and workshops.

### Live polls

Facilitators can launch polls with deadlines and display results instantly on screen.

### Controlled mode

Toggle moderation on or off in real time. Keep things open during social moments and locked down during presentations.

### Projector-friendly display

Designed specifically for big screens, TVs, and projectors with clean, readable layouts.

### Privacy-respecting by default

No public feeds. No social graphs. Events are private by design.

***

## Use cases

* Weddings and celebrations
* Conferences and talks
* Community and neighborhood events
* Classrooms and workshops
* Meetups and social gatherings

***

## Why Liveframe

Most live engagement tools are built for marketing teams.

Liveframe is built for people in a room together.

* No downloads to explain
* No attendee data harvesting
* No algorithmic feeds
* No friction at the door

Just a shared moment, captured together.

***

## From Sparkstone

Liveframe is built by **Sparkstone**, a Portland-based product studio focused on thoughtful, human-centered software.

We believe tools for real-world connection should be simple, respectful, and joyful to use.

***

## Get started

Create your first event at https://liveframe.app

If you’re interested in custom features, private hosting, or using Liveframe for a larger event, reach out to Sparkstone to start a conversation.
`,collectionType:`products`},"/products/ntna-yard-sale-map":{order:2,title:`Yard Sale Map`,audience:`business`,url:``,repo:`https://github.com/sparkstonepdx/yardsale-map`,package:``,created:`2025-10-06`,published:`2025-10-21`,thumbnail:`/media/products/screenshot-from-2026-09-14-21-06-11.png`,thumbnailAlt:``,blurb:`Organizing a neighborhood yard sale? Put every seller on a map that updates itself from your sign-up form. Free, and yours to keep.`,tags:[`community`,`neighborhood`],isOpensource:!0,body:`
You've got a sign-up form, a spreadsheet filling up with addresses,
and a Saturday coming. Somewhere in there, somebody has to turn that
list into something a visitor can actually use to find forty
garages.

That's this. Neighbors sign up through your Google Form, and the map
draws itself. Nobody retypes addresses, nobody drags pins around, and
when someone signs up on Friday night they're on the map on Friday
night.

## What your neighbors see

A map of the neighborhood with a pin on every sale, a list of who's
selling what, and a search box that filters both at once. Somebody
hunting for a bike finds the three people selling bikes. It works on
a phone, which is where almost everyone will open it.

For a two-day sale, sellers pick their days, and visitors see only
the sales happening the day they're out walking.

## What it costs you

Nothing. There's no per-sale fee and no account to create, for you or
for your neighbors.

It runs on your own website, reading from a spreadsheet you own. Your
neighbors' addresses stay in your Google account and nobody else's,
which matters more than it sounds like when you're the person who
asked them to hand those addresses over.

## Getting it running

About twenty minutes, mostly clicking around in Google to connect
your form, plus one short snippet to paste into a page at the end. If
your association has someone who manages the website, that snippet is
the only part they need from you.

Everything is written up here:
[github.com/sparkstonepdx/yardsale-map](https://github.com/sparkstonepdx/yardsale-map).

## Where it came from

I'm co-chair of the North Tabor Neighborhood Association in Portland,
and I built the first version for our own sale because we needed one.
Three other neighborhoods asked to borrow it, which is why it exists
as something you can run yourself.
[That's the whole story](/case-studies/2026-07-29-the-map-i-never-meant-to-build),
including the part where the first version broke the night before the
sale.

Grab it, and reach out if you get stuck. I'll help you get it
standing.

## Is there a version of this at your work?

The map started because a volunteer was retyping addresses by hand
every spring. Most of the work I do for Portland businesses starts
the same way: one process everyone puts up with because there's no
obvious fix. If something at your office looks like that, I'm happy
to take a look at it.

<Link role='button' name='book-a-call'>Book a call</Link>
`,collectionType:`products`},"/products/pocketbase-schema":{order:15,title:`pocketbase-schema`,audience:`developer`,created:`2025-03-24`,published:`2025-03-31`,thumbnail:null,blurb:`Type-safe PocketBase development — automatically.`,isOpensource:!0,body:`
**pocketbase-schema** is a utility that generates TypeScript types directly from your PocketBase collections. It’s built for developers who want stronger guarantees, better autocomplete, and fewer runtime surprises when building on top of PocketBase.

**Links:**

* **GitHub:** https://github.com/odama626/pocketbase-schema
* **npm:** https://www.npmjs.com/package/@sparkstone/pocketbase-schema

***

## What it does

* **Automatic type generation**\\
  Pull your PocketBase schema and generate complete TypeScript definitions for collections and records.

* **Collections enum**\\
  Access collection names as constants instead of raw strings for safer queries.

* **Field option enums**\\
  Automatically generate enums for select fields to ensure strict typing.

* **CLI & API support**\\
  Run it as a command-line tool or import it into your Node.js toolchain.

* **Local-first configuration**\\
  Uses \`cosmiconfig\`, so configuration can live in a config file, \`package.json\`, or a custom location.

## Installation

\`\`\`bash
npm install @sparkstone/pocketbase-schema --save-dev
\`\`\`

or

\`\`\`bash
pnpm add @sparkstone/pocketbase-schema --save-dev
\`\`\`

## Usage

Generate types from an exported PocketBase schema:

\`\`\`bash
pocketbase-schema generate \\
  --input=pb_schema.json \\
  --output=src/lib/pb-types.ts
\`\`\`

Or use it programmatically:

\`\`\`ts
import { generate } from "@sparkstone/pocketbase-schema";

generate({
  input: "./pb_schema.json",
  output: "./src/lib/pb-types.ts",
});
\`\`\`

## Configuration

Configuration is handled via \`cosmiconfig\`. Supported formats include \`.json\`, \`.yaml\`, \`.js\`, or \`.ts\`.

Example \`.pocketbase-schema.config.ts\`:

\`\`\`ts
export default {
  email: "admin@example.com",
  password: "yourpassword",
  url: "http://127.0.0.1:8090",
  schema: {
    outputPath: "src/lib/pb.schema.json",
  },
  types: {
    outputPath: "src/lib/pb.types.ts",
  },
};
\`\`\`

> Be sure to add your config file to \`.gitignore\` to avoid leaking credentials.

## Using the generated types

\`\`\`ts
import PocketBase from "pocketbase";
import { Collections, Posts } from "./pb.types";

const pb = new PocketBase("http://127.0.0.1:8090");

const posts = await pb.collection(Collections.Posts).getFullList<Posts>();
\`\`\`

### Expanding relations

The recommended pattern is to extend generated types:

\`\`\`ts
import { Posts, Comments, Reactions } from "./pb.types";

interface Post extends Posts {
  expand: {
    comments: Comments[];
    reactions: Reactions[];
  };
}

pb.collection(Collections.Posts).getFullList<Post>({
  expand: "comments,reactions",
});
\`\`\`

## Why it exists

PocketBase makes it easy to move fast, but keeping frontend and backend schemas in sync can quietly become a source of bugs. **pocketbase-schema** turns your PocketBase schema into a single source of truth for types, eliminating copy-paste definitions and fragile string-based queries.

> “We built pocketbase-schema because we love PocketBase — and we wanted full type safety without manual copy-pasting.”
> — The Sparkstone Team
`,collectionType:`products`},"/products/solid-forms":{order:11,title:`Solid Forms`,audience:`business`,url:``,repo:``,package:``,created:`2025-12-18`,published:`2025-12-18`,thumbnail:`/media/products/screenshot-from-2026-09-14-16-50-57.png`,thumbnailAlt:``,blurb:`Simple, Shareable Forms Built for Real People`,tags:[],body:`
Sometimes you just need to ask a question and get clear answers — without bloated dashboards, account juggling, or privacy compromises. That’s why we built Solid Forms.

Whether you’re collecting signups, gathering feedback, or running a workshop, Solid Forms helps you create clean, reliable forms in minutes.

>  Solid Forms is live at [solid-forms.com](https://solid-forms.com)

### The Problem: Complex Tools for Simple Tasks

Most form builders pack in features you don’t need, inject trackers by default, or create a maze of permissions and settings just to get started. If you’re looking for something straightforward, that can feel like overkill.

### The Solution: Solid Forms

Solid Forms focuses on doing the basics well. You create an account, build your form with a simple, dark-mode editor, and share it using a unique link.

Add text fields, checkboxes, dropdowns, number inputs, and rich text sections. Whatever you need to get clear responses. When people fill it out, their answers appear instantly in a clean, sortable table you can export at any time.

There’s no publish step, no complex visibility settings. Just build, share the link, and you’re good to go.

Who It’s For

* Builders and small teams who need feedback fast
* Teachers and coaches gathering input or reflections
* Workshop hosts managing signups and RSVPs
* Anyone tired of bloated form tools and over-complicated platforms

### Privacy First

Respondents don’t need accounts to reply. Solid Forms doesn’t track them, inject analytics, or set cookies. Responses are stored securely and stay private.

### Try It Now

Get started at [solid-forms.com](https://solid-forms.com). It’s fast, focused, and designed to respect your time and your audience.

Have questions or want help setting up your first form? We’re happy to walk you through it.
`,collectionType:`products`},"/products/solid-validation":{order:7,title:`solid-validation`,audience:`developer`,created:`2025-03-24`,published:`2025-06-24`,thumbnail:null,blurb:`Lightweight, flexible form validation for Solid.js.`,isOpensource:!0,body:`
**@sparkstone/solid-validation** is a small, pragmatic form validation library for Solid.js. It provides a simple API for validating inputs, handling submission state, and managing error messages—without heavy abstractions or framework lock-in.

**Links:**

* **GitHub:** https://github.com/odama626/solid-validation
* **npm:** https://www.npmjs.com/package/@sparkstone/solid-validation

***

## What it does

* **Declarative input validation**\\
  Validate inputs using directives, with support for sync and async validators.

* **Submission state management**\\
  Track whether a form is submitting or has been successfully submitted.

* **Centralized error handling**\\
  Errors are stored in a reactive object keyed by field name, making them easy to display.

* **Minimal API surface**\\
  Designed to feel “Solid-native” and stay out of your way.

* **PocketBase helpers included**\\
  Optional utilities to prepare form data and parse PocketBase API errors.

## Installation

\`\`\`bash
npm install @sparkstone/solid-validation
\`\`\`

or

\`\`\`bash
pnpm add @sparkstone/solid-validation
\`\`\`

## Basic usage

\`\`\`tsx
import { useForm } from "@sparkstone/solid-validation";

function MyForm() {
  const { formSubmit, validate, errors, isSubmitting, isSubmitted } = useForm();

  async function onSubmit(form: HTMLFormElement) {
    // handle submission
  }

  return (
    <form use:formSubmit={onSubmit}>
      <input name="username" required use:validate />
      <span>{errors.username}</span>

      <button type="submit" disabled={isSubmitting()}>
        {isSubmitting() ? "Submitting…" : "Submit"}
      </button>

      {isSubmitted() && <p>Form successfully submitted!</p>}
    </form>
  );
}
\`\`\`

## Custom validation

Validators receive the input element and return either:

* a falsy value for valid input
* a string error message for invalid input
* or a Promise resolving to either

\`\`\`ts
function minLength(el: HTMLInputElement) {
  return el.value.length < 5 && "Must be at least 5 characters";
}
\`\`\`

## PocketBase integration

Optional helpers are included for PocketBase-backed forms.

### Preparing form data

\`\`\`ts
import { prepareFormDataForPocketbase } from "@sparkstone/solid-validation/pocketbase";

prepareFormDataForPocketbase(formData, form);
\`\`\`

### Parsing PocketBase errors

\`\`\`ts
import { parsePocketbaseError } from "@sparkstone/solid-validation/pocketbase";

const errors = parsePocketbaseError(e);
// { email: "Invalid email", password: "Too short", form: "Something went wrong" }
\`\`\`

## Why it exists

Solid’s fine-grained reactivity makes it easy to build fast forms, but validation logic often becomes duplicated or tightly coupled to UI code. **solid-validation** keeps validation explicit, composable, and predictable—while offering first-class support for PocketBase-based workflows.
`,collectionType:`products`},"/products/sparkstone-css":{order:12,title:`sparkstone/css`,audience:`developer`,created:`2025-12-18`,published:`2025-12-18`,thumbnail:null,blurb:`I Finally Built the CSS Framework I Wanted`,tags:[`css`],isOpensource:!0,body:`
I’ve been using [Pico.css](https://picocss.com) for years on a lot of projects. Liveframe.app is even built with it. But I’ve had to hack on it quite a bit to get adjustable per-user theming, and it ends up being kind of heavy when you include all the colors. I wanted something a little more dynamic, and I’ve finally built it.

It’s called \`@sparkstone/css\`, and it’s built for people like me: folks who want semantic HTML, zero bloat, and a color system that actually makes sense when you start tweaking things. ([@sparkstone/css on npm](https://www.npmjs.com/package/@sparkstone/css))

This isn’t meant to compete with the big players. It’s not Tailwind. It’s not Bootstrap. It’s what I needed, and maybe you do too.

***

## Why I Love Pico.css (And What I Needed More Of)

I’ve used Pico on a dozen projects. I love the simplicity of it, and how you can just start building things and rarely even need to reach for classes to adjust stuff. Honestly, I tried just making a fork of it to start with — Pico has almost everything I want. But over time, I kept running into the same issues:

* Wanting to use a specific color palette for special cases
* Wanting to be able to let the user choose their own theming
* Wishing I could just swap a base color and have everything update beautifully
* Needing a few more classes… but not that many

So after I realized that hacking on Pico was going to be harder than starting from a new foundation, I started designing.

<video src="/css.mp4" controls ></video>

## Enter \`@sparkstone/css\`

This project is heavily inspired by Pico, but rebuilt from scratch around \`oklch()\`. If you’ve ever struggled to tune your colors across light and dark mode, or wanted a theme system that actually reflects your palette’s structure — you’ll get why this matters. After I got the color system working, I built a page and put it side by side with Pico to get it close — like I said, I still love Pico.

Here’s how it works:

\`\`\`css
/* these are the defaults */
:root {
  --color: rebeccapurple;
  --primary-color: blue;
  --accent-color: oklch(from var(--color) l c calc(h + 180));
  --error-color: maroon;
}
\`\`\`

That’s it. The rest cascades from there. Text colors, surface backgrounds, borders, shadows — all tuned based on perceptual lightness and chroma. You don’t need to invent a palette. You just pick a color, and everything adjusts accordingly.

***

## What You Get

* ✨ Light / dark mode that works by default (system-aware, but overrideable)
* ✨ Minimal classes (\`.card\`, \`.secondary\`, \`.ghost\`, etc.) when you need them (largely Pico-compatible)
* ✨ Fully native HTML elements styled with care: forms, dialogs, buttons, etc.
* ✨ A Sass layer with functions for color derivation (but you don’t need it)

There’s **no runtime**. No JS required for the styles. Just smart CSS.

***

## Try It Live

I put together a docs site using the framework itself:

https://sparkstonepdx.github.io/css/docs

The docs include:

* Forms
* Color Palettes
* Containers & Dialogs

Everything is copyable and live-styled with your chosen theme.

***

## Install It

\`\`\`bash
pnpm add @sparkstone/css
\`\`\`

Then import it however you like:

\`\`\`js
// scss (for full control)
import '@sparkstone/css/src/theme.scss';

// or plain css
import '@sparkstone/css/theme.css';
\`\`\`

***

## I Made This For Me (But It’s for all of us)

I’ve spent years building local-first, minimal, durable tools, after outgrowing a decade of chasing the new shiny. Always reaching for libraries that almost worked the way I wanted. This one finally does.

If you’re like me, and you want your CSS to feel like it’s helping, and not just there — I think you might like it too.

— Adam
Founder @ Sparkstone
`,collectionType:`products`},"/products/tasks":{order:13,title:`Tasks`,audience:`business`,created:`2024-11-13`,published:`2024-11-13`,thumbnail:`/Screenshot 2026-09-08 at 9.04.29 AM.png`,thumbnailAlt:``,blurb:`Local-first, collaborative notes and tasks—built for offline reliability.`,isOpensource:!0,body:`
**Tasks** is a local-first, collaborative notes and tasks app built for reliability, offline resilience, and open collaboration. It’s designed for users who want full control over their data while still benefiting from modern real-time collaboration.

Packaged as a lightweight Progressive Web App (PWA), Tasks works offline by default and syncs efficiently when connectivity is available.

**Links:**

- **Live demo:** https://tasks-eight-dun.vercel.app
- **Source code:** https://github.com/odama626/tasks

***

## What it does

- **Local-first storage**  
  Data is cached using IndexedDB and service workers, allowing the app to function fully offline.
- **Real-time collaboration**  

  Peer-to-peer syncing with Yjs and WebRTC enables collaborative editing without centralized servers.

- **Offline-first sync model**  
  Changes sync efficiently between devices using PocketBase subscriptions, with future plans for ActivityPub federation.
- **Open source by design**  

  Licensed under **AGPL-3.0**, ensuring the project remains transparent, forkable, and user-respecting.

- **Progressive Web App**  
  Installable on desktop and mobile—no app stores, no lock-in.
- **Flexible content model**  

  Notes and tasks are stored as blocks, supporting rich text, embedded files, and quick-action templates.

- **Dynamic theming**  
  Customizable CSS-based themes adapt the UI without heavy frameworks.

## Architecture overview

- **Frontend:** Vanilla TypeScript + Web Components
- **Collaboration layer:** Yjs (CRDT) + WebRTC + IndexedDB persistence
- **Optional backend:** PocketBase for presence and event subscriptions
- **Deployment:** Optimized for edge hosting (Vercel, Cloudflare)

## Why it exists

Task and note apps often trade control and durability for convenience. **Tasks** takes the opposite approach: offline-first, user-owned data, and collaboration that doesn’t depend on a central service.

It’s an exploration of what practical, everyday software looks like when **local-first principles** are treated as a foundation rather than a feature.
`,collectionType:`products`},"/products/version-json":{order:14,title:`version-json`,audience:`developer`,created:`2022-08-10`,published:`2022-08-10`,thumbnail:null,blurb:`Effortless versioning for long-lived JSON payloads.`,isOpensource:!0,body:`
**version-json** is a lightweight utility for managing and upgrading long-lived JSON data structures. You define transformation functions for each version, and it upgrades incoming payloads to the latest shape—keeping your data consistent as your schema evolves.

**Links:**

- **GitHub:** https://github.com/odama626/version-json
- **npm:** https://www.npmjs.com/package/version-json

---

## What it does

- **Version-aware transformations**  
  Define a chain of upgrades that move payloads from one version to the next.

- **Flexible version detection**  
  Use a dedicated version field (like \`version\`) or provide a custom function that infers the version from the payload shape.

- **Simple integration**  
  Small API surface: describe upgrades with \`.add()\`, then normalize data with \`.process()\`.

## Example

\`\`\`ts
const upVersion = new VersionJson("version");

upVersion
  .add(1, (p) => p)
  .add(2, (p) => {
    p.newData = p.data;
    delete p.data;
    return p;
  });

const newData = upVersion.process({ version: 1, data: "hello world" });
// => { version: 2, newData: "hello world" }
\`\`\`

## Why it exists

If you persist JSON in a database, local cache, config files, or synced documents, schemas inevitably change. **version-json** gives you a clear, explicit place to keep migrations so you can accept older payloads without scattering compatibility logic throughout your codebase.

> “We created version-json to simplify the process of managing evolving JSON data structures, making data migrations effortless and reliable.”
> — The Sparkstone Team
`,collectionType:`products`}},{"/case-studies":{products:{collection:`products`,indexId:`products||{{slug}}`,multiple:!0},testimonials:{collection:`testimonials`,indexId:`testimonials||{{slug}}`,multiple:!0}},"/data/menus":{"items.page_item.item":{collection:`pages`,indexId:`pages||{{slug}}`,multiple:!1},"items.link_item.item":{collection:`links`,indexId:`links||{{slug}}`,multiple:!1},"items.nested_menu.item":{collection:`menus`,indexId:`menus||{{slug}}`,multiple:!1}},"/data/links":{parent:{collection:`links`,indexId:`links||{{slug}}`,multiple:!1}},"/products":{testimonials:{collection:`testimonials`,indexId:`testimonials||{{slug}}`,multiple:!0}},"/posts":{products:{collection:`products`,indexId:`products||{{slug}}`,multiple:!0}},"/data/home":{testimonials:{collection:`testimonials`,indexId:`testimonials||{{slug}}`,multiple:!0},"featured.case_study.entry":{collection:`case-studies`,indexId:`case-studies||{{slug}}`,multiple:!1},"featured.product.entry":{collection:`products`,indexId:`products||{{slug}}`,multiple:!1},"featured.post.entry":{collection:`Posts`,indexId:`Posts||{{slug}}`,multiple:!1}},"/data/settings":{headerMenu:{collection:`menus`,indexId:`menus||{{slug}}`,multiple:!1},footerMenu:{collection:`menus`,indexId:`menus||{{slug}}`,multiple:!1}}},{"products||{{slug}}":{arcanetable:{key:`/products/arcanetable`},blathadex:{key:`/products/blathadex`},dawei:{key:`/products/dawei`},"feature-flags":{key:`/products/feature-flags`},"grim-choices":{key:`/products/grim-choices`},"id-order-spacing":{key:`/products/id-order-spacing`},katachi:{key:`/products/katachi`},liveframe:{key:`/products/liveframe`},"ntna-yard-sale-map":{key:`/products/ntna-yard-sale-map`},"pocketbase-schema":{key:`/products/pocketbase-schema`},"solid-forms":{key:`/products/solid-forms`},"solid-validation":{key:`/products/solid-validation`},"sparkstone-css":{key:`/products/sparkstone-css`},tasks:{key:`/products/tasks`},"version-json":{key:`/products/version-json`}},"testimonials||{{slug}}":{"allie-6ad7c2ecd738":{key:`/data/testimonials/allie-6ad7c2ecd738`},"wendy-shih-cac86a8c3361":{key:`/data/testimonials/wendy-shih-cac86a8c3361`}},"pages||{{slug}}":{"[...404]":{key:`/data/pages/[...404]`},about:{key:`/data/pages/about`},alignment:{key:`/data/pages/alignment`},blog:{key:`/data/pages/blog`},"case-studies":{key:`/data/pages/case-studies`},contact:{key:`/data/pages/contact`},home:{key:`/data/pages/home`},mentions:{key:`/data/pages/mentions`},"open-source":{key:`/data/pages/open-source`},products:{key:`/data/pages/products`}},"links||{{slug}}":{"book-a-call":{key:`/data/links/book-a-call`}},"menus||{{slug}}":{footer:{key:`/data/menus/footer`},header:{key:`/data/menus/header`}},"case-studies||{{slug}}":{"2026-07-29-the-map-i-never-meant-to-build":{key:`/case-studies/2026-07-29-the-map-i-never-meant-to-build`},"2026-09-14-a-library-that-fits-in-a-free-library":{key:`/case-studies/2026-09-14-a-library-that-fits-in-a-free-library`}},"Posts||{{slug}}":{"2026-06-28-filesync":{key:`/posts/2026-06-28-filesync`},"arcanetable-insight":{key:`/posts/arcanetable-insight`},"build-with-people":{key:`/posts/build-with-people`},"cryptpads-url-trick":{key:`/posts/cryptpads-url-trick`},"edible-neighborhoods":{key:`/posts/edible-neighborhoods`},"openmls-looked-like-the-perfect-answer":{key:`/posts/openmls-looked-like-the-perfect-answer`}}});function hd(e){return md[e]??{}}function gd(){let e=Pu();return()=>hd(e.pathname.replace(/\/+$/,``)||`/`)}function _d(e){return Object.entries(md).filter(([t])=>t.startsWith(e)).map(([e,t])=>({path:e,content:t}))}var vd=/([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;function yd(e=``){let t={};for(let[,n,r,i,a]of e.matchAll(vd))t[`${n.toLowerCase()}`]=r??i??a??``;return t}var bd=Pc(`<a>`);function xd(e){let t=e.item;return`name`in e&&(t=md[`/data/pages/${e.name}`]??md[`/data/links/${e.name}`]),Ps(zs,{get children(){return[Ps(Bs,{get when(){return t.collectionType===`links`},get children(){return Ps(Sd,Qa(()=>$a(e,`children`,`item`),{item:t,get children(){return e.children}}))}}),Ps(Bs,{get when(){return t.collectionType===`pages`},get children(){return Ps(Cd,Qa(()=>$a(e,`children`,`item`),{item:t,get children(){return e.children}}))}}),Ps(Bs,{when:!0,children:()=>{throw Error(`failed to render link`)}})]}})}function Sd(e){let t=e.label||e.item.label;var n=Hl(bd);return Gc(n),$c(n,Qa(()=>$a(e,`item`,`children`),{"aria-label":t,get href(){return e.item.url}},()=>yd(e.item?.customAttributes)),!0),cl(n,()=>e.children||t),Gl(),n}function Cd(e){let t=e.label||e.item.heading;var n=Hl(bd);return Gc(n),$c(n,Qa(()=>$a(e,`item`,`children`),{"aria-label":t,get href(){return e.item.route}},()=>yd(e.item?.customAttributes)),!0),cl(n,()=>e.children||t),Gl(),n}export{$c as $,tl as A,C as At,bc as B,Nu as C,H as Ct,Tu as D,A as Dt,fu as E,wt as Et,Hl as F,O as Ft,vc as G,Vl as H,Wl as I,E as It,nl as J,tc as K,Ul as L,Le as Lt,Jc as M,xe as Mt,Fc as N,Se as Nt,Ac as O,j as Ot,ec as P,Ye as Pt,Kc as Q,jc as R,Mu as S,jr as St,mu as T,Ut as Tt,cl as U,lu as V,su as W,Gl as X,Wc as Y,rl as Z,Hu as _,Z as _t,ju as a,Hs as at,Uu as b,$a as bt,ud as c,zs as ct,ad as d,cs as dt,Pc as et,Yu as f,Q as ft,ed as g,Fs as gt,td as h,os as ht,md as i,Ls as it,Gc as j,k as jt,cu as k,be as kt,ld as l,Ps as lt,rd as m,is as mt,_d as n,Ks as nt,Au as o,Bs as ot,Xu as p,ss as pt,Zc as q,gd as r,Vs as rt,Ju as s,Rs as st,xd as t,zl as tt,sd as u,to as ut,cd as v,no as vt,Ou as w,z as wt,Pu as x,Er as xt,Bu as y,Qa as yt,_c as z};