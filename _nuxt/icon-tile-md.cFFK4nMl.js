import{_ as k}from"./nuxt-picture.mayGu6aN.js";import v from"./effect-appear-md.MOaSdip1.js";import{b as g,a as u}from"./index.gez3vuYA.js";import{r as p}from"./slot.jARwqL-1.js";import{k as y,r as I,I as B,L as A,b as o,c as n,g as C,w as E,n as l,D as M,f as s,e as f}from"./entry.oghj7BIW.js";import"./composables.m0qVsWew.js";import"./index.9ELg4rfW.js";import"./vue.f36acd1f.wctgimtq.js";import"./node.uMQX-T_c.js";const N={name:"IconTile",props:{delay:Number,iconUrl:String,iconInline:Boolean,line:{type:Boolean,default:!0}},components:{EffectAppearMdc:v},async setup(){const t=I(null),{x:b,y:e,top:i,right:_,bottom:h,left:c,width:r,height:d}=g(t),a=u().height,m=u().width,x=B(()=>{let w=m.value>=640;return a.value/2-(d.value+36)<e.value&&e.value<a.value/2&&!w});return{container:t,y:e,height:d,windowHeight:a,windowWidth:m,focusActive:x}}},S={class:"basis-full tablet-small:basis-1/2 desktop:basis-1/3"},U={key:1,class:"w-full mb-5 desktop:mb-[30px] leading-7 text-sm desktop:text-base font-normal"};function V(t,b,e,i,_,h){const c=k,r=A("EffectAppearMdc");return o(),n("li",S,[C(r,{delay:e.delay?e.delay*100:0},{default:E(()=>[f("div",{ref:"container",class:l(["tile max-w-md tablet-small:mr-[75px] mb-10 desktop:mb-16 group",{"flex flex-wrap items-center":e.iconInline}])},[f("div",{class:l(["w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px]",e.iconInline?"shrink-0 mb-5 mr-5":"mb-2.5 "])},[e.iconUrl?(o(),M(c,{key:0,class:"block shrink-0 w-full h-full overflow-hidden object-contain p-[5px] desktop:p-2.5 rounded-[5px] bg-green-light",src:e.iconUrl,imgAttrs:{class:"w-full h-full object-contain"}},null,8,["src"])):s("",!0)],2),t.$slots.title?(o(),n("div",{key:0,class:l(["max-w-sm text-lg desktop:text-xl font-semibold",e.iconInline?"basis-[calc(100%_-_60px)] tablet:basis-[calc(100%_-_80px)] mb-5":"mb-5 "])},[p(t.$slots,"title",{},void 0,!0)],2)):s("",!0),t.$slots.description?(o(),n("div",U,[p(t.$slots,"description",{},void 0,!0)])):s("",!0),e.line?(o(),n("div",{key:2,class:l(["line relative w-[135px] h-0.5 rounded-full bg-gray-light overflow-hidden",{active:i.focusActive}])},null,2)):s("",!0)],2)]),_:3},8,["delay"])])}const J=y(N,[["render",V],["__scopeId","data-v-78eaecea"]]);export{J as default};
