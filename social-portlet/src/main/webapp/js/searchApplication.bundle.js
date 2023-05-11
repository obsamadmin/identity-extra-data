define((function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=25)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,a){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId=i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var h=u.render;u.render=function(e,t){return c.call(t),h(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},25:function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return x}));var r={props:{connectors:{type:Array,default:function(){return[]}},skinUrls:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!0,term:null,standalone:!1,pageUri:null,pageTitle:null}},computed:{buttonTooltip:function(){return this.$t("Search.button.tooltip.open",{0:"Ctrl + Alt + F"})},searchUri:function(){return eXo.env.portal.context+"/"+eXo.env.portal.portalName+"/search"}},watch:{term:function(){this.changeURI()},loading:function(){this.loading||(document.dispatchEvent(new CustomEvent("hideTopBarLoading")),this.$root.$applicationLoaded())},dialog:function(){this.dialog?($("body").addClass("hide-scroll"),this.$root.$emit("search-opened"),window.history.replaceState("",this.$t("Search.page.title"),this.searchUri+"?q="+(this.term||""))):($("body").removeClass("hide-scroll"),this.$root.$emit("search-closed"),window.history.replaceState("",this.pageTitle,this.pageUri))}},created:function(){var e=this;this.skinUrls&&this.skinUrls.length&&this.skinUrls.forEach((function(e){if(!document.querySelector('link[href="'+e+'"]')){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}));var t=eXo.env.portal.language,n=eXo.env.portal.context+"/"+eXo.env.portal.rest,r=[eXo.env.portal.context+"/"+eXo.env.portal.rest+"/i18n/bundle/locale.portlet.Portlets-"+t+".json"];if(this.connectors&&this.connectors.length&&this.connectors.forEach((function(e){e.i18nBundle&&r.push(n+"/i18n/bundle/"+e.i18nBundle+"-"+t+".json")})),exoi18n.loadLanguageAsync(t,r).then((function(){return e.$nextTick()})).finally((function(){return e.loading=!1})),this.pageUri=window.location.href,this.pageTitle=window.document.title,this.standalone=0===window.location.pathname.indexOf(this.searchUri),this.standalone){var o=window.location.search&&window.location.search.substring(1);if(o){var i=JSON.parse('{"'+decodeURI(o).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'),s=i.types&&window.decodeURIComponent(i.types);s&&s.trim().length&&this.connectors.forEach((function(e){e.enabled=s.includes(e.name)}))}}else $(document).on("keydown",(function(t){"Escape"===t.key&&(e.dialog=!1),t.ctrlKey&&t.altKey&&"f"===t.key&&(e.dialog=!e.dialog)}))},mounted:function(){this.dialog=!0},methods:{changeURI:function(){var e=window.encodeURIComponent(this.term||""),t=this.connectors.filter((function(e){return e.enabled})).map((function(e){return e.name})),n="";t.length!==this.connectors.length&&(n=window.encodeURIComponent(t.join(","))),window.history.replaceState("",this.$t("Search.page.title"),this.searchUri+"?q="+e+"&types="+n)}}},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-btn",{staticClass:"transparent",attrs:{title:e.buttonTooltip,icon:""},on:{click:function(t){e.dialog=!e.dialog}}},[n("i",{staticClass:"uiIconPLF24x24Search position-static d-flex"})]),e._v(" "),n("v-fade-transition",[n("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.dialog||e.standalone,expression:"dialog || standalone"}],attrs:{id:"searchDialog",transition:"fade-transition","hide-overlay":""}},[n("v-card",{attrs:{flat:""}},[e.loading?e._e():[n("search-toolbar",{ref:"toolbar",attrs:{standalone:e.standalone},on:{search:function(t){e.term=t},"close-search":function(t){e.dialog=!1}}}),e._v(" "),n("search-results",{ref:"results",attrs:{connectors:e.connectors,term:e.term,standalone:e.standalone},on:{"filter-changed":e.changeURI}})]],2)],1)],1)],1)};o._withStripped=!0;var i=n(0),s=Object(i.a)(r,o,[],!1,null,null,null);s.options.__file="src/main/webapp/vue-apps/search/components/SearchApplication.vue";var a=s.exports,l={props:{standalone:{type:Boolean,default:!1}},data:function(){return{startSearchAfterInMilliseconds:600,endTypingKeywordTimeout:50,startTypingKeywordTimeout:0,term:null,typing:!1}},watch:{term:function(){this.term?(this.startTypingKeywordTimeout=Date.now()+this.startSearchAfterInMilliseconds,this.typing||(this.typing=!0,this.waitForEndTyping())):this.$emit("search")}},created:function(){var e=this;if(this.$root.$on("search-opened",(function(){window.setTimeout((function(){e.$refs.searchInput.$el.querySelector("input").focus()}),200)})),this.standalone){var t=window.location.search&&window.location.search.substring(1);if(t){var n=JSON.parse('{"'+decodeURI(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');this.term=window.decodeURIComponent(n.q),this.dialog=!0}}},mounted:function(){var e=this;window.setTimeout((function(){e.$refs.searchInput.$el.querySelector("input").focus()}),200)},methods:{clearSearchTerm:function(){var e=this;this.term="",window.setTimeout((function(){e.$refs.searchInput.$el.querySelector("input").focus()}),200)},waitForEndTyping:function(){var e=this;window.setTimeout((function(){Date.now()>e.startTypingKeywordTimeout?(e.typing=!1,e.$emit("search",e.term)):e.waitForEndTyping()}),this.endTypingKeywordTimeout)}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-item",{staticClass:"px-0 my-2"},[n("v-list-item-content",{staticClass:"align-start"},[n("v-text-field",{ref:"searchInput",staticClass:"fill-width my-auto pt-0 px-4 searchInputParent",attrs:{id:"searchInput",placeholder:e.$t("Search.label.inputPlaceHolder"),type:"text",autocomplete:"off"},model:{value:e.term,callback:function(t){e.term=t},expression:"term"}})],1),e._v(" "),n("v-list-item-action",{staticClass:"align-end d-flex flex-row ms-0 me-4"},[e.term?n("v-btn",{attrs:{text:"",color:"error"},on:{click:e.clearSearchTerm}},[e._v("\n      "+e._s(e.$t("search.connector.label.clear"))+"\n    ")]):e._e(),e._v(" "),e.standalone?e._e():n("v-btn",{staticClass:"searchCloseIcon transparent",attrs:{"aria-label":e.$t("Search.button.close.label"),icon:""},on:{click:function(t){return e.$emit("close-search")}}},[n("v-icon",[e._v("mdi-close")])],1)],1)],1)};c._withStripped=!0;var u=Object(i.a)(l,c,[],!1,null,null,null);u.options.__file="src/main/webapp/vue-apps/search/components/SearchToolbar.vue";var h=u.exports,d={props:{term:{type:String,default:null},connectors:{type:Array,default:function(){return[]}},standalone:{type:Boolean,default:!1}},data:function(){return{index:0,term:null,totalSize:0,results:null,pageSize:10,limit:10,allEnabled:!0,searching:0,abortController:null,searchInitialized:!1}},computed:{hasMore:function(){return this.totalSize&&this.enabledConnectors&&this.enabledConnectors.filter((function(e){return e.hasMore})).length},hasResults:function(){return this.resultsArray&&this.resultsArray.length},noResults:function(){return this.searchInitialized&&!this.hasResults&&this.term&&!this.searching&&this.results&&Object.keys(this.results).length},sortedConnectors:function(){var e=this;return this.connectors?this.connectors.map((function(t){return t.label=e.$t("search.connector.label."+t.name),t})).sort((function(e,t){return e.label>t.label?1:e.label<t.label?-1:0})):[]},enabledConnectors:function(){return this.connectors&&this.connectors.filter((function(e){return e.enabled}))||[]},enabledConnectorNames:function(){return this.enabledConnectors.map((function(e){return e.name}))},resultsArray:function(){var e=this;if(this.results&&this.totalSize&&!(this.searching<0)){var t=Object.keys(this.results),n={};return t.forEach((function(t){e.enabledConnectorNames.includes(t)&&(n[t]=e.results[t])})),Object.values(n).flat().sort((function(e,t){return e.index-t.index}))}}},watch:{searching:function(e,t){e&&!t?document.dispatchEvent(new CustomEvent("displayTopBarLoading")):t&&!e&&document.dispatchEvent(new CustomEvent("hideTopBarLoading"))},term:function(){var e=this;this.totalSize=0,this.limit=this.pageSize,this.term&&(this.results={}),this.connectors.forEach((function(t){t.size=-1,e.term&&(e.results[t.name]=[])})),this.search()}},created:function(){var e=this;this.$root.$on("refresh",(function(t){e.$set(e.results,t.name,[]),e.retrieveConnectorResults(t)}));var t=!0;this.connectors.forEach((function(e){t=t&&e.enabled})),this.allEnabled=t},methods:{selectAllConnector:function(){var e=this;this.allEnabled||(this.connectors.forEach((function(e){e.enabled=!0})),this.allEnabled=!0,window.setTimeout((function(){e.$emit("filter-changed"),e.$nextTick().then(e.search)}),50))},selectConnector:function(e){var t=this;if(e){this.connectors.length===this.enabledConnectors.length?this.connectors.forEach((function(t){t.enabled=t.name===e.name})):e.enabled&&1===this.enabledConnectors.length?this.connectors.forEach((function(e){e.enabled=!0})):e.enabled=!e.enabled;var n=!0;this.connectors.forEach((function(e){n=n&&e.enabled})),this.allEnabled=n,window.setTimeout((function(){t.$emit("filter-changed"),t.$nextTick().then(t.search)}),50)}},loadMore:function(){this.limit+=this.pageSize,this.search()},search:function(){var e=this;if(this.abortController&&this.abortController.abort(),this.term){var t={};window.AbortController&&(this.abortController=new window.AbortController,t=this.abortController.signal),this.enabledConnectors.forEach((function(n){(-1===n.size||n.hasMore)&&e.retrieveConnectorResults(n,t)}))}else this.results=null},retrieveConnectorResults:function(e,t){var n=this;if(e)return window.require([e.jsModule],(function(r){var o={headers:{Accept:"application/json"}};t&&(o=Object.assign(o,t)),0===e.uri.indexOf("/")&&(o.credentials="include"),n.searching++;var i=e.uri.replace("{keyword}",window.encodeURIComponent(n.term)).replace("{limit}",n.limit);return(r.fetchSearchResult?r.fetchSearchResult(i,o):fetch(i,o)).then((function(e){if(e&&e.ok)return e.json()})).then((function(e){return r&&r.formatSearchResult?r.formatSearchResult(e,n.term):e})).then((function(t){t&&t.length&&(e.size=t.length,e.hasMore=e.enabled&&e.uri&&e.size>=n.limit,t.forEach((function(t){t.connector=e,t.index=++n.index,t.domId=t.domId||"SearchResult"+t.index})),n.$set(n.results,e.name,t),n.totalSize=n.results[e.name].length)})).catch((function(t){return e.error=t})).finally((function(){n.searching--,n.searchInitialized=!0}))}))}}},f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",[n("v-flex",{staticClass:"searchConnectorsParent mx-4 mb-4 border-box-sizing"},[n("v-chip",{staticClass:"mx-1 border-color",attrs:{outlined:!e.allEnabled,color:e.allEnabled?"primary":""},on:{click:e.selectAllConnector}},[n("span",{staticClass:"subtitle-1"},[e._v(e._s(e.$t("search.connector.label.all")))])]),e._v(" "),e._l(e.sortedConnectors,(function(t){return n("v-chip",{key:t.name,staticClass:"mx-1 border-color",attrs:{outlined:e.allEnabled||!t.enabled,color:!e.allEnabled&&t.enabled?"primary":""},on:{click:function(n){return e.selectConnector(t)}}},[n("span",{staticClass:"subtitle-1"},[e._v(e._s(t.label))])])}))],2),e._v(" "),e.hasResults?n("v-row",{staticClass:"searchResultsParent justify-center justify-md-start mx-4 border-box-sizing"},e._l(e.resultsArray,(function(t){return n("v-col",{key:t.domId,staticClass:"searchCard pa-0",attrs:{cols:"12",md:"6",lg:"4",xl:"3"}},[n("search-result-card",{attrs:{result:t,term:e.term}})],1)})),1):e._e(),e._v(" "),e.noResults?n("v-flex",{staticClass:"searchNoResultsParent d-flex my-auto border-box-sizing"},[n("div",{staticClass:"d-flex flex-column ma-auto text-center text-sub-title"},[n("div",[n("i",{staticClass:"uiIconSearchLight text-sub-title my-auto"},[n("i",{staticClass:"uiIconCloseLight text-sub-title"})])]),e._v(" "),n("span",{staticClass:"headline"},[e._v(e._s(e.$t("Search.noResults")))]),e._v(" "),n("span",{staticClass:"caption"},[e._v(e._s(e.$t("Search.noResultsMessage")))])])]):e._e(),e._v(" "),e.hasMore?n("v-flex",{staticClass:"searchLoadMoreParent d-flex my-4 border-box-sizing"},[n("v-btn",{staticClass:"btn mx-auto",attrs:{loading:e.searching>0,disabled:e.searching>0},on:{click:e.loadMore}},[e._v("\n      "+e._s(e.$t("Search.button.loadMore"))+"\n    ")])],1):e._e()],1)};f._withStripped=!0;var p=Object(i.a)(d,f,[],!1,null,null,null);p.options.__file="src/main/webapp/vue-apps/search/components/SearchResults.vue";var m=p.exports,v={props:{term:{type:String,default:null},result:{type:Object,default:function(){return null}}},data:function(){return{id:"SearchResult"+String(parseInt(1e4*Math.random()))}},mounted:function(){var e=this;if(this.result&&this.result.connector){var t=this;new(Vue.extend({data:function(){return{result:e.result,term:e.term,id:e.id}},methods:{refresh:function(){t.$root.$emit("refresh",t.result.connector)}},template:"\n          <"+this.result.connector.uiComponent+' :id="id" :result="result" :term="term" @refresh="refresh" />\n        '}))({vuetify:Vue.prototype.vuetifyOptions,i18n:exoi18n.i18n}).$mount("#"+this.id),this.$forceUpdate()}}},b=function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.id}})};b._withStripped=!0;var g=Object(i.a)(v,b,[],!1,null,null,null);g.options.__file="src/main/webapp/vue-apps/search/components/SearchResultCard.vue";var y={"search-application":a,"search-toolbar":h,"search-results":m,"search-result-card":g.exports};for(var w in y)Vue.component(w,y[w]);if(extensionRegistry){var C=extensionRegistry.loadComponents("SearchApplication");C&&C.length&&C.forEach((function(e){Vue.component(e.componentName,e.componentOptions)}))}var _="SearchApplication";function x(){document.dispatchEvent(new CustomEvent("displayTopBarLoading"));var e=JSON.parse(document.getElementById("searchConnectorsDefaultValue").value),t=JSON.parse(document.getElementById("searchSkinUrlsDefaultValue").value);Vue.createApp({data:{connectors:e,skinUrls:t},template:'<search-application id="'+_+'" :connectors="connectors" :skin-urls="skinUrls" />',vuetify:Vue.prototype.vuetifyOptions,i18n:exoi18n.i18n},"#"+_,"Search")}}})}));