/*
 Copyright 2014 KAKAO
 */

//1.0.19 https://github.com/html5crew/ua_parser/
!function(e){"use strict";var o=e.userAgent=function(e){function o(e){var o={},i=/(dolfin)[ \/]([\w.]+)/.exec(e)||/(edge)[ \/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e)||/(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(e)||["","unknown"];return"webkit"===i[1]?i=/(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e)||/(android)[ \/]([\w._\-]+);/.exec(e)||[i[0],"safari",i[2]]:"mozilla"===i[1]?/trident/.test(e)?i[1]="msie":i[1]="firefox":/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e)&&(i[1]="polaris"),o[i[1]]=!0,o.name=i[1],o.version=n(i[2]),o}function n(e){var o={},n=e?e.split(/\.|-|_/):["0","0","0"];return o.info=n.join("."),o.major=n[0]||"0",o.minor=n[1]||"0",o.patch=n[2]||"0",o}function i(e){return t(e)?"pc":r(e)?"tablet":s(e)?"mobile":""}function t(e){return e.match(/linux|windows (nt|98)|macintosh|cros/)&&!e.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)?!0:!1}function r(e){return e.match(/ipad/)||e.match(/android/)&&!e.match(/mobi|mini|fennec/)?!0:!1}function s(e){return e.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)?!0:!1}function a(e){var o={},i=/(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e)||(/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e)?["","polaris","0.0.0"]:!1)||/(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(e)||/(android)[ \/]([\w._\-]+);/.exec(e)||(/android/.test(e)?["","android","0.0.0"]:!1)||(/(windows)/.test(e)?["","windows","0.0.0"]:!1)||/(mac) os x ([\w._\-]+)/.exec(e)||(/(linux)/.test(e)?["","linux","0.0.0"]:!1)||(/webos/.test(e)?["","webos","0.0.0"]:!1)||/(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(e)||/(bada)[ \/]([\w._\-]+)/.exec(e)||(/bada/.test(e)?["","bada","0.0.0"]:!1)||(/(rim|blackberry|bb10)/.test(e)?["","blackberry","0.0.0"]:!1)||["","unknown","0.0.0"];return"iphone"===i[1]||"ipad"===i[1]||"ipod"===i[1]?i[1]="ios":"windows"===i[1]&&"98"===i[2]&&(i[2]="0.98.0"),"cros"===i[1]&&(i[1]="chrome"),o[i[1]]=!0,o.name=i[1],o.version=n(i[2]),o}function w(e){var o={},i=/(crios)[ \/]([\w.]+)/.exec(e)||/(daumapps)[ \/]([\w.]+)/.exec(e)||["",""];return i[1]?(o.isApp=!0,o.name=i[1],o.version=n(i[2])):o.isApp=!1,o}return e=(e||window.navigator.userAgent).toString().toLowerCase(),{ua:e,browser:o(e),platform:i(e),os:a(e),app:w(e)}};"object"==typeof window&&window.navigator.userAgent&&(window.ua_result=o(window.navigator.userAgent)||null)}(function(){return"object"==typeof exports?(exports.daumtools=exports,exports.util=exports,exports):"object"==typeof window?(window.daumtools="undefined"==typeof window.daumtools?{}:window.daumtools,window.util="undefined"==typeof window.util?window.daumtools:window.util,window.daumtools):void 0}());

// web2app-1.0.10.min.js https://github.com/html5crew/web2app/
!function(a){"use strict";a.web2app=function(){function a(a){window.location.href=a}function b(b){var e="function"==typeof b.willInvokeApp?b.willInvokeApp:function(){},h="function"==typeof b.onAppMissing?b.onAppMissing:a,i="function"==typeof b.onUnsupportedEnvironment?b.onUnsupportedEnvironment:function(){};e(),s.android?c()&&b.intentURI&&!b.useUrlScheme?f(b.intentURI):b.storeURL&&d(b.urlScheme,b.storeURL,h):s.ios&&b.storeURL?g(b.urlScheme,b.storeURL,h):setTimeout(function(){i()},100)}function c(){var a=r.browser.chrome&&+r.browser.version.major>=25,b=new RegExp(t.join("|"),"i");return a&&!b.test(r.ua)}function d(a,b,c){e(p,b,c),l(a)}function e(a,b,c){var d=(new Date).getTime();return setTimeout(function(){var e=(new Date).getTime();j()&&a+q>e-d&&c(b)},a)}function f(a){function b(){top.location.href=a}r.browser.chrome?b():setTimeout(b,100)}function g(a,b,c){var d=e(o,b,c);parseInt(r.os.version.major,10)<8?h(d):i(d),n()?(clearTimeout(d),k(a)):l(a)}function h(a){window.addEventListener("pagehide",function b(){j()&&(clearTimeout(a),window.removeEventListener("pagehide",b))})}function i(a){document.addEventListener("visibilitychange",function b(){j()&&(clearTimeout(a),document.removeEventListener("visibilitychange",b))})}function j(){for(var a=["hidden","webkitHidden"],b=0,c=a.length;c>b;b++)if("undefined"!==document[a[b]])return!document[a[b]];return!0}function k(a){window.top.location.href=a}function l(a){setTimeout(function(){var b=m("appLauncher");b.src=a},100)}function m(a){var b=document.createElement("iframe");return b.id=a,b.style.border="none",b.style.width="0",b.style.height="0",b.style.display="none",b.style.overflow="hidden",document.body.appendChild(b),b}function n(){return parseInt(r.os.version.major,10)>8&&r.os.ios}var o=2e3,p=300,q=100,r=daumtools.userAgent(),s=r.os,t=["firefox","opr","fb_iab"];return b}()}(window.daumtools="undefined"==typeof window.daumtools?{}:window.daumtools),function(a){"use strict";a.daumtools="undefined"==typeof a.daumtools?{}:a.daumtools,"undefined"!=typeof a.daumtools.web2app&&(a.daumtools.web2app.version="1.0.10")}(window);

(function(kakao, undefined) {
  var base_url = "storylink://posting?";
  var apiver =  "1.0";
  var store = {
      android: "market://details?id=com.kakao.story",
      ios: "http://itunes.apple.com/app/id486244601"
  };
  var packageName = "com.kakao.story";

  kakao.link = function (name) {
    if (name != 'story') return { send: function () {
        throw "only story links are supported.";
    }};

    return {
      send: function(params) {
        params['apiver'] = apiver;

        var urlScheme = base_url + serialized(params);
        var intentURI = 'intent:' + urlScheme + "#Intent;package=" + packageName + ";end;";
        var appStoreURL = daumtools.userAgent().os.android ? store.android : store.ios;

        daumtools.web2app({
            urlScheme: urlScheme,
            intentURI: intentURI,
            storeURL : appStoreURL,
            appName : 'KakaoStory'
         });
      }
    };

    function serialized(params) {
      var stripped = [];
      for (var k in params) {
        if (params.hasOwnProperty(k)) {
          stripped.push(k + "=" + encodeURIComponent(params[k]));
        }
      }
      return stripped.join("&");
    }
  };
}(window.kakao = window.kakao || {}));
