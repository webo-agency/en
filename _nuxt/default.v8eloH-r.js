import{_ as k}from"./custom-link.Tyrjqu3Z.js";import{k as V,b as l,c as a,n as f,e as n,q as X,m as Z,I as S,r as U,V as G,t as T,J as h,F as y,N as L,X as Y,az as J,W as Q,D as H,w as C,f as m,K as B,g as v,B as M,T as ee,ag as j,aA as N,O as A,o as z,a5 as te,H as $,aB as ne}from"./entry.pPzzoZnj.js";import{a as I,d as se,e as oe}from"./index.kB2aOwav.js";import W from"./widget-rating-clutch.84zYYy0Y.js";import ie from"./widget-rating-google.M1R9XpIN.js";import{_ as le}from"./nuxt-picture.ic_oaNN9.js";import{a as R,q as F}from"./query.5qxgI1Cb.js";import{u as re}from"./vue.f36acd1f.QfAO6CFk.js";import"./nuxt-link.icKZfnbH.js";import"./rating-stars.RlebNDIw.js";import"./composables.ctwk6ZS-.js";import"./preview.FYLnoGG4.js";const ae={name:"HamburgerBtn",props:{btnActive:Boolean}},ce=n("div",{class:"line-menu half start bg-current"},null,-1),de=n("div",{class:"line-menu bg-current"},null,-1),ue=n("div",{class:"line-menu half end bg-current"},null,-1),pe=[ce,de,ue];function he(o,s,t,r,e,i){return l(),a("div",{class:f(["wrapper-menu tablet:",{open:t.btnActive}])},pe,2)}const D=V(ae,[["render",he]]),fe={class:"flex gap-2.5 items-center py-3 desktop:p-3 cursor-pointer"},me={class:"shrink-0 block text-inherit text-lg desktop:text-base font-semibold transition duration-300 group-hover:text-green-main"},ge=n("path",{d:"M9.15962 -3.67343e-08L10 0.840384L5 5.84046L-3.67343e-08 0.840383L0.840383 -4.0038e-07L5 4.21488L9.15962 -3.67343e-08Z"},null,-1),ve=[ge],_e={class:"relative filter blur-0 brightness-100 contrast-100 grayscale-0 hue-rotate-0 saturate-100 invert-0 sepia-0 desktop:drop-shadow-[0_20px_25px_rgba(66,66,66,0.2)]"},xe={class:"desktop:bg-white overflow-hidden rounded-b-[5px] relative z-20"},be=["id","value"],we=["for"],Ce={__name:"lang-switcher",setup(o){const s=X(),t=Z("lang"),r=I().width,e=S(()=>r.value?r.value>=1248:!0),i=U(!1),u={PL:"pl-PL",EN:"en-US"},p=S(()=>Object.keys(u).filter(g=>g!=t.value));G(t,g=>{const c=w(g);window&&(window.location.href=c)});function _(g){g?i.value=g:i.value=!i.value}function w(g){const c=Z("hrefLangs"+s.fullPath.split("#")[0],"$iwjv7nKD3d"),d={PL:"https://webo.pl",EN:"https://webo.agency"},b=c.value.find(x=>x.lang==g);if(b&&b.href)return b.href;if(d[g])return d[g]}return(g,c)=>(l(),a("div",{class:"relative group w-fit text-center",onClick:c[1]||(c[1]=d=>h(e)?null:_()),onMouseenter:c[2]||(c[2]=d=>h(e)?_(!0):null),onMouseleave:c[3]||(c[3]=d=>h(e)?_(!1):null)},[n("div",fe,[n("span",me,T(h(t)),1),(l(),a("svg",{class:f(["shrink-0 transition duration-300 fill-current group-hover:text-green-main",{"text-green-main !rotate-180":h(i)}]),width:"15",height:"8",viewBox:"0 0 10 6",xmlns:"http://www.w3.org/2000/svg"},ve,2))]),n("div",{class:f(["desktop:absolute z-10 desktop:left-1/2 -translate-y-5 desktop:translate-y-0 desktop:-translate-x-1/2 desktop:top-0 desktop:pt-[96px] opacity-0 pointer-events-none transition duration-300",{"translate-y-0 pointer-events-auto opacity-100":h(i)}])},[n("div",_e,[n("div",{class:f(["hidden desktop:block absolute top-[-11px] left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 rounded-[3px] transition-all duration-200 translate-y-4",{"!translate-y-0":h(i)}])},null,2),n("ul",xe,[(l(!0),a(y,null,L(h(p),d=>(l(),a("li",null,[Y(n("input",{"onUpdate:modelValue":c[0]||(c[0]=b=>Q(t)?t.value=b:null),type:"radio",name:"lang",id:`lang-${d}`,value:d,class:"hidden peer"},null,8,be),[[J,h(t)]]),n("label",{for:`lang-${d}`,class:"block font-semibold text-gray-darker px-5 py-3 hover:text-green-main desktop:hover:text-gray-darker desktop:hover:bg-gray-default transition duration-200 cursor-pointer"},T(d),9,we)]))),256))])])],2)],32))}},ke=Ce,ye={name:"Socials",props:{socials:Array,invertColors:Boolean},components:{CustomLink:k}},Le={class:"flex"},He={key:0,class:"fill-current",width:"30",height:"19",viewBox:"0 0 30 19",xmlns:"http://www.w3.org/2000/svg"},Te=n("path",{d:"M27.4997 2.53333H18.7498V0H27.4997V2.53333ZM29.6572 15.2C29.1047 16.8429 27.121 19 23.281 19C19.4385 19 16.3261 16.8099 16.3261 11.8117C16.3261 6.859 19.2323 4.313 23.1585 4.313C27.011 4.313 29.3634 6.5702 29.8772 9.91927C29.9747 10.5602 30.0134 11.4241 29.9959 12.6299H19.9623C20.1248 16.6972 24.316 16.8251 25.6972 15.2H29.6572ZM20.0498 10.1333H26.256C26.1247 8.1738 24.836 7.3226 23.1597 7.3226C21.3273 7.3226 20.3135 8.2954 20.0498 10.1333ZM8.08241 18.9848H0V0.0265999H8.69116C15.5361 0.1292 15.6661 6.92233 12.0911 8.7742C16.4173 10.3702 16.5623 18.9848 8.08241 18.9848ZM3.74996 7.6H8.22991C11.3649 7.6 11.8624 3.8 7.83992 3.8H3.74996V7.6ZM7.98866 11.4H3.74996V15.2203H7.92616C11.7449 15.2203 11.5111 11.4 7.98866 11.4Z"},null,-1),Ve=[Te],Me={key:1,class:"fill-current",width:"24",height:"25",viewBox:"0 0 24 25",xmlns:"http://www.w3.org/2000/svg"},Se=n("path",{d:"M0.464516 25H5.10968V7.65625H0.464516V25ZM2.7871 0C1.23871 0 0 1.25 0 2.8125C0 4.375 1.23871 5.625 2.7871 5.625C4.33548 5.625 5.57419 4.375 5.57419 2.8125C5.57419 1.25 4.33548 0 2.7871 0ZM13.0065 10.3125V7.65625H8.36129V25H13.0065V16.0938C13.0065 11.0938 19.3548 10.7812 19.3548 16.0938V25H24V14.375C24 5.9375 15.1742 6.25 13.0065 10.3125Z"},null,-1),Ee=[Se],Pe={key:2,class:"fill-current",width:"25",height:"25",viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg"},Ze=n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.34659 0.075C8.67955 0.0136363 9.10455 0 12.5 0C15.8955 0 16.3205 0.0147727 17.6523 0.075C18.9841 0.135227 19.8932 0.347727 20.6886 0.655682C21.5216 0.970455 22.2773 1.4625 22.9023 2.09886C23.5386 2.72273 24.0295 3.47727 24.3432 4.31136C24.6523 5.10682 24.8636 6.01591 24.925 7.34545C24.9864 8.68068 25 9.10568 25 12.5C25 15.8955 24.9852 16.3205 24.925 17.6534C24.8648 18.983 24.6523 19.892 24.3432 20.6875C24.0295 21.5217 23.5378 22.2775 22.9023 22.9023C22.2773 23.5386 21.5216 24.0295 20.6886 24.3432C19.8932 24.6523 18.9841 24.8636 17.6545 24.925C16.3205 24.9864 15.8955 25 12.5 25C9.10455 25 8.67955 24.9852 7.34659 24.925C6.01705 24.8648 5.10795 24.6523 4.3125 24.3432C3.47832 24.0295 2.72252 23.5378 2.09773 22.9023C1.4618 22.278 0.969676 21.5226 0.655682 20.6886C0.347727 19.8932 0.136364 18.9841 0.075 17.6545C0.0136363 16.3193 0 15.8943 0 12.5C0 9.10455 0.0147727 8.67955 0.075 7.34773C0.135227 6.01591 0.347727 5.10682 0.655682 4.31136C0.97014 3.47737 1.46263 2.72195 2.09886 2.09773C2.72277 1.46193 3.47781 0.969822 4.31136 0.655682C5.10682 0.347727 6.01591 0.136364 7.34545 0.075H7.34659ZM17.5511 2.325C16.233 2.26477 15.8375 2.25227 12.5 2.25227C9.1625 2.25227 8.76705 2.26477 7.44886 2.325C6.22955 2.38068 5.56818 2.58409 5.12727 2.75568C4.54432 2.98295 4.12727 3.25227 3.68977 3.68977C3.27505 4.09324 2.95589 4.58441 2.75568 5.12727C2.58409 5.56818 2.38068 6.22955 2.325 7.44886C2.26477 8.76705 2.25227 9.1625 2.25227 12.5C2.25227 15.8375 2.26477 16.233 2.325 17.5511C2.38068 18.7705 2.58409 19.4318 2.75568 19.8727C2.95568 20.4148 3.275 20.9068 3.68977 21.3102C4.09318 21.725 4.58523 22.0443 5.12727 22.2443C5.56818 22.4159 6.22955 22.6193 7.44886 22.675C8.76705 22.7352 9.16136 22.7477 12.5 22.7477C15.8386 22.7477 16.233 22.7352 17.5511 22.675C18.7705 22.6193 19.4318 22.4159 19.8727 22.2443C20.4557 22.017 20.8727 21.7477 21.3102 21.3102C21.725 20.9068 22.0443 20.4148 22.2443 19.8727C22.4159 19.4318 22.6193 18.7705 22.675 17.5511C22.7352 16.233 22.7477 15.8375 22.7477 12.5C22.7477 9.1625 22.7352 8.76705 22.675 7.44886C22.6193 6.22955 22.4159 5.56818 22.2443 5.12727C22.017 4.54432 21.7477 4.12727 21.3102 3.68977C20.9067 3.27508 20.4156 2.95592 19.8727 2.75568C19.4318 2.58409 18.7705 2.38068 17.5511 2.325V2.325ZM10.9034 16.3534C11.7951 16.7246 12.7879 16.7747 13.7124 16.4951C14.6369 16.2156 15.4357 15.6238 15.9723 14.8207C16.5089 14.0177 16.7501 13.0533 16.6546 12.0922C16.5591 11.1311 16.133 10.2329 15.4489 9.55114C15.0128 9.11531 14.4855 8.7816 13.9049 8.57403C13.3244 8.36646 12.705 8.29018 12.0915 8.3507C11.4779 8.41122 10.8854 8.60702 10.3566 8.92401C9.82779 9.241 9.37585 9.6713 9.0333 10.1839C8.69075 10.6965 8.46612 11.2787 8.37559 11.8886C8.28505 12.4984 8.33085 13.1208 8.5097 13.7108C8.68855 14.3008 8.996 14.8439 9.40991 15.3008C9.82382 15.7578 10.3339 16.1173 10.9034 16.3534ZM7.95682 7.95682C8.55344 7.3602 9.26173 6.88694 10.0412 6.56405C10.8208 6.24116 11.6563 6.07497 12.5 6.07497C13.3437 6.07497 14.1792 6.24116 14.9588 6.56405C15.7383 6.88693 16.4466 7.3602 17.0432 7.95682C17.6398 8.55344 18.1131 9.26173 18.436 10.0412C18.7588 10.8208 18.925 11.6563 18.925 12.5C18.925 13.3437 18.7588 14.1792 18.436 14.9588C18.1131 15.7383 17.6398 16.4466 17.0432 17.0432C15.8383 18.2481 14.204 18.925 12.5 18.925C10.796 18.925 9.16174 18.2481 7.95682 17.0432C6.75189 15.8383 6.07497 14.204 6.07497 12.5C6.07497 10.796 6.75189 9.16174 7.95682 7.95682V7.95682ZM20.35 7.03182C20.4978 6.89235 20.6162 6.72464 20.6981 6.53861C20.7799 6.35258 20.8236 6.15201 20.8266 5.94878C20.8296 5.74556 20.7917 5.5438 20.7153 5.35547C20.6389 5.16713 20.5255 4.99603 20.3818 4.85232C20.2381 4.7086 20.067 4.59518 19.8786 4.51877C19.6903 4.44236 19.4885 4.40452 19.2853 4.40748C19.0821 4.41044 18.8815 4.45415 18.6955 4.53602C18.5095 4.61788 18.3417 4.73624 18.2023 4.88409C17.931 5.17162 17.7825 5.55355 17.7883 5.94878C17.7941 6.34402 17.9536 6.72145 18.2331 7.00096C18.5126 7.28046 18.8901 7.44003 19.2853 7.44579C19.6805 7.45156 20.0625 7.30306 20.35 7.03182V7.03182Z"},null,-1),Be=[Ze],Ae={key:3,class:"fill-current",width:"14",height:"25",viewBox:"0 0 14 25",xmlns:"http://www.w3.org/2000/svg"},je=n("path",{d:"M12.6299 14.0625L13.3242 9.53809H8.98292V6.60205C8.98292 5.36426 9.58936 4.15771 11.5337 4.15771H13.5073V0.305664C13.5073 0.305664 11.7163 0 10.0039 0C6.42872 0 4.0918 2.16699 4.0918 6.08984V9.53809H0.117676V14.0625H4.0918V25H8.98292V14.0625H12.6299Z"},null,-1),Ne=[je],$e={key:4,class:"fill-current",width:"25",height:"25",viewBox:"0 0 98 98",xmlns:"http://www.w3.org/2000/svg"},Re=n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"#fff"},null,-1),Fe=[Re];function Ue(o,s,t,r,e,i){const u=k;return l(),a("ul",Le,[(l(!0),a(y,null,L(t.socials,(p,_)=>(l(),a("li",{key:_,class:"mr-2.5 last:mr-0"},[p.link&&p.type?(l(),H(u,{key:0,url:p.link,class:f(["flex justify-center items-center w-10 h-10 py-2 px-1 rounded-[5px]",t.invertColors?"border-gray-dark border-2 text-gray-dark":"bg-gray-dark text-white"])},{default:C(()=>[p.type==="behance"?(l(),a("svg",He,Ve)):p.type==="linkedin"?(l(),a("svg",Me,Ee)):p.type==="instagram"?(l(),a("svg",Pe,Be)):p.type==="facebook"?(l(),a("svg",Ae,Ne)):p.type==="github"?(l(),a("svg",$e,Fe)):m("",!0)]),_:2},1032,["url","class"])):m("",!0)]))),128))])}const E=V(ye,[["render",Ue]]),ze={name:"subMenuPopup",props:{pointerPosition:Number,name:String,data:Object,active:Boolean},components:{CustomLink:k},methods:{emitLinkClick(){this.$emit("link-clicked")}}},Ie=n("div",{class:"absolute bottom-[50px] left-[50px]"},[n("svg",{width:"76",height:"100",viewBox:"0 0 76 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M59.9764 0.00800124L59.9832 0.0122262H59.9895L59.9971 0.0164512C60.058 0.0291288 60.1158 0.0586911 60.1657 0.105176L60.1716 0.109425L60.1796 0.117875L60.1877 0.1221L75.236 15.1747L75.2432 15.1789L75.2517 15.1873L75.258 15.1958L75.2648 15.2042L75.2686 15.2085C75.3037 15.255 75.3286 15.3015 75.3434 15.3564L75.3451 15.3606L75.3476 15.3691L75.3484 15.3776C75.3506 15.386 75.3522 15.3901 75.3535 15.3986C75.3573 15.424 75.3599 15.4494 75.3599 15.4705V83.7438C75.3599 83.9171 75.255 84.0692 75.0953 84.1368L39.8806 98.3653C33.2392 101.045 27.2262 100.318 22.8694 97.0088C19.4802 94.4395 17.0884 90.2896 16.201 84.9312C7.20829 84.5255 0.772285 76.9824 0.772285 65.0992V24.1378C0.772285 23.9645 0.87793 23.8081 1.03851 23.7447L59.7254 0.033375C59.7427 0.0249232 59.7608 0.0206771 59.779 0.0164512L59.7879 0.0122262H59.7926L59.8002 0.00800124C59.8585 -0.0046764 59.9185 -0.000450517 59.9764 0.00800124ZM60.1201 21.915L74.5147 16.1002V83.4606L39.5637 97.5794C33.2473 100.132 27.5221 99.4851 23.3807 96.3369C19.2182 93.1801 16.6658 87.526 16.6658 80.1476V39.4693L59.9675 21.9741C60.0229 21.9656 60.0744 21.9446 60.1201 21.915ZM1.61745 25.1647L15.8206 39.3594V80.1476C15.8206 81.5168 15.9094 82.8309 16.0742 84.0818C7.58437 83.6043 1.61745 76.3569 1.61745 65.0992V25.1647ZM59.4659 21.2684L16.3446 38.6875L1.93862 24.2899L59.4659 1.04754V21.2684ZM74.1868 15.3183L60.3111 20.9261V1.44485L74.1868 15.3183Z",fill:"#07E7C4"})])],-1),We={class:"mr-10"},De={class:"text-sm text-gray-darker"},Oe=n("span",{class:"text-green-main"},"-/ ",-1),qe=["innerHTML"],Ke={key:0,class:"flex flex-wrap items-start justify-between w-2/3 desktop-wide:w-3/5"},Xe=["innerHTML"],Ge=["innerHTML"],Ye=n("div",{class:"line relative w-[135px] h-0.5 rounded-full bg-gray-light overflow-hidden after:content-[''] after:absolute after:-top-0.5 after:right-full after:w-full after:h-2 after:bg-green-main group-hover:after:translate-x-full after:transition after:duration-300"},null,-1);function Je(o,s,t,r,e,i){const u=k;return l(),a("div",{class:f(["relative w-full z-10 transition-all rounded-[5px] duration-300 overflow-hidden",t.active?"h-[370px] filter blur-0 brightness-100 contrast-100 grayscale-0 hue-rotate-0 saturate-100 invert-0 sepia-0 drop-shadow-[0_20px_25px_rgba(66,66,66,0.2)]":"h-[0px] pointer-events-none"])},[n("div",{class:f(["absolute top-[35px] w-6 h-6 bg-white rotate-45 rounded-[3px] transition-all duration-200",{"-translate-y-full":t.active}]),style:B({left:t.pointerPosition-16+"px"})},null,6),n("div",{class:f(["relative h-full mt-5 px-10 desktop-wide:px-[120px] bg-white rounded-[5px] text-black transition-all duration-200 overflow-hidden",t.active?"py-[50px]":"py-0 "])},[Ie,v(ee,{name:"fade",mode:"out-in"},{default:C(()=>[t.data?(l(),a("div",{key:t.name,class:"flex justify-between h-full"},[n("div",We,[n("p",De,[Oe,M(" "+T(t.name),1)]),t.data.title?(l(),a("h4",{key:0,class:"prose text-2xl font-semibold max-w-xs text-gray-darker",innerHTML:o.$formatText(t.data.title)},null,8,qe)):m("",!0)]),t.data&&t.data.links?(l(),a("ul",Ke,[(l(!0),a(y,null,L(t.data.links,p=>(l(),a("li",{key:p.name,class:"flex-shrink basis-[200px]"},[v(u,{url:p.link,activeClass:p.link==="https://www.webo.agency/"?"none":"link-active-line",class:"group",onClick:s[0]||(s[0]=_=>i.emitLinkClick())},{default:C(()=>[n("div",{class:"text-lg font-semibold mb-1.5",innerHTML:o.$formatText(p.name)},null,8,Xe),n("div",{class:"pr-6 mb-4 text-xs leading-relaxed font-normal",innerHTML:o.$formatText(p.description)},null,8,Ge),Ye]),_:2},1032,["url","activeClass"])]))),128))])):m("",!0)])):m("",!0)]),_:1})],2)],2)}const O=V(ze,[["render",Je]]),Qe={name:"LayoutNavbar",props:{menu:{type:Array},socials:Array,clutchLink:String},data(){return{isTransparent:!0,isLargeScreen:!0,mobileExpanded:!1,mobileExpandedVisible:!1,popUpData:null,popUpActive:!1,popUpHover:!1,hoverItem:"",pointerPosition:0}},setup(){const o=se(globalThis.window);let s=!0,t=S(()=>(o.directions.top||o.y.value<40?s=!0:o.directions.bottom&&(s=!1),s)),r=S(()=>o.y.value<170);return{isVisible:t,underTreshold:r,scrollPositionY:o.y}},computed:{isHomePage(){return this.$route.path==="/"}},mounted(){globalThis.window.scrollY<300&&this.isHomePage?this.isTransparent=!0:this.isTransparent=!1,this.onWidthChange(),window.addEventListener("resize",this.onWidthChange)},unmounted(){window.removeEventListener("resize",this.onWidthChange)},watch:{isLargeScreen(o){o&&(this.mobileExpanded=!1)},underTreshold(o){this.isTransparent=o,this.isHomePage||(this.isTransparent=!1)},isHomePage(o){o==!1?this.isTransparent=!1:this.underTreshold&&(this.isTransparent=!0)}},methods:{onWidthChange(){window.innerWidth<1248?this.isLargeScreen=!1:this.isLargeScreen=!0},toggleCollapse(o){const s=this.$refs.collapsible[o],t=this.$refs["collapse-container"][o];let r;s.dataset.collapsed=="true"?(r=t.firstChild.clientHeight,s.dataset.collapsed=!1):(r=0,s.dataset.collapsed=!0),t.style.height=r+"px"},toggleMobile(){this.mobileExpanded=!this.mobileExpanded},setPopup(o,s,t){if(s!==void 0){this.popUpData=s,this.popUpActive=!0;const r=t.target.getBoundingClientRect().x,e=t.target.getBoundingClientRect().width/2,i=this.$refs.container.getBoundingClientRect().x;this.pointerPosition=r+e-i}else if(!o){let r=this;setTimeout(function(){r.popUpHover||(r.popUpActive=!1,r.popUpData=null,r.hoverItem="")},400)}},hardClosePopup(){this.popUpActive=!1,this.popUpData=null},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}},components:{SubmenuPopup:O,HamburgerBtn:D,Socials:E,CustomLink:k}},et={class:"flex items-center justify-between py-3 tablet:py-2 desktop:py-0"},tt=n("svg",{class:"fill-current transition duration-300 h-[30px] tablet:h-[41px] w-auto",width:"135",height:"41",viewBox:"0 0 135 41",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M131.605 41H127.55V34.2414H134.308V38.2958C134.308 39.7881 133.096 41 131.605 41ZM124.847 38.2958V40.9943L112.006 41C107.903 41 104.573 37.6687 104.573 33.5662V18.6985C104.573 14.5948 107.903 11.2647 112.006 11.2647H126.874C130.977 11.2647 134.308 14.5948 134.308 18.6985V31.5338H131.605V19.4664C131.605 16.1089 129.463 13.9677 126.107 13.9677H112.775C109.417 13.9677 107.276 16.1089 107.276 19.4664V32.7983C107.276 36.1547 109.417 38.2958 112.775 38.2958H124.847Z"}),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M79.318 11.2693L92.1589 11.2636C96.2614 11.2636 99.5916 14.5949 99.5916 18.6974V33.5651C99.5916 37.6688 96.2614 40.9989 92.1589 40.9989H77.2901C73.1876 40.9989 69.8563 37.6688 69.8563 33.5651V0.601559H72.5593V32.7972C72.5593 36.1548 74.7016 38.2959 78.058 38.2959H91.3899C94.7475 38.2959 96.8886 36.1548 96.8886 32.7972V19.4653C96.8886 16.1089 94.7475 13.9678 91.3899 13.9678H79.318V11.2693Z"}),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M64.8764 40.9943L42.5738 41C38.4712 41 35.1411 37.6687 35.1411 33.5662V18.6985C35.1411 14.5948 38.4712 11.2647 42.5738 11.2647H57.4425C61.5451 11.2647 64.8764 14.5948 64.8764 18.6985V31.5338H44.6016V28.8331H62.1733V19.4664C62.1733 16.1089 60.0311 13.9677 56.6747 13.9677H43.3428C39.9852 13.9677 37.8441 16.1089 37.8441 19.4664V32.7983C37.8441 36.1547 39.9852 38.2958 43.3428 38.2958H64.8764V40.9943Z"}),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.7255 41H21.6578V38.2821H22.2426C25.4629 38.1425 27.4518 36.0655 27.4564 32.7983V11.2647H30.1548L30.1593 33.5662C30.1593 37.6687 26.8292 41 22.7255 41ZM2.70368 11.2647V32.7983C2.70826 36.0655 4.69716 38.1425 7.91856 38.2821L7.43449 41C3.33079 41 0 37.6687 0 33.5662L0.0051477 11.2647H2.70368ZM15.08 41H7.43449L7.91856 38.2821H12.377L12.3759 28.8331H15.0743L15.08 41Z"})],-1),nt={class:"flex flex-col justify-between desktop:justify-center h-full scrollbar-none overflow-y-auto desktop:overflow-visible"},st={class:"shrink-0 flex flex-col desktop:flex-row desktop:items-center desktop:gap-[26px] my-10 desktop:my-0"},ot=["onMouseover","onMouseleave"],it=["innerHTML"],lt={key:0,class:"h-0.5 w-[14px] ml-3 mt-0.5 bg-current z-10 group-hover:translate-x-1 transition-transform duration-200"},rt=["onClick"],at=n("svg",{class:"collapse-icon transition !duration-300 desktop:transition-transform fill-current text-inherit",width:"15",height:"8",viewBox:"0 0 10 6",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M9.15962 -3.67343e-08L10 0.840384L5 5.84046L-3.67343e-08 0.840383L0.840383 -4.0038e-07L5 4.21488L9.15962 -3.67343e-08Z"})],-1),ct=[at],dt={key:0,class:"desktop:hidden"},ut=["innerHTML"],pt=["innerHTML"];function ht(o,s,t,r,e,i){const u=k,p=D,_=ke,w=E,g=W,c=O;return l(),a("nav",{class:f(["fixed top-0 left-0 w-full z-40",{"pointer-events-none":!r.isVisible&&!e.mobileExpanded,"!z-50":e.mobileExpandedVisible}])},[n("div",{class:f(["absolute desktop:hidden top-0 left-0 h-d-screen w-screen bg-black/50 pointer-events-none transition duration-500",{"opacity-0":!e.mobileExpanded||e.isLargeScreen}])},null,2),n("div",{class:f(["relative px-5 tablet:px-10 desktop:px-20 desktop:overflow-visible transition-all duration-500 desktop:duration-300",[{"-translate-y-full shadow-none":!r.isVisible&&!e.mobileExpanded},{"bg-[#ECF6F4]":!e.isTransparent||e.mobileExpanded},{"text-white border-b-[1px] !border-b-[rgba(8,219,186,0.2)]":e.isTransparent&&!e.mobileExpanded},{"text-gray-darker border-b-[1px] border-b-[#E4EFED]":!e.isTransparent&&!e.mobileExpanded},e.mobileExpanded?"h-d-screen ":"h-[60px] desktop:h-[94px]"]]),onTransitionstart:s[7]||(s[7]=d=>e.mobileExpanded==!0?e.mobileExpandedVisible=!0:null),onTransitionend:s[8]||(s[8]=d=>e.mobileExpanded==!1?e.mobileExpandedVisible=!1:null)},[n("div",{ref:"container",class:f(["h-full flex flex-col desktop:flex-row desktop:justify-between desktop:items-center mx-auto max-w-screen-desktop-wide",e.isTransparent&&!e.mobileExpanded?"text-white":"text-gray-darker"])},[n("div",et,[v(u,{url:"https://www.webo.agency/",activeClass:"none",onClick:s[0]||(s[0]=d=>[!e.isLargeScreen&&e.mobileExpanded?i.toggleMobile():"",i.scrollToTop()])},{default:C(()=>[tt]),_:1},8,["url"]),v(p,{class:"flex flex-col justify-between desktop:hidden",btnActive:e.mobileExpanded,onClick:s[1]||(s[1]=d=>i.toggleMobile())},null,8,["btnActive"])]),n("div",nt,[n("ul",st,[(l(!0),a(y,null,L(t.menu,(d,b)=>(l(),a("li",{key:b,class:f(["w-full desktop:w-auto mb-2 desktop:mb-0 rounded-[5px] font-semibold overflow-hidden transition-[transform,opacity] duration-300",[{"text-green-main desktop:[&_.collapse-icon]:rotate-180":e.hoverItem==d.name},{"-translate-x-full desktop:translate-x-0 opacity-0":!e.mobileExpanded&&!e.isLargeScreen}]]),style:B([{"transition-delay":e.mobileExpanded&&!e.isLargeScreen?b*60+"ms":!e.mobileExpanded&&!e.isLargeScreen?(t.menu.length-b)*40+"ms":""},{order:b*2}]),onMouseover:x=>d.menu?(i.setPopup(!0,d.menu,x),e.popUpHover=!0,e.hoverItem=d.name):(e.popUpActive=!1,e.popUpHover=!1,e.hoverItem="false"),onMouseleave:x=>d.menu?(i.setPopup(!1),e.popUpHover=!1):(e.popUpActive=!1,e.popUpHover=!1)},[v(u,{url:d.link?d.link:"https://www.webo.agency/",activeClass:"none-temp",class:f(["flex items-center justify-between p-3 mr-12 desktop:mr-0 hover:text-green-main transition duration-300 group",[d.button?"button relative border-green-main border-solid border-2 text-green-main hover:text-white hover:bg-green-mainHover hover:border-green-mainHover transition duration-300 px-5 py-2.5 rounded-full overflow-hidden":"p-2 pl-0 desktop:p-3"]]),onClick:s[2]||(s[2]=x=>e.isLargeScreen?i.hardClosePopup():i.toggleMobile())},{default:C(()=>[n("div",{class:f(["prose uppercase",[d.button?"z-10 text-base leading-5":" text-lg desktop:text-base",{"desktop:pr-8":d.menu}]]),innerHTML:d.name},null,10,it),d.button?(l(),a("span",lt)):m("",!0)]),_:2},1032,["url","class"]),d.menu?(l(),a("div",{key:0,ref_for:!0,ref:"collapsible","data-collapsed":"true",class:"relative transition duration-300"},[n("div",{class:"absolute right-0 desktop:right-2 z-20 -top-10 desktop:top-[-46px] w-10 h-10 flex justify-center items-center desktop:pointer-events-none text-gray-darker desktop:text-inherit",onClick:x=>i.toggleCollapse(b)},ct,8,rt),n("div",{ref_for:!0,ref:"collapse-container",class:"overflow-hidden h-0 transition-all duration-300"},[d.menu.links?(l(),a("ul",dt,[(l(!0),a(y,null,L(d.menu.links,(x,K)=>(l(),a("li",{key:K,class:"py-2 pl-5 last:pb-3 last:border-b-2 last:border-gray-light last:border-solid"},[v(u,{url:x.link,activeClass:x.link==="https://www.webo.agency/"?"none":"",class:"flex flex-col py-2 text-gray-darker hover:text-green-main transition duration-300",onClick:s[3]||(s[3]=an=>e.isLargeScreen?"":i.toggleMobile())},{default:C(()=>[x.name?(l(),a("div",{key:0,class:f(["prose",{"mb-2":x.description}]),innerHTML:o.$formatText(x.name)},null,10,ut)):m("",!0),x.name?(l(),a("div",{key:1,class:"prose max-w-[75%] font-normal text-sm",innerHTML:o.$formatText(x.description)},null,8,pt)):m("",!0)]),_:2},1032,["url","activeClass"])]))),128))])):m("",!0)],512)],512)):m("",!0)],46,ot))),128)),n("li",{class:f(["mb-2 desktop:mb-0 transition-[transform,opacity] duration-300 order-[9999]",{"-translate-x-full desktop:translate-x-0 opacity-0":!e.mobileExpanded&&!e.isLargeScreen}]),style:B([{"transition-delay":e.mobileExpanded&&!e.isLargeScreen?t.menu.length*60+"ms":!e.mobileExpanded&&!e.isLargeScreen?"0ms":""},{order:e.isLargeScreen&&t.menu.length>0?(t.menu.length-1)*2-1:"9999"}])},[v(_)],6)]),n("div",{class:f(["desktop:hidden flex flex-col mb-10 transition duration-500",{"translate-y-[80vh] desktop:translate-y-0 opacity-0":!e.mobileExpanded&&!e.isLargeScreen}])},[t.socials?(l(),H(w,{key:0,class:"mb-10",socials:t.socials,invertColors:!0},null,8,["socials"])):m("",!0),v(g,{shrinkMobile:!1,class:f(["!p-0",{"!bg-[#ECF6F4]":e.mobileExpanded&&!e.isLargeScreen}])},null,8,["class"])],2)])],2),n("div",{class:"hidden desktop:block mx-auto max-w-screen-desktop-wide",onMouseover:s[5]||(s[5]=d=>e.popUpHover=!0),onMouseleave:s[6]||(s[6]=d=>(e.popUpHover=!1,i.setPopup(!1)))},[v(c,{active:e.popUpActive,name:e.hoverItem,data:e.popUpData,pointerPosition:e.pointerPosition,onLinkClicked:s[4]||(s[4]=d=>i.hardClosePopup())},null,8,["active","name","data","pointerPosition"])],32)],34)],2)}const ft=V(Qe,[["render",ht]]),mt={setup(){const{height:o}=I(),{y:s}=oe();return{y:s,height:o}},data(){return{isHidden:!0}},watch:{y(o,s){this.checkScrollOffset()}},mounted(){this.checkScrollOffset()},methods:{checkScrollOffset(){const o=this.height;o&&(this.isHidden=this.y<o)},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},gt={class:"w-full sticky z-40 bottom-0 px-5 tablet:px-10 desktop:px-20 pointer-events-none"},vt=n("svg",{width:"19",height:"25",viewBox:"0 0 19 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M0.916503 8.58363L2.35919 10.0263L8.47992 3.90559L8.47992 25L10.5203 25L10.5203 3.90578L16.6408 10.0263L18.0835 8.58363L9.50001 -3.75197e-07L0.916503 8.58363Z",fill:"#FAFAFA"})],-1),_t=[vt];function xt(o,s,t,r,e,i){return l(),a("div",gt,[n("div",{class:f(["flex justify-end max-w-screen-desktop-wide mx-auto pointer-events-none h-0 items-end overflow-visible transition duration-200",{"translate-y-[100px] opacity-0":e.isHidden}])},[n("button",{class:"appearance-none flex items-center justify-center bg-green-main rounded-full w-[60px] h-[60px] hover:bg-green-mainHover bottom-0 mb-[90px] shadow-green-mainHover/40 shadow-lg transition duration-300 pointer-events-auto",onClick:s[0]||(s[0]=u=>i.scrollToTop())},_t)],2)])}const bt=V(mt,[["render",xt]]),P=new WeakMap;function wt(o){if(P.has(o))return P.get(o);const s={...o};return s.render?s.render=(t,...r)=>{var e;if(t.mounted$){const i=(e=o.render)==null?void 0:e.bind(t)(t,...r);return i.children===null||typeof i.children=="string"?n(i.type,i.props,i.children,i.patchFlag,i.dynamicProps,i.shapeFlag):j(i)}else{const i=N(t._.vnode.el??null)??["<div></div>"];return A(i.join(""),i.length)}}:s.template&&(s.template=`
      <template v-if="mounted$">${o.template}</template>
      <template v-else><div></div></template>
    `),s.setup=(t,r)=>{var _;const e=te(),i=e.attrs,u=Ct(e);e.attrs={};const p=U(!1);return z(()=>{e.attrs=i,e.vnode.dirs=u,p.value=!0}),Promise.resolve(((_=o.setup)==null?void 0:_.call(o,t,r))||{}).then(w=>typeof w!="function"?{...w,mounted$:p}:(...g)=>{if(p.value){const c=w(...g);return c.children===null||typeof c.children=="string"?n(c.type,c.props,c.children,c.patchFlag,c.dynamicProps,c.shapeFlag):j(c)}else{const c=N((e==null?void 0:e.vnode.el)??null)??["<div></div>"];return A(c.join(""),c.length)}})},P.set(o,s),s}function Ct(o){if(!o||!o.vnode.dirs)return null;const s=o.vnode.dirs;return o.vnode.dirs=null,s}const kt={class:"w-full sticky z-40 bottom-0 px-5 tablet:px-10 desktop:px-20"},yt=n("div",{class:"flex justify-end max-w-screen-desktop-wide mx-auto h-0"},[n("div",{id:"fb-root"}),n("div",{id:"fb-customer-chat",class:"fb-customerchat"})],-1),Lt=[yt],Ht={__name:"fb-chat.client",props:{id:Number,locale:String},setup(o){const s=o;function t(){const e=document,i="script",u="facebook-jssdk";var p,_=e.getElementsByTagName(i)[0];e.getElementById(u)||(p=e.createElement(i),p.id=u,p.src=`https://connect.facebook.net/${s.locale}/sdk/xfbml.customerchat.js`,p.setAttribute("defer","defer"),p.setAttribute("async","async"),_.parentNode.insertBefore(p,_))}function r(){window.fbAsyncInit=function(){const e=document.getElementById("fb-customer-chat");e&&(e.setAttribute("page_id",s.id),e.setAttribute("attribution","biz_inbox"),FB.init({xfbml:!0,version:"v18.0"}))},t()}return z(()=>{r()}),(e,i)=>(l(),a("div",kt,Lt))}},Tt=Ht,Vt={name:"LayoutFooter",props:{tel:String,mail:String,privacyPolicyLink:String,privacyPolicyTitle:String,clutchLink:String,servicesTitle:String,services:Array,brandTitle:String,brand:Array,brandName:String,location:String,socials:Array,clutchLink:String,googleRating:Number,googleRatingLink:String,googleRatingText:String,showContributions:Boolean},components:{Socials:E,CustomLink:k}},Mt={class:"px-5 tablet:px-10 desktop:px-20 pt-20 desktop:pt-[140px] bg-gray-darker"},St={class:"mx-auto max-w-screen-desktop-wide font-body text-white"},Et={class:"flex flex-col pb-20 bg-contain tablet:bg-auto bg-no-repeat bg-right-bottom",style:{"background-image":"url(./img/bg_logo_slice.png)"}},Pt={class:"flex flex-col tablet:flex-row mb-10"},Zt={class:"flex flex-col basis-1/3 min-w-max shrink-0 mb-10 tablet:mb-0 pr-5"},Bt=A('<div class="h-10 mb-[30px] tablet:mb-[60px]"><svg class="fill-current" width="132" height="40" viewBox="0 0 135 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M131.605 41H127.55V34.2414H134.308V38.2958C134.308 39.7881 133.096 41 131.605 41ZM124.847 38.2958V40.9943L112.006 41C107.903 41 104.573 37.6687 104.573 33.5662V18.6985C104.573 14.5948 107.903 11.2647 112.006 11.2647H126.874C130.977 11.2647 134.308 14.5948 134.308 18.6985V31.5338H131.605V19.4664C131.605 16.1089 129.463 13.9677 126.107 13.9677H112.775C109.417 13.9677 107.276 16.1089 107.276 19.4664V32.7983C107.276 36.1547 109.417 38.2958 112.775 38.2958H124.847Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M79.318 11.2693L92.1589 11.2636C96.2614 11.2636 99.5916 14.5949 99.5916 18.6974V33.5651C99.5916 37.6688 96.2614 40.9989 92.1589 40.9989H77.2901C73.1876 40.9989 69.8563 37.6688 69.8563 33.5651V0.601559H72.5593V32.7972C72.5593 36.1548 74.7016 38.2959 78.058 38.2959H91.3899C94.7475 38.2959 96.8886 36.1548 96.8886 32.7972V19.4653C96.8886 16.1089 94.7475 13.9678 91.3899 13.9678H79.318V11.2693Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M64.8764 40.9943L42.5738 41C38.4712 41 35.1411 37.6687 35.1411 33.5662V18.6985C35.1411 14.5948 38.4712 11.2647 42.5738 11.2647H57.4425C61.5451 11.2647 64.8764 14.5948 64.8764 18.6985V31.5338H44.6016V28.8331H62.1733V19.4664C62.1733 16.1089 60.0311 13.9677 56.6747 13.9677H43.3428C39.9852 13.9677 37.8441 16.1089 37.8441 19.4664V32.7983C37.8441 36.1547 39.9852 38.2958 43.3428 38.2958H64.8764V40.9943Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.7255 41H21.6578V38.2821H22.2426C25.4629 38.1425 27.4518 36.0655 27.4564 32.7983V11.2647H30.1548L30.1593 33.5662C30.1593 37.6687 26.8292 41 22.7255 41ZM2.70368 11.2647V32.7983C2.70826 36.0655 4.69716 38.1425 7.91856 38.2821L7.43449 41C3.33079 41 0 37.6687 0 33.5662L0.0051477 11.2647H2.70368ZM15.08 41H7.43449L7.91856 38.2821H12.377L12.3759 28.8331H15.0743L15.08 41Z"></path></svg></div>',1),At={key:0,class:"mb-3 tablet:mb-5 text-lg desktop:text-2xl"},jt=n("span",{class:"inline-block text-green-main w-5 tablet:w-8 font-semibold mr-2.5"},"M/",-1),Nt={key:1,class:"mb-3 tablet:mb-5 text-lg desktop:text-2xl"},$t=n("span",{class:"inline-block text-green-main w-5 tablet:w-8 font-semibold mr-2.5"},"T/",-1),Rt={class:"flex flex-col basis-2/5 mb-[30px] tablet:mb-0"},Ft=["innerHTML"],Ut={class:"desktop:max-h-[180px] flex flex-col flex-wrap"},zt=["innerHTML"],It={class:"flex flex-col basis-1/6"},Wt=["innerHTML"],Dt={class:"flex flex-col flex-wrap"},Ot=["innerHTML"],qt={class:"flex flex-col tablet:flex-row"},Kt={class:"flex flex-col basis-1/3 min-w-max shrink-0 pr-5"},Xt=["innerHTML"],Gt=["innerHTML"],Yt={class:"flex flex-col phone-wide:flex-row flex-wrap gap-5 tablet:gap-10 tablet-wide:basis-2/3"},Jt={key:0,class:"max-w-[270px]"},Qt=n("div",{class:"h-0.5 w-full bg-gradient-to-r from-green-main to-gray-darker"},null,-1),en={class:"flex flex-col tablet:flex-row items-center justify-between py-2.5"},tn=n("span",{class:"text-xs desktop:text-sm mb-2.5 tablet:mb-0"},"2023 Webo | All rights reserved",-1);function nn(o,s,t,r,e,i){const u=k,p=E,_=W,w=ie,g=le;return l(),a("div",Mt,[n("div",St,[n("div",Et,[n("div",Pt,[n("div",Zt,[Bt,t.mail?(l(),a("div",At,[jt,v(u,{class:"inline-block underline font-normal",url:"mailto:"+t.mail,title:t.mail},null,8,["url","title"])])):m("",!0),t.tel?(l(),a("div",Nt,[$t,v(u,{class:"inline-block underline font-normal",url:"tel:"+t.tel,title:o.$addTelSpaces(t.tel)},null,8,["url","title"])])):m("",!0)]),n("div",Rt,[n("div",{class:"flex items-end h-10 mb-[30px] tablet:mb-[60px] text-lg desktop:text-xl font-semibold",innerHTML:o.$formatText(t.servicesTitle)},null,8,Ft),n("ul",Ut,[(l(!0),a(y,null,L(t.services,(c,d)=>(l(),a("li",{key:d,class:"block mb-2 tablet:mb-4 max-w-[270px] text-base desktop:text-lg pr-5"},[c.link?(l(),H(u,{key:0,class:"text-inherit hover:text-green-main transition duration-300",url:c.link,activeClass:"none"},{default:C(()=>[M(T(c.title),1)]),_:2},1032,["url"])):c.title?(l(),a("div",{key:1,innerHTML:o.$formatText(c.title)},null,8,zt)):m("",!0)]))),128))])]),n("div",It,[n("div",{class:"flex items-end h-10 mb-[30px] tablet:mb-[60px] text-lg desktop:text-xl font-semibold",innerHTML:o.$formatText(t.brandTitle)},null,8,Wt),n("ul",Dt,[(l(!0),a(y,null,L(t.brand,(c,d)=>(l(),a("li",{key:d,class:"block mb-2 tablet:mb-4 max-w-[250px] text-base desktop:text-lg pr-5"},[c.link?(l(),H(u,{key:0,class:"text-inherit hover:text-green-main transition duration-300",url:c.link,activeClass:"none"},{default:C(()=>[M(T(c.title),1)]),_:2},1032,["url"])):c.title?(l(),a("div",{key:1,innerHTML:o.$formatText(c.title)},null,8,Ot)):m("",!0)]))),128))])])]),n("div",qt,[n("div",Kt,[t.brandName?(l(),a("div",{key:0,class:"prose text-base font-semibold mb-1",innerHTML:t.brandName},null,8,Xt)):m("",!0),t.location?(l(),a("div",{key:1,class:"prose text-base mb-3",innerHTML:t.location},null,8,Gt)):m("",!0),t.socials?(l(),H(p,{key:2,class:"mb-10 tablet:mb-0",socials:t.socials},null,8,["socials"])):m("",!0)]),n("div",Yt,[v(_,{class:"w-[204px] self-start p-2 bg-white rounded-[5px]"}),v(w,{class:"self-start p-2 bg-white rounded-[5px]",rating:t.googleRating,link:t.googleRatingLink,text:t.googleRatingText},null,8,["rating","link","text"]),t.showContributions?(l(),a("div",Jt,[v(g,{src:"/img/contributions.webp",width:"138",height:"64",fit:"inside",class:"object-contain object-left-top"})])):m("",!0)])])]),Qt,n("div",en,[tn,t.privacyPolicyLink?(l(),H(u,{key:0,class:"text-xs desktop:text-sm hover:text-green-main transition duration-300",url:t.privacyPolicyLink,activeClass:"none"},{default:C(()=>[M(T(t.privacyPolicyTitle?t.privacyPolicyTitle:"Polityka prywatności"),1)]),_:1},8,["url"])):m("",!0)])])])}const sn=V(Vt,[["render",nn]]);function q(o,s){let t=[];return o.forEach(r=>{let e=o.filter(p=>r._path.startsWith(p._path)).length==2;if(s==0&&e)return;let i={name:r.name,link:r.link?r.link:r.public===!1||r.draft===!0?"":`https://www.webo.agency${r._path}`,description:r.description,button:r.navButton??!1},u=o.filter(p=>p._path.startsWith(r._path)&&p._path!==r._path);u.length>0&&(i.menu={title:i.description,links:q(u,s+1)}),t.push(i)}),t}const on=wt(Tt),ln={class:"h-full font-body"},rn={class:"relative flex flex-col justify-between h-full mt-[60px] desktop:mt-[94px]"},wn={__name:"default",async setup(o){let s,t;const{data:r}=([s,t]=$(()=>R(()=>F().where({_file:"_settings.md"}).findOne(),"$Gal91XoHda")),s=await s,t(),s),{data:e}=([s,t]=$(()=>R(()=>F().where({showInNav:!0}).find(),"$hEo8gqBijv")),s=await s,t(),s),i=r.value.footer,u=r.value.general;r.value.head;const p=q(e.value,0);return Z("lang",()=>u.lang??"EN"),re({meta:[{name:"msapplication-TileColor",content:"#da532c"},{name:"msapplication-TileImage",content:"/mstile-150x150.png"},{name:"theme-color",content:"#06CEAF"},{name:"robots",content:"INDEX,FOLLOW"}],script:[],link:[{rel:"icon",type:"image/x-icon",href:"/img/favicon/favicon.ico"},{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"},{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#07e7c4"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800&subset=latin,latin-ext&display=swap"}]}),(_,w)=>{const g=ft,c=ne,d=bt,b=on,x=sn;return l(),a("div",ln,[v(g,{menu:h(p),socials:h(u).socials,clutchLink:h(u).clutchLink},null,8,["menu","socials","clutchLink"]),n("div",rn,[n("main",null,[v(c)]),v(d,{class:"shrink-0"}),v(b,{id:0xd8cdf6c5ddba,locale:h(u).lang=="PL"?"pl_PL":"en_US"},null,8,["locale"]),v(x,{mail:h(u).mail,tel:h(u).tel,privacyPolicyLink:h(i).privacyPolicyLink,privacyPolicyTitle:h(i).privacyPolicyTitle,servicesTitle:h(i).servicesTitle,services:h(i).servicesMenu,brandTitle:h(i).brandTitle,brand:h(i).brandMenu,brandName:h(u).brandName,location:h(u).address,socials:h(u).socials,clutchLink:h(u).clutchLink,googleRating:h(u).googleRating,googleRatingLink:h(u).googleRatingLink,googleRatingText:h(u).googleRatingText,showContributions:!0},null,8,["mail","tel","privacyPolicyLink","privacyPolicyTitle","servicesTitle","services","brandTitle","brand","brandName","location","socials","clutchLink","googleRating","googleRatingLink","googleRatingText"])])])}}};export{wn as default};
