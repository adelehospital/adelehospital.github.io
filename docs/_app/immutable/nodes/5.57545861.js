import{S as W,i as X,s as Y,k as b,a as S,q,e as K,J as Z,l as k,h as c,c as j,m as E,r as B,n as A,C as m,b as O,u as H,g as R,L as N,D as y,U as F,M as Q}from"../chunks/index.1733a390.js";import{f as U}from"../chunks/utils.65a8c901.js";import{f as V}from"../chunks/index.96cf5f47.js";const $=!0;async function x({fetch:n,params:l}){return{posts:await(await n("../../api/posts")).json(),params:l}}const re=Object.freeze(Object.defineProperty({__proto__:null,load:x,prerender:$},Symbol.toStringTag,{value:"Module"}));function z(n,l,o){const s=n.slice();return s[2]=l[o].slug,s[3]=l[o].title,s[4]=l[o].date,s[5]=l[o].tags,s[7]=o,s}function G(n,l,o){const s=n.slice();return s[8]=l[o],s}function I(n){let l,o,s,f=n[8]+"",i,_;return{c(){l=b("a"),o=b("kbd"),s=q("#"),i=q(f),this.h()},l(u){l=k(u,"A",{href:!0});var h=E(l);o=k(h,"KBD",{});var d=E(o);s=B(d,"#"),i=B(d,f),d.forEach(c),h.forEach(c),this.h()},h(){A(l,"href",_="/articles/tags/"+n[8])},m(u,h){O(u,l,h),m(l,o),m(o,s),m(o,i)},p(u,h){h&2&&f!==(f=u[8]+"")&&H(i,f),h&2&&_!==(_="/articles/tags/"+u[8])&&A(l,"href",_)},d(u){u&&c(l)}}}function J(n){let l,o,s,f,i=n[3]+"",_,u,h,d=U(n[4])+"",C,L,P,w,v,p=n[5],a=[];for(let e=0;e<p.length;e+=1)a[e]=I(G(n,p,e));return{c(){l=b("a"),o=b("article"),s=b("hgroup"),f=b("h3"),_=q(i),u=S(),h=b("p"),C=q(d),L=S();for(let e=0;e<a.length;e+=1)a[e].c();w=S(),this.h()},l(e){l=k(e,"A",{href:!0});var r=E(l);o=k(r,"ARTICLE",{});var t=E(o);s=k(t,"HGROUP",{});var g=E(s);f=k(g,"H3",{});var D=E(f);_=B(D,i),D.forEach(c),u=j(g),h=k(g,"P",{});var T=E(h);C=B(T,d),T.forEach(c),g.forEach(c),L=j(t);for(let M=0;M<a.length;M+=1)a[M].l(t);t.forEach(c),w=j(r),r.forEach(c),this.h()},h(){A(l,"href",v="/articles/"+n[2])},m(e,r){O(e,l,r),m(l,o),m(o,s),m(s,f),m(f,_),m(s,u),m(s,h),m(h,C),m(o,L);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(o,null);m(l,w)},p(e,r){if(r&2&&i!==(i=e[3]+"")&&H(_,i),r&2&&d!==(d=U(e[4])+"")&&H(C,d),r&2){p=e[5];let t;for(t=0;t<p.length;t+=1){const g=G(e,p,t);a[t]?a[t].p(g,r):(a[t]=I(g),a[t].c(),a[t].m(o,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=p.length}r&2&&v!==(v="/articles/"+e[2])&&A(l,"href",v)},i(e){P||N(()=>{P=Q(o,V,{delay:n[7]*50}),P.start()})},o:y,d(e){e&&c(l),F(a,e)}}}function ee(n){let l,o,s,f,i,_,u,h=n[0].params.tag+"",d,C,L,P,w,v;document.title=l=n[0].params.tag;let p=n[1],a=[];for(let e=0;e<p.length;e+=1)a[e]=J(z(n,p,e));return{c(){o=b("meta"),f=S(),i=b("h1"),_=b("kbd"),u=q("#"),d=q(h),L=S(),P=b("br"),w=S();for(let e=0;e<a.length;e+=1)a[e].c();v=K(),this.h()},l(e){const r=Z("svelte-1qdxhf1",document.head);o=k(r,"META",{name:!0,content:!0}),r.forEach(c),f=j(e),i=k(e,"H1",{});var t=E(i);_=k(t,"KBD",{});var g=E(_);u=B(g,"#"),d=B(g,h),g.forEach(c),t.forEach(c),L=j(e),P=k(e,"BR",{}),w=j(e);for(let D=0;D<a.length;D+=1)a[D].l(e);v=K(),this.h()},h(){A(o,"name","description"),A(o,"content",s=n[0].params.tag)},m(e,r){m(document.head,o),O(e,f,r),O(e,i,r),m(i,_),m(_,u),m(_,d),O(e,L,r),O(e,P,r),O(e,w,r);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(e,r);O(e,v,r)},p(e,[r]){if(r&1&&l!==(l=e[0].params.tag)&&(document.title=l),r&1&&s!==(s=e[0].params.tag)&&A(o,"content",s),r&1&&h!==(h=e[0].params.tag+"")&&H(d,h),r&2){p=e[1];let t;for(t=0;t<p.length;t+=1){const g=z(e,p,t);a[t]?(a[t].p(g,r),R(a[t],1)):(a[t]=J(g),a[t].c(),R(a[t],1),a[t].m(v.parentNode,v))}for(;t<a.length;t+=1)a[t].d(1);a.length=p.length}},i(e){C||N(()=>{C=Q(i,V,{}),C.start()});for(let r=0;r<p.length;r+=1)R(a[r])},o:y,d(e){c(o),e&&c(f),e&&c(i),e&&c(L),e&&c(P),e&&c(w),F(a,e),e&&c(v)}}}function te(n,l,o){let s,{data:f}=l;return n.$$set=i=>{"data"in i&&o(0,f=i.data)},n.$$.update=()=>{n.$$.dirty&1&&o(1,s=f.posts.filter(i=>i.title.toLowerCase().indexOf(f.params.tag.toLowerCase())!==-1||i.tags.some(_=>_.toLowerCase().indexOf(f.params.tag.toLowerCase())!==-1)))},[f,s]}class se extends W{constructor(l){super(),X(this,l,te,ee,Y,{data:0})}}export{se as component,re as universal};
