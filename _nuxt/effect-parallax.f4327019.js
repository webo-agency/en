import{a as c}from"./index.f454bd0c.js";import{m as i,c as p,P as f,$ as m,f as u,g as d,h as _,E as x,n as h,K as S}from"./entry.01340810.js";const y={name:"EffectParallax",props:{innerClass:{type:String,default:""},parallaxScale:{type:Number,default:.1}},setup(e){const t=p(null),{x:s,y:a,top:l,right:n,bottom:$,left:b,width:B,height:E}=c(t),o=f(e,"parallaxScale"),r=m(()=>({transform:`translateY(${-a.value*o.value}px)`}));return{container:t,y:a,parallaxStyle:r}}},g={ref:"container",class:"absolute inset-0 overflow-hidden"};function v(e,t,s,a,l,n){return u(),d("div",g,[_("div",{class:h(["absolute will-change-transform",s.innerClass]),style:S(a.parallaxStyle)},[x(e.$slots,"default")],6)],512)}const k=i(y,[["render",v]]);export{k as _};
