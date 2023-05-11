define((function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=33)}({0:function(t,e,n){"use strict";function a(t,e,n,a,o,s,r,i){var l=typeof(t=t||{}).default;"object"!==l&&"function"!==l||(t=t.default);var c,p="function"==typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),a&&(p.functional=!0),s&&(p._scopeId=s),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},p._ssrRegister=c):o&&(c=i?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(p.functional){p._injectStyles=c;var u=p.render;p.render=function(t,e){return c.call(e),u(t,e)}}else{var m=p.beforeCreate;p.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:p}}n.d(e,"a",(function(){return a}))},33:function(t,e,n){"use strict";n.r(e),n.d(e,"init",(function(){return y})),n.d(e,"destroy",(function(){return C}));var a={props:{logoPath:{type:String,default:function(){return null}},portalPath:{type:String,default:function(){return null}},logoTitle:{type:String,default:function(){return null}},membersNumber:{type:Number,default:function(){return null}},spaceDescription:{type:String,default:function(){return""}},homePath:{type:String,default:function(){return""}},managers:{type:Array,default:function(){return null}},sizeToDisplay:{type:Number,default:function(){return 4}}},computed:{KeepDisplayManagers:function(){return this.managers&&this.managers.length<=this.sizeToDisplay},mangersToDisplay:function(){return this.managers&&this.managers.slice(0,this.sizeToDisplay)},lastManagerToDisplay:function(){return this.managers&&this.managers.length>this.sizeToDisplay&&this.managers[this.sizeToDisplay]},showMoreManagers:function(){return this.managers&&this.managers.length-this.sizeToDisplay}},methods:{openChatDrawer:function(){document.dispatchEvent(new CustomEvent("exo-chat-room-open-requested",{detail:{name:""+eXo.env.portal.spaceGroup,type:"space-name"}}))}}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-menu",{attrs:{rounded:"rounded",elevation:"2","open-on-hover":"","close-on-content-click":!1,"nudge-width":200,"max-width":"350","min-width":"300","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("div",t._g(t._b({staticClass:"d-inline-flex"},"div",o,!1),a),[t.logoPath?n("a",{staticClass:"pe-3 logoContainer",attrs:{id:"UserHomePortalLink",href:t.portalPath}},[n("img",{staticClass:"spaceAvatar",attrs:{src:t.logoPath,alt:t.logoTitle}})]):t._e(),t._v(" "),n("a",{class:"ps-2 align-self-center brandingContainer space",attrs:{href:t.portalPath}},[n("div",{staticClass:"logoTitle subtitle-2 font-weight-bold text-truncate"},[t._v("\n            "+t._s(t.logoTitle)+"\n          ")])])])]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-card",{attrs:{elevation:"2"}},[n("v-list",{staticClass:"pa-0"},[n("v-list-item",[n("v-list-item-avatar",{attrs:{width:"60",height:"60"}},[n("v-img",{staticClass:"object-fit-cover",attrs:{src:t.logoPath}})],1),t._v(" "),n("v-list-item-content",{staticClass:"pb-0"},[n("v-list-item-title",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("span",t._g(t._b({staticClass:"blue--text text--darken-3 font-weight-bold"},"span",o,!1),a),[t._v("\n                    "+t._s(t.logoTitle)+"\n                  ")])]}}])},[t._v(" "),n("span",[t._v(t._s(t.logoTitle))])])],1),t._v(" "),n("v-list-item-subtitle",[t._v("\n              "+t._s(t.membersNumber)+" "+t._s(t.$t("space.logo.banner.popover.members"))+"\n            ")]),t._v(" "),n("p",{staticClass:"text-truncate-3 text-caption text--primary font-weight-medium"},[t._v("\n              "+t._s(t.spaceDescription)+"\n            ")])],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{staticClass:"pa-0 mt-0 mb-0"},[n("v-list-item",{staticClass:"pt-0 pb-0"},[n("v-list-item-content",[n("v-container",{staticClass:"pa-0"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pt-1 body-2 grey--text text--darken-1",attrs:{cols:"4",justify:"center"}},[t._v("\n                  "+t._s(t.$t("space.logo.banner.popover.managers"))+"\n                ")]),t._v(" "),n("v-col",{staticClass:"d-flex flex-nowrap pa-0",attrs:{cols:"8",justify:"center"}},[t._l(t.mangersToDisplay,(function(t){return n("exo-user-avatar",{key:t.id,staticClass:"me-1 pa-0 mt-0 mb-0",attrs:{username:t.userName,title:t.fullName,"avatar-url":t.avatar,size:30,"retrieve-extra-information":!1}})})),t._v(" "),t.KeepDisplayManagers?t._e():n("v-avatar",{staticClass:"ma-0",attrs:{size:30}},[n("img",{staticClass:"object-fit-cover",attrs:{src:t.lastManagerToDisplay.avatar,title:t.lastManagerToDisplay.fullName,loading:"lazy",alt:t.lastManagerToDisplay.fullName}}),t._v(" "),n("span",{staticClass:"font-weight-bold white--text",attrs:{id:"showMoreManagers"}},[n("p",{staticClass:"mt-2"},[t._v("+"+t._s(t.showMoreManagers))])])])],2)],1)],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{staticClass:"pa-0 mt-0 mb-0"},[n("v-list-item",{staticClass:"pt-0 pb-0"},[n("v-list-item-content",[n("v-list-item-title",[n("v-btn",{staticClass:"pa-0 pe-2",attrs:{href:t.homePath,color:"primary",text:""}},[n("v-icon",{staticClass:"me-1",attrs:{dense:"",right:""}},[t._v("\n                  mdi-home\n                ")]),t._v(" "),n("span",{staticClass:"text-caption pt-1"},[t._v(t._s(t.$t("space.logo.banner.popover.home")))])],1)],1)],1),t._v(" "),n("v-list-item-action",[n("div",{staticClass:"pa-0 ma-0"},[n("v-btn",{staticClass:"d-none",attrs:{color:"primary",icon:""}},[n("v-icon",{attrs:{dense:""}},[t._v("mdi-send")])],1),t._v(" "),n("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.openChatDrawer}},[n("v-icon",{attrs:{dense:""}},[t._v("mdi-chat-processing")])],1),t._v(" "),n("space-popover-action-component")],1)])],1)],1)],1)],1)],1)};o._withStripped=!0;var s=n(0),r=Object(s.a)(a,o,[],!1,null,null,null);r.options.__file="src/main/webapp/vue-apps/space-top-bannerlogo/components/ExoSpaceLogoBanner.vue";var i=r.exports;var l;l="action-component",extensionRegistry.loadExtensions("space-menu",l);var c=function(t){return extensionRegistry.loadExtensions("space-title-action-components",t)}("action-component"),p={computed:{enabledComponents:function(){return c.filter((function(t){return t.enabled}))}},mounted:function(){var t=this;c.map((function(e){return t.initTitleActionComponent(e)}))},methods:{initTitleActionComponent:function(t){if(t.init&&!t.isStartedInit&&t.enabled){t.isStartedInit=!0;var e=this.$refs[t.key];e&&e.length>0?(e=e[0],t.init(e,eXo.env.portal.spaceName)):console.error("Error initialization of the "+t.key+" action component: empty container")}}}},u=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-inline-flex"},this._l(this.enabledComponents,(function(t){return e("span",{key:t.key,ref:t.key,refInFor:!0,class:t.appClass+" "+t.typeClass})})),0)};u._withStripped=!0;var m=Object(s.a)(p,u,[],!1,null,null,null);m.options.__file="src/main/webapp/vue-apps/space-top-bannerlogo/components/SpacePopoverActionComponents.vue";var v={"exo-space-logo-banner":i,"space-popover-action-component":m.exports};for(var f in v)Vue.component(f,v[f]);if(extensionRegistry){var d=extensionRegistry.loadComponents("ExoPopover");d&&d.length>0&&d.forEach((function(t){Vue.component(t.componentName,t.componentOptions)}))}Vue.use(Vuetify);var g=new Vuetify(eXo.env.portal.vuetifyPreset),h=eXo&&eXo.env.portal.language||"en",_=eXo.env.portal.context+"/"+eXo.env.portal.rest+"/i18n/bundle/locale.portlet.Portlets-"+h+".json",b=void 0;function y(t){exoi18n.loadLanguageAsync(h,_).then((function(e){b=Vue.createApp({data:function(){return{logoPath:t.logoPath,portalPath:t.portalPath,imageClass:t.imageClass,logoTitle:t.logoTitle,titleClass:t.titleClass,membersNumber:t.membersNumber,spaceDescription:t.spaceDescription,managers:t.managers,homePath:t.homePath}},template:'<exo-space-logo-banner\n                    id="SpaceTopBannerLogo"\n                    v-cacheable\n                    :logo-path="logoPath" \n                    :portal-path="portalPath"\n                    :logo-title="logoTitle" \n                    :members-number="membersNumber"\n                    :managers="managers"\n                    :home-path="homePath"\n                    :space-description="spaceDescription" />',i18n:e,vuetify:g},"#SpaceTopBannerLogo","social-portlet")}))}function C(){b&&b.$destroy()}}})}));