import{ag as h}from"./entry.b8a43932.js";const y=["p","h1","h2","h3","h4","h5","h6","li"];function f(r,t){return r.type===t||typeof r.type=="object"&&r.type.tag===t||r.tag===t}function n(r){return f(r,"text")||f(r,h)}function l(r){var t;return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof((t=r.children)==null?void 0:t.default)=="function"?r.children.default():[]}function u(r){if(!r)return"";if(Array.isArray(r))return r.map(u).join("");if(n(r))return r.children||r.value||"";const t=l(r);return Array.isArray(t)?t.map(u).filter(Boolean).join(""):""}function a(r,t=["p"]){if(Array.isArray(r))return r.flatMap(e=>a(e,t));let i=r;return t.some(e=>e==="*"||f(r,e))&&(i=l(r)||r,!Array.isArray(i)&&y.some(e=>f(r,e))&&(i=[i])),i}function p(r,t=["p"]){return r=Array.isArray(r)?r:[r],t.length?r.flatMap(i=>p(a(i,[t[0]]),t.slice(1))).filter(i=>!(n(i)&&u(i).trim()==="")):r}function A(r,t=["p"]){return p(r,t).reduce((i,e)=>(n(e)?typeof i[i.length-1]=="string"?i[i.length-1]+=e.children:i.push(e.children):i.push(e),i),[])}export{A as f};