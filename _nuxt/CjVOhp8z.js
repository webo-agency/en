import{_ as m}from"./D_rFs3i1.js";import{_ as u}from"./qQo0OInv.js";import{b as e,C as o,w as f,e as a,f as l,c as d,t as b}from"./Da7c7GoZ.js";import"./CqTO-rh_.js";import"./hthz_cb7.js";import"./DOcT63_n.js";const h={class:"flex items-end aspect-video w-full rounded-[5px] overflow-hidden mb-4 tablet:mb-6"},g={class:"px-2.5 tablet:px-5 pb-1"},x=["innerHTML"],w={key:1,class:"mb-4 tablet:mb-6 text-sm desktop:text-base font-normal"},v=a("svg",{class:"transition duration-200 group-hover:translate-x-2.5",xmlns:"http://www.w3.org/2000/svg",width:"23",height:"30",viewBox:"0 0 23 30",fill:"none"},[a("path",{d:"M15.0863 7.11182L13.7605 8.43762L19.3853 14.0624H0V15.9375H19.3852L13.7605 21.5621L15.0863 22.8879L22.9745 14.9999L15.0863 7.11182Z",fill:"#06CEAF"})],-1),p={__name:"post-tile-md",props:{data:Object},setup(t){return(r,k)=>{const c=m,s=u;return e(),o(s,{class:"group flex flex-col w-full",disabled:t.data.draft&&!t.data.fallback,activeClass:"none",url:t.data.fallback?t.data.fallback:t.data.url?t.data.url:"https://www.webo.agency"+t.data._path},{default:f(()=>{var i,n;return[a("div",h,[t.data.image&&t.data.image.url?(e(),o(c,{key:0,class:"h-full w-full object-cover group-hover:scale-[103%] transition-all duration-500",src:t.data.image.url,title:t.data.image.title?t.data.image.title:"",alt:t.data.image.alt?t.data.image.alt:"Post thumbnail image",imgAttrs:{class:"h-full w-full object-cover"}},null,8,["src","title","alt"])):l("",!0)]),a("div",g,[(i=t.data.introduction)!=null&&i.titleFormatted?(e(),d("h4",{key:0,class:"mb-4 tablet:mb-6 text-lg desktop:text-xl font-semibold group-hover:underline decoration-inherit transition duration-300 [&_em]:text-green-main [&_em]:group-hover:underline [&_em]:decoration-green-main [&_em]:not-italic",innerHTML:r.$formatText(t.data.introduction.titleFormatted)},null,8,x)):l("",!0),(n=t.data.introduction)!=null&&n.description?(e(),d("p",w,b(t.data.introduction.description),1)):l("",!0),v])]}),_:1},8,["disabled","url"])}}};export{p as default};
