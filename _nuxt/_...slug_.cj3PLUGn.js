import C from"./ContentRenderer.dH_QokcS.js";import{_ as S}from"./button-main.HP5LqOgP.js";import{C as P,k as D,b as l,D as d,w as k,E as h,e as _,c as f,f as g,n as L,G as b,q as B,H as M,I as m,m as N,J as v,g as E}from"./entry.GQv8Bf0H.js";import{a as q,q as I}from"./query.YY4XkjuF.js";import{u as R}from"./composables.BKC-sYSN.js";import{u as y}from"./vue.f36acd1f.kj8vSwKS.js";import"./ContentRendererMarkdown.vue.eTNTJlXn.js";import"./index.1dSrIji7.js";import"./preview.4k7qnLRE.js";import"./custom-link.4YxDsfFh.js";import"./nuxt-link.rOxQNHEN.js";function T(a,n){const{title:t,titleTemplate:o,...e}=a;return y({title:t,titleTemplate:o,_flatMeta:e},{...n,transform(r){const u=P({...r._flatMeta});return delete r._flatMeta,{...r,meta:u}}})}const V={name:"PageSection",props:{wrapper:{type:String,default:"section"},classes:{type:String}}},A={key:0,class:"px-5 tablet:px-10 desktop:px-20"},H={class:"mx-auto max-w-screen-desktop-wide"},O={key:1,class:"w-full"};function U(a,n,t,o,e,r){return l(),d(b(t.wrapper),{class:L("relative w-full "+t.classes)},{default:k(()=>[a.$slots.default?(l(),f("div",A,[_("div",H,[h(a.$slots,"default")])])):g("",!0),a.$slots.full?(l(),f("div",O,[h(a.$slots,"full")])):g("",!0)]),_:3},8,["class"])}const j=D(V,[["render",U]]),z={PL:"pl-PL",EN:"en-US"},G={PL:"https://webo.pl",EN:"https://webo.agency"};function J(a){if(!a)return[];let n=[];for(const[t,o]of Object.entries(a)){let e={lang:t,hreflang:z[t],href:G[t]+o};n.push(e)}return n}const K={class:"my-[150px]"},Y=_("h1",{class:"text-2xl mb-5"},"Document is empty",-1),re={__name:"[...slug]",async setup(a){let n,t;const o=B(),{data:e}=([n,t]=M(()=>q("page-data-"+o.fullPath.split("#")[0].split("?")[0],()=>I(o.path).findOne(),"$TYsK6kUSdC")),n=await n,t(),n),r=m(()=>J(e.value.hreflangs));N("hrefLangs"+o.fullPath.split("#")[0],()=>r.value);const u=m(()=>r.value.map(s=>({rel:"alternate",href:s.href,hreflang:s.hreflang}))),w=R(),x=m(()=>{var p,i,c;if(!e.value)return;let s={};return(p=e.value.introduction)!=null&&p.title&&(s.title=e.value.introduction.title,s.ogTitle=e.value.introduction.title),(i=e.value.introduction)!=null&&i.description&&(s.description=e.value.introduction.description,s.ogDescription=e.value.introduction.description),(c=e.value.image)!=null&&c.url&&(s.ogImage=w(e.value.image.url)),s});return T(x.value),y({link:u}),(s,p)=>{const i=C,c=S,$=j;return l(),f("div",null,[v(e)?(l(),d(i,{key:0,value:v(e)},null,8,["value"])):(l(),d($,{key:1},{default:k(()=>[_("div",K,[Y,E(c,{class:"text-white",link:"/",title:"Back to home"})])]),_:1}))])}}};export{re as default};
