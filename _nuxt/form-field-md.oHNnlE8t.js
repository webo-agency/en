import{k as p,b as a,c as n,e as s,f as l,P as u,av as c,n as h}from"./entry.2Kpex6xU.js";import{r as o}from"./slot.CnRYHnqI.js";import"./node.uMQX-T_c.js";const _={data(){return{emailInput:""}},props:{type:String,name:String},computed:{isEmailValid(){return!!String(this.emailInput).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}}},f={key:0,class:"formText"},y=["name"],k={key:0},x={key:0},I={key:2,class:"formText"},v=["name"],w={key:0},T={key:3,class:"formText"},V=["type","name"],S={key:0};function g(t,r,e,z,i,d){return e.type=="text"?(a(),n("div",f,[s("input",{class:"textInput",type:"text",name:e.name?e.name:"text_field",placeholder:" "},null,8,y),t.$slots.placeholder?(a(),n("span",k,[o(t.$slots,"placeholder",{unwrap:"p"},void 0,!0)])):l("",!0)])):e.type=="email"?(a(),n("div",{key:1,class:h(["formText",{invalid:i.emailInput&&!d.isEmailValid}])},[u(s("input",{class:"textInput",type:"email",name:"mail","onUpdate:modelValue":r[0]||(r[0]=m=>i.emailInput=m),placeholder:" "},null,512),[[c,i.emailInput]]),t.$slots.placeholder?(a(),n("span",x,[o(t.$slots,"placeholder",{unwrap:"p"},void 0,!0)])):l("",!0)],2)):e.type=="textarea"?(a(),n("div",I,[s("textarea",{class:"textInput min-h-[60px] max-h-[500px]",name:e.name?e.name:"description",placeholder:" "},null,8,v),t.$slots.placeholder?(a(),n("span",w,[o(t.$slots,"placeholder",{unwrap:"p"},void 0,!0)])):l("",!0)])):(a(),n("div",T,[s("input",{class:"textInput",type:e.type,name:e.name?e.name:"unknown",placeholder:" "},null,8,V),t.$slots.placeholder?(a(),n("span",S,[o(t.$slots,"placeholder",{unwrap:"p"},void 0,!0)])):l("",!0)]))}const A=p(_,[["render",g],["__scopeId","data-v-c0d211af"]]);export{A as default};
