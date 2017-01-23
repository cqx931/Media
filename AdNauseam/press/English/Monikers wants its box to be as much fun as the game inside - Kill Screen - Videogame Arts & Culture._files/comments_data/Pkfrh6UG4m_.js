/*!CK:2481691429!*//*1445827765,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["SNFeb"]); }

__d("VideoPlayerReason",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={AUTOPLAY:"autoplay_initiated",USER:"user_initiated",PAGE_VISIBILITY:"page_visibility_initiated",SEEK:"seek_initiated",LOOP:"loop_initiated",EMBEDDED_VIDEO_API:"embedded_video_api_initiated",CONNECTION:"host-connection-error",VIDEO_DATA_REPLACED:"video_data_replaced",VOD_NOT_READY:"vod_not_ready",VIDEO_DATA_SWITCH:"video_data_switch"};},null,{});
__d('escapeJSQuotes',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){if(typeof i=='undefined'||i==null||!i.valueOf())return '';return i.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}f.exports=h;},null);
__d('IntlRomanicNumberType',['IntlVariations'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={getNumberVariationType:function(j){if(j===0||j===1){return h.NUMBER_SINGULAR;}else return h.NUMBER_PLURAL;}};f.exports=i;},null);
__d('HistoryManager',['Cookie','Env','Event','URI','UserAgent_DEPRECATED','isFacebookURI','emptyFunction','goOrReplace','isInIframe','setIntervalAcrossTransitions','SessionName'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();c('SessionName');var r={history:null,current:0,fragment:null,isInitialized:function(){return !!r._initialized;},init:function(){if(!i.ALLOW_TRANSITION_IN_IFRAME&&p())return;if(r._initialized)return r;var s=new k(window.location.href),t=s.getFragment()||'';if(t.charAt(0)==='!'){t=t.substr(1);s.setFragment(t);}Object.assign(r,{_initialized:true,fragment:t,orig_fragment:t,history:[s],callbacks:[],lastChanged:Date.now(),canonical:new k('#'),user:0,enabled:true,debug:n});if(window.history&&history.pushState){this.lastURI=document.URL;window.history.replaceState(this.lastURI,null);j.listen(window,'popstate',(function(u){var v=u&&u.state&&typeof u.state==='string';if(v&&r.lastURI!=u.state){r.lastURI=u.state;r.lastChanged=Date.now();r.notify(new k(u.state).getUnqualifiedURI().toString());}}).bind(r));if(l.webkit()<534||l.chrome()<=13){q(r.checkURI,42);r._updateRefererURI(this.lastURI);}return r;}r._updateRefererURI(k.getRequestURI(false));if(l.webkit()<500||l.firefox()<2){r.enabled=false;return r;}if('onhashchange' in window){j.listen(window,'hashchange',function(){setTimeout(r.checkURI.bind(r),0);});}else q(r.checkURI,42);return r;},registerURIHandler:function(s){r.callbacks.push(s);return r;},setCanonicalLocation:function(s){r.canonical=new k(s);return r;},notify:function(s){if(s==r.orig_fragment)s=r.canonical.getFragment();for(var t=0;t<r.callbacks.length;t++)try{if(r.callbacks[t](s))return true;}catch(u){}return false;},checkURI:function(){if(Date.now()-r.lastChanged<400)return;if(window.history&&history.pushState){var s=new k(document.URL).removeQueryData('ref').toString(),t=new k(r.lastURI).removeQueryData('ref').toString();if(s!=t){r.lastChanged=Date.now();r.lastURI=s;if(l.webkit()<534)r._updateRefererURI(s);r.notify(new k(s).getUnqualifiedURI().toString());}return;}if(l.webkit()&&window.history.length==200){if(!r.warned)r.warned=true;return;}var u=new k(window.location.href).getFragment();if(u.charAt(0)=='!')u=u.substr(1);u=u.replace(/%23/g,'#');if(u!=r.fragment.replace(/%23/g,'#')){r.debug([u,' vs ',r.fragment,'whl: ',window.history.length,'QHL: ',r.history.length].join(' '));for(var v=r.history.length-1;v>=0;--v)if(r.history[v].getFragment().replace(/%23/g,'#')==u)break;++r.user;if(v>=0){r.go(v-r.current);}else r.go('#'+u);--r.user;}},_updateRefererURI:function(s){s=s.toString();if(s.charAt(0)!='/'&&s.indexOf('//')==-1)return;var t=new k(window.location);if(m(t)){var u=t.getPath()+window.location.search;}else var u='';var v=new k(s).getQualifiedURI().setFragment(u).toString(),w=2048;if(v.length>w)v=v.substring(0,w)+'...';h.set('x-referer',v);},go:function(s,t,u){if(window.history&&history.pushState){t||typeof s=='number';var v=new k(s).removeQueryData('ref').toString();r.lastChanged=Date.now();this.lastURI=v;if(u){window.history.replaceState(s,null,v);}else window.history.pushState(s,null,v);if(l.webkit()<534)r._updateRefererURI(s);return false;}r.debug('go: '+s);if(t===undefined)t=true;if(!r.enabled)if(!t)return false;if(typeof s=='number'){if(!s)return false;var w=s+r.current,x=Math.max(0,Math.min(r.history.length-1,w));r.current=x;w=r.history[x].getFragment()||r.orig_fragment;w=new k(w).removeQueryData('ref').getUnqualifiedURI().toString();r.fragment=w;r.lastChanged=Date.now();if(!r.user)o(window.location,window.location.href.split('#')[0]+'#!'+w,u);if(t)r.notify(w);r._updateRefererURI(w);return false;}s=new k(s);if(s.getDomain()==new k(window.location.href).getDomain())s=new k('#'+s.getUnqualifiedURI());var y=r.history[r.current].getFragment(),z=s.getFragment();if(z==y||y==r.orig_fragment&&z==r.canonical.getFragment()){if(t)r.notify(z);r._updateRefererURI(z);return false;}if(u)r.current--;var aa=r.history.length-r.current-1;r.history.splice(r.current+1,aa);r.history.push(new k(s));return r.go(1,t,u);},getCurrentFragment:function(){var s=k.getRequestURI(false).getFragment();return s==r.orig_fragment?r.canonical.getFragment():s;}};f.exports=r;},null);
__d('PageTransitions',['Arbiter','Bootloader','BusyUIManager','DOMQuery','DOMScroll','Env','Event','HistoryManager','JSLogger','LayerHideOnEscape','ModalLayer','PageHooks','PageTransitionsConfig','PageTransitionsRegistrar','React','ScriptPath','URI','Vector','areEqual','clickRefAction','escapeJSQuotes','ge','goOrReplace','invariant','isInIframe','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga){if(c.__markCompiled)c.__markCompiled();var ha={};function ia(ma,na){ha[ma.getUnqualifiedURI()]=na;}function ja(ma){return ha[ma.getUnqualifiedURI()];}function ka(ma){delete ha[ma.getUnqualifiedURI()];}var la={_scroll_locked:false,_transitions_disabled:false,isInitialized:function(){return !!la._initialized;},_init:function(){if(!m.ALLOW_TRANSITION_IN_IFRAME&&fa())return;if(la._initialized)return la;var ma=u.getMostRecentURI();la._current_uri=ma;la._most_recent_uri=ma;la._next_uri=ma;la._initialized=true;var na,oa=x.getRequestURI(false);if(oa.getFragment().startsWith('/')){na=oa.getFragment();}else na=ma;o.init().setCanonicalLocation('#'+na).registerURIHandler(la._historyManagerHandler);n.listen(window,'scroll',function(){if(!la._scroll_locked)ia(la._current_uri,y.getScrollPosition());});return la;},registerHandler:u.registerHandler,removeHandler:u.removeHandler,getCurrentURI:function(ma){this._init();if(!la._current_uri&&!ma)return new x(la._most_recent_uri);return new x(la._current_uri);},getMostRecentURI:function(){this._init();return new x(la._most_recent_uri);},go:function(ma,na){this._init();var oa=new x(ma).removeQueryData('quickling').getQualifiedURI();p.create('pagetransition').debug('go',{uri:oa.toString()});ka(oa);!na&&aa('uri',{href:oa.toString()},null,'INDIRECT');j.lookBusy();la._loadPage(oa,function(pa){if(pa){r.unfixed(function(){o.go(oa.toString(),false,na);});}else da(window.location,oa,na);});},_historyManagerHandler:function(ma){if(ma.charAt(0)!='/')return false;aa('h',{href:ma});if(!w.getClickPointInfo())w.setClickPointInfo({click:'back'});la._loadPage(new x(ma),function(na){if(!na)da(window.location,ma,true);});return true;},_loadPage:function(ma,na){if(new x(ma).getFragment()&&z(new x(ma).setFragment(null).getQualifiedURI(),new x(la._current_uri).setFragment(null).getQualifiedURI())){h.inform("pre_page_fragment_transition",{from:new x(la._current_uri).getFragment(),to:new x(ma).getFragment()});if(la.restoreScrollPosition(ma)){la._current_uri=la._most_recent_uri=ma;j.stopLookingBusy();h.inform("page_fragment_transition",{fragment:new x(ma).getFragment()});return;}}var oa;if(la._current_uri)oa=ja(la._current_uri);var pa=function(){if(oa&&la._current_uri)ia(la._current_uri,oa);la._current_uri=null;la._next_uri=ma;if(oa)l.scrollTo(oa,false);la._scroll_locked=true;var sa=la._handleTransition(ma);na&&na(sa);},qa=la._next_uri;la._next_uri=ma;var ra=s.runHooks('onbeforeleavehooks');la._next_uri=qa;if(ra){j.stopLookingBusy();la._warnBeforeLeaving(ra,pa);}else pa();},_handleTransition:function(ma){window.onbeforeleavehooks=undefined;j.lookBusy();if(la._transitions_disabled||!ma.isSameOrigin())return false;var na=t.reloadOnBootloadError&&this._hasBootloadErrors();if(na)return false;var oa,pa=b.AsyncRequest;if(pa)oa=pa.getLastID();h.inform("pre_page_transition",{from:la.getMostRecentURI(),to:ma});var qa=u._getTransitionHandlers();for(var ra=qa.length-1;ra>=0;--ra){var sa=qa[ra];if(!sa)continue;for(var ta=sa.length-1;ta>=0;--ta)if(sa[ta](ma)===true){var ua={sender:this,uri:ma,id:oa};try{h.inform("page_transition",ua);}catch(va){}return true;}else sa.splice(ta,1);}return false;},disableTransitions:function(){la._transitions_disabled=true;},_hasBootloadErrors:function(){return i.getErrorUrls().length>0;},unifyURI:function(){this._init();la._current_uri=la._most_recent_uri=la._next_uri;},transitionComplete:function(ma){this._init();la._scroll_locked=false;la._executeCompletionCallbacks();j.stopLookingBusy();la.unifyURI();if(!ma)la.restoreScrollPosition(la._current_uri);try{if(document.activeElement&&document.activeElement.nodeName==='A')document.activeElement.blur();}catch(na){}},_executeCompletionCallbacks:function(){var ma=u._getCompletionCallbacks();if(ma.length>0){u._resetCompletionCallbacks();ma.forEach(function(na){return na();});}},registerCompletionCallback:u.registerCompletionCallback,rewriteCurrentURI:function(ma,na){this._init();var oa=u._getTransitionHandlers(),pa=oa.length||1,qa=false;u.registerHandler(function(){if(ma==la.getMostRecentURI().getUnqualifiedURI().toString()){la.transitionComplete();return true;}qa=true;},pa);la.go(na,true);!(oa.length===pa+1&&oa[pa].length===(qa?0:1))?ea(0):undefined;oa.length=pa;},_warnBeforeLeaving:function(ma,na){i.loadModules(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],function(oa,pa,qa,ra,sa,ta){var ua=new oa({width:450,addedBehaviors:[q]},v.createElement('div',null,v.createElement(pa,{showCloseButton:false},ga._("Leave Page?")),v.createElement(qa,null,v.createElement(ta,{shade:'medium',size:'medium'},ma)),v.createElement(sa,null,v.createElement(ra,{action:'cancel',label:ga._("Stay on This Page")}),v.createElement(ra,{action:'confirm',use:'confirm',label:ga._("Leave This Page")}))));ua.subscribe('confirm',function(){ua.hide();na();});ua.show();});},restoreScrollPosition:function(ma){var na=ja(ma);if(na){l.scrollTo(na,false);return true;}function oa(ra){if(!ra)return null;var sa="a[name='"+ba(ra)+"']";return k.scry(document.body,sa)[0]||ca(ra);}var pa=oa(new x(ma).getFragment());if(pa){var qa=y.getElementPosition(pa);qa.x=0;l.scrollTo(qa);return true;}return false;}};f.exports=la;b.PageTransitions=la;},null);
__d('EventPermalinkURISetter',['BusinessURI.brands','PageTransitions'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={setURI:function(k){if(window.location.search!=='')window.history.replaceState({event_id:k},document.title,h(window.location.pathname).toString());},initHandler:function(){window.onpopstate=function(k){if(k.state&&k.state.subpath)i.go(k.state.subpath,true);};}};f.exports=j;},null);
__d('FullScreen',['Event','Arbiter','CSS','UserAgent','UserAgent_DEPRECATED','throttle','Keys'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={},p=false,q=function(v){if(h.getKeyCode(v)===n.ESC)v.stopPropagation();},r=function(){if(!p){document.addEventListener('keydown',q,true);p=true;}},s=function(){if(p){document.removeEventListener('keydown',q,true);p=false;}},t=Object.assign(new i(),{listenForEvent:function(v){var w=m(this.onChange,0,this);if(!o[v.id]){o[v.id]=true;h.listen(v,{webkitfullscreenchange:w,mozfullscreenchange:w,MSFullscreenChange:w,fullscreenchange:w});}},enableFullScreen:function(v){this.listenForEvent(v);if(v.webkitRequestFullScreen){if(l.chrome()){v.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);}else v.webkitRequestFullScreen();}else if(v.mozRequestFullScreen){v.mozRequestFullScreen();}else if(v.msRequestFullscreen){r();v.msRequestFullscreen();}else if(v.requestFullScreen){v.requestFullScreen();}else return false;return true;},disableFullScreen:function(){if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}else if(document.cancelFullScreen){document.cancelFullScreen();}else if(document.exitFullScreen){document.exitFullScreen();}else return false;return true;},getFullScreenElement:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;},isFullScreen:function(){return document.webkitIsFullScreen||document.fullScreen||document.mozFullScreen||document.msFullscreenElement;},toggleFullScreen:function(v){if(this.isFullScreen()){this.disableFullScreen();return false;}else return this.enableFullScreen(v);return false;},onChange:function(){var v=this.isFullScreen();j.conditionClass(document.body,'fullScreen',v);this.inform('changed');if(!v)s();},isSupportedWithKeyboardInput:function(){return this.isSupported()&&!k.isBrowser('Safari');},isSupported:function(){var v=document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.fullscreenEnabled;return v||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.cancelFullScreen||document.exitFullScreen;}}),u=m(t.onChange,0,t);h.listen(document,{webkitfullscreenchange:u,mozfullscreenchange:u,MSFullscreenChange:u,fullscreenchange:u});f.exports=t;},null);
__d('PrivacySelectorNewDispatcher',['Dispatcher'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='selector',j=Object.assign(new h(),{handleUpdateFromSelector:function(k){this.dispatch(babelHelpers._extends({payloadSource:i},k));}});f.exports=j;},null);
__d("XAppFriendsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/games\/appfriends\/",{app_id:{type:"Int",required:true}});},null,{});
__d("XGamesLivePlayerCountAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/games\/async\/playercount\/",{app_ids:{type:"StringVector",required:true}});},null,{});
__d("XPrivacyCustomDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},tag_expansion_button:{type:"String"},__asyncDialog:{type:"Int"}});},null,{});