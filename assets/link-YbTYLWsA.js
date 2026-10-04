var e=class extends Error{source;constructor(e){let t=Error,n=t.stackTraceLimit;n!==void 0&&(t.stackTraceLimit=0),super(),n!==void 0&&(t.stackTraceLimit=n),this.source=e}},t=class extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}};function n(e){return e instanceof t?e.cause:e}var r=class extends Error{constructor(){super(``)}},i=class extends Error{constructor(){super(``)}},a=1024,o=2048,s=4096,c=1024,l=2048,u=4096,d=16384,f=1<<17,p=1<<18,m=1<<19,h=1<<20,g=1<<26,_=1<<21,v=1<<22,ee=1<<24,y=1<<23,b={},te={},ne={};function x(e){return e===ne?void 0:e}var re=typeof Proxy==`function`,ie={},ae=Symbol(`refresh`),oe=new WeakMap,S=new Set;function se(e){let t=oe.get(e);if(t)return C(t);let n=(e.o?.kn)?.o?.me,r=n?C(n):null;return t={ni:e,Qe:new Set,dn:[[],[]],ei:null,we:E,ii:r},oe.set(e,t),S.add(t),ce(e.o?.Ze,t),ce(e.o?.He,t),t}function ce(e,t){if(!e)return;let n=oe.get(e);if(!n)return;let r=C(n);r!==t&&r.ni===e&&!r.ii&&(r.ii=t)}function C(e){for(;e.ei;)e=e.ei;return e}function le(e){if(!e.we)return!1;for(let t of e.Qe)if(gt(t)!==null)return!0;return!1}function ue(e,t){let n=pe(e);return!n||!le(n)||de(n,e)?!1:(n.dn[0].push(()=>t.oe&64||xt(t)),!0)}function de(e,t){if(E!==null){let e=me(t);if(e&&Qn(e))return!0}return z!==null&&C(z)===e}function fe(e,t){if(e=C(e),t=C(t),e===t)return e;t.ei=e;for(let n of t.Qe)e.Qe.add(n);return t.Qe.clear(),e.dn[0].push(...t.dn[0]),e.dn[1].push(...t.dn[1]),t.dn[0].length=0,t.dn[1].length=0,e}function pe(e){let t=e.o?.me;if(!t)return;let n=C(t);if(S.has(n))return n;e.o!==null&&(e.o.me=void 0)}function me(e){if(H(e)&&e.o?.Ln){let t=B(e).Ln=j(e.o?.Ln);if(t.Rn!==!0)return t;e.o!==null&&(e.o.Ln=null)}return pe(e)?.we??e.we}function he(e,t){let n=C(t),r=e.o?.me;if(r){let i=C(r);if(S.has(i)){i!==n&&(!H(e)||e.C&8388608)&&(n.ii&&C(n.ii)===i?(B(e).me=t,e.C|=c):i.ii&&C(i.ii)===n||fe(n,i));return}}B(e).me=t,e.C|=c}var ge=new Set,w={eE:Array(2e3).fill(void 0),tE:!1,ln:0,EE:0},_e={eE:Array(2e3).fill(void 0),tE:!1,ln:0,EE:0};function ve(e){if(e.oe&128&&!ye(e))return k.Ke(e);e.oe&16?e.oe&=-140:(Tt(e,_e),e.oe&=-132)}function ye(e){let t=e;for(;t!==null&&t.oe&32;)t=t._parent;return t!==null&&!!(t.C&67108864)}var T=0,E=null,be=!1,xe=!1,Se=!1,Ce=0,D=!1,we=0;function Te(){we++}function Ee(){we--}var De=new Set;function Oe(e){De.add(e)}function ke(e){let t=e.m;return ge.size===0&&S.size===0&&e.ft.length===0&&t.cn.length===0&&t.A.length===0&&t.ti.size===0&&De.size===0&&Re.size===0}function Ae(){if(De.size!==0)for(let e of De){if(e.u!==null){De.delete(e);continue}e._e===b&&(e.o?.Fe===void 0||e.o?.Fe===b)&&(e.o?.t||(De.delete(e),e.C&262144?zn(e):e.o?.Hn?.()))}}function je(e){D=e}function Me(){return{be:T,Gn:[],le:new Map,cn:[],A:[],ti:new Set,pe:[],dt:{Tt:[[],[]],ft:[]},Rn:!1,In:new Set,Dn:null}}function Ne(e,t){t.Rn=e,e.pe.push(...t.pe),e.Te||=t.Te;for(let n of S)n.we===t&&(n.we=e);t.cn.length&&(e.cn.push(...t.cn),t.cn.length=0),t.A.length&&(e.A.push(...t.A),t.A.length=0);for(let n of t.ti)e.ti.add(n);for(let[n,r]of t.le){let t=e.le.get(n);t||e.le.set(n,t=new Set);for(let e of r)t.add(e)}for(let n of t.In)e.In.add(n);t.Dn&&(e.Dn??=[]).push(...t.Dn)}var Pe=!1;function O(){if(xe){We();return}be||(be=!0,!Ce&&!A.Jn&&(Pe=D,Pe||queueMicrotask(dt)))}function Fe(){Pe&&(Pe=!1,queueMicrotask(dt))}var Ie=[];function Le(){for(let e of ge)Ie.includes(e)||Ie.push(e);O()}var Re=new Set;function ze(e){Re.add(e),O()}function Be(){let e=Array.from(Re);Re.clear();for(let t=0;t<e.length;t++)e[t].se()}var Ve=[],He=Symbol.for(`solid-js/root-error-hook`);function Ue(e){if(xe)return;xe=!0;let t=`[REACTIVITY_HALTED]`,n=e!==void 0&&globalThis.reportError;n||e===void 0?console.error(t):console.error(t,e),n&&n(e)}function We(){Se||(Se=!0,console.error(`[REACTIVITY_HALTED]`))}var Ge=0,Ke=class{_parent=null;Tt=[[],[]];ft=[];ht=0;created=T;addChild(e){this.ft.push(e),e._parent=this}removeChild(e){let t=this.ft.indexOf(e);t>=0&&(this.ft.splice(t,1),e._parent=null)}notify(e,t,n,r){return this._parent?this._parent.notify(e,t,n,r):!1}run(e){if(this.Tt[e-1].length){let t=this.Tt[e-1];this.Tt[e-1]=[],ft(t,e)}let t=this.ft,n=++Ge;for(let r=0;r<t.length;){let i=t[r];if(i.ht!==n&&(i.ht=n,i.run?.(e),t[r]!==i)){r=0;continue}r++}}enqueue(e,t){e&&(z?C(z).dn[e-1].push(t):this.Tt[e-1].push(t)),O()}stashQueues(e){e.Tt[0].push(...this.Tt[0]),e.Tt[1].push(...this.Tt[1]),this.Tt=[[],[]];for(let t=0;t<this.ft.length;t++){let n=this.ft[t],r=e.ft[t];r||(r={Tt:[[],[]],ft:[]},e.ft[t]=r),n.stashQueues(r)}}restoreQueues(e){this.Tt[0].push(...e.Tt[0]),this.Tt[1].push(...e.Tt[1]);for(let t=0;t<e.ft.length;t++){let n=e.ft[t],r=this.ft[t];r&&r.restoreQueues(n)}}},k=class e extends Ke{Jn=!1;m=Me();static Ke;static en;static Cn;static _t=null;static p=null;static G=null;static M=null;static N=null;static Zn=null;static jn=null;static Ve=null;static Ge=null;static We=null;static ri=null;static et=null;static nt=null;static rt=null;static On=null;static k=null;static Et=null;static Nt=null;static ot=null;static oi=null;static ai=null;static li=null;static si=null;static ui=null;static lt=null;static it=null;static tt=null;static $n=null;static an=null;static Sn=null;static zn=null;static Tn=null;static ke=null;static Ei=null;static ut=null;static Me=null;static Xn=!1;static st=null;static fi=null;flush(){if(!this.Jn){if(E===null&&w.EE<w.ln&&this.Tt[0].length===0&&this.Tt[1].length===0&&this.ft.length===0&&!Ie.length&&!Ve.length&&ke(this)){this.Jn=!0;try{mr(),Zt(),at()}finally{this.Jn=!1}T++,be=w.EE>=w.ln||this.Tt[0].length!==0||this.Tt[1].length!==0||this.m.Gn.length!==0;return}this.Jn=!0,mr();try{for(;Ve.length;)this.initTransition(Ve.pop());if(Zt(),Ot(w,e.Ke),E&&e.Ei?.(E)&&Ot(w,e.Ke),Re.size&&(Be(),Ot(w,e.Ke)),E){if(this.ft.length&&(st(this,!0),w.EE>=w.ln&&Ot(w,e.Ke)),!ht(E)){let t=E;it.length=0,Ot(_e,this.m===t?ve:e.Ke),this.m===t&&(ut=this.m=Me()),S.size&&(e.si(1),e.si(2)),this.stashQueues(t.dt),T++,be=w.EE>=w.ln||this.m.Gn.length>0,lt(t.Gn),E=null,ot(null,!0);return}let t=E,n=this.m;if(n!==t&&n.Gn.push(...t.Gn),this.restoreQueues(t.dt),ge.delete(t),E=null,lt(n.Gn),ot(t),n===t){let e=Me();e.Gn=n.Gn,e.cn=n.cn,e.A=n.A,e.ti=n.ti,ut=this.m=e}}else ke(this)?(at(),w.EE>=w.ln&&(Ot(w,e.Ke),at())):(ge.size&&(at(),Ot(_e,e.Ke)),ot());T++,be=w.EE>=w.ln||E!==null||this.m.Gn.length!==0,S.size&&e.si(1),this.run(1),S.size&&e.si(2),this.run(2)}finally{for(;!be&&!E&&Ie.length;)this.initTransition(Ie.pop());this.Jn=!1}}}notify(t,n,r,i){if(n&1){if(r&1){let n=i??t.o?._;if(n?.l)return!0;if(n&&(!E&&!t.we&&ut.Gn.length&&this.initTransition(),E)){let r=n.source,i=E.le.get(r);i||E.le.set(r,i=new Set);let a=i.size;i.add(t),i.size!==a&&(O(),e.Nt?.(E))}}return!0}return!1}initTransition(e){if(e&&(e=j(e),e.Rn===!0||e===E)||!e&&E&&E.be===T)return;if(!E)E=e??Me();else if(e){let t=E;Ne(e,t),this.restoreQueues(t.dt),ge.delete(t),E=e}ge.add(E),E.be=T;let t=this.m;if(t!==E){let e=this.Jn?0:ee;for(let n=0;n<t.Gn.length;n++){let r=t.Gn[n];if(r.we===null&&r._e!==b&&(!r.he||r.oe&1024&&!(r.h&4))&&r.xe&&r.xe(r.ce,r._e)){r._e=b,et(r);continue}r.we=E,r.C|=e,E.Gn.push(r)}for(let e=0;e<t.cn.length;e++){let n=t.cn[e];n.we=E,E.cn.push(n)}t.A.length&&E.A.push(...t.A);for(let e of t.ti)E.ti.add(e);if(t.In.size){for(let e of t.In)E.In.add(e);t.In.clear()}ut=this.m=E}for(let e of S)e.we||=E;O()}};function qe(e){ut.Gn.push(e),A.Jn||ar()}var Je=!1,Ye=0;function Xe(){Ye++}var Ze=0;function Qe(e){let t=Ze;return Ze=e,t}function $e(e,t=!1){e.vn=Ye;let n=e.C,r=(n&1024?e.o?.me:void 0)||z,i=!!(n&512)&&e.o?.sn!==void 0,a=Je;for(let n=e.u;n!==null;n=n.Ae){let e=n.ge;if(a&&(e.oe&=~o),e.oe&4&&n.Be===e.Ye&&n!==e.Nn&&(e.oe|=s),i&&e.C&8){e.oe|=256;continue}t&&r?(e.oe|=128,he(e,r)):t&&(e.oe|=128,e.o&&(e.o.me=void 0)),xt(e)}}function et(e){let t=e;if(!t.he){e._e!==b&&(e.ce=e._e,e._e=b),e.C&256&&k.ri(e);return}e._e!==b&&(e.ce=e._e,e._e=b,t.h&=-5,e.je&&e.je!==3&&(e.Xe=!0),e.o&&(e.o.Le=!1)),t.ve=!1,t.oe&=~a,t.o?._??qt(t),t.C&=-68157441,t.h&1?e.C|=_:t.h&=-5,t.o!=null&&(t.o._n!==null||t.o.fn!==null)&&k.en(t,!1,!0),e.C&256&&k.ri(e)}var tt=null;function nt(e){tt=e}var rt=[],it=[];function at(){for(;it.length;)qt(it.pop());let e=ut.Gn;for(let t=0;t<e.length;t++){let n=e[t];et(n),n.we=null,n.C&131072&&(n.C&=~f,rt.push(n))}e.length=0,tt?.()}function ot(e=null,t=!1){let n=ut,r=!t;r&&at(),!t&&A.ft.length&&st(A);let i=e?.Dn,a=r&&(e??n).cn.length!==0;if(i&&!a)for(let e of i)e.oe&64||xt(e);let o=w.EE>=w.ln;if(o&&Ot(w,k.Ke),r){if(ut!==n){if(e===null||e===n)return}else o&&at();let t=e??n;if(t.cn.length&&k.oi(t.cn),i&&a){for(let e of i)e.oe&64||xt(e);O()}if(t.In.size){for(let e of t.In)e.oe&64||xt(e);t.In.clear(),O()}if(t.A.length&&(k.G(t.A),A.ft.length&&st(A)),t.ti.size&&k._t(t.ti,e),rt.length!==0){for(;rt.length;)$e(rt.pop());w.EE>=w.ln&&(Ot(w,k.Ke),at())}Ae(),S.size&&k.li(e)}}function st(e,t){for(let n of e.ft)t?n.Re?.():n.Ee?.(),st(n,t)}var ct=0;function lt(e){for(let t=0;t<e.length;t++)e[t].we=E,e[t].C&=~ee}var A=new k,ut=A.m;function dt(e){if(we>0)return e?e():void 0;if(e){Ce++;try{return e()}finally{try{dt()}finally{Ce--}}}if(!A.Jn&&!xe){for(;be||E;)A.flush();Ze=0}}function ft(e,t){for(let n=0;n<e.length;n++)e[n](t)}function pt(t,n,r){let i=t.oe;if(i&64)return!1;if(i&32){let e=t;for(;e&&e.oe&32;)e=e._parent;let n=e&&(e.we||(e.C&1048576?E:null));if(!n&&e&&e.C&67108864&&e.o?.me&&(n=C(e.o.me).we),!n||(n=j(n)).Rn===!0||n===r)return!1}for(let e=t.T;e;e=e._parent)if(e.te&1&&!e.q)return!1;if(t.o?.ue?.has(n))return!0;let a=t.Nn;for(let e=a===null?null:t.Ie;e;e=e===a?null:e.Ne){let t=e.Oe;for(;t;){if(t===n||t.De===n||t.o?.ue?.has(n))return!0;t=t.o?.kn}}return!!(t.h&1&&t.o?._ instanceof e&&t.o?._.source===n)}function mt(e,t,n){let r=e.le.get(t),i=!1;for(let e of r??[]){if(pt(e,t,n))return!0;n&&e.oe&32?i=!0:r.delete(e)}return i||e.le.delete(t),!1}function ht(e){if(e.Rn)return!0;if(e.pe.length)return!1;let t=!0;for(let n of e.le.keys())if(mt(e,n,e)&&n.o?.ue?.size){t=!1;break}return t&&k.ai?.(e)&&(t=!1),t&&(e.Rn=!0),t}function j(e){for(;e.Rn&&typeof e.Rn==`object`;)e=e.Rn;return e}function gt(e){for(let t of ge)if(mt(t,e))return t;return null}function _t(e){for(let t of ge)mt(t,e)&&A.initTransition(t)}function vt(e,t){let n=E;try{return E=j(e),t()}finally{E=n}}function yt(e,t){let n=E,r=A.m;try{return E=j(e),ut=A.m=E,t()}finally{E=n,ut=A.m=r}}function bt(e){return e.oe&32?_e:w}function xt(e){let t=bt(e);t.ln>e.rn&&(t.ln=e.rn),Ct(e,t)}function St(e,t){let n=(e._parent?.Wn?e._parent.qn?.rn:e._parent?.rn)??-1;n>=e.rn&&(e.rn=n+1);let r=e.rn,i=t.eE[r];if(i===void 0)t.eE[r]=e;else{let t=i.Fn;t.Pn=e,e.Fn=t,i.Fn=e}r>t.EE&&(t.EE=r)}function Ct(e,t){let n=e.oe;n&1036||(n&1?e.oe=n&-4|10:(e.oe=n|8,t.tE&&Dt(e)),n&16||St(e,t))}function wt(e,t){let n=e.oe;n&1052||(e.oe=n|16,St(e,t))}function Tt(e,t){let n=e.oe;if(!(n&24))return;e.oe=n&-25;let r=e.rn;if(e.Fn===e)t.eE[r]=void 0;else{let n=e.Pn,i=t.eE[r],a=n??i;e===i?t.eE[r]=n:e.Fn.Pn=n,a.Fn=e.Fn}e.Fn=e,e.Pn=void 0}function Et(e){if(!e.tE){e.tE=!0;for(let t=0;t<=e.EE;t++)for(let n=e.eE[t];n!==void 0;n=n.Pn)n.oe&8&&Dt(n)}}function Dt(e,t=2){let n=e.oe;if(!((n&3)>=t)){e.oe=n&-4|t;for(let t=e.u;t!==null;t=t.Ae)Dt(t.ge,1);if(e.C&4096)for(let t=e.o.i;t!==null;t=t.Ue)for(let e=t.u;e!==null;e=e.Ae)Dt(e.ge,1)}}function Ot(e,t){for(e.tE=!1,e.ln=0;e.ln<=e.EE;e.ln++){let n=e.eE[e.ln];for(;n!==void 0;)n.oe&8?t(n):kt(n,e),n=e.eE[e.ln]}e.EE=0}function kt(e,t){Tt(e,t);let n=e.rn;for(let t=e.Ie;t;t=t.Ne){let e=t.Oe,r=e.De||e;r.he&&r.rn>=n&&(n=r.rn+1)}if(e.rn!==n){e.rn=n;for(let t=e.u;t!==null;t=t.Ae)wt(t.ge,bt(t.ge))}}var At={};function jt(e){let t=e.tn;for(;t;){let e=t.oe;t.oe=e|32,e&24&&(Tt(t,e&32?_e:w),e&8?Ct(t,_e):wt(t,_e)),jt(t),t=t.un}}function Mt(e){e.C&=-33,Yt(e)}function Nt(e,t=!1,n){let r=e.oe;if(r&64)return;if(t&&!n&&e.o!==null&&(e.o._n!==null||e.o.fn!==null)&&Nt(e,!1,!0),t){e.oe=r|64;let t=e;(t.o?.Ze||t.o?.He)&&k.ri(t),t.C&2048&&t.o.Un.forEach(k.ri);let n=t.we;n&&t.h&1&&!Ie.includes(n)&&(Ie.push(n),O())}t&&e.he&&e.o!==null&&(e.o.Ce=null);let i=n?e.o?._n??null:e.tn;for(n||(e.tn=null);i;){let e=i;e.C&=-33,Tt(e,bt(e)),Jt(e),i.gn=i,Nt(i,!0),i=i.un}if(n?e.o!==null&&(e.o._n=null):e.En=0,t&&!n&&!(r&32)&&e._parent!==null&&!(e._parent.oe&64)){let t=e.gn,n=e.un;t===null?e._parent.tn=n:t.un=n,n!==null&&(n.gn=t),e.gn=null}if(Ft(e,n),t&&e.wn){let t=e.wn;e.wn=void 0,t()}}function Pt(e,t){let n=e.tn;t.gn=null,t.un=n,n!==null&&(n.gn=t),e.tn=t}function Ft(e,t){let n=t?e.o?.fn:e.qe;if(n){if(t?e.o.fn=null:e.qe=null,Array.isArray(n))for(let e=n.length-1;e>=0;e--){let t=n[e];t.call(t)}else n.call(n)}}function It(e,t){let n=e;for(;n.C&4&&n._parent;)n=n._parent;if(n.id!=null)return Bt(n.id,t?n.En++:n.En);throw Error(``)}function Lt(e){return It(e,!0)}function Rt(e,t,n){return e?.id??(t?n?.id:n?.id==null?void 0:Lt(n))}function zt(e){return It(e,!1)}function Bt(e,t){let n=t.toString(36),r=n.length-1;return e+(r?String.fromCharCode(64+r):``)+n}function M(){return I||L?At:P?R:null}function N(){return R}function Vt(e){return R&&(R.qe?Array.isArray(R.qe)?R.qe.push(e):R.qe=[R.qe,e]:R.qe=e),e}function Ht(e){return!!(e.oe&96)}function Ut(e=!0){Nt(this,e)}function Wt(e){let t=R,n=e?.transparent??!1,r={id:Rt(e,n,t),C:n?4:0,Wn:!0,qn:t?.Wn?t.qn:t,tn:null,un:null,gn:null,qe:null,T:t?.T??A,Je:t?.Je||ie,En:0,o:null,_parent:t,dispose:Ut};return t&&Pt(t,r),r}function Gt(e,t){let n=Wt(t);return wr(n,()=>e(()=>n.dispose()))}function Kt(e){let t=e.Oe,n=e.Ne,r=e.Ae,i=e.el;if(r===null?t.mn=i:r.el=i,i!==null)i.Ae=r;else if(t.u=r,r===null){t.C&262144?zn(t):t.o?.Hn?.();let e=t;e.he&&e.C&32&&!(e.oe&32)&&!(e.h&1)&&Yt(e)}return n}function qt(e){let t=e.Nn,n=t===null?e.Ie:t.Ne;if(n!==null){do n=Kt(n);while(n!==null);t===null?e.Ie=null:t.Ne=null}}function Jt(e){let t=e.Ie;if(t){do t=Kt(t);while(t!==null);e.Ie=null,e.Nn=null}}function Yt(e){Tt(e,bt(e)),Jt(e),Nt(e,!0)}var Xt=new Set;function Zt(){if(Xt.size!==0){for(let e of Xt)!e.u&&e.C&32&&!(e.h&1)&&!(e.oe&96)&&Yt(e);Xt.clear()}}function Qt(e,t,n=!1){let r=t.Nn;if(r!==null&&r.Oe===e){r.ze&&=n;return}let i=null,a=t.oe&4;if(a&&(i=r===null?t.Ie:r.Ne,i!==null&&i.Oe===e)){i.Be=t.Ye,t.Nn=i,i.ze=n;return}let o=e.mn;if(o!==null&&o.ge===t&&(!a||o.Be===t.Ye)){a?o.ze&&=n:o.ze=n;return}let s=t.Nn=e.mn={Oe:e,ge:t,Ne:i,el:o,Ae:null,Be:t.Ye,ze:n};r===null?t.Ie=s:r.Ne=s,o===null?e.u=s:o.Ae=s,Xe()}function $t(e,t){return!e.o?.ue?.has(t)&&((B(e).ue??=new Set).add(t),!0)}function en(e,t){let n=e.o?.ue;return n?.delete(t)?(n.size||(e.o.ue=void 0),!0):!1}function tn(e){e.o!==null&&(e.o.ue=void 0)}function nn(e,t){for(let n=e.Ie;n;n=n.Ne){let e=n.Oe.De||n.Oe;if(e===t||e.o?.ue?.has(t))return!0}return!1}function rn(e,t){B(e).Pe=!0,t.source&&$t(e,t.source),e.h&2||an(e,t.source,t)}function an(t,n,r){if(!n){t.o!==null&&(t.o._=null);return}if(r instanceof e&&r.source===n){B(t)._=r;return}let i=t.o?._;(!(i instanceof e)||i.source!==n)&&(B(t)._=new e(n))}function on(e,t){for(let n=e.u;n!==null;n=n.Ae)t(n.ge,n);for(let n=e.o?.i??null;n!==null;n=n.Ue)for(let e=n.u;e!==null;e=e.Ae)t(e.ge,e)}function sn(e){e.he&&e.C&32&&!e.u&&!(e.oe&32)&&!(e.h&1)&&Yt(e)}function cn(e){let t,n=new Set,r=e=>{n.has(e)||(n.add(e),!e.u&&e.C&32&&(t??=[]).push(e),on(e,r))};if(on(e,r),t)for(let e of t)sn(e)}function ln(e,t){let n=!1,r=new Set,i=e=>{r.has(e)||(r.add(e),e.o?._===t&&(xt(e),n=!0),on(e,i))};on(e,i),n&&O()}function un(e,t=e){en(e,t);let n=!1,r,i=new Set,a=k.Ge,o=s=>{if(i.has(s)||t!==e&&nn(s,t)||!en(s,t))return;i.add(s),s.be=T;let c=s.o?.ue?.values().next().value,l=s.h&2;c?(l||an(s,c),a?.(s)):(s.h&=-2,l||an(s),a?.(s),s.o?.Pe&&(xt(s),n=!0),s.o!==null&&(s.o.Pe=!1),!s.u&&s.C&32&&(r??=[]).push(s)),on(s,o)};if(on(e,o),r)for(let e of r)sn(e);n&&O()}function dn(e){return typeof e==`object`&&!!e&&typeof e.then==`function`}function fn(e){let t=e.o?.ye;t!=null&&(e.o.ye=null,t())}function pn(t,n,r){let i=!1,a=!1;if(typeof n==`object`&&n&&V(()=>{i=n[Symbol.asyncIterator],a=!i&&dn(n)}),!a&&!i)return t.o!==null&&(t.o.Ce=null),t.ve=!1,n;B(t).Ce=n,t.o.ue=void 0;let o=Ze,s,c=()=>{let e=me(t);if(t.o?.me&&(e=gt(t)??e),e&&t.h&4&&!j(e).le.has(t)){t.we=null;return}A.initTransition(e),_t(t)},l=r=>{if(t.o?.Ce!==n)return;let i=r instanceof e;if(i&&t.ve){t.o!==null&&(t.o.Ce=null),rn(t,r),t.be=T;return}c(),gn(t,i?1:2,r),i&&un(t),t.be=T,i||cn(t)},u=(e,i)=>{if(t.o?.Ce!==n||t.oe&130)return;Qe(o),c();let a=!!(t.h&4),s=t.o?.Le;hn(t),s&&(t.o.Le=!0);let u=pe(t);if(u&&u.Qe.delete(t),r){try{r(e)}catch(e){l(e);return}a&&hn(t,!0)}else if(t.o?.Fe!==void 0&&!(u&&t.C&8388608))t._e===b&&qe(t),t._e=e,k.Ve?.(t,e),H(t)?k.ke(t,e):$e(t),t.be=T;else if(u){let n=t.je,r=H(t)?x(t.o.Fe):t.ce,i=t.xe;try{(!n&&a||!i||!i(r,e))&&(n?t.ce=e:k.Me(t,e,u),t.be=T,k.Ve?.(t,e),$e(t,!0))}catch(e){gn(t,2,e)}}else try{W(t,()=>e)}catch(e){gn(t,2,e)}t._e===b&&(t.ve=!1,s&&(t.o.Le=!1),qt(t)),un(t),O(),dt(),i?.()},d=()=>t.C&32&&!t.u&&!(t.h&1)?(Yt(t),!0):!1,f=(e,r)=>{let i=e[Symbol.asyncIterator](),a=!1,o=!1,c=!r,f=()=>{if(!o){o=!0;try{let e=i.return?.();dn(e)&&e.then(void 0,()=>{})}catch{}}};r?r(f):Vt(f),B(t).ye=f;let p=()=>{d()||m()},m=()=>{let e,r,f=!1,h=!1,g=!0,_=i.next();if((dn(_)?_:{then:e=>void e(_)}).then(r=>{if(g&&c)e=r,f=!0,r.done&&(o=!0);else if(t.o?.Ce!==n)return;else r.done?(o=!0,a?(O(),dt()):u(void 0),d()):(a=!0,u(r.value,p))},e=>{g&&c?(r=e,h=!0):t.o?.Ce===n&&(o=!0,l(e),d())}),g=!1,h){if(o=!0,l(r),c)throw r;return!0}return f&&!e.done?(s=e.value,a=!0,m()):f&&e.done},h=m();return c=!1,a||h},p=null,m=(e,t)=>{let n=!1;if(typeof e==`object`&&e&&V(()=>{n=e[Symbol.asyncIterator]}),!n)return!1;let r=f(e,t);return t||(p=r),!0};if(a){let r=!1,i=!1,a,o=!0,c=e=>{t.qe?Array.isArray(t.qe)?t.qe.push(e):t.qe=[t.qe,e]:t.qe=e};if(n.then(e=>{o?(s=e,r=!0):t.o?.Ce===n&&!(t.oe&64)&&m(e,c)||(u(e),d())},e=>{o?(a=e,i=!0):(l(e),d())}),o=!1,i)throw l(a),a;if(r)m(s)||(t.ve=!1);else{if(t.ve)return t.ce;throw A.initTransition(me(t)),new e(R)}}if(i&&m(n),p!==null){if(!p){if(t.ve)return t.ce;throw A.initTransition(me(t)),new e(R)}t.ve=!1}return s}function mn(e,t=!1){e.o?.ue&&tn(e),e.o?.Pe&&e.o!==null&&(e.o.Pe=!1),e.o!==null&&(e.o.Le=!1),e.h=t?0:e.h&4,e.o?._&&an(e),(e.o?.Ze||e.o?.He)&&k.Ge(e),e.o?.i&&e.C&2048&&k.We!==null&&k.We(e);let n=Fn(e);n&&n.call(e)}function hn(e,t=!1){let n=e.o?.ue;n&&(n.delete(e),n.size)?(e.o.Pe=!1,t&&(e.h=1),an(e,n.values().next().value)):mn(e,t)}function gn(n,r,i,a,o){r===2&&!(i instanceof t)&&!(i instanceof e)&&(i=new t(n,i));let s=r===1&&i instanceof e?i.source:void 0,c=s===n,l=r===1&&n.o?.Fe!==void 0&&!(n.C&8388608)&&!c,u=l&&H(n);a||(o&&he(n,o),r===1&&s?($t(n,s),n.h&1||(n.C&=~_),n.h=1|n.h&4,an(n,s,i)):(tn(n),n.h=r|(r===2?0:n.h&4),B(n)._=i),k.Ge?.(n),n.o?.i&&n.C&2048&&k.We!==null&&k.We(n));let d=a||u,f=a||l?void 0:o,p=Fn(n);if(p){if(a&&r===1)return;d?p.call(n,r,i):p.call(n);return}on(n,(t,n)=>{if(t.be=T,r===1&&n.Be!==t.Ye){xt(t),O();return}if(r===1&&s&&!t.o?.ue?.has(s)||r!==1&&(t.o?._!==i||t.o?.ue)){if(n.ze&&r!==1&&!(i instanceof e)){xt(t),O();return}d||(t.we?s&&!t.je&&(t.h&1||t._e!==b)&&A.initTransition(t.we):qe(t)),gn(t,r,i,d,f)}})}k.Ke=e=>{e.je===3?(Tt(e,bt(e)),e.Xe=!0,e.T.enqueue(2,e.$e)):kn(e)},k.en=Nt;var P=!1;function _n(e){I=e}function vn(e){L=e}function yn(e){R=e}var F=!1,I=!1,L=!1,R=null,z=null;function bn(e,t){let n=z;z=t;try{$e(e,!0)}finally{z=n}}var xn=!1,Sn=null;function Cn(e){for(;e;){if(e.nn)return!0;e=e._parent}return!1}function wn(e){xn=e,e&&!Sn&&(Sn=new Set)}function Tn(e){e.nn=!0}function En(e){e.nn=!1,Dn(e),O()}function Dn(e){let t=e.tn;for(;t;){if(t.nn){t=t.un;continue}if(t.he){let e=t;e.C&=-9,e.oe&256&&(e.oe&=-257,e.oe|=2,w.ln>e.rn&&(w.ln=e.rn),Ct(e,w))}Dn(t),t=t.un}}function On(){if(Sn){for(let e of Sn){let t=e.o;t!=null&&(t.sn=void 0),e.sp!==void 0&&(e.sp=void 0)}Sn=null}xn=!1}function kn(t,n=!1){Xe();let r=t.je,i=!!(t.oe&128),a=null;if(i?(a=k.an(t,!0),a===!1&&(i=!1)):t.C&8388608?(a=k.an(t,!0),a&&(i=!0)):E&&!n&&E.cn.length&&(a=k.an(t,!1),a&&(i=!0)),!n){if(t.we&&!r&&E!==t.we&&A.initTransition(t.we),Tt(t,bt(t)),t.o!==null&&(t.o.Ce=null,fn(t)),r===3||t.C&68157440)Nt(t);else if(t.tn!==null||t.qe!==null){jt(t);let e=B(t);e.fn=t.qe,e._n=t.tn,t.qe=null,t.tn=null,t.En=0,a&&(t.C|=g,C(a).dn[0].push(()=>{t.C&=~g,Nt(t,!1,!0)}))}}let c=!!(t.C&8388736)&&t.o?.Fe!==b&&t.o?.Fe!==void 0,l=!!(t.h&4),u=t.h&2?t.o?._:void 0,d=!!(t.h&1),f=d?t.o?.ue:void 0,p=t.o?.ue?.has(t),m=(t.oe&o)!==0,_=t.ve,v=er;er=null;let ee=R;R=t,t.Nn=null,t.Ye++,t.oe=4|t.oe&32,t.be=T;let y=t._e===b?t.ce:t._e,te=t.rn,ne=!1,re=P,ie=z;P=!0;let ae=L;L=!1,r||(z=null),a&&(z=a);let oe=r&&r!==2,S=F;oe&&(F=!0),r&&E!==null&&E.In.size&&E.In.delete(t);try{if(t.C&64)y=t.he(y),t.o!==null&&(t.o.Ce=null),t.ve=!1;else{let e=t.o?.Ce,n=t.he(y),r=typeof n==`object`&&!!n,i=t.o?.Ce!==e;y=i||!r?n:pn(t,n),!i&&!r&&(t.o!==null&&(t.o.Ce=null),t.ve=!1)}(t.h!==0||t.o!==null)&&mn(t,n&&er===null),t.C&1024&&t.o?.me&&k.Tn(t)}catch(n){let r=n instanceof e;if(r&&t.ve)rn(t,n);else{r&&z&&k.Sn(t);let e=!1;if(r&&(B(t).Pe=!0,k.On!==null&&(e=k.On(t,m))),gn(t,r?1:2,n,void 0,r?t.o?.me:void 0),r&&p&&!t.o?.Ce&&un(t),r&&f)for(let e of f)e!==t&&!t.o?.ue?.has(e)&&un(t,e);e&&k.k(t)}}finally{P=re,L=ae,oe&&(F=S),ne=(t.oe&s)!==0,t.oe=t.oe&96|(n?t.oe&256:0),R=ee}let se=er;if(er=v,t.oe&64){Jt(t),t.o!==null&&(t.o.Ce=null),z=ie;return}if(!t.o?._){let a=c?x(t.o?.Fe):i||t._e===b?t.ce:t._e,o=!1;try{o=!r&&l||!t.xe||!t.xe(a,y)}catch(e){gn(t,2,e)}if(r&&o&&(t.Xe=!t.o?._,!n)){t.T.enqueue(r,t.An??=k.Cn.bind(null,t));let e=t.pn;e!==E&&(t.pn=E,e!==null&&(e=j(e))!==E&&!e.Rn&&((e.Dn??=[]).push(t),E!==null&&(E.Dn??=[]).push(t)))}if(!t.o?._){if(o){let a=c?t.o?.Fe:void 0;n&&se===null||r&&se===null&&(E!==t.we||E===null||t.C&32768)||i?(i&&!r&&z!==null?k.Me(t,y,z):t.ce=y,i&&(t._e=b)):(t._e=y,se!==null&&(t.we!==se&&(t.we=se,se.Gn.push(t)),r&&se.In.add(t),tr(t)&&t.T.notify(t,1,1,new e(t))),_&&(t.ve=!0),t.C&256&&k.Ve!==null&&k.Ve(t,y)),t.u!==null&&(!c||i||t.o?.Fe!==a)?$e(t,i||c):c&&!i&&t.o.hn!==T&&k.ke(t,y)}else if(c)t._e===b&&qe(t),t._e=y,_&&(t.ve=!0),k.ke(t,y);else if(t.rn!=te)for(let e=t.u;e!==null;e=e.Ae)wt(e.ge,bt(e.ge))}if(!o&&!t.o?._&&(u!==void 0&&ln(t,u),f))for(let e of f)e!==t&&un(t,e);p&&!(t.h&5)&&(un(t),Le())}let ce=t.Nn;r&&(d&&!(t.h&1)||(ce===null?t.Ie!==null:ce.Ne!==null))&&Le(),!t.o?._&&t._e===b&&!(r&&t.Xe)&&(n||i||r===3?qt(t):(t.Nn?.Ne??t.Ie)&&it.push(t)),z=ie;let le=(t.C&g)!==0,ue=(t._e!==b||!le&&t.o!==null&&(t.o._n!==null||t.o.fn!==null)||!!(t.h&5))&&(!n||se!==null||!!(t.h&1));if(ue&&(!t.we||c)?qe(t):ue&&(E===null||i)&&!(t.h&5)&&(ue=!1,le||Nt(t,!1,!0)),ue?t.C|=h:t.C&=~h,t.we&&r&&E!==t.we&&se===null){let e=t.pn;vt(t.we,()=>kn(t)),t.pn=e}ne&&(xt(t),O())}function An(e){if(!(e.oe&68)){if(e.oe&1)for(let t=e.Ie;t;t=t.Ne){let n=t.Oe,r=n.De||n;if(r.he&&An(r),e.oe&2)break}(e.oe&130||e.o?._&&e.be<T&&!e.o?.Ce)&&kn(e),e.oe&=376|a}}function jn(e,t){let n=t?.transparent??!1,r=typeof t==`object`&&!!t&&`loadingValue`in t,i={id:Rt(t,n,R),C:(n?4:0)|!!t?.ownedWrite|(!R||t?.lazy?32:0)|(t?.sync?64:0)|(t?.H?2:0)|(xn&&Cn(R)?8:0),xe:t?.equals??Kn,qe:null,T:R?.T??A,Je:R?.Je??ie,En:0,he:e,ce:r?t.loadingValue:void 0,rn:0,Pn:void 0,Fn:null,Ie:null,Nn:null,Ye:0,u:null,mn:null,_parent:R,un:null,gn:null,tn:null,oe:t?.lazy?512:0,h:r?0:4,be:T,_e:b,we:null,vn:-1,ve:r,o:null};return t?.unobserved&&(B(i).Hn=t.unobserved),Ln(i,t),i}function B(e){return e.o??={Fe:void 0,Ln:void 0,hn:0,bn:b,Vn:0,me:void 0,Ze:void 0,He:void 0,kn:void 0,t:0,Ce:null,ye:null,_:void 0,Pe:void 0,ue:void 0,S:void 0,Le:!1,i:null,Hn:void 0,sn:void 0,fn:null,_n:null,Un:void 0}}function Mn(e,t,n,r,i){let a=i?.transparent??!1,o={id:Rt(i,a,R),C:(a?4:0)|!!i?.ownedWrite|(i?.sync?64:0)|(i?.yn??0)|(xn&&Cn(R)?8:0),xe:!1,qe:null,T:R?.T??A,Je:R?.Je??ie,En:0,he:e,ce:void 0,rn:0,Pn:void 0,Fn:null,Ie:null,Nn:null,Ye:0,u:null,mn:null,_parent:R,un:null,gn:null,tn:null,oe:512,h:4,be:T,_e:b,we:null,vn:-1,ve:!1,Xe:!1,xn:void 0,Qn:t,Mn:n,wn:void 0,je:r,pn:null,o:null};return i?.unobserved&&(B(o).Hn=i.unobserved),Ln(o,In),o}var Nn=null;function Pn(e){Nn=e}function Fn(e){let t=e.o?.S;return t===void 0?e.je?Nn??void 0:void 0:t}var In={lazy:!0};function Ln(e,t){e.Fn=e;let n=R?.Wn?R.qn:R;R&&Pt(R,e),n&&(e.rn=n.rn+1),k.Zn!==null&&k.Zn(e),!t?.lazy&&kn(e,!0),xn&&!t?.lazy&&!(e.h&1)&&!(e.C&2)&&(B(e).sn=e.ce===void 0?te:e.ce,e.C|=512,Sn.add(e))}function Rn(e,t,n=null){let r={xe:t?.equals??Kn,C:+!!t?.ownedWrite|(t?.H?2:0),ce:e,u:null,mn:null,be:T,De:n,Ue:n?.o?.i||null,Yn:null,_e:b,we:null,vn:-1,o:null};return t?.unobserved&&(B(r).Hn=t.unobserved),n&&Vn(n,r),xn&&!(r.C&2)&&!((n?.h??0)&1)&&(B(r).sn=e===void 0?te:e,r.C|=512,Sn.add(r)),r}var zn;function Bn(e){zn=e}function Vn(e,t){let n=t.Ue;n!==null&&(n.Yn=t),B(e).i=t,e.C|=u}function Hn(e){let t=e,n=t.De;if(!n)return;let r=t.Yn,i=t.Ue;r===null?n.o.i===t&&(n.o.i=i):r.Ue=i,i!==null&&(i.Yn=r),t.Yn=null,n.o.Un?.delete(t)}function Un(e,t,n,r,i,a=null){let o={xe:t,C:1|p,ce:e,u:null,mn:null,be:T,De:a,Ue:a?.o?.i||null,Yn:null,_e:b,we:null,vn:-1,o:null,Bn:n,Kn:r,acc:i,px:void 0,pxv:void 0};return a&&Vn(a,o),xn&&!((a?.h??0)&1)&&(B(o).sn=e===void 0?te:e,o.C|=512,Sn.add(o)),o}function Wn(e,t){let n=Rn(e,t);return B(n).Fe=b,n.C|=128,n}function Gn(e,t){let n=jn(e,t);return B(n).Fe=b,n.C|=128,n}function Kn(e,t){return e===t}function V(e,t){if(k.jn===null&&!P)return e();let n=P;P=!1;try{return k.jn===null?e():k.jn(e)}finally{P=n}}var qn=!1;function Jn(e){let t=qn;qn=!0;try{return V(e)}finally{qn=t}}function Yn(e,t){if(e.oe&512)e.oe&=-513,kn(e,!0);else if(e.oe&64){if(e.C&32){let t=e._parent;if(t!==null){if(t.oe&64){e.C&=-33;return}e.oe&32||Pt(t,e)}kn(e,!0)}}else t&&An(e)}var Xn=Symbol(`read-slow`);function Zn(e,t){let n=t.pn;(n==null||j(n)!==e)&&e.In.add(t)}function Qn(e){return E!==null&&j(e)===j(E)}function $n(e,t){let n=e.we;if(n===null||Qn(n))return!1;let r=j(n);Zn(r,t);let i=r.le.get(e);return i?i.add(t):e.h&1&&vt(r,()=>t.T.notify(t,1,1,e.o._)),!0}var er=null;function tr(e){for(let t=e.T;t!==null;t=t._parent)if(t.te&1)return!t.q;return!1}function nr(e,t=e.we){if(!t||t===E||I||e?.o?.kn||R?.o?.kn||qn)return;let n=R,r=E===null&&!A.Jn;if(!(r&&k.Xn)){if(n.oe&4&&!(n.C&128)&&(er===null||er===t)&&(r||!k.Xn&&tr(n))){er=t;return}A.initTransition(t)}}function rr(e,t,n,r){return!!(!t||z!==null&&k.$n(e,n,t)||e._e===b||t.C&16||F&&!r&&$n(e,t)||e.C&131072&&z!==null&&!L&&!(t.C&8192))}var ir=!1;function ar(){ir=!0}function or(e){return sr(e)!==b}function sr(e,t=e.ce){return A.Jn||e._e===b||e.C&4194304||e.o?.kn?b:e.we===null||e.C&16777216?t:e.o===null?b:e.o.bn}var cr=[],lr=[];function ur(e){return!A.Jn&&e.o?.hn===T&&!e.o?.kn}function H(e){let t=e.o;return t!==null&&t.Fe!==void 0&&t.Fe!==b}function dr(e){return H(e)&&!ur(e)}function fr(e){return e.oe|=s,!0}var pr=[];function mr(){if(ir=!1,cr.length!==0){for(let e of cr)e.o.bn=b;cr.length=0}if(lr.length!==0){for(let e of lr)e.C&=~v;lr.length=0}if(pr.length!==0){for(let e of pr)k.Ve(e,e._e===b?e.ce:e._e);pr.length=0}}function hr(e){if(L||I||e.he||e.De||e.o?.Fe!==void 0||e.o?.sn!==void 0||E!==null||z!==null||xn||ir&&e._e!==b)return Xn;let t=R;return t?.Wn&&(t=t.qn),t&&P&&Qt(e,t),!t||e._e===b||t.C&16||F&&$n(e,t)?e.ce:(nr(e),e._e)}function U(e){if(L)return k.et(e);let t=R;t?.Wn&&(t=t.qn);let n=e,r=e.De,i=r||e;if(I?k.nt(e,t,i,r):typeof n.he==`function`&&Yn(e,!1),!n.he&&i===e&&e.o?.Fe===void 0&&e.o?.sn===void 0&&E===null&&z===null&&!xn&&(!ir||e._e===b))return t&&P&&Qt(e,t),!t||e._e===b||t.C&16||F&&$n(e,t)?e.ce:(nr(e),e._e);if(t&&P&&(Qt(e,t,I),i.he)){let n=bt(e);i.rn>=n.ln?(Dt(t),Et(n),An(i)):t.C&65536&&An(i);let r=i.rn;r>=t.rn&&e._parent!==t&&(t.rn=r+1)}if(i.h&1){if(t&&(!F||i.h&4||i.C&2097152||i.C&1024&&k.tt(i)||!$n(i,t))){if(z===null||k.it(i))throw!P&&!qn&&e!==t&&Qt(e,t),i.o?._}else if(!t&&i.h&4&&!(H(e)&&e.C&8388608))throw i.o?._}if(i.he&&i.h&2){if(P&&!I&&i.be<T)return kn(i),U(e);throw i.o?._}if(xn&&t&&t.C&8){let n=e.o?.sn;if(n!==void 0){let r=n===te?void 0:n;return(e._e===b?e.ce:e._e)!==r&&(t.oe|=256),r}}let a=gr(e,t,i,e.ce);return!t&&i===e&&typeof n.he==`function`&&e.C&32&&!(i.h&1)&&!e.u&&!dr(e)&&(Xt.add(e),O()),a}function gr(t,n,r,i){if(H(t)){if(!(n&&n.C&8192)&&!ur(t))return n&&t.C&525312?k.ut(t,n):x(t.o?.Fe);t.C|=d}if(z!==null&&E!==null&&n!==null&&k.lt(t,r,n))return i;let a=t._e!==b&&!!(t.h&4);if(a&&(!n||qn))throw new e(null);let o=n&&ir?sr(t,i):b;if(o!==b)return fr(n),I&&k.rt(t,o),o;let s=rr(t,n,r,a)?i:(nr(t),t._e);return I&&k.rt(t,s),s}function _r(e){if(A.Jn)return;let t=B(e);t.bn===b&&(t.bn=e._e,cr.push(e),ir=!0)}function vr(e){A.Jn||e.C&4194304||(e.C|=v,lr.push(e))}function yr(e,t){e.C&2||e.he!==void 0||e.De||e.o?.sn!==void 0||(B(e).sn=t===void 0?te:t,e.C|=512,Sn.add(e))}function W(e,t){if(e.we&&E!==e.we&&(A.Jn?A.initTransition(e.we):(Ve.push(e.we),O())),e.C&128){if(!D)return k.ot(e,t);let n=e.o?.Fe;if(n!==void 0&&n!==b)return k.st(e,t)}let n=e._e===b?e.ce:e._e;if(typeof t==`function`&&(t=t(n)),!(e.h&4||!e.xe||!e.xe(n,t)))return t;xn&&yr(e,n);let r=e._e!==b;return r?e.we!==null&&_r(e):qe(e),e._e=t,R!==null&&vr(e),e.C&256&&k.Ve!==null&&(k.Ve(e,t),A.Jn||pr.push(e)),e.he!==void 0&&(e.be=T),r&&e.vn===Ye&&z===null?t:($e(e),O(),t)}function br(e){Tt(e,bt(e)),!(e.oe&1024)&&e._e===b&&(qe(e),O()),e.oe=e.oe&-4|a,e.ct=T}function xr(e){return e.we!==null&&E!==e.we&&!((e.De||e).oe&1024)}function Sr(e){e.oe|=2,xt(e)}function Cr(e,t){let n=xr(e);n&&typeof t==`function`&&(t=t(e.ce));let r=W(e,t);return n?Sr(e):br(e),r}function wr(e,t){let n=R,r=P;R=e,P=!1;try{return t()}finally{R=n,P=r}}function Tr(e,t=!0){let n=F;F=t;try{return e()}finally{F=n}}function Er(e,t=N()){if(!t)throw new r;let n=t.Je[e.id];if(n===void 0&&(n=e.defaultValue),n===void 0)throw new i;return n}function Dr(e,t,n=N()){if(!n)throw new r;n.Je={...n.Je,[e.id]:t===void 0?e.defaultValue:t}}function Or(e,t){let n=e.o?.Fe!==b,r=n?x(e.o?.Fe):e.ce;if(typeof t==`function`&&(t=t(r)),!(e.h&4||(e.oe??0)&3||!e.xe||!e.xe(r,t))){if(n){let t=me(e);t&&E!==t&&A.initTransition(t),Ze>e.o.Vn&&(e.o.Vn=Ze)}return t}if(n){let t=me(e);t&&A.initTransition(t)}else A.m.cn.push(e);B(e).Ln=E,B(e).hn=T,B(e).Vn=Ze;let i=se(e);return B(e).me=i,e.C=(e.C|c)&-8912897,B(e).Fe=t===void 0?ne:t,(e.o?.Ze!==void 0||e.o?.He!==void 0)&&k.Ve!==null&&k.Ve(e,t),e.he!==void 0&&(e.be=T),$e(e,!0),O(),t}function kr(e,t,n){if(n=C(n),!n.we&&!E&&n.ni.o?.kn!==void 0){e.ce=t;return}H(e)||(n.we?j(n.we):A.m).cn.push(e),e.C=(e.C|y)&~m,e.o.Fe=t===void 0?ne:t}function Ar(t){for(let n=0;n<t.cn.length;n++){let r=t.cn[n];if(!(r.C&8388608)&&r.o?.kn===void 0&&H(r)&&`h`in r&&r.h&1&&r.o?._ instanceof e)return!0}return!1}function jr(e){let t=e.length;for(let n=0;n<t;n++){let t=e[n];t.o!==null&&(t.o.me=void 0),t.h&1||(t.h&=-5);let r=t.o?.Fe,i=t.C&y;B(t).Fe=i&&!(t.C&128)?void 0:b;let a=(t.C&m)!==0;t.C&=-8912897,!a&&r!==b&&t.ce!==x(r)&&(i?t.ce=x(r):$e(t,!0)),t.we=null,t.o!==null&&(t.o.Ln=null)}for(let n=0;n<t;n++){let t=e[n];(t.o?.Ze||t.o?.He)&&k.ri(t);let r=t.o?.kn;r&&(r.o?.Ze===t||r.o?.He===t)&&k.ri(r)}e.splice(0,t)}function Mr(e,t){if(e.xe&&e.xe(t,x(e.o.Fe))){if(!(e.C&524288)){e.C&16384&&k.zn?.(e);return}e.C&=~m}else{if(Ze&&Ze<e.o.Vn)return;e.C|=m;let t=e.o?.me;if(t){let n=C(t),r=[e];for(;r.length;){let e=r.pop(),t=e.o?.me;if(t&&C(t)===n){e.o.me=void 0,n.Qe.delete(e);for(let t=e.u;t!==null;t=t.Ae)r.push(t.ge)}}}}$e(e)}function Nr(e){if(!e.Te||e.pe.length||!e.cn.length||e.ti.size||Ar(e))return!1;for(let t of e.le.keys())if(mt(e,t,e)&&t.o?.ue?.has(t)&&!pe(t))return!1;let t=!1;for(let n of e.cn){if(!H(n)||n.o.kn||n.C&8912896||n.h&4)continue;let e=n._e===b?n.ce:n._e;(!n.xe||!n.xe(e,x(n.o.Fe)))&&(Mr(n,e),n.C&524288&&(t=!0))}return t}function Pr(t,n){if(F&&ue(t,n)){if(t.h&4)throw new e(t);return t.ce}if(!(t.C&524288))return x(t.o?.Fe);let r=me(t);return z===null?F&&r&&E!==r?x(t.o?.Fe):(nr(t,r),t._e===b?t.ce:t._e):((r??A.m).In.add(n),x(t.o?.Fe))}function Fr(e,t){if(!(e.C&128)){let n=z;if(n===null){if(!H(e))return W(e,t)}else return(!e.xe||!e.xe(H(e)?x(e.o.Fe):e.ce,t))&&(he(e,n),kr(e,t,n),$e(e,!0),O()),t}let n=e._e===b?e.ce:e._e;return typeof t==`function`&&(t=t(n)),e._e===b&&qe(e),e._e=t,k.Ve?.(e,t),Mr(e,t),O(),t}function Ir(e,t){for(let n=0;n<e.length;n++)e[n](t|4)}function Lr(e){for(let t of S){if(t.ei||le(t))continue;let n=t.dn[e-1];n.length&&(t.dn[e-1]=[],Ir(n,e))}e===1&&k.ui?.()}function Rr(e){for(let t of S)(e?t.we===e:!t.we)&&(t.ei||(t.dn[0].length&&Ir(t.dn[0],1),t.dn[1].length&&Ir(t.dn[1],2)),t.ni.o?.me===t&&t.ni.o!==null&&(t.ni.o.me=void 0),t.Qe.clear(),t.dn[0].length=0,t.dn[1].length=0,S.delete(t),oe.delete(t.ni))}function zr(e){if(e.h&4)return!0;let t=e.o?.me;return t?C(t)===C(z)&&(!H(e)||!!(e.C&8388608)):!1}function Br(e){return pe(e)!==void 0}function Vr(e,t,n){return L||e._e===b||e.he||t!==e&&!(t.oe&1024)?!1:(E.In.add(n),!0)}function Hr(e,t,n){return e.o?.Fe!==void 0||e.o?.me||t.h&1?(e._e!==b&&e._e!==e.ce&&(E??A.m).In.add(n),!0):t===e&&F&&n.o?.kn!==e?(e._e!==b&&(E??A.m).In.add(n),!0):!1}function Ur(e,t){if(t){let t=pe(e);return t?!A.Jn&&!E&&!t.we&&t.ni.o?.kn!==void 0&&e.o?.Fe===void 0?(e.o!==null&&(e.o.me=void 0),!1):t:null}for(let t=e.Ie;t;t=t.Ne){let n=t.Oe;if(n.oe&128){let t=pe(n);if(t)return e.oe|=128,he(e,t),t}}return null}function Wr(e){let t=C(z);t.ni!==e&&(t.Qe.add(e),B(e).me=t,e.C|=c)}function Gr(e){let t=pe(e);t&&t.Qe.delete(e)}function Kr(e){A.m.ti.add(e),O()}function qr(){k.ot===null&&(k.ot=Or,k.oi=jr,k.ai=Ar,k.li=Rr,k.si=Lr,k.ke=Mr,k.Ei=Nr,k.ut=Pr,k.Me=kr,k.st=Fr,k.lt=Vr,k.it=zr,k.tt=Br,k.$n=Hr,k.an=Ur,k.Sn=Wr,k.Tn=Gr,k.fi=Kr)}qr();var Jr=null,Yr=new Map;function Xr(e){let t=e.De;t&&(t.C|=l,(B(t).Un??=new Set).add(e))}function Zr(e){let t=e.o?.Ze;return t||(t=Wn(!1,{ownedWrite:!0}),B(e).Ze=t,e.C|=256,Xr(e),B(t).kn=e,oi(e)&&Qr(e,t,!0),$r(e)),t}function Qr(e,t,n){let r=e.we;r?yt(r,()=>W(t,n)):W(t,n)}function $r(e){or(e)&&pr.push(e)}function ei(e){return or(e)?e.we===null||e.C&16777216?b:e.o.bn:e._e}function ti(e){if(!Jr)return;Jr.sources.add(e);let t=e.De||e;t!==e&&Jr.sources.add(t)}function ni(e){Jr?.sources.add(e)}function ri(e,t){if(e.o?.t)return!0;if(e.h&2||t.has(e))return!1;t.add(e);let n=e.De;if(n&&ri(n,t))return!0;let r=e,i=r.oe&4?r.Nn:void 0;if(i!==null)for(let e=r.Ie??null;e!==null;e=e.Ne){if(!e.ze&&ri(e.Oe,t))return!0;if(e===i)break}return!1}function ii(e){if(e.o?.ue){for(let t of e.o.ue)if(!t.o?.Le)return!1;return!0}return e.o?.Le??!1}function ai(e){return!!(e.h&1)&&!(e.h&4)&&!ii(e)}function oi(e){let t=e;if(t.oe&64)return!1;if(ct!==0&&ri(e,new Set))return!0;let n=e.De;if(e.o?.kn){let t=e.o?.kn;return ai(t.De||t)}let r=ei(e);if(n&&r!==b&&!H(e))return!!(n.oe&1024)||!n.o?.Ce&&!(n.h&1)||!!(n.h&1)&&ii(n);if(e.C&524288&&e._e===b&&dr(e))return!e.xe||!e.xe(e.ce,x(e.o?.Fe));if(r!==b&&!t.ve){if(dr(e))return!e.xe||!e.xe(r,x(e.o?.Fe));if(!(t.h&4)&&!t.o?.Le&&(!e.xe||!e.xe(e.ce,r)))return!0}return ai(t)}function si(e,t){e.o?.Ze&&ci(e),e.o?.He&&W(e.o?.He,t)}function ci(e){e.o?.Ze&&W(e.o?.Ze,oi(e)),e.o?.He&&ci(e.o?.He)}function li(e){let t=e.o?.Un;if(t!==void 0)for(let e of t)ci(e)}function ui(e,t=!1){let n=t?fi:ci,r=new Set,i=e=>{if(!r.has(e)){r.add(e),(e.o?.Ze||e.o?.He)&&n(e);for(let t=e.u;t!==null;t=t.Ae)i(t.ge);for(let t=e.o?.i??null;t!==null;t=t.Ue)i(t)}};i(e)}function di(e){if(Yr.size===0)return;let t=!1;for(let[n,r]of Yr){let i=n.we,a=i?j(i):null;if(!a){Yr.delete(n);continue}if(a!==e)continue;Yr.delete(n);let o=n.o?.Ze?.o?.me;for(let e of r)e.oe&64||(e.oe|=128,o?he(e,o):e.o!==null&&(e.o.me=void 0),xt(e),t=!0)}t&&O()}function fi(e){Yr.size!==0&&Yr.delete(e);let t=e.o?.Ze;if(t&&(t.o?.Fe===void 0||t.o?.Fe===b)){let n=oi(e);(t.ce!==n||t._e!==b)&&(t.ce=n,t._e=b,$e(t),O())}let n=e.o?.He;if(n&&!(n.oe&64)){if(e.De?.oe&64){Mt(n);return}(n.o?.Fe===void 0||n.o?.Fe===b)&&n._e===b&&!Object.is(n.ce,e.ce)&&!(n.oe&3)&&(n.oe|=2,Ct(n,bt(n)),$e(n),O()),fi(n)}}function pi(e){let t=e.o?.He;if(t&&t.oe&64&&(t=void 0),!t){let n=L;vn(!1);let r=I;_n(!1);let i=R;yn(null),k.Xn=!0;try{t=Gn(()=>U(e),{ownedWrite:!0})}finally{k.Xn=!1}B(e).He=t,e.C|=256,Xr(e),B(t).kn=e;let a=ei(e);a!==b&&!H(e)&&Qr(e,t,a),$r(e),yn(i),_n(r),vn(n)}return t}function mi(e){return!!((e.De||e).h&4)&&!H(e)}function hi(t){if(t.De?.oe&64)return t.ce;let n=pi(t),r=L;vn(!1);let i=dr(t)?x(t.o?.Fe):t.ce,a=sr(t);if(a!==b){R!==null&&R.oe&4&&fr(R);try{U(n)}catch{}finally{vn(r)}return t.we===null?i:a}let o;try{o=U(n)}catch(n){if(n instanceof e&&!mi(t))return i;throw n}finally{vn(r)}if(n.h&1){if(mi(t))throw new e(t);return i}return F&&R!==null&&ue(n,R)?t.ce:n._e!==b&&!H(n)&&!(F&&n.we&&E!==n.we)?n._e:o}function gi(e){if(typeof e.he!=`function`)return!1;let t=e.o?.kn;return t!==void 0&&!((t.De||t).h&4)}function _i(e,t,n,r){if(_n(!1),typeof e.he==`function`){k.Xn=!0;try{Yn(e,!0)}finally{k.Xn=!1}}let i=n.h;if(t&&i&1&&i&4&&!gi(n))throw P&&e!==t&&Qt(e,t),_n(!0),n.o?._;ti(e),r&&ti(r),_n(!0)}function vi(e){let t=e.we,n=t?j(t):E;if(!n||n.Rn)return!1;if(n.pe.length&&!e.he)return!0;for(let[e,t]of n.le)if(t.size&&e.h&1&&e.o?._?.source===e)return!0;return!1}function yi(e,t){if(Jr!==null&&e._e!==b&&t===e._e){if(vi(e))return;Jr.freshReads.add(e)}}function bi(e,t){let n=!!(e.h&1),r=t&&!(n&&!e.o?.Le),i=n&&(e.o?.Le??!1)!==r;return r?B(e).Le=!0:e.o!==null&&(e.o.Le=!1),i}function xi(e){let t=L;vn(!0);try{return e()}finally{vn(t)}}function Si(t){let n=I,r=Jr;_n(!0);let i=Jr={found:!1,sources:new Set,freshReads:new Set,suppressed:[]},a=()=>{_n(!1);let e=L;vn(!1);try{i.sources.forEach(e=>{U(Zr(e))&&(i.freshReads.has(e)?i.suppressed.push(e):i.found=!0)})}finally{vn(e),_n(!0)}if(P&&!i.found&&i.suppressed.length&&R&&typeof R.he==`function`)for(let e of i.suppressed){let t=Yr.get(e);t||Yr.set(e,t=new Set),t.add(R)}};try{return t(),a(),i.found}catch(t){if(a(),t instanceof e){let e=!!(t.source?.h&4);if(i.found&&!e)return!0;if(R&&e)throw t}return i.found}finally{_n(n),Jr=r}}k.Ve=si,k.Ge=ci,k.We=li,k.ri=fi,k.et=hi,k.nt=_i,k.rt=yi,k.On=bi,k.k=ui,k.Et=ni,k.Nt=di;function Ci(e,t,n,r){let i=Mn(e,t,n,r?.user?2:1,r);kn(i,!0),!r?.defer&&i._e===b&&(i.je===2||r?.schedule?i.T.enqueue(i.je,Ti.bind(null,i)):Ti(i,4))}function wi(e,t){let r=e===void 0?this.h:e,i=t===void 0?this.o?._:t;if(r&2){if(this.T.notify(this,1,0),this.je===2){this.h&2&&(this.Xe=!0,this.T.enqueue(this.je,this.An??=Ti.bind(null,this)));return}if(!this.T.notify(this,2,2))throw Ue(n(i)),i}else this.je===1&&this.T.notify(this,3,r,i)}function Ti(e,r){if(!e.Xe||e.oe&64)return;if(e.pn!==null&&!j(e.pn).Rn&&(r&4?!e.o?.me:E!==null)){e.T.enqueue(e.je,e.An);return}if(e.h&2&&e.je===2){let t=n(e.o?._);e.xn=e.ce,e.Xe=!1;try{e.Mn?e.Mn(t,()=>{let t=e.wn;e.wn=void 0,t?.()}):console.error(t)}catch(t){if(!e.T.notify(e,2,2))throw Ue(t),t}return}let i=e.o?._==null,a=e.wn;e.wn=void 0;try{a?.(),e.wn=e.Qn(e.ce,e.xn)}catch(n){if(B(e)._=new t(e,n),e.h|=2,!e.T.notify(e,2,2))throw Ue(n),n}finally{e.xn=e.ce,e.Xe=!1,i&&qt(e)}}k.Cn=Ti;function Ei(e,t){let n=()=>{if(!(!r.Xe||r.oe&64))try{r.Xe=!1,kn(r)}finally{}},r=jn(()=>{let t=r.wn;r.wn=void 0,t?.();let n=Tr(e);r.wn=n},{...t,lazy:!0});r.wn=void 0,r.C=r.C&-33|16,r.Xe=!0,r.je=3,r.$e=n,xt(r),O()}Pn(wi);var Di=new WeakSet;function Oi(e){for(let t=e;t;t=t._parent){let e=t[He];if(e!==void 0)return e}}function ki(e){let t=[];for(let n=e;n;n=n._parent){let e=n._name;typeof e==`string`&&e.length&&t.push(e)}return t.length?t.reverse():void 0}function Ai(e,t,n){if(e!==null&&(typeof e==`object`||typeof e==`function`)){if(Di.has(e))return;Di.add(e)}let r=Oi(t);if(r===void 0)return;let i={},a=ki(t),o=ki(n)??a;o!==void 0&&(i.ownerPath=o),a!==void 0&&(i.boundaryPath=a);try{r(e,i)}catch(e){console.error(e)}}function ji(e){return Vt(e)}function Mi(e){let t=U.bind(null,e);return t[ae]=e,t}function Ni(e,t){if(typeof e==`function`){let n=jn(e,t);return n.C&=-33,[Mi(n),Cr.bind(null,n)]}let n=Rn(e,t);return[Mi(n),W.bind(null,n)]}function G(e,t){return Mi(jn(e,t))}function Pi(e,t,n){Ci(e,t.effect||t,t.error,{user:!0,...n})}function Fi(e,t,n){Ci(e,t,void 0,n)}function Ii(e){let t=N();t&&!(t.C&16)?Ei(()=>V(e),void 0):A.enqueue(2,function t(){if(w.EE>=w.ln)return A.enqueue(2,t);e()})}var Li=Symbol(0),Ri=new WeakMap;function zi(e){return e[Li]!==void 0}function Bi(e,t){let n=e[Li];return n!==void 0&&n.fam===t?n:(t?.map??Ri).get(e)}var Vi=null;function Hi(e){let t=e;for(;t&&!t.d;)t.d=!0,t=t.u}var Ui=Symbol(0),K=Symbol(0),q=Symbol(0),Wi=Symbol(0),Gi=Symbol(0),Ki=new WeakSet,qi=!1;function Ji(e){return qi&&Ki.has(e)}function Yi(e){if($i(e)){if(e[K]!==void 0)return;qi=!0,Ki.add(e)}}function Xi(e){if(Array.isArray(e))for(let t=0,n=e.length;t<n;t++)Yi(e[t]);else for(let t in e)Yi(e[t])}var Zi=Object.prototype,Qi=new WeakMap;function $i(e){if(typeof e!=`object`||!e||Object.isFrozen(e))return!1;let t=Object.getPrototypeOf(e);if(t===Zi||t===null||Array.isArray(e))return!0;let n=Qi.get(t);return n===void 0&&(n=Object.prototype.toString.call(e)===`[object Object]`&&(typeof Node>`u`||!(e instanceof Node)),Qi.set(t,n)),n}var ea=!1;function ta(e){ea=e}function na(){return ea}function ra(e){return Reflect.ownKeys(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function ia(e,t,n){for(let[r,i]of aa)r.o?.t&&i.scope.has(t)&&(i.key===void 0||i.key===n)&&(k.M(e),i.inherited.push(e))}var aa=new Map;function oa(){return aa.size>0}function sa(e,t){let n=e.n?.[Gi];if(n?.o?.t&&k.Et(n),aa.size){let r=e.v;for(let[e,i]of aa)if(e!==n&&e.o?.t&&(i.key===void 0||i.key===t)){let t=r;for(;;){if(i.scope.has(t)){k.Et(e);break}let n=t?.[K];if(n===void 0)break;let r=n.pb??n.v;if(r===t)break;t=r}}}}function ca(){this.v=void 0,this.ch=void 0,this.pb=void 0,this.n=void 0,this.h=void 0,this.k=void 0,this.dk=void 0,this.u=void 0,this.pk=void 0,this.px=void 0,this.d=void 0,this.a=void 0,this.sc=void 0,this.kc=void 0,this.nc=void 0,this.ab=void 0,this.fam=void 0,this.s=void 0,this.ovl=void 0,this.del=void 0,this.wk=void 0,this.hv=void 0,this.ht=void 0}ca.prototype=Object.prototype;function la(e,t,n,r=t?.fam??null){let i=Array.isArray(e)?[]:new ca;return i.v=e,i.ch=e[K]!==void 0,i.pb=null,i.n=null,i.h=null,i.k=null,i.dk=null,i.wk=null,i.u=t,i.pk=n,i.px=null,i.d=!1,i.a=!1,i.sc=0,i.kc=0,i.nc=0,i.ab=null,i.fam=r,i.s=!1,i.ovl=!1,i.del=null,i.hv=null,i.ht=null,i.px=new Proxy(i,Lo),i[q]=i.px,(r?.map??Ri).set(e,i),i}function ua(e,t=null,n=null,r=t?.fam??null){if(qi&&Ji(e))return e;let i=Bi(e,r);if(i!==void 0)return i.px;let a=e[K];return a!==void 0&&a.px===e&&(r===null||a.fam===r)?e:la(e,t,n,r).px}function da(e){if(typeof e!=`object`||!e)return e;let t=e[K];return t!==void 0&&t.px===e&&t.v!==void 0?(t.ovl&&La(t),t.pb??t.v):e}var fa=function(e,t){return Kn(e,t)||Sa(this.Bn,e,t)};Bn(e=>{if(e.o?.t)return;if(H(e)||e._e!==b)return Oe(e);let t=e.Bn,n=e.Kn;t.n&&t.n[n]===e&&(delete t.n[n],t.nc--,Hn(e))});function pa(e,t,n,r=-1){let i=e.n??=Object.create(null),a=i[t];if(a===void 0){let o=ga(e),s=ma(e);s!==null&&!ya(e,t)&&(s=null),s===null?(s=o)!==null&&(n=e.v[t]):n=e.hv[t];let c=a=Un(n,fa,e,t,r===-1?Oo(e.pb??e.v,t):r===1,e.fam?.node??void 0);e.fam?.opt&&(B(c).Fe=b,c.C|=128),t!==Gi&&oa()&&ia(c,e.v,t),s!==null&&xa(c,o===null?e.v[t]:e.del!==null&&e.del.has(t)?void 0:e.pb[t],s),i[t]=a,e.nc++,Hi(e)}return a}function ma(e){if(e.ht===null||e.ht===za||Va(e)===null)return null;let t=j(e.ht);return t.Rn===!1?t:null}function ha(e){if(e.pb===null)return null;let t=Ka.get(e);if(t===void 0)return null;let n=j(t);return n.Rn===!1?n:null}function ga(e){return e.ch||e.fam?.opt===!0||J(e)?null:ha(e)}function _a(e,t){return e===null||Qn(e)?!0:F?(Zn(e,t),!1):(nr(null,e),!0)}var va=new WeakMap;function ya(e,t){let n=va.get(e);return Array.isArray(n)&&va.set(e,n=ba(e,n[0])),n===Ua||n.has(t)}function ba(e,t){let n=e.hv;if(t[K]!==void 0||e.fam?.opt===!0||n[K]!==void 0||Object.getPrototypeOf(n)!==Object.getPrototypeOf(t)||!Wa(t))return Ua;let r=new Set;for(let i of Reflect.ownKeys(n))(!Y.call(t,i)||Oo(n,i)||Oo(t,i)||Do.call(n,i)!==Do.call(t,i)||!(Kn(n[i],t[i])||Sa(e,n[i],t[i])))&&r.add(i);for(let e of Reflect.ownKeys(t))Y.call(n,e)||r.add(e);return r}function xa(e,t,n){fa.call(e,e.ce,t)||(e._e=t,e.we=n,n.Gn.push(e))}function Sa(e,t,n){if(typeof t!=`object`||!t||typeof n!=`object`||!n)return!1;let r=Bi(t,e.fam);return r!==void 0&&r===Bi(n,e.fam)}function Ca(e,t,n){let r=e.h??=Object.create(null),i=r[t];if(i===void 0){let a=i=Rn(n,{equals:Kn,unobserved(){if(!a.o?.t){if(H(a)||a._e!==b)return Oe(a);e.h&&e.h[t]===a&&(delete e.h[t],Hn(a))}}},e.fam?.node??void 0);a.C|=1,e.fam?.opt&&(B(a).Fe=b,a.C|=128),oa()&&ia(a,e.v,t),r[t]=i,Hi(e)}return i}function wa(e,t){let n=e.k;if(n===null)return!1;let r=n.mn;return r!==null&&r.ge===t&&(!(t.oe&4)||r.Be===t.Ye)}function Ta(e){let t=e.k;if(t===null){let n=t=Rn(0,{equals:!1,unobserved(){e.k===n&&(e.k=null,Hn(n))}},e.fam?.node??void 0);n.C|=1,e.fam?.opt&&(B(n).Fe=b,n.C|=128),e.k=t,Hi(e)}return t}function Ea(e){e.dk!==null&&W(e.dk,1)}var Da=new Map,Oa=!1;function ka(e,t){if(t.sc||Ma(t),t.sc===2){let n={...e};return n[Li]=t,n}let n=Object.getOwnPropertyDescriptors(e);for(let r of Reflect.ownKeys(n)){let i=n[r];r===`length`&&Array.isArray(e)||(i.configurable=!0,!i.get&&!i.set?i.writable=!0:t.a=!0)}let r=Array.isArray(e)?Object.defineProperties([],n):Object.create(Object.getPrototypeOf(e),n);return r[Li]=t,r}function Aa(e,t){let n=Object.create(null);for(let t of Reflect.ownKeys(e))n[t]=e[t];return Object.setPrototypeOf(n,Object.prototype),n[Li]=t,n}function ja(e,t,n){let r=Object.getOwnPropertyDescriptor(t,n);r.get||r.set||!r.enumerable||!r.writable||!r.configurable?Object.defineProperty(e,n,r):e[n]=r.value}function Ma(e){let t=e.v,n=Reflect.ownKeys(t),r=Object.getPrototypeOf(t)===Object.prototype;for(let i of n){if(To.call(t,i)!==void 0||Eo.call(t,i)!==void 0){e.a=!0,r=!1;break}r&&!Do.call(t,i)&&(r=!1)}return e.sc=r?2:1,e.kc=n.length,!e.a}var Na=32,Pa=1024,Fa=16;function Ia(e,t){if(e.kc>Pa)return!1;if(e.del!==null&&e.del.size!==0)return!0;let n=e.wk;if(n!==null&&n!==Ua&&n.size<=Fa)return!1;let r=e.v,i=0;for(let e of Reflect.ownKeys(t))if(!Y.call(r,e)&&++i>Fa)return!0;return!1}function La(e){let t=e.pb;if(!e.ovl)return t;let n=e.sc===2?Aa(e.v,e):ka(e.v,e);if(e.del!==null){for(let t of e.del)delete n[t];e.kc-=e.del.size,e.del=null}for(let r of Reflect.ownKeys(t))e.sc===2?n[r]=t[r]:ja(n,t,r);return e.pb=n,e.ovl=!1,n}function Ra(e){let t=e.pb;if(t!==null&&!Ja.has(t)&&e.fam?.opt===!0&&!D&&!na()&&Ka.has(e)&&(qa.set(e,t),t=e.pb=null),E!==null&&Ka.set(e,E),t===null){let n=e.v;if(!e.fam?.opt&&!e.ch&&!Array.isArray(n)&&(e.sc===0?Ma(e):!e.a)&&e.kc>Na&&zi(n)?(t=e.pb=Object.create(n),e.ovl=!0):t=e.pb=ka(n,e),e.fam?.opt&&!D&&!na()){Ja.add(t);let n=e.n;if(n!==null)for(let e of Reflect.ownKeys(n)){let r=n[e];H(r)&&(t[e]=x(r.o?.Fe))}let r=e.h;if(r!==null)for(let e of Reflect.ownKeys(r)){let n=r[e];H(n)&&!x(n.o?.Fe)&&delete t[e]}}Ga(e)}return t}var za=Symbol(`plainHold`),Ba=!1;function Va(e){let t=e.ht;return t===null?null:t!==za&&j(t)?.Rn===!0?e.ht=e.hv=null:e.hv}function Ha(e,t,n=!1){n||(Ga(e),e.pb===null?e.ab??=Da.get(e):(e.ovl&&La(e),e.ab=e.pb)),na()?e.ht=e.hv=null:(E!==null||!n&&Ba)&&(Va(e)===null&&(e.hv=e.v),e.ht=E??za,!n&&E!==null&&_o.add(e),va.set(e,[t])),e.pb=null,e.ovl=!1,e.del=null,e.sc=0,e.a=!1,e.wk=null,e.v=t,e.ch=t[K]!==void 0;let r=t[Li];r!==void 0&&r.fam===e.fam?t[Li]=e:(e.fam?.map??Ri).set(t,e)}var Ua=new Set,Wa=e=>{let t=Object.getPrototypeOf(e);return t===Object.prototype||t===Array.prototype||t===null};function Ga(e){Da.has(e)||(Oa||(Oa=!0,nt($a)),O(),Da.set(e,e.v))}var Ka=new WeakMap,qa=new WeakMap,Ja=new WeakSet;function Ya(e){return e.pb===null||!Ja.has(e.pb)}function Xa(e){if(zi(e.v))return;let t=e.v;if(e.v=ka(t,e),e.ch=!1,e.u){Xa(e.u),e.u.v;let n=e.u.v,r=Za(e,t);n[r]===t&&(n[r]=e.v)}}function Za(e,t){let n=e.pk,r=e.u.v;if(r[n]===t||!Array.isArray(r))return n;let i=r.indexOf(t);return i===-1?n:(e.pk=i,i)}function Qa(e,t){Xa(e);let n=e.v;for(let r of Reflect.ownKeys(t))e.sc===2?n[r]=t[r]:ja(n,t,r);if(e.del!==null){for(let t of e.del)delete n[t];e.kc-=e.del.size,e.del=null}e.pb=null,e.ovl=!1,e.wk=null}function $a(){if(Da.size===0)return;let e=[...Da];Da.clear();for(let[t,n]of e){if(t.ht===za&&(t.ht=t.hv=null),t.pb!==null){let e=Ka.get(t);if(e!==void 0){if(j(e).Rn===!1){Da.set(t,n);continue}Ka.delete(t)}let r=!1,i=t.pb,a=t.n;if(a!==null){let e=t.wk,n=e===null||e===Ua||t.a===!0||!Wa(t.ovl?t.v:i)?Reflect.ownKeys(a):e;for(let e of n){let t=a[e];if(t!==void 0&&t._e!==b){r=!0;break}}}if(r){Da.set(t,n);continue}if(t.ovl&&(t.v!==n||!Ia(t,i)))Qa(t,i);else if(t.v!==n){Xa(t);let e=t.v,r=t.wk;if(r!==null&&r!==Ua)for(let t of r)Y.call(i,t)?ja(e,i,t):delete e[t];else{for(let t of Reflect.ownKeys(i)){let r=Object.getOwnPropertyDescriptor(i,t);r.get||r.set||!r.enumerable||!r.writable||!r.configurable?Object.defineProperty(e,t,r):(r.value!==n[t]||!Y.call(n,t))&&(e[t]=r.value)}for(let t of Reflect.ownKeys(n))Y.call(i,t)||delete e[t]}t.pb=null,t.wk=null}else t.v=t.ovl?La(t):i,t.ch=!1,t.pb=null,t.wk=null}let e=t.ab;if(t.ab=null,t.v!==n&&t.u){let e=Za(t,n);t.u.v[e]===n&&(Xa(t.u),t.u.v,t.u.v[e]=t.v)}e!==null&&e!==t.v&&lo(t,e,t.v)}}function eo(e){let t=e.pb;if(t===null)return;if(e.fam?.opt){if(!D&&!na()){Vi.notifyOptimisticWrites(e,t);return}if(!D){je(!0);try{eo(e)}finally{je(!1)}return}}let n=e.v,r=e.n,i=e.wk,a=i===Ua||e.a===!0||!Wa(e.ovl?e.v:t)?null:i;if(r!==null){let i=a??Reflect.ownKeys(r);for(let a of i){let i=r[a];if(i===void 0)continue;if(i.acc===!0||Y.call(t,a)&&To.call(t,a)!==void 0){i.acc=Oo(t,a);let e=Object.getOwnPropertyDescriptor(n,a),r=Object.getOwnPropertyDescriptor(t,a);if(e&&(e.get||e.set)||r&&(r.get||r.set)){(e?.get!==r?.get||e?.set!==r?.set||e?.value!==r?.value)&&W(i,()=>to);continue}Kn(e?.value,r?.value)||W(i,()=>r?.value);continue}let o=e.del!==null&&e.del.has(a)?void 0:t[a];Ro!==null&&i.De===Ro&&xr(i)&&(zo=!0),W(i,()=>o)}}let o=e.h;if(o!==null){let n=a??Reflect.ownKeys(o);for(let r of n){let n=o[r];n!==void 0&&W(n,r in t&&!(e.del!==null&&e.del.has(r)))}}if(e.dk!==null){if(e.del!==null&&e.del.size!==0)Ea(e);else for(let r of a??Reflect.ownKeys(t)){if(r===Li)continue;let i=t[r],a=n[r];if(typeof i==`object`&&i?!no(a,i):!Kn(a,i)){Ea(e);break}}}if(e.k!==null){let r;if(e.ovl){if(r=e.del!==null&&e.del.size!==0,!r){for(let e of Reflect.ownKeys(t))if(!Y.call(n,e)){r=!0;break}}}else r=Array.isArray(t)&&Array.isArray(n)?ro(n,t):io(n,t);r&&W(e.k,e=>e+1)}if(e.fam!==null&&e.pb!==null&&na()&&E===null){if(e.ht!==null&&(e.ht=e.hv=null),e.ovl){if(!Ia(e,t))return Qa(e,t);t=La(e)}let n=e.v;if(e.pb=null,e.v=t,e.ch=!1,e.u){let r=Za(e,n);e.u.v[r]===n&&(Xa(e.u),e.u.v,e.u.v[r]=t)}}}var to=Symbol();function no(e,t){if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;let n=Bi(e,null);return n!==void 0&&n===Bi(t,null)}function ro(e,t){if(e.length!==t.length)return!0;for(let n=0;n<t.length;n++){let r=e[n],i=t[n];if(!Kn(r,i)&&!no(r,i))return!0}return!1}function io(e,t){let n=Reflect.ownKeys(t);if(Reflect.ownKeys(e).length-+zi(e)!=n.length-+zi(t))return!0;for(let t of n)if(t!==Li&&!(t in e))return!0;return!1}function ao(e,t,n,r,i=!0){if(e.acc===!0||i&&Y.call(r,t)&&To.call(r,t)!==void 0){e.acc=Oo(r,t);let i=Object.getOwnPropertyDescriptor(n,t),a=Object.getOwnPropertyDescriptor(r,t);if(i&&(i.get||i.set)||a&&(a.get||a.set)){(i?.get!==a?.get||i?.set!==a?.set||i?.value!==a?.value)&&W(e,()=>to);return}let o=i?.value,s=a?.value;!Kn(o,s)&&!no(o,s)&&W(e,typeof s==`function`?()=>s:s)}else{let i=n[t],a=r[t];!Kn(i,a)&&!no(i,a)&&W(e,typeof a==`function`?()=>a:a)}}function oo(e){return e.acc===!0}function so(e,t,n,r,i,a){if(e.acc===!0){ao(e,t,i,a,!1);return}!Kn(n,r)&&!no(n,r)&&W(e,typeof r==`function`?()=>r:r)}function co(e,t,n){let r=e.h;if(r!==null)for(let e of Reflect.ownKeys(r))W(r[e],e in n);e.k!==null&&(Array.isArray(n)&&Array.isArray(t)?ro(t,n):io(t,n))&&W(e.k,e=>e+1)}function lo(e,t,n){if(e.dk!==null&&t!==n&&Ea(e),e.fam?.opt&&!D){je(!0);try{lo(e,t,n)}finally{je(!1)}return}let r=e.n;if(r!==null)for(let e of Reflect.ownKeys(r))ao(r[e],e,t,n);let i=e.h;if(i!==null)for(let e of Reflect.ownKeys(i))W(i[e],e in n);e.k!==null&&(Array.isArray(n)&&Array.isArray(t)?ro(t,n):io(t,n))&&W(e.k,e=>e+1)}var uo=0,fo=null;function po(e){if(e.fam!==null)return e.fam;let t=e;for(;t.u!==null;)t=t.u;return t}function J(e){return fo!==null&&fo.has(po(e))}function mo(e,t,n){return typeof n==`object`&&n&&n[K]!==void 0?ho(e,ua(n,e,t)):n}function ho(e,t){if(fo!==null&&J(e)){let e=t?.[K];e!==void 0&&e.v!==void 0&&fo.add(po(e))}return t}var go=new Set,_o=new Set;function vo(){let e=[..._o];_o.clear();for(let t of e){let e=t.ab;e!==null&&e!==t.v&&(lo(t,e,t.v),t.ab=t.v)}}var yo=new Set([`__proto__`,`prototype`,`constructor`]);function bo(){let e=N();return e===null?null:e.Wn?e.qn??null:e}function xo(e){let t=e.n;if(t===null)return!1;for(let e of Reflect.ownKeys(t)){let n=t[e];if(n._e!==b&&n.we!=null&&n.we.Rn!==!0)return!0}return!1}function So(e,t){let n=e.ht;if(n!==null&&!L&&!J(e)&&!na()){let r=Va(e);if(r!==null&&(t===void 0||ya(e,t))){let e=bo();if(e===null||e.C&16||!_a(n===za?null:j(n),e))return r}}return Co(e,!1,t)?e.pb:e.v}function Co(e,t,n){if(e.pb===null)return!1;if(J(e)||na())return!0;if(wo(e))return!1;let r=bo();if(r===null||r.C&16){let n=ha(e);return t?n===null||Qn(n):e.fam!==null&&r===null&&!xo(e)&&n===null}let i=ha(e);if(i!==null&&n!==void 0&&!e.ch&&e.fam?.opt!==!0){let t=e.wk;if(t!=null&&t!==Ua&&!t.has(n))return!1}return _a(i,r)}function wo(e){if(e.fam?.opt!==!0||z===null||L||Ao())return!1;let t=Ka.get(e);return t!==void 0&&Vi.retainsOptimism(t)}var Y=Object.prototype.hasOwnProperty,To=Object.prototype.__lookupGetter__,Eo=Object.prototype.__lookupSetter__,Do=Object.prototype.propertyIsEnumerable;function Oo(e,t){return Y.call(e,t)&&(To.call(e,t)!==void 0||Eo.call(e,t)!==void 0)}function ko(){let e=R;return e!==null&&!!(e.C&8192)}function Ao(){return D||na()||ko()}function jo(e,t){let n;return n=Ao()?e._e===b?t:e._e:L?dr(e)?x(e.o?.Fe):e._e===b?t:e._e:gr(e,bo(),e.De||e,t),n===to?t:n}function Mo(e,t){return e.C&524288?jo(e,t):x(e.o?.Fe)}function No(e,t,n){let r=e.v[K];if(r.ch){let e=No(r,t,n);return e===n?n:ua(e,r,t)}let i=Bi(n,r.fam);return i===void 0?(r.v[t]===n||r.pb?.[t]===n)&&$i(n)?ua(n,r,t):n:i.px}function Po(e,t,n,r,i,a=-1){let o=e.ch&&r===e.v,s=n;if(t===`length`&&e.fam?.opt===!0&&!o&&Array.isArray(r)){if(!J(e)){let i=e.n?.length;if(i!==void 0){if(M()!==null){let e=U(i);if(H(i)&&!Ao())return e===to?r.length:e}else if(H(i)&&!Ao())return jo(i,r.length)}else M()!==null&&U(pa(e,t,n))}return(Ao()||J(e)&&!Ya(e)?r:Vi.optimisticView(e,r,J(e))).length}if(J(e)){if(e.fam?.opt&&Ya(e)&&!Ao()){let n=e.n?.[t];n!==void 0&&H(n)&&(s=x(n.o?.Fe))}}else if(M()!==null){i===void 0&&(i=pa(e,t,n,a));let r=hr(i);r===Xn&&(r=U(i)),(!o||H(i))&&(s=r===to?n:r)}else i!==void 0&&(!o||H(i))&&(s=jo(i,n));if(e.s)return mo(e,t,s);if(e.ch&&!o&&typeof s==`object`&&s&&s[K]===void 0&&(s=No(e,t,s)),i!==void 0){if(i.pxv===s&&s!==void 0)return ho(e,i.px);if(!$i(s))return s;let n=ua(s,e,t);return i.px=n,i.pxv=s,ho(e,n)}return $i(s)?ho(e,ua(s,e,t)):s}function Fo(e){if(D||na())return;let t=e.fam?.node;t!=null&&t.h&6&&U(t)}function Io(e){let t=e.fam.node;if(t==null)return;let n=L;vn(!1);let r=Ba;Ba=!0;try{Yn(t,!0)}finally{Ba=r,vn(n)}}var Lo={get(e,t,n){if(typeof t!=`string`){if(t===K)return e;if(t===q)return n;if(t===Li||t===Wi)return;if(t===ae)return e.fam?.node??void 0;if(t===Ui){if(I&&sa(e,t),e.fam!==null&&M()===null&&!J(e)&&Fo(e),!J(e)&&M()!==null){U(Ta(e));let t=So(e);t[K]!==void 0&&t[Ui]}return}}I&&sa(e,t),e.fam!==null&&M()===null&&!J(e)&&Fo(e),e.fam!==null&&L&&!J(e)&&!na()&&Io(e);let r=So(e,t);if(e.del!==null&&r===e.pb&&e.del.has(t)){!J(e)&&M()!==null&&U(pa(e,t,void 0));return}let i=e.n?.[t];if(e.ch===!1&&fo===null){let n=i;if(n!==void 0&&n.acc!==!0&&M()!==null){let r=hr(n);if(r===Xn&&(r=U(n)),typeof r!=`object`||!r)return r;if(e.s)return mo(e,t,r);if(n.pxv===r)return n.px;if($i(r)){let i=ua(r,e,t);return n.px=i,n.pxv=r,i}return r}}let a=-1;{let o;if(i===void 0?!J(e)&&M()!==null?(o=Oo(r,t),r===(e.pb??e.v)&&(a=+!!o)):o=!1:o=i.acc===!0,o){!J(e)&&M()!==null&&U(i??pa(e,t,void 0,a));let o=Reflect.get(r,t,n);return e.s?mo(e,t,o):$i(o)?ho(e,ua(o,e,t)):o}}let o=e.ovl&&r===e.pb;if((t===`constructor`||t===`__proto__`||t===`prototype`)&&!Y.call(r,t)&&!(o&&Y.call(e.v,t)))return;let s=r[t];if(s===void 0&&!Y.call(r,t)&&!(o&&Y.call(e.v,t))){if(s=Reflect.get(r,t,n),typeof s==`function`)return s;if(s===void 0&&!J(e)){M()!==null&&U(pa(e,t,void 0,a));let n=e.n?.[t];if(n){let r=jo(n,void 0);return e.s?mo(e,t,r):$i(r)?ho(e,ua(r,e,t)):r}}else if(s===void 0&&J(e)&&e.fam?.opt&&Ya(e)&&!Ao()){let n=e.n?.[t];n!==void 0&&H(n)&&(s=x(n.o?.Fe))}return e.s?mo(e,t,s):$i(s)?ho(e,ua(s,e,t)):s}return typeof s==`function`&&!Y.call(r,t)&&!(o&&Y.call(e.v,t))?s:Po(e,t,s,r,i,a)},has(e,t){if(t===K||t===q||t===Ui)return!0;if(t===Li||t===Wi)return!1;I&&sa(e,t),e.fam!==null&&M()===null&&!J(e)&&Fo(e);let n=So(e,t),r=t in n;if(r&&e.del!==null&&n===e.pb&&e.del.has(t)&&(r=!1),!J(e)){if(M()!==null){let n=Ca(e,t,r),i=U(n);H(n)&&(r=!!i)}else if(!Ao()){let n=e.h?.[t];n!==void 0&&H(n)&&(r=!!jo(n,r))}}else if(e.fam?.opt&&Ya(e)&&!Ao()){let n=e.h?.[t];n!==void 0&&H(n)&&(r=!!x(n.o?.Fe))}return r},ownKeys(e){return I&&sa(e),e.fam!==null&&M()===null&&!J(e)&&Fo(e),!J(e)&&M()!==null&&U(Ta(e)),Uo(e,So(e))},getOwnPropertyDescriptor(e,t){if(t===Li||t===Wi)return;I&&sa(e,t);let n=M();e.fam!==null&&n===null&&!J(e)&&Fo(e);let r=So(e,t),i=Wo(e,r,t);if(!J(e)&&n!==null&&!wa(e,n)){let n=t in r;n&&e.del!==null&&r===e.pb&&e.del.has(t)&&(n=!1),U(Ca(e,t,n))}if(i!==void 0)return t===`length`&&Array.isArray(e)||(i.configurable=!0),i},set(e,t,n){let r=J(e),i=!r&&na();if(!r&&!i||t===`__proto__`)return!0;let a=e.s?n:da(n),o=Ra(e);if(go.add(e),Array.isArray(o)){if(t===`length`)e.wk=Ua;else if(e.wk!==Ua){let n=e.wk??=new Set;n.add(t),n.add(`length`)}}else e.wk!==Ua&&(e.wk??=new Set).add(t),t in o||e.kc++;return yo.has(t)?(Object.defineProperty(o,t,{value:a,writable:!0,enumerable:!0,configurable:!0}),e.del!==null&&e.del.delete(t),!0):(e.ovl&&e.sc!==2&&!Y.call(o,t)?Object.defineProperty(o,t,{value:a,writable:!0,enumerable:!0,configurable:!0}):o[t]=a,e.del!==null&&e.del.delete(t),e.s&&typeof a==`object`&&a&&Yi(a),i&&eo(e),!0)},defineProperty(e,t,n){let r=J(e),i=!r&&na();if(!r&&!i||t===`__proto__`)return!0;(n.get||n.set)&&(e.a=!0),`value`in n&&(n={...n,value:da(n.value)});let a=Ra(e);return(e.a||!(n.enumerable&&n.writable&&n.configurable))&&(e.sc=1),go.add(e),e.wk!==Ua&&(e.wk??=new Set).add(t),Object.defineProperty(a,t,n),e.del!==null&&e.del.delete(t),i&&eo(e),!0},deleteProperty(e,t){let n=J(e),r=!n&&na();if(!n&&!r)return!0;let i=Ra(e);return go.add(e),e.wk!==Ua&&(e.wk??=new Set).add(t),delete i[t],e.ovl&&Y.call(e.v,t)&&(e.del??=new Set).add(t),r&&eo(e),!0}},Ro=null,zo=!1;function Bo(e,t,n){Ro=e,zo=!1;try{Vo(t,n)}finally{Ro=null,zo?Sr(e):br(e)}}function Vo(e,t,n=!0){let r=e[K],i=fo;fo=new Set,fo.add(po(r)),uo++;let a;try{a=t(e)}finally{if(uo--,fo=i,uo===0&&go.size){let e=[...go];go.clear();for(let t of e)eo(t)}}a!==void 0&&a!==e&&$i(a)&&(r.fam?.opt&&!D&&!na()?Vi.notifyOptimisticWrites(r,da(a)):Ha(r,da(a))),uo===0&&_o.size&&vo()}function Ho(e,t=!1){let n=ua(e);return t&&(n[K].s=!0,Xi(e)),[n,e=>Vo(n,e)]}function Uo(e,t){let n;if(e.ovl&&t===e.pb){n=Reflect.ownKeys(e.v);let r=e.del;r!==null&&r.size!==0&&(n=n.filter(e=>!r.has(e)));for(let r of Reflect.ownKeys(t))Y.call(e.v,r)||n.push(r)}else n=Reflect.ownKeys(t);for(let e=n.length-1;e>=0&&typeof n[e]==`symbol`;e--)if(n[e]===Li){n.splice(e,1);break}if(!Ao()&&e.fam?.opt&&e.h!==null&&(!J(e)||Ya(e))){let t=null,r=J(e);for(let i of Reflect.ownKeys(e.h)){let a=e.h[i];(r?H(a):dr(a))&&(t??=new Set(n),(r?x(a.o?.Fe):Mo(a,t.has(i)))?t.add(i):t.delete(i))}if(t!==null)return[...t]}return n}function Wo(e,t,n){let r=Object.getOwnPropertyDescriptor(t,n);if(e.ovl&&t===e.pb){if(e.del!==null&&e.del.has(n))return;r===void 0&&(r=Object.getOwnPropertyDescriptor(e.v,n))}let i=J(e);if(!Ao()&&e.fam?.opt&&(!i||Ya(e))){let t=e.h?.[n];if(t!==void 0&&(i?H(t):dr(t))){if(!(i?x(t.o?.Fe):Mo(t,r!==void 0)))return;if(r===void 0){let t=e.n?.[n];return{value:t===void 0?void 0:i?H(t)?x(t.o?.Fe):void 0:jo(t,void 0),writable:!0,enumerable:!0,configurable:!0}}}}return r}function Go(e,t,n){let r=typeof n?.keyed==`function`?n.keyed:void 0,i=t.length>1,a=t,o={ie:Wt(),wt:0,Ot:e,yt:[],At:a,Mt:[],St:[],Kn:r,jt:r||n?.keyed===!1?[]:void 0,kt:i&&n?.keyed!==!1?[]:void 0,gt:n?.keyed===!1,bt:n?.fallback},s=jn(Yo.bind(o),void 0);return o.ie.qn=s,s.C&=-33,Mi(s)}var Ko={ownedWrite:!0};function qo(e,t,n,r){let i=e.yt,a=e.wt-1,o=[],s=[],c=[],l=256,u=r,d=r,f=!1;for(;u<=a&&d<=n-1;){let e=i[u],r=t[d];if(e===r){f||=(c.push(u,d,0),!0),c[c.length-1]++,u++,d++;continue}f=!1;let p=-1,m=Math.min(32-o.length,a-u,l);for(let e=1;e<=m;e++)if(i[u+e]===r){p=e;break}l-=p===-1?m:p;let h=-1;m=Math.min(32-s.length,n-1-d,l);for(let n=1;n<=m;n++)if(t[d+n]===e){h=n;break}if(l-=h===-1?m:h,p!==-1&&(h===-1||p<=h)){for(;p-->0;)o.push(u++);continue}if(h!==-1){for(;h-->0;)s.push(d++);continue}if(l<=0||o.length===32||s.length===32)return!1;o.push(u++),s.push(d++)}for(;u<=a;u++){if(o.length===32)return!1;o.push(u)}for(;d<=n-1;d++){if(s.length===32)return!1;s.push(d)}return Jo(e,t,n,o,s,c)}function Jo(e,t,n,r,i,a){let o=e.yt,s,c,l;if(i.length!==0)for(l=Array(r.length),c=0;c<i.length;c++){let e=-1;for(s=0;s<r.length;s++)if(!l[s]&&o[r[s]]===t[i[c]]){e=s;break}if(e===-1)return!1;l[e]=!0,i[c]=i[c]<<6|e}if(r.length!==0||i.length!==0){let e=new Set;for(s=0;s<r.length;s++)e.add(o[r[s]]);for(c=0;c<i.length;c++)e.add(t[i[c]>>6]);for(let t=0;t<a.length;t+=3){let n=a[t];for(let r=0,i=a[t+2];r<i;r++)if(e.has(o[n+r]))return!1}}let u=e.Mt,d=e.St,f=u.slice(0,n),p=d.slice(0,n);for(let e=0;e<a.length;e+=3){let t=a[e],n=a[e+1];if(t!==n)for(let r=0;r<a[e+2];r++)f[n+r]=u[t+r],p[n+r]=d[t+r]}for(c=0;c<i.length;c++){let e=i[c]>>6,t=r[i[c]&63];f[e]=u[t],p[e]=d[t]}for(e.Mt=f,e.St=p,e.wt=n,e.yt=t.slice(0),s=0;s<r.length;s++)(l===void 0||!l[s])&&d[r[s]].dispose();return!0}function Yo(){let e=this.Ot()||[],t=e.length;return e[Ui],wr(this.ie,()=>{let n,r,i,a,o=this.jt?this.gt?()=>(i[r]=Rn(e[r],Ko),this.At(Mi(i[r]),r)):()=>(i[r]=Rn(e[r],Ko),a&&(a[r]=Rn(r,Ko)),this.At(Mi(i[r]),a?Mi(a[r]):void 0)):this.kt?()=>{let t=e[r];return a[r]=Rn(r,Ko),this.At(t,Mi(a[r]))}:()=>{let t=e[r];return this.At(t)};if(t===0)this.wt!==0&&(this.ie.dispose(!1),this.St=[],this.yt=[],this.Mt=[],this.wt=0,this.jt&&=[],this.kt&&=[]),this.bt&&!this.Mt[0]&&(this.St[0]?.dispose(),this.Mt[0]=wr(this.St[0]=Wt(),this.bt));else if(this.wt===0){let s=Array(t),c=Array(t);i=this.jt&&Array(t),a=this.kt&&Array(t);try{for(r=0;r<t;r++)s[r]=wr(c[r]=Wt(),o)}catch(e){for(n=0;n<=r;n++)c[n]?.dispose();throw e}this.St[0]&&this.St[0].dispose(),this.Mt=s,this.St=c,i&&(this.jt=i),a&&(this.kt=a),this.yt=e.slice(0),this.wt=t}else{let s,c,l,u,d,f,p,m,h,g=(this.Wt=z!==null||this.Wt&&S.size!==0)?k.st:W;for(s=0,c=Math.min(this.wt,t);s<c&&(this.yt[s]===e[s]||this.jt&&Xo(this.Kn,this.yt[s],e[s]));s++)this.jt&&g(this.jt[s],e[s]);for(c=this.wt-1,l=t-1;c>=s&&l>=s&&(this.yt[c]===e[l]||this.jt&&Xo(this.Kn,this.yt[c],e[l]));c--,l--);if(s===t&&this.wt===t){this.yt=e.slice(0);return}if(t<=this.wt&&c-s>64&&this.jt===void 0&&this.kt===void 0){let n=s+(l-s>>1),r=e[n],i=Math.min(c,n+32),a=Math.max(s,n-32);for(;a<=i&&this.yt[a]!==r;)a++;if(a<=i&&qo(this,e,t,s))return}let _=t-this.wt,v=Array(t),ee=Array(t);for(i=this.jt?Array(t):void 0,a=this.kt?Array(t):void 0,f=new Map,p=Array(l+1),r=l;r>=s;r--)u=e[r],d=this.Kn?this.Kn(u):u,n=f.get(d),p[r]=n===void 0?-1:n,f.set(d,r);for(n=s;n<=c;n++)u=this.yt[n],d=this.Kn?this.Kn(u):u,r=f.get(d),r!==void 0&&r!==-1?(v[r]=this.Mt[n],ee[r]=this.St[n],i&&(i[r]=this.jt[n]),a&&(a[r]=this.kt[n]),r=p[r],f.set(d,r)):(m??=[]).push(this.St[n]);try{for(r=s;r<=l;r++)ee[r]===void 0&&((h??=[]).push(ee[r]=Wt()),v[r]=wr(ee[r],o))}catch(e){if(h)for(n=0;n<h.length;n++)h[n].dispose();throw e}for(n=0;n<s;n++)v[n]=this.Mt[n],ee[n]=this.St[n],i&&(i[n]=this.jt[n]),a&&(a[n]=this.kt[n]);for(r=s;r<=l;r++)i&&g(i[r],e[r]),a&&g(a[r],r);for(r=l+1;r<t;r++)v[r]=this.Mt[r-_],ee[r]=this.St[r-_],i&&(i[r]=this.jt[r-_],g(i[r],e[r])),a&&(a[r]=this.kt[r-_],_!==0&&g(a[r],r));if(this.Mt=v,this.St=ee,i&&(this.jt=i),a&&(this.kt=a),this.wt=t,this.yt=e.slice(0),m)for(n=0;n<m.length;n++)m[n].dispose()}}),this.Mt}function Xo(e,t,n){return!e||e(t)===e(n)}function Zo(e,t,n,r=!1){if(t==null)throw Error(``);let i=t?.[K];if(i===void 0||i.px!==t)throw Error(``);i.ovl&&La(i);let a=n===null?null:typeof n==`string`?e=>e?.[n]:n;if(r&&e!==t&&e?.[K]!==void 0){if((i.pb??i.v)===e)return;Ha(i,e);return}let o=da(e);if(a){let e=a(i.pb??i.v);if(e!==void 0&&!es(a(o),e)){if(!r)throw Error(``);let e=i.pb??i.v;zi(e)?delete e[Li]:(i.fam?.map??Ri).delete(e),Ha(i,o);return}}if(i.fam?.opt===!0&&!D&&!na()){Vi.applyTentative(i,o,a);return}Qo(i,o,a,r)}function Qo(e,t,n,r=!1){let i=e.pb??e.v;if(t===i&&!zi(i))return;let a=e.fam,o=a?.opt===!0?Vi.optimisticView(e,i):i,s=Array.isArray(t),c=a===null,l=e.s===!0,u=i;if(Ha(e,t,c),l&&Xi(t),Array.isArray(o)!==s){c&&lo(e,u,t);return}if(s){let i=o,s=t,d=c?e.n:null,f=0;if(n&&!l){let o=i.length,c=s.length,l=!1,p=0;for(let m=Math.min(o,c);p<m;p++){let o=s[p],c=i[p];if(c!==o&&!(typeof c==`object`&&c&&typeof o==`object`&&o&&es(n(c),n(o))))break;if((c!==o||typeof o==`object`&&o&&zi(o))&&typeof o==`object`&&o&&ts(da(c),o,n,a,r),e.dk!==null&&!l&&!(typeof o==`object`&&o?no(c,o):Kn(c,o))&&(Ea(e),l=!0),d!==null){let e=d[p];e!==void 0&&(f++,so(e,p,u[p],o,u,t))}}e.dk!==null&&!l&&p<s.length&&Ea(e);let m=p,h=null;for(;p<s.length;p++){let e=s[p];if(typeof e==`object`&&e){let t=n(e),o;if(t!==void 0){if(h===null){h=new Map;for(let e=m;e<i.length;e++){let t=da(i[e]);if(typeof t==`object`&&t){let r=n(t);if(r===void 0)continue;let i=h.get(r);i===void 0?h.set(r,e):Array.isArray(i)?i.push(e):h.set(r,[i,e])}}}let e=h.get(t);e===void 0?o=void 0:Array.isArray(e)?(o=da(i[e.shift()]),e.length===1&&h.set(t,e[0])):(o=da(i[e]),h.delete(t))}else o=da(i[p]);ts(o,e,n,a,r)}if(d!==null){let e=d[p];e!==void 0&&(f++,ao(e,p,u,t,!1))}}}else{let o=Math.min(i.length,s.length),c=s.length,p=!1;for(let m=0;m<c;m++){let c=s[m];if(!l&&m<o&&typeof c==`object`&&c&&ts(da(i[m]),c,n,a,r),e.dk!==null&&!p&&!(typeof c==`object`&&c?no(i[m],c):Kn(i[m],c))&&(Ea(e),p=!0),d!==null){let e=d[m];e!==void 0&&(f++,ao(e,m,u,t,!1))}}}if(c){if(d!==null&&f<e.nc)for(let e of Reflect.ownKeys(d)){let n=typeof e==`string`?+e:NaN;n>=0&&n<s.length||ao(d[e],e,u,t,!1)}co(e,u,t)}return}{let i=c?e.n:null,s=0,d=!1;for(let c in t){let f=t[c],p=u[c],m=typeof f==`object`&&!!f;if(p===f&&(!m||!zi(f))&&(i===null||i[c]===void 0||!oo(i[c]))){i!==null&&i[c]!==void 0&&s++;continue}if(m&&!l&&ts(da(o[c]),f,n,a,r),e.dk!==null&&!d&&!(m?no(p,f):Kn(p,f))&&(Ea(e),d=!0),i!==null){let e=i[c];e!==void 0&&(s++,so(e,c,p,f,u,t))}}let f=Object.getOwnPropertySymbols(t);for(let e=0;e<f.length;e++){let c=f[e];if(c===Li)continue;let d=t[c];if(!l&&typeof d==`object`&&d&&ts(da(o[c]),d,n,a,r),i!==null){let e=i[c];e!==void 0&&(s++,so(e,c,u[c],d,u,t))}}if(c){if(i!==null&&s<e.nc)for(let e of Reflect.ownKeys(i))$o.call(t,e)||ao(i[e],e,u,t,!1);co(e,u,t)}return}}var $o=Object.prototype.hasOwnProperty;function es(e,t){return e===t||e!==e&&t!==t}function ts(e,t,n,r,i=!1){if(typeof e!=`object`||!e||typeof t!=`object`||!t)return;let a=Bi(e,r);if(a!==void 0&&$i(t)&&!(qi&&Ji(t))&&(t=da(t),Array.isArray(e)===Array.isArray(t))){if(n){let r=n(e),i=n(t);if(r!==void 0&&i!==void 0&&!es(r,i))return}(i||n===null||a.d)&&Qo(a,t,n,i)}}function ns(e,t,n,r,i){let a=e=>{if(!t())return!0;let r=D;ta(!0),je(!0);try{n?n(e):e()}finally{ta(!1),je(r)}return!r&&i&&i(),!0};return new Proxy(Array.isArray(e)?[]:{},{get(a,o){let s,c=D;ta(!0),je(!0);try{s=e[o]}finally{ta(!1),je(c)}return!r&&typeof s==`object`&&s&&o!==K?ns(s,t,n,!1,i):s},has(t,n){let r,i=D;ta(!0),je(!0);try{r=n in e}finally{ta(!1),je(i)}return r},set:(t,n,r)=>a(()=>{e[n]=r}),deleteProperty:(t,n)=>a(()=>{delete e[n]}),ownKeys(){let t=D;ta(!0),je(!0);try{return Reflect.ownKeys(e)}finally{ta(!1),je(t)}},getOwnPropertyDescriptor(t,n){let r,i=D;ta(!0),je(!0);try{r=Reflect.getOwnPropertyDescriptor(e,n)}finally{ta(!1),je(i)}return r&&(r.configurable=!0),r},defineProperty:(t,n,r)=>a(()=>{Reflect.defineProperty(e,n,r)})})}function rs(e,t,n){let r={map:new WeakMap,node:null,shallow:!!n?.shallow},i=ua(t,null,null,r);r.shallow&&(i[K].s=!0,Xi(t));let a;n?.seedLoadingValue&&(a={loadingValue:void 0});let o=jn(()=>{r.node||=N(),os(i,e,n?.key===void 0?`id`:n.key)},a);return o.C&=-33,r.node=o,{store:i,node:o}}function is(e,t,n){let{store:r,node:i}=rs(e,t,n);return[r,e=>Bo(i,r,e)]}function as(e,t){return t?Array.isArray(e)?e.slice():{...e}:JSON.parse(JSON.stringify(e))}function os(e,t,n,r,i){let a=N(),o=e[K],s=o.fam,c=s.run=(s.run||0)+1,l,u=a.ve?as(o.v,o.s):null;return Vo(ns(e,()=>s.run===c&&!Ht(a),i,o.s,()=>{!(a.h&1)&&!a.ve&&Fe()}),i=>{l=t(u??i);let s=t=>{if(u&&(t===void 0||t===u)&&(t=as(u,o.s)),t===i||t===void 0)return;let a=()=>Vo(e,e=>Zo(t,e,n,!0),!1);r?r(a,t):a()},c=pn(a,l,s);a.ve||s(c)},!1),a}function ss(e,t,n){return typeof e==`function`?is(e,t,n):Ho(e,!!t?.shallow)}function cs(e,t){let r=jn(e,{lazy:!0});return B(r).S=(e,t)=>{let i=e===void 0?r.h:e,a=t===void 0?r.o?._:t;r.h&=~r.R;let o=r.T.notify(r,3,i,a),s=i&~r.R&3;if(s&&(r.h&=~s,r.o?._===a&&!(r.h&3)&&r.o!==null&&(r.o._=void 0)),!o&&i&2)throw Ue(n(a)),a},r.R=t,r.C&=-33,kn(r,!0),r}function ls(t,r,i){let a=!1,o=wr(t,()=>jn(()=>{try{i()}catch(t){if(!(t instanceof e))throw t}a?(z!==null&&(r.O=z),ze(r)):a=!0},{lazy:!0}));return B(o).S=(t,r)=>{let i=t===void 0?o.h:t;if(i&1&&(o.h&=-2,o.o?._ instanceof e&&(o.o._=void 0),xt(o),O()),i&2){let e=r===void 0?o.o?._:r;if(o.h&=-3,o.o?._===e&&o.o!==null&&(o.o._=void 0),!o.T.notify(o,2,i,e))throw Ue(n(e)),e}},o.C&=-33,kn(o,!0),o}function us(e,t,n,r){let i=e.T;return i.addChild(e.T=n),Vt(()=>i.removeChild(e.T)),wr(e,()=>{let e=jn(t);return cs(()=>hs(U(e)),r)})}var ds=class extends Ke{te;U=new Set;re;ne;v=!0;P=Rn(!1,{ownedWrite:!0,H:!0});_;L=Rn(!1,{ownedWrite:!0,H:!0});W;q=!1;ie;O=null;constructor(e){super(),this.te=e}run(e){if(e&&!U(this.P))return super.run(e)}se(){let e=this.O;if(this.O=null,this.re===void 0||this.re.oe&64||!this.q)return;let t=new Set;for(let e of ge)for(let[n,r]of e.le)for(let e of r)this.ae(e)&&pt(e,n)&&(t.add(n),e.o?.ue?.forEach(e=>t.add(e)));t.size&&(this.q=!1,this.U=t,this.v=!0,this.fe(e),Le())}fe(e){e===null?W(this.P,!0):(this.P.ce=!0,bn(this.P,e))}Se(){for(let e of this.U)e.he!==void 0&&kn(e);O()}notify(e,t,r,i){if(!(t&this.te)||this.te&1&&this.q)return super.notify(e,t,r,i);if(r&this.te){this.v=!0;let t=i?.source||e.o?._?.source;if(t){let r=this.U.size===0;if(this.U.add(t),this.te&1&&e.o?.ue?.forEach(e=>this.U.add(e)),r&&W(this.P,!0),this.te&2){let e=n(t.o?._);W(this._,e),Ai(e,this.ie,t)}}}return t&=~this.te,!t||super.notify(e,t,r,i)}ae(e){if(e.oe&96)return!1;for(let t=e.T;t;t=t._parent){if(t===this)return!0;if(t.te&1&&!t.q)return!1}return!1}de(e){return!!(e.oe&64||!e.o?.t&&!(e.h&this.te)&&!(this.te&2&&e.h&1)&&!(this.te&1&&e.h&4&&e._e!==b))}Re(){!this.q&&this.ne.h&1&&this.Ee()}Ee(){for(let e of this.U)this.de(e)&&this.U.delete(e);this.U.size||(this.v=this.te&1&&this.v&&!this.q&&this.re?!!(this.re.h&this.te):!1,this.v||W(this.P,!1))}};function fs(t,n,r,i){let a=Wt(),o=new ds(t);o.ie=a,t===2&&(o._=Rn(void 0,{ownedWrite:!0,H:!0})),i&&ls(a,o,i);let s=o.re=us(a,n,o,t);return Jn(()=>{let n=!1;try{U(s)}catch(t){if(t instanceof e)n=!0;else throw t}o.v=n||!!(s.h&t)||s.o?._ instanceof e}),Mi(o.ne=jn(()=>{if(!U(o.P)){let e=U(s);if(!V(()=>U(o.P)))return o.q=!0,e}return r(o)},{H:!0}))}function ps(e,t,n){return fs(1,e,()=>t(),n?.on)}function ms(e,t){return fs(2,e,e=>t(Mi(e._),()=>e.Se()))}function hs(e,t){if(typeof e==`function`&&!e.length){if(t?.doNotUnwrap)return e;do e=e();while(typeof e==`function`&&!e.length)}if(!t?.skipNonRendered||e!=null&&e!==!0&&e!==!1&&e!==``){if(Array.isArray(e)){let n=[];return gs(e,n,t)?()=>{let e=[];return gs(n,e,{...t,doNotUnwrap:!1}),e}:n}return e}}function gs(t,n=[],r){let i=null,a=!1;for(let o=0;o<t.length;o++)try{let e=t[o];if(typeof e==`function`&&!e.length){if(r?.doNotUnwrap){n.push(e),a=!0;continue}do e=e();while(typeof e==`function`&&!e.length)}Array.isArray(e)?a=gs(e,n,r)||a:r?.skipNonRendered&&(e==null||e===!0||e===!1||e===``)||n.push(e)}catch(t){if(!(t instanceof e))throw t;i=t}if(i)throw i;return a}function _s(){return!0}var vs=Object.freeze({});function ys(e,t){return t===3?(e=e())??vs:e}var bs=class{source;kind;hidden;table=0;keys=void 0;descs=void 0;constructor(e,t,n){this.source=e,this.kind=t,this.hidden=n}};function X(e,t){let n=e.hidden;return typeof n==`function`?n(t):n.includes(t)}function xs(e,t){if(typeof e!=`function`&&typeof t!=`function`){let n=e.slice();for(let e=0;e<t.length;e++)n.push(t[e]);return n}return n=>(typeof e==`function`?e(n):e.includes(n))||(typeof t==`function`?t(n):t.includes(n))}function Ss(e){return ys(e.source,e.kind)}function Cs(e){return e[Wi]}function ws(e,t){return t===0?Object.keys(e):t===2||e[q]===e?Reflect.ownKeys(e):Object.keys(e)}function Ts(e,t){if(t===1){if(e.kind===4)return ec(e.source,!1,e);let t=ws(Ss(e),e.kind),n=[];for(let r=0;r<t.length;r++)X(e,t[r])||n.push(t[r]);return n}return ws(ys(e,t),t)}function Es(e,t,n){return t===1?X(e,n)?!1:e.kind===4?Qs(e.source,n):n in Ss(e):n in ys(e,t)}function Ds(e,t,n){return t===1?X(e,n)?void 0:e.kind===4?Zs(e.source,n):Ss(e)[n]:ys(e,t)[n]}function Os(e,t){return t===0?!0:t===1?e.kind===0||e.kind===4&&ks(e.source):!1}function ks(e){let t=e.sources,n=e.kinds;for(let e=0;e<t.length;e++)if(!Os(t[e],n[e]))return!1;return!0}function As(e){if(!(q in e))return!0;let t=Cs(e);return t instanceof Ps?ks(t):t!==void 0&&Os(t,1)}function js(e,t=!0){return{configurable:!0,enumerable:t,get:e,set:_s}}function Ms(e,t,n,r=!1){if(t===1)return X(e,n)?void 0:Ms(e.source,e.kind,n,r);if(t===4)return $s(e,n);if(t===3)return r||n in ys(e,t)?js(()=>ys(e,t)[n]):void 0;if(t===2)return Cs(e)===void 0?r||n in e?js(()=>e[n]):void 0:Reflect.getOwnPropertyDescriptor(e,n);let i=Reflect.getOwnPropertyDescriptor(e,n);if(i!==void 0)return i.get!==void 0||i.set!==void 0?js(()=>e[n],i.enumerable):i.configurable?i:{configurable:!0,enumerable:i.enumerable,writable:!0,value:i.value}}function Ns(e,t){{if(e.kind===4)return rc(e.source,e);let t=ra(Ss(e)),n=[];for(let r=0;r<t.length;r++)X(e,t[r])||n.push(t[r]);return n}}var Ps=class{sources;kinds;table=0;keys=void 0;descs=void 0;constructor(e,t){this.sources=e,this.kinds=t}};function Fs(e){return e!=null&&q in e?e[Wi]:void 0}function Is(e){if(e==null||!(q in e))return;let t=Cs(e);return t instanceof bs?Vs(t):t===void 0?void 0:Ls(t)}function Ls(e){let t=e.table;if(typeof t!=`object`){let n=e.sources,r=e.kinds;for(let t=0;t<n.length;t++)if(!Os(n[t],r[t])){e.table=null;return}t=new Map,Rs(t,e,void 0),e.table=t}return t===null?void 0:t}function Rs(e,t,n){let r=t.sources,i=t.kinds;for(let t=0;t<r.length;t++){let a=r[t];if(i[t]===1){if(a.kind===4){n===void 0?n=[a]:n.push(a),Rs(e,a.source,n),n.pop();continue}let t=a.source,r=Reflect.ownKeys(t);for(let i=0;i<r.length;i++){let o=r[i];!X(a,o)&&!zs(n,o)&&Bs(e,o,t)}}else{let t=Reflect.ownKeys(a);for(let r=0;r<t.length;r++){let i=t[r];zs(n,i)||Bs(e,i,a)}}}}function zs(e,t){if(e!==void 0){for(let n=e.length-1;n>=0;n--)if(X(e[n],t))return!0}return!1}function Bs(e,t,n){e.has(t)&&e.delete(t),e.set(t,n)}function Vs(e){let t=e.table;if(typeof t!=`object`){let n=e.source;if(e.kind===4){if(!ks(n)){e.table=null;return}t=new Map,Rs(t,n,[e])}else if(e.kind===0){t=new Map;let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){let a=r[i];X(e,a)||t.set(a,n)}}else{e.table=null;return}e.table=t}return t===null?void 0:t}var Hs=Object.prototype.propertyIsEnumerable;function Us(e,t){let n=e.keys;if(n===void 0){n=e.keys=[];for(let[e,r]of t)Hs.call(r,e)&&n.push(e)}return n}function Ws(e,t,n){let r=t.get(n);if(r===void 0)return;let i=e.descs;i===void 0&&(i=e.descs=new Map);let a=i.get(n);return a===void 0?(a=Ms(r,0,n),a===void 0?void 0:(i.set(n,a),a)):a.get===void 0?{configurable:!0,enumerable:a.enumerable,writable:a.writable,value:r[n]}:a}var Gs=16;function Ks(e){let t=e.table;if(typeof t==`object`)return t===null?void 0:t;if(t+1<Gs){e.table=t+1;return}return Ls(e)}function qs(e){let t=e.table;if(typeof t==`object`)return t===null?void 0:t;if(t+1<Gs){e.table=t+1;return}return Vs(e)}function Js(e){let t=e.table;return typeof t==`object`&&t?t:void 0}var Ys=Symbol();function Xs(e,t){let n=Js(e);if(n!==void 0){let e=n.get(t);return e===void 0?Ys:e[t]}let r=e.sources,i=e.kinds;for(let e=r.length-1;e>=0;e--){let n=i[e];if(n===0){let n=r[e];if(t in n)return n[t];continue}if(n===1){let n=r[e];if(X(n,t))continue;if(n.kind===4){let e=Xs(n.source,t);if(e!==Ys)return e;continue}let i=Ss(n);if(t in i)return i[t]}else{let i=ys(r[e],n);if(t in i)return i[t]}}return Ys}function Zs(e,t){let n=Xs(e,t);return n===Ys?void 0:n}function Qs(e,t){let n=Js(e);if(n!==void 0)return n.has(t);let r=e.sources,i=e.kinds;for(let e=r.length-1;e>=0;e--)if(Es(r[e],i[e],t))return!0;return!1}function $s(e,t){let n=Js(e);if(n!==void 0)return Ws(e,n,t);let r=e.sources,i=e.kinds;for(let n=r.length-1;n>=0;n--)if(Es(r[n],i[n],t))return Ms(r[n],i[n],t,!0)??js(()=>Zs(e,t))}function ec(e,t,n){let r=[];return tc(e,n===void 0?void 0:[n],t,r,null),r}function tc(e,t,n,r,i){let a=e.sources,o=e.kinds;for(let e=0;e<a.length;e++){let s=a[e],c=o[e],l;if(c===1){if(s.kind===4){t===void 0?t=[s]:t.push(s),tc(s.source,t,n,r,i),t.pop();continue}l=s,c=s.kind,s=s.source}s=ys(s,c);let u=n?ra(s):ws(s,c);for(let e=0;e<u.length;e++){let n=u[e];l!==void 0&&X(l,n)||zs(t,n)||nc(r,i,n,s)}}}function nc(e,t,n,r){let i=e.indexOf(n);i!==-1&&(e.splice(i,1),t!==null&&t.splice(i,1)),e.push(n),t!==null&&t.push(r)}function rc(e,t){let n=Ls(e);if(n===void 0)return ec(e,!0,t);let r=Us(e,n);if(t===void 0)return r;let i=[];for(let e=0;e<r.length;e++)X(t,r[e])||i.push(r[e]);return i}var ic={get(e,t,n){if(typeof t==`symbol`){if(t===q)return n;if(t===Wi)return e;if(t===K)return}let r=e.table,i;if(typeof r!=`object`){if(r+1<Gs){e.table=r+1;let n=e.sources,i=e.kinds;for(let r=n.length-1;r>=0;r--){if(i[r]!==0)return Zs(e,t);let a=n[r][t];if(a!==void 0||t in n[r])return a}return}if(i=Ls(e),i===void 0)return Zs(e,t)}else if(r===null)return Zs(e,t);else i=r;let a=i.get(t);return a===void 0?void 0:a[t]},has(e,t){if(t===q)return!0;if(t===K||t===Wi)return!1;let n=Ks(e);return n===void 0?Qs(e,t):n.has(t)},set:_s,deleteProperty:_s,getOwnPropertyDescriptor(e,t){if(t===q||t===K||t===Wi)return;let n=Ks(e);return n===void 0?$s(e,t):Ws(e,n,t)},ownKeys(e){return rc(e)}},ac={get(e,t,n){if(t===q)return n;if(t===Wi)return e;if(t!==K){if(e.kind===4){let n=qs(e);if(n!==void 0){let e=n.get(t);return e===void 0?void 0:e[t]}return X(e,t)?void 0:Zs(e.source,t)}if(!X(e,t))return Ss(e)[t]}},has(e,t){if(t===q)return!0;if(t===K||t===Wi)return!1;if(e.kind===4){let n=qs(e);return n===void 0?!X(e,t)&&Qs(e.source,t):n.has(t)}return!X(e,t)&&t in Ss(e)},set:_s,deleteProperty:_s,getOwnPropertyDescriptor(e,t){if(t!==q&&t!==K&&t!==Wi){if(e.kind===4){let n=qs(e);if(n!==void 0)return Ws(e,n,t)}return Ms(e,1,t)}},ownKeys(e){if(e.kind===4){let t=Vs(e);return t===void 0?Ns(e):Us(e,t)}let t=Reflect.ownKeys(Ss(e)),n=[];for(let r=0;r<t.length;r++)X(e,t[r])||n.push(t[r]);return n}};function oc(...e){if(e.length===1&&typeof e[0]!=`function`)return e[0];let t=Array(e.length),n=Array(e.length),r=0,i,a=0;for(let o=0;o<e.length;o++){let s=e[o];if(s){if(a++,i=s,typeof s==`function`){t[r]=G(s),n[r++]=3;continue}if(q in s){let e=Cs(s);if(e instanceof Ps)for(let i=0;i<e.sources.length;i++)t[r]=e.sources[i],n[r++]=e.kinds[i];else e===void 0?(t[r]=s,n[r++]=2):(t[r]=e,n[r++]=1);continue}t[r]=s,n[r++]=0}}if(r!==t.length&&(t.length=r,n.length=r),re)return a===1&&typeof i!=`function`?i:new Proxy(new Ps(t,n),ic);let o=Object.create(null),s=!1,c=t.length-1;for(let e=c;e>=0;e--){let n=t[e];if(!n){e===c&&c--;continue}let r=Object.getOwnPropertyNames(n);for(let t=r.length-1;t>=0;t--){let i=r[t];if(i!==`__proto__`&&i!==`constructor`&&!o[i]){s||=e!==c;let t=Object.getOwnPropertyDescriptor(n,i);o[i]=t.get?{enumerable:!0,configurable:!0,get:t.get.bind(n)}:t}}}if(!s)return t[c];let l={},u=Object.keys(o);for(let e=u.length-1;e>=0;e--){let t=u[e],n=o[t];n.get?Object.defineProperty(l,t,n):l[t]=n.value}return l}function sc(e,...t){let n=t.length===1&&typeof t[0]==`function`?t[0]:t;if(re){let t=e,r=0;if(typeof e==`function`)r=3;else if(q in e){r=2;let i=Cs(e);i instanceof bs?(t=i.source,r=i.kind,n=xs(i.hidden,n)):i!==void 0&&(t=i,r=4)}return new Proxy(new bs(t,r,n),ac)}let r={},i=Object.getOwnPropertyNames(e),a=typeof n==`function`?n:n.length>4&&i.length>n.length?(e=>t=>e.has(t))(new Set(n)):e=>n.includes(e);for(let t of i)if(!a(t)){let n=Object.getOwnPropertyDescriptor(e,t);!n.get&&!n.set&&n.enumerable&&n.writable&&n.configurable?r[t]=n.value:n.get||n.set?Object.defineProperty(r,t,{enumerable:n.enumerable,configurable:!0,get:n.get&&n.get.bind(e),set:n.set&&n.set.bind(e)}):Object.defineProperty(r,t,n)}return r}var cc=!1;function lc(e,t){let n=Symbol(t&&t.name||``);function r(e){return Gt(()=>(Dr(r,e.value),dc(()=>e.children)))}return r.id=n,r.defaultValue=e,r}function uc(e){return Er(e)}function dc(e){let t=G(e,{lazy:!0}),n=G(()=>hs(t()),{lazy:!0,sync:!0});return n.toArray=()=>{let e=n();return Array.isArray(e)?e:e==null?[]:[e]},n}var fc={id:Symbol(`NoHydrateContext`),defaultValue:!1},Z={hydrating:!1,registry:void 0,done:!1};function pc(){let e=N();if(!e)throw Error(`getNextContextId cannot be used under non-hydrating context`);if(!Er(fc))return Lt(e)}var mc=null,hc=0,gc=!1,_c=null,vc=null;function yc(){if(!vc)return!0;let e=N();for(;e;){if(e===vc)return!0;e=e._parent}return!1}function bc(){if(_c)return;let e=N();if(e){for(;e._parent;)e=e._parent;Tn(e),tl(e),_c=e}}function xc(){return!gc&&(Z.hydrating||hc>0)}function Sc(){return Z.hydrating&&(!Z.isClaiming||Z.isClaiming())}function Cc(){return!!N()&&!Er(fc)}function wc(e){if(gc||!Z.hydrating&&hc===0){queueMicrotask(e);return}mc||=[],mc.push(e)}function Tc(){if(gc)return;gc=!0,Oc=!0,On(),wn(!1),dt();let e=mc;if(mc=null,e)for(let t of e)t();setTimeout(()=>{globalThis._$HY&&(globalThis._$HY.done=!0),Z.registry?.clear()})}function Ec(){!Dc&&hc===0&&Tc()}var Dc=!1,Oc=!1,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc=(()=>{class e{catch(){return new e}then(){return new e}finally(){return new e}}for(let t of[`all`,`allSettled`,`any`,`race`,`reject`,`resolve`])e[t]=()=>new e;return e})();function zc(e,t){let n=fetch,r=Promise;try{window.fetch=()=>new Rc,Promise=Rc;let n=e(t);if(n&&typeof n.next==`function`&&typeof n[Symbol.asyncIterator]==`function`){let e=n[Symbol.asyncIterator]();e===n&&e.next()}return n&&typeof n.then==`function`&&n.then(void 0,()=>{}),n}finally{window.fetch=n,Promise=r}}function Bc(e){return{then(t){t(e)}}}function Vc(e,t,n){if(t(),typeof e==`object`&&e){if(rl(n)&&typeof e.then==`function`)return{then:e.then.bind(e)};if(e.s===2)throw typeof e.then==`function`&&e.then(void 0,()=>{}),e.v;if(e.s===1)return e.v}return e}var Hc=new WeakSet;function Uc(e,t,n){let r=N(),i=Zc.get(r);if(i&&(Z.done||i()))return Wc(r,i,e,t);if(Z.done)return e(t);if(!Z.has(r.id)){let i=e(t);return n?.ssrSource!==`hybrid`&&typeof i==`object`&&i&&i[Kc]&&i[Jc]!==void 0?(el(r),i[Jc]):i}if(Hc.has(r)){if(n?.ssrSource!==`hybrid`){let n=r;for(;n&&!n._hp;)n=n._parent;if(!n&&!(Z.hydrating&&yc()))return e(t);el(r)}}else Hc.add(r);return Vc(Z.load(r.id),()=>{let i=zc(e,t);return n?.ssrSource!==`hybrid`&&i!=null&&i[Kc]&&el(r),i},n)}function Wc(e,t,n,r){let i=n(r);return t!==Qc&&(Zc.set(e,Qc),typeof i==`object`&&i&&i[Kc]&&(i[qc]=r)),i}var Gc={then(){}},Kc=Symbol.for(`solid.LiveSource`),qc=Symbol.for(`solid.LiveResumeFrom`),Jc=Symbol.for(`solid.LiveLocal`),Yc=new Set,Xc=new Map,Zc=new WeakMap,Qc=()=>!0;function $c(e){if(Yc.size===0)return null;let t=e;for(;t;){if(Yc.has(t))return t;t=t._parent}return null}function el(e){let t=Zc.get(e);if(!t){let n=$c(e),r=Xc.get(n);r||(r=Ni(!1),Xc.set(n,r),n===null&&wc(()=>{Xc.delete(null),r[1](!0)})),t=r[0],Zc.set(e,t)}t()}function tl(e){Yc.add(e)}function nl(e){Yc.delete(e);let t=Xc.get(e);t&&(Xc.delete(e),t[1](!0))}function rl(e){return typeof e==`object`&&!!e&&(`loadingValue`in e||e.seedLoadingValue===!0)}function il(e,t){let n=e.return?.(t);return n&&typeof n.then==`function`?n:Bc(n??{done:!0,value:t})}function al(e,t){let n=!0,r=null;return{next(){if(n){n=!1;let r=e.next();return r&&typeof r.then==`function`?r:t?Promise.resolve(r):Bc(r)}if(r){let e=r;return r=null,e}let i=e.next();if(i&&typeof i.then==`function`)return i;let a=i;for(;!i.done;){let t=e.next();if(t&&typeof t.then==`function`){r=t;break}i=t,i.done?a!==i&&(r=Promise.resolve(i)):a=i}return Promise.resolve(a)},return(t){return r=null,il(e,t)}}}function ol(e,t){for(let n of t){let t=n[0],r=e;for(let e=0;e<t.length-1;e++)r=r[t[e]];let i=t[t.length-1];n.length===1?Array.isArray(r)?r.splice(i,1):delete r[i]:n.length===3?r.splice(i,0,n[1]):r[i]=n[1]}}function sl(e){return e!=null&&typeof e[Symbol.asyncIterator]==`function`}function cl(){let e=N();return!e||e.id==null}function ll(e,t){let n=t?Array.isArray(e)?e.slice():{...e}:JSON.parse(JSON.stringify(e)),r=!0;return{proxy:new Proxy(n,{get(t,i){return r?n[i]:e[i]},set(t,i,a){return r?(n[i]=a,!0):Reflect.set(e,i,a)},deleteProperty(t,i){return r?(delete n[i],!0):Reflect.deleteProperty(e,i)},has(t,i){return i in(r?n:e)},ownKeys(){return Reflect.ownKeys(r?n:e)},getOwnPropertyDescriptor(t,i){return Object.getOwnPropertyDescriptor(r?n:e,i)}}),activate(){r=!1}}}function ul(e,t,n){let r=e[Symbol.asyncIterator](),i=0;return{[Symbol.asyncIterator](){return{next(){if(i===0)return i=1,Bc({done:!1,value:n});let e=r.next();return i===1?(i=2,e.then(e=>(t?.(),e.done?e:{done:!1,value:n}))):e},return(e){return il(r,e)}}}}}function dl(e){let t=0;return{[Symbol.asyncIterator](){return{next(){return t===0?(t=1,Bc({done:!1,value:void 0})):t===1?(t=2,e.then(e=>({done:!1,value:e}))):Promise.resolve({done:!0,value:void 0})}}}}}function fl(e,t,n){let r=!1;return{[Symbol.asyncIterator](){return{next(){return r?(t(),Promise.resolve({done:!0,value:void 0})):(r=!0,{then(t,r){e.then(e=>t({done:!1,value:e}),e=>{n(),r(e)})}})}}}}}function pl(e,t,n){let r=zt(N());if(!Z.has(r))return null;let i=Z.load(r);if(!sl(i))return null;let a=al(i[Symbol.asyncIterator](),rl(n)),o=!1,s={next(){let e=a.next();return{then(t,n){return e.then(e=>(e.done&&(o=!0),t(e)),e=>{if(o=!0,n)return n(e);throw e})}}},return(e){return a.return(e)}},c={[Symbol.asyncIterator](){return s}};return e(e=>o?t(e):(zc(t,e),c),n)}function ml(e,t,n,r){let i=zt(N());if(!Z.has(i))return null;let a=Z.load(i);if(!sl(a))return null;let o=a[Symbol.asyncIterator](),s=rl(r),c=!0,l=null,u=!1,d=e=>{throw u=!0,e};return e(e=>{if(u)return t(e);let{proxy:n}=ll(e,r?.shallow);zc(t,n);let i=t=>{if(t.done)return u=!0,{done:!0,value:void 0};if(c){c=!1,wn(!1);try{if(Array.isArray(t.value)){for(let n=0;n<t.value.length;n++)e[n]=t.value[n];e.length=t.value.length}else{for(let n of Object.keys(e))n in t.value||delete e[n];Object.assign(e,t.value)}}finally{wn(!0)}}else ol(e,t.value);return{done:!1,value:void 0}};return{[Symbol.asyncIterator](){return{next(){if(c){let e=o.next();return e&&typeof e.then==`function`?{then(t,n){e.then(e=>{let r;try{r=i(e)}catch(e){u=!0,n(e);return}t(r)},e=>{u=!0,n(e)})}}:s?new Promise(t=>{wc(()=>t(i(e)))}):Bc(i(e))}if(l){let e=l;return l=null,e.then(i,d)}let e=o.next();return e&&typeof e.then==`function`?e.then(i,d):new Promise(t=>{wc(()=>{let n=i(e);for(;!e.done;){let t=o.next();if(t&&typeof t.then==`function`){l=t;break}e=t,e.done||(n=i(e))}t(n)})})},return(e){return l=null,il(o,e)}}}}},n,r)}function hl(e){let[t,n]=Ni(!1,{ownedWrite:!0}),r=e(t);return n(!0),r}function gl(e,t,n){if(n?.transparent||cl())return e(t,n);bc();let r=n?.ssrSource;if(r===`client`)return hl(r=>e(e=>r()?t(e):Gc,n));if(r===`hybrid`&&Z.has(zt(N()))){let r,i=e=>{let n=t(e);return r=sl(n),n},[a,o]=Ni(!1,{ownedWrite:!0}),s=!1,c=()=>{s||o(!0)},l=!1,u=!0,d=!1,f=e(e=>{if(s)return t(e);if(a()){s=!0;let n=t(e);return sl(n)?ul(n,void 0,e):n}if(l)return s=!0,t(e);let o;try{o=Uc(i,e,n)}catch(e){throw r&&(s=!0),e}return r?(l=!0,o!=null&&typeof o.then==`function`?fl(o,c,()=>s=!0):(u?d=!0:queueMicrotask(c),o)):o},n);return u=!1,d&&c(),f}let i=pl(e,t,n);return i===null?e(e=>Uc(t,e,n),n):i}function _l(e,t){return Z.hydrating?gl(G,e,t):G(e,t)}function vl(e,t){return typeof e!=`function`||!Z.hydrating?Ni(e,t):gl(Ni,e,t)}function yl(e,t){if(!Z.hydrating||cl())return ms(e,t);bc();let n=zt(N());if(Z.has(n)){let r=Z.load(n);if(r!==void 0){let n=!0;return ms(()=>{if(n)throw n=!1,r;return e()},t)}}return ms(e,t)}function bl(e,t){return n=>Uc(()=>e(n),n,t)}function xl(e,t,n,r,i){if(i===`client`)return hl(i=>e(e=>i()?t(e):Gc,n,r));if(i===`hybrid`){let i=zt(N());if(!Z.has(i))return e(t,n,r);let a=Z.load(i),o,s=e=>{let n=t(e);return o=sl(n),n},[c,l]=Ni(!1,{ownedWrite:!0}),u=!1,d=()=>{u||l(!0)},f=!1,p=!0,m=!1,h=e(e=>{if(u)return t(e);if(o===!1)return Uc(()=>t(e),e,r);if(c()){u=!0;let{proxy:n,activate:i}=ll(e,r?.shallow),a=t(n);return sl(a)?ul(a,i):a!=null&&typeof a.then==`function`?dl(a):a}if(f)return u=!0,t(e);zc(s,e);let n;try{n=Vc(a,()=>{},r)}catch(e){throw o&&(u=!0),e}return o?(f=!0,n!=null&&typeof n.then==`function`?fl(n,d,()=>u=!0):(p?m=!0:queueMicrotask(d),n)):n},n,r);return p=!1,m&&d(),h}let a=ml(e,t,n,r);return a===null?e(bl(t,r),n,r):a}function Sl(e,t,n,r){return cl()?e(t,n,r):(bc(),xl(e,t,n,r,r?.ssrSource))}function Cl(e,t){return Gt(Z.hydrating?t=>(bc(),e(t)):e,t)}function wl(e,t,n,r){if(!Z.hydrating||r?.transparent||cl())return e(t,n,r);if(r?.ssrSource===`client`){let i=!1;hl(a=>e(e=>a()?(i=!0,t(e)):e,(e,t)=>{if(i)return n(e,t)},r));return}bc(),e(e=>Uc(t,e),n,r)}function Tl(e,t,n){return wl(Fi,e,t,n)}function El(e,t,n){return wl(Pi,e,t,n)}function Dl(e,t,n){let r=N(),i=r&&r.id!=null?zt(r):void 0,a=i==null?void 0:globalThis._$HY?.modules?.[i];if(a){let e=n?a[n]:a.default;return()=>e}if(!e&&t)throw Error(`lazy() module "${t}" (hydration id "${i}") was not preloaded before hydration.`);return e}function Ol(){kc=Cl,Ac=_l,jc=vl,Mc=yl,Ic=Sl,Nc=Tl,Pc=El,Fc=su,Lc=Dl,Z.getNextContextId=pc,Z.isHydrationInProgress=xc,Z.onHydrationEnd=wc,Z.isClaiming=yc;let e=globalThis._$HY;if(e&&!e.fr){e.f||=Ul,e.fr={pending:Zl,subscribe:Ql,claim:Gl,release:Kl};let t=e.fe;e.fe=(e,n)=>{t&&t(e,n);for(let t of Bl)t(e,n)},$l(e)}Dc=Z.hydrating,Oc=Z.done,Object.defineProperty(Z,"hydrating",{get(){return Dc},set(e){let t=Dc;Dc=e,!t&&e?(gc=!1,Oc=!1,wn(!0),_c=null):t&&!e&&(_c&&=(En(_c),nl(_c),null),Ec())},configurable:!0,enumerable:!0}),Object.defineProperty(Z,"done",{get(){return Oc},set(e){Oc=e,e&&Tc()},configurable:!0,enumerable:!0})}var Q=(...e)=>(Ac||G)(...e),kl=(...e)=>(jc||Ni)(...e),Al=(...e)=>(Mc||ms)(...e),jl=(...e)=>typeof e[0]==`function`&&Z.hydrating?Ic(ss,e[0],e[1]??{},e[2]):ss(...e),Ml=(...e)=>(kc||Gt)(...e),Nl=(...e)=>(Nc||Fi)(...e),Pl=(...e)=>(Pc||Pi)(...e);function Fl(){wn(!1);let[e,t]=Ni(void 0,{equals:!1});return e(),wn(!0),t}function Il(e,t,n,r,i=!0){let a=Z.boundaryScopes?.get(t);if(!r())return;if(Ht(e)){Ec();return}let o=Z.registry,s=Z.gather,c=vc;a&&(Z.registry=a.registry,Z.gather=a.gather);try{i&&Z.gather?.(t),Dc=i,i&&(Tn(e),tl(e),_c=e,vc=e),n(),dt(),i&&(_c=null),Dc=!1,vc=c,i&&(En(e),nl(e)),dt()}finally{vc=c,a&&(Z.registry=o,Z.gather=s)}Ec()}function Ll(e,t){hc++,e._hp=1,Z.captureBoundaryScope?.(t);let n=!1,r=()=>{if(n)return!1;n=!0,hc--,e._hp=0,Z.boundaryScopes?.delete(t);let r=Rl.get(t);return r&&(r.claimed=!1),!0};ji(()=>{Ht(e)&&(Z.cleanupFragment?.(t),r()&&Ec())});let i=Fl();return[i,n=>Il(e,t,i,r,n),r]}var Rl=new Map,zl=new Set,Bl=new Set,Vl=new Map;function Hl(e){let t=Rl.get(e);return t||Rl.set(e,t={}),t}function Ul(e){let t=Hl(e);return!gc||t.claimed?globalThis.$dfr(e):(t.held=!0,0)}function Wl(e){let t=Rl.get(e);t&&t.held&&(t.held=!1,globalThis.$dfr(e))}function Gl(e){Hl(e).claimed=!0,Wl(e)}function Kl(e){let t=Rl.get(e);t&&(t.claimed=!1)}function ql(e,t){if(zl.has(t))return!1;let n=e.r[t+`_fr`];return!n||typeof n!=`object`?!1:!n.s||Yl(t)}function Jl(e){let t=globalThis._$HY;return t&&t.v&&t.v[e]||document.getElementById(e)?!1:!!document.getElementById(`pl-`+e)}function Yl(e){let t=globalThis._$HY;return t&&t.v&&t.v[e]?!1:!!document.getElementById(e)&&!!document.getElementById(`pl-`+e)}function Xl(e,t){if(!Yl(e))return t();let n=Ql(r=>{r===e&&(n(),queueMicrotask(t))})}function Zl(){let e=globalThis._$HY;if(!e||!e.r)return!1;for(let t in e.r)if(t.length>3&&t.endsWith(`_fr`)&&ql(e,t.slice(0,-3)))return!0;return!1}function Ql(e){return Bl.add(e),()=>Bl.delete(e)}function $l(e){typeof document<`u`&&document.readyState===`loading`&&document.addEventListener(`DOMContentLoaded`,()=>{if(e.r){for(let t in e.r){if(t.length<=3||!t.endsWith(`_fr`))continue;let n=e.r[t];n&&typeof n==`object`&&!n.s&&tu(e,t.slice(0,-3))}setTimeout(()=>eu(e))}},{once:!0})}function eu(e){let t=globalThis.$R;if(!t||typeof t!=`object`)return;let n,r=t=>{if(!t||typeof t!=`object`||typeof t.f!=`function`||!t.p||typeof t.p.then!=`function`||t.p.s)return;if(!n){n=new Map;for(let t in e.r)n.set(e.r[t],t)}let r=n.get(t.p);if(r!==void 0){delete e.r[r];return}let i=Error(`Hydration value was truncated: the stream ended before it settled.`);t.f(i),t.p.s=2,t.p.v=i,t.p.then(void 0,()=>{})};for(let e in t){let n=t[e];if(Array.isArray(n))for(let e of n)r(e);else r(n)}}function tu(e,t){if(zl.has(t))return;zl.add(t);let n=Error(`Hydration fragment "${t}" was truncated: the stream ended before its content arrived.`),r=e.r[t+`_fr`];r&&typeof r==`object`&&(r.s=2,r.v=n);let i=Vl.get(t);i&&(Vl.delete(t),i(n));for(let e of Bl)e(t)}function nu(e){return new Promise((t,n)=>Vl.set(e,n))}function ru(e,t,n,r=!0,i){let a=(i?Promise.race([Promise.resolve(e),i]):Promise.resolve(e)).then(()=>(e&&typeof e==`object`&&(e.s=1),!0),t=>(e&&typeof e==`object`&&(e.s=2,e.v=t),r));if(!n){a.then(e=>t(e));return}let o=n.then(()=>!0,e=>(iu(e),!1));Promise.all([a,o]).then(([e,n])=>t(n?e:!1))}function iu(e){console.error(`Hydration module preload failed; rendering boundary content on the client:`,e)}function au(e,t,n){Z.gather?.(e);let r=()=>queueMicrotask(t);return n?(n.then(r,e=>{iu(e),queueMicrotask(()=>t(!1))}),!0):(r(),!1)}var ou=(e,t,n)=>(Fc||ps)(e,t,n);function su(e,t,n){if(!Z.hydrating||cl())return ps(e,t,n);let r=!1;return G(()=>{let i=N(),a=i.id,o;if(Z.hydrating&&Z.has(a+`_assets`)){let e=Z.load(a+`_assets`);e&&typeof e==`object`&&(o=Z.loadModuleAssets?.(e))}if(Z.hydrating&&Z.has(a)){let s=Z.load(a),c;if(s&&(typeof s!=`object`||s.s==null?c=s:s.s===1||s.s===2?Z.gather?.(a):c=s),s&&typeof s==`object`&&s.s===1&&c==null&&!r){if(o){r=!0;let[,e]=Ll(i,a);au(a,e,o);return}return ps(e,t,n)}if(c){let[e,n,r]=Ll(i,a);if(c!==`$$f`)ru(c,n,o);else{let t=()=>{r()&&(e(),Ec())};o?o.then(()=>queueMicrotask(t),e=>{iu(e),queueMicrotask(t)}):queueMicrotask(t)}return t()}}if(Z.hydrating&&Z.has(a+`_fr`)&&!r){let s=Z.load(a+`_fr`);Wl(a);let c=s&&typeof s==`object`?s.s===1&&Yl(a)?0:s.s:0;if(c===1&&!o&&!Jl(a))return Z.gather?.(a),ps(e,t,n);r=!0;let[,l]=Ll(i,a);if(c===1&&Jl(a)){let e=()=>l(!1);return o?o.then(()=>queueMicrotask(e),t=>{iu(t),queueMicrotask(e)}):queueMicrotask(e),t()}if(c===1||c===2){if(c===2){s.catch?.(()=>{});let e=()=>l(!1);o?o.then(()=>queueMicrotask(e),t=>{iu(t),queueMicrotask(e)}):queueMicrotask(e);return}au(a,l,o);return}return Gl(a),ru(s,e=>e?Xl(a,()=>l(!0)):l(!1),o,!1,nu(a)),t()}if(o&&!Z.has(a)){let[,e]=Ll(i,a);o.then(()=>e(),t=>{iu(t),e(!1)});return}return ps(e,t,n)})}function cu(e,t,n){return V(()=>e(t||{}))}function lu(e,t,n){let r=t?.export,i,a,o=()=>{if(a)return a;let t=a=e();return t.then(e=>{i=()=>r?e[r]:e.default},()=>{a===t&&(a=void 0)}),t},s=e=>{Z.hydrating&&(i=Lc(i,n,r));let t=i;t||=(o(),G(()=>o().then(e=>r?e[r]:e.default)));let a;return G(()=>(a=(i||t)())?cu(a,e):``,{sync:!0})};return s.preload=o,s.moduleUrl=n,s}var uu=e=>`Stale read from <${e}>.`;function du(e){let t=`fallback`in e?{keyed:e.keyed,fallback:()=>e.fallback}:{keyed:e.keyed},n=N(),r,i=()=>wr(n,()=>Go(()=>e.each,e.children,t));return Z.hydrating&&(r=i()),()=>(r??=i())()}function fu(e){let t=e.keyed,n=G(()=>e.when,void 0),r=t?n:G(n,{equals:(e,t)=>!e==!t,sync:!0});return G(()=>{let i=r();if(i){let a=e.children;return typeof a==`function`&&a.length>0?V(t?()=>a(i):()=>a(()=>{if(!V(r))throw uu(`Show`);return n()}),cc):a}return e.fallback},{sync:!0})}function pu(e){let t=dc(()=>e.children),n=G(()=>{let e=t.toArray(),n=()=>void 0;for(let t=0;t<e.length;t++){let r=t,i=e[t];if(i==null)continue;let a=n,o=G(()=>a()?void 0:i.when,void 0),s=i.keyed?o:G(o,{equals:(e,t)=>!e==!t,sync:!0});n=()=>{let e=a();if(e)return e;let t=s();return t?[r,t,o,i]:void 0}}return n},{sync:!0});return G(()=>{let t=n()();if(!t)return e.fallback;let[r,i,a,o]=t,s=o.children;return typeof s==`function`&&s.length>0?o.keyed?V(()=>s(i),cc):V(()=>s(()=>{if(V(n)()?.[0]!==r)throw uu(`Match`);return a()}),cc):s},{sync:!0})}function mu(e){return e}function hu(e){return Al(()=>e.children,(t,n)=>{let r=e.fallback;return typeof r==`function`?r(t,n):r})}function gu(e){return ou(()=>e.children,()=>e.fallback,`on`in e?{on:()=>e.on}:void 0)}var $=Z,_u=`modulepreload`,vu=function(e){return`/`+e},yu={},bu=function(e){return e.pathname.endsWith(`.css`)},xu=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=vu(t,n);let r=s(t);if(r.href in yu)return;yu[r.href]=!0;let i=bu(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:_u,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Su={INPUT:{value:1,defaultValue:2,checked:1,defaultChecked:2},SELECT:{value:1},OPTION:{value:1,selected:1,defaultSelected:2},TEXTAREA:{value:1,defaultValue:2},VIDEO:{muted:1,defaultMuted:2},AUDIO:{muted:1,defaultMuted:2}},Cu=new Set([`innerHTML`,`textContent`,`innerText`,`children`]),wu=Symbol(`slot`),Tu=Symbol(`host`),Eu=new Set([`beforeinput`,`click`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`]),Du=new Set(`altGlyph.altGlyphDef.altGlyphItem.animate.animateColor.animateMotion.animateTransform.circle.clipPath.color-profile.cursor.defs.desc.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.font.font-face.font-face-format.font-face-name.font-face-src.font-face-uri.foreignObject.g.glyph.glyphRef.hkern.image.line.linearGradient.marker.mask.metadata.missing-glyph.mpath.path.pattern.polygon.polyline.radialGradient.rect.set.stop.svg.switch.symbol.text.textPath.tref.tspan.use.view.vkern`.split(`.`)),Ou=new Set(`annotation.annotation-xml.maction.math.menclose.merror.mfenced.mfrac.mi.mmultiscripts.mn.mo.mover.mpadded.mphantom.mprescripts.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msubsup.msup.mtable.mtd.mtext.mtr.munder.munderover.semantics`.split(`.`)),ku={svg:`http://www.w3.org/2000/svg`,mathml:`http://www.w3.org/1998/Math/MathML`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`},Au={transparent:!0,sync:!0},ju={sync:!0};function Mu(e,t,n){Nl(e,t,n?{sync:!0,...n,transparent:!n.scope}:Au)}function Nu(e){return Q(()=>e(),ju)}function Pu(e,t,n,r){let i=n.length,a=t.length,o=i,s=0,c=0,l=t[a-1],u=l[wu],d=l.parentNode===e&&(!u||u===r)?l.nextSibling:r||null,f=null,p,m,h=t=>{if(!t)return!1;let n=t[wu];return t.parentNode===e&&(!n||n===r)};for(;s<a||c<o;){if(t[s]===n[c]&&h(t[s])){s++,c++;continue}for(;t[a-1]===n[o-1]&&h(t[a-1]);)a--,o--;if(a===s){let t;if(o<i){if(c){let i=n[c-1],a=i[wu];t=i.parentNode===e&&(!a||a===r)?i.nextSibling:d}else t=n[o-c]}else t=d;for(;c<o;){let i=n[c++];e.insertBefore(i,t),r&&(i[wu]=r)}}else if(o===c)for(;s<a;){let n=t[s++];if(!f||!f.has(n)){let t=n[wu];n.parentNode===e&&(!t||t===r)&&n.remove()}}else if((p=t[s])===n[o-1]&&n[c]===t[a-1]&&p.parentNode===e&&(!(m=p[wu])||m===r)){if(r)do{let n=t[--a];if(e.insertBefore(n,p),n[wu]=r,c++,s>=a-1||c>=o)break}while(t[s]===n[o-1]&&n[c]===t[a-1]);else do if(e.insertBefore(t[--a],p),c++,s>=a-1||c>=o)break;while(t[s]===n[o-1]&&n[c]===t[a-1])}else{if(!f){f=new Map;let e=c;for(;e<o;)f.set(n[e],e++)}let i=f.get(t[s]);if(i!=null){if(c<i&&i<o){let l=s,u=1,p;for(;++l<a&&l<o&&(p=f.get(t[l]))!=null&&p===i+u;)u++;if(u>i-c){let a=t[s],o=a[wu],l=a.parentNode===e&&(!o||o===r)?a:d;for(;c<i;){let t=n[c++];e.insertBefore(t,l),r&&(t[wu]=r)}}else{let i=t[s++],a=n[c++],o=i[wu];i.parentNode===e&&(!o||o===r)?e.replaceChild(a,i):e.insertBefore(a,d),r&&(a[wu]=r)}}else s++}else{let n=t[s++],i=n[wu];n.parentNode===e&&(!i||i===r)&&n.remove()}}}}var Fu=new Set([`title`,`meta`,`link`,`style`,`script`,`base`]),Iu=/^[a-zA-Z_][a-zA-Z0-9_:.-]*$/,Lu=new Set([`preload`,`modulepreload`,`prefetch`,`preconnect`,`dns-prefetch`,`stylesheet`]),Ru=[`as`,`crossorigin`,`type`,`media`,`imagesrcset`,`imagesizes`],zu=new Set([`crossorigin`,`integrity`,`referrerpolicy`,`fetchpriority`]);function Bu(e){return typeof e==`function`?e():e}function Vu(e,t){let n={};for(let r in e)n[r]=t&&r in t?t[r]:Bu(e[r]);return n}function Hu(e){let t=e.tag;if(t===`link`){let t=Bu(e.props&&e.props.rel);return{resource:Lu.has(t),rel:t}}return t===`style`?{resource:!!(e.props&&`href`in e.props)}:t===`script`?{resource:!!(e.props&&`src`in e.props)}:{resource:!1}}function Uu(e,t){if(t==null||t===!1)return null;if(e===`imagesrcset`||e===`imagesizes`)return typeof t==`string`&&t!==``?t:null;let n=t===!0?``:String(t);return e===`as`?Wu(n):e===`crossorigin`?n.length===15&&n.toLowerCase()===`use-credentials`?n.toLowerCase():`anonymous`:n}function Wu(e){return e.replace(/[A-Z]/g,e=>String.fromCharCode(e.charCodeAt(0)+32))}function Gu(e,t){let n=String(t.href||t.src||``),r=`res:`+e+`:`+(t.rel||``)+`:`+n.length+`:`+n;for(let e=0;e<Ru.length;e++){let n=Ru[e],i=Uu(n,t[n]);i!==null&&(r+=`:`+n+`=`+i.length+`:`+i)}return r}function Ku(e,t,n,r){if(e===`title`)return`title`;if(e===`base`)return`base`;if(e===`meta`&&t.charset!=null)return`charset`;if(n!=null)return e+`:key:`+n;if(e===`meta`){for(let e of[`name`,`property`,`http-equiv`])if(t[e]!=null)return`meta:`+e+`:`+t[e]+(t.media==null?``:`:media=`+t.media);return r}if(e===`link`){let e=t.rel||``;return e===`icon`||e===`apple-touch-icon`?`link:`+e+(t.sizes==null?``:`:sizes=`+t.sizes)+(t.type==null?``:`:type=`+t.type):`link:`+e+`:`+(t.href||``)}return r}function qu(e){let t=new Map,n=e.slice().sort((e,t)=>e.seq-t.seq);for(let e=0;e<n.length;e++){let r=n[e],i=new Map;for(let e=0;e<r.tags.length;e++){let t=r.tags[e],n=i.get(t.identity);n||i.set(t.identity,n=[]),n.push(t)}for(let[e,n]of i)e===`title`?t.set(e,{seq:r.seq,tags:[n[n.length-1]]}):t.set(e,{seq:r.seq,tags:n})}return t}var Ju=Symbol.for(`solid.ServerFunctionMetadata`);function Yu(e){if(typeof e==`function`)return e[Ju]||void 0}function Xu(e){return typeof e==`function`&&!!e[Ju]}var Zu=Symbol.for(`solid.ServerFunctionRPC`);function Qu(){return globalThis[Zu]}var $u=new WeakMap,ed=e=>{let t=$u.get(e);t||(wr(null,()=>{t=Q(()=>e,{transparent:!0})}),$u.set(e,t)),t()},td=`_$$`,nd=`_$SOLID_EVENT_OWNER`,rd=Symbol(),id=Object.prototype.hasOwnProperty,ad={},od=new Set,sd=new Map;function cd(){}function ld(e){return null}var ud=cd,dd=cd;function fd(e){let t=globalThis._$HY&&globalThis._$HY.r;if(!t||!(e in t))return;let n=t[e];return delete t[e],typeof n==`object`&&n&&typeof n.then==`function`?n.s===1?{status:`resolved`,value:n.v}:n.s===2?(n.then(void 0,cd),{status:`rejected`,error:n.v}):{status:`pending`,promise:n}:{status:`resolved`,value:n}}function pd(e,t,n,r={}){let i;_d(t);try{Ml(a=>{if(i=a,r.onError&&(N()[He]=r.onError),t===document){let t=e();Mu(()=>hs(t),()=>{})}else{let i=e();Xd(t,()=>i,t.firstChild?null:void 0,n,{...r.insertOptions,schedule:!0})}},{id:r.renderId}),dt()}catch(e){throw i&&i(),vd(t),e}return()=>{i(),vd(t),t.textContent=``}}function md(e,t,n){let r=document.createElement(`template`);return r.innerHTML=e,n===2?r.content.firstChild.firstChild:r.content.firstChild}function hd(e,t){let n;return t===1?r=>document.importNode(n||=md(e,r,t),!0):r=>(n||=md(e,r,t)).cloneNode(!0)}function gd(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];od.has(n)||(od.add(n),sd.forEach((e,t)=>xd(n,t,e)))}}function _d(e){let t=yd(e,e);t&&(t.roots=(t.roots||0)+1)}function vd(e){let t=sd.get(e);t&&(t.roots>1?t.roots--:delete t.roots),bd(e,e)}function yd(e,t=e){if(!e||!t)return;let n=sd.get(e);return n||sd.set(e,n={owners:new Map,handlers:new Map}),n.owners.set(t,(n.owners.get(t)||0)+1),od.forEach(t=>xd(t,e,n)),n}function bd(e,t=e){let n=sd.get(e);if(!n)return;let r=n.owners.get(t);r>1?n.owners.set(t,r-1):n.owners.delete(t),!n.owners.size&&(n.handlers.forEach((t,n)=>e.removeEventListener(n,t)),sd.delete(e))}function xd(e,t,n){if(n.handlers.has(e))return;let r=e=>zf(e,t,n);n.handlers.set(e,r),t.addEventListener(e,r)}function Sd(e,t){let n=e,r=0;for(;n;){if(t.owners.has(n))return{owner:n,distance:r};r++,n=n._$host||n.parentNode||n.host}}var Cd=null,wd=Symbol.for(`solid.element-claims`);function Td(e){return(Cd||=globalThis[wd]=[]).push(e),()=>{let t=Cd.indexOf(e);t>-1&&Cd.splice(t,1)}}function Ed(e){if(Cd!==null)for(let t=0;t<Cd.length;t++)Cd[t](e);return e}function Dd(e,t,n){if(Ff(e))return;let r=t===`multiple`&&e.localName===`select`;if(n==null||n===!1)e.removeAttribute(t);else if(e.setAttribute(t,n===!0?``:n),r&&!e._$multiple){let t=e.options;for(let e=0;e<t.length;e++)t[e].defaultSelected&&(t[e].selected=!0)}r&&(e._$multiple=!0),Cd!==null&&(t===`href`||t===`action`)&&Ed(e)}function Od(e,t,n,r){Ff(e)||(r==null||r===!1?e.removeAttributeNS(t,n.indexOf(`:`)>-1?n.split(`:`).pop():n):e.setAttributeNS(t,n,r===!0?``:r))}function kd(e,t,n){if(typeof t==`number`&&(t=``+t),typeof n==`number`&&(n=``+n),Ff(e)){e._$classes=t&&typeof t==`object`?If(t):void 0;return}if(t==null||t===!1){(n||e._$classes)&&(e.removeAttribute(`class`),e._$classes=void 0);return}if(typeof t==`string`){e._$classes=void 0,t!==n&&e.setAttribute(`class`,t);return}let r;typeof n==`string`?(r={},e.removeAttribute(`class`)):r=e._$classes||If(n||{}),t=If(t);let i=Object.keys(t),a=Object.keys(r),o,s;for(o=0,s=a.length;o<s;o++){let n=a[o];n&&n!==`undefined`&&!t[n]&&e.classList.remove(n)}for(o=0,s=i.length;o<s;o++){let n=i[o],a=!!t[n];n&&n!==`undefined`&&r[n]!==a&&a&&e.classList.add(n)}e._$classes=t}function Ad(e,t,n,r){if(r){let r=td+t,i;Array.isArray(n)?(i=n[1],e[r]=n[0]):e[r]=n,e[`${r}Data`]=i;return}if(Array.isArray(n)){let r=n[0],i=t=>r.call(e,n[1],t);return i[rd]=n,e.addEventListener(t,i),i}return e.addEventListener(t,n,typeof n!=`function`&&n),n}function jd(e,t,n){if(Ff(e))return;if(!t){(n||e._$styles)&&(Dd(e,`style`),e._$styles=void 0);return}let r=e.style;if(typeof t==`string`)return e._$styles=void 0,r.cssText=t;typeof n==`string`&&(r.cssText=``,n=void 0);let i=e._$styles;i||=e._$styles=n?{...n}:{};let a,o;for(o in i)(!id.call(t,o)||t[o]==null)&&(r.removeProperty(o),delete i[o]);for(o in t)id.call(t,o)&&(a=t[o],a!=null&&a!==i[o]&&(r.setProperty(o,a),i[o]=a))}function Md(e){if(typeof e!=`object`||!e)return e;if(Array.isArray(e))return e.map(Md);if(e[q]!==e)return e;let t=Ts(e,2),n={};for(let r=0;r<t.length;r++){let i=t[r];typeof i==`string`&&(n[i]=e[i])}return n}function Nd(e,t,n,r,i){let a={},o=t=>{let n=t.ref;n!==a.ref&&(typeof n==`function`||Array.isArray(n))&&Hd(()=>n,e),Zd(e,t,!0,a,!0)};if(Array.isArray(t))return!n&&!(r!==void 0&&r(`children`))&&Xd(e,()=>{for(let e=t.length-1;e>=0;e--){let n=Fd(t[e]);if(n!=null&&Id(n,`children`))return Ld(n,`children`)}}),Mu(()=>Rd({},t,void 0,r),o),a;if(!n&&!(r!==void 0&&r(`children`))){if(typeof t!=`function`&&t!=null&&As(t)){let n=Object.getOwnPropertyDescriptor(t,`children`);n!==void 0&&(n.get===void 0?Xd(e,n.value):Xd(e,()=>t.children))}else Xd(e,()=>{let e=Fd(t);return e!=null&&Id(e,`children`)?Ld(e,`children`):void 0})}return Mu(()=>{let e=Fd(t),n={},i=Is(e);if(i!==void 0)return Pd(n,i,r);if(e!=null){let t=Fs(e);t instanceof bs?Bd(n,t,1,r):t===void 0?Bd(n,e,q in e?2:0,r):Rd(n,t.sources,t.kinds,r)}return n},o),a}function Pd(e,t,n){for(let[r,i]of t){if(typeof r!=`string`||r===`children`||n!==void 0&&n(r))continue;let t=i[r];e[r]=r===`style`||r===`class`?Md(t):t}return e}function Fd(e){return typeof e==`function`?e():e}function Id(e,t){let n=Fs(e);return n instanceof bs?Es(n,1,t):t in e}function Ld(e,t){let n=Fs(e);return n instanceof bs?Ds(n,1,t):e[t]}function Rd(e,t,n,r){let i=[],a=[];for(let e=0;e<t.length;e++)zd(i,a,t[e],n===void 0?3:n[e]);for(let t=0;t<i.length;t++)Bd(e,i[t],a[t],r,i,a,t+1);return e}function zd(e,t,n,r){if(r!==3){e.push(n),t.push(r);return}if(n=Fd(n),n==null)return;let i=Fs(n);if(i instanceof bs)e.push(i),t.push(1);else if(i!==void 0){let n=i.sources,r=i.kinds;for(let i=0;i<n.length;i++)zd(e,t,n[i],r[i])}else e.push(n),t.push(q in n?2:0)}function Bd(e,t,n,r,i,a,o){let s=Ts(t,n);outer:for(let c=0;c<s.length;c++){let l=s[c];if(typeof l!=`string`||l===`children`||r!==void 0&&r(l))continue;if(i!==void 0){for(let e=o;e<i.length;e++)if(Es(i[e],a[e],l))continue outer}let u=Ds(t,n,l);e[l]=l===`style`||l===`class`?Md(u):u}}function Vd(e,t){Array.isArray(e)?e.flat(1/0).forEach(e=>e&&e(t)):e(t)}function Hd(e,t){let n=V(e);wr(null,()=>Vd(n,t))}function Ud(e){return e.$s=!0,e}var Wd={scope:!0},Gd=null;function Kd(){Gd={claimInitial(e,t,n){return Ff(e)&&(!t&&n===void 0&&e?n=Jd(e):Array.isArray(n)&&qd(n)),n},reclaimRegion(e,t,n){if(!$.hydrating||!e||!t.isConnected)return e;let r=Array.isArray(e)?e[0]:e;if(!r||!r.nodeType||r.isConnected)return e;let i;if(n){i=[];let e=n.previousSibling,t=0;for(;e;){if(e.nodeType===8){let n=e.nodeValue;if(n===`/`)t++;else if(n===`$`){if(t===0)break;t--}}i.unshift(e),e=e.previousSibling}}else return Jd(t);return qd(i)},dedupEvent(e){return!!($.registry&&$.events&&$.events.find(([t,n])=>n===e))}}}function qd(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=r.nodeType;if(i===8&&r.nodeValue===`!$`){r.remove();continue}Yd(r,i)||(e[t++]=r)}return e.length=t,e}function Jd(e){let t=e.childNodes,n=[];for(let e=0,r=t.length;e<r;e++){let i=t[e],a=i.nodeType;if(a===8&&i.nodeValue===`!$`){i.remove(),e--,r--;continue}Yd(i,a)||n.push(i)}return n}function Yd(e,t){return t===8?e.nodeValue.startsWith(`pl-`):t===1&&e.localName===`template`&&e.id.startsWith(`pl-`)}function Xd(e,t,n,r,i){let a=n!==void 0,o=i&&i.host;if(a&&!r&&(r=[]),Gd!==null&&(r=Gd.claimInitial(e,a,r)),typeof t!=`function`&&(t=Vf(t,r,a,!0),typeof t!=`function`)){Bf(e,t,r,n),o&&Hf(t,o);return}if(a&&r.length===0){let t=document.createTextNode(``);e.insertBefore(t,n),r=[t]}let s=r;Mu(r=>{Gd!==null&&(s=Gd.reclaimRegion(s,e,n));let c=Vf(t(),s,a,!0);return typeof c==`function`?(Mu(()=>(Gd!==null&&(s=Gd.reclaimRegion(s,e,n)),Vf(c,s,a)),t=>{s=Bf(e,t,s,n),o&&Hf(s,o)},r!==void 0&&!(i&&i.schedule)?{...i,schedule:!0}:i),ad):c},t=>{t!==ad&&(s=Bf(e,t,s,n),o&&Hf(s,o))},t.$s?i?{...i,scope:!0}:Wd:i)}function Zd(e,t,n,r={},i=!1){let a=e.nodeName;t||={};for(let n in r)if(!(n in t)){if(n===`children`)continue;r[n]=Rf(e,n,null,r[n],i,a)}for(let o in t){if(o===`children`){n||Bf(e,Vf(t.children,void 0,!1));continue}r[o]=Rf(e,o,t[o],r[o],i,a)}}var Qd=100,$d=new Map;function ef(e){return e.policy===`exclusive`?`x|`+e.key:e.type===`inline-style`?`i|`+e.id:e.type+`|`+e.href}function tf(e,t,n,r){let i=document.querySelectorAll(e);outer:for(let e=0;e<i.length;e++)if(i[e].getAttribute(t)===n){if(!r)return i[e];for(let t=0;t<Ru.length;t++){let n=Ru[t];if(Uu(n,r[n])!==Uu(n,i[e].getAttribute(n)))continue outer}return i[e]}return null}function nf(e,t){for(let n in t)e.setAttribute(n,t[n])}function rf(e){let t;if(e.type===`inline-style`)t=tf(`style[data-asset]`,`data-asset`,e.id),t||(t=document.createElement(`style`),t.setAttribute(`data-asset`,e.id),t.textContent=e.content||``);else{let n=e.type===`module`?`modulepreload`:`stylesheet`;t=tf(`link[rel="${n}"]`,`href`,e.href),t||(t=document.createElement(`link`),t.rel=n,t.href=e.href)}return e.attrs&&nf(t,e.attrs),t.isConnected||document.head.appendChild(t),t}var af=Promise.resolve();function of(e,t){if(e.loadPromise)return;let n=e.element,r=n.sheet!=null;if(!r&&t&&typeof performance<`u`&&performance.getEntriesByName&&(r=performance.getEntriesByName(n.href).length>0),r){e.loadState=`loaded`,e.loadPromise=af;return}e.loadState=`pending`,e.loadPromise=new Promise(t=>{let r=n=>{e.loadState=n,t()};n.addEventListener(`load`,()=>r(`loaded`),{once:!0}),n.addEventListener(`error`,()=>r(`errored`),{once:!0})})}function sf(e){if(e.policy===`exclusive`||e.type===`inline-style`)return;let t=ef(e),n=$d.get(t);n||(n={count:0,element:null,timer:null},$d.set(t,n));let r=!0;if(!n.element||!n.element.isConnected){let t=tf(`link[rel="${e.type===`module`?`modulepreload`:`stylesheet`}"]`,`href`,e.href);!t&&e.type===`style`&&(t=tf(`link[rel="preload"][as="style"]`,`href`,e.href)),t||(r=!1,t=document.createElement(`link`),e.type===`style`?(t.setAttribute(`rel`,`preload`),t.setAttribute(`as`,`style`)):t.setAttribute(`rel`,`modulepreload`),t.setAttribute(`href`,e.href),document.body||t.setAttribute(`blocking`,`render`)),e.attrs&&nf(t,e.attrs),t.isConnected||document.head.appendChild(t),n.element=t,n.loadState=void 0,n.loadPromise=void 0}return e.type===`style`&&of(n,r),n}function cf(e){let t=ef(e),n=$d.get(t);if(e.policy===`exclusive`){n||(n={original:e.get(),set:e.set,writers:[]},$d.set(t,n));let r={value:e.value};n.writers.push(r),n.set(r.value);let i=!1;return()=>{if(i)return;i=!0;let e=n.writers.indexOf(r),a=e===n.writers.length-1;n.writers.splice(e,1),a&&(n.writers.length?n.set(n.writers[n.writers.length-1].value):(n.set(n.original),$d.delete(t)))}}n||(n={count:0,element:null,timer:null},$d.set(t,n)),n.timer&&(clearTimeout(n.timer),n.timer=null),n.count++,!n.element||!n.element.isConnected?n.element=rf(e):e.type===`style`&&n.element.getAttribute(`rel`)===`preload`&&(n.element.removeAttribute(`as`),n.element.setAttribute(`rel`,`stylesheet`));let r=!1;return()=>{r||(r=!0,!(--n.count>0)&&(n.timer=setTimeout(()=>{$d.delete(t),n.element&&n.element.remove()},Qd)))}}var lf=null,uf=0,df=0,ff=null,pf=null,mf=null,hf=!1,gf=new Set;function _f(){if(lf)return;lf=[],ff=new Map,pf=new Map;let e=document.querySelector(`title`);mf=e?e.hasAttribute(`data-dh`)?e.getAttribute(`data-dhf`):e.textContent:null,globalThis._$HY&&(globalThis._$HY.h=vf)}function vf(e){for(let t=0;t<e.length;t++){let n=e[t],r=n[0]===`t`?`title`:n[1];if(!ff.has(r)){if(n[0]===`t`)bf(n[1]);else if(n[0]===`r`){let e=yf(r);for(let t=0;t<e.length;t++)e[t].remove()}else{let e=document.createElement(n[2]);for(let t in n[3])e.setAttribute(t,n[3][t]);n[4]!=null&&(e.textContent=n[4]),e.setAttribute(`data-dh`,r),document.head.appendChild(e)}}}}function yf(e){let t=document.head.querySelectorAll(`[data-dh]`),n=[];for(let r=0;r<t.length;r++)t[r].getAttribute(`data-dh`)===e&&n.push(t[r]);return n}function bf(e){let t=document.querySelector(`title`);return t||(t=document.createElement(`title`),document.head.appendChild(t)),t.textContent=e,t.setAttribute(`data-dh`,`title`),t}function xf(){hf||(hf=!0,queueMicrotask(Sf))}function Sf(){if($.hydrating){setTimeout(Sf,0);return}hf=!1;let e=qu(lf);for(let[t,n]of ff)if(!e.has(t)){if(ff.delete(t),pf.delete(t),t===`title`){if(mf!=null){let e=bf(mf);e.removeAttribute(`data-dh`),e.removeAttribute(`data-dhf`)}}else for(let e=0;e<n.length;e++)n[e].remove()}for(let[t,n]of e){let e=``;for(let t=0;t<n.tags.length;t++)e+=n.tags[t].tag+JSON.stringify(n.tags[t].props)+`|`;if(pf.get(t)===e||(pf.set(t,e),t===`base`||t===`charset`))continue;if(t===`title`){let e=n.tags[0].props.children;bf(e==null?``:String(e)),ff.set(t,[]);continue}let r=yf(t),i=[];for(let e=0;e<n.tags.length;e++)i.push(wf(n.tags[e],t,r));for(let e=0;e<r.length;e++)i.indexOf(r[e])===-1&&r[e].remove();ff.set(t,i)}}function Cf(e,t){let n=document.createElement(e);for(let e in t){if(e===`children`||e===`ref`||e.slice(0,2)===`on`||!Iu.test(e))continue;let r=t[e];r!=null&&r!==!1&&n.setAttribute(e,r===!0?``:String(r))}return t.children!=null&&(n.textContent=String(t.children)),n}function wf(e,t,n){for(let t=0;t<n.length;t++)if(Tf(n[t],e))return n.splice(t,1)[0];let r=Cf(e.tag,e.props);return r.setAttribute(`data-dh`,t),document.head.appendChild(r),r}function Tf(e,t){if(e.tagName.toLowerCase()!==t.tag)return!1;for(let n in t.props){if(n===`children`||n===`ref`||n.slice(0,2)===`on`||!Iu.test(n))continue;let r=t.props[n];if(r==null||r===!1){if(e.hasAttribute(n))return!1}else if(e.getAttribute(n)!==(r===!0?``:String(r)))return!1}let n=t.props.children;return(n==null?``:String(n))===e.textContent}function Ef(e,t){let n=Gu(e,t);if(gf.has(n))return;gf.add(n);let r=t.href||t.src,i=null;e===`link`&&r==null&&typeof t.imagesrcset==`string`?i=tf(`link[rel="${t.rel}"]`,`href`,null,t):r!=null&&(i=e===`link`?tf(`link[rel="${t.rel}"]`,`href`,r,t):e===`script`?tf(`script[src]`,`src`,r):tf(`style[href]`,`href`,r)),i||document.head.appendChild(Cf(e,t))}function Df(e){let t={type:e.rel===`stylesheet`?`style`:`module`,href:e.href},n=e.rel===`stylesheet`&&e.href!=null,r=null;for(let t in e){if(t===`rel`||t===`href`||(zu.has(t)||(n=!1),!Iu.test(t)))continue;let i=e[t];i!=null&&i!==!1&&((r||={})[t]=i===!0?``:String(i))}r&&(t.attrs=r),Mu(()=>{let e=sf(t);n&&!$.hydrating&&e.loadState===`pending`&&typeof ed==`function`&&ed(e.loadPromise)},()=>cf(t))}function Of(e){_f();let t={seq:-1,tags:null},n=++df;Mu(()=>{let t=typeof e==`function`?e():e;Array.isArray(t)||(t=[t]);let r=[],i=[];for(let e=0;e<t.length;e++){let a=t[e];if(!a||!Fu.has(a.tag))continue;let o=Hu(a),s=Vu(a.props||{},o.rel===void 0?void 0:{rel:o.rel});if(o.resource)a.tag===`link`&&(s.rel===`stylesheet`||s.rel===`modulepreload`)?Df(s):a.tag===`link`?Ef(a.tag,s):i.push({tag:a.tag,props:s});else{let t=Bu(a.key);r.push({tag:a.tag,props:s,identity:Ku(a.tag,s,t,`u:c`+n+`:`+e)})}}return{replaceable:r,resources:i}},e=>{for(let t=0;t<e.resources.length;t++)Ef(e.resources[t].tag,e.resources[t].props);return t.tags=e.replaceable,t.seq<0&&(t.seq=++uf),lf.indexOf(t)===-1&&lf.push(t),xf(),()=>{let e=lf.indexOf(t);e>-1&&lf.splice(e,1),xf()}})}function kf(e){let t=globalThis._$HY;if(!t)return;let n=[];for(let r in e){if(t.modules[r])continue;let i=new URL(e[r],document.baseURI).href;t.loading[r]||(t.loading[r]=xu(()=>import(i).then(e=>{t.modules[r]=e},e=>{throw delete t.loading[r],e}),[])),n.push(t.loading[r])}return n.length?Promise.all(n).then(()=>{}):void 0}function Af(e,t,n={}){if(Ol(),Kd(),globalThis._$HY.done)return pd(e,t,[...t.childNodes],n);let r=(t.nodeType===9?t:t.ownerDocument).head;if(r&&t.contains(r)){let e=r.firstChild;for(;e&&e.nodeType===1&&e.hasAttribute(`data-dh`)&&!e.hasAttribute(`data-dhf`);){let t=e.nextSibling;r.appendChild(e),e=t}}n.renderId||=``,globalThis._$HY.modules||(globalThis._$HY.modules={}),globalThis._$HY.loading||(globalThis._$HY.loading={}),$.completed=globalThis._$HY.completed,$.events=globalThis._$HY.events,$.load=e=>globalThis._$HY.r[e],$.has=e=>e in globalThis._$HY.r,$.gather=e=>qf(t,e),$.loadModuleAssets=kf,$.cleanupFragment=e=>{let t=document.getElementById(`pl-`+e);if(t){let n=t.nextSibling;for(;n;){let t=n.nextSibling;if(n.nodeType===8&&n.nodeValue===`pl-`+e){n.remove();break}n.remove(),n=t}t.remove()}},$.registry=new Map,$.boundaryScopes||=new Map,$.captureBoundaryScope=e=>{$.registry&&$.boundaryScopes.set(e,{registry:$.registry,gather:$.gather})},$.hydrating=!0;let i=globalThis._$HY.r,a=i&&(i[n.renderId+`_assets`]||i._assets);if(a&&typeof a==`object`){let r=kf(a);if(r){qf(t,n.renderId);let i=$.registry,a=$.gather,o;return r.then(()=>{$.registry=i,$.gather=a,$.hydrating=!0;try{o=pd(e,t,[...t.childNodes],n)}finally{$.hydrating=!1}},r=>{if($.hydrating=!1,$.registry=void 0,t.nodeType===9){(globalThis.reportError||console.error)(r);return}console.error(`Hydration module preload failed, falling back to client render:`,r),o=pd(e,t,[...t.childNodes],n)}),()=>o&&o()}}try{return qf(t,n.renderId),pd(e,t,[...t.childNodes],n)}finally{$.hydrating=!1}}function jf(e){let t,n;if(!Ff()||!(t=$.registry.get(n=Jf()))){if(!e)throw Error(`Hydration Mismatch. Unable to find DOM nodes for hydration key: ${n}`);return e(!0)}return $.completed&&$.completed.add(t),$.registry.delete(n),t}function Mf(e,t){for(;e&&e.localName!==t;)e=e.nextSibling;return e}function Nf(e){let t=e,n=0,r=[];if(Ff(e))for(;t;){if(t.nodeType===8){let e=t.nodeValue;if(e===`$`)n++;else if(e===`/`){if(n===0)return[t,r];n--}}r.push(t),t=t.nextSibling}return[t,r]}function Pf(){$.events&&!$.events.queued&&(queueMicrotask(()=>{let{completed:e,events:t}=$;if(t){for(t.queued=!1;t.length;){let[n,r]=t[0];if(!e.has(n))return;t.shift();let i,a,o,s;for(let[e,t]of sd){if(!t.handlers.has(r.type))continue;let n=Sd(r.target,t);n&&(i?(s||=[{container:i,state:a,distance:o}],s.push({container:e,state:t,distance:n.distance})):(i=e,a=t,o=n.distance))}if(s){s.sort((e,t)=>e.distance-t.distance);for(let e=0;e<s.length;e++)zf(r,s[e].container,s[e].state)}else i&&zf(r,i,a)}$.done&&($.events=_$HY.events=null,$.completed=_$HY.completed=null)}}),$.events.queued=!0)}function Ff(e){if(!$.hydrating||$.isClaiming&&!$.isClaiming())return!1;if(!e||e.isConnected)return!0;let t=$.claimRoots;if(t){for(let n=0;n<t.length;n++)if(t[n].contains(e))return!0}return!1}function If(e){if(Array.isArray(e)){let t={};Lf(e,t),e=t}if(e&&typeof e==`object`){let t={},n=Object.keys(e);for(let r=0,i=n.length;r<i;r++){let i=n[r];if(!e[i])continue;let a=i.trim().split(/\s+/);for(let e=0,n=a.length;e<n;e++)a[e]&&(t[a[e]]=!0)}return t}return e}function Lf(e,t){for(let n=0,r=e.length;n<r;n++){let r=e[n];Array.isArray(r)?Lf(r,t):typeof r==`object`&&r?Object.assign(t,r):typeof r!=`boolean`&&(r||r===0)&&(t[r]=!0)}}function Rf(e,t,n,r,i,a){if(t===`style`)return jd(e,n,r),n;if(t===`class`)return kd(e,n,r),n;if(n===r&&Su[a]?.[t]!==1)return r;if(t===`ref`)return!i&&n&&Hd(()=>n,e),n;let o=t.indexOf(`:`)>-1;if(!o&&t.slice(0,2)===`on`){let i=t.slice(2).toLowerCase(),a=Eu.has(i);if(!a&&r){if(Array.isArray(n)&&typeof r==`function`&&r[rd]===n)return r;e.removeEventListener(i,r,typeof r!=`function`&&r)}if(a||n){let t=Ad(e,i,n,a);if(a&&gd([i]),!a)return t}}else if(o&&t.slice(0,5)===`prop:`||Cu.has(t)||Su[a]?.[t]){if(o)t=t.slice(5);else if(Ff(e))return n;t===`value`&&a===`SELECT`?queueMicrotask(()=>e.value=n)||(e.value=n):(t===`value`||t===`defaultValue`)&&(a===`INPUT`||a===`TEXTAREA`)?e[t]=n??``:e[t]=n}else{let r=o&&ku[t.split(`:`)[0]];r?Od(e,r,t,n):Dd(e,t,n)}return n}function zf(e,t,n){if(Gd!==null&&Gd.dedupEvent(e))return;let r=e[nd],i;if(r){if(r===!0||r===t||!t.contains(r))return;i=r}let a=n&&(n.owners.size===1&&n.owners.has(t)?t:Sd(e.target,n)?.owner);if(n&&!a||a&&a===i)return;e[nd]=a||!0;let o=i||e.target,s=td+e.type,c=e.target,l=a||t||e.currentTarget,u=t=>Object.defineProperty(e,"target",{configurable:!0,value:t}),d=()=>{let t=o[s];if(t&&!o.disabled){let n=o[`${s}Data`];if(n===void 0?typeof t==`function`?t.call(o,e):t.handleEvent(e):t.call(o,n,e),e.cancelBubble)return}return o.host&&typeof o.host!=`string`&&!o.host._$host&&o.contains(e.target)&&u(o.host),!0},f=()=>{for(;o&&d()&&o!==l&&o.parentNode!==l;)o=o._$host||o.parentNode||o.host};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return o||l||document}}),i)i===e.target&&(o=i._$host||i.parentNode||i.host),o&&o!==l&&f();else if(e.composedPath){let t=e.composedPath();if(t.length){u(t[0]);for(let e=0;e<t.length&&(o=t[e],d());e++){if(o._$host){o=o._$host,f();break}if(o===l||o.parentNode===l)break}}else f()}else f();u(c)}function Bf(e,t,n,r){if(Gd!==null&&Ff(e)){if(t&&t!==n){let e=Array.isArray(t);for(let r of e?t:[t])if(r&&r.nodeType){if(!Ff(r))return n}else if(e&&(typeof r==`string`||typeof r==`number`))return n}return t}if(t===n)return t;let i=typeof t,a=r!==void 0;if(i===`string`||i===`number`){let r=typeof n;r===`string`||r===`number`?e.firstChild.data=t:Wf(e,n)?e.textContent=t:(Gf(e,n),e.insertBefore(document.createTextNode(t),e.firstChild))}else if(t===void 0)Kf(e,n,r);else if(t.nodeType)Array.isArray(n)?Kf(e,n,a?r:null,t):n!=null&&n.nodeType?n.parentNode===e?e.replaceChild(t,n):e.appendChild(t):n!=null&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t),r&&(t[wu]=r);else if(Array.isArray(t)){let i=Array.isArray(n);for(let e=0,r=t.length;e<r;e++){let r=t[e],a=typeof r;if(a===`string`||a===`number`){let a=i?n[e]:void 0;a&&a.nodeType===3?(a.data!==``+r&&(a.data=r),t[e]=a):t[e]=document.createTextNode(r)}}t.length===0?Kf(e,n,r):i?n.length===0?Uf(e,t,r):Pu(e,n,t,r):(n!=null&&Kf(e,n),Uf(e,t))}return t}function Vf(e,t,n,r){if(e=hs(e,{skipNonRendered:!0,doNotUnwrap:r}),r&&typeof e==`function`)return e;if(n&&!Array.isArray(e)&&(e=[e??``]),$.hydrating&&Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n],i=t&&t[n],a=typeof r;(a===`string`||a===`number`)&&i&&i.nodeType===3&&Ff(i)&&(e[n]=i)}return e}function Hf(e,t){if(Array.isArray(e))for(let n=0,r=e.length;n<r;n++)Hf(e[n],t);else e&&e.nodeType&&e[Tu]!==t&&(e[Tu]=t,Object.defineProperty(e,"_$host",{get:t,configurable:!0}))}function Uf(e,t,n=null){for(let r=0,i=t.length;r<i;r++){let i=t[r];e.insertBefore(i,n),n&&(i[wu]=n)}}function Wf(e,t){if(t==null)return!0;if(Array.isArray(t))return t.length?e.firstChild===t[0]&&e.lastChild===t[t.length-1]:e.firstChild===null;if(t===``)return e.firstChild===null;if(t.nodeType)return e.firstChild===t&&e.lastChild===t;let n=e.firstChild;return n!==null&&n.nodeType===3&&e.lastChild===n}function Gf(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++){let r=t[n];r.parentNode===e&&r.remove()}else if(t.nodeType)t.parentNode===e&&t.remove();else{let t=e.firstChild;t&&t.nodeType===3&&t.remove()}}function Kf(e,t,n,r){if(n===void 0)return Wf(e,t)?e.textContent=``:Gf(e,t);if(t.length){let i=!1;for(let a=t.length-1;a>=0;a--){let o=t[a];if(r!==o){let t=o[wu],s=o.parentNode===e&&(!t||t===n);r&&!i&&!a?s?e.replaceChild(r,o):e.insertBefore(r,n):s&&o.remove()}else i=!0}}else r&&e.insertBefore(r,n);r&&n&&(r[wu]=n)}function qf(e,t){let n=e.querySelectorAll(`*[_hk]`),r=t?null:e.querySelectorAll(`[data-fid]`),i=r?r.length:0,a=$.registry;for(let e=0;e<n.length;e++){let o=n[e],s=o.getAttribute(`_hk`);if(t){if(!s.startsWith(t))continue}else if(i!==0){let e=!1;for(let t=0;t<i;t++)if(r[t].contains(o)){e=!0;break}if(e)continue}a.has(s)||a.set(s,o)}}function Jf(){return $.getNextContextId()}var Yf=Symbol.for(`solid.ResponseEnvelope`);function Xf(e){return!!(e&&typeof e==`object`&&e[Yf])}var Zf=`X-Revalidate`,Qf=Symbol.for(`solid.component-binding`),$f=Symbol(`solid.dynamic-flight`);function ep(e){return e!==null&&(typeof e==`function`||typeof e==`object`)&&e[Qf]||void 0}function tp(e,t){if(t?.static)return np(V(e));let n=new Set,r,i=(e,t)=>{let i=ep(e);if(!i)return e;r=i.address;let a=ep(t);if(a&&a.component===i.component){for(let e of n)e(i.address);return t}return e},a=(e,t)=>{if(e===t)return!0;let i=ep(e),a=ep(t);if(!i||!a||i.component!==a.component)return!1;if(i.address===a.address)return!0;if(r===void 0)return!1;if(a.address!==r){r=a.address;for(let e of n)e(a.address)}return!0},o=Q(t=>{let n=e();return!n||typeof n.then!=`function`?i(n,t):{[$f]:n}},{lazy:!0,equals:a});return e=>{if($.hydrating)try{V(o)}catch{}let t=0,s=Q(e=>{let n=o();if(!n||!n[$f])return i(n,e);let r=n[$f],a=++t;return{then:(n,o)=>r.then(r=>{let o=a===t?i(r,e):r;return n?n(o):o},o)}},{equals:a});return Q(()=>{let t=s();switch(typeof t){case`function`:{let i=ep(t);if(i){let[t,a]=kl(r??=i.address,{ownedWrite:!0});return n.add(a),ji(()=>n.delete(a)),V(()=>i.component(e,t))}return V(()=>t(e))}case`string`:return rp(t,e)}})}}function np(e){if(typeof e==`function`){let t=ep(e);if(t){let e=()=>t.address;return n=>V(()=>t.component(n,e))}return t=>V(()=>e(t))}return typeof e==`string`?t=>rp(e,t):()=>void 0}function rp(e,t){let n=$.hydrating,r=n?jf():ip(e,V(()=>t.is),V(()=>t.xmlns));return Nd(r,t),n&&Pf(),r}function ip(e,t=void 0,n=void 0){return n?document.createElementNS(n,e,{is:t}):Du.has(e)?document.createElementNS(ku.svg,e):Ou.has(e)?document.createElementNS(ku.mathml,e):document.createElement(e,{is:t})}function ap(e,t){}var op=/^(?:[a-z0-9]+:)?\/\//i,sp=/^\/+|(\/)\/+$/g,cp=`http://sr`;function lp(e,t=!1){let n=e.replace(sp,`$1`);return n?t||/^[?#]/.test(n)?n:`/`+n:``}var up=e=>new URL(cp+lp(e.split(/[?#]/,1)[0])).pathname.toLowerCase().replace(/\/$/,``);function dp(e,t){let n=t.toLowerCase().replace(/\/+$/,``),r=e.toLowerCase();return!n||!r||r===n||r.startsWith(n+`/`)}var fp=e=>{let t=new URLSearchParams(e);return t.sort(),t.toString()};function pp(e,t,n,r){if(t===void 0)return{active:!1,current:!1};let i=up(e.pathname),a=up(t),o=i===a,s=t.split(`#`,1)[0],c=s.indexOf(`?`);return{active:o||!r&&a!==``&&a!==up(n)&&i.startsWith(a+`/`),current:o&&fp(e.search)===fp(c<0?``:s.slice(c))}}function mp(e,t,n){if(op.test(t))return;let r=lp(e),i=n&&lp(n),a=``;return a=!i||t.startsWith(`/`)?r:i.toLowerCase().indexOf(r.toLowerCase())===0?i:r+i,(a||`/`)+lp(t,!a)}function hp(e,t){if(e==null)throw Error(t);return e}function gp(e,t){return lp(e).replace(/\/*(\*.*)?$/g,``)+lp(t)}function _p(e,t){let n=e[`~standard`].validate(t);if(n instanceof Promise)throw Error(`Async Standard Schema validation is not supported for search params`);return n}function vp(e){let t=Object.create(null);return e.searchParams.forEach((e,n)=>{n in t?Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]:t[n]=e}),{...t}}function yp(e,t,n){let[r,i]=e.split(`/*`,2),a=r.split(`/`).filter(Boolean),o=a.length;return e=>{let r=e.split(`/`);if(r[0]===``&&r.shift(),r.length&&r[r.length-1]===``&&r.pop(),r.includes(``))return null;let s=r.length-o;if(s<0||s>0&&i===void 0&&!t)return null;let c={path:o?``:`/`,params:{}},l=n;for(let e=0;e<o;e++){let t=a[e],n=t[0]===`:`,i=n?r[e]:r[e].toLowerCase(),o=n?t.slice(1):t.toLowerCase();if(n&&bp(i,l?.[o]))c.params[o]=i;else if(n||!bp(i,o))return null;c.path+=`/${i}`}if(i){let e=s?r.slice(-s).join(`/`):``;if(bp(e,l?.[i]))c.params[i]=e;else return null}return c}}var bp=(e,t)=>t===void 0||(typeof t==`function`?t(e):Array.isArray(t)?t.includes(e):t instanceof RegExp?t.test(e):t===e);function xp(e){let[t,n]=e.pattern.split(`/*`,2),r=t.split(`/`).filter(Boolean);return r.reduce((e,t)=>e+(t.startsWith(`:`)?2:3),r.length-(n===void 0?0:1))}function Sp(e){let t=new Map,n=N();return new Proxy({},{get(r,i){return t.has(i)||wr(n,()=>t.set(i,Q(()=>e()[i]))),t.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(t,n){return n in e()}})}function Cp(e,t){let n=new URLSearchParams(e);Object.entries(t).forEach(([e,t])=>{t==null||t===``||t instanceof Array&&!t.length?n.delete(e):t instanceof Array?(n.delete(e),t.forEach(t=>{n.append(e,String(t))})):n.set(e,String(t))});let r=n.toString();return r?`?${r}`:``}function wp(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length),i=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)i.push(n+=t[1]),r=r.slice(t[0].length);return wp(r).reduce((e,t)=>[...e,...i.map(e=>e+t)],[])}function Tp(e,t){return Object.defineProperty(e,"name",{value:t,writable:!1,configurable:!1}),e}var Ep=e=>String(e).split(`/`).map(encodeURIComponent).join(`/`),Dp=Symbol.for(`solid.Href`);function Op(e=e=>e,t=``){let n=(t,n=``)=>e(t||`/`)+n;function r(e){return new Proxy((...t)=>{let i=e;for(let e=0;e<t.length;e++){let r=t[e];if(typeof r==`object`&&r){let a=typeof t[e+1]==`string`?`#${t[e+1]}`:``;return n(i,Cp(``,r)+a)}i+=`/${Ep(r)}`}return t.length?r(i):n(i)},{get(t,i){return i===`toString`||i===Symbol.toPrimitive?()=>n(e):typeof i==`symbol`?i===Dp?e||`/`:void 0:r(`${e}/${i}`)}})}return r(lp(t))}var kp=Symbol(`solid-router.serverRoute`);function Ap(e){return e?.[kp]}function jp(e,t,n){let r=e.key?.search;if(r){let e={...n},i=_p(r,e);return{params:{...t},search:i.issues?e:i.value}}return{params:{...t}}}var Mp=(e,t)=>e===t||!!e&&!!t&&typeof e==`object`&&typeof t==`object`&&Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(n=>e[n]===t[n]);function Np(e,t){return Mp(e.params,t.params)&&Mp(e.search,t.search)}var Pp=100;function Fp(e,t){let n=typeof t.value==`function`?t.value(e):t.value;if(!(n===void 0||n===e.value&&t.state===e.state))return{...t,value:n}}var Ip=lc(),Lp=lc();function Rp(e){try{return uc(e)}catch{return}}var zp=()=>hp(uc(Ip),`<A> and 'use' router primitives can be only used inside a Route.`),Bp=()=>zp().location,Vp=e=>encodeURIComponent(e).replace(/%(2B|40|3A|24|26|2C|3B|3D)/g,e=>decodeURIComponent(e)),Hp=new WeakMap,Up=0,[Wp,Gp]=kl(0);function Kp(){return Wp()}function qp(e){let t=Hp.get(e);return t||Hp.set(e,t={thunk:e}),t}function Jp(e){if(e.resolved)return e.resolved;if(e.error!==void 0)throw e.sweep||(e.sweep=!0,queueMicrotask(()=>e.error=e.sweep=void 0)),e.error;return e.promise||=Promise.resolve(e.thunk()).then(t=>(e.resolved=Array.isArray(t)?t:t.default||t.routes||[],Up++,Gp(Up),e.resolved),t=>{throw e.error=t??Error(),e.sweep=!0,queueMicrotask(()=>e.error=e.sweep=void 0),e.promise=void 0,t})}function Yp(e){let t=[];for(let n of e)n.route.lazy&&!n.route.lazy.resolved&&t.push(n.route.lazy);return t}function Xp(e,t){let n=e+`/*`;return{key:t,originalPath:`*`,pattern:n,matcher:yp(n),lazy:t}}function Zp(e,t=``){let{component:n,preload:r,children:i,info:a}=e,o=!i||Array.isArray(i)&&!i.length,s={key:e,component:n,preload:r,info:a};return $p(e.path).reduce((n,r)=>{for(let i of wp(r)){let a=gp(t,i),c=o?a:a.split(`/*`,1)[0];c=c.split(`/`).map(e=>/^[:*]/.test(e)?e:Vp(e)).join(`/`),n.push({...s,originalPath:r,pattern:c,matcher:yp(c,!o,e.matchFilters)})}return n},[])}function Qp(e,t=0){return{routes:e,score:xp(e[e.length-1])*1e4-t,matcher(t){let n=[];for(let r=e.length-1;r>=0;r--){let i=e[r],a=i.matcher(t);if(!a)return null;n.unshift({...a,route:i})}return n}}}function $p(e){return Array.isArray(e)?e:[e]}function em(e,t=``,n=[],r=[]){let i=$p(e);for(let e=0,a=i.length;e<a;e++){let a=i[e];if(a&&typeof a==`object`){a.path===void 0&&(a.path=``);let e=Zp(a,t);for(let t of e){n.push(t);let e=a.children;if(typeof e==`function`){let i=qp(e);if(i.resolved)e=i.resolved;else{n.push(Xp(t.pattern,i)),r.push(Qp([...n],r.length)),n.pop(),n.pop();continue}}let i=Array.isArray(e)&&e.length===0;if(e&&!i)em(e,t.pattern,n,r);else{let e=Qp([...n],r.length);r.push(e)}n.pop()}}}return n.length?r:r.sort((e,t)=>t.score-e.score)}function tm(e,t){for(let n=0,r=e.length;n<r;n++){let r=e[n].matcher(t);if(r)return r}return[]}function nm(e){let t={};for(let n=0;n<e.length;n++)Object.assign(t,e[n].params);return t}function rm(e,t,n){let r=Q((t=new URL(cp))=>{let n=e();try{return new URL(n[0]===`/`?cp+n:n,cp)}catch{return t}},{equals:(e,t)=>e.href===t.href}),i=Q(()=>r().pathname),a=Q(()=>r().search),o=Q(()=>r().hash),s=Q(()=>vp(new URL(a(),cp)));return{get pathname(){return i()},get search(){return a()},get hash(){return o()},get state(){return t()},get key(){return``},query:n?n(s):Sp(s)}}var im,am=new Map;function om(e){return am.set(e,im&&im(e)),()=>{let t=am.get(e);am.delete(e),t&&t()}}function sm(e){if(!im){im=e;for(let[t,n]of am)n||am.set(t,e(t))}}var cm;function lm(e){cm||=e}var um;function dm(){return um||Rp(Ip)?.intent?.()}var fm=!1;function pm(){return fm}function mm(e){fm=e}function hm(t,n,r,i={}){let{signal:[a,o],utils:s={}}=t,c=s.parsePath||(e=>e),l=s.renderPath||(e=>e),u=s.beforeLeave||{},d=mp(``,i.base||``),f=V(a);if(d===void 0)throw Error(`${d} is not a valid base path`);d&&!f.value&&o({value:d,replace:!0,scroll:!1,_navigation:1});let p=rm(()=>a().value,()=>a().state,s.queryWrapper),m,h=N(),g=new WeakMap,_=e=>{let t=g.get(e);return t||(t=wr(h,()=>Q(()=>{let t=Jp(e);return t instanceof Promise?t.then(()=>void 0):void 0},void 0)),g.set(e,t)),t()},v=Q(()=>{let e=typeof i.transformUrl==`function`?i.transformUrl(p.pathname):p.pathname,t=tm(n(),e),r=Yp(t);if(r.length)for(let e of r)_(e);return t},void 0),ee=Q(()=>Si(()=>{try{v()}catch(t){if(t instanceof e)throw t}p.search,p.hash}),void 0),y=()=>ee()||Si(a),b=()=>{if(!Si(a))return;let e=xi(a)._navigation;return e===-1?`native`:e&&e>0?`navigate`:void 0},te=()=>{if(!y())return;let e=xi(a);return e._navigation&&e._navigation>0?e:void 0},ne=()=>nm(v()),x=s.paramsWrapper?e=>s.paramsWrapper(e,n):e=>Sp(e),re=x(ne),ie={pattern:d,params:re,path:()=>d,outlet:()=>null,resolvePath(e){return mp(d,e)}};return{base:ie,location:p,params:re,wrapParams:x,isRouting:y,intent:b,get pendingTarget(){return te()},renderPath:l,parsePath:c,navigatorFactory:oe,matches:v,beforeLeave:u,preloadRoute:S,singleFlight:i.singleFlight===void 0||i.singleFlight,get submissions(){return m||=kl([],{ownedWrite:!0})}};function ae(e,n,r){V(()=>{if(typeof n==`number`){n&&s.go&&s.go(n);return}let{replace:i,resolve:l,scroll:d,state:f}={replace:!1,resolve:!0,scroll:!0,...r},m=t=>{if(t[0]===`#`&&(t=c(t)),!l)return mp((!t||t[0]===`?`)&&p.pathname||``,t);if(t[0]===`/`)return e.resolvePath(t);let n=new URL(t,cp+p.pathname+p.search+p.hash);return n.origin===`http://sr`?n.pathname+n.search+n.hash:void 0},h=e=>Error(`Path '${e}' is not a routable path`),g=xi(a),_,v,ee=typeof n==`string`?void 0:n[Dp];if(ee===void 0&&typeof n==`function`){let e=n;_=t=>{let n=e(t),r=m(n);if(r===void 0)throw h(n);return r},v=_(g)}else if(typeof n!=`string`&&(n=ee||n.toString()),v=m(n),v===void 0)throw h(n);let y=g._navigation!==void 0&&g._navigation>0&&(Si(a)||t.inflight?.()===g)?g._navigation:0;if(y>=Pp)throw Error(`Too many redirects`);(!u.current||u.current.confirm(v,r))&&wr(null,()=>o({value:_||v,state:f,replace:y?g.replace:i,scroll:y?g.scroll:d,_navigation:y+1}))})}function oe(e){return e=e||Rp(Lp)||ie,((t,n)=>ae(e,t,n))}function S(e,t){let i=tm(n(),e.pathname),a=i.find(e=>e.route.lazy&&!e.route.lazy.resolved);if(a)try{Jp(a.route.lazy).then(()=>S(e,t),()=>{})}catch{}let o;try{o=V(v)}catch{}let s=vp(e),c=(e,t,n,r)=>{let i=jp(r,e,t);return i.search===void 0&&(i.search=n),i},l=um;um=`preload`;for(let n in i){let{route:a,params:l}=i[n],{preload:u,component:d}=a;d?.preload?.();let f=o&&o[n],m=f&&f.route.key===a.key&&Np(c(l,s,e.search,a),c(f.params,p.query,p.search,a));fm=!0,t&&!m&&wr(r(),()=>{let t=Ap(d);t&&t.call(jp(a,l,s)),u&&u({params:l,location:{pathname:e.pathname,search:e.search,hash:e.hash,query:s,state:null,key:``},intent:`preload`})}),fm=!1}um=l}}function gm(e,t,n,r,i=()=>[r()]){let{base:a,location:o,wrapParams:s}=e,{pattern:c,component:l,preload:u}=r().route,d=Q(()=>r().path),f=s(()=>nm(i()));l?.preload?.(),fm=!0;let p=u?u({params:f,location:o,intent:e.intent?.()||`initial`}):void 0;return fm=!1,{parent:t,pattern:c,params:f,path:d,outlet:()=>{if(!l)return n();let e={params:f,location:o,data:p,get children(){return n()}},t=Ap(l);if(t){let n=Q(()=>jp(r().route,r().params,o.query),{equals:Np});return t.render(n,e)}return cu(l,e)},resolvePath(e){return mp(a.path(),e,d())}}}var _m=`sveltia-cms.user`;function vm(){try{let e=globalThis.localStorage?.getItem(_m);if(!e)return null;let t=JSON.parse(e);return t?.backendName&&(t.token||[`local`,`proxy`].includes(t.backendName))?t:null}catch{return null}}function ym(e){let t=t=>{(t.key===null||t.key===_m)&&e(vm())};return globalThis.addEventListener?.(`storage`,t),()=>globalThis.removeEventListener?.(`storage`,t)}function bm(e){let t=e?._collection??e;return!t?.url||!t?.name||!vm()?null:{name:t.name,type:t.type,label:t.label,slug:t.slug,url:t.url,createUrl:t.createUrl??null}}var xm=e=>e==null||e===``,Sm=(e,t)=>{if(e&&typeof e==`object`)return t.split(`.`).reduce((e,t)=>e&&e[t]!==void 0?e[t]:void 0,e)};function Cm(e,t,n){let r=(e,t)=>xm(e)?void 0:n[t.indexId]?.[String(e)],i=(e,t)=>r(e,t)?.key??null,a=(t,n)=>{let i=r(t,n);if(!i)return null;let a=e[i.key];if(!i.item)return c(a,i.key,``);let[o,s]=i.item;return c(Sm(a,o)[s],i.key,o)},o=(e,t)=>xm(e)?null:Array.isArray(e)?e.map(e=>i(e,t)).filter(Boolean):i(e,t),s=(e,t)=>xm(e)?null:Array.isArray(e)?e.map(e=>a(e,t)).filter(Boolean):a(e,t);function c(e,n=``,r=``){if(!e||typeof e!=`object`)return e;let i={};if(n)for(let[e,r]of Object.entries(t))(n===e||n.startsWith(e+`/`)||e.endsWith(n)||n.endsWith(e))&&Object.assign(i,r);return Array.isArray(e)?new Proxy(e,{get(e,t,i){if(t===`toJSON`)return()=>e;let a=Reflect.get(e,t,i);return typeof t==`string`&&!isNaN(Number(t))?c(a,n,r):a}}):new Proxy(e,{get(e,t,a){if(t===`toJSON`)return()=>e;let l=Reflect.get(e,t,a);if(typeof t!=`string`||t===`then`||t===`constructor`||t===`_collection`)return l;let u=r?`${r}.`:``,d=[`${u}${t}`];typeof e.type==`string`&&d.push(`${u}${e.type}.${t}`);let f=d.find(e=>i[e]);if(f){if(xm(l))return null;let e=i[f],t=s(l,e),n=o(l,e);return{value:l,path:n,content:t,toJSON:()=>({value:l,path:n,content:t})}}return c(l,n,`${u}${t}`)}})}return new Proxy(e,{get(t,n,r){if(n===`toJSON`)return()=>t;if(n===`raw`)return e;let i=Reflect.get(t,n,r);return i&&c(i,String(n))}})}var wm={title:`Sparkstonepdx.com Admin`,logo:`/sparkstone-logo.svg`,url:`/admin/`},Tm=Cm({"/data/contributors/adam-sparks":{name:`Adam Sparks`,profilePhoto:`/1746036416537.webp`,role:`Founder`,testimony:`Everyone should have the freedom to build software they’re proud of without sacrificing joy, balance, or humanity.`,body:`
undefined
`,collectionType:`Contributors`,_collection:{name:`Contributors`,type:`Contributors`,label:`Contributors`,slug:`adam-sparks`,url:`/admin/#/collections/Contributors/entries/adam-sparks`,createUrl:`/admin/#/collections/Contributors/new`}},"/data/contributors/lin-wang":{name:`Lin Wang`,profilePhoto:`/signal-2025-12-18-173706_002.webp`,role:`Analytics & AI Engineering Lead`,testimony:`It’s early in the process so that every contribution you can make is significant in shaping the products and there are real intellectual debates to get things done.`,body:`
undefined
`,collectionType:`Contributors`,_collection:{name:`Contributors`,type:`Contributors`,label:`Contributors`,slug:`lin-wang`,url:`/admin/#/collections/Contributors/entries/lin-wang`,createUrl:`/admin/#/collections/Contributors/new`}},"/data/contributors/monica-welty":{name:`Monica Welty`,profilePhoto:`/img_4164.webp`,role:`Cofounder of Grim Choices`,testimony:`Working with Sparkstone you are guaranteed purpose, humor and heart. With a thoughtful and adaptable approach, their platforms are engaging, intuitive, and genuinely fun to use.`,body:`
undefined
`,collectionType:`Contributors`,_collection:{name:`Contributors`,type:`Contributors`,label:`Contributors`,slug:`monica-welty`,url:`/admin/#/collections/Contributors/entries/monica-welty`,createUrl:`/admin/#/collections/Contributors/new`}},"/data/contributors/you":{name:`You?`,profilePhoto:`/gemini_generated_image_ltkdraltkdraltkd.webp`,role:``,testimony:`We're still small, but if you're inspired, reach out and we may be able to make space for you.`,body:``,collectionType:`Contributors`,_collection:{name:`Contributors`,type:`Contributors`,label:`Contributors`,slug:`you`,url:`/admin/#/collections/Contributors/entries/you`,createUrl:`/admin/#/collections/Contributors/new`}},"/data/home":{featuredOn:[{url:`https://podcasts.apple.com/us/podcast/08-backend-magic-you-never-see/id1823317397?i=1000739770799`,name:`Behind the Creative Curtain`,logo:{alt:`Text graphic reading "Behind the Creative Curtain" on a red theater background framed by lights`,aspectRatio:1,optimized:`/behind-the-creative-curtain.opt.webp`,original:`/behind-the-creative-curtain.webp`,tiny:`/behind-the-creative-curtain.tiny.webp`,widgetType:`optimizedImage`}},{url:`https://www.narwhalpod.com/explore-the-pod`,name:`NarwhalPod`,logo:{alt:`Logo featuring the text Narwhal Pod and four cute cartoon narwhals swimming around it`,aspectRatio:4.021447721179625,optimized:`/narwhalpod-r3-lockup-alt.opt.webp`,original:`/narwhalpod-r3-lockup-alt.webp`,tiny:`/narwhalpod-r3-lockup-alt.tiny.webp`,widgetType:`optimizedImage`}},{url:`https://creativemornings.com/blog/fun-stuff-to-click-on-479`,name:`Creative Mornings`,logo:{alt:`Creative Mornings logo in white text on a black speech bubble background`,aspectRatio:3.1894736842105265,optimized:`/creativemornings.com_cities_pdx.opt.webp`,original:`/creativemornings.com_cities_pdx.png`,tiny:`/creativemornings.com_cities_pdx.tiny.webp`,widgetType:`optimizedImage`}}],testimonials:[`allie-6ad7c2ecd738`,`wendy-shih-cac86a8c3361`],featured:[{type:`case_study`,entry:`2026-07-29-the-map-i-never-meant-to-build`},{type:`product`,entry:`liveframe`},{type:`case_study`,entry:`2026-09-14-a-library-that-fits-in-a-free-library`}],services:[{title:`Custom Applications`,description:`the internal tool or portal you can't buy off the shelf`},{title:`Project rescue`,description:`take over a build that stalled, or clean up after a vendor`},{title:`Fractional CTO`,description:`support for teams that need direction, architecture, or product leadership without full-time overhead.`},{title:`Technical review`,description:`a paid second opinion on a vendor's proposal before you sign`}],body:`
import content from 'virtual:vite-sveltia'

<div class="highlight">
<h1 style='font-size: 1.5rem'>Custom software and websites for medical practices, law firms, and specialty contractors in Portland.</h1>
</div>

I'm Adam. I run Sparkstone, a one-person software studio. I build the systems your business actually runs on: intake, scheduling, referral portals, client dashboards, and the sites that feed them. I work on a monthly retainer, so the person who built your systems is the one keeping them running.

<Link role='button' item={content['/data/links/book-a-call']}/>
`,collectionType:`home`,_collection:{name:`_singletons`,type:`home`,label:`Home Page`,slug:`home`,url:`/admin/#/collections/_singletons/entries/home`,createUrl:null}},"/data/json-ld/org":{"@context":`https://schema.org`,"@type":`Organization`,name:`Sparkstone LLC`,url:`https://sparkstonepdx.com`,logo:{"@type":`ImageObject`,url:`https://sparkstonepdx.com/favicon-96x96.png`},sameAs:[`https://github.com/Sparkstonepdx/`,`https://bsky.app/profile/sparkstonepdx.com`,`https://www.linkedin.com/company/sparkstonepdx`,`https://www.youtube.com/@sparkstonepdx`]},"/data/links/book-a-call":{label:`Book a call`,description:`A free 20-minute call to talk through what your business needs and whether I'm the right fit.`,url:`https://cal.com/sparks/free-20-minute-consultation`,parent:``,visible:!0,customAttributes:`data-cal-link="sparks/free-20-minute-consultation"             data-cal-namespace="free-20-minute-consultation"             data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'`,body:``,collectionType:`links`,_collection:{name:`links`,type:`links`,label:`Link`,slug:`book-a-call`,url:`/admin/#/collections/links/entries/book-a-call`,createUrl:`/admin/#/collections/links/new`}},"/data/menus/footer":{name:`Footer`,displayTitle:`Footer`,items:[{type:`page_item`,item:`case-studies`,label:``},{type:`page_item`,item:`products`,label:``},{type:`page_item`,item:`blog`,label:``},{type:`page_item`,item:`open-source`,label:``},{type:`link_item`,item:`book-a-call`,label:``},{type:`page_item`,item:`free-tools`,label:``},{type:`page_item`,item:`mentions`,label:``},{type:`page_item`,item:`alignment`,label:``},{type:`page_item`,item:`about`,label:``}],body:``,collectionType:`menus`,_collection:{name:`menus`,type:`menus`,label:`Menu`,slug:`footer`,url:`/admin/#/collections/menus/entries/footer`,createUrl:`/admin/#/collections/menus/new`}},"/data/menus/header":{name:`Header`,displayTitle:`Header`,items:[{type:`page_item`,item:`case-studies`},{type:`page_item`,item:`products`},{type:`page_item`,item:`blog`},{type:`page_item`,item:`open-source`},{type:`link_item`,item:`book-a-call`}],body:``,collectionType:`menus`,_collection:{name:`menus`,type:`menus`,label:`Menu`,slug:`header`,url:`/admin/#/collections/menus/entries/header`,createUrl:`/admin/#/collections/menus/new`}},"/data/pages/[...404]":{route:`/[...404]`,heading:`Page not found`,intro:`That link didn't go anywhere. Here's the way back.`,seo:{title:`Page not found | Sparkstone LLC`,description:`That page doesn't exist. Find case studies, products, open source projects, and the blog.`},body:`

<img class='post-thumbnail' style='object-fit: contain;' src='/not-found.webp' alt='A tabby cat peering out from a wooden wall cabinet, sitting among rust-colored fabric, looking straight at the camera. confused' />
# 404 Not Found

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
`,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`[...404]`,url:`/admin/#/collections/pages/entries/%5B...404%5D`,createUrl:`/admin/#/collections/pages/new`}},"/data/pages/about":{route:`/about`,heading:`About`,intro:``,seo:{title:``,description:`I'm Adam Sparks. I build and maintain the software Portland medical practices, law firms, and specialty contractors run on, on a monthly retainer.`,image:``,keywords:[]},body:`import { Contributors } from '~/components/about-section'

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
`,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`about`,url:`/admin/#/collections/pages/entries/about`,createUrl:`/admin/#/collections/pages/new`}},"/data/pages/alignment":{route:`/links/aligned`,heading:`Alignment`,intro:`Projects, tools, and writing that shape how I build software.`,body:`## Projects and writing aligned with my values

This is a small, intentional list of projects, tools, and writing I respect and learn from.

These links are here because they align with how I think about software, agency, and care.

<LinkPreview url='https://henry.codes/writing/a-website-to-destroy-all-websites/' />

<LinkPreview url='https://www.davidmcraney.com/howmindschangehome' />

<LinkPreview url="https://app.thestorygraph.com/books/a90c7f47-0dea-48d3-867b-33a5f664aae1" />

<LinkPreview title='White Fragility' description="Why it's so hard for white people to talk about racism" url='https://bookshop.org/p/books/white-fragility-why-it-s-so-hard-for-white-people-to-talk-about-racism-dr-robin-diangelo/9bb312f941d2a646' />

<LinkPreview url='https://app.thestorygraph.com/books/c45e8002-8791-46fd-90e8-177f67b11513' />

<LinkPreview url='https://www.youtube.com/watch?v=3C1Gnxhfok0' />
`,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`alignment`,url:`/admin/#/collections/pages/entries/alignment`,createUrl:`/admin/#/collections/pages/new`}},"/data/pages/blog":{route:`/posts`,heading:`Blog`,intro:`How I build software that lasts: project write-ups, technical deep dives, and lessons from a one-person studio in Portland.`,body:``,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`blog`,url:`/admin/#/collections/pages/entries/blog`,createUrl:`/admin/#/collections/pages/new`}},"/data/pages/case-studies":{route:`/case-studies`,heading:`Case Studies`,intro:`Real projects, start to finish: the problem, what I built, and how it held up. Custom software from a one-person studio in Portland.`,body:``,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`case-studies`,url:`/admin/#/collections/pages/entries/case-studies`,createUrl:`/admin/#/collections/pages/new`}},"/data/pages/contact":{route:`/contact`,heading:`Contact`,intro:``,seo:{title:``,description:``,image:``,keywords:[]},body:`
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
`,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`contact`,url:`/admin/#/collections/pages/entries/contact`,createUrl:`/admin/#/collections/pages/new`}},"/data/pages/free-tools":{route:`/tools`,heading:`Free Tools`,intro:`Some things I build for my own projects turn out to be useful on their own. These are free to use, need no account, and don't hold your data hostage. Most of them end up helping with something in the real world: a sign on a table, a photo for a flyer, a drawing that moves.`,seo:{title:`Free Tools by Sparkstone | QR Codes, Background Remover & More`,description:`Free browser tools from Sparkstone, a Portland software studio. Make QR code table tents, remove image backgrounds privately, and animate drawings. No signup.`,image:`/pxl_20260918_033916822.cutout-1.png`,keywords:[]},body:`
<LinkPreview

  url="https://liveframe.app/promo/qr-table"

  title="QR Code & Table Tent Generator"

  description="Make a styled QR code for any link, then print foldable table tents for events, counters, or waiting rooms."

/>

<LinkPreview

url="https://sparkstonepdx.github.io/bgremove/"

  title="Background Remover"

  description="Remove the background from a photo right in your browser. Your images never leave your computer."/>

<LinkPreview

  url="https://github.com/sparkstonepdx/animlab"

  title="AnimLab"

  description="Pick out elements of a drawing and animate them. Runs from your browser's devtools, so it's best for the curious and technical."

/>
`,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`free-tools`,url:`/admin/#/collections/pages/entries/free-tools`,createUrl:`/admin/#/collections/pages/new`}},"/data/pages/home":{route:`/`,heading:`Home`,intro:`Custom software for Portland medical practices, law firms, and specialty contractors: intake, scheduling, referral portals, and dashboards.`,seo:{title:`Sparkstone | Custom Software for Portland Businesses.`,description:`Custom software for Portland medical practices, law firms, and specialty contractors: intake, scheduling, referral portals, and dashboards. I work on a monthly retainer, so the person who built your systems is the one keeping them running.`,image:`/meta-image.webp`},body:``,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`home`,url:`/admin/#/collections/pages/entries/home`,createUrl:`/admin/#/collections/pages/new`}},"/data/pages/mentions":{route:`/links/mentions`,heading:`Mentions`,intro:``,seo:{title:``,description:`Places around the web that link to Sparkstone or reference the work, from podcast episodes to project directories.`,image:``,keywords:[]},body:`
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
`,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`mentions`,url:`/admin/#/collections/pages/entries/mentions`,createUrl:`/admin/#/collections/pages/new`}},"/data/pages/open-source":{route:`/open-source`,heading:`Open Source`,intro:`Tools and libraries I've released for anyone to use, fork, and own, from single-file sync to a neighborhood yard-sale map.`,body:``,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`open-source`,url:`/admin/#/collections/pages/entries/open-source`,createUrl:`/admin/#/collections/pages/new`}},"/data/pages/products":{route:`/products`,heading:`Products`,intro:`Software I build, ship, and maintain myself, from Liveframe's event photo sharing to small libraries and hobby apps.`,seo:{title:``,description:``,image:``,keywords:[]},body:``,collectionType:`pages`,_collection:{name:`pages`,type:`pages`,label:`Page`,slug:`products`,url:`/admin/#/collections/pages/entries/products`,createUrl:`/admin/#/collections/pages/new`}},"/data/redirects/d5f5a58bdf03":{name:`Business Card Adam`,url:`/business-card/adam`,destination:`/about`,body:``,collectionType:`redirects`,_collection:{name:`redirects`,type:`redirects`,label:`redirect`,slug:`d5f5a58bdf03`,url:`/admin/#/collections/redirects/entries/d5f5a58bdf03`,createUrl:null}},"/data/settings":{headerMenu:`header`,footerMenu:`footer`,companyName:`Sparkstone LLC`,booking_cta:{heading:`This remind you of a problem you've been dealing with?`,body:`I'd be happy to discuss it with you and see if it's something we could turn into a solution.`,action_label:``},seo:{title:`Sparkstone | Custom Software for Portland Businesses.`,description:`Custom software for Portland medical practices, law firms, and specialty contractors: intake, scheduling, referral portals, and dashboards. I work on a monthly retainer, so the person who built your systems is the one keeping them running.`,image:`/meta-image.webp`,keywords:[`custom software portland`,`medical practice software`,`law firm software`,`contractor software`,`patient intake system`,`appointment scheduling software`,`referral portal`,`client dashboard`,`fractional cto portland`,`software project rescue`]},body:``,collectionType:`settings`,_collection:{name:`_singletons`,type:`settings`,label:`Settings`,slug:`settings`,url:`/admin/#/collections/_singletons/entries/settings`,createUrl:null}},"/data/testimonials/allie-6ad7c2ecd738":{name:`Allie`,title:`A Liveframe User`,organization:``,quote:`I am forever grateful to liveframe for giving us the opportunity to see our big day from the perspective of our loved ones.`,photo:``,photoAlt:``,url:`https://www.zola.com/wedding-vendors/wedding-extras/liveframe`,approved:!0,received:`2026-04-11`,body:``,collectionType:`testimonials`,_collection:{name:`testimonials`,type:`testimonials`,label:`Testimonial`,slug:`allie-6ad7c2ecd738`,url:`/admin/#/collections/testimonials/entries/allie-6ad7c2ecd738`,createUrl:`/admin/#/collections/testimonials/new`}},"/data/testimonials/wendy-shih-cac86a8c3361":{name:`Wendy Shih`,title:``,organization:`Little Zine Revolution`,quote:`We are a tiny team with big dreams of making zines more accessible for
everyone. Adam showed sincere interest in our project, listened to our
ramblings, asked great questions, and helped us build a website beyond what
we'd hoped for. He was extremely creative, organized, and responsive
throughout the process, which made him a great collaborator.`,photo:``,photoAlt:``,url:`https://lzr.life`,approved:!0,received:`2026-09-14`,body:``,collectionType:`testimonials`,_collection:{name:`testimonials`,type:`testimonials`,label:`Testimonial`,slug:`wendy-shih-cac86a8c3361`,url:`/admin/#/collections/testimonials/entries/wendy-shih-cac86a8c3361`,createUrl:`/admin/#/collections/testimonials/new`}},"/[...404]":{route:`/[...404]`,heading:`Page not found`,intro:`That link didn't go anywhere. Here's the way back.`,seo:{title:`Page not found | Sparkstone LLC`,description:`That page doesn't exist. Find case studies, products, open source projects, and the blog.`}},"/about":{route:`/about`,heading:`About`,intro:``,seo:{title:``,description:`I'm Adam Sparks. I build and maintain the software Portland medical practices, law firms, and specialty contractors run on, on a monthly retainer.`,image:``,keywords:[]}},"/business-card/adam":{name:`Business Card Adam`,url:`/business-card/adam`,destination:`/about`},"/contact":{route:`/contact`,heading:`Contact`,intro:``,seo:{title:``,description:``,image:``,keywords:[]}},"/links/aligned":{route:`/links/aligned`,heading:`Alignment`,intro:`Projects, tools, and writing that shape how I build software.`},"/links/mentions":{route:`/links/mentions`,heading:`Mentions`,intro:``,seo:{title:``,description:`Places around the web that link to Sparkstone or reference the work, from podcast episodes to project directories.`,image:``,keywords:[]}},"/tools":{route:`/tools`,heading:`Free Tools`,intro:`Some things I build for my own projects turn out to be useful on their own. These are free to use, need no account, and don't hold your data hostage. Most of them end up helping with something in the real world: a sign on a table, a photo for a flyer, a drawing that moves.`,seo:{title:`Free Tools by Sparkstone | QR Codes, Background Remover & More`,description:`Free browser tools from Sparkstone, a Portland software studio. Make QR code table tents, remove image backgrounds privately, and animate drawings. No signup.`,image:`/pxl_20260918_033916822.cutout-1.png`,keywords:[]}},"/case-studies/2026-07-29-the-map-i-never-meant-to-build":{title:`The Map I Never Meant to Build`,client:`NTNA`,segment:`community`,engagement:`volunteer`,services:[`custom-application`],products:[`ntna-yard-sale-map`],blurb:`Sixty thousand views, three neighborhoods asking to borrow it, and a little map that got a bit better every spring until it turned into something anyone can run.`,problem:``,built:``,result:``,timeline:``,url:``,testimonial:[``],created:`2026-07-28T09:01:00`,published:`2026-07-28T09:00:00`,thumbnail:`/yardsale-map.webp`,thumbnailAlt:`A web map of a Portland neighborhood dotted with yard-sale pins`,booking_cta:{heading:`Got a system that's held together with manual steps?`,body:`That map started as a spreadsheet someone retyped by hand every spring. Most of the work I do for Portland businesses starts the same way: one process everyone tolerates because there's no obvious fix, until the person doing it gets tired enough to ask.

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
`,collectionType:`case-studies`,_collection:{name:`case-studies`,type:`case-studies`,label:`Case Study`,slug:`2026-07-29-the-map-i-never-meant-to-build`,url:`/admin/#/collections/case-studies/entries/2026-07-29-the-map-i-never-meant-to-build`,createUrl:`/admin/#/collections/case-studies/new`}},"/case-studies/2026-09-14-a-library-that-fits-in-a-free-library":{title:`A Library That Fits in a Free Little Library`,client:`Little Zine Revolution`,segment:`community`,engagement:`partner`,services:[`custom-application`],products:[],blurb:`A zine catalog, a printing guide, and an events page, built from a pile of draft copy in about two weeks.`,problem:`A colleague distributing anti-colonial zines to free little libraries around Portland needed a place where anyone could find them, print them, and put them out in their own neighborhood. She had the copy written and no site.`,built:`A static site with a self-serve CMS the client's team runs themselves. Zine catalog with tag and fold-type filtering, a step-by-step how-to guide, an events page with per-event calendar links and a subscribable feed, a community photo gallery, and a downloadable brand kit for people starting their own chapter.`,result:`62 zines in the catalog`,timeline:`About two weeks, two video calls`,url:`https://lzr.life`,testimonials:[`wendy-shih-cac86a8c3361`],created:`2026-09-14`,published:`2026-09-14`,thumbnail:`/media/case-studies/lzr-library.webp`,thumbnailAlt:`A table at a zine distribution event, with white baskets of free zines, a pink LZR sign reading "Join the Little Zine Revolution, radically inclusive" with a QR code, and a hand-lettered flyer for a Zine Folding Party on Saturday March 21, 1:30 to 3:30 pm.`,booking_cta:{heading:`Need a site that does one job well?`,body:`If you've got the words and none of the time, that's the version of this work I do most often.`,action_label:``,cta:``},body:`
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
`,collectionType:`case-studies`,_collection:{name:`case-studies`,type:`case-studies`,label:`Case Study`,slug:`2026-09-14-a-library-that-fits-in-a-free-library`,url:`/admin/#/collections/case-studies/entries/2026-09-14-a-library-that-fits-in-a-free-library`,createUrl:`/admin/#/collections/case-studies/new`}},"/posts/2026-06-28-filesync":{title:`Syncing Single Files Across Repos Without Ceremony`,audience:`developer`,products:[],created:`2026-06-28`,published:`2026-06-28`,updated:``,thumbnail:null,thumbnailAlt:``,blurb:`Shared files drift across repos. npm is too heavy and copying by hand makes a mess. filesync closes the gap with git merges, a one-line provenance header, and private-first regions.`,body:`
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
`,collectionType:`Posts`,_collection:{name:`Posts`,type:`Posts`,label:`Post`,slug:`2026-06-28-filesync`,url:`/admin/#/collections/Posts/entries/2026-06-28-filesync`,createUrl:`/admin/#/collections/Posts/new`}},"/posts/2026-09-21-bgremove":{title:`A Background Remover That Doesn't Want Your Money`,audience:`personal`,products:[`bgremove`],created:`2026-09-21T09:00:00`,published:`2026-09-21T09:00:00`,updated:``,thumbnail:``,thumbnailAlt:``,blurb:`remove.bg is folding into Canva and free tiers shrink your photos. So I built one that runs in your browser, keeps your full resolution, and costs nothing to keep online.`,booking_cta:{heading:`Paying monthly for something that could just be yours?`,body:`A lot of what small businesses pay for every month works like this: a subscription wrapped around something that could run on its own. If your business has a tool like that, I'm happy to take a look.`,action_label:``},body:`
Removing the background from a photo is a solved problem. It has been for years. So why does it still feel like walking through a store with a salesperson two steps behind you?

Here is what I found when I went looking.

## The free tier is a thumbnail

remove.bg is the one everybody knows, and it is upfront about the catch: the free download is capped at a quarter of a megapixel. Hand it a photo from your phone and you get back something around 625 by 400 pixels. The preview on screen looks great. The file you download keeps about two percent of your pixels. Full resolution costs a credit per image.

It is also going away. The standalone site shuts down on December 1, 2026, and background removal moves into Canva. Any credits you bought expire that same morning.

The other big name, erase.bg, gives you three free credits and then a price list.

## So here is bgremove

bgremove runs entirely in your browser tab. Drop a photo in, and the model runs on your own machine. Your image never gets uploaded, because there is nowhere to upload it to. The cutout comes back at the size you gave it.

No account. No credits. No "upgrade for HD."

Try it: [sparkstonepdx.github.io/bgremove](https://sparkstonepdx.github.io/bgremove/)
Code: [github.com/sparkstonepdx/bgremove](https://github.com/sparkstonepdx/bgremove)

## Why it can stay free

This is the part I care about most.

A free tool with a server behind it is a tool someone pays for every month. That is how free tiers end up shrinking your photos: the server costs money, so the free version has to be bad enough that you will pay. Or the company gets bought, and the tool you relied on becomes a button inside something bigger.

bgremove has no server. It is a static site on GitHub Pages: a page, a runtime, and a model file. Your browser downloads the model once, caches it, and does all the work itself. There is nothing for me to keep running, so there is nothing I ever have to charge you for, and nothing for anyone to buy out from under you.

It is open source, too. If GitHub Pages went away tomorrow, anyone could clone the repo, run the build, and host a copy anywhere that serves files. That is the entire deployment.

## What it actually does

The model is isnet-general-use, compressed to 8-bit weights so it is a 44 MB download instead of 178. On my test set it lands within 0.05 points of the full-size model.

Models still get edges wrong sometimes, so there is a brush. Green keeps, red removes, and you paint right on the image. Turn on "Grow to edges" and one dab spreads into the matching region, so a single tap on a box flap takes the whole flap. The red brush is forgiving on purpose. If you clip a little of your subject while cleaning up background near an edge, it treats that as a slip and leaves your subject alone.

Drop a stack of photos at once and it queues them. Finish one, hit Done, and the next one opens.

If your phone can't handle the larger model, bgremove falls back to a smaller one and tells you it did, instead of leaving you staring at a dead page.

Every model it ships is licensed Apache-2.0, so your cutouts are fine for work. I left out one popular model because its license is non-commercial only.

## It's 2026

We have models that run in a browser tab. We have free static hosting. A background remover that shrinks your photo unless you pay is a business decision, not a technical limit.

So here is one that doesn't ask you for anything. If it misses on one of your photos, open an issue and I'll take a look.
`,collectionType:`Posts`,_collection:{name:`Posts`,type:`Posts`,label:`Post`,slug:`2026-09-21-bgremove`,url:`/admin/#/collections/Posts/entries/2026-09-21-bgremove`,createUrl:`/admin/#/collections/Posts/new`}},"/posts/arcanetable-insight":{title:`Arcanetable Insight`,audience:`developer`,products:[`arcanetable`],created:`2026-01-05`,published:`2026-01-05`,updated:``,thumbnail:null,thumbnailAlt:``,blurb:`I checked in on an app I hadn't touched in over a year, and what I found had me utterly gobsmacked.`,body:`
Last night I randomly decided to check in on Arcanetable.app, an app I basically haven't touched in over a year, and what I found had me utterly gobsmacked.

I started writing software pretty young, when a friend and I had a competition to build a messenger. After the initial excitement wore off, we ended up spending most of our time building games together in OpenGL, and it was a blast. Fast forward to the present day: we live on opposite ends of the country, but we still try to keep in touch. My wife surprised me for my birthday in 2024 by flying him out to spend the week with us.

We got pretty deep back into Magic: The Gathering while he was here, and it made me realize there was a massive hole in the market. He headed back home after the visit, and I started writing code on a new pet project. I wanted to mess around with cards the same way we did in person, without needing to constantly pay for plane tickets, and that didn't seem to exist. After several months of sleepless nights, and a desire to code I hadn't felt since those small games in my youth, we were both able to join the same session and see each other moving cards around. We played a couple of sessions over the next few weeks, then I got back to the real world and to building products for Sparkstone, and eventually forgot about Arcanetable.

Which brings us back to last night.

It has grown to over 100 weekly users, roughly 20 a day. Digging in deeper, I realized these are people investing serious time in it: more than 30 sessions lasting over 20 minutes in the past 90 days, and one that ran over an hour and a half.

I've been focused on building products I perceived as creating value, and I've kept my passion projects on the shelf, assuming my toy projects were just a waste of time. Am I still stuck chasing shareholder value even though I'm the only shareholder at Sparkstone? Maybe old habits die hard.

Maybe there's something to Arcanetable, and I should take another look. Have you ever shelved a passion project because you thought it would get in the way of profits? Did you have second thoughts about it?

If you don't know what Arcanetable is and would like to, here's a good place to start.

<div style="left:0;width:100%;height:0;position:relative;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/W-MgOhw-4vU?rel=0" title="Arcanetable: a browser-based 3D table for playtesting card games" style="top:0;left:0;width:100%;height:100%;position:absolute;border:0" allowfullscreen scrolling="no" allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" referrerpolicy="strict-origin"></iframe></div>
`,collectionType:`Posts`,_collection:{name:`Posts`,type:`Posts`,label:`Post`,slug:`arcanetable-insight`,url:`/admin/#/collections/Posts/entries/arcanetable-insight`,createUrl:`/admin/#/collections/Posts/new`}},"/posts/build-with-people":{title:`Build With People, Not In Isolation`,audience:`developer`,products:[],created:`2025-12-19`,published:`2025-12-19`,updated:`2026-06-08`,thumbnail:null,thumbnailAlt:``,blurb:`A lot of us want to help by building good, useful things. But retreating to make the elegant, principled "right thing" in isolation is a trap. Software matters because it gets used, and the surest way to get it used is to build it with the people who need it.`,body:`
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
`,collectionType:`Posts`,_collection:{name:`Posts`,type:`Posts`,label:`Post`,slug:`build-with-people`,url:`/admin/#/collections/Posts/entries/build-with-people`,createUrl:`/admin/#/collections/Posts/new`}},"/posts/cryptpads-url-trick":{title:`CryptPad's URL Trick Is Genius`,created:`2025-12-19`,published:`2025-12-19`,thumbnail:null,blurb:"CryptPad stores the shared encryption key in the URL fragment, the part after the `#`. That one choice solves a whole class of secure-sharing problems.",body:`
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
`,collectionType:`Posts`,_collection:{name:`Posts`,type:`Posts`,label:`Post`,slug:`cryptpads-url-trick`,url:`/admin/#/collections/Posts/entries/cryptpads-url-trick`,createUrl:`/admin/#/collections/Posts/new`}},"/posts/edible-neighborhoods":{title:`Edible Neighborhoods`,audience:`business`,products:[],created:`2026-05-01T11:02:00`,published:`2026-05-01T11:01:00`,updated:``,thumbnail:`/PXL_20260501_030943906.jpg`,thumbnailAlt:`A room full of people all looking intently up towards the projected screen`,blurb:`Evenings like this remind me why local matters, and that the best networks aren't always digital ones.`,body:`
Last night the [North Tabor Neighborhood Association](https://www.northtabor.org) hosted a workshop on creating edible landscapes, in partnership with the [East Multnomah Soil & Water Conservation District](https://emswcd.org). My wife heads communications for the association and I serve as co-chair, so events like this are genuinely close to home for us. We had 40 signups and a waiting list.

The topic itself was chosen by the neighborhood. We sent out a list of options in the newsletter and ran ranked choice voting on the results. It took 5 rounds to decide.

![A spreadsheet showing 5 rounds of ranked choice voting among 22 neighborhood association members. Creating an Edible Landscape won in round 5 with 12 votes, the majority needed, beating out topics including Native Plants, Climate Resilience, and Rain Gardens 101.](/1000043592.png "Ranked Choice Voting Results — Edible Landscape Workshop Topic Selection")

It was the first in-person workshop we've hosted, and honestly we were a little nervous — 2.5 hours is a long ask on a weeknight. But the room stayed engaged the whole time, and neighbors stuck around afterwards with plenty of questions.

From annual veggies and herbs to perennial berries and fruit trees, the workshop covered design tips, building fertile soil, conserving water while producing a harvest, and native plants like salal, Oregon grape, salmonberry, and huckleberry that attract beneficial insects while also feeding you.

![A presentation slide titled "Consider Adding Edible Pacific NW Natives" showing photos of salal, Oregon grape, salmonberry, evergreen huckleberry, and blue elderberry, with photo credits to the University of Oregon and University of Washington.](/PXL_20260501_020652170.jpg "Edible Pacific NW Native Plants — Workshop Presentation Slide")

The workshop was led by Lydia Cox of [Radish Gardens](https://radishgardens.com), who offers landscape design and consultation services including edible plants, habitat for wildlife, and water-wise design. Multi-neighbor and small group consultations are available if you want to take the next step with your own yard.

I spend most of my days thinking about software and systems. But evenings like this remind me why local matters, and that the best networks aren't always digital ones.

East Multnomah Soil & Water runs these workshops regularly. Worth following them at [emswcd.org](https://emswcd.org).
`,collectionType:`Posts`,_collection:{name:`Posts`,type:`Posts`,label:`Post`,slug:`edible-neighborhoods`,url:`/admin/#/collections/Posts/entries/edible-neighborhoods`,createUrl:`/admin/#/collections/Posts/new`}},"/posts/openmls-looked-like-the-perfect-answer":{title:`OpenMLS Looked Like the Perfect Answer, Until It Wasn't`,created:`2025-12-19`,published:`2025-12-19`,thumbnail:null,blurb:`On paper, it checked all the boxes. In practice, I ran into a hard constraint that made it the wrong fit for what I was trying to build.`,body:`
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
`,collectionType:`Posts`,_collection:{name:`Posts`,type:`Posts`,label:`Post`,slug:`openmls-looked-like-the-perfect-answer`,url:`/admin/#/collections/Posts/entries/openmls-looked-like-the-perfect-answer`,createUrl:`/admin/#/collections/Posts/new`}},"/products/arcanetable":{order:4,title:`Arcanetable`,audience:`business`,created:`2024-08-24`,published:`2024-08-24`,thumbnail:`/arcanetable.webp`,thumbnailAlt:`A robed figure stands beneath a gnarled tree, reaching toward a large swirling spiral, surrounded by pastel pink and mint green clouds and faint circuit-line patterns in the background.`,blurb:`A browser-based 3D virtual tabletop built for playtesting trading card games. Arcanetable gives designers and playgroups a flexible, shared space to test ideas together without enforcing rules or workflows.`,tags:[`multiplayer`],isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`arcanetable`,url:`/admin/#/collections/products/entries/arcanetable`,createUrl:`/admin/#/collections/products/new`}},"/products/bgremove":{title:`bgremove`,audience:`personal`,isOpensource:!0,url:`https://sparkstonepdx.github.io/bgremove/`,repo:`https://github.com/sparkstonepdx/bgremove`,package:``,created:`2026-09-21`,published:`2026-09-21`,thumbnail:`/media/products/screenshot-from-2026-09-21-15-18-44.png`,thumbnailAlt:``,blurb:`Background removal that runs in your browser. Full resolution, no account, no server.`,tags:[`image editing`,`in-browser`,`open source`],testimonials:[],booking_cta:{heading:``,body:``,action_label:``},body:`
bgremove removes the background from a photo without your photo ever leaving your device. The model runs in your browser tab, and the cutout comes back at the size you gave it. No account, no credits, no "upgrade for HD."

[Open bgremove](https://sparkstonepdx.github.io/bgremove/)

## What it does

- **Runs locally.** The model is isnet-general-use, compressed to 8-bit weights for a 44 MB download. Your browser fetches it once, caches it, and does all the work itself.
- **Fix the edges yourself.** Green keeps, red removes. Turn on "Grow to edges" and one dab spreads into the matching region. The red brush ignores small slips onto your subject, so cleaning up near an edge doesn't gouge what you're keeping.
- **Batches.** Drop several photos at once and they queue. Hit Done and the next one opens.
- **Phones.** If a device can't load the larger model, bgremove falls back to a smaller one and tells you it did.
- **Safe for work.** Every model it ships is licensed Apache-2.0.

## Why it's free

There is no server. bgremove is a static site on GitHub Pages: a page, a runtime, and a model file. With nothing to keep running, there is nothing to charge for, and anyone can clone the repo and host their own copy anywhere that serves files.
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`bgremove`,url:`/admin/#/collections/products/entries/bgremove`,createUrl:`/admin/#/collections/products/new`}},"/products/blathadex":{order:5,title:`Blathadex`,audience:`personal`,created:`2022-02-06`,published:`2022-02-06`,thumbnail:`/(iPhone SE).png`,thumbnailAlt:`A stylized owl icon with crescent moon eyes and a diamond nose, rendered in blue-purple gradients, surrounded by pastel pink, mint, and lavender geometric and circuit-board design elements.`,blurb:`a companion guide for Animal Crossing: New Horizons, designed to help players track, discover, and plan around the creatures, flowers, villagers, and items available on their island.`,isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`blathadex`,url:`/admin/#/collections/products/entries/blathadex`,createUrl:`/admin/#/collections/products/new`}},"/products/dawei":{order:6,title:`dawei`,audience:`developer`,url:``,repo:``,package:``,created:`2021-01-16`,published:`2021-01-16`,thumbnail:null,thumbnailAlt:``,blurb:`Minimal, flexible state management for React.`,tags:[],isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`dawei`,url:`/admin/#/collections/products/entries/dawei`,createUrl:`/admin/#/collections/products/new`}},"/products/feature-flags":{order:8,title:`feature-flags`,audience:`developer`,created:`2025-09-30`,published:`2025-09-30`,thumbnail:null,blurb:`Tiny, framework-agnostic feature flags for TypeScript.`,isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`feature-flags`,url:`/admin/#/collections/products/entries/feature-flags`,createUrl:`/admin/#/collections/products/new`}},"/products/grim-choices":{order:3,title:`Grim Choices`,audience:`business`,created:`2025-12-18`,published:`2025-12-18`,thumbnail:`/Screenshot 2026-09-08 at 8.43.59 AM.png`,thumbnailAlt:`A cute chibi-style Grim Reaper with a skull face, teal hood, and blue-purple robe, holding a scythe in one hand and making a peace sign with the other, against a pastel pink, mint, and lavender abstract background.`,blurb:`A human-centered planning tool for documenting end-of-life decisions with clarity and care. Designed to reduce uncertainty and emotional burden for loved ones.`,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`grim-choices`,url:`/admin/#/collections/products/entries/grim-choices`,createUrl:`/admin/#/collections/products/new`}},"/products/id-order-spacing":{order:9,title:`id-order-spacing`,audience:`developer`,url:``,repo:``,package:``,created:`2025-03-24`,published:`2025-06-24`,thumbnail:null,thumbnailAlt:``,blurb:`Minimal, collision-safe ordering for sortable lists.`,tags:[],isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`id-order-spacing`,url:`/admin/#/collections/products/entries/id-order-spacing`,createUrl:`/admin/#/collections/products/new`}},"/products/katachi":{order:10,title:`katachi`,audience:`personal`,created:`2025-01-07`,published:`2025-01-07`,thumbnail:`/Screenshot 2026-09-08 at 8.26.30 AM.png`,thumbnailAlt:`A scattered pattern of small illustrated skulls, crosses, and gift boxes in light blue and pink on a white background, with some icons grouped inside pink rectangular outlines.`,blurb:`Fast-paced, real-time puzzle battles. Last stack standing.`,tags:[`game`,`multiplayer`],body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`katachi`,url:`/admin/#/collections/products/entries/katachi`,createUrl:`/admin/#/collections/products/new`}},"/products/liveframe":{order:1,title:`Liveframe`,audience:`business`,url:``,repo:``,package:``,created:`2025-12-18`,published:`2025-12-18`,thumbnail:`/meta-image-1.webp`,thumbnailAlt:`Two hands forming a heart shape in front of a large pink and purple heart, overlaid with pastel mint, pink, and lavender geometric beams, with a stylized cityscape and circuit-line patterns in the background.`,blurb:`A private Instagram for your events. Guests scan a QR code to share photos, messages, and polls in real time with no app installs and no accounts for your guests.`,tags:[`community`,`events`],testimonials:[`allie-6ad7c2ecd738`],booking_cta:{heading:``,body:``,action_label:``},body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`liveframe`,url:`/admin/#/collections/products/entries/liveframe`,createUrl:`/admin/#/collections/products/new`}},"/products/ntna-yard-sale-map":{order:2,title:`Yard Sale Map`,audience:`business`,url:``,repo:`https://github.com/sparkstonepdx/yardsale-map`,package:``,created:`2025-10-06`,published:`2025-10-21`,thumbnail:`/media/products/screenshot-from-2026-09-14-21-06-11.png`,thumbnailAlt:``,blurb:`Organizing a neighborhood yard sale? Put every seller on a map that updates itself from your sign-up form. Free, and yours to keep.`,tags:[`community`,`neighborhood`],isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`ntna-yard-sale-map`,url:`/admin/#/collections/products/entries/ntna-yard-sale-map`,createUrl:`/admin/#/collections/products/new`}},"/products/pocketbase-schema":{order:15,title:`pocketbase-schema`,audience:`developer`,created:`2025-03-24`,published:`2025-03-31`,thumbnail:null,blurb:`Type-safe PocketBase development — automatically.`,isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`pocketbase-schema`,url:`/admin/#/collections/products/entries/pocketbase-schema`,createUrl:`/admin/#/collections/products/new`}},"/products/solid-forms":{order:11,title:`Solid Forms`,audience:`business`,url:``,repo:``,package:``,created:`2025-12-18`,published:`2025-12-18`,thumbnail:`/media/products/screenshot-from-2026-09-14-16-50-57.png`,thumbnailAlt:``,blurb:`Simple, Shareable Forms Built for Real People`,tags:[],body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`solid-forms`,url:`/admin/#/collections/products/entries/solid-forms`,createUrl:`/admin/#/collections/products/new`}},"/products/solid-validation":{order:7,title:`solid-validation`,audience:`developer`,created:`2025-03-24`,published:`2025-06-24`,thumbnail:null,blurb:`Lightweight, flexible form validation for Solid.js.`,isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`solid-validation`,url:`/admin/#/collections/products/entries/solid-validation`,createUrl:`/admin/#/collections/products/new`}},"/products/sparkstone-css":{order:12,title:`sparkstone/css`,audience:`developer`,created:`2025-12-18`,published:`2025-12-18`,thumbnail:null,blurb:`I Finally Built the CSS Framework I Wanted`,tags:[`css`],isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`sparkstone-css`,url:`/admin/#/collections/products/entries/sparkstone-css`,createUrl:`/admin/#/collections/products/new`}},"/products/tasks":{order:13,title:`Tasks`,audience:`business`,created:`2024-11-13`,published:`2024-11-13`,thumbnail:`/Screenshot 2026-09-08 at 9.04.29 AM.png`,thumbnailAlt:``,blurb:`Local-first, collaborative notes and tasks—built for offline reliability.`,isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`tasks`,url:`/admin/#/collections/products/entries/tasks`,createUrl:`/admin/#/collections/products/new`}},"/products/version-json":{order:14,title:`version-json`,audience:`developer`,created:`2022-08-10`,published:`2022-08-10`,thumbnail:null,blurb:`Effortless versioning for long-lived JSON payloads.`,isOpensource:!0,body:`
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
`,collectionType:`products`,_collection:{name:`products`,type:`products`,label:`Product`,slug:`version-json`,url:`/admin/#/collections/products/entries/version-json`,createUrl:`/admin/#/collections/products/new`}}},{"/case-studies":{products:{collection:`products`,indexId:`products||{{slug}}`,multiple:!0},testimonials:{collection:`testimonials`,indexId:`testimonials||{{slug}}`,multiple:!0}},"/data/menus":{"items.page_item.item":{collection:`pages`,indexId:`pages||{{slug}}`,multiple:!1},"items.link_item.item":{collection:`links`,indexId:`links||{{slug}}`,multiple:!1},"items.nested_menu.item":{collection:`menus`,indexId:`menus||{{slug}}`,multiple:!1}},"/data/links":{parent:{collection:`links`,indexId:`links||{{slug}}`,multiple:!1}},"/products":{testimonials:{collection:`testimonials`,indexId:`testimonials||{{slug}}`,multiple:!0}},"/posts":{products:{collection:`products`,indexId:`products||{{slug}}`,multiple:!0}},"/data/home":{testimonials:{collection:`testimonials`,indexId:`testimonials||{{slug}}`,multiple:!0},"featured.case_study.entry":{collection:`case-studies`,indexId:`case-studies||{{slug}}`,multiple:!1},"featured.product.entry":{collection:`products`,indexId:`products||{{slug}}`,multiple:!1},"featured.post.entry":{collection:`Posts`,indexId:`Posts||{{slug}}`,multiple:!1}},"/data/settings":{headerMenu:{collection:`menus`,indexId:`menus||{{slug}}`,multiple:!1},footerMenu:{collection:`menus`,indexId:`menus||{{slug}}`,multiple:!1}}},{"products||{{slug}}":{arcanetable:{key:`/products/arcanetable`},bgremove:{key:`/products/bgremove`},blathadex:{key:`/products/blathadex`},dawei:{key:`/products/dawei`},"feature-flags":{key:`/products/feature-flags`},"grim-choices":{key:`/products/grim-choices`},"id-order-spacing":{key:`/products/id-order-spacing`},katachi:{key:`/products/katachi`},liveframe:{key:`/products/liveframe`},"ntna-yard-sale-map":{key:`/products/ntna-yard-sale-map`},"pocketbase-schema":{key:`/products/pocketbase-schema`},"solid-forms":{key:`/products/solid-forms`},"solid-validation":{key:`/products/solid-validation`},"sparkstone-css":{key:`/products/sparkstone-css`},tasks:{key:`/products/tasks`},"version-json":{key:`/products/version-json`}},"testimonials||{{slug}}":{"allie-6ad7c2ecd738":{key:`/data/testimonials/allie-6ad7c2ecd738`},"wendy-shih-cac86a8c3361":{key:`/data/testimonials/wendy-shih-cac86a8c3361`}},"pages||{{slug}}":{"[...404]":{key:`/data/pages/[...404]`},about:{key:`/data/pages/about`},alignment:{key:`/data/pages/alignment`},blog:{key:`/data/pages/blog`},"case-studies":{key:`/data/pages/case-studies`},contact:{key:`/data/pages/contact`},"free-tools":{key:`/data/pages/free-tools`},home:{key:`/data/pages/home`},mentions:{key:`/data/pages/mentions`},"open-source":{key:`/data/pages/open-source`},products:{key:`/data/pages/products`}},"links||{{slug}}":{"book-a-call":{key:`/data/links/book-a-call`}},"menus||{{slug}}":{footer:{key:`/data/menus/footer`},header:{key:`/data/menus/header`}},"case-studies||{{slug}}":{"2026-07-29-the-map-i-never-meant-to-build":{key:`/case-studies/2026-07-29-the-map-i-never-meant-to-build`},"2026-09-14-a-library-that-fits-in-a-free-library":{key:`/case-studies/2026-09-14-a-library-that-fits-in-a-free-library`}},"Posts||{{slug}}":{"2026-06-28-filesync":{key:`/posts/2026-06-28-filesync`},"2026-09-21-bgremove":{key:`/posts/2026-09-21-bgremove`},"arcanetable-insight":{key:`/posts/arcanetable-insight`},"build-with-people":{key:`/posts/build-with-people`},"cryptpads-url-trick":{key:`/posts/cryptpads-url-trick`},"edible-neighborhoods":{key:`/posts/edible-neighborhoods`},"openmls-looked-like-the-perfect-answer":{key:`/posts/openmls-looked-like-the-perfect-answer`}}});function Em(e){return Tm[e]??{}}function Dm(){let e=Bp();return()=>Em(e.pathname.replace(/\/+$/,``)||`/`)}function Om(e){return Object.entries(Tm).filter(([t])=>t.startsWith(e)).map(([e,t])=>({path:e,content:t}))}var km=/([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;function Am(e=``){let t={};for(let[,n,r,i,a]of e.matchAll(km))t[`${n.toLowerCase()}`]=r??i??a??``;return t}var jm=hd(`<a>`);function Mm(e){let t=e.item;return`name`in e&&(t=Tm[`/data/pages/${e.name}`]??Tm[`/data/links/${e.name}`]),cu(pu,{get children(){return[cu(mu,{get when(){return t.collectionType===`links`},get children(){return cu(Nm,oc(()=>sc(e,`children`,`item`),{item:t,get children(){return e.children}}))}}),cu(mu,{get when(){return t.collectionType===`pages`},get children(){return cu(Pm,oc(()=>sc(e,`children`,`item`),{item:t,get children(){return e.children}}))}}),cu(mu,{when:!0,children:()=>{throw Error(`failed to render link`)}})]}})}function Nm(e){let t=e.label||e.item.label;var n=jf(jm);return Ed(n),Nd(n,[()=>sc(e,`item`,`children`),{"aria-label":t,get href(){return e.item.url}},()=>Am(e.item?.customAttributes)],!0),Xd(n,Ud(()=>e.children||t)),Pf(),n}function Pm(e){let t=e.label||e.item.heading;var n=jf(jm);return Ed(n),Nd(n,[()=>sc(e,`item`,`children`),{"aria-label":t,get href(){return e.item.route}},()=>Am(e.item?.customAttributes)],!0),Xd(n,Ud(()=>e.children||t)),Pf(),n}export{Af as $,Ap as A,Sc as At,Ed as B,M as Bt,Kp as C,Pl as Ct,zp as D,kl as Dt,Rp as E,Ml as Et,cp as F,ji as Ft,dd as G,Te as Gt,gd as H,we as Ht,Tp as I,Ii as It,Mf as J,A as Jt,jf as K,Ee as Kt,ld as L,wr as Lt,Op as M,uc as Mt,dp as N,oc as Nt,kp as O,jl as Ot,pp as P,sc as Pt,ap as Q,Zf as R,V as Rt,mm as S,lc as St,Bp as T,Nl as Tt,tp as U,E as Ut,kd as V,N as Vt,Mu as W,j as Wt,Yu as X,Qe as Xt,ud as Y,O as Yt,Qu as Z,lm as _,gu as _t,Tm as a,Hd as at,Jp as b,pu as bt,Lp as c,Ud as ct,gm as d,fd as dt,Xd as et,hm as f,hd as ft,nm as g,du as gt,tm as h,hu as ht,wm as i,Md as it,Dp as j,lu as jt,jp as k,Cc as kt,Ip as l,Dd as lt,dm as m,xu as mt,Om as n,Xu as nt,bm as o,Td as ot,pm as p,Of as pt,Nf as q,dt as qt,Dm as r,Nu as rt,ym as s,Pf as st,Mm as t,Xf as tt,em as u,Nd as ut,sm as v,mu as vt,Yp as w,Q as wt,Fp as x,cu as xt,om as y,fu as yt,Vd as z,dn as zt};