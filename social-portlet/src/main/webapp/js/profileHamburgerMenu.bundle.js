define((function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=47)}({0:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var l=typeof(t=t||{}).default;"object"!==l&&"function"!==l||(t=t.default);var u,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId=o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(f.functional){f._injectStyles=u;var c=f.render;f.render=function(t,e){return u.call(e),c(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},47:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{PROFILE_URI:eXo.env.portal.context+"/"+eXo.env.portal.portalName+"/profile",IDENTITY_REST_API_URI:eXo.env.portal.context+"/"+eXo.env.portal.rest+"/v1/social/identities/"+eXo.env.portal.userIdentityId,profile:null}},computed:{avatar:function(){return this.profile&&this.profile.avatar||""},fullName:function(){return this.profile&&this.profile.fullname||""},position:function(){return this.profile&&this.profile.position||""},external:function(){return this.profile&&this.profile.dataEntity&&"true"===this.profile.dataEntity.external}},created:function(){var t=this;document.addEventListener("userModified",(function(e){e&&e.detail&&Object.assign(t.profile,e.detail)})),this.retrieveUserInformation()},methods:{retrieveUserInformation:function(){var t=this;if(this.profile=this.$currentUserIdentity&&this.$currentUserIdentity.profile,!this.profile)return this.$identityService.getIdentityById(eXo.env.portal.userIdentityId).then((function(e){return t.profile=e&&e.profile})).finally((function(){return t.$root.$applicationLoaded()}));this.$root.$applicationLoaded()}}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{id:"ProfileHamburgerNavigation"}},[n("v-row",{staticClass:"accountTitleWrapper mx-0"},[n("v-list-item",{staticClass:"accountTitleItem py-3",attrs:{href:t.PROFILE_URI}},[n("v-list-item-avatar",{staticClass:"me-3 mt-0 mb-0 elevation-1",attrs:{size:"44"}},[n("v-img",{attrs:{src:t.avatar,eager:""}})],1),t._v(" "),n("v-list-item-content",{staticClass:"py-0 accountTitleLabel"},[n("v-list-item-title",{staticClass:"font-weight-bold body-2 mb-0"},[t._v(t._s(t.fullName)+" "),t.external?n("span",{staticClass:"externalFlagClass"},[t._v(t._s(t.$t("menu.profile.external")))]):t._e()]),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-italic caption"},[t._v(t._s(t.position))])],1)],1)],1)],1)};i._withStripped=!0;var o=n(0),a=Object(o.a)(r,i,[],!1,null,null,null);a.options.__file="src/main/webapp/vue-apps/profile-navigation/components/ExoProfileHamburgerNavigation.vue";var s=a.exports,l={"exo-profile-hamburger-menu-navigation":s};for(var u in l)Vue.component(u,l[u]);if(extensionRegistry&&extensionRegistry.registerExtension("exo-hamburger-menu-navigation","exo-hamburger-menu-navigation-items",{id:"HamburgerMenuNavigationProfile",priority:-1,vueComponent:s}),extensionRegistry){var f=extensionRegistry.loadComponents("ProfileHamburgerNavigation");f&&f.length>0&&f.forEach((function(t){Vue.component(t.componentName,t.componentOptions)}))}document.dispatchEvent(new CustomEvent("exo-hamburger-menu-navigation-refresh"))}})}));