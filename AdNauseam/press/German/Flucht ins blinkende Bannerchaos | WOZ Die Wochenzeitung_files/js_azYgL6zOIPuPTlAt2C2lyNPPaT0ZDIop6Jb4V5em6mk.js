if(typeof Drupal!=="undefined"&&typeof jQuery!=="undefined"){(function(e){Drupal.behaviors.picture={attach:function(t){if(!("HTMLPictureElement"in window)){var n=e(t).find("img");if(n.length){window.picturefill({elements:n.get()})}}if(t==="#cboxLoadedContent"&&e(t).find("picture").length){e.colorbox.resize();e("img",t).once("colorbox-lazy-load",function(){e(this).load(function(){this.style.maxHeight=e(window).height()+"px";this.style.maxWidth=e(window).width()+"px";e.colorbox.resize({innerHeight:this.height,innerWidth:this.width});this.style.maxHeight=null;this.style.maxWidth=null})})}}}})(jQuery)}
;
/*
--------------------------------------------------------------------------
(c) 2007 Lawrence Akka
 - jquery version of the spamspan code (c) 2006 SpamSpan (www.spamspan.com)

This program is distributed under the terms of the GNU General Public
Licence version 2, available at http://www.gnu.org/licenses/gpl.txt
--------------------------------------------------------------------------
*/

