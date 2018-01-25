!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("NavScrollTo",[],t):"object"==typeof exports?exports.NavScrollTo=t():e.NavScrollTo=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,n){"use strict";function o(e){e&&(window.history.pushState?window.history.pushState(null,null,e):window.location.hash=e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setLocationHash=o;var r=n(1),a=n.n(r),c=n(2),l=n(4);const i=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],s=(()=>{function e(e){let t=e.scrollTop;return"body"===e.tagName.toLowerCase()&&(t=t||document.documentElement.scrollTop),t}function t(e){let t=e.scrollLeft;return"body"===e.tagName.toLowerCase()&&(t=t||document.documentElement.scrollLeft),t}function n(e){if(M)return r();q||(q=e),X=e-q,Y=Math.min(X/p,1),Y=P(Y),s(d,C+I*Y,j+N*Y),X<p?window.AFRequestID=window.requestAnimationFrame(n):r()}function r(){M||s(d,E,x),q=!1,k&&o(A),O&&!S&&u(L,F),M&&w&&w(D),h&&h(),c.a.off(d,i,$),setTimeout(()=>{c.a.on(d,"scroll",S,{passive:!0})},100)}function s(e,t,n){g&&(e.scrollTop=t),b&&(e.scrollLeft=n),"body"===e.tagName.toLowerCase()&&(g&&(document.documentElement.scrollTop=t),b&&(document.documentElement.scrollLeft=n))}function u(e,t){t.forEach(e=>{e.classList.remove(T)}),e&&e.classList.add(T)}let f,d,p,v,m,y,h,w,b,g,T,L,A,k,F,O,S,j,x,C,E,N,I,M,D,P,q,X,Y,$=e=>{y&&(D=e,M=!0)};return function(o,r,s={}){if("object"==typeof r?s=r:"number"==typeof r&&(s.duration=r),!(f=c.a.$(o)))return console.warn(`[navscroll-js]: Trying to scroll to element "${o}" that is not on the page. Make sure it is set in the DOM.`);const q=Object(l.a)();if(!(d=c.a.$(s.container||q.container)))return console.warn(`[navscroll-js]: Scrolling container "${s.container||q.container}" is not present on the page.`);p=s.duration||q.duration,v=s.easing||q.easing,m=s.offset||q.offset,y="cancelable"in s?!1!==s.cancelable:q.cancelable,h=s.onDone||q.onDone,w=s.onCancel||q.onCancel,b=void 0===s.scrollX?q.scrollX:s.scrollX,g=void 0===s.scrollY?q.scrollY:s.scrollY,T=void 0===s.activeClass?q.activeClass:s.activeClass,L=s.clickedNavItem||q.clickedNavItem,A=L?L.hash||L.dataset.href:s.hash||q.hash,k=void 0===s.anchor?q.anchor:s.anchor,F=s.navItems||q.navItems,O=void 0===s.alwaysTrack?q.alwaysTrack:s.alwaysTrack,S="function"==typeof s.trackingFn?s.trackingFn:q.trackingFn;let X=c.a.cumulativeOffset(f);return C=e(d),E=X.top-d.offsetTop-m,j=t(d),x=X.left-d.offsetLeft-m,M=!1,I=E-C,N=x-j,v=c.a.cubicBezierArrayFrom(v),P=a.a.apply(a.a,v),I||N?(O||(c.a.off(d,"scroll",S),window.cancelAnimationFrame(window.AFRequestID),u(L,F)),c.a.on(d,i,$,{passive:!0}),window.requestAnimationFrame(n),()=>{D=null,M=!0}):void 0}})();t.default=s},function(e,t){function n(e,t){return 1-3*t+3*e}function o(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,t,a){return((n(t,a)*e+o(t,a))*e+r(t))*e}function c(e,t,a){return 3*n(t,a)*e*e+2*o(t,a)*e+r(t)}function l(e,t,n,o,r){var c,l,i=0;do{(c=a(l=t+(n-t)/2,o,r)-e)>0?n=l:t=l}while(Math.abs(c)>f&&++i<d);return l}function i(e,t,n,o){for(var r=0;r<s;++r){var l=c(t,n,o);if(0===l)return t;t-=(a(t,n,o)-e)/l}return t}var s=4,u=.001,f=1e-7,d=10,p=11,v=1/(p-1),m="function"==typeof Float32Array;e.exports=function(e,t,n,o){function r(t){for(var o=0,r=1,a=p-1;r!==a&&s[r]<=t;++r)o+=v;var f=o+(t-s[--r])/(s[r+1]-s[r])*v,d=c(f,e,n);return d>=u?i(t,f,e,n):0===d?f:l(t,o,o+v,e,n)}if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");var s=m?new Float32Array(p):new Array(p);if(e!==t||n!==o)for(var f=0;f<p;++f)s[f]=a(f*v,e,n);return function(c){return e===t&&n===o?c:0===c?0:1===c?1:a(r(c),t,o)}}},function(e,t,n){"use strict";var o=n(3);let r=!1;try{let e=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,e)}catch(e){}t.a={$:e=>"string"!=typeof e?e:document.querySelector(e),on(e,t,n,o={passive:!1}){t instanceof Array||(t=[t]);for(let a=0;a<t.length;a++)e.addEventListener(t[a],n,!!r&&o)},off(e,t,n){t instanceof Array||(t=[t]);for(let o=0;o<t.length;o++)e.removeEventListener(t[o],n)},cumulativeOffset(e){let t=0,n=0;do{t+=e.offsetTop||0,n+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:n}},cubicBezierArrayFrom:e=>Array.isArray(e)?e:"string"==typeof e?o.a[e]?o.a[e]:e.split(",").map(e=>+e):o.a.ease}},function(e,t,n){"use strict";t.a={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]}},function(e,t,n){"use strict";t.a=function(e){return o};let o={container:"body",itemSelector:".scroll-item",activeClass:"active",el:null,duration:600,easing:"ease",scrollX:!1,scrollY:!0,offset:0,onScrollOffsetX:void 0,onScrollOffsetY:void 0,alwaysTrack:!1,cancelable:!0,stopPropagation:!0,onDone:null,onCancel:null,anchor:!0,hash:null,clickToScroll:!0,clickedNavItem:null,navItems:[]}}]).default});