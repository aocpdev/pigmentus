(function(t){function e(e){for(var a,r,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"baa66eee"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"bca07f5d"}[t]+".css",o=u.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===a||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],p.parentNode.removeChild(p),n(s)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Pigmentus Logo",contain:"",src:n("76b8"),transition:"scale-transition",width:"80"}})],1),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{to:"/categories",color:"black"}},[t._v(" Categories ")]),a("v-text-field",{staticStyle:{"margin-top":"30px"},attrs:{outlined:"",label:"Search",filled:"","append-icon":"mdi-card-search-outline"}}),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{tile:"",large:"",color:"white",icon:"",to:"/cart"}},[a("v-icon",[t._v("mdi-cart")])],1),a("v-btn",{staticClass:"ma-2",attrs:{to:"/signup",color:"black"}},[t._v(" Sign Up ")]),a("div",[a("v-btn",{staticClass:"ma-2",attrs:{to:"/signin",color:"black"}},[t._v(" Sign In ")])],1)],1),a("v-main",[a("router-view")],1)],1)},o=[],s={name:"App",components:{},data:function(){return{}}},i=s,u=n("2877"),c=n("6544"),l=n.n(c),f=n("7496"),p=n("40dc"),d=n("8336"),h=n("132d"),m=n("adda"),v=n("f6c4"),b=n("2fa4"),g=n("8654"),y=Object(u["a"])(i,r,o,!1,null,null,null),w=y.exports;l()(y,{VApp:f["a"],VAppBar:p["a"],VBtn:d["a"],VIcon:h["a"],VImg:m["a"],VMain:v["a"],VSpacer:b["a"],VTextField:g["a"]});n("d3b7");var _=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v("Este es el home aqui podrian ir los videos o categorias, de verdad no se.")])])},C=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},k=[],S={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},V=S,E=n("62ad"),O=n("a523"),A=n("0fd9"),P=Object(u["a"])(V,j,k,!1,null,null,null),L=P.exports;l()(P,{VCol:E["a"],VContainer:O["a"],VImg:m["a"],VRow:A["a"]});var T={name:"Home",components:{HelloWorld:L}},N=T,q=Object(u["a"])(N,x,C,!1,null,null,null),I=q.exports;l()(q,{VRow:A["a"]}),a["default"].use(_["a"]);var M=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/signup",name:"signup",component:function(){return n.e("about").then(n.bind(null,"34c3"))}},{path:"/signin",name:"signin",component:function(){return n.e("about").then(n.bind(null,"4a33"))}},{path:"/cart",name:"cart",component:function(){return n.e("about").then(n.bind(null,"b789"))}},{path:"/categories",name:"categories",component:function(){return n.e("about").then(n.bind(null,"58c2"))}}],B=new _["a"]({mode:"history",base:"/",routes:M}),H=B,D=n("2f62");a["default"].use(D["a"]);var F=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),W=n("5f5b"),$=n("bc3a"),R=n.n($),U=n("a7fe"),J=n.n(U),K=n("f309");n("d1e78"),n("bf40");a["default"].use(K["a"]);var Q=new K["a"]({icons:{iconfont:"mdi"}});n("f9e3"),n("2dd8");a["default"].use(J.a,R.a,Q),a["default"].use(W["a"]),a["default"].config.productionTip=!1,R.a.defaults.baseURL="https://pigmentus.herokuapp.com",new a["default"]({router:H,store:F,vuetify:Q,render:function(t){return t(w)}}).$mount("#app")},"76b8":function(t,e,n){t.exports=n.p+"img/pigmentus-logo.9774fd66.png"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.404293d5.js.map