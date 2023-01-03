!function(){"use strict";var e,t={949:function(e,t,n){var r=n(757),l=n.n(r),c=n(861),a=n(294),o=n(745),u=n(858),i=n(671),f=n(144),s=n(136),m=n(575),p=n(120);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,p.Z)(e);if(t){var l=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return(0,m.Z)(this,n)}}var d=function(e){(0,s.Z)(n,e);var t=E(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).state={error:null,errorInfo:null},r}return(0,f.Z)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.error;t.errorInfo;return n?a.createElement("div",null,a.createElement("h1",null,"Something went wrong"),n?a.createElement("p",null,n.toString()):null):e}}]),n}(a.PureComponent),h=n(727),v=function(){return a.createElement(a.Fragment,null,a.createElement("nav",{className:"navbar"},a.createElement("div",{className:"container"},a.createElement("div",{className:"header"},a.createElement("h4",null,"SHORE BRIDIE ",a.createElement("span",null,"logo"))),a.createElement("div",null,a.createElement("ul",null,a.createElement("li",null,a.createElement(h.OL,{exact:!0,to:"/"},"Home")),a.createElement("li",null," ",a.createElement(h.OL,{to:"/jobs"},"Jobs")),a.createElement("li",null,a.createElement(h.OL,{to:"/postjobs"},"Post a Job")),a.createElement("li",null," ",a.createElement(h.OL,{to:"/aboutus"},"About Us")),a.createElement("li",null," ",a.createElement(h.OL,{to:"/contactus"},"Contact Us")))))))},b=n(982),O=n(168),y=n(779),g={webmapId:"67372ff42cd145319639a99152b15bc3"},w=(0,O.oM)({name:"Map",initialState:g,reducers:{webmapIdChanged:function(e,t){e.webmapId=t.payload}}}),j=w.reducer,P=(w.actions.webmapIdChanged,j),x=(0,y.UY)({Map:P}),k=n(942);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var I=function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,k.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},g)},S=function(){return{Map:I()}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,O.xC)({reducer:x,middleware:(0,b.Z)((0,O.Bx)()),preloadedState:e});return t},A=n(885),M=(0,a.createContext)(null),R=function(e){var t=e.children,n=(0,a.useState)({darkMode:!1}),r=(0,A.Z)(n,2),o=r[0],u=(r[1],function(){var e=(0,c.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return a.useEffect((function(){u()}),[]),a.createElement(M.Provider,{value:o},o?t:null)},D=n(550),W=function(){return a.createElement(h.VK,null,a.createElement("div",{className:"pages"},a.createElement(d,null,a.createElement(v,null),a.createElement(D.rs,null,a.createElement(D.AW,{exact:!0,path:"/"},a.createElement(_,null)),a.createElement(D.AW,{path:"/home"},a.createElement(_,null)),a.createElement(D.AW,{path:"/jobs"}," ",a.createElement(N,null)," "),a.createElement(D.AW,{path:"/postjobs"},a.createElement(H,null)),a.createElement(D.AW,{path:"/aboutus"},a.createElement(B,null)),a.createElement(D.AW,{path:"/contactus"},a.createElement(L,null))))))},_=function(){return a.createElement(d,null,a.createElement("h1",null,"Home"))},B=function(){return a.createElement(d,null,a.createElement("h1",null,"about us"))},L=function(){return a.createElement(d,null,a.createElement("h1",null,"contact us"))},N=function(){return a.createElement(d,null,a.createElement("h1",null,"jobs"))},H=function(){return a.createElement(d,null,a.createElement("h1",null,"Post jobs"))};(0,c.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=S(),(0,o.s)(document.getElementById("root")).render(a.createElement(a.StrictMode,null,a.createElement(u.zt,{store:C(t)},a.createElement(R,null,a.createElement(d,null,a.createElement(W,null))))));case 3:case"end":return e.stop()}}),e)})))()}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=function(t,n,l,c){if(!n){var a=1/0;for(f=0;f<e.length;f++){n=e[f][0],l=e[f][1],c=e[f][2];for(var o=!0,u=0;u<n.length;u++)(!1&c||a>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(o=!1,c<a&&(a=c));if(o){e.splice(f--,1);var i=l();void 0!==i&&(t=i)}}return t}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[n,l,c]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,c,a=n[0],o=n[1],u=n[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(l in o)r.o(o,l)&&(r.m[l]=o[l]);if(u)var f=u(r)}for(t&&t(n);i<a.length;i++)c=a[i],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(f)},n=self.webpackChunkreact_redux_boilerplate=self.webpackChunkreact_redux_boilerplate||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=r.O(void 0,[736],(function(){return r(949)}));l=r.O(l)}();
//# sourceMappingURL=main.588ca8bbec977474c2ff.js.map