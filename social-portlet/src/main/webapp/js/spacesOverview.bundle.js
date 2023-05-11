define((function(){return function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=21)}({0:function(e,t,s){"use strict";function i(e,t,s,i,n,a,r,c){var o=typeof(e=e||{}).default;"object"!==o&&"function"!==o||(e=e.default);var l,p="function"==typeof e?e.options:e;if(t&&(p.render=t,p.staticRenderFns=s,p._compiled=!0),i&&(p.functional=!0),a&&(p._scopeId=a),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},p._ssrRegister=l):n&&(l=c?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(p.functional){p._injectStyles=l;var u=p.render;p.render=function(e,t){return l.call(t),u(e,t)}}else{var v=p.beforeCreate;p.beforeCreate=v?[].concat(v,l):[l]}return{exports:e,options:p}}s.d(t,"a",(function(){return i}))},21:function(e,t,s){"use strict";s.r(t),s.d(t,"init",(function(){return k}));var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-card",{staticClass:"pa-4 text-center",attrs:{flat:""}},[s("v-card",{staticClass:"border-box-sizing d-flex flex-row justify-center ma-0",attrs:{flat:""}},[s("spaces-overview-card",{class:"-"===e.invitations&&"text-sub-title",attrs:{id:e.spacesInvitationOverview,title:e.$t("spacesOverview.label.invitations"),count:e.invitations},on:{click:function(t){e.$refs.spacesDrawer.open("invited",e.$t("spacesOverview.label.invitations"))}}}),e._v(" "),s("v-divider",{staticClass:"spacesOverviewVertivalSeparator ma-auto",attrs:{vertical:""}}),e._v(" "),s("spaces-overview-card",{class:"-"===e.sentRequests&&"text-sub-title",attrs:{id:e.spacesRequestsSentOverview,title:e.$t("spacesOverview.label.sentRequests"),count:e.sentRequests},on:{click:function(t){e.$refs.spacesDrawer.open("pending",e.$t("spacesOverview.label.sentPendingRequests"))}}})],1),e._v(" "),s("v-divider",{staticClass:"spacesOverviewHorizontalSeparator ma-auto"}),e._v(" "),s("v-card",{staticClass:"border-box-sizing d-flex flex-row justify-center ma-0",attrs:{flat:""}},[s("spaces-overview-card",{class:"-"===e.receivedRequests&&"text-sub-title",attrs:{id:e.spacesRequestsReceivedOverview,title:e.$t("spacesOverview.label.receivedRequests"),count:e.receivedRequests},on:{click:function(t){e.$refs.spacesDrawer.open("requests",e.$t("spacesOverview.label.receivedRequests"))}}}),e._v(" "),s("v-divider",{staticClass:"spacesOverviewVertivalSeparator ma-auto",attrs:{vertical:""}}),e._v(" "),s("spaces-overview-card",{class:"-"===e.managing&&"text-sub-title",attrs:{id:e.spacesManagingOverview,title:e.$t("spacesOverview.label.managing"),count:e.managing},on:{click:function(t){e.$refs.spacesDrawer.open("manager",e.$t("spacesOverview.label.managedSpaces"))}}})],1)],1),e._v(" "),s("spaces-overview-drawer",{ref:"spacesDrawer",on:{refresh:function(t){return e.refresh(t)}}})],1)};i._withStripped=!0;var n=s(0),a=Object(n.a)({data:function(){return{invitations:"-",sentRequests:"-",receivedRequests:"-",managing:"-",loading:0}},watch:{loading:function(e,t){t&&!e&&this.$root.$applicationLoaded()}},created:function(){this.refresh()},methods:{refresh:function(e){var t=this;this.loading=0,e&&"invitations"!==e||(this.invitations="-",this.loading++,this.$spaceService.getSpaces(null,null,null,"invited").then((function(e){t.invitations=e&&e.size||0})).finally((function(){t.loading--}))),e&&"sentRequests"!==e||(this.sentRequests="-",this.loading++,this.$spaceService.getSpaces(null,null,null,"pending").then((function(e){t.sentRequests=e&&e.size||0})).finally((function(){t.loading--}))),e&&"receivedRequests"!==e||(this.receivedRequests="-",this.loading++,this.$spaceService.getSpaces(null,null,null,"requests").then((function(e){t.receivedRequests=e&&e.size||0})).finally((function(){t.loading--}))),e&&"managing"!==e||(this.managing="-",this.loading++,this.$spaceService.getSpaces(null,null,null,"manager").then((function(e){t.managing=e&&e.size||0})).finally((function(){t.loading--})))}}},i,[],!1,null,null,null);a.options.__file="src/main/webapp/vue-apps/spaces-overview/components/SpacesOverview.vue";var r=a.exports,c={props:{id:{type:String,default:function(){return null}},title:{type:String,default:function(){return null}},count:{type:Number,default:function(){return 0}}},computed:{clickable:function(){return this.count&&"-"!==this.count&&"clickable"}}},o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"spacesOverviewCard d-flex flex-column",class:e.clickable,attrs:{id:e.id},on:{click:function(t){e.count&&e.$emit("click")}}},[s("v-flex",{staticClass:"ma-auto",attrs:{flat:""}},[s("div",{staticClass:"spacesOverviewCount text-center pb-1"},[e._v("\n      "+e._s(e.count)+"\n    ")]),e._v(" "),s("div",{staticClass:"spacesOverviewTitle text-center text-truncate pt-1"},[e._v("\n      "+e._s(e.title)+"\n    ")])])],1)};o._withStripped=!0;var l=Object(n.a)(c,o,[],!1,null,null,null);l.options.__file="src/main/webapp/vue-apps/spaces-overview/components/SpacesOverviewCard.vue";var p=l.exports,u={data:function(){return{title:null,filter:null,loadingSpaces:!1,offset:0,pageSize:20,spaces:[]}},computed:{canShowMore:function(){return this.loadingSpaces||this.spaces.length>=this.limit}},methods:{refresh:function(e){this.$emit("refresh",e),this.searchSpaces()},searchSpaces:function(e){var t=this;return this.spaces=[],this.loadingSpaces=!0,this.$spaceService.getSpaces(null,this.offset,this.limit,e||this.filter).then((function(s){return t.spaces=s&&s.spaces||[],e&&(t.filter=e),t.$nextTick()})).finally((function(){return t.loadingSpaces=!1}))},loadNextPage:function(){this.limit+=this.pageSize,this.searchSpaces()},editSpace:function(e){document.dispatchEvent(new CustomEvent("meeds.social.editSpace",{detail:{data:e}})),this.$refs.overviewDrawer.close()},open:function(e,t){this.title=t,this.limit=this.pageSize,this.searchSpaces(e),this.$refs.overviewDrawer.open()}}},v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("exo-drawer",{ref:"overviewDrawer",attrs:{"body-classes":"hide-scroll decrease-z-index-more",right:""}},[s("template",{slot:"title"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),s("template",{slot:"content"},[s("v-layout",{staticClass:"ma-3",attrs:{column:""}},[e.spaces&&e.spaces.length?[s("spaces-overview-spaces-list",{attrs:{spaces:e.spaces,filter:e.filter},on:{refresh:e.refresh,edit:e.editSpace}})]:e.loadingSpaces?e._e():[s("span",{staticClass:"ma-auto"},[e._v(e._s(e.$t("spacesOverview.label.noResults")))])],e._v(" "),s("v-card-actions",{staticClass:"flex-grow-1 justify-center my-2"},[s("v-spacer"),e._v(" "),e.canShowMore?s("v-btn",{staticClass:"loadMoreButton ma-auto btn",attrs:{loading:e.loadingSpaces,disabled:e.loadingSpaces},on:{click:e.loadNextPage}},[e._v("\n          "+e._s(e.$t("spacesOverview.label.showMore"))+"\n        ")]):e._e(),e._v(" "),s("v-spacer")],1)],2)],1)],2)};v._withStripped=!0;var d=Object(n.a)(u,v,[],!1,null,null,null);d.options.__file="src/main/webapp/vue-apps/spaces-overview/components/SpacesOverviewDrawer.vue";var f=d.exports,h={props:{spaces:{type:Array,default:function(){return null}},filter:{type:String,default:function(){return null}}}},g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.spaces&&e.spaces.length?s("v-list",{attrs:{"two-line":"",subheader:""}},e._l(e.spaces,(function(t){return s("spaces-overview-spaces-list-item",{key:t.id,attrs:{space:t,filter:e.filter},on:{refresh:function(t){return e.$emit("refresh")},edit:function(s){return e.$emit("edit",t)}}})})),1):e._e()};g._withStripped=!0;var m=Object(n.a)(h,g,[],!1,null,null,null);m.options.__file="src/main/webapp/vue-apps/spaces-overview/components/SpacesOverviewSpacesList.vue";var w=m.exports,_={props:{space:{type:Object,default:function(){return null}},filter:{type:String,default:function(){return null}},avatarSize:{type:Number,default:function(){return 37}}},data:function(){return{actionIconSize:27,sendingAction:!1,spaceItemClass:"spaceList"+parseInt(1e4*Math.random()).toString().toString()}},computed:{avatarUrl:function(){return this.space&&this.space.avatarUrl||eXo.env.portal.context+"/"+eXo.env.portal.rest+"/v1/social/spaces/"+this.space.prettyName+"/avatar"},url:function(){if(!this.space||!this.space.groupId)return"#";var e=this.space.groupId.replace(/\//g,":");return eXo.env.portal.context+"/g/"+e+"/"}},mounted:function(){this.space&&this.space.groupId&&this.initTiptip()},methods:{initTiptip:function(){var e=this;this.$nextTick((function(){$("."+e.spaceItemClass).spacePopup({userName:eXo.env.portal.userName,spaceID:e.space.id,restURL:"/portal/rest/v1/social/spaces/{0}",membersRestURL:"/portal/rest/v1/social/spaces/{0}/users?returnSize=true",managerRestUrl:"/portal/rest/v1/social/spaces/{0}/users?role=manager&returnSize=true",membershipRestUrl:"/portal/rest/v1/social/spacesMemberships?space={0}&returnSize=true",defaultAvatarUrl:e.avatarUrl,deleteMembershipRestUrl:"/portal/rest/v1/social/spacesMemberships/{0}:{1}:{2}",content:!1,keepAlive:!0,defaultPosition:e.tiptipPosition||"left_bottom",maxWidth:"420px"})}))},acceptUserRequest:function(){var e=this;this.sendingAction=!0,this.$spaceService.acceptUserRequest(this.space.displayName,this.space.pending[0].username).then((function(){return e.$emit("refresh","receivedRequests")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))},refuseUserRequest:function(){var e=this;this.sendingAction=!0,this.$spaceService.refuseUserRequest(this.space.displayName,this.space.pending[0].username).then((function(){return e.$emit("refresh","receivedRequests")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))},acceptToJoin:function(){var e=this;this.sendingAction=!0,this.$spaceService.accept(this.space.id).then((function(){return e.$emit("refresh","invitations")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))},refuseToJoin:function(){var e=this;this.sendingAction=!0,this.$spaceService.deny(this.space.id).then((function(){return e.$emit("refresh","invitations")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))},cancelRequest:function(){var e=this;this.sendingAction=!0,this.$spaceService.cancel(this.space.id).then((function(){return e.$emit("refresh","sentRequests")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))}}},S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-list-item",{staticClass:"pa-0 spaceItem"},[s("v-list-item-avatar",{staticClass:"my-0",class:e.spaceItemClass,attrs:{href:e.url,tile:""}},[s("v-avatar",{attrs:{size:e.avatarSize,tile:""}},[s("v-img",{staticClass:"mx-auto spaceAvatar",attrs:{src:e.avatarUrl,height:e.avatarSize,width:e.avatarSize,"max-height":e.avatarSize,"max-width":e.avatarSize}})],1)],1),e._v(" "),s("v-list-item-content",{staticClass:"pa-0",class:e.spaceItemClass,attrs:{href:e.url}},[s("v-list-item-title",[s("a",{staticClass:"text-color",attrs:{href:e.url}},[e._v("\n        "+e._s(e.space.displayName)+"\n      ")])]),e._v(" "),s("v-list-item-subtitle",["requests"===e.filter?[e._v("\n        "+e._s(e.$t("spacesOverview.requestToJoin.from",{0:e.space.pending[0].fullname}))+"\n      ")]:[e._v("\n        "+e._s(e.$t("spacesOverview.members",{0:e.space.membersCount}))+"\n      ")]],2)],1),e._v(" "),s("v-list-item-action",{staticClass:"ma-0 flex-row align-self-center"},["requests"===e.filter?[s("v-btn",{staticClass:"me-2 spacesOverviewCheck",attrs:{width:e.actionIconSize,height:e.actionIconSize,loading:e.sendingAction,disabled:e.sendingAction,fab:"",dark:"",depressed:""},on:{click:e.acceptUserRequest}},[s("v-icon",{attrs:{dark:""}},[e._v("\n          mdi-check\n        ")])],1),e._v(" "),s("v-btn",{staticClass:"spacesOverviewClose",attrs:{width:e.actionIconSize,height:e.actionIconSize,loading:e.sendingAction,disabled:e.sendingAction,fab:"",dark:"",depressed:""},on:{click:e.refuseUserRequest}},[s("v-icon",{attrs:{dark:""}},[e._v("\n          mdi-close\n        ")])],1)]:e._e(),e._v(" "),"invited"===e.filter?[s("v-btn",{staticClass:"me-2 spacesOverviewCheck",attrs:{width:e.actionIconSize,height:e.actionIconSize,loading:e.sendingAction,disabled:e.sendingAction,fab:"",dark:"",depressed:""},on:{click:e.acceptToJoin}},[s("v-icon",{attrs:{dark:""}},[e._v("\n          mdi-check\n        ")])],1),e._v(" "),s("v-btn",{staticClass:"spacesOverviewClose",attrs:{width:e.actionIconSize,height:e.actionIconSize,loading:e.sendingAction,disabled:e.sendingAction,fab:"",dark:"",depressed:""},on:{click:e.refuseToJoin}},[s("v-icon",{attrs:{dark:""}},[e._v("\n          mdi-close\n        ")])],1)]:e._e(),e._v(" "),"manager"===e.filter?[s("v-btn",{staticClass:"spacesOverviewCheck outlined",attrs:{width:e.actionIconSize,height:e.actionIconSize,loading:e.sendingAction,disabled:e.sendingAction,icon:"",fab:"",dark:"",depressed:""},on:{click:function(t){return e.$emit("edit")}}},[s("i",{staticClass:"uiIcon uiIconEdit"})])]:e._e(),e._v(" "),"pending"===e.filter?[s("v-btn",{staticClass:"spacesOverviewClose",attrs:{width:e.actionIconSize,height:e.actionIconSize,loading:e.sendingAction,disabled:e.sendingAction,fab:"",dark:"",depressed:""},on:{click:e.cancelRequest}},[s("v-icon",{attrs:{dark:""}},[e._v("\n          mdi-close\n        ")])],1)]:e._e()],2)],1)};S._withStripped=!0;var b=Object(n.a)(_,S,[],!1,null,null,null);b.options.__file="src/main/webapp/vue-apps/spaces-overview/components/SpacesOverviewSpacesListItem.vue";var O={"spaces-overview":r,"spaces-overview-card":p,"spaces-overview-drawer":f,"spaces-overview-spaces-list":w,"spaces-overview-spaces-list-item":b.exports};for(var y in O)Vue.component(y,O[y]);if(extensionRegistry){var C=extensionRegistry.loadComponents("SpacesOverview");C&&C.length>0&&C.forEach((function(e){Vue.component(e.componentName,e.componentOptions)}))}var x=eXo&&eXo.env.portal.language||"en",R=Vue.prototype.$spacesConstants.PORTAL+"/"+Vue.prototype.$spacesConstants.PORTAL_REST+"/i18n/bundle/locale.portlet.social.SpacesOverview-"+x+".json";function k(){exoi18n.loadLanguageAsync(x,R).then((function(e){Vue.createApp({template:'<spaces-overview id="SpacesOverview" />',i18n:e,vuetify:Vue.prototype.vuetifyOptions},"#SpacesOverview","Spaces Overview")}))}}})}));