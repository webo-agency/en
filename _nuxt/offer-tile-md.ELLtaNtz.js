import{_}from"./nuxt-picture.yYyz6G7V.js";import{_ as p}from"./custom-link.0FoJm6o2.js";import x from"./effect-appear-md.qV5XvTDc.js";import{r}from"./slot.EJ7Jp1Kn.js";import{k,L as h,b as t,c as s,g as a,w as c,D as d,f as n,n as l,e as m}from"./entry.zydDV-Eq.js";import"./composables.8GyuWPiU.js";import"./vue.f36acd1f.Tem9COiu.js";import"./nuxt-link.0cel39JL.js";import"./index.fbU_tfDU.js";import"./node.uMQX-T_c.js";const g={name:"OfferTileMdc",props:{link:String,icon:String,technologies:String,delay:{type:Number,default:0}},components:{EffectAppearMdc:x,CustomLink:p}},b={class:"self-stretch mb-5"},y={class:"description mb-10 tablet:mb-[60px]"},v={key:0,class:"text-sm desktop:text-sm font-normal leading-normal"},w={xmlns:"http://www.w3.org/2000/svg",width:"23",height:"30",viewBox:"0 0 23 30",fill:"none"};function B(o,L,e,M,C,A){const i=_,f=p,u=h("EffectAppearMdc");return t(),s("div",b,[a(u,{class:"desktop-delay h-full",delay:e.delay*100},{default:c(()=>[a(f,{url:e.link??"",activeClass:"none",class:"group h-full p-5 pt-10 desktop-wide:px-10 tablet:pt-[60px] flex flex-col text-gray-darker bg-green-gray transition duration-200"},{default:c(()=>[e.icon?(t(),d(i,{key:0,class:"shrink-0 w-20 h-[60px] mb-5 tablet:mb-9",src:e.icon},null,8,["src"])):n("",!0),o.$slots.title?(t(),s("div",{key:1,class:l(["title max-w-fit mb-5 text-xl desktop:text-2xl font-semibold",[{"group-hover:underline":e.link}]])},[r(o.$slots,"title")],2)):n("",!0),m("div",y,[o.$slots.description?(t(),s("div",v,[r(o.$slots,"description")])):n("",!0),e.technologies?(t(),d(i,{key:1,class:"block min-w-[230px] h-[50px] mb-2 mt-5",src:e.technologies},null,8,["src"])):n("",!0)]),o.$slots.readMoreText?(t(),s("div",{key:2,class:l(["mt-auto border-t border-[#e4efeddd] pt-[20px] text-base text-gray-darker font-semibold flex justify-between transition duration-200",{"group-hover:text-[#08DBBA]":e.link}])},[r(o.$slots,"readMoreText"),(t(),s("svg",w,[m("path",{d:"M15.0863 7.11133L13.7605 8.43713L19.3853 14.062H0V15.937H19.3852L13.7605 21.5617L15.0863 22.8875L22.9745 14.9994L15.0863 7.11133Z",fill:"#202020",class:l(["transition duration-200",{"group-hover:fill-[#08DBBA]":e.link}])},null,2)]))],2)):n("",!0)]),_:3},8,["url"])]),_:3},8,["delay"])])}const Z=k(g,[["render",B]]);export{Z as default};