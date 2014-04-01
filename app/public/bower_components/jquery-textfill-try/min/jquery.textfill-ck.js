/**
 * @preserve  textfill
 * @name      jquery.textfill.js
 * @author    Russ Painter
 * @author    Yu-Jie Lin
 * @version   0.4.0
 * @date      2013-08-16
 * @copyright (c) 2012-2013 Yu-Jie Lin
 * @copyright (c) 2009 Russ Painter
 * @license   MIT License
 * @homepage  https://github.com/jquery-textfill/jquery-textfill
 * @example   http://jquery-textfill.github.io/jquery-textfill/index.html
*/
!function(i){i.fn.textfill=function(e){function n(){o.debug&&"undefined"!=typeof console&&"undefined"!=typeof console.debug&&console.debug.apply(console,arguments)}function t(){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn.apply(console,arguments)}function s(i,e,t,s,l,c){function o(i,e){var n=" / ";return i>e?n=" > ":i==e&&(n=" = "),n}n(i+"texticulo:"+e+"font: "+e.css("font-size")+", H: "+e.height()+o(e.height(),t)+t+", W: "+e.width()+o(e.width(),s)+s+", minFontPixels: "+l+", maxFontPixels: "+c)}function l(i,e,n,t,l,c,o,a){for(s(i+": ",e,l,c,o,a);a-1>o;){var f=Math.floor((o+a)/2);if(e.css("font-size",f),n.call(e)<=t){if(o=f,n.call(e)==t)break}else a=f;s(i+": ",e,l,c,o,a)}return e.css("font-size",a),n.call(e)<=t&&(o=a,s(i+"* ",e,l,c,o,a)),o}var c={debug:!1,maxFontPixels:40,minFontPixels:4,innerTag:"span",widthOnly:!1,success:null,callback:null,fail:null,complete:null,explicitWidth:null,explicitHeight:null},o=i.extend(c,e);return this.each(function(){var e=i(o.innerTag+":visible:first",this),s=o.explicitHeight||i(this).height(),c=o.explicitWidth||i(this).width(),a=e.css("font-size"),f;n("Opts: ",o),n("Vars: maxHeight: "+s+", maxWidth: "+c);var h=o.minFontPixels,u=o.maxFontPixels<=0?s:o.maxFontPixels,d=void 0;o.widthOnly||(d=l("H",e,i.fn.height,s,s,c,h,u));var r=l("W",e,i.fn.width,c,s,c,h,u);o.widthOnly?e.css("font-size",r):e.css("font-size",Math.min(d,r)),n("Final: "+e.css("font-size")),e.width()>c||e.height()>s&&!o.widthOnly?(e.css("font-size",a),o.fail&&o.fail(this)):o.success?o.success(this):o.callback&&(t("callback is deprecated, use success, instead"),o.callback(this))}),o.complete&&o.complete(this),this}}(window.jQuery);