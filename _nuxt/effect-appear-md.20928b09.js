import{a as f,u as n}from"./index.f454bd0c.js";import{m as p,c as h,$ as m,f as _,g as v,E as y,n as w,K as g}from"./entry.01340810.js";const A={name:"EffectAppearMdc",props:{delay:{type:Number,default:0}},async setup(){const e=h(null),{x:o,y:t,top:r,right:i,bottom:c,left:M,width:b,height:s}=f(e),a=n().height,d=n().width,l=m(()=>{let u=s.value*.5>200?200:s.value*.5;return t.value<a.value-(d.value>768?u:150)});return{container:e,y:t,height:s,windowHeight:a,isVisible:l}},data(){return{visited:!1}},watch:{isVisible(e){e&&(this.visited=!0)}},mounted(){setTimeout(()=>{this.checkAfterMount()},200)},methods:{checkAfterMount(){this.y<this.windowHeight&&(this.visited=!0)}}};function E(e,o,t,r,i,c){return _(),v("div",{ref:"container",class:w(["transition duration-500",{"opacity-0 translate-y-2.5":!i.visited}]),style:g({"transition-delay":t.delay+"ms"})},[y(e.$slots,"default",{},void 0,!0)],6)}const $=p(A,[["render",E],["__scopeId","data-v-8e885ff3"]]);export{$ as default};