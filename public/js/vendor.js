/*
Modernizer  v2.6
jQuery      v1.10
Knockout    v3.0
Knockout.mapping


*/

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};





/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);




// Knockout JavaScript library v3.0.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function() {(function(q){var y=this||(0,eval)("this"),w=y.document,K=y.navigator,u=y.jQuery,B=y.JSON;(function(q){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?q(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],q):q(y.ko={})})(function(F){function G(a,c){return null===a||typeof a in N?a===c:!1}function H(b,c,d,e){a.d[b]={init:function(b){a.a.f.set(b,L,{});return{controlsDescendantBindings:!0}},update:function(b,h,k,m,f){k=a.a.f.get(b,L);h=a.a.c(h());
m=!d!==!h;var p=!k.ob;if(p||c||m!==k.Db)p&&(k.ob=a.a.Ya(a.e.childNodes(b),!0)),m?(p||a.e.S(b,a.a.Ya(k.ob)),a.Ta(e?e(f,h):f,b)):a.e.Z(b),k.Db=m}};a.g.Y[b]=!1;a.e.P[b]=!0}var a="undefined"!==typeof F?F:{};a.b=function(b,c){for(var d=b.split("."),e=a,g=0;g<d.length-1;g++)e=e[d[g]];e[d[d.length-1]]=c};a.s=function(a,c,d){a[c]=d};a.version="3.0.0";a.b("version",a.version);a.a=function(){function b(a,b){for(var f in a)a.hasOwnProperty(f)&&b(f,a[f])}function c(k,b){if("input"!==a.a.v(k)||!k.type||"click"!=
b.toLowerCase())return!1;var f=k.type;return"checkbox"==f||"radio"==f}var d={},e={};d[K&&/Firefox\/2/i.test(K.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(d,function(a,b){if(b.length)for(var f=0,c=b.length;f<c;f++)e[b[f]]=a});var g={propertychange:!0},h=w&&function(){for(var a=3,b=w.createElement("div"),f=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+
++a+"]><i></i><![endif]--\x3e",f[0];);return 4<a?a:q}();return{$a:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],n:function(a,b){for(var f=0,c=a.length;f<c;f++)b(a[f])},l:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var f=0,c=a.length;f<c;f++)if(a[f]===b)return f;return-1},Ua:function(a,b,f){for(var c=0,d=a.length;c<d;c++)if(b.call(f,a[c]))return a[c];return null},ia:function(b,c){var f=a.a.l(b,c);0<=f&&b.splice(f,1)},Va:function(b){b=
b||[];for(var c=[],f=0,d=b.length;f<d;f++)0>a.a.l(c,b[f])&&c.push(b[f]);return c},ha:function(a,b){a=a||[];for(var f=[],c=0,d=a.length;c<d;c++)f.push(b(a[c]));return f},ga:function(a,b){a=a||[];for(var f=[],c=0,d=a.length;c<d;c++)b(a[c])&&f.push(a[c]);return f},X:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var f=0,c=b.length;f<c;f++)a.push(b[f]);return a},V:function(b,c,f){var d=a.a.l(a.a.Ha(b),c);0>d?f&&b.push(c):f||b.splice(d,1)},extend:function(a,b){if(b)for(var f in b)b.hasOwnProperty(f)&&
(a[f]=b[f]);return a},K:b,Da:function(a,b){if(!a)return a;var f={},c;for(c in a)a.hasOwnProperty(c)&&(f[c]=b(a[c],c,a));return f},wa:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Vb:function(b){b=a.a.Q(b);for(var c=w.createElement("div"),f=0,d=b.length;f<d;f++)c.appendChild(a.L(b[f]));return c},Ya:function(b,c){for(var f=0,d=b.length,e=[];f<d;f++){var g=b[f].cloneNode(!0);e.push(c?a.L(g):g)}return e},S:function(b,c){a.a.wa(b);if(c)for(var f=0,d=c.length;f<d;f++)b.appendChild(c[f])},nb:function(b,
c){var f=b.nodeType?[b]:b;if(0<f.length){for(var d=f[0],e=d.parentNode,g=0,n=c.length;g<n;g++)e.insertBefore(c[g],d);g=0;for(n=f.length;g<n;g++)a.removeNode(f[g])}},$:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);if(1<a.length){var f=a[0],c=a[a.length-1];for(a.length=0;f!==c;)if(a.push(f),f=f.nextSibling,!f)return;a.push(c)}}return a},qb:function(a,b){7>h?a.setAttribute("selected",b):a.selected=b},la:function(a){return null===a||a===
q?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ec:function(b,c){for(var f=[],d=(b||"").split(c),e=0,g=d.length;e<g;e++){var n=a.a.la(d[e]);""!==n&&f.push(n)}return f},ac:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Gb:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;
return!!a},va:function(b){return a.a.Gb(b,b.ownerDocument.documentElement)},Ra:function(b){return!!a.a.Ua(b,a.a.va)},v:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},r:function(b,d,f){var e=h&&g[d];if(e||"undefined"==typeof u)if(e||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var s=function(a){f.call(b,a)},l="on"+d;b.attachEvent(l,s);a.a.C.ea(b,function(){b.detachEvent(l,s)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(d,
f,!1);else{if(c(b,d)){var n=f;f=function(a,b){var f=this.checked;b&&(this.checked=!0!==b.Ab);n.call(this,a);this.checked=f}}u(b).bind(d,f)}},da:function(a,b){if(!a||!a.nodeType)throw Error("element must be a DOM node when calling triggerEvent");if("undefined"!=typeof u){var f=[];c(a,b)&&f.push({Ab:a.checked});u(a).trigger(b,f)}else if("function"==typeof w.createEvent)if("function"==typeof a.dispatchEvent)f=w.createEvent(e[b]||"HTMLEvents"),f.initEvent(b,!0,!0,y,0,0,0,0,0,!1,!1,!1,!1,0,a),a.dispatchEvent(f);
else throw Error("The supplied element doesn't support dispatchEvent");else if("undefined"!=typeof a.fireEvent)c(a,b)&&(a.checked=!0!==a.checked),a.fireEvent("on"+b);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.M(b)?b():b},Ha:function(b){return a.M(b)?b.t():b},ma:function(b,c,f){if(c){var d=/\S+/g,e=b.className.match(d)||[];a.a.n(c.match(d),function(b){a.a.V(e,b,f)});b.className=e.join(" ")}},Ma:function(b,c){var f=a.a.c(c);if(null===f||f===q)f="";var d=a.e.firstChild(b);
!d||3!=d.nodeType||a.e.nextSibling(d)?a.e.S(b,[w.createTextNode(f)]):d.data=f;a.a.Jb(b)},pb:function(a,b){a.name=b;if(7>=h)try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)}catch(f){}},Jb:function(a){9<=h&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Hb:function(a){if(h){var b=a.style.width;a.style.width=0;a.style.width=b}},Zb:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var f=[],d=b;d<=c;d++)f.push(d);return f},Q:function(a){for(var b=[],c=0,d=a.length;c<
d;c++)b.push(a[c]);return b},cc:6===h,dc:7===h,ja:h,ab:function(b,c){for(var f=a.a.Q(b.getElementsByTagName("input")).concat(a.a.Q(b.getElementsByTagName("textarea"))),d="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},e=[],g=f.length-1;0<=g;g--)d(f[g])&&e.push(f[g]);return e},Wb:function(b){return"string"==typeof b&&(b=a.a.la(b))?B&&B.parse?B.parse(b):(new Function("return "+b))():null},Na:function(b,c,f){if(!B||!B.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return B.stringify(a.a.c(b),c,f)},Xb:function(c,d,f){f=f||{};var e=f.params||{},g=f.includeFields||this.$a,h=c;if("object"==typeof c&&"form"===a.a.v(c))for(var h=c.action,n=g.length-1;0<=n;n--)for(var r=a.a.ab(c,g[n]),v=r.length-1;0<=v;v--)e[r[v].name]=r[v].value;d=a.a.c(d);var t=w.createElement("form");t.style.display="none";t.action=h;t.method="post";for(var E in d)c=w.createElement("input"),c.name=E,c.value=a.a.Na(a.a.c(d[E])),t.appendChild(c);b(e,function(a,b){var c=w.createElement("input");c.name=
a;c.value=b;t.appendChild(c)});w.body.appendChild(t);f.submitter?f.submitter(t):t.submit();setTimeout(function(){t.parentNode.removeChild(t)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.n);a.b("utils.arrayFirst",a.a.Ua);a.b("utils.arrayFilter",a.a.ga);a.b("utils.arrayGetDistinctValues",a.a.Va);a.b("utils.arrayIndexOf",a.a.l);a.b("utils.arrayMap",a.a.ha);a.b("utils.arrayPushAll",a.a.X);a.b("utils.arrayRemoveItem",a.a.ia);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.$a);a.b("utils.getFormFields",a.a.ab);a.b("utils.peekObservable",a.a.Ha);a.b("utils.postJson",a.a.Xb);a.b("utils.parseJson",a.a.Wb);a.b("utils.registerEventHandler",a.a.r);a.b("utils.stringifyJson",a.a.Na);a.b("utils.range",a.a.Zb);a.b("utils.toggleDomNodeCssClass",a.a.ma);a.b("utils.triggerEvent",a.a.da);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.K);a.b("utils.addOrRemoveItem",a.a.V);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var c=
this,d=Array.prototype.slice.call(arguments);a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){function a(b,h){var k=b[d];if(!k||"null"===k||!e[k]){if(!h)return q;k=b[d]="ko"+c++;e[k]={}}return e[k]}var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===q?q:e[d]},set:function(c,d,e){if(e!==q||a(c,!1)!==q)a(c,!0)[d]=e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},D:function(){return c++ +
d}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.C=new function(){function b(b,c){var e=a.a.f.get(b,d);e===q&&c&&(e=[],a.a.f.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),m=0;m<e.length;m++)e[m](d);a.a.f.clear(d);"function"==typeof u&&"function"==typeof u.cleanData&&u.cleanData([d]);if(g[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.f.D(),e={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{ea:function(a,c){if("function"!=
typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},mb:function(c,e){var g=b(c,!1);g&&(a.a.ia(g,e),0==g.length&&a.a.f.set(c,d,q))},L:function(b){if(e[b.nodeType]&&(c(b),g[b.nodeType])){var d=[];a.a.X(d,b.getElementsByTagName("*"));for(var m=0,f=d.length;m<f;m++)c(d[m])}return b},removeNode:function(b){a.L(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.L=a.a.C.L;a.removeNode=a.a.C.removeNode;a.b("cleanNode",a.L);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.C);
a.b("utils.domNodeDisposal.addDisposeCallback",a.a.C.ea);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.C.mb);(function(){a.a.Fa=function(b){var c;if("undefined"!=typeof u)if(u.parseHTML)c=u.parseHTML(b)||[];else{if((c=u.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&b.parentNode.removeChild(b)}}else{var d=a.a.la(b).toLowerCase();c=w.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,
"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof y.innerShiv?c.appendChild(y.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.Q(c.lastChild.childNodes)}return c};a.a.Ka=function(b,c){a.a.wa(b);c=a.a.c(c);if(null!==c&&c!==q)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof u)u(b).html(c);else for(var d=a.a.Fa(c),e=0;e<d.length;e++)b.appendChild(d[e])}})();
a.b("utils.parseHtmlFragment",a.a.Fa);a.b("utils.setHtml",a.a.Ka);a.u=function(){function b(c,e){if(c)if(8==c.nodeType){var g=a.u.jb(c.nodeValue);null!=g&&e.push({Fb:c,Tb:g})}else if(1==c.nodeType)for(var g=0,h=c.childNodes,k=h.length;g<k;g++)b(h[g],e)}var c={};return{Ca:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);
c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},ub:function(a,b){var g=c[a];if(g===q)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return g.apply(null,b||[]),!0}finally{delete c[a]}},vb:function(c,e){var g=[];b(c,g);for(var h=0,k=g.length;h<k;h++){var m=g[h].Fb,f=[m];e&&a.a.X(f,e);a.u.ub(g[h].Tb,f);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m)}},jb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.u);a.b("memoization.memoize",
a.u.Ca);a.b("memoization.unmemoize",a.u.ub);a.b("memoization.parseMemoText",a.u.jb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.u.vb);a.xa={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.h({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(a,c){a.equalityComparer="always"==c?null:G}};var N={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.xa);a.sb=function(b,c,d){this.target=b;this.qa=c;this.Eb=d;a.s(this,"dispose",
this.B)};a.sb.prototype.B=function(){this.Qb=!0;this.Eb()};a.ca=function(){this.F={};a.a.extend(this,a.ca.fn);a.s(this,"subscribe",this.T);a.s(this,"extend",this.extend);a.s(this,"getSubscriptionsCount",this.Lb)};var I="change";a.ca.fn={T:function(b,c,d){d=d||I;var e=new a.sb(this,c?b.bind(c):b,function(){a.a.ia(this.F[d],e)}.bind(this));this.F[d]||(this.F[d]=[]);this.F[d].push(e);return e},notifySubscribers:function(b,c){c=c||I;if(this.cb(c))try{a.i.Wa();for(var d=this.F[c].slice(0),e=0,g;g=d[e];++e)g&&
!0!==g.Qb&&g.qa(b)}finally{a.i.end()}},cb:function(a){return this.F[a]&&this.F[a].length},Lb:function(){var b=0;a.a.K(this.F,function(a,d){b+=d.length});return b},extend:function(b){var c=this;b&&a.a.K(b,function(b,e){var g=a.xa[b];"function"==typeof g&&(c=g(c,e)||c)});return c}};a.fb=function(a){return null!=a&&"function"==typeof a.T&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.ca);a.b("isSubscribable",a.fb);a.i=function(){var b=[];return{Wa:function(a){b.push(a&&{qa:a,Za:[]})},
end:function(){b.pop()},lb:function(c){if(!a.fb(c))throw Error("Only subscribable things can act as dependencies");if(0<b.length){var d=b[b.length-1];!d||0<=a.a.l(d.Za,c)||(d.Za.push(c),d.qa(c))}},p:function(a,d,e){try{return b.push(null),a.apply(d,e||[])}finally{b.pop()}}}}();a.q=function(b){function c(){if(0<arguments.length)return c.equalityComparer&&c.equalityComparer(d,arguments[0])||(c.O(),d=arguments[0],c.N()),this;a.i.lb(c);return d}var d=b;a.ca.call(c);c.t=function(){return d};c.N=function(){c.notifySubscribers(d)};
c.O=function(){c.notifySubscribers(d,"beforeChange")};a.a.extend(c,a.q.fn);a.s(c,"peek",c.t);a.s(c,"valueHasMutated",c.N);a.s(c,"valueWillMutate",c.O);return c};a.q.fn={equalityComparer:G};var C=a.q.Yb="__ko_proto__";a.q.fn[C]=a.q;a.ya=function(b,c){return null===b||b===q||b[C]===q?!1:b[C]===c?!0:a.ya(b[C],c)};a.M=function(b){return a.ya(b,a.q)};a.gb=function(b){return"function"==typeof b&&b[C]===a.q||"function"==typeof b&&b[C]===a.h&&b.Nb?!0:!1};a.b("observable",a.q);a.b("isObservable",a.M);a.b("isWriteableObservable",
a.gb);a.ba=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.q(b);a.a.extend(b,a.ba.fn);return b.extend({trackArrayChanges:!0})};a.ba.fn={remove:function(b){for(var c=this.t(),d=[],e="function"!=typeof b||a.M(b)?function(a){return a===b}:b,g=0;g<c.length;g++){var h=c[g];e(h)&&(0===d.length&&this.O(),d.push(h),c.splice(g,1),g--)}d.length&&this.N();return d},removeAll:function(b){if(b===
q){var c=this.t(),d=c.slice(0);this.O();c.splice(0,c.length);this.N();return d}return b?this.remove(function(c){return 0<=a.a.l(b,c)}):[]},destroy:function(b){var c=this.t(),d="function"!=typeof b||a.M(b)?function(a){return a===b}:b;this.O();for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.N()},destroyAll:function(b){return b===q?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.l(b,c)}):[]},indexOf:function(b){var c=this();return a.a.l(c,b)},replace:function(a,
c){var d=this.indexOf(a);0<=d&&(this.O(),this.t()[d]=c,this.N())}};a.a.n("pop push reverse shift sort splice unshift".split(" "),function(b){a.ba.fn[b]=function(){var a=this.t();this.O();this.Xa(a,b,arguments);a=a[b].apply(a,arguments);this.N();return a}});a.a.n(["slice"],function(b){a.ba.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.ba);var J="arrayChange";a.xa.trackArrayChanges=function(b){function c(){if(!d){d=!0;var c=b.notifySubscribers;b.notifySubscribers=
function(a,b){b&&b!==I||++g;return c.apply(this,arguments)};var m=[].concat(b.t()||[]);e=null;b.T(function(c){c=[].concat(c||[]);if(b.cb(J)){var d;if(!e||1<g)e=a.a.ra(m,c,{sparse:!0});d=e;d.length&&b.notifySubscribers(d,J)}m=c;e=null;g=0})}}if(!b.Xa){var d=!1,e=null,g=0,h=b.T;b.T=b.subscribe=function(a,b,f){f===J&&c();return h.apply(this,arguments)};b.Xa=function(a,b,c){function p(a,b,c){h.push({status:a,value:b,index:c})}if(d&&!g){var h=[],l=a.length,n=c.length,r=0;switch(b){case "push":r=l;case "unshift":for(b=
0;b<n;b++)p("added",c[b],r+b);break;case "pop":r=l-1;case "shift":l&&p("deleted",a[r],r);break;case "splice":b=Math.min(Math.max(0,0>c[0]?l+c[0]:c[0]),l);for(var l=1===n?l:Math.min(b+(c[1]||0),l),n=b+n-2,r=Math.max(l,n),v=2;b<r;++b,++v)b<l&&p("deleted",a[b],b),b<n&&p("added",c[v],b);break;default:return}e=h}}}};a.h=function(b,c,d){function e(){a.a.n(z,function(a){a.B()});z=[]}function g(){var a=k.throttleEvaluation;a&&0<=a?(clearTimeout(x),x=setTimeout(h,a)):h()}function h(){if(!s){if(E&&E()){if(!l){D();
p=!0;return}}else l=!1;s=!0;try{var b=a.a.ha(z,function(a){return a.target});a.i.Wa(function(c){var d;0<=(d=a.a.l(b,c))?b[d]=q:z.push(c.T(g))});for(var d=c?n.call(c):n(),e=b.length-1;0<=e;e--)b[e]&&z.splice(e,1)[0].B();p=!0;k.equalityComparer&&k.equalityComparer(f,d)||(k.notifySubscribers(f,"beforeChange"),f=d,k.notifySubscribers(f))}finally{a.i.end(),s=!1}z.length||D()}}function k(){if(0<arguments.length){if("function"===typeof r)r.apply(c,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}p||h();a.i.lb(k);return f}function m(){return!p||0<z.length}var f,p=!1,s=!1,l=!1,n=b;n&&"object"==typeof n?(d=n,n=d.read):(d=d||{},n||(n=d.read));if("function"!=typeof n)throw Error("Pass a function that returns the value of the ko.computed");var r=d.write,v=d.disposeWhenNodeIsRemoved||d.I||null,t=d.disposeWhen||d.ua,E=t,D=e,z=[],x=null;c||(c=d.owner);k.t=function(){p||h();return f};k.Kb=function(){return z.length};k.Nb="function"===typeof d.write;k.B=function(){D()};k.aa=m;a.ca.call(k);
a.a.extend(k,a.h.fn);a.s(k,"peek",k.t);a.s(k,"dispose",k.B);a.s(k,"isActive",k.aa);a.s(k,"getDependenciesCount",k.Kb);v&&(l=!0,v.nodeType&&(E=function(){return!a.a.va(v)||t&&t()}));!0!==d.deferEvaluation&&h();v&&m()&&(D=function(){a.a.C.mb(v,D);e()},a.a.C.ea(v,D));return k};a.Pb=function(b){return a.ya(b,a.h)};F=a.q.Yb;a.h[F]=a.q;a.h.fn={equalityComparer:G};a.h.fn[F]=a.h;a.b("dependentObservable",a.h);a.b("computed",a.h);a.b("isComputed",a.Pb);(function(){function b(a,g,h){h=h||new d;a=g(a);if("object"!=
typeof a||null===a||a===q||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var k=a instanceof Array?[]:{};h.save(a,k);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":k[c]=d;break;case "object":case "undefined":var p=h.get(d);k[c]=p!==q?p:b(d,g,h)}});return k}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=
[];this.Qa=[]}a.tb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.M(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.tb(b);return a.a.Na(b,c,d)};d.prototype={save:function(b,c){var d=a.a.l(this.keys,b);0<=d?this.Qa[d]=c:(this.keys.push(b),this.Qa.push(c))},get:function(b){b=a.a.l(this.keys,b);return 0<=b?this.Qa[b]:q}}})();a.b("toJS",a.tb);a.b("toJSON",a.toJSON);(function(){a.k={o:function(b){switch(a.a.v(b)){case "option":return!0===
b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.Ea):7>=a.a.ja?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.k.o(b.options[b.selectedIndex]):q;default:return b.value}},na:function(b,c){switch(a.a.v(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.d.options.Ea,q);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.d.options.Ea,c),b.__ko__hasDomDataOptionValue__=
!0,b.value="number"===typeof c?c:""}break;case "select":""===c&&(c=q);if(null===c||c===q)b.selectedIndex=-1;for(var d=b.options.length-1;0<=d;d--)if(a.k.o(b.options[d])==c){b.selectedIndex=d;break}1<b.size||-1!==b.selectedIndex||(b.selectedIndex=0);break;default:if(null===c||c===q)c="";b.value=c}}}})();a.b("selectExtensions",a.k);a.b("selectExtensions.readValue",a.k.o);a.b("selectExtensions.writeValue",a.k.na);a.g=function(){function b(b){b=a.a.la(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=
[],d=b.match(e),k,l,n=0;if(d){d.push(",");for(var r=0,v;v=d[r];++r){var t=v.charCodeAt(0);if(44===t){if(0>=n){k&&c.push(l?{key:k,value:l.join("")}:{unknown:k});k=l=n=0;continue}}else if(58===t){if(!l)continue}else if(47===t&&r&&1<v.length)(t=d[r-1].match(g))&&!h[t[0]]&&(b=b.substr(b.indexOf(v)+1),d=b.match(e),d.push(","),r=-1,v="/");else if(40===t||123===t||91===t)++n;else if(41===t||125===t||93===t)--n;else if(!k&&!l){k=34===t||39===t?v.slice(1,-1):v;continue}l?l.push(v):l=[v]}}return c}var c=["true",
"false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),g=/[\])"'A-Za-z0-9_$]+$/,h={"in":1,"return":1,"typeof":1},k={};return{Y:[],U:k,Ga:b,ka:function(e,f){function g(b,f){var e,r=a.getBindingHandler(b);if(r&&r.preprocess?f=r.preprocess(f,b,g):1){if(r=k[b])e=f,0<=a.a.l(c,e)?e=!1:(r=e.match(d),e=null===r?!1:r[1]?"Object("+r[1]+")"+
r[2]:e),r=e;r&&l.push("'"+b+"':function(_z){"+e+"=_z}");n&&(f="function(){return "+f+" }");h.push("'"+b+"':"+f)}}f=f||{};var h=[],l=[],n=f.valueAccessors,r="string"===typeof e?b(e):e;a.a.n(r,function(a){g(a.key||a.unknown,a.value)});l.length&&g("_ko_property_writers","{"+l.join(",")+"}");return h.join(",")},Sb:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},oa:function(b,c,d,e,k){if(b&&a.M(b))!a.gb(b)||k&&b.t()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();
a.b("expressionRewriting",a.g);a.b("expressionRewriting.bindingRewriteValidators",a.g.Y);a.b("expressionRewriting.parseObjectLiteral",a.g.Ga);a.b("expressionRewriting.preProcessBindings",a.g.ka);a.b("expressionRewriting._twoWayBindings",a.g.U);a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.g.ka);(function(){function b(a){return 8==a.nodeType&&h.test(g?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&k.test(g?a.text:a.nodeValue)}function d(a,
d){for(var e=a,k=1,n=[];e=e.nextSibling;){if(c(e)&&(k--,0===k))return n;n.push(e);b(e)&&k++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var g=w&&"\x3c!--test--\x3e"===w.createComment("test").text,h=g?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,k=g?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0};a.e={P:{},childNodes:function(a){return b(a)?
d(a):a.childNodes},Z:function(c){if(b(c)){c=a.e.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.wa(c)},S:function(c,d){if(b(c)){a.e.Z(c);for(var e=c.nextSibling,k=0,n=d.length;k<n;k++)e.parentNode.insertBefore(d[k],e)}else a.a.S(c,d)},kb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},eb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):
c.appendChild(d):a.e.kb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Mb:b,bc:function(a){return(a=(g?a.text:a.nodeValue).match(h))?a[1]:null},ib:function(d){if(m[a.a.v(d)]){var k=d.firstChild;if(k){do if(1===k.nodeType){var g;g=k.firstChild;var h=null;if(g){do if(h)h.push(g);else if(b(g)){var n=e(g,!0);n?g=n:h=[g]}else c(g)&&(h=[g]);while(g=
g.nextSibling)}if(g=h)for(h=k.nextSibling,n=0;n<g.length;n++)h?d.insertBefore(g[n],h):d.appendChild(g[n])}while(k=k.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.P);a.b("virtualElements.emptyNode",a.e.Z);a.b("virtualElements.insertAfter",a.e.eb);a.b("virtualElements.prepend",a.e.kb);a.b("virtualElements.setDomNodeChildren",a.e.S);(function(){a.H=function(){this.zb={}};a.a.extend(a.H.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind");case 8:return a.e.Mb(b);default:return!1}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a):null},getBindingAccessors:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a,{valueAccessors:!0}):null},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.bc(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var g=this.zb,
h=b+(e&&e.valueAccessors||""),k;if(!(k=g[h])){var m,f="with($context){with($data||{}){return{"+a.g.ka(b,e)+"}}}";m=new Function("$context","$element",f);k=g[h]=m}return k(c,d)}catch(p){throw p.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+p.message,p;}}});a.H.instance=new a.H})();a.b("bindingProvider",a.H);(function(){function b(a){return function(){return a}}function c(a){return a()}function d(b){return a.a.Da(a.i.p(b),function(a,c){return function(){return b()[c]}})}function e(a,
b){return d(this.getBindings.bind(this,a,b))}function g(b,c,d){var f,e=a.e.firstChild(c),k=a.H.instance,g=k.preprocessNode;if(g){for(;f=e;)e=a.e.nextSibling(f),g.call(k,f);e=a.e.firstChild(c)}for(;f=e;)e=a.e.nextSibling(f),h(b,f,d)}function h(b,c,d){var f=!0,e=1===c.nodeType;e&&a.e.ib(c);if(e&&d||a.H.instance.nodeHasBindings(c))f=m(c,null,b,d).shouldBindDescendants;f&&!p[a.a.v(c)]&&g(b,c,!e)}function k(b){var c=[],d={},f=[];a.a.K(b,function D(e){if(!d[e]){var k=a.getBindingHandler(e);k&&(k.after&&
(f.push(e),a.a.n(k.after,function(c){if(b[c]){if(-1!==a.a.l(f,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+f.join(", "));D(c)}}),f.pop()),c.push({key:e,bb:k}));d[e]=!0}});return c}function m(b,d,f,g){var h=a.a.f.get(b,s);if(!d){if(h)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,s,!0)}!h&&g&&a.rb(b,f);var m;if(d&&"function"!==typeof d)m=d;else{var p=a.H.instance,l=p.getBindingAccessors||e;if(d||f.A){var A=
a.h(function(){(m=d?d(f,b):l.call(p,b,f))&&f.A&&f.A();return m},null,{I:b});m&&A.aa()||(A=null)}else m=a.i.p(l,p,[b,f])}var u;if(m){var w=A?function(a){return function(){return c(A()[a])}}:function(a){return m[a]},y=function(){return a.a.Da(A?A():m,c)};y.get=function(a){return m[a]&&c(w(a))};y.has=function(a){return a in m};g=k(m);a.a.n(g,function(c){var d=c.bb.init,e=c.bb.update,k=c.key;if(8===b.nodeType&&!a.e.P[k])throw Error("The binding '"+k+"' cannot be used with virtual elements");try{"function"==
typeof d&&a.i.p(function(){var a=d(b,w(k),y,f.$data,f);if(a&&a.controlsDescendantBindings){if(u!==q)throw Error("Multiple bindings ("+u+" and "+k+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=k}}),"function"==typeof e&&a.h(function(){e(b,w(k),y,f.$data,f)},null,{I:b})}catch(g){throw g.message='Unable to process binding "'+k+": "+m[k]+'"\nMessage: '+g.message,g;}})}return{shouldBindDescendants:u===q}}function f(b){return b&&
b instanceof a.G?b:new a.G(b)}a.d={};var p={script:!0};a.getBindingHandler=function(b){return a.d[b]};a.G=function(b,c,d,f){var e=this,k="function"==typeof b,g,h=a.h(function(){var g=k?b():b;c?(c.A&&c.A(),a.a.extend(e,c),h&&(e.A=h)):(e.$parents=[],e.$root=g,e.ko=a);e.$rawData=b;e.$data=g;d&&(e[d]=g);f&&f(e,c,g);return e.$data},null,{ua:function(){return g&&!a.a.Ra(g)},I:!0});h.aa()&&(e.A=h,h.equalityComparer=null,g=[],h.wb=function(b){g.push(b);a.a.C.ea(b,function(b){a.a.ia(g,b);g.length||(h.B(),
e.A=h=q)})})};a.G.prototype.createChildContext=function(b,c,d){return new a.G(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.G.prototype.extend=function(b){return new a.G(this.$rawData,this,null,function(c){a.a.extend(c,"function"==typeof b?b():b)})};var s=a.a.f.D(),l=a.a.f.D();a.rb=function(b,c){if(2==arguments.length)a.a.f.set(b,l,c),c.A&&c.A.wb(b);else return a.a.f.get(b,l)};a.pa=function(b,c,d){1===b.nodeType&&
a.e.ib(b);return m(b,c,f(d),!0)};a.xb=function(c,e,k){k=f(k);return a.pa(c,"function"===typeof e?d(e.bind(null,k,c)):a.a.Da(e,b),k)};a.Ta=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(f(a),b,!0)};a.Sa=function(a,b){if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||y.document.body;h(f(a),b,!0)};a.ta=function(b){switch(b.nodeType){case 1:case 8:var c=a.rb(b);if(c)return c;if(b.parentNode)return a.ta(b.parentNode)}return q};
a.Cb=function(b){return(b=a.ta(b))?b.$data:q};a.b("bindingHandlers",a.d);a.b("applyBindings",a.Sa);a.b("applyBindingsToDescendants",a.Ta);a.b("applyBindingAccessorsToNode",a.pa);a.b("applyBindingsToNode",a.xb);a.b("contextFor",a.ta);a.b("dataFor",a.Cb)})();var M={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.K(d,function(c,d){d=a.a.c(d);var h=!1===d||null===d||d===q;h&&b.removeAttribute(c);8>=a.a.ja&&c in M?(c=M[c],h?b.removeAttribute(c):b[c]=d):h||b.setAttribute(c,
d.toString());"name"===c&&a.a.pb(b,h?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):b.value}function g(){var k=b.checked,g=s?e():k;if(l&&(!m||k)){var h=a.i.p(c);f?p!==g?(k&&(a.a.V(h,g,!0),a.a.V(h,p,!1)),p=g):a.a.V(h,g,k):a.g.oa(h,d,"checked",g,!0)}}function h(){var d=a.a.c(c());b.checked=f?0<=a.a.l(d,e()):k?d:e()===d}var k="checkbox"==b.type,m="radio"==b.type;if(k||m){var f=k&&a.a.c(c())instanceof
Array,p=f?e():q,s=m||f,l=!1;m&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.h(g,null,{I:b});a.a.r(b,"click",g);a.h(h,null,{I:b});l=!0}}};a.g.U.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());"object"==typeof d?a.a.K(d,function(c,d){d=a.a.c(d);a.a.ma(b,c,d)}):(d=String(d||""),a.a.ma(b,b.__ko__cssValue,!1),b.__ko__cssValue=d,a.a.ma(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):
d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,g){var h=c()||{};a.a.K(h,function(k){"string"==typeof k&&a.a.r(b,k,function(b){var f,h=c()[k];if(h){try{var s=a.a.Q(arguments);e=g.$data;s.unshift(e);f=h.apply(e,s)}finally{!0!==f&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(k+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={hb:function(b){return function(){var c=
b(),d=a.a.Ha(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.J.Aa};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.J.Aa}}},init:function(b,c){return a.d.template.init(b,a.d.foreach.hb(c))},update:function(b,c,d,e,g){return a.d.template.update(b,a.d.foreach.hb(c),d,e,g)}};a.g.Y.foreach=!1;a.e.P.foreach=!0;a.d.hasfocus=
{init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var g=b.ownerDocument;if("activeElement"in g){var f;try{f=g.activeElement}catch(h){f=g.body}e=f===b}g=c();a.g.oa(g,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var g=e.bind(null,!0),h=e.bind(null,!1);a.a.r(b,"focus",g);a.a.r(b,"focusin",g);a.a.r(b,"blur",h);a.a.r(b,"focusout",h)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),a.i.p(a.a.da,
null,[b,d?"focusin":"focusout"]))}};a.g.U.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.g.U.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Ka(b,c())}};var L=a.a.f.D();H("if");H("ifnot",!1,!0);H("with",!0,!1,function(a,c){return a.createChildContext(c)});a.d.options={init:function(b){if("select"!==a.a.v(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,
c,d){function e(){return a.a.ga(b.options,function(a){return a.selected})}function g(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function h(c,d){if(p.length){var f=0<=a.a.l(p,a.k.o(d[0]));a.a.qb(d[0],f);l&&!f&&a.i.p(a.a.da,null,[b,"change"])}}var k=0!=b.length&&b.multiple?b.scrollTop:null;c=a.a.c(c());var m=d.get("optionsIncludeDestroyed"),f={},p;p=b.multiple?a.a.ha(e(),a.k.o):0<=b.selectedIndex?[a.k.o(b.options[b.selectedIndex])]:[];if(c){"undefined"==typeof c.length&&(c=[c]);
var s=a.a.ga(c,function(b){return m||b===q||null===b||!a.a.c(b._destroy)});d.has("optionsCaption")&&(c=a.a.c(d.get("optionsCaption")),null!==c&&c!==q&&s.unshift(f))}else c=[];var l=!1;c=h;d.has("optionsAfterRender")&&(c=function(b,c){h(0,c);a.i.p(d.get("optionsAfterRender"),null,[c[0],b!==f?b:q])});a.a.Ja(b,s,function(b,c,e){e.length&&(p=e[0].selected?[a.k.o(e[0])]:[],l=!0);c=w.createElement("option");b===f?(a.a.Ma(c,d.get("optionsCaption")),a.k.na(c,q)):(e=g(b,d.get("optionsValue"),b),a.k.na(c,a.a.c(e)),
b=g(b,d.get("optionsText"),e),a.a.Ma(c,b));return[c]},null,c);(b.multiple?p.length&&e().length<p.length:p.length&&0<=b.selectedIndex?a.k.o(b.options[b.selectedIndex])!==p[0]:p.length||0<=b.selectedIndex)&&a.i.p(a.a.da,null,[b,"change"]);a.a.Hb(b);k&&20<Math.abs(k-b.scrollTop)&&(b.scrollTop=k)}};a.d.options.Ea=a.a.f.D();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.r(b,"change",function(){var e=c(),g=[];a.a.n(b.getElementsByTagName("option"),function(b){b.selected&&g.push(a.k.o(b))});
a.g.oa(e,d,"selectedOptions",g)})},update:function(b,c){if("select"!=a.a.v(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c());d&&"number"==typeof d.length&&a.a.n(b.getElementsByTagName("option"),function(b){var c=0<=a.a.l(d,a.k.o(b));a.a.qb(b,c)})}};a.g.U.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.K(d,function(c,d){d=a.a.c(d);b.style[c]=d||""})}};a.d.submit={init:function(b,c,d,e,g){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");
a.a.r(b,"submit",function(a){var d,e=c();try{d=e.call(g.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Ma(b,c())}};a.e.P.text=!0;a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Bb;a.a.pb(b,d)}}};a.d.uniqueName.Bb=0;a.d.value={after:["options","foreach"],init:function(b,c,d){function e(){k=!1;var e=c(),f=a.k.o(b);a.g.oa(e,d,"value",f)}var g=
["change"],h=d.get("valueUpdate"),k=!1;h&&("string"==typeof h&&(h=[h]),a.a.X(g,h),g=a.a.Va(g));!a.a.ja||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.l(g,"propertychange")||(a.a.r(b,"propertychange",function(){k=!0}),a.a.r(b,"blur",function(){k&&e()}));a.a.n(g,function(c){var d=e;a.a.ac(c,"after")&&(d=function(){setTimeout(e,0)},c=c.substring(5));a.a.r(b,c,d)})},update:function(b,c){var d="select"===a.a.v(b),e=a.a.c(c()),g=a.k.o(b);
e!==g&&(g=function(){a.k.na(b,e)},g(),d&&(e!==a.k.o(b)?a.i.p(a.a.da,null,[b,"change"]):setTimeout(g,0)))}};a.g.U.value=!0;a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,g,h){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,g,h)}}})("click");a.w=function(){};a.w.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");
};a.w.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.w.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.m.j(d)}if(1==b.nodeType||8==b.nodeType)return new a.m.W(b);throw Error("Unknown template type: "+b);};a.w.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,
d)};a.w.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.w.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.w);a.Oa=function(){function b(b,c,d,k){b=a.g.Ga(b);for(var m=a.g.Y,f=0;f<b.length;f++){var p=b[f].key;if(m.hasOwnProperty(p)){var s=m[p];if("function"===typeof s){if(p=s(b[f].value))throw Error(p);}else if(!s)throw Error("This template engine does not support the '"+
p+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.g.ka(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return k.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Ib:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Oa.Ub(b,c)},
d)},Ub:function(a,g){return a.replace(c,function(a,c,d,f,e){return b(e,c,d,g)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",g)})},yb:function(b,c){return a.u.Ca(function(d,k){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.pa(m,b,k)})}}}();a.b("__tr_ambtns",a.Oa.yb);(function(){a.m={};a.m.j=function(a){this.j=a};a.m.j.prototype.text=function(){var b=a.a.v(this.j),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.j[b];var c=arguments[0];
"innerHTML"===b?a.a.Ka(this.j,c):this.j[b]=c};var b=a.a.f.D()+"_";a.m.j.prototype.data=function(c){if(1===arguments.length)return a.a.f.get(this.j,b+c);a.a.f.set(this.j,b+c,arguments[1])};var c=a.a.f.D();a.m.W=function(a){this.j=a};a.m.W.prototype=new a.m.j;a.m.W.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.j,c)||{};b.Pa===q&&b.sa&&(b.Pa=b.sa.innerHTML);return b.Pa}a.a.f.set(this.j,c,{Pa:arguments[0]})};a.m.j.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.j,
c)||{}).sa;a.a.f.set(this.j,c,{sa:arguments[0]})};a.b("templateSources",a.m);a.b("templateSources.domElement",a.m.j);a.b("templateSources.anonymousTemplate",a.m.W)})();(function(){function b(b,c,d){var e;for(c=a.e.nextSibling(c);b&&(e=b)!==c;)b=a.e.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var f=c[0],e=c[c.length-1],g=f.parentNode,h=a.H.instance,n=h.preprocessNode;if(n){b(f,e,function(a,b){var c=a.previousSibling,d=n.call(h,a);d&&(a===f&&(f=d[0]||b),a===e&&(e=d[d.length-1]||c))});c.length=
0;if(!f)return;f===e?c.push(f):(c.push(f,e),a.a.$(c,g))}b(f,e,function(b){1!==b.nodeType&&8!==b.nodeType||a.Sa(d,b)});b(f,e,function(b){1!==b.nodeType&&8!==b.nodeType||a.u.vb(b,[d])});a.a.$(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,s){s=s||{};var l=b&&d(b),l=l&&l.ownerDocument,n=s.templateEngine||g;a.Oa.Ib(f,n,l);f=n.renderTemplate(f,h,s,l);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");
l=!1;switch(e){case "replaceChildren":a.e.S(b,f);l=!0;break;case "replaceNode":a.a.nb(b,f);l=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}l&&(c(f,h),s.afterRender&&a.i.p(s.afterRender,null,[f,h.$data]));return f}var g;a.La=function(b){if(b!=q&&!(b instanceof a.w))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Ia=function(b,c,f,h,s){f=f||{};if((f.templateEngine||g)==q)throw Error("Set a template engine before calling renderTemplate");
s=s||"replaceChildren";if(h){var l=d(h);return a.h(function(){var g=c&&c instanceof a.G?c:new a.G(a.a.c(c)),r="function"==typeof b?b(g.$data,g):b,g=e(h,s,r,g,f);"replaceNode"==s&&(h=g,l=d(h))},null,{ua:function(){return!l||!a.a.va(l)},I:l&&"replaceNode"==s?l.parentNode:l})}return a.u.Ca(function(d){a.Ia(b,c,f,d,"replaceNode")})};a.$b=function(b,d,f,g,h){function l(a,b){c(b,r);f.afterRender&&f.afterRender(b,a)}function n(a,c){r=h.createChildContext(a,f.as,function(a){a.$index=c});var d="function"==
typeof b?b(a,r):b;return e(null,"ignoreTargetNode",d,r,f)}var r;return a.h(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.ga(b,function(b){return f.includeDestroyed||b===q||null===b||!a.a.c(b._destroy)});a.i.p(a.a.Ja,null,[g,b,n,f,l])},null,{I:g})};var h=a.a.f.D();a.d.template={init:function(b,c){var d=a.a.c(c());"string"==typeof d||d.name?a.e.Z(b):(d=a.e.childNodes(b),d=a.a.Vb(d),(new a.m.W(b)).nodes(d));return{controlsDescendantBindings:!0}},update:function(b,c,d,e,g){c=
a.a.c(c());d={};e=!0;var l,n=null;"string"!=typeof c&&(d=c,c=a.a.c(d.name),"if"in d&&(e=a.a.c(d["if"])),e&&"ifnot"in d&&(e=!a.a.c(d.ifnot)),l=a.a.c(d.data));"foreach"in d?n=a.$b(c||b,e&&d.foreach||[],d,b,g):e?(g="data"in d?g.createChildContext(l,d.as):g,n=a.Ia(c||b,g,d,b)):a.e.Z(b);g=n;(l=a.a.f.get(b,h))&&"function"==typeof l.B&&l.B();a.a.f.set(b,h,g&&g.aa()?g:q)}};a.g.Y.template=function(b){b=a.g.Ga(b);return 1==b.length&&b[0].unknown||a.g.Sb(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};
a.e.P.template=!0})();a.b("setTemplateEngine",a.La);a.b("renderTemplate",a.Ia);a.a.ra=function(){function a(b,d,e,g,h){var k=Math.min,m=Math.max,f=[],p,q=b.length,l,n=d.length,r=n-q||1,v=q+n+1,t,u,w;for(p=0;p<=q;p++)for(u=t,f.push(t=[]),w=k(n,p+r),l=m(0,p-1);l<=w;l++)t[l]=l?p?b[p-1]===d[l-1]?u[l-1]:k(u[l]||v,t[l-1]||v)+1:l+1:p+1;k=[];m=[];r=[];p=q;for(l=n;p||l;)n=f[p][l]-1,l&&n===f[p][l-1]?m.push(k[k.length]={status:e,value:d[--l],index:l}):p&&n===f[p-1][l]?r.push(k[k.length]={status:g,value:b[--p],
index:p}):(--l,--p,h.sparse||k.push({status:"retained",value:d[l]}));if(m.length&&r.length){b=10*q;var z;for(d=e=0;(h.dontLimitMoves||d<b)&&(z=m[e]);e++){for(g=0;f=r[g];g++)if(z.value===f.value){z.moved=f.index;f.moved=z.index;r.splice(g,1);d=g=0;break}d+=g}}return k.reverse()}return function(c,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};c=c||[];d=d||[];return c.length<=d.length?a(c,d,"added","deleted",e):a(d,c,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.ra);(function(){function b(b,
c,g,h,k){var m=[],f=a.h(function(){var f=c(g,k,a.a.$(m,b))||[];0<m.length&&(a.a.nb(m,f),h&&a.i.p(h,null,[g,f,k]));m.splice(0,m.length);a.a.X(m,f)},null,{I:b,ua:function(){return!a.a.Ra(m)}});return{R:m,h:f.aa()?f:q}}var c=a.a.f.D();a.a.Ja=function(d,e,g,h,k){function m(b,c){x=s[c];t!==c&&(z[b]=x);x.za(t++);a.a.$(x.R,d);r.push(x);w.push(x)}function f(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.n(c[d].R,function(a){b(a,d,c[d].fa)})}e=e||[];h=h||{};var p=a.a.f.get(d,c)===q,s=a.a.f.get(d,c)||[],
l=a.a.ha(s,function(a){return a.fa}),n=a.a.ra(l,e,h.dontLimitMoves),r=[],v=0,t=0,u=[],w=[];e=[];for(var z=[],l=[],x,A=0,y,B;y=n[A];A++)switch(B=y.moved,y.status){case "deleted":B===q&&(x=s[v],x.h&&x.h.B(),u.push.apply(u,a.a.$(x.R,d)),h.beforeRemove&&(e[A]=x,w.push(x)));v++;break;case "retained":m(A,v++);break;case "added":B!==q?m(A,B):(x={fa:y.value,za:a.q(t++)},r.push(x),w.push(x),p||(l[A]=x))}f(h.beforeMove,z);a.a.n(u,h.beforeRemove?a.L:a.removeNode);for(var A=0,p=a.e.firstChild(d),C;x=w[A];A++){x.R||
a.a.extend(x,b(d,g,x.fa,k,x.za));for(v=0;n=x.R[v];p=n.nextSibling,C=n,v++)n!==p&&a.e.eb(d,n,C);!x.Ob&&k&&(k(x.fa,x.R,x.za),x.Ob=!0)}f(h.beforeRemove,e);f(h.afterMove,z);f(h.afterAdd,l);a.a.f.set(d,c,r)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Ja);a.J=function(){this.allowTemplateRewriting=!1};a.J.prototype=new a.w;a.J.prototype.renderTemplateSource=function(b){var c=(9>a.a.ja?0:b.nodes)?b.nodes():null;if(c)return a.a.Q(c.cloneNode(!0).childNodes);b=b.text();return a.a.Fa(b)};a.J.Aa=
new a.J;a.La(a.J.Aa);a.b("nativeTemplateEngine",a.J);(function(){a.Ba=function(){var a=this.Rb=function(){if("undefined"==typeof u||!u.tmpl)return 0;try{if(0<=u.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,g){g=g||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=u.template(null,"{{ko_with $item.koBindingContext}}"+h+
"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=u.extend({koBindingContext:e},g.templateOptions);e=u.tmpl(h,b,e);e.appendTo(w.createElement("div"));u.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(u.tmpl.tag.ko_code={open:"__.push($1 || '');"},u.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Ba.prototype=
new a.w;var b=new a.Ba;0<b.Rb&&a.La(b);a.b("jqueryTmplTemplateEngine",a.Ba)})()})})();})();




// Knockout Mapping
(function (factory) {
	// Module systems magic dance.

	if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
		// CommonJS or Node: hard-coded dependency on "knockout"
		factory(require("knockout"), exports);
	} else if (typeof define === "function" && define["amd"]) {
		// AMD anonymous module with hard-coded dependency on "knockout"
		define(["knockout", "exports"], factory);
	} else {
		// <script> tag: use the global `ko` object, attaching a `mapping` property
		factory(ko, ko.mapping = {});
	}
}(function (ko, exports) {
	var DEBUG=true;
	var mappingProperty = "__ko_mapping__";
	var realKoDependentObservable = ko.dependentObservable;
	var mappingNesting = 0;
	var dependentObservables;
	var visitedObjects;
	var recognizedRootProperties = ["create", "update", "key", "arrayChanged"];
	var emptyReturn = {};

	var _defaultOptions = {
		include: ["_destroy"],
		ignore: [],
		copy: [],
		observe: []
	};
	var defaultOptions = _defaultOptions;
	
	function unionArrays() {
		var args = arguments,
		l = args.length,
		obj = {},
		res = [],
		i, j, k;
		
		while (l--) {
			k = args[l];
			i = k.length;
			
			while (i--) {
				j = k[i];
				if (!obj[j]) {
					obj[j] = 1;
					res.push(j);
				}
			}	
		}
		
		return res;
	}

	function extendObject(destination, source) {
		var destType;

		for (var key in source) {
			if (source.hasOwnProperty(key) && source[key]) {
				destType = exports.getType(destination[key]);
				if (key && destination[key] && destType !== "array" && destType !== "string") {
					extendObject(destination[key], source[key]);
				} else {
					var bothArrays = exports.getType(destination[key]) === "array" && exports.getType(source[key]) === "array";
					if (bothArrays) {
						destination[key] = unionArrays(destination[key], source[key]);
					} else {
						destination[key] = source[key];
					}
				}
			}
		}
	}

	function merge(obj1, obj2) {
		var merged = {};
		extendObject(merged, obj1);
		extendObject(merged, obj2);

		return merged;
	}

	exports.isMapped = function (viewModel) {
		var unwrapped = ko.utils.unwrapObservable(viewModel);
		return unwrapped && unwrapped[mappingProperty];
	}

	exports.fromJS = function (jsObject /*, inputOptions, target*/ ) {
		if (arguments.length == 0) throw new Error("When calling ko.fromJS, pass the object you want to convert.");

		try {
			if (!mappingNesting++) {
				dependentObservables = [];
				visitedObjects = new objectLookup();
			}

			var options;
			var target;

			if (arguments.length == 2) {
				if (arguments[1][mappingProperty]) {
					target = arguments[1];
				} else {
					options = arguments[1];
				}
			}
			if (arguments.length == 3) {
				options = arguments[1];
				target = arguments[2];
			}

			if (target) {
				options = merge(options, target[mappingProperty]);
			}
			options = fillOptions(options);

			var result = updateViewModel(target, jsObject, options);
			if (target) {
				result = target;
			}

			// Evaluate any dependent observables that were proxied.
			// Do this after the model's observables have been created
			if (!--mappingNesting) {
				while (dependentObservables.length) {
					var DO = dependentObservables.pop();
					if (DO) {
						DO();
						
						// Move this magic property to the underlying dependent observable
						DO.__DO["throttleEvaluation"] = DO["throttleEvaluation"];
					}
				}
			}

			// Save any new mapping options in the view model, so that updateFromJS can use them later.
			result[mappingProperty] = merge(result[mappingProperty], options);

			return result;
		} catch(e) {
			mappingNesting = 0;
			throw e;
		}
	};

	exports.fromJSON = function (jsonString /*, options, target*/ ) {
		var parsed = ko.utils.parseJson(jsonString);
		arguments[0] = parsed;
		return exports.fromJS.apply(this, arguments);
	};

	exports.updateFromJS = function (viewModel) {
		throw new Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
	};

	exports.updateFromJSON = function (viewModel) {
		throw new Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
	};

	exports.toJS = function (rootObject, options) {
		if (!defaultOptions) exports.resetDefaultOptions();

		if (arguments.length == 0) throw new Error("When calling ko.mapping.toJS, pass the object you want to convert.");
		if (exports.getType(defaultOptions.ignore) !== "array") throw new Error("ko.mapping.defaultOptions().ignore should be an array.");
		if (exports.getType(defaultOptions.include) !== "array") throw new Error("ko.mapping.defaultOptions().include should be an array.");
		if (exports.getType(defaultOptions.copy) !== "array") throw new Error("ko.mapping.defaultOptions().copy should be an array.");

		// Merge in the options used in fromJS
		options = fillOptions(options, rootObject[mappingProperty]);

		// We just unwrap everything at every level in the object graph
		return exports.visitModel(rootObject, function (x) {
			return ko.utils.unwrapObservable(x)
		}, options);
	};

	exports.toJSON = function (rootObject, options) {
		var plainJavaScriptObject = exports.toJS(rootObject, options);
		return ko.utils.stringifyJson(plainJavaScriptObject);
	};

	exports.defaultOptions = function () {
		if (arguments.length > 0) {
			defaultOptions = arguments[0];
		} else {
			return defaultOptions;
		}
	};

	exports.resetDefaultOptions = function () {
		defaultOptions = {
			include: _defaultOptions.include.slice(0),
			ignore: _defaultOptions.ignore.slice(0),
			copy: _defaultOptions.copy.slice(0),
			observe: _defaultOptions.observe.slice(0)
		};
	};

	exports.getType = function(x) {
		if ((x) && (typeof (x) === "object")) {
			if (x.constructor === Date) return "date";
			if (x.constructor === Array) return "array";
		}
		return typeof x;
	}

	function fillOptions(rawOptions, otherOptions) {
		var options = merge({}, rawOptions);

		// Move recognized root-level properties into a root namespace
		for (var i = recognizedRootProperties.length - 1; i >= 0; i--) {
			var property = recognizedRootProperties[i];
			
			// Carry on, unless this property is present
			if (!options[property]) continue;
			
			// Move the property into the root namespace
			if (!(options[""] instanceof Object)) options[""] = {};
			options[""][property] = options[property];
			delete options[property];
		}

		if (otherOptions) {
			options.ignore = mergeArrays(otherOptions.ignore, options.ignore);
			options.include = mergeArrays(otherOptions.include, options.include);
			options.copy = mergeArrays(otherOptions.copy, options.copy);
			options.observe = mergeArrays(otherOptions.observe, options.observe);
		}
		options.ignore = mergeArrays(options.ignore, defaultOptions.ignore);
		options.include = mergeArrays(options.include, defaultOptions.include);
		options.copy = mergeArrays(options.copy, defaultOptions.copy);
		options.observe = mergeArrays(options.observe, defaultOptions.observe);

		options.mappedProperties = options.mappedProperties || {};
		options.copiedProperties = options.copiedProperties || {};
		return options;
	}

	function mergeArrays(a, b) {
		if (exports.getType(a) !== "array") {
			if (exports.getType(a) === "undefined") a = [];
			else a = [a];
		}
		if (exports.getType(b) !== "array") {
			if (exports.getType(b) === "undefined") b = [];
			else b = [b];
		}

		return ko.utils.arrayGetDistinctValues(a.concat(b));
	}

	// When using a 'create' callback, we proxy the dependent observable so that it doesn't immediately evaluate on creation.
	// The reason is that the dependent observables in the user-specified callback may contain references to properties that have not been mapped yet.
	function withProxyDependentObservable(dependentObservables, callback) {
		var localDO = ko.dependentObservable;
		ko.dependentObservable = function (read, owner, options) {
			options = options || {};

			if (read && typeof read == "object") { // mirrors condition in knockout implementation of DO's
				options = read;
			}

			var realDeferEvaluation = options.deferEvaluation;

			var isRemoved = false;

			// We wrap the original dependent observable so that we can remove it from the 'dependentObservables' list we need to evaluate after mapping has
			// completed if the user already evaluated the DO themselves in the meantime.
			var wrap = function (DO) {
				// Temporarily revert ko.dependentObservable, since it is used in ko.isWriteableObservable
				var tmp = ko.dependentObservable;
				ko.dependentObservable = realKoDependentObservable;
				var isWriteable = ko.isWriteableObservable(DO);
				ko.dependentObservable = tmp;

				var wrapped = realKoDependentObservable({
					read: function () {
						if (!isRemoved) {
							ko.utils.arrayRemoveItem(dependentObservables, DO);
							isRemoved = true;
						}
						return DO.apply(DO, arguments);
					},
					write: isWriteable && function (val) {
						return DO(val);
					},
					deferEvaluation: true
				});
				if (DEBUG) wrapped._wrapper = true;
				wrapped.__DO = DO;
				return wrapped;
			};
			
			options.deferEvaluation = true; // will either set for just options, or both read/options.
			var realDependentObservable = new realKoDependentObservable(read, owner, options);

			if (!realDeferEvaluation) {
				realDependentObservable = wrap(realDependentObservable);
				dependentObservables.push(realDependentObservable);
			}

			return realDependentObservable;
		}
		ko.dependentObservable.fn = realKoDependentObservable.fn;
		ko.computed = ko.dependentObservable;
		var result = callback();
		ko.dependentObservable = localDO;
		ko.computed = ko.dependentObservable;
		return result;
	}

	function updateViewModel(mappedRootObject, rootObject, options, parentName, parent, parentPropertyName, mappedParent) {
		var isArray = exports.getType(ko.utils.unwrapObservable(rootObject)) === "array";

		parentPropertyName = parentPropertyName || "";

		// If this object was already mapped previously, take the options from there and merge them with our existing ones.
		if (exports.isMapped(mappedRootObject)) {
			var previousMapping = ko.utils.unwrapObservable(mappedRootObject)[mappingProperty];
			options = merge(previousMapping, options);
		}

		var callbackParams = {
			data: rootObject,
			parent: mappedParent || parent
		};

		var hasCreateCallback = function () {
			return options[parentName] && options[parentName].create instanceof Function;
		};

		var createCallback = function (data) {
			return withProxyDependentObservable(dependentObservables, function () {
				
				if (ko.utils.unwrapObservable(parent) instanceof Array) {
					return options[parentName].create({
						data: data || callbackParams.data,
						parent: callbackParams.parent,
						skip: emptyReturn
					});
				} else {
					return options[parentName].create({
						data: data || callbackParams.data,
						parent: callbackParams.parent
					});
				}				
			});
		};

		var hasUpdateCallback = function () {
			return options[parentName] && options[parentName].update instanceof Function;
		};

		var updateCallback = function (obj, data) {
			var params = {
				data: data || callbackParams.data,
				parent: callbackParams.parent,
				target: ko.utils.unwrapObservable(obj)
			};

			if (ko.isWriteableObservable(obj)) {
				params.observable = obj;
			}

			return options[parentName].update(params);
		}

		var alreadyMapped = visitedObjects.get(rootObject);
		if (alreadyMapped) {
			return alreadyMapped;
		}

		parentName = parentName || "";

		if (!isArray) {
			// For atomic types, do a direct update on the observable
			if (!canHaveProperties(rootObject)) {
				switch (exports.getType(rootObject)) {
				case "function":
					if (hasUpdateCallback()) {
						if (ko.isWriteableObservable(rootObject)) {
							rootObject(updateCallback(rootObject));
							mappedRootObject = rootObject;
						} else {
							mappedRootObject = updateCallback(rootObject);
						}
					} else {
						mappedRootObject = rootObject;
					}
					break;
				default:
					if (ko.isWriteableObservable(mappedRootObject)) {
						if (hasUpdateCallback()) {
							var valueToWrite = updateCallback(mappedRootObject);
							mappedRootObject(valueToWrite);
							return valueToWrite;
						} else {
							var valueToWrite = ko.utils.unwrapObservable(rootObject);
							mappedRootObject(valueToWrite);
							return valueToWrite;
						}
					} else {
						var hasCreateOrUpdateCallback = hasCreateCallback() || hasUpdateCallback();
						
						if (hasCreateCallback()) {
							mappedRootObject = createCallback();
						} else {
							mappedRootObject = ko.observable(ko.utils.unwrapObservable(rootObject));
						}

						if (hasUpdateCallback()) {
							mappedRootObject(updateCallback(mappedRootObject));
						}
						
						if (hasCreateOrUpdateCallback) return mappedRootObject;
					}
				}

			} else {
				mappedRootObject = ko.utils.unwrapObservable(mappedRootObject);
				if (!mappedRootObject) {
					if (hasCreateCallback()) {
						var result = createCallback();

						if (hasUpdateCallback()) {
							result = updateCallback(result);
						}

						return result;
					} else {
						if (hasUpdateCallback()) {
							return updateCallback(result);
						}

						mappedRootObject = {};
					}
				}

				if (hasUpdateCallback()) {
					mappedRootObject = updateCallback(mappedRootObject);
				}

				visitedObjects.save(rootObject, mappedRootObject);
				if (hasUpdateCallback()) return mappedRootObject;

				// For non-atomic types, visit all properties and update recursively
				visitPropertiesOrArrayEntries(rootObject, function (indexer) {
					var fullPropertyName = parentPropertyName.length ? parentPropertyName + "." + indexer : indexer;

					if (ko.utils.arrayIndexOf(options.ignore, fullPropertyName) != -1) {
						return;
					}

					if (ko.utils.arrayIndexOf(options.copy, fullPropertyName) != -1) {
						mappedRootObject[indexer] = rootObject[indexer];
						return;
					}

					if(typeof rootObject[indexer] != "object" && typeof rootObject[indexer] != "array" && options.observe.length > 0 && ko.utils.arrayIndexOf(options.observe, fullPropertyName) == -1)
					{
						mappedRootObject[indexer] = rootObject[indexer];
						options.copiedProperties[fullPropertyName] = true;
						return;
					}
					
					// In case we are adding an already mapped property, fill it with the previously mapped property value to prevent recursion.
					// If this is a property that was generated by fromJS, we should use the options specified there
					var prevMappedProperty = visitedObjects.get(rootObject[indexer]);
					var retval = updateViewModel(mappedRootObject[indexer], rootObject[indexer], options, indexer, mappedRootObject, fullPropertyName, mappedRootObject);
					var value = prevMappedProperty || retval;
					
					if(options.observe.length > 0 && ko.utils.arrayIndexOf(options.observe, fullPropertyName) == -1)
					{
						mappedRootObject[indexer] = ko.utils.unwrapObservable(value);
						options.copiedProperties[fullPropertyName] = true;
						return;
					}
					
					if (ko.isWriteableObservable(mappedRootObject[indexer])) {
						value = ko.utils.unwrapObservable(value);
						if (mappedRootObject[indexer]() !== value) {
							mappedRootObject[indexer](value);
						}
					} else {
						value = mappedRootObject[indexer] === undefined ? value : ko.utils.unwrapObservable(value);
						mappedRootObject[indexer] = value;
					}

					options.mappedProperties[fullPropertyName] = true;
				});
			}
		} else { //mappedRootObject is an array
			var changes = [];

			var hasKeyCallback = false;
			var keyCallback = function (x) {
				return x;
			}
			if (options[parentName] && options[parentName].key) {
				keyCallback = options[parentName].key;
				hasKeyCallback = true;
			}

			if (!ko.isObservable(mappedRootObject)) {
				// When creating the new observable array, also add a bunch of utility functions that take the 'key' of the array items into account.
				mappedRootObject = ko.observableArray([]);

				mappedRootObject.mappedRemove = function (valueOrPredicate) {
					var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) {
							return value === keyCallback(valueOrPredicate);
						};
					return mappedRootObject.remove(function (item) {
						return predicate(keyCallback(item));
					});
				}

				mappedRootObject.mappedRemoveAll = function (arrayOfValues) {
					var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
					return mappedRootObject.remove(function (item) {
						return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
					});
				}

				mappedRootObject.mappedDestroy = function (valueOrPredicate) {
					var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) {
							return value === keyCallback(valueOrPredicate);
						};
					return mappedRootObject.destroy(function (item) {
						return predicate(keyCallback(item));
					});
				}

				mappedRootObject.mappedDestroyAll = function (arrayOfValues) {
					var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
					return mappedRootObject.destroy(function (item) {
						return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
					});
				}

				mappedRootObject.mappedIndexOf = function (item) {
					var keys = filterArrayByKey(mappedRootObject(), keyCallback);
					var key = keyCallback(item);
					return ko.utils.arrayIndexOf(keys, key);
				}

				mappedRootObject.mappedGet = function (item) {
					return mappedRootObject()[mappedRootObject.mappedIndexOf(item)];
				}

				mappedRootObject.mappedCreate = function (value) {
					if (mappedRootObject.mappedIndexOf(value) !== -1) {
						throw new Error("There already is an object with the key that you specified.");
					}

					var item = hasCreateCallback() ? createCallback(value) : value;
					if (hasUpdateCallback()) {
						var newValue = updateCallback(item, value);
						if (ko.isWriteableObservable(item)) {
							item(newValue);
						} else {
							item = newValue;
						}
					}
					mappedRootObject.push(item);
					return item;
				}
			}

			var currentArrayKeys = filterArrayByKey(ko.utils.unwrapObservable(mappedRootObject), keyCallback).sort();
			var newArrayKeys = filterArrayByKey(rootObject, keyCallback);
			if (hasKeyCallback) newArrayKeys.sort();
			var editScript = ko.utils.compareArrays(currentArrayKeys, newArrayKeys);

			var ignoreIndexOf = {};
			
			var i, j;

			var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);
			var itemsByKey = {};
			var optimizedKeys = true;
			for (i = 0, j = unwrappedRootObject.length; i < j; i++) {
				var key = keyCallback(unwrappedRootObject[i]);
				if (key === undefined || key instanceof Object) {
					optimizedKeys = false;
					break;
				}
				itemsByKey[key] = unwrappedRootObject[i];
			}

			var newContents = [];
			var passedOver = 0;
			for (i = 0, j = editScript.length; i < j; i++) {
				var key = editScript[i];
				var mappedItem;
				var fullPropertyName = parentPropertyName + "[" + i + "]";
				switch (key.status) {
				case "added":
					var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
					mappedItem = updateViewModel(undefined, item, options, parentName, mappedRootObject, fullPropertyName, parent);
					if(!hasCreateCallback()) {
						mappedItem = ko.utils.unwrapObservable(mappedItem);
					}

					var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
					
					if (mappedItem === emptyReturn) {
						passedOver++;
					} else {
						newContents[index - passedOver] = mappedItem;
					}
						
					ignoreIndexOf[index] = true;
					break;
				case "retained":
					var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
					mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
					updateViewModel(mappedItem, item, options, parentName, mappedRootObject, fullPropertyName, parent);

					var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
					newContents[index] = mappedItem;
					ignoreIndexOf[index] = true;
					break;
				case "deleted":
					mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
					break;
				}

				changes.push({
					event: key.status,
					item: mappedItem
				});
			}

			mappedRootObject(newContents);

			if (options[parentName] && options[parentName].arrayChanged) {
				ko.utils.arrayForEach(changes, function (change) {
					options[parentName].arrayChanged(change.event, change.item);
				});
			}
		}

		return mappedRootObject;
	}

	function ignorableIndexOf(array, item, ignoreIndices) {
		for (var i = 0, j = array.length; i < j; i++) {
			if (ignoreIndices[i] === true) continue;
			if (array[i] === item) return i;
		}
		return null;
	}

	function mapKey(item, callback) {
		var mappedItem;
		if (callback) mappedItem = callback(item);
		if (exports.getType(mappedItem) === "undefined") mappedItem = item;

		return ko.utils.unwrapObservable(mappedItem);
	}

	function getItemByKey(array, key, callback) {
		array = ko.utils.unwrapObservable(array);
		for (var i = 0, j = array.length; i < j; i++) {
			var item = array[i];
			if (mapKey(item, callback) === key) return item;
		}

		throw new Error("When calling ko.update*, the key '" + key + "' was not found!");
	}

	function filterArrayByKey(array, callback) {
		return ko.utils.arrayMap(ko.utils.unwrapObservable(array), function (item) {
			if (callback) {
				return mapKey(item, callback);
			} else {
				return item;
			}
		});
	}

	function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
		if (exports.getType(rootObject) === "array") {
			for (var i = 0; i < rootObject.length; i++)
			visitorCallback(i);
		} else {
			for (var propertyName in rootObject)
			visitorCallback(propertyName);
		}
	};

	function canHaveProperties(object) {
		var type = exports.getType(object);
		return ((type === "object") || (type === "array")) && (object !== null);
	}

	// Based on the parentName, this creates a fully classified name of a property

	function getPropertyName(parentName, parent, indexer) {
		var propertyName = parentName || "";
		if (exports.getType(parent) === "array") {
			if (parentName) {
				propertyName += "[" + indexer + "]";
			}
		} else {
			if (parentName) {
				propertyName += ".";
			}
			propertyName += indexer;
		}
		return propertyName;
	}

	exports.visitModel = function (rootObject, callback, options) {
		options = options || {};
		options.visitedObjects = options.visitedObjects || new objectLookup();

		var mappedRootObject;
		var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);

		if (!canHaveProperties(unwrappedRootObject)) {
			return callback(rootObject, options.parentName);
		} else {
			options = fillOptions(options, unwrappedRootObject[mappingProperty]);

			// Only do a callback, but ignore the results
			callback(rootObject, options.parentName);
			mappedRootObject = exports.getType(unwrappedRootObject) === "array" ? [] : {};
		}

		options.visitedObjects.save(rootObject, mappedRootObject);

		var parentName = options.parentName;
		visitPropertiesOrArrayEntries(unwrappedRootObject, function (indexer) {
			if (options.ignore && ko.utils.arrayIndexOf(options.ignore, indexer) != -1) return;

			var propertyValue = unwrappedRootObject[indexer];
			options.parentName = getPropertyName(parentName, unwrappedRootObject, indexer);

			// If we don't want to explicitly copy the unmapped property...
			if (ko.utils.arrayIndexOf(options.copy, indexer) === -1) {
				// ...find out if it's a property we want to explicitly include
				if (ko.utils.arrayIndexOf(options.include, indexer) === -1) {
					// The mapped properties object contains all the properties that were part of the original object.
					// If a property does not exist, and it is not because it is part of an array (e.g. "myProp[3]"), then it should not be unmapped.
				    if (unwrappedRootObject[mappingProperty]
				        && unwrappedRootObject[mappingProperty].mappedProperties && !unwrappedRootObject[mappingProperty].mappedProperties[indexer]
				        && unwrappedRootObject[mappingProperty].copiedProperties && !unwrappedRootObject[mappingProperty].copiedProperties[indexer]
				        && !(exports.getType(unwrappedRootObject) === "array")) {
						return;
					}
				}
			}

			var outputProperty;
			switch (exports.getType(ko.utils.unwrapObservable(propertyValue))) {
			case "object":
			case "array":
			case "undefined":
				var previouslyMappedValue = options.visitedObjects.get(propertyValue);
				mappedRootObject[indexer] = (exports.getType(previouslyMappedValue) !== "undefined") ? previouslyMappedValue : exports.visitModel(propertyValue, callback, options);
				break;
			default:
				mappedRootObject[indexer] = callback(propertyValue, options.parentName);
			}
		});

		return mappedRootObject;
	}

	function simpleObjectLookup() {
		var keys = [];
		var values = [];
		this.save = function (key, value) {
			var existingIndex = ko.utils.arrayIndexOf(keys, key);
			if (existingIndex >= 0) values[existingIndex] = value;
			else {
				keys.push(key);
				values.push(value);
			}
		};
		this.get = function (key) {
			var existingIndex = ko.utils.arrayIndexOf(keys, key);
			var value = (existingIndex >= 0) ? values[existingIndex] : undefined;
			return value;
		};
	};
	
	function objectLookup() {
		var buckets = {};
		
		var findBucket = function(key) {
			var bucketKey;
			try {
				bucketKey = key;//JSON.stringify(key);
			}
			catch (e) {
				bucketKey = "$$$";
			}

			var bucket = buckets[bucketKey];
			if (bucket === undefined) {
				bucket = new simpleObjectLookup();
				buckets[bucketKey] = bucket;
			}
			return bucket;
		};
		
		this.save = function (key, value) {
			findBucket(key).save(key, value);
		};
		this.get = function (key) {
			return findBucket(key).get(key);
		};
	};
}));