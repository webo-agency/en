import C from"./ContentRenderer.g09YCcWz.js";import{_ as S}from"./button-main.gNdOmVVo.js";import{C as P,k as D,b as l,D as f,w as k,E as h,e as _,c as d,f as g,n as L,G as b,q as B,H as M,I as m,m as N,J as v,g as E}from"./entry.zydDV-Eq.js";import{a as q,q as I}from"./query.wgbsbN9Z.js";import{u as R}from"./composables.8GyuWPiU.js";import{u as y}from"./vue.f36acd1f.Tem9COiu.js";import"./ContentRendererMarkdown.vue.8Gso0I7j.js";import"./index.1dSrIji7.js";import"./preview.WnpUASHM.js";import"./custom-link.0FoJm6o2.js";import"./nuxt-link.0cel39JL.js";function V(a,n){const{title:t,titleTemplate:o,...e}=a;return y({title:t,titleTemplate:o,_flatMeta:e},{...n,transform(r){const u=P({...r._flatMeta});return delete r._flatMeta,{...r,meta:u}}})}const A={name:"PageSection",props:{wrapper:{type:String,default:"section"},classes:{type:String}}},G={key:0,class:"px-5 tablet:px-10 desktop:px-20"},H={class:"mx-auto max-w-screen-desktop-wide"},O={key:1,class:"w-full"};function T(a,n,t,o,e,r){return l(),f(b(t.wrapper),{class:L("relative w-full "+t.classes)},{default:k(()=>[a.$slots.default?(l(),d("div",G,[_("div",H,[h(a.$slots,"default")])])):g("",!0),a.$slots.full?(l(),d("div",O,[h(a.$slots,"full")])):g("",!0)]),_:3},8,["class"])}const j=D(A,[["render",T]]),z={PL:"pl-PL",EN:"en-US"},J={PL:"https://webo.pl",EN:"https://webo.agency"};function K(a){if(!a)return[];let n=[];for(const[t,o]of Object.entries(a)){let e={lang:t,hreflang:z[t],href:J[t]+o};n.push(e)}return n}const U={class:"my-[150px]"},Y=_("h1",{class:"text-2xl mb-5"},"Document is empty",-1),re={__name:"[...slug]",async setup(a){let n,t;const o=B(),{data:e}=([n,t]=M(()=>q("page-data-"+o.fullPath.split("#")[0].split("?")[0],()=>I(o.path).findOne(),"$SyfKxcvwYG")),n=await n,t(),n),r=m(()=>K(e.value.hreflangs));N("hrefLangs"+o.fullPath.split("#")[0],()=>r.value);const u=m(()=>r.value.map(s=>({rel:"alternate",href:s.href,hreflang:s.hreflang}))),w=R(),x=m(()=>{var p,i,c;if(!e.value)return;let s={};return(p=e.value.introduction)!=null&&p.title&&(s.title=e.value.introduction.title,s.ogTitle=e.value.introduction.title),(i=e.value.introduction)!=null&&i.description&&(s.description=e.value.introduction.description,s.ogDescription=e.value.introduction.description),(c=e.value.image)!=null&&c.url&&(s.ogImage=w(e.value.image.url)),s});return V(x.value),y({link:u}),(s,p)=>{const i=C,c=S,$=j;return l(),d("div",null,[v(e)?(l(),f(i,{key:0,value:v(e)},null,8,["value"])):(l(),f($,{key:1},{default:k(()=>[_("div",U,[Y,E(c,{class:"text-white",link:"/",title:"Back to home"})])]),_:1}))])}}};export{re as default};