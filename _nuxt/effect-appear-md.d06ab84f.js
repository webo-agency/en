import{a as f,u as n}from"./index.e3ba29cb.js";import{k as p,r as h,I as _,b as m,c as v,D as y,n as w,M as g}from"./entry.42251303.js";const M={name:"EffectAppearMdc",props:{delay:{type:Number,default:0}},async setup(){const e=h(null),{x:o,y:t,top:r,right:i,bottom:c,left:k,width:A,height:s}=f(e),a=n().height,d=n().width,l=_(()=>{let u=s.value*.5>200?200:s.value*.5;return t.value<a.value-(d.value>768?u:150)});return{container:e,y:t,height:s,windowHeight:a,isVisible:l}},data(){return{visited:!1}},watch:{isVisible(e){e&&(this.visited=!0)}},mounted(){setTimeout(()=>{this.checkAfterMount()},200)},methods:{checkAfterMount(){this.y<this.windowHeight&&(this.visited=!0)}}};function b(e,o,t,r,i,c){return m(),v("div",{ref:"container",class:w(["transition duration-500",{"opacity-0 translate-y-2.5":!i.visited}]),style:g({"transition-delay":t.delay+"ms"})},[y(e.$slots,"default",{},void 0,!0)],6)}const z=p(M,[["render",b],["__scopeId","data-v-dea16125"]]);export{z as default};
