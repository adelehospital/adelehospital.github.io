import{_ as ge}from"../chunks/preload-helper.41c905a7.js";import{e as ye}from"../chunks/index.93323930.js";import{S as Ee,i as $e,s as ke,x as ce,k as m,a as A,q as S,y as _e,J as Pe,l as u,h as a,c as M,m as b,r as T,z as we,n as E,C as p,b as v,A as me,u as re,d as ue,f as Ae,g as pe,L as F,U as Me,B as de,v as Re,M as Q}from"../chunks/index.1733a390.js";import{f as ve}from"../chunks/utils.65a8c901.js";import{f as W}from"../chunks/index.96cf5f47.js";const De=(i,t)=>{const o=i[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((s,_)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(_.bind(null,new Error("Unknown variable dynamic import: "+t)))})},Oe=!0;async function Se({params:i}){try{const t=await De(Object.assign({"../../../cms/blog/2023-07-24-article-de-test.md":()=>ge(()=>import("../chunks/2023-07-24-article-de-test.5b448bfb.js"),["../chunks/2023-07-24-article-de-test.5b448bfb.js","../chunks/index.1733a390.js"],import.meta.url)}),`../../../cms/blog/${i.slug}.md`);return{content:t.default,meta:t.metadata}}catch{throw ye(404,"Could not find ${params.slug}")}}const He=Object.freeze(Object.defineProperty({__proto__:null,load:Se,prerender:Oe},Symbol.toStringTag,{value:"Module"}));function he(i,t,o){const s=i.slice();return s[1]=t[o],s}function be(i){let t,o,s,_=i[1]+"",g,h;return{c(){t=m("a"),o=m("kbd"),s=S("#"),g=S(_),this.h()},l(c){t=u(c,"A",{href:!0});var d=b(t);o=u(d,"KBD",{});var w=b(o);s=T(w,"#"),g=T(w,_),w.forEach(a),d.forEach(a),this.h()},h(){E(t,"href",h="/blog/tags/"+i[1])},m(c,d){v(c,t,d),p(t,o),p(o,s),p(o,g)},p(c,d){d&1&&_!==(_=c[1]+"")&&re(g,_),d&1&&h!==(h="/blog/tags/"+c[1])&&E(t,"href",h)},d(c){c&&a(t)}}}function Te(i){let t,o,s,_,g,h,c,d,w,X,L,j,H,y,q,I=i[0].meta.title+"",U,Y,R,Z,B=ve(i[0].meta.date)+"",V,x,z,$,ee,G,J,K,k,n,te,P;document.title=t=i[0].meta.title;let D=i[0].meta.tags,f=[];for(let e=0;e<D.length;e+=1)f[e]=be(he(i,D,e));var O=i[0].content;function oe(e){return{}}return O&&(n=ce(O,oe())),{c(){o=m("meta"),s=m("meta"),g=A(),h=m("a"),c=m("section"),d=m("small"),w=S("← Revenir à la liste d'articles"),L=A(),j=m("br"),H=A(),y=m("hgroup"),q=m("h1"),U=S(I),Y=A(),R=m("p"),Z=S("Publié le "),V=S(B),z=A(),$=m("div");for(let e=0;e<f.length;e+=1)f[e].c();G=A(),J=m("br"),K=A(),k=m("div"),n&&_e(n.$$.fragment),this.h()},l(e){const l=Pe("svelte-ylbs26",document.head);o=u(l,"META",{property:!0,content:!0}),s=u(l,"META",{property:!0,content:!0}),l.forEach(a),g=M(e),h=u(e,"A",{href:!0});var r=b(h);c=u(r,"SECTION",{class:!0});var C=b(c);d=u(C,"SMALL",{});var ne=b(d);w=T(ne,"← Revenir à la liste d'articles"),ne.forEach(a),C.forEach(a),r.forEach(a),L=M(e),j=u(e,"BR",{}),H=M(e),y=u(e,"HGROUP",{});var N=b(y);q=u(N,"H1",{});var ie=b(q);U=T(ie,I),ie.forEach(a),Y=M(N),R=u(N,"P",{});var ae=b(R);Z=T(ae,"Publié le "),V=T(ae,B),ae.forEach(a),N.forEach(a),z=M(e),$=u(e,"DIV",{});var se=b($);for(let le=0;le<f.length;le+=1)f[le].l(se);se.forEach(a),G=M(e),J=u(e,"BR",{}),K=M(e),k=u(e,"DIV",{});var fe=b(k);n&&we(n.$$.fragment,fe),fe.forEach(a),this.h()},h(){E(o,"property","og:type"),E(o,"content","article"),E(s,"property","og:title"),E(s,"content",_=i[0].meta.title),E(c,"class","svelte-1r4qob1"),E(h,"href","/blog")},m(e,l){p(document.head,o),p(document.head,s),v(e,g,l),v(e,h,l),p(h,c),p(c,d),p(d,w),v(e,L,l),v(e,j,l),v(e,H,l),v(e,y,l),p(y,q),p(q,U),p(y,Y),p(y,R),p(R,Z),p(R,V),v(e,z,l),v(e,$,l);for(let r=0;r<f.length;r+=1)f[r]&&f[r].m($,null);v(e,G,l),v(e,J,l),v(e,K,l),v(e,k,l),n&&me(n,k,null),P=!0},p(e,[l]){if((!P||l&1)&&t!==(t=e[0].meta.title)&&(document.title=t),(!P||l&1&&_!==(_=e[0].meta.title))&&E(s,"content",_),(!P||l&1)&&I!==(I=e[0].meta.title+"")&&re(U,I),(!P||l&1)&&B!==(B=ve(e[0].meta.date)+"")&&re(V,B),l&1){D=e[0].meta.tags;let r;for(r=0;r<D.length;r+=1){const C=he(e,D,r);f[r]?f[r].p(C,l):(f[r]=be(C),f[r].c(),f[r].m($,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=D.length}if(l&1&&O!==(O=e[0].content)){if(n){Re();const r=n;ue(r.$$.fragment,1,0,()=>{de(r,1)}),Ae()}O?(n=ce(O,oe()),_e(n.$$.fragment),pe(n.$$.fragment,1),me(n,k,null)):n=null}},i(e){P||(X||F(()=>{X=Q(c,W,{}),X.start()}),x||F(()=>{x=Q(y,W,{delay:50}),x.start()}),ee||F(()=>{ee=Q($,W,{delay:100}),ee.start()}),n&&pe(n.$$.fragment,e),te||F(()=>{te=Q(k,W,{delay:150}),te.start()}),P=!0)},o(e){n&&ue(n.$$.fragment,e),P=!1},d(e){a(o),a(s),e&&a(g),e&&a(h),e&&a(L),e&&a(j),e&&a(H),e&&a(y),e&&a(z),e&&a($),Me(f,e),e&&a(G),e&&a(J),e&&a(K),e&&a(k),n&&de(n)}}}function qe(i,t,o){let{data:s}=t;return i.$$set=_=>{"data"in _&&o(0,s=_.data)},[s]}class Ue extends Ee{constructor(t){super(),$e(this,t,qe,Te,ke,{data:0})}}export{Ue as component,He as universal};