import{_ as s}from"./nuxt-picture.MLNvP3F-.js";import{k as r,b as e,c as a,e as i,D as n,n as c,f as o}from"./entry.OFycey9P.js";import"./composables.OM1iBtAS.js";import"./vue.f36acd1f.JHKKCg2M.js";const d={props:{imgUrl:String,alt:String,title:String,decoration:{type:Boolean,default:!0},gradient:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}}},m={class:"img-decorated relative w-full mb-20 tablet:mb-0 phone-wide:w-3/5 tablet:w-full mx-auto"},u={class:"relative block z-20 w-full"},_={key:1,class:"block bottom-0 inset-x-0 top-1/3 z-30 bg-gradient-to-t bg-gradient-from from-gray-darkest absolute"},f={key:0,class:"img-decoration [transform-style:preserve-3d] [transform:translateZ(-10px)] absolute w-1/2 h-1/3 z-0 -bottom-5 tablet:-bottom-[30px] desktop:-bottom-[50px] rounded-[5px] bg-gray-light"};function g(b,h,t,x,k,w){const l=s;return e(),a("div",m,[i("div",u,[t.imgUrl?(e(),n(l,{key:0,class:c(["rounded-[5px] w-full",{"shadow-2xl shadow-black/10":t.shadow}]),src:t.imgUrl,title:t.title?t.title:"Webo image",alt:t.alt?t.alt:"Webo image",imgAttrs:{class:"w-full h-full object-cover"}},null,8,["src","title","alt","class"])):o("",!0),t.gradient?(e(),a("div",_)):o("",!0)]),t.decoration?(e(),a("div",f)):o("",!0)])}const z=r(d,[["render",g],["__scopeId","data-v-5d1e2984"]]);export{z as default};