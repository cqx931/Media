/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-flexbox-flexboxlegacy-flexboxtweener-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],n=g[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function s(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?w.className.baseVal=n:w.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=a(_?"svg":"body"),e.fake=!0),e}function f(e,t,r,o){var s,i,f,u,d="modernizr",c=a("div"),p=l();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=o?o[r]:d+(r+1),c.appendChild(f);return s=a("style"),s.type="text/css",s.id="s"+d,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),i=t(c,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):c.parentNode.removeChild(c),!!i}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+u(n[o])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n,o,s){function l(){u&&(delete P.style,delete P.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=d(e,o);if(!r(f,"undefined"))return f}for(var u,p,m,h,v,y=["modernizr","tspan"];!P.style;)u=!0,P.modElem=a(y.shift()),P.style=P.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],v=P.style[h],i(h,"-")&&(h=c(h)),P.style[h]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?h:!0;try{P.style[h]=o}catch(g){}if(P.style[h]!=v)return l(),"pfx"==n?h:!0}return l(),!1}function m(e,n){return function(){return e.apply(n,arguments)}}function h(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?m(o,t||n):o);return!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?p(a,n,o,s):(a=(e+" "+T.join(i+" ")+i).split(" "),h(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var C=[],w=n.documentElement,_="svg"===w.nodeName.toLowerCase(),b="Moz O ms Webkit",S=x._config.usePrefixes?b.split(" "):[];x._cssomPrefixes=S;var E={elem:a("modernizr")};Modernizr._q.push(function(){delete E.elem});var P={style:E.elem.style};Modernizr._q.unshift(function(){delete P.style});var T=x._config.usePrefixes?b.toLowerCase().split(" "):[];x._domPrefixes=T,x.testAllProps=v,x.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),o(),s(C),delete x.addTest,delete x.addAsyncTest;for(var z=0;z<Modernizr._q.length;z++)Modernizr._q[z]();e.Modernizr=Modernizr}(window,document);