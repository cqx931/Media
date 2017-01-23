
/* Controltag Loader for Axel Springer */
(function(){
  var debugging = /kxdebug/.test(location);
  var log = function() {
    // It's a flag, so if it's there, then it means debug.
    debugging && window.console && console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = document.createElement('script');
    node.async = true;  // This is just to be friendly.
    node.src = url;

    // Connect to both in case we're in older IE.
    node.onload = node.onreadystatechange = function() {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  // Mark the callback, so we don't load it twice on accident.
        callback();
      }
    };

    // Fetch the first script element, so we can insert the
    // controltag before it. There *must* be at least one
    // script element, or this code would never be called
    var sibling = document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  // ControlTag simply crashes when opening a website from Twitter browser on
  // iOS, temporarily disable CT when Twitter for iPhone is detected until they
  // fix this (works fine with other twitter client though)
  if (/Twitter for iPhone/.test(window.navigator.userAgent || '')) return;

  var config = {"partner_segment_map": {}, "context_terms": [{"id": "J8anEqgg", "value": "familie"}, {"id": "J8anErIa", "value": "familien"}, {"id": "J8anEryV", "value": "familienauto"}, {"id": "J8anEsql", "value": "kinder"}, {"id": "J9pGLGKX", "value": "Stadtleben"}, {"id": "J9pGLGr6", "value": "Stadt leben"}, {"id": "J9pGLHLG", "value": "Gro\u00dfstadtleben"}, {"id": "J9pGLHzK", "value": "Untergrundbahn"}, {"id": "J9pGLIES", "value": "U-Bahn"}, {"id": "J9pGLIW_", "value": "Verkehr"}, {"id": "J9pGtuzd", "value": "haustier"}, {"id": "J9xJFrSo", "value": "Hundeh\u00fctte"}, {"id": "J9xJFr4H", "value": "Tierarzt"}, {"id": "J9xJFsuZ", "value": "Katze"}, {"id": "J9xJFs8m", "value": "K\u00e4tzchen"}, {"id": "J9xJTJNB", "value": "Hund"}, {"id": "J9xJbd_r", "value": "bmw"}, {"id": "J9xJbeT0", "value": "mercedes"}, {"id": "J9xJbfGj", "value": "benz"}, {"id": "J9xJbgEU", "value": "mercedes-benz"}, {"id": "J9xJbgwH", "value": "audi"}, {"id": "J9xJbhTc", "value": "opel"}, {"id": "J9xJbiHn", "value": "hyundai"}, {"id": "J9xJbizT", "value": "renault"}, {"id": "J9xJbjFY", "value": "seat"}, {"id": "J9xJbjh0", "value": "mazda"}, {"id": "J9xJbjx_", "value": "dacia"}, {"id": "J9xLjelE", "value": "H\u00fcndchen"}, {"id": "J9xR9iNi", "value": "mountainbiking"}, {"id": "J9xR9isv", "value": "mountainbiker"}, {"id": "J9xR9jOf", "value": "mountainbike"}, {"id": "J9xR9kEY", "value": "wandern"}, {"id": "J9xR9kqC", "value": "wanderer"}, {"id": "J9xR9lPh", "value": "camping"}, {"id": "J9xR9l7r", "value": "zelten"}, {"id": "J9xR9mZC", "value": "wohnwagen"}, {"id": "J9xR9ms-", "value": "zelte"}, {"id": "J9xWlp5I", "value": "citroen"}, {"id": "KARe1vnG", "value": "Abarth"}, {"id": "KARe1v7j", "value": "Alfa Romeo"}, {"id": "KARe1wd7", "value": "Fiat"}, {"id": "KARe1wxw", "value": "Ford"}, {"id": "KARe1xFp", "value": "Honda"}, {"id": "KARe1xZy", "value": "Infiniti"}, {"id": "KARe1xtm", "value": "Jaguar"}, {"id": "KARe1yBZ", "value": "Jeep"}, {"id": "KARe1yU8", "value": "Kia"}, {"id": "KARe1yoz", "value": "Lancia"}, {"id": "KARe1y81", "value": "Land Rover"}, {"id": "KARe1zQr", "value": "MINI"}, {"id": "KARe1zks", "value": "Maserati"}, {"id": "KARe1z4i", "value": "Mitsubishi"}, {"id": "KARe10MZ", "value": "Nissan"}, {"id": "KARe10gD", "value": "Peugeot"}, {"id": "KARe100E", "value": "Porsche"}, {"id": "KARe11IC", "value": "Skoda"}, {"id": "KARe11kP", "value": "Ssangyong"}, {"id": "KARe114b", "value": "Subaru"}, {"id": "KARe12MN", "value": "Suzuki"}, {"id": "KARe12gM", "value": "Toyota"}, {"id": "KARe120a", "value": "Volkswagen"}, {"id": "KARe13Ia", "value": "Volvo"}, {"id": "KARe13cX", "value": "smart"}, {"id": "KARhvTUu", "value": "Bayer 04 Leverkusen"}, {"id": "KARhvTom", "value": "Borussia Dortmund"}, {"id": "KARhvT8V", "value": "Borussia M\u00f6nchengladbach"}, {"id": "KARhvUQN", "value": "Eintracht Frankfurt"}, {"id": "KARhvUj7", "value": "FC Augsburg"}, {"id": "KARhvU3k", "value": "FC Bayern M\u00fcnchen"}, {"id": "KARhvVLN", "value": "FC Ingolstadt 04"}, {"id": "KARhvVfP", "value": "FC K\u00f6ln"}, {"id": "KARhvVzT", "value": "FC Schalke 04"}, {"id": "KARhvWHL", "value": "FSV Mainz 05"}, {"id": "KARhvWa5", "value": "Hamburger SV"}, {"id": "KARhvWxI", "value": "Hannover 96"}, {"id": "KARhvXFz", "value": "Hertha BSC"}, {"id": "KARhvXZm", "value": "SV Darmstadt 98"}, {"id": "KARhvXtf", "value": "TSG 1899 Hoffenheim"}, {"id": "KARhvYBN", "value": "VfB Stuttgart"}, {"id": "KARhvYVB", "value": "VfL Wolfsburg"}, {"id": "KARhvYos", "value": "Werder Bremen"}, {"id": "KAZum3A2", "value": "Geldanlage"}, {"id": "KAZum3J5", "value": "Zertifikate"}], "tags": [{"content": "<script>\r\n\r\n(function() {\r\n    (new Image()).src = \"//apiservices.krxd.net/um?partner=vdna&r=\" + window.location.protocol + \"//e.visualdna.com/conversion&_kdpid=8f95f20d-4acf-43fc-9832-3f5174a166cc\";\r\n})();\r\n\r\n</script>", "target": null, "target_action": "append", "require": "", "docwrite": null, "template_replacement": 1, "execution_results": null, "tier": 1, "internal": 12, "content_type": "html", "freq_cap": 3, "timing": "onload", "method": "document", "type": "data provider", "id": 67490, "name": "Visual DNA provider tag"}, {"content": "<script>// This tag empty by design. </script>", "target": null, "target_action": "append", "require": "", "docwrite": null, "template_replacement": 1, "execution_results": null, "tier": 1, "internal": 26, "content_type": "html", "freq_cap": 3, "timing": "onload", "method": "document", "type": "data provider", "id": 24739, "name": "Zanox provider tag"}, {"content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dtheadex%26partner_uid%3D%7B%7BUUID%7D%7D';         \r\n            var theadex_url = '//dmp.theadex.com/d/cm.gif?cb=' + kurl;\r\n            var i = new Image();\r\n            i.src = theadex_url;\r\n        }\r\n})();\r\n</script>", "target": "", "target_action": null, "require": "", "docwrite": null, "template_replacement": 1, "execution_results": {"onloadSafe": true, "docwrite": false, "listeners": []}, "tier": 1, "internal": 1, "content_type": "html", "freq_cap": 3, "timing": "onload", "method": "document", "type": "publisher", "id": 45324, "name": "The Adex User Matching"}, {"content": "<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: \"//loadm.exelator.com/load\",\r\n      data: {\r\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\r\n          buid: kuid,\r\n          p: '204',\r\n          g: '270',\r\n          j: '0'\r\n      }});\r\n  }\r\n  })();\r\n</script>", "target": "", "target_action": null, "require": "", "docwrite": null, "template_replacement": 1, "execution_results": null, "tier": 1, "internal": 11, "content_type": "html", "freq_cap": 3, "timing": "onload", "method": "document", "type": "data provider", "id": 29207, "name": "eXelate Media provider tag"}, {"content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = location.protocol;\r\n        if (kuid) {\r\n           var dxu_url = '//i.w55c.net/ping_match.gif?st=Krux&rurl=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=dataxu&uid=_wfivefivec_';\r\n           var i = new Image();\r\n           i.src = dxu_url;\r\n        }\r\n})();\r\n</script>", "target": "", "target_action": null, "require": "", "docwrite": null, "template_replacement": 1, "execution_results": null, "tier": 1, "internal": 1, "content_type": "html", "freq_cap": 3, "timing": "onload", "method": "document", "type": "publisher", "id": 28510, "name": "DataXu User Match"}, {"content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif';         \r\n            var abilicom_url = '//match.adrolays.de/matchrtb?ssp=6&partner_id=abilicom&redir=' + encodeURIComponent(kurl);\r\n            var i = new Image();\r\n            i.src = abilicom_url;\r\n        }\r\n})();\r\n</script>", "target": "", "target_action": null, "require": "", "docwrite": null, "template_replacement": 1, "execution_results": {"onloadSafe": true, "docwrite": false, "listeners": []}, "tier": 1, "internal": 1, "content_type": "html", "timing": "onload", "method": "document", "type": "publisher", "id": 31079, "name": "Abilicom User Match"}, {"content": "<img src=http://apiservices.krxd.net/um?partner=zanox&r=http://ad.zanox.com/sync/&cp=10034 />", "target": "", "target_action": null, "require": "", "docwrite": null, "template_replacement": 1, "execution_results": {"onloadSafe": true, "docwrite": false, "listeners": []}, "tier": 1, "internal": 1, "content_type": "html", "timing": "onload", "method": "document", "type": "publisher", "id": 23171, "name": "Zanox - Welt User Match"}, {"content": "<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid && typeof kuid != 'undefined') {\r\n      var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n      var r_url = prefix + '//cm.g.doubleclick.net/pixel'\r\n      var kurl = prefix + '//apiservices.krxd.net/um?partner=google&r=' + r_url;\r\n      var i = new Image();\r\n      i.src = kurl;\r\n  }\r\n})();\r\n</script>", "target": "", "target_action": null, "require": "", "docwrite": null, "template_replacement": 1, "execution_results": {"onloadSafe": true, "docwrite": false, "listeners": []}, "tier": 1, "internal": 1, "content_type": "html", "freq_cap": 3, "timing": "onload", "method": "document", "type": "publisher", "id": 31377, "name": "google user matching"}, {"content": "<script>\r\n(function(){\r\n\t/* referrer (HTTPS gives no referrer) */\r\n\tif(document.referrer){\r\n\t\t// log with no query string/hash (if given)\r\n\t\tvar doc_ref = document.referrer.replace(/\\?.*$/,'').replace(/\\#.*$/,'');\r\n\t\t// Krux('set','page_attr_doc_referrer',doc_ref);\r\n\t\t// log the domain\r\n\t\tvar doc_ref_domain = doc_ref.match(/^[htps]*:\\/\\/([^\\/]*)/);\r\n\t\tif(doc_ref_domain && doc_ref_domain[1]){\r\n\t\t\tKrux('set','page_attr_doc_referrer_domain',doc_ref_domain[1]);\r\n\t\t}\r\n\t}\r\n})();\r\n</script>", "target": "", "target_action": null, "require": "", "docwrite": null, "template_replacement": 1, "execution_results": {"onloadSafe": true, "docwrite": false, "listeners": []}, "tier": 1, "internal": 1, "content_type": "html", "timing": "onload", "method": "document", "type": "publisher", "id": 62407, "name": "DTC for referring urls"}, {"content": "<script type=\"text/javascript\">Krux('social.init');</script>", "target": "", "target_action": null, "require": "", "docwrite": null, "internal": 1, "template_replacement": 1, "execution_results": null, "tier": 1, "library_tag_config": {}, "content_type": "html", "timing": "onload", "method": "document", "type": "library", "id": 22474, "name": "Krux Track Social"}, {"content": "<script>\r\n// this tag is intentionally blank\r\n</script>", "target": "", "target_action": null, "require": "", "docwrite": null, "template_replacement": 1, "execution_results": null, "tier": 1, "internal": 6, "content_type": "html", "freq_cap": 3, "timing": "onload", "method": "document", "type": "data provider", "id": 22475, "name": "Technographic Data provider tag"}, {"content": "", "target": "", "target_action": null, "require": "", "docwrite": null, "template_replacement": 1, "execution_results": null, "tier": 1, "internal": 14, "content_type": "html", "freq_cap": 3, "timing": "onload", "method": "document", "id": 22476, "name": "Krux Geographic Data provider tag"}, {"content": "<script>\r\nKrux('scrape', { \"page_attr_url_path_1\": {url_path: \"1\"}});\r\nKrux('scrape', { \"page_attr_url_path_2\": {url_path: \"2\"}});\r\nKrux('scrape', { \"page_attr_url_path_3\": {url_path: \"3\"}});\r\nKrux('scrape', { \"page_attr_domain\": {url_domain: 2 }});\r\nKrux('scrape', { 'page_attr_keywords': {meta_name: 'keywords'}});\r\nvar subdomain=window.location.href.split(\"/\")[2].split(\".\")[0];\r\nKrux('set', 'page_attr_subdomain', subdomain);\r\nKrux('set',{\r\n    section:Krux('get','page_attr_url_path_1'),\r\n    subsection:Krux('get','page_attr_url_path_2') \r\n  });\r\n</script>", "target": "", "target_action": null, "require": "", "docwrite": null, "template_replacement": 1, "execution_results": {"onloadSafe": true, "docwrite": false, "listeners": []}, "tier": 1, "internal": 1, "content_type": "html", "timing": "onload", "method": "document", "type": "publisher", "id": 25555, "name": "Krux Data Transfer Code"}], "buckets": [], "publisher": {"uuid": "ba4aded1-8223-41d0-baad-68aed1201e18", "id": 11950, "name": "Axel Springer"}, "controltag_options": {"async": "true", "render": true}, "site": {"id": 14121, "name": "welt.de"}, "realtime_segments": [], "dnt": null, "params": {"connector_host": "connector.krxd.net", "first_party_uid": false, "control_tag_load_sync": "false", "userData_host": "cdn.krxd.net", "disable_http_compression": false, "remove_kxhead": "1", "supertag_requires_approval": false, "control_tag_namespace": null, "control_tag_stats_prefix": null, "beacon_host": "beacon-dub-nopii.krxd.net", "control_tag_pixel_throttle": "100", "store_realtime_segments": false, "user_id_cookie": null, "max_segments": null, "no_pii": "true", "recommend": false, "revenue_optimization": false, "context_terms": "true", "jslog_host": "jslog.krxd.net", "buckets": "", "site_level_supertag_config": "site", "max_slot_time": 1000, "services_host": "apiservices.krxd.net", "capture_leakage": true, "client_side_storage": "localStorage,cookie", "fingerprint": false, "config_source": 1, "control_tag_version": "stable", "capture_js_errors": "true", "datatag_version": "3", "dfp_premium": "true", "userdata_host": "cdn.krxd.net", "target_fingerprint": false}, "services": {"event": "//beacon-dub-nopii.krxd.net/event.gif", "impression": "//beacon-dub-nopii.krxd.net/ad_impression.gif", "stats": "//apiservices.krxd.net/stats", "log": "//jslog.krxd.net/jslog.gif", "optout": "//beacon-dub-nopii.krxd.net/optout_check", "um": "//apiservices.krxd.net/um", "pixel": "//beacon-dub-nopii.krxd.net/pixel.gif", "contentConnector": "//connector.krxd.net/content_connector/", "is_optout": "//beacon-dub-nopii.krxd.net/optout_check", "set_optin": "//apiservices.krxd.net/consumer/optin", "social": "//beacon-dub-nopii.krxd.net/social.gif", "set_optout": "//apiservices.krxd.net/consumer/optout", "userData": "//cdn.krxd.net/userdata/get", "data": "//beacon-dub-nopii.krxd.net/data.gif", "userdata": "//cdn.krxd.net/userdata/get", "addSegment": "//cdn.krxd.net/userdata/add"}, "no_pii": 1, "geo": {}, "segments": [], "confid": "IaeXdO9D"};

  // Wrap in a function and comment, then toString the func and replace
  // everything that's not the beginning or end of a JSON object, so we get a
  // string that's either empty or JSON.
  var esiGeo = String(function(){/*
    <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = window.JSON.parse(esiGeo);
    } catch (__) {
      // Couldn't parse, so setting to {}
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }

  
  
  

  load('//cdn.krxd.net/ctjs/controltag.js.875fd5b280a77e06def8c74a5a268e2c', function() {
    
    
    log('Loading krux configuration.');

    Krux('config', config);

    
  });
})();
