import{r as b,b as o,c as n,e as d,I as c,t as m,f as x,F as f,M as k,W as v,Z as y,V}from"./entry.e2Hrwscv.js";const _={class:"flex flex-wrap gap-x-5 gap-y-2.5 mb-5 tablet:mb-0"},w={key:0},T=["checked","value"],H={for:"clear",class:"block py-[9px] px-5 text-sm font-medium uppercase rounded-full transition duration-200 cursor-pointer bg-green-light border border-solid border-green-light hover:border-green-main peer-checked:border-green-main text-gray-darker peer-checked:bg-green-main peer-checked:hover:bg-green-mainHover peer-checked:text-white peer-checked:shadow-xl !shadow-green-mainHover/25"},B=["type","id","value"],C=["for"],D={__name:"filters-list",props:{clearText:{type:String,default:""},filters:{type:Array},modelValue:{type:Array,default:[]}},emits:["update:modelValue"],setup(r,{emit:p}){const t=r,e=b(t.modelValue?t.clearText?t.modelValue.join():t.modelValue:[]),h=()=>{e.value=t.clearText?null:[],u()},i=p,u=()=>{t.clearText?i("update:modelValue",e.value?[e.value]:[]):i("update:modelValue",e.value)};return(F,a)=>(o(),n("ul",_,[r.clearText?(o(),n("li",w,[d("input",{checked:!c(e)||c(e).length==0,type:"radio",id:"clear",name:"filters",value:r.clearText,class:"peer hidden",onChange:a[0]||(a[0]=l=>l.target.checked?h():null)},null,40,T),d("label",H,m(r.clearText),1)])):x("",!0),(o(!0),n(f,null,k(r.filters,(l,s)=>(o(),n("li",{key:s},[v(d("input",{"onUpdate:modelValue":a[1]||(a[1]=g=>V(e)?e.value=g:null),type:r.clearText?"radio":"checkbox",id:s,name:"filters",value:l,class:"peer hidden",onChange:u},null,40,B),[[y,c(e)]]),d("label",{for:s,class:"block py-[9px] px-5 text-sm font-medium uppercase rounded-full transition duration-200 cursor-pointer bg-green-light border border-solid border-green-light hover:border-green-main peer-checked:border-green-main text-gray-darker peer-checked:bg-green-main peer-checked:hover:bg-green-mainHover peer-checked:text-white peer-checked:shadow-xl !shadow-green-mainHover/25"},m(l),9,C)]))),128))]))}},M=D;export{M as _};
