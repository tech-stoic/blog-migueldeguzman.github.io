(self.webpackChunktech_stoic=self.webpackChunktech_stoic||[]).push([[128],{2176:function(e){function t(e){return!isNaN(parseFloat(e))&&isFinite(e)}e.exports=function(e,n,r){if(void 0===n&&(n=0),void 0===r&&(r=!1),"cool"===n?n=237:"slate"===n?n=122:"warm"===n&&(n=69),!t(n))throw new Error("Hue is not a number");if(!t(e))throw new Error("Lightness is not a number");e>100&&(e=100),e<0&&(e=0);var o=0;if(0!==n){o=19.92978+-.3651759*e+.001737214*Math.pow(e,2)}var i=0;return r?(i=e/100,e="100%,"):(i=(100-e)/100,e="0%,"),"hsla("+n+","+o+"%,"+e+i+")"}},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n(5827);var r,o,i,a,u=n(5697),c=n.n(u),s=n(4839),l=n.n(s),f=n(2993),p=n.n(f),d=n(7294),h=n(6494),b=n.n(h),y="bodyAttributes",m="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",S="href",O="http-equiv",j="innerHTML",C="itemprop",x="name",A="property",E="rel",k="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},F="defaultTitle",M="defer",H="encodeSpecialCharacters",I="onChangeClientState",N="titleTemplate",z=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),R=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,v.TITLE),n=Q(e,N);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,F);return t||r||void 0},V=function(e){return Q(e,I)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===E&&"canonical"===e[n].toLowerCase()||c===E&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==j&&u!==w&&u!==C||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=b()({},r[u],o[u]);r[u]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,o),ue(f,p);var d={baseTag:se(v.BASE,n),linkTags:se(v.LINK,i),metaTags:se(v.META,a),noscriptTags:se(v.NOSCRIPT,u),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,l)},h={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),c(e,h,b)},ae=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,o=fe(n,r),[d.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case m:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===j||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===j||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(m,o,r),link:pe(v.LINK,i,r),meta:pe(v.META,a,r),noscript:pe(v.NOSCRIPT,u,r),script:pe(v.SCRIPT,c,r),style:pe(v.STYLE,s,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},he=l()((function(e){return{baseTag:$([S,L],e),bodyAttributes:J(y,e),defer:Q(e,M),encode:Q(e,H),htmlAttributes:J(m,e),linkTags:G(v.LINK,[E,S],e),metaTags:G(v.META,[x,T,O,A,C],e),noscriptTags:G(v.NOSCRIPT,[j],e),onChangeClientState:V(e),scriptTags:G(v.SCRIPT,[k,j],e),styleTags:G(v.STYLE,[w],e),title:K(e),titleAttributes:J(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),be=(o=he,a=i=function(e){function t(){return _(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return D({},r,((t={})[n.type]=[].concat(r[n.type]||[],[D({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return D({},o,((t={})[r.type]=a,t.titleAttributes=D({},i),t));case v.BODY:return D({},o,{bodyAttributes:D({},i)});case v.HTML:return D({},o,{htmlAttributes:D({},i)})}return D({},o,((n={})[r.type]=D({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=D({},t);return Object.keys(e).forEach((function(t){var r;n=D({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=D({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(o,r)},Z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind,t.Z=be},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},3307:function(e,t,n){"use strict";var r=a(n(2176)),o=a(n(1763)),i=a(n(7037));function a(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return function(e,t){var n=e.rhythm,a=void 0;return a=(0,o.default)(t.blockMarginBottom)?n(t.blockMarginBottom):(0,i.default)(t.blockMarginBottom)?t.blockMarginBottom:n(1),{"tt,code":{backgroundColor:(0,r.default)(96),borderRadius:"3px",fontFamily:'"SFMono-Regular", Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace',padding:0,paddingTop:"0.2em",paddingBottom:"0.2em"},pre:{background:(0,r.default)(96),borderRadius:"3px",lineHeight:1.42,overflow:"auto",wordWrap:"normal",padding:a},"pre code":{background:"none",lineHeight:1.42},"code:before,code:after,tt:before,tt:after":{letterSpacing:"-0.2em",content:'" "'},"pre code:before,pre code:after,pre tt:before,pre tt:after":{content:"none"}}}}},7403:function(e){var t,n,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))o.call(n,s)&&(u[s]=n[s]);if(r){a=r(n);for(var l=0;l<a.length;l++)i.call(n,a[l])&&(u[a[l]]=n[a[l]])}}return u},u=function(e,t){t||(t=[0,""]),e=String(e);var n=parseFloat(e,10);return t[0]=n,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t},c=function(e){return u(e)[0]},s=function(e){return null==e&&(e=e),function(t,n,r,o){null==r&&(r=e),null==o&&(o=r);var i=u(t)[1];if(i===n)return t;var a=c(t);if("px"!==i)if("em"===i)a=c(t)*c(r);else if("rem"===i)a=c(t)*c(e);else{if("ex"!==i)return t;a=c(t)*c(r)*2}var s=a;if("px"!==n)if("em"===n)s=a/c(o);else if("rem"===n)s=a/c(e);else{if("ex"!==n)return t;s=a/c(o)/2}return parseFloat(s.toFixed(5))+n}},l=u,f=function(e){return l(e)[1]},p=function(e){return l(e)[0]},d={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},h=function(e,t){var n,r=s(t.baseFontSize),o=p(r(e,"px")),i=p(t.baseLineHeightInPx),a=p(r(t.minLinePadding,"px"));return(n=t.roundToNearestHalfLine?Math.ceil(2*o/i)/2:Math.ceil(o/i))*i-o<2*a&&(n+=t.roundToNearestHalfLine?.5:1),n},b=function(e){var t=s(e.baseFontSize);return function(n,r,o){null==n&&(n=1),null==r&&(r=e.baseFontSize),null==o&&(o=0);var i=n*p(e.baseLineHeightInPx)-o+"px",a=t(i,e.rhythmUnit,r);return"px"===f(a)&&(a=Math.floor(p(a))+f(a)),parseFloat(p(a).toFixed(5))+f(a)}},y=Object.prototype.toString;t=function(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"==y.call(e)},n={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4},e.exports=function(e){var r,o,i,u,c=a({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},e),l=(r=c,o=JSON.parse(JSON.stringify(d)),i=Object.assign({},o,r),u=s(i.baseFontSize),f(i.baseLineHeight)?(p(u(i.baseFontSize,"px")),i.baseLineHeightInPx=u(i.baseLineHeight,"px")):i.baseLineHeightInPx=p(i.baseFontSize)*i.baseLineHeight+"px",{rhythm:b(i),establishBaseline:function(){return s((e=i).baseFontSize),{fontSize:p(e.baseFontSize)/16*100+"%",lineHeight:e.baseLineHeight.toString()};var e},linesForFontSize:function(e){return h(e,i)},adjustFontSizeTo:function(e,t,n){return null==t&&(t="auto"),function(e,t,n,r){null==n&&(n=r.baseFontSize),"%"===f(e)&&(e=p(r.baseFontSize)*(p(e)/100)+"px");var o=s(r.baseFontSize);e=o(e,"px",n=o(n,"px"));var i=b(r);return"auto"===t&&(t=h(e,r)),{fontSize:o(e,r.rhythmUnit,n),lineHeight:i(t,n)}}(e,t,n,i)}});return l.scale=function(e){var r=c.baseFontSize.slice(0,-2),o=function(e,r){var o;return null==e&&(e=0),null==r&&(r="golden"),o=t(r)?r:null!=n[r]?n[r]:n.golden,Math.pow(o,e)}(e,c.scaleRatio)*r+"px";return l.adjustFontSizeTo(o)},Object.assign({},{options:c},l)}},4240:function(e,t,n){e.exports=n(7403)},195:function(e,t,n){"use strict";var r=n(3480),o=n(4786),i=n(8100),a=n(7294),u=n(8037),c=n(5414),s=n(5713),l=n.n(s),f=l().rhythm,p=l().scale,d=function(e){return(0,i.tZ)(u.ZP,(0,o.Z)({css:(0,i.iv)({color:"blue",textDecoration:"none"},"")},e))},h=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return(0,i.tZ)("div",{css:(0,i.iv)({minHeight:"100vh",borderTop:f(3/4)+" solid #000000","@media (min-width: 420px)":{border:f(3/4)+" solid #000000"}},"")},(0,i.tZ)("div",{css:(0,i.iv)({minHeight:f(1)},"")},(0,i.tZ)("div",{css:(0,i.iv)({float:"left",marginTop:f(3/4),marginLeft:f(3/4),fontSize:p(.4).fontSize,lineHeight:p(.4).lineHeight},"")},(0,i.tZ)(d,{to:"/"},"tech-stoic")),(0,i.tZ)("div",{css:(0,i.iv)({float:"right",marginTop:f(3/4),marginRight:f(3/4),fontSize:p(.4).fontSize,lineHeight:p(.4).lineHeight},"")},(0,i.tZ)(d,{to:"/blog/"},"blog"),","," ",(0,i.tZ)(d,{to:"/top10/"},"top10"),","," ",(0,i.tZ)(d,{to:"/about/"},"about"))),(0,i.tZ)("div",{css:(0,i.iv)({padding:f(2)+" "+f(3/4),"@media (min-width: 420px)":{padding:f(3)+" "+f(3/4)},maxWidth:f(22),margin:"0 auto"},"")},(0,i.tZ)(c.Z,{defaultTitle:"tech-stoic",titleTemplate:"tech-stoic | %s"}),this.props.children))},t}(a.Component);t.Z=h},5713:function(e,t,n){var r=new(n(4240))({baseFontSize:"18px",headerFontFamily:["Cooper Hewitt","sans-serif"],bodyFontFamily:["Cooper Hewitt","sans-serif"],plugins:[new(0,n(3307).Z)],baseLineHeight:1.45,blockMarginBottom:.85,overrideThemeStyles:function(e){var t=e.rhythm;return{a:{color:"#3A69A8"},blockquote:{marginLeft:0,paddingLeft:t(5/8),borderLeft:t(3/8)+" solid #CDE7B0"},"blockquote > *":{fontStyle:"italic"},"blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4":{marginTop:0},"li > p":{marginBottom:t(.5)},"p code":{fontSize:"75%"},"tt,code":{fontSize:"85%"},pre:{lineHeight:1.22}}}});e.exports=r},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},4239:function(e,t,n){var r=n(2705),o=n(9607),i=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(c){}var o=a.call(e);return r&&(t?e[u]=n:delete e[u]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},1469:function(e){var t=Array.isArray;e.exports=t},1763:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"number"==typeof e||o(e)&&"[object Number]"==r(e)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},7037:function(e,t,n){var r=n(4239),o=n(1469),i=n(7005);e.exports=function(e){return"string"==typeof e||!o(e)&&i(e)&&"[object String]"==r(e)}}}]);
//# sourceMappingURL=5aa481df50ad1a38bc349adbf11a1d9b95b83b2f-78e191b4b4f2426ae337.js.map