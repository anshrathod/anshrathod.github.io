(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[633],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},1496:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var a,i=n(r(1506)),o=n(r(5354)),s=n(r(7316)),c=n(r(7154)),l=n(r(7294)),u=n(r(5697)),d=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,c.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,r=e.fixed,n=h(t||r||[]);return n&&n.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),y=function(e){var t=f(e),r=m(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,w=v&&window.IntersectionObserver,T=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&l.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function C(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(T.has(e.target)){var t=T.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),T.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),T.set(e,t)),function(){r.unobserve(e),T.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+l+o+s+r+n+t+i+a+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=l.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(I,(0,c.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,a(n),s):s})),I=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,f=e.loading,p=e.draggable,m=e.ariaHidden,h=(0,s.default)(e,d);return l.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:u,ref:t,loading:f,draggable:p,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&y(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&w&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:y(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=y(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=m(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,d=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,T=e.loading,S=e.draggable,A=m||g;if(!A)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,c.default)({opacity:L?1:0,transition:N?"opacity "+b+"ms":"none"},s),j="boolean"==typeof y?"lightgray":y,P={transitionDelay:b+"ms"},M=(0,c.default)({opacity:this.state.imgLoaded?0:1},N&&P,s,d),H={title:t,alt:this.state.isVisible?"":r,style:M,className:p,itemProp:w},z=this.state.isHydrated?h(A):A[0];if(m)return l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),j&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&P)}),z.base64&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:H,imageVariants:A,generateSources:C}),z.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:H,imageVariants:A,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,E(A),l.default.createElement(I,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:T,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:r,title:t,loading:T},z,{imageVariants:A}))}}));if(g){var V=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete V.display,l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},j&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:j,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},N&&P)}),z.base64&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:H,imageVariants:A,generateSources:C}),z.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:H,imageVariants:A,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,E(A),l.default.createElement(I,{alt:r,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:T,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:r,title:t,loading:T},z,{imageVariants:A}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function P(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}N.propTypes={resolutions:R,sizes:j,fixed:P(u.default.oneOfType([R,u.default.arrayOf(R)])),fluid:P(u.default.oneOfType([j,u.default.arrayOf(j)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var M=N;t.Z=M},913:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(1721),a=r(5444),i=r(1496),o=r(7294),s="contacts-module--textDiv--OQzGx",c=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return o.createElement(a.StaticQuery,{query:"230038957",render:function(e){return o.createElement(o.Fragment,null,o.createElement("div",{className:"container","data-sal":"fade","data-sal-delay":"50","data-sal-easing":"ease"},o.createElement("div",{className:"contacts-module--divider--5oFpE"}),o.createElement("div",{className:"contacts-module--title--JYcXH"},"Contact",o.createElement("div",{className:"contacts-module--desc--wRodI"},"<Reach out to me!/>"))),o.createElement("div",{className:s},o.createElement("h1",{className:"text text-center"},"Hit me up with anything.")),o.createElement("div",{className:"contacts-module--socialDiv--X6g7J"},e.dataJson.socials.map((function(e){return o.createElement(o.Fragment,null,o.createElement("div",{key:e.url},o.createElement("a",{href:e.url},o.createElement(i.Z,{className:"contacts-module--img--fSeN4",fluid:e.img.childImageSharp.fluid,alt:e.handle,title:e.handle+" on "+e.name}))))}))),o.createElement("div",{className:s},o.createElement("div",{className:"text text-center mt-4"},o.createElement(a.Link,{to:"/series"},"Bears. Beets. Battlestar Gallactica."))))}})},t}(o.Component),l=c},1871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5444),a=r(7294),i=r(1496),o="darkMode-module--img--EBo8+",s=function(){var e=(0,a.useState)(!0),t=e[0],r=e[1],s=function(){if(t){r(!1);var e=document.querySelector("#outerdiv");e.classList.add("rotate"),e.classList.remove("rotate-reverse"),setTimeout((function(){document.body.classList.add("dark"),document.body.classList.remove("light")}),1500)}},c=function(){if(!t){r(!0);var e=document.querySelector("#outerdiv");e.classList.remove("rotate"),e.classList.add("rotate-reverse"),setTimeout((function(){document.body.classList.add("light"),document.body.classList.remove("dark")}),1500)}};return a.createElement(n.StaticQuery,{query:"3214568256",render:function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"darkMode-module--maindiv--XZV0i"},a.createElement("div",{id:"outerdiv",className:"darkMode-module--outerdiv--G1mtS"},a.createElement("div",{role:"button",className:"darkMode-module--lightmode--LVFRW",onClick:s,tabIndex:"0",id:"sun"},a.createElement(i.Z,{className:o,fluid:e.allFile.edges[1].node.childImageSharp.fluid})),a.createElement("div",{role:"button",onClick:c,id:"moon",tabIndex:"0",className:"darkMode-module--darkmode--M+3dF"},a.createElement(i.Z,{className:o,fluid:e.allFile.edges[0].node.childImageSharp.fluid})))))}})};var c=function(){return a.createElement(n.StaticQuery,{query:"3252677741",render:function(e){return a.createElement(a.Fragment,null,a.createElement("nav",{className:"navbar-module--navbar--BHcaw d-flex justify-content-between"},a.createElement("div",{className:"navbar-module--nav_title--zX4M7"},a.createElement(n.Link,{to:"/"},e.dataJson.name)),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-6 navbar-module--mode--f7rLR"},a.createElement(s,null)),a.createElement("div",{className:"col-6 navbar-module--nav_resume--vw-GN"},a.createElement("a",{href:e.dataJson.resumeUrl},"Resume")))))}})}},2335:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,a,i,o,s=r(5444),c=r(7294),l=r(5697),u=r.n(l),d=r(4839),f=r.n(d),p=r(2993),m=r.n(p),h=r(6494),g=r.n(h),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",S="href",O="http-equiv",C="innerHTML",A="itemprop",L="name",k="property",x="rel",I="src",N="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",P="defer",M="encodeSpecialCharacters",H="onChangeClientState",z="titleTemplate",V=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],_="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=$(e,w.TITLE),r=$(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,j);return t||n||void 0},J=function(e){return $(e,H)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||r===x&&"canonical"===e[r].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==C&&s!==E&&s!==A||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=g()({},n[s],a[s]);n[s]=c}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ee=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:r.g.requestAnimationFrame||ee,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:r.g.cancelAnimationFrame||te,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;le(w.BODY,n),le(w.HTML,a),ce(d,f);var p={baseTag:ue(w.BASE,r),linkTags:ue(w.LINK,i),metaTags:ue(w.META,o),noscriptTags:ue(w.NOSCRIPT,s),scriptTags:ue(w.SCRIPT,l),styleTags:ue(w.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},se=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),le(w.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(_),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);a.length===i.length?r.removeAttribute(_):r.getAttribute(_)!==o.join(",")&&r.setAttribute(_,o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(_,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},de=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[_]=!0,a=fe(r,n),[c.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=de(r),i=se(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[_]=!0,n);return Object.keys(t).forEach((function(e){var r=R[e]||e;if(r===C||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+G(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},me=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:pe(w.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(b,a,n),link:pe(w.LINK,i,n),meta:pe(w.META,o,n),noscript:pe(w.NOSCRIPT,s,n),script:pe(w.SCRIPT,c,n),style:pe(w.STYLE,l,n),title:pe(w.TITLE,{title:d,titleAttributes:f},n)}},he=f()((function(e){return{baseTag:Q([S,N],e),bodyAttributes:K(y,e),defer:$(e,P),encode:$(e,M),htmlAttributes:K(b,e),linkTags:X(w.LINK,[x,S],e),metaTags:X(w.META,[L,T,O,k,A],e),noscriptTags:X(w.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:X(w.SCRIPT,[I,C],e),styleTags:X(w.STYLE,[E],e),title:Z(e),titleAttributes:K(v,e)}}),(function(e){ie&&ne(ie),e.defer?ie=re((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),me)((function(){return null})),ge=(a=he,o=i=function(e){function t(){return F(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return W({},n,((t={})[r.type]=[].concat(n[r.type]||[],[W({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case w.TITLE:return W({},a,((t={})[n.type]=o,t.titleAttributes=W({},i),t));case w.BODY:return W({},a,{bodyAttributes:W({},i)});case w.HTML:return W({},a,{htmlAttributes:W({},i)})}return W({},a,((r={})[n.type]=W({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=W({},t);return Object.keys(e).forEach((function(t){var n;r=W({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[V[r]||r]=e[r],t}),t)}(U(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=W({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ge.renderStatic=ge.rewind;function ye(e){var t,r,n=e.description,a=e.lang,i=e.meta,o=e.title,l=(0,s.useStaticQuery)("3009907209").site,u=l.siteMetadata.image,d=l.siteMetadata.keywords,f=n||l.siteMetadata.description,p=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(ge,{htmlAttributes:{lang:a},title:o,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:f},{name:"keywords",content:d},{property:"og:title",content:o},{property:"og:description",content:f},{property:"og:type",content:"website"},{property:"og:image",content:u},{name:"twitter:card",content:"summary"},{name:"twitter:image",content:u},{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:o},{name:"twitter:description",content:f}].concat(i)})}ye.defaultProps={lang:"en",meta:[],description:""};var be=ye},6133:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),a=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],a=function(){var e=document.documentElement.scrollTop;e>300?r(!0):e<=300&&r(!1)};return(0,n.useEffect)((function(){window.addEventListener("scroll",a)}),[]),n.createElement("div",{className:"backToTop-module--btn--8C7Rt",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:t?"inline":"none"}},n.createElement("p",{className:"backToTop-module--text--nY357"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet"},n.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"",stroke:"none"},n.createElement("path",{d:"M2147 4018 c-246 -601 -447 -1100 -447 -1109 0 -19 61 -79 81 -79 8 0 187 77 399 171 212 94 394 173 405 176 13 3 175 -63 419 -171 220 -97 404 -176 410 -176 12 0 86 71 86 82 0 11 -891 2183 -899 2191 -4 4 -208 -485 -454 -1085z"}),n.createElement("path",{d:"M1905 4054 c-275 -93 -560 -272 -774 -485 -332 -331 -527 -717 -596 -1181 -21 -139 -21 -460 0 -603 67 -452 265 -845 590 -1170 293 -294 644 -483 1060 -572 123 -26 144 -27 400 -28 238 0 283 3 385 22 401 77 764 263 1062 542 208 196 397 476 509 759 42 105 94 297 115 428 23 136 26 474 5 609 -92 612 -430 1138 -946 1470 -150 97 -492 251 -512 232 -3 -4 43 -125 104 -269 l109 -263 96 -65 c372 -252 624 -624 720 -1064 19 -88 22 -131 22 -331 1 -218 -1 -236 -28 -350 -106 -449 -353 -804 -729 -1049 -491 -321 -1147 -351 -1668 -79 -711 372 -1051 1172 -831 1958 99 355 355 701 672 908 47 31 95 64 107 74 15 12 60 110 128 277 58 143 104 260 102 262 -1 1 -47 -13 -102 -32z"}))),"Back To Top"))}}}]);
//# sourceMappingURL=7742f4186e721908c541836135af733a4af032c0-ce71b92950539e1dbc86.js.map