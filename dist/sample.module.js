import e from"react";function r(){return r=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function t(e){var r={exports:{}};return e(r,r.exports),r.exports}var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,b=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,h=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118,O=n?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case o:switch(e=e.type){case l:case p:case i:case u:case c:case d:return e;default:switch(e=e&&e.$$typeof){case s:case y:case v:case m:case f:return e;default:return r}}case a:return r}}}function w(e){return S(e)===p}var E={AsyncMode:l,ConcurrentMode:p,ContextConsumer:s,ContextProvider:f,Element:o,ForwardRef:y,Fragment:i,Lazy:v,Memo:m,Portal:a,Profiler:u,StrictMode:c,Suspense:d,isAsyncMode:function(e){return w(e)||S(e)===l},isConcurrentMode:w,isContextConsumer:function(e){return S(e)===s},isContextProvider:function(e){return S(e)===f},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},isForwardRef:function(e){return S(e)===y},isFragment:function(e){return S(e)===i},isLazy:function(e){return S(e)===v},isMemo:function(e){return S(e)===m},isPortal:function(e){return S(e)===a},isProfiler:function(e){return S(e)===u},isStrictMode:function(e){return S(e)===c},isSuspense:function(e){return S(e)===d},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===u||e===c||e===d||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===f||e.$$typeof===s||e.$$typeof===y||e.$$typeof===h||e.$$typeof===_||e.$$typeof===O||e.$$typeof===g)},typeOf:S},k=t(function(e,r){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var y=e.type;switch(y){case f:case s:case o:case i:case a:case p:return y;default:var m=y&&y.$$typeof;switch(m){case u:case l:case b:case d:case c:return m;default:return r}}case n:return r}}}var O=s,S=u,w=c,E=t,k=l,$=o,j=b,x=d,C=n,P=i,T=a,I=p,N=!1;function R(e){return _(e)===s}r.AsyncMode=f,r.ConcurrentMode=O,r.ContextConsumer=S,r.ContextProvider=w,r.Element=E,r.ForwardRef=k,r.Fragment=$,r.Lazy=j,r.Memo=x,r.Portal=C,r.Profiler=P,r.StrictMode=T,r.Suspense=I,r.isAsyncMode=function(e){return N||(N=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||_(e)===f},r.isConcurrentMode=R,r.isContextConsumer=function(e){return _(e)===u},r.isContextProvider=function(e){return _(e)===c},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return _(e)===l},r.isFragment=function(e){return _(e)===o},r.isLazy=function(e){return _(e)===b},r.isMemo=function(e){return _(e)===d},r.isPortal=function(e){return _(e)===n},r.isProfiler=function(e){return _(e)===i},r.isStrictMode=function(e){return _(e)===a},r.isSuspense=function(e){return _(e)===p},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===i||e===a||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===d||e.$$typeof===c||e.$$typeof===u||e.$$typeof===l||e.$$typeof===v||e.$$typeof===g||e.$$typeof===h||e.$$typeof===m)},r.typeOf=_}()}),$=t(function(e){e.exports="production"===process.env.NODE_ENV?E:k}),j=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;function P(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var T=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(e){return r[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,o=P(e),a=1;a<arguments.length;a++){for(var i in t=Object(arguments[a]))x.call(t,i)&&(o[i]=t[i]);if(j){n=j(t);for(var c=0;c<n.length;c++)C.call(t,n[c])&&(o[n[c]]=t[n[c]])}}return o},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",N=function(){};if("production"!==process.env.NODE_ENV){var R=I,A={},M=Function.call.bind(Object.prototype.hasOwnProperty);N=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function V(e,r,t,n,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(M(e,a)){var i;try{if("function"!=typeof e[a]){var c=Error((n||"React class")+": "+t+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw c.name="Invariant Violation",c}i=e[a](r,a,n,t,null,R)}catch(e){i=e}if(!i||i instanceof Error||N((n||"React class")+": type specification of "+t+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in A)){A[i.message]=!0;var u=o?o():"";N("Failed "+t+" type: "+i.message+(null!=u?u:""))}}}V.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(A={})};var z=V,D=Function.call.bind(Object.prototype.hasOwnProperty),F=function(){};function q(){return null}function W(){}function L(){}"production"!==process.env.NODE_ENV&&(F=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),L.resetWarningCache=W;var U=t(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,n="<<anonymous>>",o={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:c(q),arrayOf:function(e){return c(function(r,t,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var c=r[t];if(!Array.isArray(c))return new i("Invalid "+o+" `"+a+"` of type `"+s(c)+"` supplied to `"+n+"`, expected an array.");for(var u=0;u<c.length;u++){var f=e(c,u,n,o,a+"["+u+"]",I);if(f instanceof Error)return f}return null})},element:c(function(r,t,n,o,a){var c=r[t];return e(c)?null:new i("Invalid "+o+" `"+a+"` of type `"+s(c)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:c(function(e,r,t,n,o){var a=e[r];return $.isValidElementType(a)?null:new i("Invalid "+n+" `"+o+"` of type `"+s(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(e){return c(function(r,t,o,a,c){return r[t]instanceof e?null:new i("Invalid "+a+" `"+c+"` of type `"+((u=r[t]).constructor&&u.constructor.name?u.constructor.name:n)+"` supplied to `"+o+"`, expected instance of `"+(e.name||n)+"`.");var u})},node:c(function(e,r,t,n,o){return f(e[r])?null:new i("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(e){return c(function(r,t,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=r[t],u=s(c);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected an object.");for(var f in c)if(D(c,f)){var l=e(c,f,n,o,a+"."+f,I);if(l instanceof Error)return l}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&F(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),q;function r(r,t,n,o,c){for(var u=r[t],f=0;f<e.length;f++)if(a(u,e[f]))return null;var s=JSON.stringify(e,function(e,r){return"symbol"===l(r)?String(r):r});return new i("Invalid "+o+" `"+c+"` of value `"+String(u)+"` supplied to `"+n+"`, expected one of "+s+".")}return c(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&F("Invalid argument supplied to oneOfType, expected an instance of array."),q;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return F("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(t)+" at index "+r+"."),q}return c(function(r,t,n,o,a){for(var c=0;c<e.length;c++)if(null==(0,e[c])(r,t,n,o,a,I))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")})},shape:function(e){return c(function(r,t,n,o,a){var c=r[t],u=s(c);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var f in e){var l=e[f];if(l){var p=l(c,f,n,o,a+"."+f,I);if(p)return p}}return null})},exact:function(e){return c(function(r,t,n,o,a){var c=r[t],u=s(c);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var f=T({},r[t],e);for(var l in f){var p=e[l];if(!p)return new i("Invalid "+o+" `"+a+"` key `"+l+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(c,l,n,o,a+"."+l,I);if(y)return y}return null})}};function a(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function i(e){this.message=e,this.stack=""}function c(e){function r(r,t,o,a,c,u,f){if(a=a||n,u=u||o,f!==I){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}return null==t[o]?r?new i(null===t[o]?"The "+c+" `"+u+"` is marked as required in `"+a+"`, but its value is `null`.":"The "+c+" `"+u+"` is marked as required in `"+a+"`, but its value is `undefined`."):null:e(t,o,a,c,u)}process;var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function u(e){return c(function(r,t,n,o,a,c){var u=r[t];return s(u)!==e?new i("Invalid "+o+" `"+a+"` of type `"+l(u)+"` supplied to `"+n+"`, expected `"+e+"`."):null})}function f(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(f);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var o,a=n.call(r);if(n!==r.entries){for(;!(o=a.next()).done;)if(!f(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!f(i[1]))return!1}return!0;default:return!1}}function s(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function l(e){if(null==e)return""+e;var r=s(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function p(e){var r=l(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return i.prototype=Error.prototype,o.checkPropTypes=z,o.resetWarningCache=z.resetWarningCache,o.PropTypes=o,o}($.isElement):function(){function e(e,r,t,n,o,a){if(a!==I){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:L,resetWarningCache:W};return t.PropTypes=t,t}()}),J={storybook_button:"_button-module__storybook_button__1lL3_",storybook_button__primary:"_button-module__storybook_button__primary__lb4yv","storybook-button--secondary":"_button-module__storybook-button--secondary__32VRz","storybook-button--small":"_button-module__storybook-button--small__2cb0H","storybook-button--medium":"_button-module__storybook-button--medium__cCXvC","storybook-button--large":"_button-module__storybook-button--large__1t0VS"},B=["primary","backgroundColor","size","label"],H=function(t){var n=t.primary,o=t.backgroundColor,a=t.size,i=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}(t,B);return e.createElement("button",r({type:"button",className:[J.storybook_button,"storybook-button--"+a,n?J.storybook_button__primary:"storybook-button--secondary"].join(" "),style:o&&{backgroundColor:o}},i),"yellow")};H.propTypes={primary:U.bool,backgroundColor:U.string,size:U.oneOf(["small","medium","large"]),label:U.string.isRequired,onClick:U.func},H.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};export{H as default};
//# sourceMappingURL=sample.module.js.map
