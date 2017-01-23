var gfkSstApiConf = {"version":"3","suiApiUrl":"config.sensic.net\/suiapi.js","forceImpressionTime":3,"tech":"sst-w","systemParams":{"version":true,"useragent":true,"referer":true,"os":true,"lang":true},"enabled":true,"project":"pbi-org-pl","projectVersion":"1.3","trackingUrl":"pl1-sst.sensic.net","dnt":false,"panelCookie":[{"cookie":"MEPP"}]};!function(w,d,n,pConf,tagConf,tag,nil){"use strict";w.gfkSstApi={VERSION:"1.7.3",AUTHOR:"dominik.gorczyca@gfk.com",SUI:"__gSUI__",PID:"__gSP__",init:function(){if(this.isEnabled()!==!1){var a=this;try{this.storage=w.localStorage}catch(b){this.storage={getItem:function(b){return a[b]},removeItem:function(b){return a[b]},setItem:function(b,c){a[b]=c}}}this.imp=0,this.protocol=d.location.protocol||"http:";var c=this.getSui();this.isSuiValid(c)?this.autoImpression(tagConf.content):(this.loadSuiAPI(),setTimeout(function(){a.autoImpression(tagConf.content)},1e3*pConf.forceImpressionTime))}},client:function(a,b){var c=null;w.XDomainRequest||(c=new XMLHttpRequest,c.open("POST",a,!0),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(b))},isEnabled:function(){var a=0;return pConf.dnt===!0&&(a=n.msDoNotTrack||w.doNotTrack||n.doNotTrack),1!=a&&pConf.enabled},createParams:function(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=this.encode(c,a[c]));return b=b.substring(0,b.length-1)},getUserAgent:function(){return n.userAgent},encode:function(a,b){return a+"="+encodeURIComponent(b)+"&"},getSystemParams:function(){var a={};return a.m=tagConf.media,a.p=pConf.project,a.t=pConf.tech,a.cu=this.getSui(),a.pu=this.getPanel(),pConf.systemParams.useragent&&(a.ua=this.getUserAgent()),pConf.systemParams.version&&(a.v=this.buildversion()),pConf.systemParams.referer&&(a.r=w.location.href),pConf.systemParams.lang&&(a.l=n.language||n.userLanguage),pConf.systemParams.os&&(a.o=n.oscpu||n.platform),a},buildversion:function(){return pConf.projectVersion+"/"+this.VERSION+"/"+pConf.version},setPanel:function(a){var b="";if(typeof a!==nil){for(var c=0,d=pConf.panelCookie.length;d>c;++c){var e=this.getCookie(pConf.panelCookie[c].cookie,a);e&&(b+='"'+pConf.panelCookie[c].cookie+'":"'+e+'",')}b=b.substring(0,b.length-1)}this.setLS(this.PID,"{"+b+"}")},getContent:function(a){if(typeof a==nil)if(typeof this.lastContent==nil){if(typeof tagConf.content==nil)return;a=tagConf.content}else a=this.lastContent;return this.lastContent=a,a},setLS:function(a,b){typeof b==nil&&(b=""),this.storage.setItem(a,b)},getLS:function(a){return this.storage.getItem(a)||""},removeLS:function(a){this.storage.removeItem(a)},getPanel:function(){return this.getLS(this.PID)},getCookie:function(a,b){for(var c=b.split(";"),d={},e=0;e<c.length;++e){var f=c[e].split("=");f[0]=f[0].replace(/\s/g,""),d[f[0]]=f[1]}return d[a]||null},debug:function(a,b){var c={trackingUrl:a,encodedParamString:this.createParams(b),params:b};console.info(c)},autoImpression:function(a){this.isAutoRequest()&&1!=this.imp&&(this.imp=1,this.addImpression(a)),this.process()},impression:function(a){return a=this.getContent(a),typeof a==nil?void(tagConf.debug&&console.error("missing content id!")):(this.addImpression(a),void this.process())},isAutoRequest:function(){return"manually"!==tagConf.impression},getSui:function(){var a=this.getLS(this.SUI);return a},setSui:function(a){this.setLS(this.SUI,a)},unsetSui:function(){this.removeLS(this.SUI)},process:function(){if(this.isEnabled()!==!1)for(var a=this.lengthImpressions()-1;a>=0;a--){var b=this.getImpression(),c=this.getSystemParams();c.c=b,tagConf.debug?this.debug(this.protocol+pConf.trackingUrl,c):this.client(this.protocol+"//"+pConf.trackingUrl,this.createParams(c))}},addImpression:function(a){tag.queue.push(a)},getImpression:function(){return tag.queue.shift()},lengthImpressions:function(){return tag.queue.length},isSuiValid:function(sui){var suiStored={};try{if(suiStored=eval("("+sui+")"),!suiStored.lt)throw!0}catch(e){return!1}var curDate=Math.floor((new Date).getTime()/1e3);return suiStored.lt<curDate?!1:!0},loadSuiAPI:function(){var a=d.getElementsByTagName("script")[0],b=d.createElement("script");b.type="text/javascript",b.src="//"+pConf.suiApiUrl;var c=this;b.readyState?b.onreadystatechange=function(){("loaded"===b.readyState||"complete"===b.readyState)&&(b.onreadystatechange=null,c.processSui())}:b.onload=this.processSui,a?a.parentNode.insertBefore(b,a):d.body&&d.body.appendChild(b)},processSui:function(){SuiApi.init(function(a){var b=SuiApi.objectToJsonString(a);gfkSstApi.unsetSui();try{gfkSstApi.setPanel(a.c)}catch(c){console.info("kein cookie")}gfkSstApi.setSui(b),gfkSstApi.autoImpression(tagConf.content)},{cookie:pConf.panelCookie[0].cookie})}},gfkSstApi.init()}(window,document,navigator,gfkSstApiConf,gfkSstConf,gfkSst,"undefined");