import{r as d}from"./slot.0b9caa11.js";import{k as i,b as s,c as a,e as r,n as l,f as o,M as n}from"./entry.d58bde94.js";import"./node.e4a9c3bc.js";const c={name:"BlockHeaderMdc",props:{maxWidth:{type:Number,default:620},descriptionFullWidth:{type:Boolean,default:!1},textWhite:Boolean,center:Boolean}};function u(e,m,t,x,f,b){return s(),a("div",null,[r("div",{class:l(t.textWhite?"text-white":"text-gray-darker")},[e.$slots.subtitle?(s(),a("div",{key:0,class:l(["subtitle text-base desktop:text-lg",{"text-center":t.center}])},[d(e.$slots,"subtitle",{},void 0,!0)],2)):o("",!0),e.$slots.title?(s(),a("div",{key:1,class:l(["title text-2xl tablet:text-3xl desktop:text-4xl font-semibold",[{" mx-auto text-center":t.center},{"mb-7 desktop:mb-12 ":e.$slots.description}]]),style:n([{"max-width":t.maxWidth+"px"}])},[d(e.$slots,"title",{},void 0,!0)],6)):o("",!0),e.$slots.description?(s(),a("div",{key:2,class:l(["text-base desktop:text-lg font-normal",{" mx-auto text-center":t.center}]),style:n([{"max-width":t.descriptionFullWidth?"none":t.maxWidth+"px"}])},[d(e.$slots,"description",{},void 0,!0)],6)):o("",!0)],2)])}const h=i(c,[["render",u],["__scopeId","data-v-b7d9a4ad"]]);export{h as default};