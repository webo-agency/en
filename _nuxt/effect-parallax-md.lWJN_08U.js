import{a as i,b as f}from"./index.E4eJjLus.js";import{r as n,J as p,V as m,b as d,c as v,e as h,E as x,n as y}from"./entry.GFRmWXYq.js";const S={__name:"effect-parallax-md",props:{innerClass:{type:String,default:""},parallaxScale:{type:Number,default:.1},startBottom:{type:Boolean,default:!1}},setup(t){const l=t,r=n(null),e=n(null),{height:o}=i(),{y:s,height:c}=f(r),u=p(()=>`transform: translateY(${(l.startBottom?-(s.value+c.value-o.value):-s.value)*l.parallaxScale}px)`);return m(u,a=>{e.value&&a&&(e.value.style=a)}),(a,B)=>(d(),v("div",{ref_key:"container",ref:r,class:"relative w-full"},[h("div",{ref_key:"parallaxEl",ref:e,class:y(["will-change-transform",t.innerClass])},[x(a.$slots,"default")],2)],512))}};export{S as default};
