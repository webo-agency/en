import{k as i,b as a,c,n as l,e as t}from"./entry.QYmnybOd.js";const h={data(){return{isMounted:!1}},props:{getContainerRef:{type:Function,default:()=>({})}},mounted(){setTimeout(()=>{this.isMounted=!0},500)},methods:{scrollDown(){const e=this.getContainerRef();if(e){const s=e.clientHeight;window.scrollTo({top:s,behavior:"smooth"})}}}},d=t("svg",{width:"23",height:"35",viewBox:"0 0 23 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("rect",{class:"path1b",x:"1",y:"0.75",width:"20.5",height:"33.5",rx:"4.25",stroke:"white","stroke-width":"1.5"}),t("rect",{class:"path1 fill-green-main/5 group-hover:fill-green-main/20 transition duration-300",x:"1",y:"0.75",width:"20.5",height:"33.5",rx:"4.25",stroke:"#07E7C4","stroke-width":"1.5"}),t("path",{class:"path2",d:"M11 14V27",stroke:"#07E7C4","stroke-width":"2"})],-1),p=[d];function u(e,o,s,w,n,r){return a(),c("div",{class:l(["p-2 transition duration-500 group cursor-pointer",{"translate-y-10 opacity-20":!n.isMounted}]),role:"button",onClick:o[0]||(o[0]=g=>r.scrollDown())},p,2)}const f=i(h,[["render",u]]);export{f as _};
