(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-374c94e8":"92f8fab5","chunk-2d208356":"5605b39f","chunk-2d211008":"8a01a706","chunk-387178eb":"5cbf805a"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-374c94e8":1,"chunk-387178eb":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise(function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-374c94e8":"c92cf7df","chunk-2d208356":"31d6cfe0","chunk-2d211008":"31d6cfe0","chunk-387178eb":"e7543e3e"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.request=n,delete r[e],p.parentNode.removeChild(p),a(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");s.type=n,s.request=r,a[1](s)}o[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/million-app/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01de":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("router-link",{attrs:{to:"/"}},[n("v-img",{attrs:{src:a("9b19"),width:"64",height:"64"}})],1)],1),n("v-spacer"),n("v-btn",{attrs:{flat:"",to:"/users/12/dashboard"}},[e._v("painel")]),e._v(" |\n    "),n("v-btn",{attrs:{flat:"",to:"/users/12/expenses"}},[e._v("Despesas")]),e._v(" |\n    "),n("v-btn",{attrs:{flat:"",to:"/users/12/revenues"}},[e._v("Receitas")])],1),e._t("default")],2)},r=[],o={},s=o,i=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),d=a("adda"),p=a("9910"),f=a("71d9"),v=a("2a7f"),m=Object(i["a"])(s,n,r,!1,null,null,null);m.options.__file="AppLayout.vue";t["a"]=m.exports;l()(m,{VBtn:u["a"],VImg:d["a"],VSpacer:p["a"],VToolbar:f["a"],VToolbarTitle:v["a"]})},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("bb71"),o=(a("da64"),a("c0a4")),s=a.n(o);n["a"].use(r["a"],{iconfont:"md",theme:{primary:s.a.amber.accent4,secondary:s.a.teal.lighten2,accent:s.a.shades.black,error:s.a.red.accent3}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("router-view"),a("v-footer",{attrs:{height:"auto",color:"primary",app:""}},[a("v-flex",{attrs:{primary:"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[e._v("\n      Code for a United World — "),a("strong",{on:{click:function(t){e.goHome()}}},[e._v("MillionApp")]),e._v(" - ©2019\n    ")])],1)],1)],1)},c=[],l={name:"App",data:function(){return{}}},u=l,d=a("2877"),p=a("6544"),f=a.n(p),v=a("7496"),m=a("549c"),h=a("0e8f"),g=a("553a"),b=Object(d["a"])(u,i,c,!1,null,null,null);b.options.__file="App.vue";var x=b.exports;f()(b,{VApp:v["a"],VContent:m["a"],VFlex:h["a"],VFooter:g["a"]});var y=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Homepage")},C=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",[n("v-parallax",{attrs:{dark:"",src:a("8252")}},[n("v-layout",{attrs:{"text-xs-center":"",column:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",[n("v-layout",{attrs:{"align-center":""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("59b3"),contain:"",height:"128"}})],1)],1)]),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("div",{staticClass:"resultContainer"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n              Este é o Million\n            ")]),n("p",{staticClass:"subheading font-weight-regular"},[e._v("\n            "+e._s(e.text)+"\n            "),n("br"),n("v-btn",{attrs:{rounded:"",color:"primary",to:"/users/12/dashboard"}},[e._v("Visitar painel")])],1)])])],1)],1)],1)],1),n("section",[n("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"my-3",attrs:{xs12:"",md4:""}},[n("div",{staticClass:"text-xs-center"},[n("h2",{staticClass:"headline"},[e._v("Experimente gratuitamente o melhor aplicativo de educação financeira que você já viu")]),n("span",{staticClass:"subheading"},[e._v("A forma mais fácil e eficaz de você tomar o controle da realização dos seus sonhos")])])]),n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"elevation-0 transparent",attrs:{flat:""}},[n("v-card-text",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{"x-large":"",color:"secondary"}},[e._v("center_focus_weak")])],1),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline text-xs-center"},[e._v("Onde queremos chegar?")])]),n("v-card-text",{staticClass:"text-xs-center"},[e._v("\n                  O propósito do Million é ajudar você a se educar na gestão de suas finanças e a se planejar,\n                  te auxiliando para que alcance cada uma de suas metas.\n                  E como faremos isso? De maneira prática, antes de tudo dando visibilidade de suas receitas e despesas.\n                  De maneira organizada você verá para onde vai seu dinheiro a cada novo lançamento, e aí começa a educação financeira.\n                  Depois disso, estabeleça seus objetivos e deixe que o Million te ajude a alcançá-los.\n                ")])],1)],1),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"elevation-0 transparent",attrs:{flat:""}},[n("v-card-text",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{"x-large":"",color:"secondary"}},[e._v("my_location")])],1),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline text-xs-center"},[e._v("A que pé estamos?")])]),n("v-card-text",{staticClass:"text-xs-center"},[e._v("\n                  O Million irá guardar suas receitas e despesas e exibir sua saúde financeira de diferentes maneiras,\n                  auxiliando você a usar bem o seu dinheiro. Estamos trabalhando constantemente em nosso painel,\n                  afim de tornar esta a melhor experiência financeira de sua vida.\n                  Com o tempo o Million aprenderá seus hábitos financeiros e te ajudará a tomar decisões mais conscientes a\n                  respeito de seus gastos, sugerindo conteúdos relacionados ao seu momento financeiro.\n                ")])],1)],1),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"elevation-0 transparent",attrs:{flat:""}},[n("v-card-text",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{"x-large":"",color:"secondary"}},[e._v("sentiment_very_satisfied")])],1),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline text-xs-center"},[e._v("Bora ficar ricos?")])]),n("v-card-text",{staticClass:"text-xs-center"},[e._v("\n                  Nós da equipe Million acreditamos que a educação financeira é a ferramenta que nos protege de inúmeros\n                  imprevistos do dia a dia, e nos torna capazes de realizar muitos de nossos sonhos.\n                  Não nos cansamos de inovar no propósito de tornar o Brasil um país socialmente igualitário,\n                  e para isso contamos com você. Venha aprender mais sobre finanças e tomar o controle da realização de seus\n                  sonhos. Faça parte desta geração nova!\n                ")])],1)],1)],1)],1)],1)],1)],1)])},w=[],j={data:function(){return{text:"Um aplicativo de educação financeira simples e eficiente! Com ele, você tem uma visão clara e completa de suas receitas e despesas, podendo planejar-se melhor para o futuro e realizar seus sonhos."}}},V=j,E=(a("59ca"),a("8336")),O=a("b0af"),T=a("99d9"),A=a("12b2"),P=a("a523"),q=a("132d"),M=a("adda"),S=a("a722"),N=a("8b9c"),$=Object(d["a"])(V,k,w,!1,null,"5ee8b7c6",null);$.options.__file="Homepage.vue";var B=$.exports;f()($,{VBtn:E["a"],VCard:O["a"],VCardText:T["a"],VCardTitle:A["a"],VContainer:P["a"],VFlex:h["a"],VIcon:q["a"],VImg:M["a"],VLayout:S["a"],VParallax:N["a"]});var z={components:{Homepage:B}},F=z,D=Object(d["a"])(F,_,C,!1,null,null,null);D.options.__file="Site.vue";var H=D.exports;n["a"].use(y["a"]);var L=new y["a"]({mode:"history",base:"/million-app/",routes:[{path:"/",name:"home",component:H},{path:"/users/:id/expenses",name:"expenses",component:function(){return Promise.all([a.e("chunk-374c94e8"),a.e("chunk-2d211008")]).then(a.bind(null,"b9fa"))}},{path:"/users/:id/revenues",name:"revenues",component:function(){return Promise.all([a.e("chunk-374c94e8"),a.e("chunk-2d208356")]).then(a.bind(null,"a48e"))}},{path:"/users/:id/dashboard",name:"dashboard",component:function(){return a.e("chunk-387178eb").then(a.bind(null,"7277"))}}]}),I=a("01de"),J=a("9483");Object(J["a"])("".concat("/million-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].mixin({methods:{goHome:function(){this.$router.push("/")},goToDashboard:function(e){this.$router.push({name:"dashboard",params:{id:e}})},goToExpenses:function(e){this.$router.push({name:"expenses",params:{id:e}})},goToRevenues:function(e){this.$router.push({name:"revenues",params:{id:e}})}}}),n["a"].component("AppLayout",I["a"]),n["a"].config.productionTip=!1,new n["a"]({router:L,render:function(e){return e(x)}}).$mount("#app")},"59b3":function(e,t,a){e.exports=a.p+"img/lighten-logo.92470fe4.svg"},"59ca":function(e,t,a){"use strict";var n=a("bd92"),r=a.n(n);r.a},8252:function(e,t,a){e.exports=a.p+"img/dark-planning.bd977230.jpg"},"9b19":function(e,t,a){e.exports=a.p+"img/logo.373860ce.svg"},bd92:function(e,t,a){}});
//# sourceMappingURL=app.fc3682fb.js.map