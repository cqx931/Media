(function(){function n(n){try{return n()}catch(t){}return"-e-"}var t=function(){var n=Math.random();var t=(new Date).getTime();return""+t+n};var e=function(){var n="";if(typeof PIX2_HITCOLLECTOR!="undefined"){n=PIX2_HITCOLLECTOR}if(n.length>0){if(n.substring(n.length-1,n.length)=="/"){n=n.substring(0,n.length-1)}}return n};var r=t();var i=false;var o=function(){if(window.sessionStorage){i=true;if(!window.sessionStorage.__pix2){window.sessionStorage.__pix2=t()}return window.sessionStorage.__pix2}return"-"};var a=n(o);var u=0;var f=function(){return u++};var s=function(){var n="cookie"in document&&(document.cookie.length>0||(document.cookie="test").indexOf.call(document.cookie,"test")>-1);if(n){return 1}return 0};var c=function(){if(i){if(!window.sessionStorage.__pix2c){window.sessionStorage.__pix2c=0}return window.sessionStorage.__pix2c++}return"-"};var d=function(){var n=document.createElement("iframe");n.src=e()+"/frame.html#20150527014857.5565066996ea5.1507";n.style.width=0;n.style.height=0;n.style.display="none";n.style.visibility="hidden";document.body.appendChild(n)};var v=function(){var n={},t=0,e=arguments.length,r;for(;t<e;t++){for(r in arguments[t]){if(arguments[t].hasOwnProperty(r)){n[r]=arguments[t][r]}}}return n};var w=function(n,t){var e={};for(var r in n){if(n.hasOwnProperty(r)){e[r]=n[r]}}for(var r in t){if(t.hasOwnProperty(r)){e[r]=t[r]}}return e};var l=function(n){try{var t=n+"=";var e=document.cookie.split(";");for(var r=0;r<e.length;r++){var i=e[r];while(i.charAt(0)==" ")i=i.substring(1);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return""}catch(o){return""}};var g=function(){try{return"localStorage"in window&&window["localStorage"]!==null?localStorage.getItem("tvn_id"):null}catch(n){return null}};var h=function(n){try{var t={l1:"no",u2:""};var e=g();if(e&&t["u2"].length==0){t["u2"]=e}if(typeof Sso!=="undefined"&&typeof Sso.getLoggedUser!=="undefined"){var r=Sso.getLoggedUser;var i=r&&r.isAuthenticated&&r.isAuthenticated();if(i){var o=r.getUserHash();if(typeof o!=="undefined"&&o){t["u2"]=o;t["l1"]="yes"}}}else if(window.tvnLogin&&window.tvnUserHash){t["l1"]=window.tvnLogin;t["u2"]=window.tvnUserHash}if(t["l1"]=="yes"){var a=l("sso_login_type");if(a){t["lt"]=a}}return v(n,t)}catch(u){return n}};var p=function(){var t=e();var i=function(){var t={h:n(function(){return window.location.host}),p:n(function(){return window.location.pathname+window.location.search}),r:n(function(){return document.referrer}),s1:r,s2:a,c1:f(),c2:n(c),sd:n(function(){return screen.width+"x"+screen.height}),u1:"20150527014857.5565066996ea5.1507"};var e=n(s);if(e!=1){t.ce=e}return h(t)};var o=function(n){var t="";for(var e in n){if(n.hasOwnProperty(e)&&n[e]!==""){t+=encodeURIComponent(e)+"="+encodeURIComponent(n[e])+"&"}}if(t.length>0){t=t.substring(0,t.length-1)}return t};this.track=function(n,e){var r=v(i(),e);var a=new Image;a.src=t+"/_pix2/"+n+"/pix.gif?"+o(r)}};p.prototype.view=function(n,t){var e={};if(typeof n!="undefined"){e.p=n}if(typeof t!="undefined"){e.r=t}if(typeof getAdditionalParamsPix2=="function"){var r=getAdditionalParamsPix2();if(typeof r=="object"){e=w(e,r)}}this.track("view",e)};p.prototype.initFrame=function(){var n=window.onload;window.onload=function(){try{d()}catch(t){}if(typeof n!="undefined"&&n){n()}}};p.prototype.event=function(n,t){if(typeof t=="undefined"){t={}}var e=v({n:n},t);this.track("action",e)};window.__pix2=new p;window.__pix2.view()})();