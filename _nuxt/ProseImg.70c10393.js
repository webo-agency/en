import{a as i,W as n,q as c,f as h,g as o,S as l}from"./entry.859eb832.js";import{a as u,c as d,j as f}from"./index.7572935c.js";const g=["src","alt","width","height"],S=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,r=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=u(d(c().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return f(s,t.src)}return t.src});return(a,s)=>(h(),o("img",{src:l(r),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{S as default};
