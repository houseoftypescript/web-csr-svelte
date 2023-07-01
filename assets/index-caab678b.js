(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();function m(){}function W(t,e){for(const r in e)t[r]=e[r];return t}function zt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Nt(t){return t()}function ht(){return Object.create(null)}function I(t){t.forEach(Nt)}function at(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Bt(t){return Object.keys(t).length===0}function Lt(t,...e){if(t==null)return m;const r=t.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function D(t,e,r){t.$$.on_destroy.push(Lt(e,r))}function Pt(t,e,r,n){if(t){const o=At(t,e,r,n);return t[0](o)}}function At(t,e,r,n){return t[1]&&n?W(r.ctx.slice(),t[1](n(e))):r.ctx}function $t(t,e,r,n){if(t[2]&&n){const o=t[2](n(r));if(e.dirty===void 0)return o;if(typeof o=="object"){const c=[],i=Math.max(e.dirty.length,o.length);for(let l=0;l<i;l+=1)c[l]=e.dirty[l]|o[l];return c}return e.dirty|o}return e.dirty}function Mt(t,e,r,n,o,c){if(o){const i=At(e,r,n,c);t.p(i,o)}}function Ct(t){if(t.ctx.length>32){const e=[],r=t.ctx.length/32;for(let n=0;n<r;n++)e[n]=-1;return e}return-1}function pt(t){const e={};for(const r in t)r[0]!=="$"&&(e[r]=t[r]);return e}function w(t,e){t.appendChild(e)}function N(t,e,r){t.insertBefore(e,r||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function qt(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function v(t){return document.createElement(t)}function ft(t){return document.createTextNode(t)}function G(){return ft(" ")}function Q(){return ft("")}function O(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function Yt(t){return Array.from(t.childNodes)}function _t(t,e){return new t(e)}let z;function T(t){z=t}function F(){if(!z)throw new Error("Function called outside component initialization");return z}function Ft(t){F().$$.on_mount.push(t)}function Gt(t){F().$$.on_destroy.push(t)}function et(t,e){return F().$$.context.set(t,e),e}function ct(t){return F().$$.context.get(t)}const C=[],mt=[];let j=[];const gt=[],Kt=Promise.resolve();let st=!1;function Wt(){st||(st=!0,Kt.then(dt))}function it(t){j.push(t)}const nt=new Set;let $=0;function dt(){if($!==0)return;const t=z;do{try{for(;$<C.length;){const e=C[$];$++,T(e),Jt(e.$$)}}catch(e){throw C.length=0,$=0,e}for(T(null),C.length=0,$=0;mt.length;)mt.pop()();for(let e=0;e<j.length;e+=1){const r=j[e];nt.has(r)||(nt.add(r),r())}j.length=0}while(C.length);for(;gt.length;)gt.pop()();st=!1,nt.clear(),T(t)}function Jt(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}function Qt(t){const e=[],r=[];j.forEach(n=>t.indexOf(n)===-1?e.push(n):r.push(n)),r.forEach(n=>n()),j=e}const K=new Set;let A;function V(){A={r:0,c:[],p:A}}function X(){A.r||I(A.c),A=A.p}function b(t,e){t&&t.i&&(K.delete(t),t.i(e))}function y(t,e,r,n){if(t&&t.o){if(K.has(t))return;K.add(t),A.c.push(()=>{K.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}function bt(t,e){const r=e.token={};function n(o,c,i,l){if(e.token!==r)return;e.resolved=l;let s=e.ctx;i!==void 0&&(s=s.slice(),s[i]=l);const u=o&&(e.current=o)(s);let h=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==c&&f&&(V(),y(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),X())}):e.block.d(1),u.c(),b(u,1),u.m(e.mount(),e.anchor),h=!0),e.block=u,e.blocks&&(e.blocks[c]=u),h&&dt()}if(zt(t)){const o=F();if(t.then(c=>{T(o),n(e.then,1,e.value,c),T(null)},c=>{if(T(o),n(e.catch,2,e.error,c),T(null),!e.hasCatch)throw c}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,t),!0;e.resolved=t}}function Vt(t,e,r){const n=e.slice(),{resolved:o}=t;t.current===t.then&&(n[t.value]=o),t.current===t.catch&&(n[t.error]=o),t.block.p(n,r)}function Xt(t,e){const r={},n={},o={$$scope:1};let c=t.length;for(;c--;){const i=t[c],l=e[c];if(l){for(const s in i)s in l||(n[s]=1);for(const s in l)o[s]||(r[s]=l[s],o[s]=1);t[c]=l}else for(const s in i)o[s]=1}for(const i in n)i in r||(r[i]=void 0);return r}function yt(t){return typeof t=="object"&&t!==null?t:{}}function J(t){t&&t.c()}function B(t,e,r,n){const{fragment:o,after_update:c}=t.$$;o&&o.m(e,r),n||it(()=>{const i=t.$$.on_mount.map(Nt).filter(at);t.$$.on_destroy?t.$$.on_destroy.push(...i):I(i),t.$$.on_mount=[]}),c.forEach(it)}function q(t,e){const r=t.$$;r.fragment!==null&&(Qt(r.after_update),I(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function Zt(t,e){t.$$.dirty[0]===-1&&(C.push(t),Wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,r,n,o,c,i,l=[-1]){const s=z;T(t);const u=t.$$={fragment:null,ctx:[],props:c,update:m,not_equal:o,bound:ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:ht(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};i&&i(u.root);let h=!1;if(u.ctx=r?r(t,e.props||{},(f,d,..._)=>{const a=_.length?_[0]:d;return u.ctx&&o(u.ctx[f],u.ctx[f]=a)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](a),h&&Zt(t,f)),d}):[],u.update(),h=!0,I(u.before_update),u.fragment=n?n(u.ctx):!1,e.target){if(e.hydrate){const f=Yt(e.target);u.fragment&&u.fragment.l(f),f.forEach(E)}else u.fragment&&u.fragment.c();e.intro&&b(t.$$.fragment),B(t,e.target,e.anchor,e.customElement),dt()}T(s)}class tt{$destroy(){q(this,1),this.$destroy=m}$on(e,r){if(!at(r))return m;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!Bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const kt={},ut={},te={},jt=/^:(.+)/,wt=4,ee=3,ne=2,re=1,oe=1,lt=t=>t.replace(/(^\/+|\/+$)/g,"").split("/"),rt=t=>t.replace(/(^\/+|\/+$)/g,""),ce=(t,e)=>{const r=t.default?0:lt(t.path).reduce((n,o)=>(n+=wt,o===""?n+=oe:jt.test(o)?n+=ne:o[0]==="*"?n-=wt+re:n+=ee,n),0);return{route:t,score:r,index:e}},se=t=>t.map(ce).sort((e,r)=>e.score<r.score?1:e.score>r.score?-1:e.index-r.index),xt=(t,e)=>{let r,n;const[o]=e.split("?"),c=lt(o),i=c[0]==="",l=se(t);for(let s=0,u=l.length;s<u;s++){const h=l[s].route;let f=!1;if(h.default){n={route:h,params:{},uri:e};continue}const d=lt(h.path),_={},a=Math.max(c.length,d.length);let g=0;for(;g<a;g++){const k=d[g],R=c[g];if(k&&k[0]==="*"){const H=k==="*"?"*":k.slice(1);_[H]=c.slice(g).map(decodeURIComponent).join("/");break}if(typeof R>"u"){f=!0;break}const L=jt.exec(k);if(L&&!i){const H=decodeURIComponent(R);_[L[1]]=H}else if(k!==R){f=!0;break}}if(!f){r={route:h,params:_,uri:"/"+c.slice(0,g).join("/")};break}}return r||n||null},vt=(t,e)=>`${rt(e==="/"?t:`${rt(t)}/${rt(e)}`)}/`,It=()=>typeof window<"u"&&"document"in window&&"location"in window,ie=t=>({params:t&4}),St=t=>({params:t[2]});function Ot(t){let e,r,n,o;const c=[le,ue],i=[];function l(s,u){return s[0]?0:1}return e=l(t),r=i[e]=c[e](t),{c(){r.c(),n=Q()},m(s,u){i[e].m(s,u),N(s,n,u),o=!0},p(s,u){let h=e;e=l(s),e===h?i[e].p(s,u):(V(),y(i[h],1,1,()=>{i[h]=null}),X(),r=i[e],r?r.p(s,u):(r=i[e]=c[e](s),r.c()),b(r,1),r.m(n.parentNode,n))},i(s){o||(b(r),o=!0)},o(s){y(r),o=!1},d(s){i[e].d(s),s&&E(n)}}}function ue(t){let e;const r=t[8].default,n=Pt(r,t,t[7],St);return{c(){n&&n.c()},m(o,c){n&&n.m(o,c),e=!0},p(o,c){n&&n.p&&(!e||c&132)&&Mt(n,r,o,o[7],e?$t(r,o[7],c,ie):Ct(o[7]),St)},i(o){e||(b(n,o),e=!0)},o(o){y(n,o),e=!1},d(o){n&&n.d(o)}}}function le(t){let e,r,n,o={ctx:t,current:null,token:null,hasCatch:!1,pending:de,then:fe,catch:ae,value:12,blocks:[,,,]};return bt(r=t[0],o),{c(){e=Q(),o.block.c()},m(c,i){N(c,e,i),o.block.m(c,o.anchor=i),o.mount=()=>e.parentNode,o.anchor=e,n=!0},p(c,i){t=c,o.ctx=t,i&1&&r!==(r=t[0])&&bt(r,o)||Vt(o,t,i)},i(c){n||(b(o.block),n=!0)},o(c){for(let i=0;i<3;i+=1){const l=o.blocks[i];y(l)}n=!1},d(c){c&&E(e),o.block.d(c),o.token=null,o=null}}}function ae(t){return{c:m,m,p:m,i:m,o:m,d:m}}function fe(t){var l;let e,r,n;const o=[t[2],t[3]];var c=((l=t[12])==null?void 0:l.default)||t[12];function i(s){let u={};for(let h=0;h<o.length;h+=1)u=W(u,o[h]);return{props:u}}return c&&(e=_t(c,i())),{c(){e&&J(e.$$.fragment),r=Q()},m(s,u){e&&B(e,s,u),N(s,r,u),n=!0},p(s,u){var f;const h=u&12?Xt(o,[u&4&&yt(s[2]),u&8&&yt(s[3])]):{};if(u&1&&c!==(c=((f=s[12])==null?void 0:f.default)||s[12])){if(e){V();const d=e;y(d.$$.fragment,1,0,()=>{q(d,1)}),X()}c?(e=_t(c,i()),J(e.$$.fragment),b(e.$$.fragment,1),B(e,r.parentNode,r)):e=null}else c&&e.$set(h)},i(s){n||(e&&b(e.$$.fragment,s),n=!0)},o(s){e&&y(e.$$.fragment,s),n=!1},d(s){s&&E(r),e&&q(e,s)}}}function de(t){return{c:m,m,p:m,i:m,o:m,d:m}}function he(t){let e,r,n=t[1]&&t[1].route===t[5]&&Ot(t);return{c(){n&&n.c(),e=Q()},m(o,c){n&&n.m(o,c),N(o,e,c),r=!0},p(o,[c]){o[1]&&o[1].route===o[5]?n?(n.p(o,c),c&2&&b(n,1)):(n=Ot(o),n.c(),b(n,1),n.m(e.parentNode,e)):n&&(V(),y(n,1,1,()=>{n=null}),X())},i(o){r||(b(n),r=!0)},o(o){y(n),r=!1},d(o){n&&n.d(o),o&&E(e)}}}function pe(t,e,r){let n,{$$slots:o={},$$scope:c}=e,{path:i=""}=e,{component:l=null}=e,s={},u={};const{registerRoute:h,unregisterRoute:f,activeRoute:d}=ct(ut);D(t,d,a=>r(1,n=a));const _={path:i,default:i===""};return h(_),Gt(()=>{f(_)}),t.$$set=a=>{r(11,e=W(W({},e),pt(a))),"path"in a&&r(6,i=a.path),"component"in a&&r(0,l=a.component),"$$scope"in a&&r(7,c=a.$$scope)},t.$$.update=()=>{if(n&&n.route===_){r(2,s=n.params);const{component:a,path:g,...k}=e;r(3,u=k),a&&(a.toString().startsWith("class ")?r(0,l=a):r(0,l=a())),It()&&(window==null||window.scrollTo(0,0))}},e=pt(e),[l,n,s,u,d,_,i,c,o]}class _e extends tt{constructor(e){super(),Z(this,e,pe,he,Y,{path:6,component:0})}}const M=[];function me(t,e){return{subscribe:U(t,e).subscribe}}function U(t,e=m){let r;const n=new Set;function o(l){if(Y(t,l)&&(t=l,r)){const s=!M.length;for(const u of n)u[1](),M.push(u,t);if(s){for(let u=0;u<M.length;u+=2)M[u][0](M[u+1]);M.length=0}}}function c(l){o(l(t))}function i(l,s=m){const u=[l,s];return n.add(u),n.size===1&&(r=e(o)||m),l(t),()=>{n.delete(u),n.size===0&&r&&(r(),r=null)}}return{set:o,update:c,subscribe:i}}function ge(t,e,r){const n=!Array.isArray(t),o=n?[t]:t,c=e.length<2;return me(r,i=>{let l=!1;const s=[];let u=0,h=m;const f=()=>{if(u)return;h();const _=e(n?s[0]:s,i);c?i(_):h=at(_)?_:m},d=o.map((_,a)=>Lt(_,g=>{s[a]=g,u&=~(1<<a),l&&f()},()=>{u|=1<<a}));return l=!0,f(),function(){I(d),h(),l=!1}})}const ot=t=>({...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}),be=t=>{const e=[];let r=ot(t);return{get location(){return r},listen(n){e.push(n);const o=()=>{r=ot(t),n({location:r,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const c=e.indexOf(n);e.splice(c,1)}},navigate(n,{state:o,replace:c=!1}={}){o={...o,key:Date.now()+""};try{c?t.history.replaceState(o,"",n):t.history.pushState(o,"",n)}catch{t.location[c?"replace":"assign"](n)}r=ot(t),e.forEach(i=>i({location:r,action:"PUSH"})),document.activeElement.blur()}}},ye=(t="/")=>{let e=0;const r=[{pathname:t,search:""}],n=[];return{get location(){return r[e]},addEventListener(o,c){},removeEventListener(o,c){},history:{get entries(){return r},get index(){return e},get state(){return n[e]},pushState(o,c,i){const[l,s=""]=i.split("?");e++,r.push({pathname:l,search:s}),n.push(o)},replaceState(o,c,i){const[l,s=""]=i.split("?");r[e]={pathname:l,search:s},n[e]=o}}}},ke=be(It()?window:ye()),we=t=>({route:t&2,location:t&1}),Tt=t=>({route:t[1]&&t[1].uri,location:t[0]});function xe(t){let e;const r=t[12].default,n=Pt(r,t,t[11],Tt);return{c(){n&&n.c()},m(o,c){n&&n.m(o,c),e=!0},p(o,[c]){n&&n.p&&(!e||c&2051)&&Mt(n,r,o,o[11],e?$t(r,o[11],c,we):Ct(o[11]),Tt)},i(o){e||(b(n,o),e=!0)},o(o){y(n,o),e=!1},d(o){n&&n.d(o)}}}function ve(t,e,r){let n,o,c,i,{$$slots:l={},$$scope:s}=e,{basepath:u="/"}=e,{url:h=null}=e,{history:f=ke}=e;et(te,f);const d=ct(kt),_=ct(ut),a=U([]);D(t,a,p=>r(9,o=p));const g=U(null);D(t,g,p=>r(1,i=p));let k=!1;const R=d||U(h?{pathname:h}:f.location);D(t,R,p=>r(0,n=p));const L=_?_.routerBase:U({path:u,uri:u});D(t,L,p=>r(10,c=p));const H=ge([L,g],([p,x])=>{if(!x)return p;const{path:S}=p,{route:P,uri:Ut}=x;return{path:P.default?S:P.path.replace(/\*.*$/,""),uri:Ut}}),Ht=p=>{const{path:x}=c;let{path:S}=p;if(p._path=S,p.path=vt(x,S),typeof window>"u"){if(k)return;const P=xt([p],n.pathname);P&&(g.set(P),k=!0)}else a.update(P=>[...P,p])},Dt=p=>{a.update(x=>x.filter(S=>S!==p))};return d||(Ft(()=>f.listen(x=>{R.set(x.location)})),et(kt,R)),et(ut,{activeRoute:g,base:L,routerBase:H,registerRoute:Ht,unregisterRoute:Dt}),t.$$set=p=>{"basepath"in p&&r(6,u=p.basepath),"url"in p&&r(7,h=p.url),"history"in p&&r(8,f=p.history),"$$scope"in p&&r(11,s=p.$$scope)},t.$$.update=()=>{if(t.$$.dirty&1024){const{path:p}=c;a.update(x=>x.map(S=>Object.assign(S,{path:vt(p,S._path)})))}if(t.$$.dirty&513){const p=xt(o,n.pathname);g.set(p)}},[n,i,a,g,R,L,u,h,f,o,c,s,l]}class Se extends tt{constructor(e){super(),Z(this,e,ve,xe,Y,{basepath:6,url:7,history:8})}}function Et(t,e,r){const n=t.slice();return n[1]=e[r],n[3]=r,n}function Rt(t){let e,r,n,o=t[1].title+"",c,i,l;return{c(){e=v("div"),r=v("div"),n=v("h3"),c=ft(o),i=G(),l=v("div"),l.innerHTML='<button class="rounded bg-red-500 px-4 py-2 text-white">Delete</button>',O(r,"class","flex items-center justify-between gap-8"),O(e,"id",`list-${t[3]}`),O(e,"class","border-b px-8 py-4")},m(s,u){N(s,e,u),w(e,r),w(r,n),w(n,c),w(r,i),w(r,l)},p:m,d(s){s&&E(e)}}}function Oe(t){let e,r,n,o,c,i,l,s,u,h=t[0],f=[];for(let d=0;d<h.length;d+=1)f[d]=Rt(Et(t,h,d));return{c(){e=v("nav"),e.innerHTML='<div class="container mx-auto"><div class="px-8 py-4"><h1 class="uppercase">Tasks</h1></div></div>',r=G(),n=v("main"),o=v("div"),c=v("div"),i=v("div"),i.innerHTML=`<div class="flex items-center justify-between gap-8"><h2 class="text-xl">List 1</h2> 
          <div><button class="rounded bg-red-500 px-4 py-2 text-white">Add</button></div></div>`,l=G();for(let d=0;d<f.length;d+=1)f[d].c();s=G(),u=v("div"),u.innerHTML='<button class="w-full rounded bg-red-500 px-4 py-2 text-white">Add Task</button>',O(e,"class","border-b shadow-md"),O(i,"class","border-b px-8 py-4"),O(u,"class","border-b px-8 py-4"),O(c,"class","rounded-lg border shadow-md"),O(o,"class","px-8 py-4"),O(n,"class","container mx-auto")},m(d,_){N(d,e,_),N(d,r,_),N(d,n,_),w(n,o),w(o,c),w(c,i),w(c,l);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m(c,null);w(c,s),w(c,u)},p(d,[_]){if(_&1){h=d[0];let a;for(a=0;a<h.length;a+=1){const g=Et(d,h,a);f[a]?f[a].p(g,_):(f[a]=Rt(g),f[a].c(),f[a].m(c,s))}for(;a<f.length;a+=1)f[a].d(1);f.length=h.length}},i:m,o:m,d(d){d&&E(e),d&&E(r),d&&E(n),qt(f,d)}}}function Te(t){return[[{id:"1",title:"Title",description:"Description",completed:!1},{id:"1",title:"Title",description:"Description",completed:!1}]]}class Ee extends tt{constructor(e){super(),Z(this,e,Te,Oe,Y,{})}}function Re(t){let e,r;return e=new _e({props:{component:Ee}}),{c(){J(e.$$.fragment)},m(n,o){B(e,n,o),r=!0},p:m,i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){y(e.$$.fragment,n),r=!1},d(n){q(e,n)}}}function Ne(t){let e,r;return e=new Se({props:{$$slots:{default:[Re]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment)},m(n,o){B(e,n,o),r=!0},p(n,[o]){const c={};o&1&&(c.$$scope={dirty:o,ctx:n}),e.$set(c)},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){y(e.$$.fragment,n),r=!1},d(n){q(e,n)}}}class Le extends tt{constructor(e){super(),Z(this,e,null,Ne,Y,{})}}new Le({target:document.getElementById("app")});
