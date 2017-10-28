!function(o,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.navscroll=n():o.navscroll=n()}(this,function(){return function(o){function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return o[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=o,n.c=e,n.d=function(o,e,t){n.o(o,e)||Object.defineProperty(o,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(e,"a",e),e},n.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},n.p="/",n(n.s=2)}([function(o,n,e){"use strict";n.b=function(o){c=Object.assign({},c,o)},n.c=function(o){window.history.pushState?window.history.pushState(null,null,o):window.location.hash=o};var t=e(4),r=e.n(t),i=e(1),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},u=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],c={container:"body",duration:500,easing:"ease",offset:0,cancelable:!0,onDone:!1,onCancel:!1,scrollX:!1,scrollY:!0},f=function(){function o(o){var n=o.scrollTop;return"body"===o.tagName.toLowerCase()&&(n=n||document.documentElement.scrollTop),n}function n(o){var n=o.scrollLeft;return"body"===o.tagName.toLowerCase()&&(n=n||document.documentElement.scrollLeft),n}function e(o){if(A)return t();E||(E=o),M=o-E,C=Math.min(M/d,1),C=P(C),f(s,O+x*C,g+T*C),M<d?window.requestAnimationFrame(e):t()}function t(){A||f(s,L,j),E=!1,i.a.off(s,u,S),A&&b&&b(D),!A&&m&&m()}function f(o,n,e){w&&(o.scrollTop=n),h&&(o.scrollLeft=e),"body"===o.tagName.toLowerCase()&&(w&&(document.documentElement.scrollTop=n),h&&(document.documentElement.scrollLeft=e))}var l=void 0,s=void 0,d=void 0,v=void 0,p=void 0,y=void 0,m=void 0,b=void 0,h=void 0,w=void 0,g=void 0,j=void 0,O=void 0,L=void 0,T=void 0,x=void 0,A=void 0,D=void 0,S=function(o){y&&(D=o,A=!0)},P=void 0,E=void 0,M=void 0,C=void 0;return function(t,f){var E=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===(void 0===f?"undefined":a(f))?E=f:"number"==typeof f&&(E.duration=f),!(l=i.a.$(t)))return console.warn('[navscroll-js]: Trying to scroll to element "'+t+'" that is not on the page. Make sure it is set in the DOM.');s=i.a.$(E.container||c.container),d=E.duration||c.duration,v=E.easing||c.easing,p=E.offset||c.offset,y=!1!==E.cancelable,m=E.onDone||c.onDone,b=E.onCancel||c.onCancel,h=void 0===E.scrollX?c.scrollX:E.scrollX,w=void 0===E.scrollY?c.scrollY:E.scrollY;var M=i.a.cumulativeOffset(l);return O=o(s),L=M.top-s.offsetTop+p,g=n(s),j=M.left-s.offsetLeft+p,A=!1,x=L-O,T=j-g,v=i.a.cubicBezierArrayFrom(v),P=r.a.apply(r.a,v),x||T?(i.a.on(s,u,S,{passive:!0}),window.requestAnimationFrame(e),function(){D=null,A=!0}):void 0}}();n.a=f},function(o,n,e){"use strict";var t=e(5),r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,i)}catch(o){}n.a={$:function(o){return"string"!=typeof o?o:document.querySelector(o)},on:function(o,n,e){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};n instanceof Array||(n=[n]);for(var i=0;i<n.length;i++)o.addEventListener(n[i],e,!!r&&t)},off:function(o,n,e){n instanceof Array||(n=[n]);for(var t=0;t<n.length;t++)o.removeEventListener(n[t],e)},cumulativeOffset:function(o){var n=0,e=0;do{n+=o.offsetTop||0,e+=o.offsetLeft||0,o=o.offsetParent}while(o);return{top:n,left:e}},cubicBezierArrayFrom:function(o){return Array.isArray(o)?o:"string"==typeof o?t.a[o]?t.a[o]:o.split(","):t.a.ease}}},function(o,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(3),r=e(0),i=function(o,n){n&&Object(r.b)(n),o.directive("scroll-to",t.a),o.prototype.$scrollTo=t.a.scrollTo};"undefined"!=typeof window&&window.Vue&&(window.NavScroll=t.a,window.NavScroll.setDefaults=r.b,Vue.use(i)),t.a.install=i,n.default=t.a},function(o,n,e){"use strict";function t(o){for(var n=0;n<f.length;++n)if(f[n].el===o)return f.splice(n,1),!0;return!1}function r(o){for(var n=0;n<f.length;++n)if(f[n].el===o)return f[n]}function i(o){var n=r(o);return n||(f.push(n={el:o,binding:{}}),n)}function a(o){var n=o;n.preventDefault();var e=i(this).binding.value;void 0===e.stopPropagation?n.stopPropagation():e.stopPropagation&&n.stopPropagation();var t=!!(void 0===e.hrefDefault||e.hrefDefault)&&function(){Object(u.c)(n.currentTarget.hash)};if("string"==typeof e)return Object(u.a)(e,{onDone:t});e.onDone=t,Object(u.a)(e.el||e.element||n.currentTarget.hash,e)}var u=e(0),c=e(1),f=[];n.a={bind:function(o,n){i(o).binding=n,c.a.on(o,"click",a)},unbind:function(o){t(o),c.a.off(o,"click",a)},update:function(o,n){i(o).binding=n},scrollTo:u.a,bindings:f}},function(o,n){function e(o,n){return 1-3*n+3*o}function t(o,n){return 3*n-6*o}function r(o){return 3*o}function i(o,n,i){return((e(n,i)*o+t(n,i))*o+r(n))*o}function a(o,n,i){return 3*e(n,i)*o*o+2*t(n,i)*o+r(n)}function u(o,n,e,t,r){var a,u,c=0;do{(a=i(u=n+(e-n)/2,t,r)-o)>0?e=u:n=u}while(Math.abs(a)>s&&++c<d);return u}function c(o,n,e,t){for(var r=0;r<f;++r){var u=a(n,e,t);if(0===u)return n;n-=(i(n,e,t)-o)/u}return n}var f=4,l=.001,s=1e-7,d=10,v=11,p=1/(v-1),y="function"==typeof Float32Array;o.exports=function(o,n,e,t){function r(n){for(var t=0,r=1,i=v-1;r!==i&&f[r]<=n;++r)t+=p;var s=t+(n-f[--r])/(f[r+1]-f[r])*p,d=a(s,o,e);return d>=l?c(n,s,o,e):0===d?s:u(n,t,t+p,o,e)}if(!(0<=o&&o<=1&&0<=e&&e<=1))throw new Error("bezier x values must be in [0, 1] range");var f=y?new Float32Array(v):new Array(v);if(o!==n||e!==t)for(var s=0;s<v;++s)f[s]=i(s*p,o,e);return function(a){return o===n&&e===t?a:0===a?0:1===a?1:i(r(a),n,t)}}},function(o,n,e){"use strict";n.a={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]}}])});