define((function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=45)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,i,s,a){var u=typeof(t=t||{}).default;"object"!==u&&"function"!==u||(t=t.default);var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId=i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var f=l.render;l.render=function(t,e){return c.call(e),f(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))},45:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{settingsUrl:eXo.env.portal.context+"/"+eXo.env.portal.portalName+"/settings"}},mounted:function(){this.$root.$applicationLoaded()},methods:{logOut:function(){eXo.portal.logout()},changeLanguage:function(){document.getElementById("UIMaskWorkspace")&&window.ajaxGet(eXo.env.server.createPortalURL("UIPortal","ChangeLanguage",!0))},accountSettings:function(){document.getElementById("UIMaskWorkspace")&&window.ajaxGet(eXo.env.server.createPortalURL("UIPortal","AccountSettings",!0))}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white",attrs:{id:"UserHamburgerNavigation","px-0":"","pb-4":"","pt-0":""}},[n("v-row",{staticClass:"mx-0 settingsTitle"},[n("v-list-item",{staticClass:"settingsTitleWrapper",attrs:{href:t.settingsUrl}},[n("v-list-item-icon",{staticClass:"my-auto mr-6"},[n("i",{staticClass:"uiIcon uiIconToolbarNavItem settingsIcon"})]),t._v(" "),n("v-list-item-content",{staticClass:"subtitle-2 settingsTitleLabel"},[t._v(t._s(this.$t("menu.settings.title")))])],1)],1),t._v(" "),n("v-row",{staticClass:"mx-0 logoutLinks"},[n("v-list-item",{on:{click:function(e){return t.logOut()}}},[n("v-list-item-icon",{staticClass:"my-auto mr-6"},[n("i",{staticClass:"uiIcon uiIconToolbarNavItem logoutIcon"})]),t._v(" "),n("v-list-item-content",{staticClass:"subtitle-2 settingsTitleLabel"},[t._v(t._s(this.$t("menu.logout.label")))])],1)],1)],1)};r._withStripped=!0;var i=n(0),s=Object(i.a)(o,r,[],!1,null,null,null);s.options.__file="src/main/webapp/vue-apps/user-navigation/components/ExoUserHamburgerNavigation.vue";var a=s.exports,u={"exo-user-hamburger-navigation":a};for(var c in u)Vue.component(c,u[c]);if(extensionRegistry&&extensionRegistry.registerExtension("exo-hamburger-menu-navigation","exo-hamburger-menu-navigation-items",{id:"HamburgerMenuNavigationUser",priority:50,vueComponent:a}),extensionRegistry){var l=extensionRegistry.loadComponents("UserHamburgerNavigation");l&&l.length>0&&l.forEach((function(t){Vue.component(t.componentName,t.componentOptions)}))}document.dispatchEvent(new CustomEvent("exo-hamburger-menu-navigation-refresh"))}})}));