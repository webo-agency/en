import{r as o}from"./slot.1c37c394.js";import{_ as i,o as a,c as s,a as r,n as l,g as d,l as n}from"./entry.b558cb43.js";import"./node.d23d14fe.js";const c={name:"BlockHeaderMdc",props:{maxWidth:{type:Number,default:620},descriptionFullWidth:{type:Boolean,default:!1},textWhite:Boolean,center:Boolean}};function u(e,m,t,x,f,p){return a(),s("div",null,[r("div",{class:l(t.textWhite?"text-white":"text-gray-darker")},[e.$slots.subtitle?(a(),s("div",{key:0,class:l(["subtitle text-base desktop:text-lg",{"text-center":t.center}])},[o(e.$slots,"subtitle",{},void 0,!0)],2)):d("",!0),e.$slots.title?(a(),s("div",{key:1,class:l(["title text-2xl tablet:text-3xl desktop:text-4xl font-semibold",[{" mx-auto text-center":t.center},{"mb-7 desktop:mb-12 ":e.$slots.description}]]),style:n([{"max-width":t.maxWidth+"px"}])},[o(e.$slots,"title",{},void 0,!0)],6)):d("",!0),e.$slots.description?(a(),s("div",{key:2,class:l(["text-base desktop:text-lg font-normal",{" mx-auto text-center":t.center}]),style:n([{"max-width":t.descriptionFullWidth?"none":t.maxWidth+"px"}])},[o(e.$slots,"description",{},void 0,!0)],6)):d("",!0)],2)])}const h=i(c,[["render",u],["__scopeId","data-v-3faa7ae2"]]);export{h as default};
