define((function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}({6:function(e,t,n){"use strict";function r(){return fetch(Vue.prototype.$spacesConstants.PORTAL_CONTEXT+"/"+Vue.prototype.$spacesConstants.PORTAL_REST+"/getting-started",{method:"DELETE",credentials:"include"}).then((function(e){if(!e||!e.ok)throw new Error("Error deleting getting started")}))}n.r(t),n.d(t,"hideGettingStarted",(function(){return r}));var o=document.querySelector("#GettingStartedPortlet .btClose");o&&(o.onclick=function(){r().then((function(){return document.querySelector("#GettingStartedPortlet").parentElement.remove()}))})}})}));