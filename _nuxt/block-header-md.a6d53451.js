import{r as o}from"./slot.92cf4ff5.js";import{m as i,f as s,g as l,h as r,n as a,i as d,K as n}from"./entry.b8a43932.js";import"./node.4f78770b.js";const c={name:"BlockHeaderMdc",props:{maxWidth:{type:Number,default:620},descriptionFullWidth:{type:Boolean,default:!1},textWhite:Boolean,center:Boolean}};function u(e,m,t,x,f,p){return s(),l("div",null,[r("div",{class:a(t.textWhite?"text-white":"text-gray-darker")},[e.$slots.subtitle?(s(),l("div",{key:0,class:a(["subtitle text-base desktop:text-lg",{"text-center":t.center}])},[o(e.$slots,"subtitle",{},void 0,!0)],2)):d("",!0),e.$slots.title?(s(),l("div",{key:1,class:a(["title text-2xl tablet:text-3xl desktop:text-4xl font-semibold",[{" mx-auto text-center":t.center},{"mb-7 desktop:mb-12 ":e.$slots.description}]]),style:n([{"max-width":t.maxWidth+"px"}])},[o(e.$slots,"title",{},void 0,!0)],6)):d("",!0),e.$slots.description?(s(),l("div",{key:2,class:a(["text-base desktop:text-lg font-normal",{" mx-auto text-center":t.center}]),style:n([{"max-width":t.descriptionFullWidth?"none":t.maxWidth+"px"}])},[o(e.$slots,"description",{},void 0,!0)],6)):d("",!0)],2)])}const _=i(c,[["render",u],["__scopeId","data-v-5359cbd4"]]);export{_ as default};
