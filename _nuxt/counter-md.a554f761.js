import{b as o}from"./index.f0e96112.js";import{r as l}from"./slot.92cf4ff5.js";import{m as r,c as n,f as u,g as d,h as s,t as c}from"./entry.b8a43932.js";import"./node.4f78770b.js";const m={name:"Counter",props:{target:Number,symbol:String},setup(){const t=n(null),a=o(t);return{targetContainer:t,targetIsVisible:a}},data(){return{value:0,displayValue:0,visited:!1}},watch:{targetIsVisible(t){t&&(this.visited=!0,this.updateCounter())}},methods:{updateCounter(){const t=this.target/100;this.value<this.target&&(this.value=Math.round(this.value*1e4)/1e4+t,this.displayValue=Math.trunc(this.value),setTimeout(()=>{this.updateCounter()},10))}}},p={class:"basis-full tablet:basis-[300px] tablet-wide:basis-[400px] desktop-wide:basis-auto"},f={ref:"targetContainer",class:"flex flex-row"},h={class:"min-w-[75px] text-3xl desktop:text-4xl text-green-main tablet:mr-2 font-semibold"},b={class:"text-base desktop:text-xl font-semibold text-left"};function x(t,a,e,_,i,g){return u(),d("li",p,[s("div",f,[s("span",h,c(e.symbol==="+"?e.symbol+i.displayValue:i.displayValue+e.symbol),1),s("div",b,[l(t.$slots,"title")])],512)])}const k=r(m,[["render",x]]);export{k as default};