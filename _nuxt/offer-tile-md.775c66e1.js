import{_ as f}from"./nuxt-picture.cf01d347.js";import{_ as d}from"./custom-link.769e28ed.js";import b from"./effect-appear-md.d06ab84f.js";import{r as a}from"./slot.5fe95e05.js";import{k as y,K as g,b as s,c as o,g as r,w as c,e as i,n as l,M as k,C as _,f as n}from"./entry.42251303.js";import"./vue.f36acd1f.3eafe850.js";import"./nuxt-link.c8bbe4c6.js";import"./index.e3ba29cb.js";import"./node.e4a9c3bc.js";const h={name:"OfferTileMdc",props:{link:String,icon:String,bgIcon:String,delay:{type:Number,default:0},stylesCustom:Boolean,stylesMinimal:{type:Boolean,default:!1}},components:{EffectAppearMdc:b,CustomLink:d}},x={class:"group h-full border-2 bg-white border-gray-light hover:border-green-main rounded-[5px] transition duration-200"},C={key:2,class:"flex flex-col justify-between h-full"},M={class:"mb-5 text-sm desktop:text-base font-normal"},v={key:0,class:"w-[135px] h-0.5 rounded-full bg-green-main"};function w(t,B,e,A,S,E){const m=f,p=d,u=g("EffectAppearMdc");return s(),o("div",{class:l(t.$slots.description||e.stylesMinimal?"basis-full tablet-small:basis-1/2 desktop-wide:basis-1/4":"basis-full tablet-small:basis-1/2")},[r(u,{class:"desktop-delay h-full",delay:e.delay*100},{default:c(()=>[i("div",{class:l(["h-full tablet-small:pr-2.5 desktop:pr-5",[e.stylesMinimal?"pb-2.5 desktop:pb-5":"pb-[15px] desktop:pb-[30px]"]])},[i("div",x,[r(p,{url:e.link,activeClass:"none",class:l(["flex h-full text-gray-darker bg-no-repeat bg-right-bottom",[t.$slots.description?"flex-col p-5 desktop:p-10 desktop:px-5 pt-6 desktop:pt-12":"",e.stylesCustom?"flex-col items-center text-center":"",e.stylesMinimal?"flex-col p-[30px] pt-7 desktop:pt-12":"p-5 desktop:px-10 desktop:pr-5"]]),style:k({"background-image":e.bgIcon?`url(${e.bgIcon})`:"none"})},{default:c(()=>[e.icon?(s(),_(m,{key:0,class:l(["shrink-0",{"mb-5":t.$slots.description||e.stylesMinimal},e.stylesCustom?"p-2.5 rounded-md bg-green-light":"mr-10"]),imgAttrs:{class:"w-10 h-10 object-contain"+(e.stylesCustom?" md:w-14 md:h-14":"")},src:e.icon?e.icon:"./icons/site.png"},null,8,["class","imgAttrs","src"])):n("",!0),t.$slots.title?(s(),o("div",{key:1,class:l(["max-w-sm text-lg desktop:text-xl font-semibold",[{"mb-5":t.$slots.description},{"group-hover:underline":e.stylesMinimal}]])},[a(t.$slots,"title")],2)):n("",!0),t.$slots.description?(s(),o("div",C,[i("div",M,[a(t.$slots,"description")]),!e.stylesCustom&&!e.stylesMinimal?(s(),o("div",v)):n("",!0)])):n("",!0)]),_:3},8,["url","class","style"])])],2)]),_:3},8,["delay"])],2)}const q=y(h,[["render",w]]);export{q as default};