(function ($) { //Standard drupal jQuery wrapper.  See http://drupal.org/update/modules/6/7#javascript_compatibility
// load SpamSpan
Drupal.behaviors.spamspan = {
  attach: function(context, settings) {
    // get each span with class spamspan
    $("span.spamspan", context).each(function (index) {
      // Replace each <spam class="t"></spam> with .
      if ($('span.t', this).length) {
        $('span.t', this).replaceWith('.');
      }
      
      // For each selected span, set mail to the relevant value, removing spaces
      var _mail = ($("span.u", this).text() +
        "@" +
        $("span.d", this).text())
        .replace(/\s+/g, '');
      // Find the header text, and remove the round brackets from the start and end
      var _headerText = $("span.h", this).text().replace(/^ ?\((.*)\) ?$/, "$1");
      // split into individual headers, and return as an array of header=value pairs
      var _headers = $.map(_headerText.split(/, /), function(n, i){
        return (n.replace(/: /,"="));
      });
      // Find the anchor text, and remove the round brackets from the start and end
      var _anchorText = $("span.t", this).text().replace(/^ \((.*)\)$/, "$1");
      // Build the mailto URI
      var _mailto = "mailto:" + encodeURIComponent(_mail);
      var _headerstring = _headers.join('&');
      _mailto += _headerstring ? ("?" + _headerstring) : '';
      // create the <a> element, and replace the original span contents
      // Issue https://www.drupal.org/node/1540732
      // .attr("href", _mailto) replaced by .attr("href", decodeURIComponent(_mailto))
      $(this).after(
        $("<a></a>")
          .attr("href", decodeURIComponent(_mailto))
          .html(_anchorText ? _anchorText : _mail)
          .addClass("spamspan")
      ).remove();
    });
  }
};
}) (jQuery);;
(function ($) {

Drupal.extlink = Drupal.extlink || {};

Drupal.extlink.attach = function (context, settings) {
  if (!settings.hasOwnProperty('extlink')) {
    return;
  }

  // Strip the host name down, removing ports, subdomains, or www.
  var pattern = /^(([^\/:]+?\.)*)([^\.:]{4,})((\.[a-z]{1,4})*)(:[0-9]{1,5})?$/;
  var host = window.location.host.replace(pattern, '$3$4');
  var subdomain = window.location.host.replace(pattern, '$1');

  // Determine what subdomains are considered internal.
  var subdomains;
  if (settings.extlink.extSubdomains) {
    subdomains = "([^/]*\\.)?";
  }
  else if (subdomain == 'www.' || subdomain == '') {
    subdomains = "(www\\.)?";
  }
  else {
    subdomains = subdomain.replace(".", "\\.");
  }

  // Build regular expressions that define an internal link.
  var internal_link = new RegExp("^https?://" + subdomains + host, "i");

  // Extra internal link matching.
  var extInclude = false;
  if (settings.extlink.extInclude) {
    extInclude = new RegExp(settings.extlink.extInclude.replace(/\\/, '\\'), "i");
  }

  // Extra external link matching.
  var extExclude = false;
  if (settings.extlink.extExclude) {
    extExclude = new RegExp(settings.extlink.extExclude.replace(/\\/, '\\'), "i");
  }

  // Extra external link CSS selector exclusion.
  var extCssExclude = false;
  if (settings.extlink.extCssExclude) {
    extCssExclude = settings.extlink.extCssExclude;
  }

  // Extra external link CSS selector explicit.
  var extCssExplicit = false;
  if (settings.extlink.extCssExplicit) {
    extCssExplicit = settings.extlink.extCssExplicit;
  }

  // Find all links which are NOT internal and begin with http as opposed
  // to ftp://, javascript:, etc. other kinds of links.
  // When operating on the 'this' variable, the host has been appended to
  // all links by the browser, even local ones.
  // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
  // available in jQuery 1.0 (Drupal 5 default).
  var external_links = new Array();
  var mailto_links = new Array();
  $("a:not(." + settings.extlink.extClass + ", ." + settings.extlink.mailtoClass + "), area:not(." + settings.extlink.extClass + ", ." + settings.extlink.mailtoClass + ")", context).each(function(el) {
    try {
      var url = this.href.toLowerCase();
      if (url.indexOf('http') == 0
        && ((!url.match(internal_link) && !(extExclude && url.match(extExclude))) || (extInclude && url.match(extInclude)))
        && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
        && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
        external_links.push(this);
      }
      // Do not include area tags with begin with mailto: (this prohibits
      // icons from being added to image-maps).
      else if (this.tagName != 'AREA' 
        && url.indexOf('mailto:') == 0 
        && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
        && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
        mailto_links.push(this);
      }
    }
    // IE7 throws errors often when dealing with irregular links, such as:
    // <a href="node/10"></a> Empty tags.
    // <a href="http://user:pass@example.com">example</a> User:pass syntax.
    catch (error) {
      return false;
    }
  });

  if (settings.extlink.extClass) {
    Drupal.extlink.applyClassAndSpan(external_links, settings.extlink.extClass);
  }

  if (settings.extlink.mailtoClass) {
    Drupal.extlink.applyClassAndSpan(mailto_links, settings.extlink.mailtoClass);
  }

  if (settings.extlink.extTarget) {
    // Apply the target attribute to all links.
    $(external_links).attr('target', settings.extlink.extTarget);
  }

  Drupal.extlink = Drupal.extlink || {};

  // Set up default click function for the external links popup. This should be
  // overridden by modules wanting to alter the popup.
  Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function() {
    if (settings.extlink.extAlert) {
      return confirm(settings.extlink.extAlertText);
    }
   }

  $(external_links).click(function(e) {
    return Drupal.extlink.popupClickHandler(e);
  });
};

/**
 * Apply a class and a trailing <span> to all links not containing images.
 *
 * @param links
 *   An array of DOM elements representing the links.
 * @param class_name
 *   The class to apply to the links.
 */
Drupal.extlink.applyClassAndSpan = function (links, class_name) {
  var $links_to_process;
  if (Drupal.settings.extlink.extImgClass){
    $links_to_process = $(links);
  }
  else {
    var links_with_images = $(links).find('img').parents('a');
    $links_to_process = $(links).not(links_with_images);
  }
  $links_to_process.addClass(class_name);
  var i;
  var length = $links_to_process.length;
  for (i = 0; i < length; i++) {
    var $link = $($links_to_process[i]);
    if ($link.css('display') == 'inline' || $link.css('display') == 'inline-block') {
      if (class_name == Drupal.settings.extlink.mailtoClass) {
        $link.append('<span class="' + class_name + '"><span class="element-invisible"> ' + Drupal.settings.extlink.mailtoLabel + '</span></span>');
      }
      else {
        $link.append('<span class="' + class_name + '"><span class="element-invisible"> ' + Drupal.settings.extlink.extLabel + '</span></span>');
      }
    }
  }
};

Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
Drupal.behaviors.extlink.attach = function (context, settings) {
  // Backwards compatibility, for the benefit of modules overriding extlink
  // functionality by defining an "extlinkAttach" global function.
  if (typeof extlinkAttach === 'function') {
    extlinkAttach(context);
  }
  else {
    Drupal.extlink.attach(context, settings);
  }
};

})(jQuery);
;
