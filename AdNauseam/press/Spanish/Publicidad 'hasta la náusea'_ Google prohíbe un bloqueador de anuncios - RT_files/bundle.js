!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){if(!window.isSpotImLauncherLoaded){window.isSpotImLauncherLoaded=!0;var e;if(i.ieVersion&&i.ieVersion<9)e="Spot.IM doesn't support IE "+i.ieVersion+" browser";else{e="Spot.IM Fast Launcher version 1.1.58 deployed at Thu Feb 23 2017 19:59:36 GMT+0000 (UTC)";var t=(0,s.objectFromQueryString)(window.location.href),r="true"===t["spot-im-disabled"],n=window.SPOTIM&&window.SPOTIM.spotId;if(n)if(r)e+=" (skipped)";else{var o,d="0"===t.re;if(d)window.isSpotImHostFrame=!0,o=l.default.embedPath;else{var c="1"===t.re&&t.version||"1.1.58";o=(0,a.isConversationOnly)(n)?l.default.conversationUrl.replace("VERSION",c):l.default.bundleUrl.replace("VERSION",c)}(0,u.addScript)(o)}else e+=" (no spot id)"}console.log(e)}}var i=r(2),s=r(3),u=r(4),a=r(5),d=r(6),l=n(d);o()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ieVersion=function(){var e=window.navigator,t=null;return e.appVersion.indexOf("MSIE")!==-1?t=parseFloat(e.appVersion.split("MSIE")[1]):e.userAgent.match(/Trident/)&&(t=11),t}()},function(e,t){"use strict";function r(e){var t={},r=e.indexOf("?");if(r>-1){var o=e.substring(r+1);""!==o&&o.split("&").forEach(function(e){var r=e.split("="),o=n(r,2),i=o[0],s=o[1];t[i]=decodeURIComponent(s)})}return t}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.objectFromQueryString=r},function(e,t){"use strict";function r(e){var t=document.createElement("script");t.type="text/javascript",t.src=e,(document.body||document.head).appendChild(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.addScript=r},function(e,t){"use strict";function r(e){return n.indexOf(e)>-1}Object.defineProperty(t,"__esModule",{value:!0}),t.isConversationOnly=r;var n=["sp_f76RE06N","sp_6Md8natL","sp_IjnMf2Jd","sp_Sq1kuM8c","sp_yq4KDduv","sp_6Sbuib4m","sp_EGlc89GT"]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=null;n=r(7).default,t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={embedPath:"https://app-cdn.spot.im/20161219-153947_Gilads-MacBook-Pro.local/host/bundle.js",bundleUrl:"https://app-cdn.spot.im/modules/fast-launcher/VERSION/bundle/bundle.js",conversationUrl:"https://app-cdn.spot.im/modules/fast-launcher/VERSION/conversation/bundle.js"}}]);