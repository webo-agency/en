import{_ as w}from"./nuxt-picture.9da09e74.js";import k from"./effect-appear-md.72c84b3d.js";import{a as g,u}from"./index.ba840dc5.js";import{r as p}from"./slot.d82eb2b6.js";import{k as y,r as I,I as B,K as C,b as n,c as l,g as A,w as E,e as f,n as o,C as M,f as s}from"./entry.accf8e16.js";import"./vue.f36acd1f.53099d08.js";import"./node.e4a9c3bc.js";const N={name:"IconTile",props:{delay:Number,iconUrl:String,iconInline:Boolean,line:{type:Boolean,default:!0}},components:{EffectAppearMdc:k},async setup(){const t=I(null),{x:_,y:e,top:i,right:b,bottom:h,left:c,width:r,height:d}=g(t),a=u().height,m=u().width,x=B(()=>{let v=m.value>=640;return a.value/2-(d.value+36)<e.value&&e.value<a.value/2&&!v});return{container:t,y:e,height:d,windowHeight:a,windowWidth:m,focusActive:x}}},S={class:"basis-full tablet-small:basis-1/2 desktop:basis-1/3"},T={key:1,class:"w-full mb-5 desktop:mb-[30px] leading-7 text-sm desktop:text-base font-normal"};function U(t,_,e,i,b,h){const c=w,r=C("EffectAppearMdc");return n(),l("li",S,[A(r,{delay:e.delay?e.delay*100:0},{default:E(()=>[f("div",{ref:"container",class:o(["tile max-w-md tablet-small:mr-[75px] mb-10 desktop:mb-16 group",{"flex flex-wrap items-center":e.iconInline}])},[f("div",{class:o(["w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px]",e.iconInline?"shrink-0 mb-5 mr-5":"mb-2.5 "])},[e.iconUrl?(n(),M(c,{key:0,class:"block shrink-0 w-full h-full overflow-hidden object-contain p-[5px] desktop:p-2.5 rounded-[5px] bg-green-light",src:e.iconUrl,imgAttrs:{class:"w-full h-full object-contain"}},null,8,["src"])):s("",!0)],2),t.$slots.title?(n(),l("div",{key:0,class:o(["max-w-sm text-lg desktop:text-xl font-semibold",e.iconInline?"basis-[calc(100%_-_60px)] tablet:basis-[calc(100%_-_80px)] mb-5":"mb-5 "])},[p(t.$slots,"title",{},void 0,!0)],2)):s("",!0),t.$slots.description?(n(),l("div",T,[p(t.$slots,"description",{},void 0,!0)])):s("",!0),e.line?(n(),l("div",{key:2,class:o(["line relative w-[135px] h-0.5 rounded-full bg-gray-light overflow-hidden",{active:i.focusActive}])},null,2)):s("",!0)],2)]),_:3},8,["delay"])])}const F=y(N,[["render",U],["__scopeId","data-v-3d36cc1f"]]);export{F as default};
