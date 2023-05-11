define((function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var p=u.render;u.render=function(e,t){return c.call(t),p(e,t)}}else{var v=u.beforeCreate;u.beforeCreate=v?[].concat(v,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return i}))},22:function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return z}));var i={data:function(){return{invitations:"-",pending:"-",initialized:!1}},watch:{initialized:function(e,t){e!==t&&e&&this.$root.$applicationLoaded()}},created:function(){this.refresh()},methods:{refresh:function(){var e=this,t=2;this.$userService.getInvitations().then((function(t){e.invitations=t&&t.size||0})).finally((function(){0===--t&&(e.initialized=!0),window.location.pathname.includes("receivedInvitations")&&e.$refs.peopleDrawer.open("invitations",e.$t("peopleOverview.label.invitations"))})),this.$userService.getPending().then((function(t){e.pending=t&&t.size||0})).finally((function(){0===--t&&(e.initialized=!0)}))}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-card",{staticClass:"pa-4 text-center",attrs:{flat:""}},[n("v-card",{staticClass:"border-box-sizing d-flex flex-row justify-center ma-0",attrs:{flat:""}},[n("people-overview-card",{class:"-"===e.invitations&&"text-sub-title",attrs:{id:"peopleInvitationsOverview",title:e.$t("peopleOverview.label.invitations"),count:e.invitations},on:{click:function(t){e.$refs.peopleDrawer.open("invitations",e.$t("peopleOverview.label.invitations"))}}}),e._v(" "),n("v-divider",{staticClass:"peopleOverviewVertivalSeparator ma-auto",attrs:{vertical:""}}),e._v(" "),n("people-overview-card",{class:"-"===e.pending&&"text-sub-title",attrs:{id:"peoplePendingOverview",title:e.$t("peopleOverview.label.pending"),count:e.pending},on:{click:function(t){e.$refs.peopleDrawer.open("pending",e.$t("peopleOverview.label.pending"))}}})],1)],1),e._v(" "),n("people-overview-drawer",{ref:"peopleDrawer",on:{refresh:function(t){return e.refresh()}}})],1)};r._withStripped=!0;var s=n(0),o=Object(s.a)(i,r,[],!1,null,null,null);o.options.__file="src/main/webapp/vue-apps/people-overview/components/PeopleOverview.vue";var a=o.exports,l={props:{id:{type:String,default:function(){return null}},title:{type:String,default:function(){return null}},count:{type:Number,default:function(){return 0}}},computed:{clickable:function(){return this.count&&"-"!==this.count&&"clickable"}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"peopleOverviewCard d-flex flex-column",class:e.clickable,on:{click:function(t){e.count&&e.$emit("click")}}},[n("div",{staticClass:"ma-auto"},[n("div",{staticClass:"peopleOverviewCount text-center pb-1"},[e._v("\n      "+e._s(e.count)+"\n    ")]),e._v(" "),n("div",{staticClass:"peopleOverviewTitle text-center text-truncate pt-1"},[e._v("\n      "+e._s(e.title)+"\n    ")])])])};c._withStripped=!0;var u=Object(s.a)(l,c,[],!1,null,null,null);u.options.__file="src/main/webapp/vue-apps/people-overview/components/PeopleOverviewCard.vue";var p=u.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("exo-drawer",{ref:"overviewDrawer",attrs:{"body-classes":"hide-scroll decrease-z-index-more",right:""}},[n("template",{slot:"title"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),n("template",{slot:"content"},[n("v-layout",{staticClass:"ma-3",attrs:{column:""}},[e.users&&e.users.length?[n("people-overview-people-list",{attrs:{users:e.users,filter:e.filter},on:{refresh:function(t){return e.refresh()}}})]:e.loadingUsers?e._e():[n("span",{staticClass:"ma-auto"},[e._v(e._s(e.$t("peopleOverview.label.noResults")))])],e._v(" "),n("v-card-actions",{staticClass:"flex-grow-1 justify-center my-2"},[n("v-spacer"),e._v(" "),e.canShowMore?n("v-btn",{staticClass:"loadMoreButton ma-auto btn",attrs:{loading:e.loadingUsers,disabled:e.loadingUsers},on:{click:e.loadNextPage}},[e._v("\n          "+e._s(e.$t("peopleOverview.label.showMore"))+"\n        ")]):e._e(),e._v(" "),n("v-spacer")],1)],2)],1)],2)};v._withStripped=!0;var f=Object(s.a)({data:function(){return{title:null,filter:null,fieldsToRetrieve:"all,connectionsInCommonCount",loadingUsers:!1,offset:0,pageSize:20,users:[]}},computed:{canShowMore:function(){return this.loadingUsers||this.users.length>=this.limit},searchUsersMethod:function(){return"invitations"===this.filter?this.$userService.getInvitations:this.$userService.getPending}},methods:{refresh:function(){this.$emit("refresh"),this.searchUsers()},searchUsers:function(){var e=this;return this.users=[],this.loadingUsers=!0,this.searchUsersMethod(this.offset,this.limit,this.fieldsToRetrieve).then((function(t){return e.users=t&&t.users||[],e.$nextTick()})).finally((function(){return e.loadingUsers=!1}))},loadNextPage:function(){this.limit+=this.pageSize,this.searchUsers()},open:function(e,t){var n=this;this.title=t,this.limit=this.pageSize,this.filter=e,this.$nextTick().then((function(){n.searchUsers(),n.$refs.overviewDrawer.open()}))}}},v,[],!1,null,null,null);f.options.__file="src/main/webapp/vue-apps/people-overview/components/PeopleOverviewDrawer.vue";var d=f.exports,h={props:{users:{type:Array,default:function(){return null}},filter:{type:String,default:function(){return null}}}},m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.users&&e.users.length?n("v-list",{attrs:{"two-line":"",subheader:""}},e._l(e.users,(function(t){return n("people-overview-people-list-item",{key:t.id,attrs:{user:t,filter:e.filter},on:{refresh:function(t){return e.$emit("refresh")}}})})),1):e._e()};m._withStripped=!0;var _=Object(s.a)(h,m,[],!1,null,null,null);_.options.__file="src/main/webapp/vue-apps/people-overview/components/PeopleOverviewPeopleList.vue";var g=_.exports,w={props:{user:{type:Object,default:function(){return null}},filter:{type:String,default:function(){return null}},avatarSize:{type:Number,default:function(){return 37}}},data:function(){return{actionIconSize:27,sendingAction:!1,userItemClass:"userItem"+parseInt(1e4*Math.random()).toString().toString()}},computed:{avatarUrl:function(){return this.user&&this.user.avatar||eXo.env.portal.context+"/"+eXo.env.portal.rest+"/v1/social/users/"+this.user.username+"/avatar"},url:function(){return this.user&&this.user.profile||eXo.env.portal.context+"/"+eXo.env.portal.portalName+"/profile/"+this.user.username+"/"}},mounted:function(){this.user&&this.user.username&&this.initTiptip()},methods:{initTiptip:function(){var e=this;this.$nextTick((function(){$("."+e.userItemClass).userPopup({restURL:"/portal/rest/social/people/getPeopleInfo/{0}.json",userId:e.user.username,keepAlive:!0,maxWidth:"420px"})}))},acceptToConnect:function(){var e=this;this.sendingAction=!0,this.$userService.confirm(this.user.username).then((function(){return e.$emit("refresh")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))},refuseToConnect:function(){var e=this;this.sendingSecondAction=!0,this.$userService.deleteRelationship(this.user.username).then((function(){return e.$emit("refresh")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingSecondAction=!1}))},cancelRequest:function(){var e=this;this.sendingAction=!0,this.$userService.deleteRelationship(this.user.username).then((function(){return e.$emit("refresh")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))}}},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-item",{staticClass:"pa-0 userItem"},[n("v-list-item-avatar",{staticClass:"my-0",class:e.userItemClass,attrs:{href:e.url,tile:""}},[n("v-avatar",{attrs:{size:e.avatarSize,tile:""}},[n("v-img",{staticClass:"mx-auto userAvatar",attrs:{src:e.avatarUrl,height:e.avatarSize,width:e.avatarSize,"max-height":e.avatarSize,"max-width":e.avatarSize}})],1)],1),e._v(" "),n("v-list-item-content",{staticClass:"pa-0",class:e.userItemClass,attrs:{href:e.url}},[n("v-list-item-title",[n("a",{staticClass:"text-color",attrs:{href:e.url}},[e._v("\n        "+e._s(e.user.fullname)+"\n        "),"true"===e.user.external?n("span",{staticClass:"externalTagClass"},[e._v(e._s("("+e.$t("UserProfilePopup.label.profile.external")+")"))]):e._e()])]),e._v(" "),n("v-list-item-subtitle",[e._v("\n      "+e._s(e.$t("peopleOverview.connectionsInCommon",{0:e.user.connectionsInCommonCount}))+"\n    ")])],1),e._v(" "),n("v-list-item-action",{staticClass:"ma-0 flex-row align-self-center"},["invitations"===e.filter?[n("v-btn",{staticClass:"me-2 peopleOverviewCheck",attrs:{width:e.actionIconSize,height:e.actionIconSize,loading:e.sendingAction,disabled:e.sendingAction,fab:"",dark:"",depressed:""},on:{click:e.acceptToConnect}},[n("v-icon",{attrs:{dark:""}},[e._v("\n          mdi-check\n        ")])],1),e._v(" "),n("v-btn",{staticClass:"peopleOverviewClose",attrs:{width:e.actionIconSize,height:e.actionIconSize,loading:e.sendingAction,disabled:e.sendingAction,fab:"",dark:"",depressed:""},on:{click:e.refuseToConnect}},[n("v-icon",{attrs:{dark:""}},[e._v("\n          mdi-close\n        ")])],1)]:e._e(),e._v(" "),"pending"===e.filter?[n("v-btn",{staticClass:"peopleOverviewClose",attrs:{width:e.actionIconSize,height:e.actionIconSize,loading:e.sendingAction,disabled:e.sendingAction,fab:"",dark:"",depressed:""},on:{click:e.cancelRequest}},[n("v-icon",{attrs:{dark:""}},[e._v("\n          mdi-close\n        ")])],1)]:e._e()],2)],1)};b._withStripped=!0;var C=Object(s.a)(w,b,[],!1,null,null,null);C.options.__file="src/main/webapp/vue-apps/people-overview/components/PeopleOverviewPeopleListItem.vue";var S={"people-overview":a,"people-overview-card":p,"people-overview-drawer":d,"people-overview-people-list":g,"people-overview-people-list-item":C.exports};for(var x in S)Vue.component(x,S[x]);if(extensionRegistry){var y=extensionRegistry.loadComponents("PeopleOverview");y&&y.length>0&&y.forEach((function(e){Vue.component(e.componentName,e.componentOptions)}))}var O=eXo&&eXo.env.portal.language||"en",P=eXo.env.portal.context+"/"+eXo.env.portal.rest+"/i18n/bundle/locale.portlet.social.PeopleOverview-"+O+".json";function z(){exoi18n.loadLanguageAsync(O,P).then((function(e){Vue.createApp({template:'<people-overview id="PeopleOverview" />',i18n:e,vuetify:Vue.prototype.vuetifyOptions},"#PeopleOverview","People Overview")}))}}})}));