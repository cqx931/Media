(function(){var h=void 0,i=true,k=null,l=false,m=this;
function aa(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b};function p(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function ba(){}function ca(a){var b=[];q(new ba,a,b);return b.join("")}
function q(a,b,c){switch(typeof b){case "string":r(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==k){c.push("null");break}if(aa(b)=="array"){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),q(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&(f=b[e],typeof f!="function"&&(c.push(d),r(e,c),c.push(":"),q(a,f,c),d=","));c.push("}");
break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var s={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},da=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function r(a,b){b.push('"',a.replace(da,function(a){if(a in s)return s[a];var b=a.charCodeAt(0),e="\\u";b<16?e+="000":b<256?e+="00":b<4096&&(e+="0");return s[a]=e+b.toString(16)}),'"')};function t(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}function u(a){return typeof a!=="undefined"}function w(a){return typeof a==="string"}function y(){return(new Date).getTime()}function z(a,b){if((!!a&&a.constructor===Object)===i)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===l)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===l)break}}
function A(a,b){var c;a:{c=0;for(var d=a.length;c<d;c++)if(b(a[c]))break a;c=-1}if(c>-1)return a[c]}var B=m.setInterval,D=m.clearInterval,E=m.setTimeout;function ea(a){E(a,0)}function fa(){var a=u(m.XDomainRequest);return u(m.XMLHttpRequest)&&"withCredentials"in new m.XMLHttpRequest?new m.XMLHttpRequest:a?new m.XDomainRequest:k}
function ga(a,b,c){var d=fa();d===k?c(k):(F(function(){d.open("GET",a,i)}),d.onload=function(){d.responseText?b(d):c(d)},d.onerror=function(){c(d,"onerror")},d.timeout=1E3,d.ontimeout=function(){c(d,"timeout")},ea(function(){F(function(){d.send(k)})}))}function F(a){try{a()}catch(b){}};var G={};G.v=function(){try{G.create("_cb_test","1",1);var a=G.a("_cb_test");G.remove("_cb_test");return a==="1"}catch(b){return l}};G.a=function(a){a+="=";var b="";z(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),l});return b};
G.create=function(a,b,c){var d=m._sf_async_config;if(d&&d.noCookies)return"";d=new Date;d.setTime(y()+c*1E3);a=a+"="+b+("; expires="+d.toGMTString())+"; path=/";return document.cookie=a};G.remove=function(a){return G.a(a)?G.create(a,"",-86400):""};var H={};H.b=function(a){var b=m._sf_async_config;if(!a&&b&&b.noCookies)return k;if(H.b.k!==h)return H.b.k;var a=y()+"",c,d;try{if((d=m.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return H.b.k=d}catch(e){}return H.b.k=k};H.a=function(a){var b=H.b();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&y()>c)?(H.remove(a),""):b.getItem(a)||""};
H.create=function(a,b,c){var d=H.b();if(d){var e=new Date;e.setTime(y()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(f){}}};H.remove=function(a){var b=H.b();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function I(a){this.o=a||"";this.H=H.b()!==k||G.v();this.D=l;ha(this)}
function ha(a){if(!G.a("_cb_ls")){var b=H.b()!==k,c=G.a("_SUPERFLY_nosample");c&&z(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_nosample",c,600,i)});var d=G.a("_chartbeat3");d&&(a.create("_v__chartbeat3",d,2592E3,i),G.remove("_chartbeat3"));b&&((b=G.a("_chartbeat2"))&&a.create("_chartbeat2",b,63072E3,i),(b=G.a("_chartbeat_uuniq"))&&a.create("_chartbeat_uuniq",b,63072E3,i),(b=G.a("_chartbeat5"))&&a.create("_chartbeat5",b,60,i));G.create("_cb_ls","1",2592E3)}}
I.prototype.create=function(a,b,c,d){a=d?a:this.o+a;(H.b()?H:G).create(a,b,c);H.b()&&G.create(a,b,c)};I.prototype.a=function(a,b){var a=b?a:this.o+a,c=(H.b()?H:G).a(a);if(!c&&H.b()&&(c=G.a(a))&&G.a("_cb_ls")){this.D=i;var d;switch(a){case "_SUPERFLY_nosample":d=600;break;case "_chartbeat4":d=3600;break;case "_cb_cp":d=3600;break;case "_chartbeat3":d=2592E3;break;default:d=63072E3}H.create(a,c,d)}return c};I.prototype.remove=function(a,b){a=b?a:this.o+a;(H.b()?H:G).remove(a);H.b()&&G.remove(a)};function ia(a){var b=ja,c,d=a.ownerDocument.documentElement,e=0,f=u(10)?11:-1;w(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==f;){if(c(a))return a;a=a.parentNode;e++}return k}function ja(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")};function J(){u(m._cb_shared)||(m._cb_shared={});return m._cb_shared};function K(a,b){var c=J(),c=(u(h)&&!u(c.m)?h:c.m)||[];c.push.apply(c,arguments);J().m=c};function ka(){var a=k;z(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical"){var c=b.href,d="",e="",f="",g="";if(c){g=document.createElement("a");b=m.location;if(!/^https?:/.test(c)&&c.indexOf("javascript:")!==0)if(c.indexOf("//")===0)c=b.protocol+c;else if(c.indexOf("/")===0)d=b.protocol,d=(e=b.port)?d==="http:"&&e==="80"||d==="https:"&&e==="443":i,d=d?"":b.port,c=b.protocol+"//"+b.hostname+(d?":"+d:"")+c;else{d=document.baseURI||b.href;e=d.indexOf("?");e===-1&&(e=d.indexOf("#"));
if(e===-1)e=d.length;e=d.lastIndexOf("/",e);c=e===-1?"/"+c:d.substr(0,e)+"/"+c}g.href=c;d=g.pathname;e=g.search;f=g.protocol;g=g.hash;d.charAt(0)!=="/"&&(d="/"+d);if(f==="")f=b.protocol;f==="javascript:"&&(g=d="")}a=L(d)+e+g;return l}});return a}for(var M={},N=0;N<81;N++)M["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(N)]=i;function la(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return M[c]?String.fromCharCode(c):"%"+b.toUpperCase()}
function L(a){if(!w(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,la);return a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent)};function ma(a){var b,c;b=a.domain;c=m.location.hostname.replace(/^www\./,"");return(m.location.protocol||"http:")+"//mab.chartbeat.com/mab_strategy/headline_testing/get_strategy/?host="+encodeURIComponent(b)+"&domain="+encodeURIComponent(c)+"&path="+encodeURIComponent(a.path)}
function na(a,b,c){var d,e,f;ga(a,function(a){var g;g=(a=p(a.responseText))&&a.constructor===Object&&w(a.status)&&(a.data&&a.data.constructor===Object||a.data===k)?{w:a.status,f:a.data,I:a.code,J:a.message}:k,a=g;if(a===k)c();else if(a.w==="success"){d={};f=e=0;if(a.f)a.f.experiments&&(d=a.f.experiments),u(a.f.probability_is_lift)&&(e=a.f.probability_is_lift),u(a.f.probability_is_control)&&(f=a.f.probability_is_control);b(d,[e,f])}else c()},c)}
function oa(a,b,c){if(b[0]+b[1]===0)return O(a,c,"m");var d=[],e=P([new Q("l",b[0],""),new Q("c",b[1],""),new Q("m",1-b[0]-b[1],"")],c.lift_exp),b=e.e;if(b==="l"||b==="c")e=new R("lift_exp","","",e,b),e.i=i,d.push(e);b!=="c"&&(d=d.concat(O(a,c,b)));return d}function O(a,b,c){var d=[];z(a,function(a,f){var g=pa(f,a,c,b[f]);u(g)&&d.push(g)});return d}
function pa(a,b,c,d){var e=b.location,f,g=b.metadata;if(w(g)&&g.length>0)(g=p(g))&&g.version==2&&(f=g.sub_location);f=u(f)?f:"";var n=[];z(b.variants,function(a,b){n.push(new Q(b,parseFloat(a.probability),a.content))});if(b=P(n,d))return new R(a,e,f,b,c)}function P(a,b){var c;u(b)&&(c=A(a,function(a){return a.e===b}));u(c)||(c=qa(a));return c}function qa(a){var b=Math.random();return A(a,function(a){b-=a.B;return b<0})}
function ra(a,b,c){var d=[a,m.location.href,b].join(",");z(c,function(a){d+=","+a.e+","+a.h.e});return d}function sa(a,b){if(a===b)return i;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return l;if(c.pop()!==d.pop())return l}return i}
function ta(){var a=m.document.head||m.document.getElementsByTagName("head")[0],b=m.document.createElement("style");b.id="chartbeat-flicker-control-style";b.type="text/css";b.styleSheet?b.styleSheet.cssText="body { visibility: hidden !important; }":b.appendChild(document.createTextNode("body { visibility: hidden !important; }"));a.appendChild(b)}function S(){return m.document.getElementById("chartbeat-flicker-control-style")||m.document.getElementById("chartbeat-body-hider")}
function ua(){var a=S();a&&a.parentNode.removeChild(a)}function R(a,b,c,d,e){this.e=a;this.z=b;this.F=c;this.h=d;this.n=e;this.i=l}function Q(a,b,c){this.e=a;this.B=b;this.content=c}function va(a){var b={};b.s=a.status;b.c=a.code;b.m=a.message;var c=k;if(a.data!==k)c={},c.s=a.data.C,c.g=a.data.n,c.m=a.data.A;b.d=c;return b}function wa(a){if(m.document&&m.document.body)a();else var b=B(function(){m.document&&m.document.body&&(D(b),a())},50)};var xa=function(){var a=/^\*\[@id='(.+?)'\](?:\[@([a-z-]+)='(.*)'\])?$/,b=/^([a-z][a-z0-9-]*)\[(\d+)\](?:\[@([a-z-]+)='(.*)'\])?$/;return function(c,d){var e=k;a:{for(var e=0,f=c.indexOf("/"),g=c.indexOf("'"),n=[];f!==-1;)if(g!==-1&&g<f){g=c.indexOf("'",g+1);if(g==-1){e=k;break a}f=c.indexOf("/",g+1);g=c.indexOf("'",g+1)}else n.push(c.substring(e,f)),e=f+1,f=c.indexOf("/",e);e<c.length&&n.push(c.substring(e,c.length));e=n}if(!e||e.length==0)return d?d:k;var j,o,x,v,C,g=e.shift();if(d)f=d;else{if(g===
"body")f=document.body;else{j=a.exec(g);if(!j)return k;f=document.getElementById(j[1]);if(!f)return k;o=j[2];j=j[3];if(o&&(o==="href"?f.href:f.getAttribute(o))!==j)return k}g=e.shift()}for(;u(g);){j=b.exec(g);if(!j)return k;g=j[1];n=parseInt(j[2],10);o=j[3];j=j[4];if(isNaN(n))return k;x=f.children;C=x.length;if(C===0)return k;for(v=0;v<C;v++){if(x[v].nodeName&&x[v].nodeName.toLowerCase()===g&&(n--,n===0)){f=x[v];if(o&&(o==="href"?f.href:f.getAttribute(o))!==j)return k;break}if(v===C-1)return k}g=
e.shift()}return f}}();function ya(a){this.r=a;this.q=[];var b=this.r,a=b.topStorageDomain,b=b.domain,c=m.location.hostname;this.G=a?a:sa(c,b)?b:c.replace(/^www\./,"");this.u=new I("_t_");this.j=T}
function za(a,b,c){var d=a.u.a("tests"),e={};d.length>0&&(e=p(d));a.q=oa(b,c,e);var f=a.q,g={domain:"."+a.G,t:6E4,path:"/"};a.l=function(a){var b,a=a||window.event;if(b=!a?k:ia(a.target||a.srcElement))if(a=Aa(b,f),a.length){var c;if(b===k||typeof b==="undefined")c="unknown";else if(b.tagName==="A"&&b.href)c=b.href;c=ra(c,a[0].n,a);a=(a=G.a("_chartbeat6"))?a.split("::"):[];a.length>=10&&a.splice(0,a.length-10+1);a.push(c);c="_chartbeat6="+a.join("::");a="";g&&g.constructor===Object&&(g.t&&(b=new Date,
b.setTime(b.getTime()+g.t),a+="; expires="+b.toGMTString()),g.domain&&(a+="; domain="+g.domain),g.path&&(a+="; path="+g.path));document.cookie=c+a}};a=t(function(){var a=this.l,b=m.document.body;b.addEventListener?b.addEventListener("click",a,i):b.attachEvent&&b.attachEvent("onclick",a);Ba(this,f)},a);wa(a)}function Ba(a,b){var c=y(),d=t(function(){var a=y()-c>=5E3,d=m.document.readyState==="complete",g;a||(g=Ca(b));if(a||g||d)D(this.p),Da(this)},a);a.p=B(d,50);d()}
function Da(a){ua();var b={},c=[],d=l,e="m";z(a.q,function(a){if(a.e==="lift_exp")e=a.h.e;a.i?(d=i,b[a.e]=a.h.e):c.push(a.e)});d&&a.u.create("tests",ca(b),3600);var f={status:Ea,data:k,code:h,message:h};a.j!==T?(f.status=Fa,f.code=a.j):(a={C:b,n:e,A:c},f.status=Ga,f.data=a);K(["t",va(f)])}function Ha(a){var b=a.r;K(["v",function(){a.terminate();Ia(a,b)}])}function Ja(a){a.j=Ka;Da(a)}
ya.prototype.terminate=function(){this.j=T;var a=this.l,b=m.document.body;b.removeEventListener?b.removeEventListener("click",a,i):b.detachEvent&&b.detachEvent("onclick",a);this.l=h;D(this.p);this.K=this.p=k};function Ia(a,b){Ha(a);if(H.a("_cb_mab")==="1")Ja(a);else{var c=ma(b);if(u(c))u(b.flickerControl)||(b.flickerControl=i),b.flickerControl&&(E(ua,1E3),S()||ta()),na(c,function(b,c){za(a,b,c)},function(){})}}
function Ca(a){var b=i;z(a,function(a){if(!a.i){var d=xa(a.z);if(d)var e=xa(a.F,d);if(!d||!e)b=l;else{var f=a.h.content,g;if("textContent"in e)e.textContent=f;else{for(g=e.firstChild;g;)e.removeChild(g),g=e.firstChild;e.appendChild(m.document.createTextNode(f))}a.anchor=d;a.i=i}}});return b}
function Aa(a,b){var c=[],d,e=101,f=l;z(b,function(b){if(b.e==="lift_exp")c.push(b);else if(!f)if(b.anchor===a)d=b,f=i;else if(b.anchor.href===a.href){var n;var j=b.anchor.getBoundingClientRect(),o=a.getBoundingClientRect();j.right-j.left>0&&j.bottom-j.top>0&&o.right-o.left>0&&o.bottom-o.top>0?(n=Math.max(j.left,o.left)-Math.min(j.right,o.right),j=Math.max(j.top,o.top)-Math.min(j.bottom,o.bottom),n=n<=0?Math.max(j,0):j<=0?n:Math.sqrt(n*n+j*j)):n=h;n<e&&(d=b,e=n)}});d&&c.push(d);return c}
var T=0,Ka=2,Ga="s",Fa="e",Ea="f";var U=m._sf_async_config;U.domain=U.domain||m.location.hostname;U.domain=U.domain.replace(/^www\./,"");var V;a:{var W=k;if(U.useCanonical&&(W=ka())){V=W;break a}var X=m.location,W=L(X.pathname),Y=X.search||"",Y=Y.replace(/PHPSESSID=[^&]+/,""),Z=/&utm_[^=]+=[^&]+/ig,$=Z.exec(X.search);$&&(Y=Y.replace(Z,""));Z=/\?utm_[^=]+=[^&]+(.*)/i;($=Z.exec(Y))&&(Y=Y.replace(Z,$[1]!=""?"?"+$[1]:""));V=W+Y}U.path=U.path||V;var La=new ya(U);Ia(La,U);})();
