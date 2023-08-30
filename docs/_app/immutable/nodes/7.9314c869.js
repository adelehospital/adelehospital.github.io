import{_ as V}from"../chunks/preload-helper.41c905a7.js";import{e as J}from"../chunks/index.93323930.js";import{S as K,i as U,s as G,x as D,k as w,a as k,y as I,e as M,J as H,l as y,h as m,c as P,m as S,z as Q,n as u,C as A,b as h,A as O,d as T,f as W,g as b,L as F,B as j,U as X,p as Y,K as z,M as L,D as Z,v as x}from"../chunks/index.1733a390.js";import{f as R}from"../chunks/utils.65a8c901.js";import{f as N}from"../chunks/index.96cf5f47.js";const ee=!0;async function te({fetch:l}){try{const r=await V(()=>import("../chunks/podcast.92489234.js"),["../chunks/podcast.92489234.js","../chunks/index.1733a390.js"],import.meta.url),n=await(await l("api/podcasts")).json();return{content:r.default,meta:r.metadata,podcasts:n}}catch{throw J(404,"Could not find podcast")}}const ce=Object.freeze(Object.defineProperty({__proto__:null,load:te,prerender:ee},Symbol.toStringTag,{value:"Module"}));function q(l,r,t){const n=l.slice();return n[1]=r[t].date,n[2]=r[t].link,n[4]=t,n}function B(l){let r,t,n,a,d,_;return{c(){r=w("section"),t=w("iframe"),d=k(),this.h()},l(c){r=y(c,"SECTION",{});var f=S(r);t=y(f,"IFRAME",{title:!0,style:!0,src:!0,width:!0,height:!0,frameborder:!0,allow:!0,loading:!0}),S(t).forEach(m),d=P(f),f.forEach(m),this.h()},h(){u(t,"title",n="$"+R(l[1])+"-$"+l[2]),Y(t,"border-radius","12px"),z(t.src,a=l[2]+"?theme=0")||u(t,"src",a),u(t,"width","100%"),u(t,"height","152"),u(t,"frameborder","0"),t.allowFullscreen="",u(t,"allow","autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"),u(t,"loading","lazy")},m(c,f){h(c,r,f),A(r,t),A(r,d)},p(c,f){f&1&&n!==(n="$"+R(c[1])+"-$"+c[2])&&u(t,"title",n),f&1&&!z(t.src,a=c[2]+"?theme=0")&&u(t,"src",a)},i(c){_||F(()=>{_=L(r,N,{delay:l[4]*50}),_.start()})},o:Z,d(c){c&&m(r)}}}function ae(l){let r,t,n,a,d,_,c,f,v,E;var $=l[0].content;function C(e){return{}}$&&(a=D($,C()));let p=l[0].podcasts,s=[];for(let e=0;e<p.length;e+=1)s[e]=B(q(l,p,e));return{c(){r=w("meta"),t=k(),n=w("div"),a&&I(a.$$.fragment),_=k(),c=w("br"),f=k();for(let e=0;e<s.length;e+=1)s[e].c();v=M(),this.h()},l(e){const i=H("svelte-1kepm5p",document.head);r=y(i,"META",{name:!0,content:!0}),i.forEach(m),t=P(e),n=y(e,"DIV",{});var o=S(n);a&&Q(a.$$.fragment,o),o.forEach(m),_=P(e),c=y(e,"BR",{}),f=P(e);for(let g=0;g<s.length;g+=1)s[g].l(e);v=M(),this.h()},h(){document.title="Podcast",u(r,"name","description"),u(r,"content","Podcast")},m(e,i){A(document.head,r),h(e,t,i),h(e,n,i),a&&O(a,n,null),h(e,_,i),h(e,c,i),h(e,f,i);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,i);h(e,v,i),E=!0},p(e,[i]){if(i&1&&$!==($=e[0].content)){if(a){x();const o=a;T(o.$$.fragment,1,0,()=>{j(o,1)}),W()}$?(a=D($,C()),I(a.$$.fragment),b(a.$$.fragment,1),O(a,n,null)):a=null}if(i&1){p=e[0].podcasts;let o;for(o=0;o<p.length;o+=1){const g=q(e,p,o);s[o]?(s[o].p(g,i),b(s[o],1)):(s[o]=B(g),s[o].c(),b(s[o],1),s[o].m(v.parentNode,v))}for(;o<s.length;o+=1)s[o].d(1);s.length=p.length}},i(e){if(!E){a&&b(a.$$.fragment,e),d||F(()=>{d=L(n,N,{}),d.start()});for(let i=0;i<p.length;i+=1)b(s[i]);E=!0}},o(e){a&&T(a.$$.fragment,e),E=!1},d(e){m(r),e&&m(t),e&&m(n),a&&j(a),e&&m(_),e&&m(c),e&&m(f),X(s,e),e&&m(v)}}}function re(l,r,t){let{data:n}=r;return l.$$set=a=>{"data"in a&&t(0,n=a.data)},[n]}class fe extends K{constructor(r){super(),U(this,r,re,ae,G,{data:0})}}export{fe as component,ce as universal};