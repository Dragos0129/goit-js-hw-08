!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,i,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function j(e){return l=e,a=setTimeout(h,t),d?b(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=p();if(O(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function w(e){return a=void 0,v&&o?b(e):(o=i=void 0,f)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return j(c);if(s)return a=setTimeout(h,t),b(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=S(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},T.flush=function(){return void 0===a?f:w(p())},T}function g(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var j="feedback-form-state",O={};document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault(),Object.keys(O).forEach((function(e){document.querySelector('[name="'.concat(e,'"]')).value=""})),localStorage.setItem(j,"")})),document.querySelector("form").addEventListener("input",(function(n){O[n.target.name]=n.target.value,localStorage.setItem(j,JSON.stringify(O)),e(t)((function(){localStorage.setItem(j,JSON.stringify(O))}),500)})),document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(j),console.log(O)}))}();
//# sourceMappingURL=03-feedback.5ecc2848.js.map
