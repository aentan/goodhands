/**
 * dynamo.js
 * http://prezjordan.github.io/dynamo.js
 *
 * Copyright 2013 Jordan Scales (http://jordanscales.com)
 * Released under the MIT license
 * See LICENSE.txt
 */
function randInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function randStr(e){for(var t="";t.length<e&&e>0;){var n=Math.random();t+=String.fromCharCode(Math.floor(26*n)+97)}return t}!function(e){e.fn.dynamo=function(t){return this.each(function(n,r){t=t||{};var a=e(r);if("true"!==a.data("initialized")){var i=t.delay||parseInt(a.data("delay"),10)||3e3,o=t.speed||parseInt(a.data("speed"),10)||350,s=t.pause||a.data("pause")||!1,c=t.lines||a.data("lines").split(a.data("delimiter")||","),l=t.callback||new Function(a.data("callback"))||function(){},u=t.centered||a.data("center")||!1;a.html(e("<span></span>").html(a.html())).data("initialized","true"),c.forEach(function(t){a.append(e("<span></span>").html(t))}),a.find("span").each(function(t,n){var r=e(n).remove(),i=e("<div></div>").html(r.html());t||i.data("trigger","true"),a.append(i)});var d=a.find(">:first-child").height();a.height(d).css({display:"inline-block",position:"relative",overflow:"hidden","vertical-align":"bottom"}),u&&a.css("text-align","center");var f=function(){a.dynamo_trigger({speed:o,callback:l})};s||setInterval(f,i)}})},e.fn.dynamo_trigger=function(t){return this.each(function(n,r){t=t||{};var a=e(r),i=t.speed||a.data("speed")||350,o=t.callback||new Function(a.data("callback"))||function(){};e(this).data("pause")||a.find("div:first").slideUp(i,function(){a.append(e(this).show()),"true"===a.find("div:first").data("trigger")&&o()})})},e(".dynamo").dynamo()}(jQuery),function(e){"use strict";e.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(t,n){e(t).ajaxChimp(n)}},e.fn.ajaxChimp=function(t){return e(this).each(function(n,r){var a=e(r),i=a.find("input[type=email]"),o=a.find("label[for="+i.attr("id")+"]"),s=e.extend({url:a.attr("action"),language:"en"},t),c=s.url.replace("/post?","/post-json?").concat("&c=?");a.attr("novalidate","true"),i.attr("name","EMAIL"),a.submit(function(){function t(t){if("success"===t.result)n="We have sent you a confirmation email",o.removeClass("error").addClass("valid"),i.removeClass("error").addClass("valid");else{i.removeClass("valid").addClass("error"),o.removeClass("valid").addClass("error");var r=-1;try{var a=t.msg.split(" - ",2);if(void 0===a[1])n=t.msg;else{var c=parseInt(a[0],10);c.toString()===a[0]?(r=a[0],n=a[1]):(r=-1,n=t.msg)}}catch(l){r=-1,n=t.msg}}"en"!==s.language&&void 0!==e.ajaxChimp.responses[n]&&e.ajaxChimp.translations&&e.ajaxChimp.translations[s.language]&&e.ajaxChimp.translations[s.language][e.ajaxChimp.responses[n]]&&(n=e.ajaxChimp.translations[s.language][e.ajaxChimp.responses[n]]),o.html(n),o.show(2e3),s.callback&&s.callback(t)}var n,r={},l=a.serializeArray();e.each(l,function(e,t){r[t.name]=t.value}),e.ajax({url:c,data:r,success:t,dataType:"jsonp",error:function(e,t){console.log("mailchimp ajax submit error: "+t)}});var u="Submitting...";return"en"!==s.language&&e.ajaxChimp.translations&&e.ajaxChimp.translations[s.language]&&e.ajaxChimp.translations[s.language].submit&&(u=e.ajaxChimp.translations[s.language].submit),o.html(u).show(2e3),!1})}),this}}(jQuery),window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function a(e,t){return r(w.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var a=e[r];if(!o(a,"-")&&b[a]!==n)return"pfx"==t?a:!0}return!1}function c(e,t,r){for(var a in e){var o=t[e[a]];if(o!==n)return r===!1?e[a]:i(o,"function")?o.bind(r||t):o}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?s(a,t):(a=(e+" "+j.join(r+" ")+r).split(" "),c(a,t,n))}function u(){m.input=function(n){for(var r=0,a=n.length;a>r;r++)N[n[r]]=n[r]in x;return N.list&&(N.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,a,i,o=0,s=e.length;s>o;o++)x.setAttribute("type",a=e[o]),r="text"!==x.type,r&&(x.value=C,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&x.style.WebkitAppearance!==n?(g.appendChild(x),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(a)||(r=/^(url|email)$/.test(a)?x.checkValidity&&x.checkValidity()===!1:x.value!=C)),M[e[o]]=!!r;return M}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.6.2",m={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),C=":)",E={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",T=S.split(" "),j=S.toLowerCase().split(" "),k={svg:"http://www.w3.org/2000/svg"},$={},M={},N={},P=[],z=P.slice,A=function(e,n,r,a){var i,o,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=a?a[r]:v+(r+1),l.appendChild(s);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:d).innerHTML+=i,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),o=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),g.style.overflow=c),!!o},L=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return A("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},F=function(){function e(e,a){a=a||t.createElement(r[e]||"div"),e="on"+e;var o=e in a;return o||(a.setAttribute||(a=t.createElement("div")),a.setAttribute&&a.removeAttribute&&(a.setAttribute(e,""),o=i(a[e],"function"),i(a[e],"undefined")||(a[e]=n),a.removeAttribute(e))),a=null,o}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),O={}.hasOwnProperty;f=i(O,"undefined")||i(O.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return O.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=z.call(arguments,1),r=function(){if(this instanceof r){var a=function(){};a.prototype=t.prototype;var i=new a,o=t.apply(i,n.concat(z.call(arguments)));return Object(o)===o?o:i}return t.apply(e,n.concat(z.call(arguments)))};return r}),$.flexbox=function(){return l("flexWrap")},$.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},$.canvastext=function(){return!!m.canvas&&!!i(t.createElement("canvas").getContext("2d").fillText,"function")},$.webgl=function(){return!!e.WebGLRenderingContext},$.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:A(["@media (",w.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},$.geolocation=function(){return"geolocation"in navigator},$.postmessage=function(){return!!e.postMessage},$.websqldatabase=function(){return!!e.openDatabase},$.indexedDB=function(){return!!l("indexedDB",e)},$.hashchange=function(){return F("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},$.history=function(){return!!e.history&&!!history.pushState},$.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},$.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},$.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),o(b.backgroundColor,"rgba")},$.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),o(b.backgroundColor,"rgba")||o(b.backgroundColor,"hsla")},$.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},$.backgroundsize=function(){return l("backgroundSize")},$.borderimage=function(){return l("borderImage")},$.borderradius=function(){return l("borderRadius")},$.boxshadow=function(){return l("boxShadow")},$.textshadow=function(){return""===t.createElement("div").style.textShadow},$.opacity=function(){return a("opacity:.55"),/^0.55$/.test(b.opacity)},$.cssanimations=function(){return l("animationName")},$.csscolumns=function(){return l("columnCount")},$.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+w.join(n+e)).slice(0,-e.length)),o(b.backgroundImage,"gradient")},$.cssreflections=function(){return l("boxReflect")},$.csstransforms=function(){return!!l("transform")},$.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},$.csstransitions=function(){return l("transition")},$.fontface=function(){var e;return A('@font-face {font-family:"font";src:url("https://")}',function(n,r){var a=t.getElementById("smodernizr"),i=a.sheet||a.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(o)&&0===o.indexOf(r.split(" ")[0])}),e},$.generatedcontent=function(){var e;return A(["#",v,"{font:0/0 a}#",v,':after{content:"',C,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},$.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},$.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},$.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},$.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},$.webworkers=function(){return!!e.Worker},$.applicationcache=function(){return!!e.applicationCache},$.svg=function(){return!!t.createElementNS&&!!t.createElementNS(k.svg,"svg").createSVGRect},$.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==k.svg},$.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS(k.svg,"animate")))},$.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(k.svg,"clipPath")))};for(var R in $)f($,R)&&(d=R.toLowerCase(),m[d]=$[R](),P.push((m[d]?"":"no-")+d));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=g[e[m]];return t||(t={},h++,e[m]=h,g[h]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=a(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!f.test(e)?r.frag.appendChild(i):i}function o(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||a(e);for(var i=n.frag.cloneNode(),o=0,s=r(),c=s.length;c>o;o++)i.createElement(s[o]);return i}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var r=a(e);return v.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||s(e,r),e}var l,u,d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",h=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var v={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:o};e.html5=v,c(t)}(this,t),m._version=p,m._prefixes=w,m._domPrefixes=j,m._cssomPrefixes=T,m.mq=L,m.hasEvent=F,m.testProp=function(e){return s([e])},m.testAllProps=l,m.testStyles=A,m.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+P.join(" "):""),m}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function a(e){return"string"==typeof e}function i(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function c(e,n,r,a,i,c,l){function u(t){if(!p&&o(d.readyState)&&(b.r=p=1,!y&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){C.removeChild(d)},50);for(var r in j[n])j[n].hasOwnProperty(r)&&j[n][r].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),p=0,g=0,b={t:r,s:n,e:i,a:c,x:l};1===j[n]&&(g=1,j[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(a,0,b),"img"!=e&&(g||2===j[n]?(C.insertBefore(d,x?null:h),m(u,l)):j[n].push(d))}function l(e,t,n,r,i){return y=0,t=t||"j",a(e)?c("c"==t?w:E,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&s()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,C=x?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,E=b?"object":p?"script":"img",w=p?"script":E,S=Array.isArray||function(e){return"[object Array]"==g.call(e)},T=[],j={},k={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),a=T.length,i=e.pop(),o=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;o>n;n++)r=e[n].split("="),(t=k[r.shift()])&&(i=t(i,r));for(n=0;a>n;n++)i=T[n](i);return i}function o(e,a,i,o,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(a&&(a=r(a)?a:a[e]||a[o]||a[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,a,i,o,s):(j[c.url]?c.noexec=!0:j[c.url]=1,i.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(a)||r(l))&&i.load(function(){u(),a&&a(c.origUrl,s,o),l&&l(c.origUrl,s,o),j[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(a(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),o(e,d,t,0,l);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[c])),o(e[c],d,t,c,l))}else!n&&p()}var s,c,l=!!e.test,u=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var c,l,d=this.yepnope.loader;if(a(e))o(e,0,d,0);else if(S(e))for(c=0;c<e.length;c++)l=e[c],a(l)?o(l,0,d,0):S(l)?f(l):Object(l)===l&&s(l,d);else Object(e)===e&&s(e,d)},f.addPrefix=function(e,t){k[e]=t},f.addFilter=function(e){T.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,a,c,l){var u,d,p=t.createElement("script"),a=a||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=l?s:n||i,p.onreadystatechange=p.onload=function(){!u&&o(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},a),c?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,a,o,c){var l,a=t.createElement("link"),n=c?s:n||i;a.href=e,a.rel="stylesheet",a.type="text/css";for(l in r)a.setAttribute(l,r[l]);o||(h.parentNode.insertBefore(a,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia=window.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,a=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",a.style.background="none",a.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(a,r),t=42==i.offsetWidth,n.removeChild(a),{matches:t,media:e}}}(document),function(e){function t(){x(!0)}if(e.respond={},respond.update=function(){},respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,!respond.mediaQueriesSupported){var n,r,a,i=e.document,o=i.documentElement,s=[],c=[],l=[],u={},d=30,f=i.getElementsByTagName("head")[0]||o,p=i.getElementsByTagName("base")[0],m=f.getElementsByTagName("link"),h=[],g=function(){for(var t,n,r,a,i=m,o=i.length,s=0;o>s;s++)t=i[s],n=t.href,r=t.media,a=t.rel&&"stylesheet"===t.rel.toLowerCase(),n&&a&&!u[n]&&(t.styleSheet&&t.styleSheet.rawCssText?(y(t.styleSheet.rawCssText,n,r),u[n]=!0):(!/^([a-zA-Z:]*\/\/)/.test(n)&&!p||n.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&h.push({href:n,media:r}));v()},v=function(){if(h.length){var e=h.shift();C(e.href,function(t){y(t,e.href,e.media),u[e.href]=!0,v()})}},y=function(e,t,n){var r,a,i,o,l,u=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),d=u&&u.length||0,t=t.substring(0,t.lastIndexOf("/")),f=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},p=!d&&n,m=0;for(t.length&&(t+="/"),p&&(d=1);d>m;m++)for(r=0,p?(a=n,c.push(f(e))):(a=u[m].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,c.push(RegExp.$2&&f(RegExp.$2))),o=a.split(","),l=o.length;l>r;r++)i=o[r],s.push({media:i.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:c.length-1,hasquery:i.indexOf("(")>-1,minw:i.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:i.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")});x()},b=function(){var e,t=i.createElement("div"),n=i.body,r=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=r=i.createElement("body"),n.style.background="none"),n.appendChild(t),o.insertBefore(n,o.firstChild),e=t.offsetWidth,r?o.removeChild(n):n.removeChild(t),e=a=parseFloat(e)},x=function(e){var t="clientWidth",u=o[t],p="CSS1Compat"===i.compatMode&&u||i.body[t]||u,h={},g=m[m.length-1],v=(new Date).getTime();if(e&&n&&d>v-n)return clearTimeout(r),void(r=setTimeout(x,d));n=v;for(var y in s){var C=s[y],E=C.minw,w=C.maxw,S=null===E,T=null===w,j="em";E&&(E=parseFloat(E)*(E.indexOf(j)>-1?a||b():1)),w&&(w=parseFloat(w)*(w.indexOf(j)>-1?a||b():1)),C.hasquery&&(S&&T||!(S||p>=E)||!(T||w>=p))||(h[C.media]||(h[C.media]=[]),h[C.media].push(c[C.rules]))}for(var y in l)l[y]&&l[y].parentNode===f&&f.removeChild(l[y]);for(var y in h){var k=i.createElement("style"),$=h[y].join("\n");k.type="text/css",k.media=y,f.insertBefore(k,g.nextSibling),k.styleSheet?k.styleSheet.cssText=$:k.appendChild(i.createTextNode($)),l.push(k)}},C=function(e,t){var n=E();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!=n.readyState||200!=n.status&&304!=n.status||t(n.responseText)},4!=n.readyState&&n.send(null))},E=function(){var e=!1;try{e=new XMLHttpRequest}catch(t){e=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}();g(),respond.update=g,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),$(function(){$(".dnm").each(function(e){setTimeout(function(){$(".dnm").eq(e).dynamo()},randInt(3e3,6e3))}),$("#subscribe-form").submit(function(e){e.preventDefault();var t=$("#fieldtjtujyr").val();$.getJSON(this.action+"?callback=?",$(this).serialize(),function(e){$("#result").empty().removeClass(),""==t?$("#result").addClass("error").html("Required"):isNaN(t)?$("#result").addClass("error").html("Not a valid number"):400===e.Status?$("#result").addClass("error").html(e.Message):$("#result").addClass("success").html("Subscription Confirmed")})}),$("#fieldEmail").val(randStr(8)+"@"+randStr(8)+".co")});