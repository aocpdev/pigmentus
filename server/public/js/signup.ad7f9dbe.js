(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"0798":function(e,t,s){"use strict";s("caad");var r=s("5530"),o=s("ade3"),a=(s("0c18"),s("10d2")),i=s("afdd"),n=s("9d26"),l=s("f2e7"),c=s("7560"),u=s("f40d"),d=s("58df"),h=s("d9bd");t["a"]=Object(d["a"])(a["a"],l["a"],u["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var e={staticClass:"v-alert__border",class:Object(o["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(i["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(n["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(n["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=Object(r["a"])(Object(r["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var e={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,s){},"34c3b":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{"fill-height":"",fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"8",md:"8",align:"center"}},[s("v-card",{staticClass:"elevation-12",attrs:{"max-width":"650px"}},[s("v-window",[s("v-window-item",[s("v-row",{staticClass:"fill-height"},[s("v-col",{staticClass:"goldColor accent-3",attrs:{cols:"12",md:"4"}},[s("v-card-text",{staticClass:"mt-12"},[s("h1",{staticClass:"text-center display-1"},[e._v("Welcome Back !")]),s("h5",[e._v("To keep connected us please login with your personnel info")])]),s("div",{staticClass:"text-center"},[s("v-btn",{attrs:{rounded:"",dark:""},on:{click:function(t){return e.goLogin()}}},[e._v("SIGN IN")])],1)],1),s("v-col",{attrs:{cols:"12",md:"8"}},[s("v-card-text",{staticClass:"mt-12"},[e.error?s("div",{staticStyle:{"padding-top":"20px"}},[s("v-alert",{attrs:{text:"",dismissible:"","close-icon":"mdi-close",icon:"mdi-email",type:"error"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}},[e._v(" "+e._s(e.errorMessage)+" ")])],1):e._e(),s("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{label:"Name",name:"Name","prepend-icon":"mdi-account",color:"rgb(187, 162, 87)",rules:e.nameRules},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),s("v-text-field",{attrs:{label:"Last Name",name:"LastName","prepend-icon":"mdi-account",color:"rgb(187, 162, 87)",rules:e.lastNameRules},model:{value:e.user.last_name,callback:function(t){e.$set(e.user,"last_name",t)},expression:"user.last_name"}}),s("v-text-field",{attrs:{label:"Email",name:"Email","prepend-icon":"mdi-email",color:"rgb(187, 162, 87)",rules:e.emailRules},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),s("v-text-field",{attrs:{id:"Password",label:"Password",name:"Password","prepend-icon":"mdi-lock",type:"password",color:"rgb(187, 162, 87)",rules:e.passwordRules},model:{value:e.user.password1,callback:function(t){e.$set(e.user,"password1",t)},expression:"user.password1"}}),s("v-text-field",{attrs:{id:"ConfirmPassword",label:"Confirm Password",name:"ConfirmPassword","prepend-icon":"mdi-lock",type:"password",color:"rgb(187, 162, 87)",rules:e.passwordConfirmationRules},model:{value:e.user.password2,callback:function(t){e.$set(e.user,"password2",t)},expression:"user.password2"}}),s("div",{staticClass:"text-center mt-3"},[s("v-btn",{attrs:{rounded:"",color:"rgb(187, 162, 87) ",disabled:!e.valid},on:{click:function(t){return e.createUser()}}},[e._v("SING UP")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},o=[],a=(s("b0c0"),s("a18c")),i={data:function(){return{error:!1,valid:!1,errorMessage:"",user:{},password2:"",nameRules:[function(e){return!!e||"Name is required"}],lastNameRules:[function(e){return!!e||"Last Name is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+.com+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>5||"Password must be at least 6 characters"}]}},methods:{goLogin:function(){"true"===this.$route.query.fromCart?a["a"].push({name:"Signin",query:{fromCart:"true"}}):a["a"].push({name:"Signin"})},createUser:function(){var e=this;this.user.enable=!0,this.axios.post("/api/auth/signup",this.user).then((function(t){if("User added succesfully"===t.data.message){var s={email:e.user.email,password:e.user.password1};e.axios.post("/api/auth/signin",s).then((function(t){"true"===e.$route.query.fromCart?(a["a"].push({name:"Signin",query:{fromCart:"true"}}),e.$store.state.snackbarMessage="Welcome to Pigmentus "+user.name+" "+user.lastName,e.$store.state.snackbar=!0):a["a"].push({name:"Signin"})})).catch((function(e){}))}})).catch((function(t){e.error=!1,"User exist"===t.response.data.message&&(e.user.email="",e.error=!0,e.errorMessage="This email is already registered, please choose another one.")}))}},computed:{passwordConfirmationRules:function(){var e=this;return[function(){return e.user.password1===e.user.password2||"Password must match"},function(e){return!!e||"Confirmation Password is required"}]}}},n=i,l=(s("e42b"),s("2877")),c=s("6544"),u=s.n(c),d=s("0798"),h=s("8336"),m=s("b0af"),p=s("99d9"),f=s("62ad"),v=s("a523"),b=s("4bd4"),g=s("0fd9"),w=s("8654"),C=s("f665"),_=s("1e6c"),x=Object(l["a"])(n,r,o,!1,null,null,null);t["default"]=x.exports;u()(x,{VAlert:d["a"],VBtn:h["a"],VCard:m["a"],VCardText:p["b"],VCol:f["a"],VContainer:v["a"],VForm:b["a"],VRow:g["a"],VTextField:w["a"],VWindow:C["a"],VWindowItem:_["a"]})},cff3:function(e,t,s){},e42b:function(e,t,s){"use strict";var r=s("cff3"),o=s.n(r);o.a}}]);
//# sourceMappingURL=signup.ad7f9dbe.js.map