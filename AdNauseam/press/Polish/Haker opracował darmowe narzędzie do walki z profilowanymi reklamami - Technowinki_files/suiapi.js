!function(w,d){"use strict";w.SuiApi={VERSION:"1.2.0",url:"config.sensic.net/sui.html",AUTHOR:"dominik.gorczyca@gfk.com",sui:{},init:function(a,b){if(a&&"function"==typeof a){var c="";"object"==typeof b&&(c=this.buildQuery(b)),this.sensFrame(a,c)}},getSui:function(){return this.sui},makeObject:function(sui){try{return eval("("+sui+")")}catch(e){return eval("({})")}},buildQuery:function(a){var b="?";for(var c in a)a.hasOwnProperty(c)&&(b+=this.createParameterFromConfig(c,a[c]));return b.substring(0,b.length-1)},createParameterFromConfig:function(a,b){return a+"="+encodeURIComponent(b)+"&"},sensFrame:function(a,b){var c=d.createElement("iframe");c.src="//"+this.url+b,c.style.visibility="hidden",c.style.display="none",c.width=0,c.height=0,c.scrolling="no";var e=d.getElementsByTagName("script")[0];e?e.parentNode.insertBefore(c,e):d.body.appendChild(c),this.fetchSui(a)},fetchSui:function(a){w.addEventListener=w.addEventListener||function(a,b){w.attachEvent("on"+a,b)};var b=this;w.addEventListener("message",function(c){var d=b.getHostFromUri(b.url);if(c.origin==d){var e=c.data.substr(0,c.data.search("#=#")),f=b.makeObject(e);a(f)}},!1)},getHostFromUri:function(a){var b=(d.location.protocol||"http:")+"//",c=d.createElement("a");return c.href=b+a,c.protocol+"//"+c.hostname},objectToJsonString:function(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+='"'+c+'":"'+a[c]+'",');return"{"+b.substring(0,b.length-1)+"}"}}}(window,document);