(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1dde":function(e,t,s){var n=s("d039"),r=s("b622"),a=s("2d00"),o=r("species");e.exports=function(e){return a>=51||!n((function(){var t=[],s=t.constructor={};return s[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,s){var n=s("861d"),r=s("e8b5"),a=s("b622"),o=a("species");e.exports=function(e,t){var s;return r(e)&&(s=e.constructor,"function"!=typeof s||s!==Array&&!r(s.prototype)?n(s)&&(s=s[o],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===t?0:t)}},8418:function(e,t,s){"use strict";var n=s("c04e"),r=s("9bf2"),a=s("5c6c");e.exports=function(e,t,s){var o=n(t);o in e?r.f(e,o,a(0,s)):e[o]=s}},a434:function(e,t,s){"use strict";var n=s("23e7"),r=s("23cb"),a=s("a691"),o=s("50c4"),i=s("7b0b"),c=s("65f0"),u=s("8418"),l=s("1dde"),d=s("ae40"),m=l("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m||!f},{splice:function(e,t){var s,n,l,d,m,f,b=i(this),x=o(b.length),w=r(e,x),_=arguments.length;if(0===_?s=n=0:1===_?(s=0,n=x-w):(s=_-2,n=v(p(a(t),0),x-w)),x+s-n>h)throw TypeError(g);for(l=c(b,n),d=0;d<n;d++)m=w+d,m in b&&u(l,d,b[m]);if(l.length=n,s<n){for(d=w;d<x-n;d++)m=d+n,f=d+s,m in b?b[f]=b[m]:delete b[f];for(d=x;d>x-n+s;d--)delete b[d-1]}else if(s>n)for(d=x-n;d>w;d--)m=d+n-1,f=d+s-1,m in b?b[f]=b[m]:delete b[f];for(d=0;d<s;d++)b[d+w]=arguments[d+2];return b.length=x-n+s,l}})},ae40:function(e,t,s){var n=s("83ab"),r=s("d039"),a=s("5135"),o=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(a(i,e))return i[e];t||(t={});var s=[][e],u=!!a(t,"ACCESSORS")&&t.ACCESSORS,l=a(t,0)?t[0]:c,d=a(t,1)?t[1]:void 0;return i[e]=!!s&&!r((function(){if(u&&!n)return!0;var e={length:-1};u?o(e,1,{enumerable:!0,get:c}):e[1]=1,s.call(e,l,d)}))}},b727:function(e,t,s){var n=s("0366"),r=s("44ad"),a=s("7b0b"),o=s("50c4"),i=s("65f0"),c=[].push,u=function(e){var t=1==e,s=2==e,u=3==e,l=4==e,d=6==e,m=5==e||d;return function(f,p,v,h){for(var g,b,x=a(f),w=r(x),_=n(p,v,3),U=o(w.length),y=0,C=h||i,A=t?C(f,U):s?C(f,0):void 0;U>y;y++)if((m||y in w)&&(g=w[y],b=_(g,y,x),e))if(t)A[y]=b;else if(b)switch(e){case 3:return!0;case 5:return g;case 6:return y;case 2:c.call(A,g)}else if(l)return!1;return d?-1:u||l?l:A}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c740:function(e,t,s){"use strict";var n=s("23e7"),r=s("b727").findIndex,a=s("44d2"),o=s("ae40"),i="findIndex",c=!0,u=o(i);i in[]&&Array(1)[i]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!u},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(i)},e8b5:function(e,t,s){var n=s("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},ed81:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("h1",[e._v("Users")]),s("b-alert",{attrs:{show:e.dismissCountDown,dismissible:"",variant:e.message.color},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[e._v(" "+e._s(e.message.text)+" ")]),e.add?s("form",{on:{submit:function(t){return t.preventDefault(),e.addUser(e.user)}}},[s("h3",[e._v("Add new user")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastname,expression:"user.lastname"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Last Name",required:""},domProps:{value:e.user.lastname},on:{input:function(t){t.target.composing||e.$set(e.user,"lastname",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),s("b-button",{staticClass:"btn-sm btn-block btn-success",attrs:{type:"submit"}},[e._v("Add")])],1):s("form",{on:{submit:function(t){return t.preventDefault(),e.editUser(e.updateUser)}}},[s("h3",{staticClass:"text-center"},[e._v("Editar Nota")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.updateUser.name,expression:"updateUser.name"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:e.updateUser.name},on:{input:function(t){t.target.composing||e.$set(e.updateUser,"name",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.updateUser.lastname,expression:"updateUser.lastname"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Last Name",required:""},domProps:{value:e.updateUser.lastname},on:{input:function(t){t.target.composing||e.$set(e.updateUser,"lastname",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.updateUser.email,expression:"updateUser.email"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Email",required:""},domProps:{value:e.updateUser.email},on:{input:function(t){t.target.composing||e.$set(e.updateUser,"email",t.target.value)}}}),s("b-button",{staticClass:"btn-sm btn-block mb-1 btn-warning",attrs:{type:"submit"}},[e._v("Edit")]),s("b-button",{staticClass:"btn-sm btn-block",on:{click:function(t){e.add=!0}}},[e._v("Cancel")])],1),s("table",{staticClass:"table"},[e._m(0),s("tbody",e._l(e.users,(function(t,n){return s("tr",{key:n},[s("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),s("td",[e._v(e._s(t.name))]),s("td",[e._v(e._s(t.lastname))]),s("td",[e._v(e._s(t.email))]),s("td",[s("b-button",{staticClass:"btn-warning btn-sm mx-2",on:{click:function(s){return e.activeEdit(t.id)}}},[e._v("Edit")]),s("b-button",{staticClass:"btn-danger btn-sm mx-2",on:{click:function(s){return e.deleteUser(t.id)}}},[e._v("Delete")])],1)])})),0)])],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[e._v("ID")]),s("th",{attrs:{scope:"col"}},[e._v("Name")]),s("th",{attrs:{scope:"col"}},[e._v("Last Name")]),s("th",{attrs:{scope:"col"}},[e._v("Email")]),s("th",{attrs:{scope:"col"}},[e._v("Actions")])])])}],a=(s("c740"),s("a434"),{data:function(){return{users:[],dismissSecs:5,dismissCountDown:0,message:{color:"",text:""},user:{name:"",email:""},add:!0,updateUser:{}}},created:function(){this.listUsers()},methods:{alert:function(){this.message.color="success",this.message.text="Test Alert",this.showAlert()},listUsers:function(){var e=this;this.axios.get("/users").then((function(t){e.users=t.data})).catch((function(e){console.log("error"+e)}))},addUser:function(e){var t=this;e.enable=!0,this.axios.post("/addUser",e).then((function(e){t.users.unshift(e.data),t.showAlert(),t.message.text="User Added!",t.message.color="success",t.listUsers()})).catch((function(e){t.showAlert(),t.message.color="danger",t.message.text="error"})),this.user={}},deleteUser:function(e){var t=this;this.axios.delete("/users/".concat(e)).then((function(e){var s=t.users.findIndex((function(t){return t.id===e.data.id}));t.users.splice(s,1),t.showAlert(),t.message.text="User Deleted!",t.message.color="danger",t.listUsers()})).catch((function(e){console.log(e.response)}))},activeEdit:function(e){var t=this;this.add=!1,this.axios.get("users/".concat(e)).then((function(e){console.log(e),t.updateUser=e.data[0]})).catch((function(e){console.log(e.response)}))},editUser:function(e){var t=this;this.axios.put("users/".concat(e.id),e).then((function(e){t.updateUser={},t.showAlert(),t.message.text="Edit Success",t.message.color="success"})).catch((function(e){console.log(e),t.showAlert(),t.message.color="danger",t.message.text="error"})),this.add=!0},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),o=a,i=s("2877"),c=Object(i["a"])(o,n,r,!1,null,null,null);t["default"]=c.exports},f820:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("This is an about page")])])}],a=s("2877"),o={},i=Object(a["a"])(o,n,r,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=about.733c2baa.js.map