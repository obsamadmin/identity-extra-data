define((function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=49)}({0:function(e,t,n){"use strict";function o(e,t,n,o,r,a,i,s){var c=typeof(e=e||{}).default;"object"!==c&&"function"!==c||(e=e.default);var p,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),a&&(u._scopeId=a),i?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=p):r&&(p=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),p)if(u.functional){u._injectStyles=p;var l=u.render;u.render=function(e,t){return p.call(t),l(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,p):[p]}return{exports:e,options:u}}n.d(t,"a",(function(){return o}))},49:function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return d}));var o={data:function(){return{description:"",managers:[],profileUrl:eXo.env.portal.context+"/"+eXo.env.portal.portalName+"/profile/"}},created:function(){var e=this;Promise.resolve(this.init(eXo.env.portal.spaceId)).finally((function(){return e.$root.$applicationLoaded()}))},methods:{init:function(e){var t=this;if(e)return this.$spaceService.getSpaceById(e,"managers").then((function(e){return e&&(t.description=e.description||"",t.managers=e.managers&&e.managers.filter((function(e){return e.enabled&&!e.deleted}))||[]),t.$nextTick()})).then((function(){t.$root.$emit("application-loaded"),t.initPopup()}))},initPopup:function(){var e=eXo.env.portal.context+"/"+eXo.env.portal.rest+"/social/people/getPeopleInfo/{0}.json",t={youHaveSentAnInvitation:this.$t("message.label")};$("#spaceManagers").find("a").each((function(n,o){$(o).userPopup({restURL:e,labels:t,content:!1,defaultPosition:"left",keepAlive:!0,maxWidth:"240px"})}))}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"spaceInfosApp"}},[n("h5",{staticClass:"center"},[e._v(e._s(e.$t("social.space.description.title")))]),e._v(" "),n("p",{attrs:{id:"spaceDescription"}},[e._v(e._s(e.description))]),e._v(" "),n("div",{attrs:{id:"spaceManagersList"}},[n("h5",[e._v(e._s(e.$t("social.space.description.managers")))]),e._v(" "),n("ul",{attrs:{id:"spaceManagers"}},e._l(e.managers,(function(t){return n("li",{key:t,staticClass:"spaceManagerEntry"},[n("a",{attrs:{href:""+e.profileUrl+t.username}},[n("v-avatar",{attrs:{size:30}},[n("img",{staticClass:"object-fit-cover ma-auto",attrs:{src:t.avatar,alt:"avatar",loading:"lazy"}})]),e._v("\n          "+e._s(t.fullname)+"\n        ")],1)])})),0)])])};r._withStripped=!0;var a=n(0),i=Object(a.a)(o,r,[],!1,null,null,null);i.options.__file="src/main/webapp/vue-apps/space-infos-app/components/ExoSpaceInfos.vue";var s=i.exports;Vue.component("exo-space-infos",s);var c="undefined"!=typeof eXo?eXo.env.portal.language:"en",p=Vue.prototype.$spacesConstants.PORTAL+"/"+Vue.prototype.$spacesConstants.PORTAL_REST+"/i18n/bundle/locale.portlet.social.SpaceInfosPortlet-"+c+".json";if(extensionRegistry){var u=extensionRegistry.loadComponents("SpaceInfos");u&&u.length>0&&u.forEach((function(e){Vue.component(e.componentName,e.componentOptions)}))}var l="spaceInfosApp",f=l+"_"+eXo.env.portal.spaceId;function d(){exoi18n.loadLanguageAsync(c,p).then((function(e){var t=document.createElement("div");t.id=l,Vue.createApp({template:"<exo-space-infos v-cacheable=\"{cacheId: '"+f+'\'}" id="'+l+'"></exo-space-infos>',vuetify:Vue.prototype.vuetifyOptions,i18n:e},t,"Space Info")}))}}})}));