import{f as i}from"./node.uMQX-T_c.js";import{d as u,ar as f,I as c,ag as a,a5 as d}from"./entry.NxW7uyIF.js";const p=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:r}=d(),{default:o}=f(),s=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:o,tags:s,parent:r}},render({use:t,unwrap:r,fallbackSlot:o,tags:s,parent:e}){var l;try{let n=t;return typeof t=="string"&&(n=(e==null?void 0:e.slots[t])||((l=e==null?void 0:e.parent)==null?void 0:l.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),n?r?i(n(),s):[n()]:o?o():a("div")}catch{return a("div")}}}),g=u({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return a(p,t)}});export{g as default};
