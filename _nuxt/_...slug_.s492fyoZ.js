import C from"./ContentRenderer.S26J3C6Z.js";import{_ as P}from"./button-main.K8azGK8M.js";import{C as S,k as D,b as l,D as d,w as k,E as h,e as _,c as f,f as g,n as L,G as b,q as B,H as M,I as m,m as N,J as v,g as q}from"./entry.fMBqrFJA.js";import{a as E,q as I}from"./query.pKOrLRvX.js";import{u as R}from"./composables.zVGulMI_.js";import{u as y}from"./vue.f36acd1f.Su4BQmaz.js";import"./ContentRendererMarkdown.vue.enHgTP8g.js";import"./index.1dSrIji7.js";import"./preview.5MWcLApY.js";import"./custom-link.TPeVBHyG.js";import"./nuxt-link.nGrNloQi.js";function V(a,s){const{title:t,titleTemplate:o,...e}=a;return y({title:t,titleTemplate:o,_flatMeta:e},{...s,transform(r){const u=S({...r._flatMeta});return delete r._flatMeta,{...r,meta:u}}})}const A={name:"PageSection",props:{wrapper:{type:String,default:"section"},classes:{type:String}}},G={key:0,class:"px-5 tablet:px-10 desktop:px-20"},H={class:"mx-auto max-w-screen-desktop-wide"},J={key:1,class:"w-full"};function O(a,s,t,o,e,r){return l(),d(b(t.wrapper),{class:L("relative w-full "+t.classes)},{default:k(()=>[a.$slots.default?(l(),f("div",G,[_("div",H,[h(a.$slots,"default")])])):g("",!0),a.$slots.full?(l(),f("div",J,[h(a.$slots,"full")])):g("",!0)]),_:3},8,["class"])}const T=D(A,[["render",O]]),j={PL:"pl-PL",EN:"en-US"},z={PL:"https://webo.pl",EN:"https://webo.agency"};function U(a){if(!a)return[];let s=[];for(const[t,o]of Object.entries(a)){let e={lang:t,hreflang:j[t],href:z[t]+o};s.push(e)}return s}const F={class:"my-[150px]"},K=_("h1",{class:"text-2xl mb-5"},"Document is empty",-1),re={__name:"[...slug]",async setup(a){let s,t;const o=B(),{data:e}=([s,t]=M(()=>E("page-data-"+o.fullPath.split("#")[0].split("?")[0],()=>I(o.path).findOne(),"$Gkqes5ICJs")),s=await s,t(),s),r=m(()=>U(e.value.hreflangs));N("hrefLangs"+o.fullPath.split("#")[0],()=>r.value);const u=m(()=>r.value.map(n=>({rel:"alternate",href:n.href,hreflang:n.hreflang}))),w=R(),x=m(()=>{var p,i,c;if(!e.value)return;let n={};return(p=e.value.introduction)!=null&&p.title&&(n.title=e.value.introduction.title,n.ogTitle=e.value.introduction.title),(i=e.value.introduction)!=null&&i.description&&(n.description=e.value.introduction.description,n.ogDescription=e.value.introduction.description),(c=e.value.image)!=null&&c.url&&(n.ogImage=w(e.value.image.url)),n});return V(x.value),y({link:u}),(n,p)=>{const i=C,c=P,$=T;return l(),f("div",null,[v(e)?(l(),d(i,{key:0,value:v(e)},null,8,["value"])):(l(),d($,{key:1},{default:k(()=>[_("div",F,[K,q(c,{class:"text-white",link:"/",title:"Back to home"})])]),_:1}))])}}};export{re as default};