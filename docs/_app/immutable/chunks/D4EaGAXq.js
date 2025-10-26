import{D as i,S as c}from"./VEC4f2JN.js";function s(n){if(i){const e=new Error(`lifecycle_outside_component
\`${n}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function p(){const n=new Error(`await_invalid
Encountered asynchronous work while rendering synchronously.
https://svelte.dev/e/await_invalid`);throw n.name="Svelte error",n}function v(n){const e=new Error(`lifecycle_function_unavailable
\`${n}(...)\` is not available on the server
https://svelte.dev/e/lifecycle_function_unavailable`);throw e.name="Svelte error",e}var t=null;function d(n){t=n}function h(){const n={};return[()=>a(n),e=>u(n,e)]}function a(n){return o("getContext").get(n)}function u(n,e){return o("setContext").set(n,e),e}function m(n){return o("hasContext").has(n)}function w(){return o("getAllContexts")}function o(n){return t===null&&s(n),t.c??=new Map(f(t)||void 0)}function x(n){t={p:t,c:null,r:null},i&&(t.function=n,t.element=t.p?.element)}function g(){t=t.p}function f(n){let e=n.p;for(;e!==null;){const r=e.c;if(r!==null)return r;e=e.p}return null}let l=null;function y(){l?.abort(c),l=null}function C(){return(l??=new AbortController).signal}export{t as a,p as b,g as c,y as d,u as e,h as f,a as g,C as h,w as i,m as j,v as l,x as p,d as s};
