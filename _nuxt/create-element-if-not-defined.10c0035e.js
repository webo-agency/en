import{g as m}from"./swiper-bundle.min.64e368ef.js";function i(l,f,n,c){const o=m();return l.params.createElements&&Object.keys(c).forEach(t=>{if(!n[t]&&n.auto===!0){let e=l.$el.children(`.${c[t]}`)[0];e||(e=o.createElement("div"),e.className=c[t],l.$el.append(e)),n[t]=e,f[t]=e}}),n}export{i as c};