import{_ as rt}from"../chunks/preload-helper.41c905a7.js";import{e as Et}from"../chunks/index.93323930.js";import{S as yt,i as $t,s as Pt,x as _t,k as u,a as R,q as I,y as ut,J as kt,l as c,h as l,c as T,m as b,r as L,z as At,n as y,C as p,b as v,A as ct,u as ot,d as pt,f as Rt,g as dt,K as F,T as Tt,B as vt,v as wt,L as Q}from"../chunks/index.10e299b3.js";import{f as ht}from"../chunks/utils.65a8c901.js";import{f as W}from"../chunks/index.afdb4369.js";const Dt=(n,e)=>{const o=n[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((s,_)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(_.bind(null,new Error("Unknown variable dynamic import: "+e)))})},Ot=!0;async function It({params:n}){try{const e=await Dt(Object.assign({"../../../cms/blog/2023-05-27-super-titre-de-blog.md":()=>rt(()=>import("../chunks/2023-05-27-super-titre-de-blog.07cf55d1.js"),["../chunks/2023-05-27-super-titre-de-blog.07cf55d1.js","../chunks/index.10e299b3.js"],import.meta.url),"../../../cms/blog/2023-06-02-blogpost-de-test.md":()=>rt(()=>import("../chunks/2023-06-02-blogpost-de-test.5530a94a.js"),["../chunks/2023-06-02-blogpost-de-test.5530a94a.js","../chunks/index.10e299b3.js"],import.meta.url),"../../../cms/blog/2023-06-02-investigation-super-importante-contre-des-super-méchants.md":()=>rt(()=>import("../chunks/2023-06-02-investigation-super-importante-contre-des-super-méchants.9bcedca2.js"),["../chunks/2023-06-02-investigation-super-importante-contre-des-super-méchants.9bcedca2.js","../chunks/index.10e299b3.js"],import.meta.url)}),`../../../cms/blog/${n.slug}.md`);return{content:e.default,meta:e.metadata}}catch{throw Et(404,"Could not find ${params.slug}")}}const jt=Object.freeze(Object.defineProperty({__proto__:null,load:It,prerender:Ot},Symbol.toStringTag,{value:"Module"}));function bt(n,e,o){const s=n.slice();return s[1]=e[o],s}function gt(n){let e,o,s,_=n[1]+"",g,h;return{c(){e=u("a"),o=u("kbd"),s=I("#"),g=I(_),this.h()},l(m){e=c(m,"A",{href:!0});var d=b(e);o=c(d,"KBD",{});var A=b(o);s=L(A,"#"),g=L(A,_),A.forEach(l),d.forEach(l),this.h()},h(){y(e,"href",h="/blog/tags/"+n[1])},m(m,d){v(m,e,d),p(e,o),p(o,s),p(o,g)},p(m,d){d&1&&_!==(_=m[1]+"")&&ot(g,_),d&1&&h!==(h="/blog/tags/"+m[1])&&y(e,"href",h)},d(m){m&&l(e)}}}function Lt(n){let e,o,s,_,g,h,m,d,A,X,B,C,j,E,M,S=n[0].meta.title+"",H,Y,w,Z,q=ht(n[0].meta.date)+"",z,x,K,$,tt,U,G,J,P,i,et,k;document.title=e=n[0].meta.title;let D=n[0].meta.tags,f=[];for(let t=0;t<D.length;t+=1)f[t]=gt(bt(n,D,t));var O=n[0].content;function it(t){return{}}return O&&(i=_t(O,it())),{c(){o=u("meta"),s=u("meta"),g=R(),h=u("a"),m=u("section"),d=u("small"),A=I("← Revenir à la liste d'articles"),B=R(),C=u("br"),j=R(),E=u("hgroup"),M=u("h1"),H=I(S),Y=R(),w=u("p"),Z=I("Publié le "),z=I(q),K=R(),$=u("div");for(let t=0;t<f.length;t+=1)f[t].c();U=R(),G=u("br"),J=R(),P=u("div"),i&&ut(i.$$.fragment),this.h()},l(t){const a=kt("svelte-ylbs26",document.head);o=c(a,"META",{property:!0,content:!0}),s=c(a,"META",{property:!0,content:!0}),a.forEach(l),g=T(t),h=c(t,"A",{href:!0});var r=b(h);m=c(r,"SECTION",{class:!0});var V=b(m);d=c(V,"SMALL",{});var nt=b(d);A=L(nt,"← Revenir à la liste d'articles"),nt.forEach(l),V.forEach(l),r.forEach(l),B=T(t),C=c(t,"BR",{}),j=T(t),E=c(t,"HGROUP",{});var N=b(E);M=c(N,"H1",{});var st=b(M);H=L(st,S),st.forEach(l),Y=T(N),w=c(N,"P",{});var lt=b(w);Z=L(lt,"Publié le "),z=L(lt,q),lt.forEach(l),N.forEach(l),K=T(t),$=c(t,"DIV",{});var ft=b($);for(let at=0;at<f.length;at+=1)f[at].l(ft);ft.forEach(l),U=T(t),G=c(t,"BR",{}),J=T(t),P=c(t,"DIV",{});var mt=b(P);i&&At(i.$$.fragment,mt),mt.forEach(l),this.h()},h(){y(o,"property","og:type"),y(o,"content","article"),y(s,"property","og:title"),y(s,"content",_=n[0].meta.title),y(m,"class","svelte-1r4qob1"),y(h,"href","/blog")},m(t,a){p(document.head,o),p(document.head,s),v(t,g,a),v(t,h,a),p(h,m),p(m,d),p(d,A),v(t,B,a),v(t,C,a),v(t,j,a),v(t,E,a),p(E,M),p(M,H),p(E,Y),p(E,w),p(w,Z),p(w,z),v(t,K,a),v(t,$,a);for(let r=0;r<f.length;r+=1)f[r]&&f[r].m($,null);v(t,U,a),v(t,G,a),v(t,J,a),v(t,P,a),i&&ct(i,P,null),k=!0},p(t,[a]){if((!k||a&1)&&e!==(e=t[0].meta.title)&&(document.title=e),(!k||a&1&&_!==(_=t[0].meta.title))&&y(s,"content",_),(!k||a&1)&&S!==(S=t[0].meta.title+"")&&ot(H,S),(!k||a&1)&&q!==(q=ht(t[0].meta.date)+"")&&ot(z,q),a&1){D=t[0].meta.tags;let r;for(r=0;r<D.length;r+=1){const V=bt(t,D,r);f[r]?f[r].p(V,a):(f[r]=gt(V),f[r].c(),f[r].m($,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=D.length}if(a&1&&O!==(O=t[0].content)){if(i){wt();const r=i;pt(r.$$.fragment,1,0,()=>{vt(r,1)}),Rt()}O?(i=_t(O,it()),ut(i.$$.fragment),dt(i.$$.fragment,1),ct(i,P,null)):i=null}},i(t){k||(X||F(()=>{X=Q(m,W,{}),X.start()}),x||F(()=>{x=Q(E,W,{delay:50}),x.start()}),tt||F(()=>{tt=Q($,W,{delay:100}),tt.start()}),i&&dt(i.$$.fragment,t),et||F(()=>{et=Q(P,W,{delay:150}),et.start()}),k=!0)},o(t){i&&pt(i.$$.fragment,t),k=!1},d(t){l(o),l(s),t&&l(g),t&&l(h),t&&l(B),t&&l(C),t&&l(j),t&&l(E),t&&l(K),t&&l($),Tt(f,t),t&&l(U),t&&l(G),t&&l(J),t&&l(P),i&&vt(i)}}}function Mt(n,e,o){let{data:s}=e;return n.$$set=_=>{"data"in _&&o(0,s=_.data)},[s]}class Ht extends yt{constructor(e){super(),$t(this,e,Mt,Lt,Pt,{data:0})}}export{Ht as component,jt as universal};
