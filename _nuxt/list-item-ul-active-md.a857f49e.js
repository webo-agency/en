import{_ as f}from"./nuxt-picture.8e2c16ba.js";import{_ as m}from"./effect-appear.d2147e97.js";import{r as n}from"./slot.02b9f58e.js";import{k as d,b as e,c as l,g as _,w as u,e as r,n as s,D as p,f as o}from"./entry.b8b3841e.js";import"./vue.f36acd1f.f1ee19f9.js";import"./index.449a121a.js";import"./node.e4a9c3bc.js";const b={props:{iconUrl:String,iconBig:{type:Boolean,default:!1},animated:{type:Boolean,default:!0}}},g={class:"tablet:ml-5 desktop:ml-9"},x={key:1,class:"mb-5"},h={key:2,class:"line relative w-[135px] h-0.5 rounded-full bg-gray-light overflow-hidden after:content-[''] after:absolute after:-top-0.5 after:right-full after:w-full after:h-2 after:bg-green-main tablet-small:after:translate-x-0 tablet-small:group-hover:after:translate-x-full after:transition after:duration-300"};function v(a,k,t,w,y,B){const i=f,c=m;return e(),l("li",null,[_(c,{toggleOpacity:!1},{default:u(()=>[r("div",{class:s(["flex flex-col tablet:flex-row",[t.animated?"li-faded pb-10 tablet:pb-16":"pb-5 tablet:pb-7"]])},[t.iconUrl?(e(),p(i,{key:0,src:t.iconUrl,class:s(["shrink-0",[t.iconBig?"w-12 tablet:w-[70px]":"w-10"]]),imgAttrs:{class:"w-full object-contain"}},null,8,["src","class"])):o("",!0),r("div",g,[a.$slots.title?(e(),l("div",{key:0,class:s(["mb-5 text-xl font-semibold",[t.iconBig?"mt-2 tablet:mt-5":"mt-2"]])},[n(a.$slots,"title")],2)):o("",!0),a.$slots.description?(e(),l("div",x,[n(a.$slots,"description")])):o("",!0),t.animated?(e(),l("div",h)):o("",!0)])],2)]),_:3})])}const S=d(b,[["render",v]]);export{S as default};