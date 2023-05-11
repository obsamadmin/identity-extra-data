define((function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=31)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,a,o){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var c,p="function"==typeof e?e.options:e;if(t&&(p.render=t,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),s&&(p._scopeId=s),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},p._ssrRegister=c):r&&(c=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(p.functional){p._injectStyles=c;var u=p.render;p.render=function(e,t){return c.call(t),u(e,t)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:p}}n.d(t,"a",(function(){return i}))},31:function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return y}));var i={props:{isManager:{type:Boolean,default:!1},spaceId:{type:Number,default:0},filter:{type:String,default:null},isExternalFeatureEnabled:{type:Boolean,default:!0}},data:function(){return{keyword:null,peopleCount:0,loadingPeople:!1,space:{}}},created:function(){var e=this;this.$spaceService.getSpaceById(eXo.env.portal.spaceId).then((function(t){e.space=t})).finally((function(){return e.$root.$applicationLoaded()})),this.isManager&&(extensionRegistry.registerExtension("space-member-extension","action",{id:"spaceMembers-removeMember",title:this.$t("peopleList.button.removeMember"),icon:"uiIconTrash",order:0,enabled:function(t){return("member"===e.filter||"manager"===e.filter||"redactor"===e.filter)&&t.isMember&&!t.isGroupBound},click:function(t){e.$spaceService.removeMember(eXo.env.portal.spaceName,t.username).then((function(){return e.$refs.spaceMembers.searchPeople()}))}}),extensionRegistry.registerExtension("space-member-extension","action",{id:"spaceMembers-removeManager",title:this.$t("peopleList.button.removeManager"),icon:"uiIconMemberAdmin",order:1,enabled:function(t){return("member"===e.filter||"manager"===e.filter||"redactor"===e.filter)&&(t.isManager||t.isSpacesManager)},click:function(t){e.$spaceService.removeManager(eXo.env.portal.spaceName,t.username).then((function(){return e.$refs.spaceMembers.searchPeople()}))}}),extensionRegistry.registerExtension("space-member-extension","action",{id:"spaceMembers-promoteManager",title:this.$t("peopleList.button.promoteManager"),icon:"uiIconMemberAdmin",order:1,enabled:function(t){return t.enabled&&!t.deleted&&("member"===e.filter||"manager"===e.filter||"redactor"===e.filter)&&!t.isManager},click:function(t){e.$spaceService.promoteManager(eXo.env.portal.spaceDisplayName,t.username).then((function(){return e.$refs.spaceMembers.searchPeople()}))}}),extensionRegistry.registerExtension("space-member-extension","action",{id:"spaceMembers-setAsRedactor",title:this.$t("peopleList.button.setAsRedactor"),icon:"uiIconEditMembership",order:1,enabled:function(t){return t.enabled&&!t.deleted&&("member"===e.filter||"manager"===e.filter||"redactor"===e.filter)&&!t.isSpaceRedactor},click:function(t){e.$spaceService.setAsRedactor(eXo.env.portal.spaceDisplayName,t.username).then((function(){return e.$refs.spaceMembers.searchPeople()}))}}),extensionRegistry.registerExtension("space-member-extension","action",{id:"spaceMembers-removeRedactor",title:this.$t("peopleList.button.removeRedactor"),icon:"uiIconEditMembership",order:1,enabled:function(t){return t.isSpaceRedactor&&("member"===e.filter||"manager"===e.filter||"redactor"===e.filter)},click:function(t){e.$spaceService.removeRedactor(eXo.env.portal.spaceName,t.username).then((function(){return e.$refs.spaceMembers.searchPeople()}))}}),extensionRegistry.registerExtension("space-member-extension","action",{id:"spaceMembers-cancelInvitation",title:this.$t("peopleList.button.cancelInvitation"),icon:"uiIconTrash",order:1,enabled:function(t){return"invited"===e.filter&&t.isInvited},click:function(t){e.$spaceService.cancelInvitation(eXo.env.portal.spaceDisplayName,t.username).then((function(){return e.$refs.spaceMembers.searchPeople()}))}}),extensionRegistry.registerExtension("space-member-extension","action",{id:"spaceMembers-acceptPending",title:this.$t("peopleList.button.acceptPending"),icon:"uiIconUserCheck",order:1,enabled:function(t){return t.enabled&&!t.deleted&&"pending"===e.filter&&t.isPending},click:function(t){e.$spaceService.acceptUserRequest(eXo.env.portal.spaceDisplayName,t.username).then((function(){return e.$refs.spaceMembers.searchPeople()}))}}),extensionRegistry.registerExtension("space-member-extension","action",{id:"spaceMembers-refusePending",title:this.$t("peopleList.button.refusePending"),icon:"uiIconTrash",order:1,enabled:function(t){return"pending"===e.filter&&t.isPending},click:function(t){e.$spaceService.refuseUserRequest(eXo.env.portal.spaceDisplayName,t.username).then((function(){return e.$refs.spaceMembers.searchPeople()}))}}),document.dispatchEvent(new CustomEvent("space-member-extension-updated")))},methods:{refreshInvited:function(){"invited"!==this.filter&&"member"!==this.filter||this.$refs.spaceMembers.searchPeople()},peopleLoaded:function(e){this.peopleCount=e}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"transparent",attrs:{flat:""}},[n("space-members-toolbar",{attrs:{keyword:e.keyword,filter:e.filter,"people-count":e.peopleCount,"is-manager":e.isManager},on:{"keyword-changed":function(t){e.keyword=t},"filter-changed":function(t){e.filter=t},"invite-users":function(t){return e.$refs.spaceInvitationDrawer.open()},refresh:e.refreshInvited}}),e._v(" "),n("people-card-list",{ref:"spaceMembers",attrs:{keyword:e.keyword,filter:e.filter,"loading-people":e.loadingPeople,"space-id":e.spaceId,"people-count":e.peopleCount,"is-manager":e.isManager},on:{loaded:e.peopleLoaded}}),e._v(" "),n("space-invitation-drawer",{ref:"spaceInvitationDrawer",attrs:{"is-external-feature-enabled":e.isExternalFeatureEnabled},on:{refresh:e.refreshInvited}})],1)};r._withStripped=!0;var s=n(0),a=Object(s.a)(i,r,[],!1,null,null,null);a.options.__file="src/main/webapp/vue-apps/space-members/components/SpaceMembers.vue";var o=a.exports,l={props:{keyword:{type:String,default:null},filter:{type:String,default:null},peopleCount:{type:String,default:null},isManager:{type:Boolean,default:!1}},data:function(){return{filterToChange:null,bottomMenu:!1}},computed:{bottomNavigationHeight:function(){return this.isManager?"255px":"169px"},peopleFilters:function(){return this.isManager?[{text:this.$t("peopleList.label.filter.member"),value:"member"},{text:this.$t("peopleList.label.filter.manager"),value:"manager"},{text:this.$t("peopleList.label.filter.redactor"),value:"redactor"},{text:this.$t("peopleList.label.filter.invited"),value:"invited"},{text:this.$t("peopleList.label.filter.pending"),value:"pending"}]:[{text:this.$t("peopleList.label.filter.member"),value:"member"},{text:this.$t("peopleList.label.filter.manager"),value:"manager"}]}},watch:{keyword:function(){this.$emit("keyword-changed",this.keyword)},filter:function(){this.$emit("filter-changed",this.filter)}},methods:{openBottomMenu:function(){this.filterToChange=this.filter,this.bottomMenu=!0},changeFilterSelection:function(){this.bottomMenu=!1,this.filter=this.filterToChange}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{id:"peopleListToolbar",flat:""}},[e.isManager?n("v-toolbar-title",[n("v-btn",{staticClass:"btn pe-2 ps-0 me-4 inviteUserToSpaceButton",on:{click:function(t){return e.$emit("invite-users")}}},[n("i",{staticClass:"uiIconInviteUser ms-2 me-1"}),e._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[e._v("\n        "+e._s(e.$t("peopleList.button.inviteUsers"))+"\n      ")])])],1):e._e(),e._v(" "),n("div",{staticClass:"showingPeopleText text-sub-title d-none d-sm-flex"},[e._v("\n    "+e._s(e.$t("peopleList.label.peopleCount",{0:e.peopleCount}))+"\n  ")]),e._v(" "),n("v-spacer",{staticClass:"d-none d-sm-flex"}),e._v(" "),n("v-scale-transition",[n("v-text-field",{staticClass:"inputPeopleFilter pa-0 me-3 my-auto",attrs:{placeholder:e.$t("peopleList.label.filterPeople"),"prepend-inner-icon":"fa-filter"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),n("v-scale-transition",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"selectPeopleFilter my-auto me-2 subtitle-1 ignore-vuetify-classes d-none d-sm-inline",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.filter=t.target.multiple?n:n[0]}}},e._l(e.peopleFilters,(function(t){return n("option",{key:t.value,domProps:{value:t.value}},[e._v("\n        "+e._s(t.text)+"\n      ")])})),0)]),e._v(" "),n("v-icon",{staticClass:"d-sm-none",on:{click:e.openBottomMenu}},[e._v("\n    fa-filter\n  ")]),e._v(" "),n("v-bottom-sheet",{staticClass:"pa-0",model:{value:e.bottomMenu,callback:function(t){e.bottomMenu=t},expression:"bottomMenu"}},[n("v-sheet",{staticClass:"text-center",attrs:{height:e.bottomNavigationHeight}},[n("v-toolbar",{staticClass:"border-box-sizing",attrs:{color:"primary",dark:""}},[n("v-btn",{attrs:{text:""},on:{click:function(t){e.bottomMenu=!1}}},[e._v("\n          "+e._s(e.$t("peopleList.label.cancel"))+"\n        ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-title",[n("v-icon",[e._v("fa-filter")]),e._v("\n          "+e._s(e.$t("peopleList.label.filter"))+"\n        ")],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:e.changeFilterSelection}},[e._v("\n          "+e._s(e.$t("peopleList.label.confirm"))+"\n        ")])],1),e._v(" "),n("v-list",e._l(e.peopleFilters,(function(t){return n("v-list-item",{key:t,on:{click:function(n){e.filterToChange=t.value}}},[n("v-list-item-title",{staticClass:"align-center d-flex"},[e.filterToChange===t.value?n("v-icon",[e._v("fa-check")]):n("span",{staticClass:"me-6"}),e._v(" "),n("v-spacer"),e._v(" "),n("div",[e._v("\n              "+e._s(t.text)+"\n            ")]),e._v(" "),n("v-spacer"),e._v(" "),n("span",{staticClass:"me-6"})],1)],1)})),1)],1)],1)],1)};c._withStripped=!0;var p=Object(s.a)(l,c,[],!1,null,null,null);p.options.__file="src/main/webapp/vue-apps/space-members/components/SpaceMembersToolbar.vue";var u=p.exports,d={props:{isExternalFeatureEnabled:{type:Boolean,default:!0}},data:function(){return{users:[],savingSpace:!1,spaceSaved:!1,error:null,spacePrettyName:eXo.env.portal.spaceName,invitedMembers:[],includeExternalUser:!1,externalInvitedUsers:[],invitationSent:!1,alreadyExistAlert:"",alreadyInvitedAlert:"",externalInvitationsSent:[]}},computed:{saveButtonDisabled:function(){return this.savingSpace||this.spaceSaved||!this.invitedMembers||!this.invitedMembers.length&&!this.includeExternalUser},suggesterLabels:function(){return{placeholder:this.$t("peopleList.label.inviteMembers"),noDataLabel:this.$t("peopleList.label.noDataLabel")}},defaultAvatar:function(){return eXo.env.portal.context+"/"+eXo.env.portal.rest+"/v1/social/users/default-image/avatar"},invitedUser:function(){return 1===this.invitedMembers.length&&this.invitedMembers[0]&&this.invitedMembers[0].profile},invitedUserFullName:function(){return this.invitedUser&&this.invitedUser.fullName||this.$t("peopleList.label.users")}},watch:{savingSpace:function(){this.savingSpace?this.$refs.spaceInvitationDrawer.startLoading():this.$refs.spaceInvitationDrawer.endLoading()}},methods:{open:function(){var e=this;this.savingSpace=!1,this.spaceSaved=!1,this.includeExternalUser=!1,this.error=null,this.spacePrettyName=eXo.env.portal.spaceName,this.invitedMembers=[],this.externalInvitedUsers=[],this.$refs.spaceInvitationDrawer.open(),this.$spaceService.findSpaceExternalInvitationsBySpaceId(eXo.env.portal.spaceId).then((function(t){e.externalInvitationsSent=t}))},cancel:function(){this.$refs.spaceInvitationDrawer.close()},inviteUsers:function(e){var t=this;e&&(e.preventDefault(),e.stopPropagation()),this.spaceSaved||this.savingSpace||(this.error=null,this.savingSpace=!0,this.$spaceService.updateSpace({id:eXo.env.portal.spaceId,invitedMembers:this.invitedMembers,externalInvitedUsers:this.externalInvitedUsers}).then((function(){t.spaceSaved=!0,t.$emit("refresh"),t.externalInvitedUsers=[],t.invitationSent=!0,window.setTimeout((function(){t.$refs.spaceInvitationDrawer.close(),t.invitationSent=!1}),3e3)})).catch((function(e){console.warn("Error updating space ",t.invitedMembers,e),t.error=t.$t("peopleList.error.errorWhenSavingSpace")})).finally((function(){return t.savingSpace=!1})))},checkExternalInvitation:function(e){var t=this;$("form").on("focusout",(function(e){setTimeout((function(){e.delegateTarget.contains(document.activeElement)||t.getExternalEmail()}),1)})),"Enter"==e.key&&(e.preventDefault(),this.getExternalEmail()),"32"==e.keyCode&&this.getExternalEmail()},getExternalEmail:function(){var e=this,t=this.$refs.autoFocusInput3.searchTerm,n=null!==t?t.split(" "):"",i=n[n.length-1];/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(i)&&this.$userService.getUserByEmail(i).then((function(t){"null"!==t.id?(e.$spaceService.isSpaceMember(eXo.env.portal.spaceId,t.remoteId).then((function(n){"true"===n.isMember?($("#"+e.$refs.autoFocusInput3.id+" input")[0].blur(),e.alreadyExistAlert='<span style="font-style: italic;">'+i+"</span> "+e.$t("peopleList.label.alreadyMember"),setTimeout((function(){return e.alreadyExistAlert=""}),3e3)):(e.users.push(t),-1===e.invitedMembers.findIndex((function(e){return e.remoteId===t.remoteId}))&&setTimeout((function(){return e.invitedMembers.push(t)}),0))})),e.$refs.autoFocusInput3.searchTerm=null):e.isExternalFeatureEnabled&&(e.includeExternalUser=!0,e.externalInvitationsSent.find((function(e){return e.userEmail===i}))?($("#"+e.$refs.autoFocusInput3.id+" input")[0].blur(),e.alreadyInvitedAlert=e.$t("peopleList.label.alreadyInvited"),setTimeout((function(){return e.alreadyInvitedAlert=""}),3e3)):-1===e.externalInvitedUsers.indexOf(i)&&e.externalInvitedUsers.push(i),e.$refs.autoFocusInput3.searchTerm=null)}))},removeExternalInvitation:function(e){var t=this.externalInvitedUsers.indexOf(e);t>-1&&this.externalInvitedUsers.splice(t,1)},declineInvitation:function(e){this.externalInvitationsSent.splice(this.externalInvitationsSent.indexOf(e),1),this.$spaceService.declineExternalInvitation(eXo.env.portal.spaceId,e.invitationId)}}},v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("exo-drawer",{ref:"spaceInvitationDrawer",staticClass:"spaceInvitationDrawer",attrs:{right:""}},[n("template",{slot:"title"},[e._v("\n    "+e._s(e.$t("peopleList.title.usersToInvite"))+"\n  ")]),e._v(" "),n("template",{slot:"content"},[e.invitationSent?n("v-alert",{staticClass:"ma-4 pa-3 successfulInvitation",attrs:{outlined:"",text:""}},[e._v("\n      "+e._s(e.$t("peopleList.label.successfulInvitation",{0:e.invitedUserFullName}))+"\n    ")]):n("form",{ref:"form3",attrs:{disabled:e.savingSpace||e.spaceSaved},on:{keypress:function(t){return e.checkExternalInvitation(t)}}},[n("exo-identity-suggester",{ref:"autoFocusInput3",staticClass:"ma-4",attrs:{labels:e.suggesterLabels,disabled:e.savingSpace||e.spaceSaved,"search-options":{spaceURL:e.spacePrettyName},items:e.users,name:"inviteMembers","type-of-relations":"user_to_invite","include-users":"","include-spaces":"",multiple:""},model:{value:e.invitedMembers,callback:function(t){e.invitedMembers=t},expression:"invitedMembers"}}),e._v(" "),e.error?n("v-alert",{attrs:{type:"error"}},[e._v("\n        "+e._s(e.error)+"\n      ")]):e._e()],1),e._v(" "),n("v-list",{staticClass:"mx-4 rounded externalList",attrs:{subheader:""}},[e.alreadyExistAlert?n("v-alert",{staticClass:"mb-0 pa-2 text-center alreadyExistAlert",attrs:{outlined:"",text:""},domProps:{innerHTML:e._s(e.alreadyExistAlert)}}):e._e(),e._v(" "),e.alreadyInvitedAlert?n("v-alert",{staticClass:"mb-0 pa-2 text-center alreadyExistAlert",attrs:{outlined:"",text:""},domProps:{innerHTML:e._s(e.alreadyInvitedAlert)}}):e._e(),e._v(" "),e._l(e.externalInvitedUsers,(function(t){return n("v-list-item",{key:t},[n("v-badge",{staticClass:"externalBadge pa-0",attrs:{bottom:"",color:"white",bordered:"","offset-x":"33","offset-y":"26"}},[n("span",{attrs:{slot:"badge"},slot:"badge"},[n("i",{staticClass:"uiIconSocUserProfile"}),n("v-icon",{staticClass:"helpIcon"},[e._v("mdi-help")])],1),e._v(" "),n("v-list-item-avatar",{staticClass:"ms-0"},[n("v-img",{attrs:{src:e.defaultAvatar}})],1)],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"externalUserEmail",domProps:{textContent:e._s(t)}}),e._v(" "),n("v-list-item-subtitle",{staticClass:"subEmail"},[e._v(e._s(e.$t("peopleList.label.pending")))])],1),e._v(" "),n("v-btn",{directives:[{name:"exo-tooltip",rawName:"v-exo-tooltip.bottom.body",value:e.$t("peopleList.label.clickToDecline"),expression:"$t('peopleList.label.clickToDecline')",modifiers:{bottom:!0,body:!0}}],attrs:{icon:""},on:{click:function(n){return e.removeExternalInvitation(t)}}},[n("v-icon",[e._v("\n            mdi-close-circle\n          ")])],1)],1)}))],2),e._v(" "),e.externalInvitationsSent.length>0?n("v-list",{staticClass:"mx-4 mt-0 rounded externalList",attrs:{subheader:""}},e._l(e.externalInvitationsSent,(function(t){return n("v-list-item",{key:t},[n("v-badge",{staticClass:"externalBadge pa-0",attrs:{bottom:"",bordered:"",color:"white","offset-x":"33","offset-y":"26"}},[n("span",{attrs:{slot:"badge"},slot:"badge"},[n("i",{staticClass:"uiIconSocUserProfile"}),n("v-icon",{staticClass:"helpIcon",attrs:{color:"white"}},[e._v("mdi-help")])],1),e._v(" "),n("v-list-item-avatar",{staticClass:"ms-0"},[n("v-img",{attrs:{src:e.defaultAvatar}})],1)],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"externalUserEmail",domProps:{textContent:e._s(t.userEmail)}}),e._v(" "),t.expired?n("v-list-item-subtitle",{directives:[{name:"exo-tooltip",rawName:"v-exo-tooltip.bottom.body",value:e.$t("peopleList.label.invitationExpiredToolTip"),expression:"$t('peopleList.label.invitationExpiredToolTip')",modifiers:{bottom:!0,body:!0}}],staticClass:"subExpired"},[e._v("\n            "+e._s(e.$t("peopleList.label.invitationExpired"))+"\n          ")]):n("v-list-item-subtitle",{staticClass:"subEmail"},[e._v(e._s(e.$t("peopleList.label.invitationSent")))])],1),e._v(" "),n("v-btn",{directives:[{name:"exo-tooltip",rawName:"v-exo-tooltip.bottom.body",value:e.$t("peopleList.label.clickToDecline"),expression:"$t('peopleList.label.clickToDecline')",modifiers:{bottom:!0,body:!0}}],attrs:{icon:""},on:{click:function(n){return e.declineInvitation(t)}}},[n("v-icon",[e._v("\n            mdi-close-circle\n          ")])],1)],1)})),1):e._e()],1),e._v(" "),n("template",{slot:"footer"},[n("div",{staticClass:"d-flex"},[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"btn me-2",attrs:{disabled:e.savingSpace||e.spaceSaved},on:{click:e.cancel}},[e._v("\n        "+e._s(e.$t("peopleList.label.cancel"))+"\n      ")]),e._v(" "),n("v-btn",{staticClass:"btn btn-primary",attrs:{loading:e.savingSpace,disabled:e.saveButtonDisabled},on:{click:e.inviteUsers}},[e._v("\n        "+e._s(e.$t("peopleList.button.inviteUsers"))+"\n      ")])],1)])],2)};v._withStripped=!0;var m=Object(s.a)(d,v,[],!1,null,null,null);m.options.__file="src/main/webapp/vue-apps/space-members/components/SpaceInvitationDrawer.vue";var f={"space-members":o,"space-members-toolbar":u,"space-invitation-drawer":m.exports};for(var b in f)Vue.component(b,f[b]);if(extensionRegistry){var h=extensionRegistry.loadComponents("SpaceMembers");h&&h.length>0&&h.forEach((function(e){Vue.component(e.componentName,e.componentOptions)}))}document.dispatchEvent(new CustomEvent("displayTopBarLoading"));var g=eXo&&eXo.env.portal.language||"en",x=eXo.env.portal.context+"/"+eXo.env.portal.rest+"/i18n/bundle/locale.portlet.social.PeopleListApplication-"+g+".json",_="peopleListApplication";function y(e,t,n){exoi18n.loadLanguageAsync(g,x).then((function(i){Vue.createApp({mounted:function(){document.dispatchEvent(new CustomEvent("hideTopBarLoading"))},template:'<space-members\n                  id="'+_+'"\n                  :is-manager="'+t+'"\n                  :is-external-feature-enabled="'+n+'"\n                  filter="'+(e||"member")+'"\n                  space-id="'+eXo.env.portal.spaceId+'"\n                  class="singlePageApplication" />',i18n:i,vuetify:Vue.prototype.vuetifyOptions},"#"+_,"Space Members")}))}}})}));