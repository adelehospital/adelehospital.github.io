function b(){}const Z=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function U(){return Object.create(null)}function A(t){t.forEach(tt)}function I(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let O;function It(t,e){return O||(O=document.createElement("a")),O.href=e,t===O.href}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(gt(e,n))}function Kt(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function Ut(t,e,n,i,r,o){if(r){const s=et(e,n,i,o);t.p(s,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const nt=typeof window<"u";let it=nt?()=>window.performance.now():()=>Date.now(),J=nt?t=>requestAnimationFrame(t):b;const C=new Set;function rt(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&J(rt)}function st(t){let e;return C.size===0&&J(rt),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let H=!1;function xt(){H=!0}function wt(){H=!1}function $t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:$t(1,r,_=>e[n[_]].claim_order,l))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const o=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function vt(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=lt("style");return Nt(ot(t),e),e.sheet}function Nt(t,e){return vt(t.head||t,e),e.sheet}function kt(t,e){if(H){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){H&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ct(t){t.parentNode&&t.parentNode.removeChild(t)}function Yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function lt(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function Zt(){return K(" ")}function te(){return K("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,r=!1){St(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function At(t,e,n,i){return ut(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ie(t,e,n){return At(t,e,n,lt)}function Mt(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function re(t){return Mt(t," ")}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function ce(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function jt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function le(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ue(t,e){return new t(e)}const P=new Map;let q=0;function Rt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:Et(e),rules:{}};return P.set(t,n),n}function at(t,e,n,i,r,o,s,u=0){const c=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*o(p);l+=p*100+`%{${s(y,1-y)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Rt(f)}_${u}`,_=ot(t),{stylesheet:d,rules:h}=P.get(_)||Dt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function W(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||Bt())}function Bt(){J(()=>{q||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ct(e)}),P.clear())})}function ae(t,e,n,i){if(!e)return b;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return b;const{delay:o=0,duration:s=300,easing:u=Z,start:c=it()+o,end:l=c+s,tick:f=b,css:a}=n(t,{from:e,to:r},i);let _=!0,d=!1,h;function g(){a&&(h=at(t,0,1,s,o,u,a)),o||(d=!0)}function p(){a&&W(t,h),_=!1}return st(y=>{if(!d&&y>=c&&(d=!0),d&&y>=l&&(f(1,0),p()),!_)return!1;if(d){const v=y-c,$=0+1*u(v/s);f($,1-$)}return!0}),g(),f(0,1),p}function fe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Ot(t,r)}}function Ot(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let D;function R(t){D=t}function ft(){if(!D)throw new Error("Function called outside component initialization");return D}function _e(t){ft().$$.on_mount.push(t)}function de(t){ft().$$.after_update.push(t)}const k=[],V=[];let S=[];const X=[],_t=Promise.resolve();let G=!1;function dt(){G||(G=!0,_t.then(ht))}function he(){return dt(),_t}function z(t){S.push(t)}const F=new Set;let N=0;function ht(){if(N!==0)return;const t=D;do{try{for(;N<k.length;){const e=k[N];N++,R(e),Tt(e.$$)}}catch(e){throw k.length=0,N=0,e}for(R(null),k.length=0,N=0;V.length;)V.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];F.has(n)||(F.add(n),n())}S.length=0}while(k.length);for(;X.length;)X.pop()();G=!1,F.clear(),R(t)}function Tt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function Pt(t){const e=[],n=[];S.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),S=e}let j;function qt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function Y(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const T=new Set;let E;function me(){E={r:0,c:[],p:E}}function pe(){E.r||A(E.c),E=E.p}function mt(t,e){t&&t.i&&(T.delete(t),t.i(e))}function ye(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),E.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function ge(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,u,c=0;function l(){s&&W(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=Z,tick:g=b,css:p}=r||zt;p&&(s=at(t,0,1,d,_,h,p,c++)),g(0,1);const y=it()+_,v=y+d;u&&u.abort(),o=!0,z(()=>Y(t,!0,"start")),u=st($=>{if(o){if($>=v)return g(1,0),Y(t,!0,"end"),l(),o=!1;if($>=y){const M=h(($-y)/d);g(M,1-M)}}return o})}let a=!1;return{start(){a||(a=!0,W(t),I(r)?(r=r(i),qt().then(f)):f())},invalidate(){a=!1},end(){o&&(l(),o=!1)}}}function Ht(t,e){t.d(1),e.delete(t.key)}function xe(t,e){t.f(),Ht(t,e)}function we(t,e,n,i,r,o,s,u,c,l,f,a){let _=t.length,d=o.length,h=_;const g={};for(;h--;)g[t[h].key]=h;const p=[],y=new Map,v=new Map,$=[];for(h=d;h--;){const m=a(r,o,h),x=n(m);let w=s.get(x);w?i&&$.push(()=>w.p(m,e)):(w=l(x,m),w.c()),y.set(x,p[h]=w),x in g&&v.set(x,Math.abs(h-g[x]))}const M=new Set,Q=new Set;function L(m){mt(m,1),m.m(u,f),s.set(m.key,m),f=m.first,d--}for(;_&&d;){const m=p[d-1],x=t[_-1],w=m.key,B=x.key;m===x?(f=m.first,_--,d--):y.has(B)?!s.has(w)||M.has(w)?L(m):Q.has(B)?_--:v.get(w)>v.get(B)?(Q.add(w),L(m)):(M.add(B),_--):(c(x,s),_--)}for(;_--;){const m=t[_];y.has(m.key)||c(m,s)}for(;d;)L(p[d-1]);return A($),p}function $e(t){t&&t.c()}function be(t,e){t&&t.l(e)}function Lt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||z(()=>{const s=t.$$.on_mount.map(tt).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),o.forEach(z)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(Pt(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(k.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,i,r,o,s,u=[-1]){const c=D;R(t);const l=t.$$={fragment:null,ctx:[],props:o,update:b,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:U(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Wt(t,a)),_}):[],l.update(),f=!0,A(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){xt();const a=Ct(e.target);l.fragment&&l.fragment.l(a),a.forEach(ct)}else l.fragment&&l.fragment.c();e.intro&&mt(t.$$.fragment),Lt(t,e.target,e.anchor,e.customElement),wt(),ht()}R(c)}class Ee{$destroy(){Ft(this,1),this.$destroy=b}$on(e,n){if(!I(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Lt as A,Ft as B,kt as C,b as D,Kt as E,Ut as F,Vt as G,Qt as H,Jt as I,le as J,z as K,ge as L,I as M,oe as N,ee as O,we as P,fe as Q,ae as R,Ee as S,Yt as T,xe as U,It as V,Z as W,Zt as a,Xt as b,re as c,ye as d,te as e,pe as f,mt as g,ct as h,ve as i,de as j,lt as k,ie as l,Ct as m,ne as n,_e as o,ce as p,K as q,Mt as r,Gt as s,he as t,se as u,me as v,V as w,ue as x,$e as y,be as z};
