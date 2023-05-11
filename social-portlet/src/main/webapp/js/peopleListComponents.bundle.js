define((function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}({0:function(e,t,n){"use strict";function i(e,t,n,i,o,s,l,r){var a=typeof(e=e||{}).default;"object"!==a&&"function"!==a||(e=e.default);var c,p="function"==typeof e?e.options:e;if(t&&(p.render=t,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),s&&(p._scopeId=s),l?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},p._ssrRegister=c):o&&(c=r?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(p.functional){p._injectStyles=c;var u=p.render;p.render=function(e,t){return c.call(t),u(e,t)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:p}}n.d(t,"a",(function(){return i}))},19:function(e,t,n){"use strict";n.r(t);var i={props:{filter:{type:String,default:null}},data:function(){return{keyword:null,peopleCount:0,loadingPeople:!1}},methods:{peopleLoaded:function(e){this.peopleCount=e}}},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"transparent peopleList",attrs:{flat:""}},[n("people-toolbar",{attrs:{keyword:e.keyword,filter:e.filter,"people-count":e.peopleCount},on:{"keyword-changed":function(t){e.keyword=t},"filter-changed":function(t){e.filter=t}}}),e._v(" "),n("people-card-list",{ref:"peopleList",attrs:{keyword:e.keyword,filter:e.filter,"loading-people":e.loadingPeople,"people-count":e.peopleCount},on:{loaded:e.peopleLoaded}})],1)};o._withStripped=!0;var s=n(0),l=Object(s.a)(i,o,[],!1,null,null,null);l.options.__file="src/main/webapp/vue-apps/people-list/components/PeopleList.vue";var r=l.exports;function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={props:{keyword:{type:String,default:null},filter:{type:String,default:null},spaceId:{type:Number,default:0},peopleCount:{type:Number,default:0},isManager:{type:Boolean,default:!1},loadingPeople:{type:Boolean,default:!1}},data:function(){return{profileExtensions:[],spaceMemberExtensions:[],startSearchAfterInMilliseconds:600,endTypingKeywordTimeout:50,startTypingKeywordTimeout:0,fieldsToRetrieve:"all,spacesCount,relationshipStatus,connectionsCount,binding",userType:"internal",initialized:!1,hasPeople:!1,offset:0,pageSize:20,limit:20,users:[],limitToFetch:0,originalLimitToFetch:0}},computed:{profileActionExtensions:function(){var e=[].concat(a(this.profileExtensions),a(this.spaceMemberExtensions));return e.sort((function(e,t){return(e.sort||100)-(t.sort||100)})),e},canShowMore:function(){return this.loadingPeople||this.users.length>=this.limitToFetch},filteredPeople:function(){var e=this;return this.keyword&&this.loadingPeople?this.users.slice().filter((function(t){return t.fullname&&t.fullname.toLowerCase().indexOf(e.keyword.toLowerCase())>=0||t.position&&t.position.toLowerCase().indexOf(e.keyword.toLowerCase())>=0})):this.users}},watch:{keyword:function(){if(!this.keyword)return this.resetSearch(),void this.searchPeople();this.startTypingKeywordTimeout=Date.now(),this.loadingPeople||(this.loadingPeople=!0,this.waitForEndTyping())},limitToFetch:function(){this.searchPeople()},filter:function(){this.searchPeople()}},created:function(){this.originalLimitToFetch=this.limitToFetch=this.limit,document.addEventListener("space-member-extension-updated",this.refreshExtensions),document.addEventListener("profile-extension-updated",this.refreshExtensions),document.dispatchEvent(new CustomEvent("profile-extension-init")),this.refreshExtensions()},methods:{refreshExtensions:function(){this.profileExtensions=extensionRegistry.loadExtensions("profile-extension","action")||[],this.spaceMemberExtensions=this.spaceId&&extensionRegistry.loadExtensions("space-member-extension","action")||[]},searchPeople:function(){var e=this;this.loadingPeople=!0;return("connections"===this.filter?this.$userService.getConnections(this.keyword,this.offset,this.limitToFetch+1,this.fieldsToRetrieve):"member"===this.filter||"manager"===this.filter||"invited"===this.filter||"pending"===this.filter||"redactor"===this.filter?this.$spaceService.getSpaceMembers(this.keyword,this.offset,this.limitToFetch+1,this.fieldsToRetrieve,this.filter,this.spaceId):this.$userService.getUsers(this.keyword,this.offset,this.limitToFetch+1,this.fieldsToRetrieve)).then((function(t){var n=t&&t.users||[];return"all"===e.filter&&(n=n.filter((function(e){return e&&e.username!==eXo.env.portal.userName}))),n=n.slice(0,e.limitToFetch),e.users=n,e.peopleCount=t&&t.size&&t.size||0,e.peopleCount>0&&"all"===e.filter&&!e.keyword&&(e.peopleCount=e.peopleCount-1),e.hasPeople=e.hasPeople||e.peopleCount>0,e.$emit("loaded",e.peopleCount),e.$nextTick()})).then((function(){e.keyword&&e.filteredPeople.length<e.originalLimitToFetch&&e.users.length>=e.limitToFetch&&(e.limitToFetch+=e.pageSize)})).finally((function(){e.initialized||e.$root.$applicationLoaded(),e.loadingPeople=!1,e.initialized=!0}))},resetSearch:function(){this.limitToFetch!==this.originalLimitToFetch&&(this.limitToFetch=this.originalLimitToFetch)},loadNextPage:function(){this.originalLimitToFetch=this.limitToFetch+=this.pageSize},waitForEndTyping:function(){var e=this;window.setTimeout((function(){Date.now()-e.startTypingKeywordTimeout>e.startSearchAfterInMilliseconds?e.searchPeople():e.waitForEndTyping()}),this.endTypingKeywordTimeout)}}},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{flat:""}},[e.loadingPeople?n("v-progress-linear",{attrs:{indeterminate:"",height:"2",color:"primary"}}):e._e(),e._v(" "),n("v-card-text",{staticClass:"pb-0",attrs:{id:"peopleListBody"}},[n("v-item-group",[n("v-container",{staticClass:"pa-0"},[e.filteredPeople&&e.filteredPeople.length?n("v-row",{staticClass:"ma-0 border-box-sizing"},e._l(e.filteredPeople,(function(t){return n("v-col",{key:t.id,staticClass:"pa-0",attrs:{cols:"12",md:"6",lg:"4",xl:"3"}},[n("people-card",{attrs:{user:t,"profile-action-extensions":e.profileActionExtensions},on:{refresh:e.searchPeople}})],1)})),1):e.loadingPeople?e._e():n("div",{staticClass:"d-flex text-center noPeopleYetBlock"},[n("div",{staticClass:"ma-auto noPeopleYet"},[n("p",{staticClass:"noPeopleYetIcons"},[n("v-icon",[e._v("fa-users")])],1),e._v(" "),"connections"===e.filter?[n("p",{staticClass:"title font-weight-bold"},[e._v("\n                "+e._s(e.$t("peopleList.label.noConnection"))+"\n              ")])]:e.hasPeople?[n("p",{staticClass:"title font-weight-bold"},[e._v("\n                "+e._s(e.$t("peopleList.label.noResults"))+"\n              ")])]:[n("p",{staticClass:"title font-weight-bold"},[e._v("\n                "+e._s(e.$t("peopleList.label.noPeopleYet"))+"\n              ")])]],2)])],1)],1)],1),e._v(" "),n("v-card-actions",{staticClass:"pt-0 px-5 border-box-sizing",attrs:{id:"peopleListFooter"}},[e.canShowMore?n("v-btn",{staticClass:"loadMoreButton ma-auto btn",attrs:{loading:e.loadingPeople,disabled:e.loadingPeople,block:""},on:{click:e.loadNextPage}},[e._v("\n      "+e._s(e.$t("peopleList.button.showMore"))+"\n    ")]):e._e()],1)],1)};p._withStripped=!0;var u=Object(s.a)(c,p,[],!1,null,null,null);u.options.__file="src/main/webapp/vue-apps/people-list/components/PeopleCardList.vue";var d=u.exports,f={props:{keyword:{type:String,default:null},filter:{type:String,default:null},peopleCount:{type:String,default:null}},data:function(){return{filterToChange:null,bottomMenu:!1}},computed:{peopleFilters:function(){return[{text:this.$t("peopleList.label.filter.all"),value:"all"},{text:this.$t("peopleList.label.filter.connections"),value:"connections"}]}},watch:{keyword:function(){this.$emit("keyword-changed",this.keyword)},filter:function(){this.$emit("filter-changed",this.filter)}},methods:{openBottomMenu:function(){this.filterToChange=this.filter,this.bottomMenu=!0},changeFilterSelection:function(){this.bottomMenu=!1,this.filter=this.filterToChange}}},h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{id:"peopleListToolbar",flat:""}},[n("div",{staticClass:"showingPeopleText text-sub-title ms-3 d-none d-sm-flex"},[e._v("\n    "+e._s(e.$t("peopleList.label.peopleCount",{0:e.peopleCount}))+"\n  ")]),e._v(" "),n("v-spacer",{staticClass:"d-none d-sm-flex"}),e._v(" "),n("v-scale-transition",[n("v-text-field",{staticClass:"inputPeopleFilter pa-0 me-3 my-auto",attrs:{placeholder:e.$t("peopleList.label.filterPeople"),"prepend-inner-icon":"fa-filter"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),n("v-scale-transition",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"selectPeopleFilter my-auto me-2 subtitle-1 ignore-vuetify-classes d-none d-sm-inline",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.filter=t.target.multiple?n:n[0]}}},e._l(e.peopleFilters,(function(t){return n("option",{key:t.value,domProps:{value:t.value}},[e._v("\n        "+e._s(t.text)+"\n      ")])})),0)]),e._v(" "),n("v-icon",{staticClass:"d-sm-none",on:{click:e.openBottomMenu}},[e._v("\n    fa-filter\n  ")]),e._v(" "),n("v-bottom-sheet",{staticClass:"pa-0",model:{value:e.bottomMenu,callback:function(t){e.bottomMenu=t},expression:"bottomMenu"}},[n("v-sheet",{staticClass:"text-center",attrs:{height:"169px"}},[n("v-toolbar",{staticClass:"border-box-sizing",attrs:{color:"primary",dark:""}},[n("v-btn",{attrs:{text:""},on:{click:function(t){e.bottomMenu=!1}}},[e._v("\n          "+e._s(e.$t("peopleList.label.cancel"))+"\n        ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-title",[n("v-icon",[e._v("fa-filter")]),e._v("\n          "+e._s(e.$t("peopleList.label.filter"))+"\n        ")],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:e.changeFilterSelection}},[e._v("\n          "+e._s(e.$t("peopleList.label.confirm"))+"\n        ")])],1),e._v(" "),n("v-list",e._l(e.peopleFilters,(function(t){return n("v-list-item",{key:t,on:{click:function(n){e.filterToChange=t.value}}},[n("v-list-item-title",{staticClass:"align-center d-flex"},[e.filterToChange===t.value?n("v-icon",[e._v("fa-check")]):n("span",{staticClass:"me-6"}),e._v(" "),n("v-spacer"),e._v(" "),n("div",[e._v("\n              "+e._s(t.text)+"\n            ")]),e._v(" "),n("v-spacer"),e._v(" "),n("span",{staticClass:"me-6"})],1)],1)})),1)],1)],1)],1)};h._withStripped=!0;var v=Object(s.a)(f,h,[],!1,null,null,null);v.options.__file="src/main/webapp/vue-apps/people-list/components/PeopleToolbar.vue";var m=v.exports,_={props:{user:{type:Object,default:function(){return{}}},profileActionExtensions:{type:Array,default:function(){return[]}}},data:function(){return{flipCard:!1}}},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",{class:e.flipCard?"peopleCardFlip peopleCardFlipped":"peopleCardFlip"},[n("div",{staticClass:"peopleCardFront"},[n("people-card-front",{attrs:{user:e.user,"profile-action-extensions":e.profileActionExtensions,front:""},on:{flip:function(t){e.flipCard=!0},refresh:function(t){return e.$emit("refresh")}}})],1),e._v(" "),n("div",{staticClass:"peopleCardBack"},[n("people-card-reverse",{attrs:{user:e.user},on:{flip:function(t){e.flipCard=!1}}})],1)])};b._withStripped=!0;var C=Object(s.a)(_,b,[],!1,null,null,null);C.options.__file="src/main/webapp/vue-apps/people-list/components/PeopleCard.vue";var g=C.exports,x={props:{user:{type:Object,default:null},isManager:{type:Boolean,default:!1},profileActionExtensions:{type:Array,default:function(){return[]}}},data:function(){return{displayActionMenu:!1,waitTimeUntilCloseMenu:200,sendingAction:!1,sendingSecondAction:!1,confirmTitle:"",confirmMessage:"",okMethod:null,displaySecondButton:!1}},computed:{isSameUser:function(){return this.user&&this.user.username===eXo.env.portal.userName},userAvatarUrl:function(){return this.user&&this.user.avatar||eXo.env.portal.context+"/"+eXo.env.portal.rest+"/v1/social/users/"+this.user.username+"/avatar"},userBannerUrl:function(){return this.user&&this.user.banner||eXo.env.portal.context+"/"+eXo.env.portal.rest+"/v1/social/users/"+this.user.username+"/banner"},userMenuParentId:function(){return this.user&&this.user.id&&"userMenuParent-"+this.user.id||"userMenuParent"},enabledProfileActionExtensions:function(){var e=this;return this.profileActionExtensions&&this.user?this.isSameUser?this.profileActionExtensions.slice().filter((function(t){return(t.title===e.$t("peopleList.button.setAsRedactor")||t.title===e.$t("peopleList.button.removeRedactor"))&&t.enabled(e.user)})):this.profileActionExtensions.slice().filter((function(t){return t.enabled(e.user)})):[]},canUseActionsMenu:function(){return this.user&&this.enabledProfileActionExtensions.length},url:function(){return this.user&&this.user.username?eXo.env.portal.context+"/"+eXo.env.portal.portalName+"/profile/"+this.user.username:"#"}},created:function(){var e=this;$(document).on("mousedown",(function(){e.displayActionMenu&&window.setTimeout((function(){e.displayActionMenu=!1,e.displaySecondButton=!1}),e.waitTimeUntilCloseMenu)}))},methods:{connect:function(){var e=this;this.sendingAction=!0,this.$userService.connect(this.user.username).then((function(){return e.$emit("refresh")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))},disconnect:function(){var e=this;this.sendingAction=!0,this.$userService.deleteRelationship(this.user.username).then((function(){return e.$emit("refresh")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))},disconnectConfirm:function(){this.openConfirmDialog(this.$t("peopleList.title.disconnectConfirm"),this.$t("peopleList.message.disconnectConfirm",{0:"<b>"+this.user.fullname+"</b>"}),this.disconnect)},acceptToConnect:function(){var e=this;this.sendingAction=!0,this.$userService.confirm(this.user.username).then((function(){return e.$emit("refresh")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))},refuseToConnect:function(){var e=this;this.sendingSecondAction=!0,this.$userService.deleteRelationship(this.user.username).then((function(){return e.$emit("refresh")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingSecondAction=!1}))},cancelRequest:function(){var e=this;this.sendingAction=!0,this.$userService.deleteRelationship(this.user.username).then((function(){return e.$emit("refresh")})).catch((function(e){console.error("Error processing action",e)})).finally((function(){e.sendingAction=!1}))},openConfirmDialog:function(e,t,n){this.confirmTitle=e,this.confirmMessage=t,this.okMethod=n||null,this.$refs.confirmDialog.open()},okConfirmDialog:function(){this.okMethod&&this.okMethod()},closeConfirmDialog:function(){this.confirmTitle="",this.confirmMessage="",this.okMethod=null}}},y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"peopleCardItem d-block d-sm-flex",attrs:{id:e.userMenuParentId,flat:""}},[n("v-img",{staticClass:"white--text align-start d-block peopleBannerImg",attrs:{"lazy-src":e.userBannerUrl,src:e.userBannerUrl,transition:"none",height:"80px",eager:""}}),e._v(" "),n("div",{staticClass:"peopleToolbarIcons px-2"},[n("v-btn",{staticClass:"peopleInfoIcon d-flex",attrs:{title:e.$t("peopleList.label.openUserInfo"),icon:"",small:""},on:{click:function(t){return e.$emit("flip")}}},[n("v-icon",{attrs:{size:"12"}},[e._v("fa-info")])],1),e._v(" "),e.user.isManager?n("v-btn",{staticClass:"peopleInfoIcon d-flex not-clickable primary-border-color ms-1",attrs:{title:e.$t("peopleList.label.spaceManager"),ripple:!1,color:"primary",icon:"",small:""}},[n("span",{staticClass:"d-flex uiIconMemberAdmin primary--text"})]):e._e(),e._v(" "),e.user.isGroupBound?n("v-btn",{staticClass:"peopleGroupMemberBindingIcon d-flex not-clickable ms-1",attrs:{title:e.$t("peopleList.label.groupBound"),ripple:!1,color:"grey",icon:"",small:""}},[n("span",{staticClass:"d-flex uiIconPLFFont uiIconGroup"})]):e._e(),e._v(" "),n("v-spacer"),e._v(" "),e.canUseActionsMenu?[n("v-btn",{staticClass:"peopleMenuIcon d-block",attrs:{title:e.$t("peopleList.label.openUserMenu"),icon:"",text:""},on:{click:function(t){e.displayActionMenu=!0}}},[n("v-icon",{attrs:{size:"21"}},[e._v("mdi-dots-vertical")])],1),e._v(" "),n("v-menu",{ref:"actionMenu",attrs:{attach:"#"+e.userMenuParentId,transition:"slide-x-reverse-transition","content-class":"peopleActionMenu","offset-y":""},model:{value:e.displayActionMenu,callback:function(t){e.displayActionMenu=t},expression:"displayActionMenu"}},[n("v-list",{staticClass:"pa-0",attrs:{dense:""}},e._l(e.enabledProfileActionExtensions,(function(t,i){return n("v-list-item",{key:i,on:{click:function(n){return t.click(e.user)}}},[n("v-list-item-title",{staticClass:"peopleActionItem"},[n("i",{staticClass:"uiIcon",class:t.icon?t.icon:"hidden"}),e._v("\n              "+e._s(t.title)+"\n            ")])],1)})),1)],1)]:e._e()],2),e._v(" "),n("div",{staticClass:"peopleAvatar"},[n("a",{attrs:{href:e.url}},[n("v-img",{staticClass:"mx-auto",attrs:{"lazy-src":e.userAvatarUrl,src:e.userAvatarUrl,transition:"none",height:"65px",width:"65px","max-height":"65px","max-width":"65px",eager:""}})],1)]),e._v(" "),n("v-card-text",{staticClass:"peopleCardBody align-center pt-2 pb-1"},[n("a",{staticClass:"userFullname text-truncate font-weight-bold d-block",class:!e.user.enabled||e.user.deleted?"text-sub-title":"text-color",attrs:{href:e.url,title:e.user.fullname}},[e._v("\n      "+e._s(e.user.fullname)+"\n      "),"true"==e.user.external?n("span",{staticClass:"externalFlagClass"},[e._v("\n        "+e._s(e.$t("peopleList.label.external"))+"\n      ")]):e._e()]),e._v(" "),n("v-card-subtitle",{staticClass:"userPositionLabel text-truncate py-0"},[e._v("\n      "+e._s(e.user.position||" ")+"\n    ")])],1),e._v(" "),e.isSameUser?e._e():n("v-card-actions",{staticClass:"peopleCardActions"},[n("exo-confirm-dialog",{ref:"confirmDialog",attrs:{title:e.confirmTitle,message:e.confirmMessage,"ok-label":e.$t("peopleList.label.ok"),"cancel-label":e.okMethod&&e.$t("peopleList.label.cancel")},on:{ok:e.okConfirmDialog,"dialog-closed":e.closeConfirmDialog}}),e._v(" "),!e.user.enabled||e.user.deleted?n("v-btn",{staticClass:"btn mx-auto cancelRequestButton",attrs:{depressed:"",disabled:"",block:""}},[e.user.deleted?n("span",{staticClass:"d-inline peopleDeleteButton"},[e._v("\n        "+e._s(e.$t("peopleList.label.deletedUser"))+"\n      ")]):n("span",{staticClass:"d-inline peopleDeleteButton"},[e._v("\n        "+e._s(e.$t("peopleList.label.disabledUser"))+"\n      ")]),e._v(" "),n("v-icon",{staticClass:"d-none peopleDeleteButtonMinus"},[e._v("mdi-minus")])],1):"CONFIRMED"===e.user.relationshipStatus?n("v-btn",{staticClass:"btn mx-auto peopleRelationshipButton disconnectUserButton",attrs:{loading:e.sendingAction,disabled:e.sendingAction,depressed:"",block:""},on:{click:e.disconnectConfirm}},[n("i",{staticClass:"uiIconSocCancelConnectUser peopleRelationshipIcon d-inline"}),e._v(" "),n("span",{staticClass:"d-inline peopleRelationshipButtonText"},[e._v("\n        "+e._s(e.$t("peopleList.button.disconnect"))+"\n      ")]),e._v(" "),n("v-icon",{staticClass:"d-none relationshipButtonMinus"},[e._v("mdi-minus")])],1):"INCOMING"===e.user.relationshipStatus?n("div",{staticClass:"invitationButtons"},[n("div",{staticClass:"acceptToConnectButtonParent"},[n("v-btn",{staticClass:"btn mx-auto peopleRelationshipButton acceptToConnectButton",attrs:{loading:e.sendingAction,disabled:e.sendingAction,depressed:""},on:{click:e.acceptToConnect}},[n("i",{staticClass:"uiIconSocConnectUser peopleRelationshipIcon d-inline"}),e._v(" "),n("span",{staticClass:"d-flex"},[e._v("\n            "+e._s(e.$t("peopleList.button.acceptToConnect"))+"\n          ")]),e._v(" "),n("v-icon",{staticClass:"d-none relationshipButtonMinus"},[e._v("mdi-check")])],1),e._v(" "),n("v-btn",{staticClass:"btn peopleButtonMenu d-inline",attrs:{depressed:"","x-small":""},on:{click:function(t){e.displaySecondButton=!e.displaySecondButton}}},[n("v-icon",[e._v("mdi-menu-down")])],1)],1),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.displaySecondButton,expression:"displaySecondButton"}],staticClass:"btn mx-auto peopleRelationshipButton refuseToConnectButton",attrs:{loading:e.sendingSecondAction,disabled:e.sendingSecondAction,depressed:"",block:""},on:{click:e.refuseToConnect}},[n("i",{staticClass:"uiIconSocCancelConnectUser peopleRelationshipIcon d-inline"}),e._v(" "),n("span",{staticClass:"d-flex"},[e._v("\n          "+e._s(e.$t("peopleList.button.refuseToConnect"))+"\n        ")]),e._v(" "),n("v-icon",{staticClass:"d-none relationshipButtonMinus"},[e._v("mdi-close")])],1)],1):"OUTGOING"===e.user.relationshipStatus?n("v-btn",{staticClass:"btn mx-auto peopleRelationshipButton cancelRequestButton",attrs:{loading:e.sendingAction,disabled:e.sendingAction,depressed:"",block:""},on:{click:e.cancelRequest}},[n("i",{staticClass:"uiIconSocCancelConnectUser peopleRelationshipIcon d-inline"}),e._v(" "),n("span",{staticClass:"d-inline peopleRelationshipButtonText"},[e._v("\n        "+e._s(e.$t("peopleList.button.cancelRequest"))+"\n      ")]),e._v(" "),n("v-icon",{staticClass:"d-none relationshipButtonMinus"},[e._v("mdi-close")])],1):n("v-btn",{staticClass:"btn mx-auto peopleRelationshipButton connectUserButton",attrs:{loading:e.sendingAction,disabled:e.sendingAction,depressed:"",block:""},on:{click:e.connect}},[n("i",{staticClass:"uiIconSocConnectUser peopleRelationshipIcon d-inline"}),e._v(" "),n("span",{staticClass:"d-inline peopleRelationshipButtonText"},[e._v("\n        "+e._s(e.$t("peopleList.button.connect"))+"\n      ")]),e._v(" "),n("v-icon",{staticClass:"d-none relationshipButtonMinus"},[e._v("mdi-plus")])],1)],1)],1)};y._withStripped=!0;var w=Object(s.a)(x,y,[],!1,null,null,null);w.options.__file="src/main/webapp/vue-apps/people-list/components/PeopleCardFront.vue";var k=w.exports,T={props:{user:{type:Object,default:null}}},M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"peopleCardItem d-flex flex-column",attrs:{flat:""}},[n("v-btn",{staticClass:"peopleInfoIcon ma-2",attrs:{absolute:"",small:"",icon:""},on:{click:function(t){return e.$emit("flip")}}},[n("v-icon",{attrs:{size:"12"}},[e._v("fa-info")])],1),e._v(" "),n("div",{staticClass:"d-flex pt-3 pb-2"},[n("p",{staticClass:"font-weight-bold ma-auto"},[e._v("\n      "+e._s(e.$t("peopleList.label.aboutMe"))+"\n    ")])]),e._v(" "),n("div",{staticClass:"aboutMeText align-center py-0 px-1 flex-grow-1"},[e.user.aboutMe?n("ellipsis",{attrs:{title:e.user.aboutMe,data:e.user.aboutMe,"line-clamp":5,"end-char":"..."}}):e._e()],1),e._v(" "),n("div",{staticClass:"d-flex pa-2 align-end flex-row"},[n("div",{staticClass:"d-flex flex-column flex-grow-0 ms-2"},[n("p",{staticClass:"font-weight-bold ma-auto mb-1"},[e._v("\n        "+e._s(e.user.connectionsCount)+"\n      ")]),e._v(" "),n("p",{staticClass:"ma-auto text-sub-title"},[e._v("\n        "+e._s(e.$t("peopleList.title.connectionsCount"))+"\n      ")])]),e._v(" "),n("div",{staticClass:"flex-grow-1"}),e._v(" "),n("div",{staticClass:"d-flex flex-column flex-grow-0 me-2"},[n("p",{staticClass:"font-weight-bold ma-auto mb-1"},[e._v("\n        "+e._s(e.user.spacesCount)+"\n      ")]),e._v(" "),n("p",{staticClass:"ma-auto text-sub-title"},[e._v("\n        "+e._s(e.$t("peopleList.title.spacesCount"))+"\n      ")])])])],1)};M._withStripped=!0;var S=Object(s.a)(T,M,[],!1,null,null,null);S.options.__file="src/main/webapp/vue-apps/people-list/components/PeopleCardReverse.vue";var P={"people-list":r,"people-card-list":d,"people-toolbar":m,"people-card":g,"people-card-front":k,"people-card-reverse":S.exports};for(var A in P)Vue.component(A,P[A]);if(extensionRegistry){var L=extensionRegistry.loadComponents("peopleList");L&&L.length>0&&L.forEach((function(e){Vue.component(e.componentName,e.componentOptions)}))}}})}));