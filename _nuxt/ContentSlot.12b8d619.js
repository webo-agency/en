import{f as i}from"./node.e4a9c3bc.js";import{d as u,al as f,J as c,aa as r,a0 as d}from"./entry.cc8bcab8.js";const p=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:a}=d(),{default:o}=f(),s=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:o,tags:s,parent:a}},render({use:t,unwrap:a,fallbackSlot:o,tags:s,parent:e}){var l;try{let n=t;return typeof t=="string"&&(n=(e==null?void 0:e.slots[t])||((l=e==null?void 0:e.parent)==null?void 0:l.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),n?a?i(n(),s):[n()]:o?o():r("div")}catch{return r("div")}}}),g=u({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return r(p,t)}});export{g as default};