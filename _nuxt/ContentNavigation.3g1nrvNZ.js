import{q as f,w as m,e as v,s as g,j as d,u as l,a as h}from"./query.6hQunS3P.js";import{l as _,a7 as p,_ as y,d as C,as as w,I as P,m as $,ap as N,ac as r}from"./entry.oghj7BIW.js";import{u as j}from"./preview.aaJN5eNP.js";import{_ as T}from"./nuxt-link.tV7wsN9L.js";import"./index.9ELg4rfW.js";const D=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./client-db.ZgwbCwNH.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:d(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&$("dd-navigation").value){const{navigation:n}=l();return{navigation:n}}const{data:s}=await h(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=N(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=E;export{R as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.ZgwbCwNH.js","./entry.oghj7BIW.js","./index.LXYqXHhh.js","./index.9ELg4rfW.js","./query.6hQunS3P.js","./preview.aaJN5eNP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}