var e,t,n,o,l,r={},i=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var o,l=arguments,r={};for(o in t)"key"!==o&&"ref"!==o&&(r[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(r.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===r[o]&&(r[o]=e.defaultProps[o]);return u(e,r,t&&t.key,t&&t.ref,null)}function u(t,n,o,l,r){var i={type:t,props:n,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(i.__v=i),e.vnode&&e.vnode(i),i}function f(e){return e.children}function p(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function b(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return b(e)}}function h(l){(!l.__d&&(l.__d=!0)&&t.push(l)&&!m.__r++||o!==e.debounceRendering)&&((o=e.debounceRendering)||n)(m)}function m(){for(var e;m.__r=t.length;)e=t.sort((function(e,t){return e.__v.__b-t.__v.__b})),t=[],e.some((function(e){var t,n,o,l,r,i,a;e.__d&&(i=(r=(t=e).__v).__e,(a=t.__P)&&(n=[],(o=c({},r)).__v=o,l=j(a,r,o,t.__n,void 0!==a.ownerSVGElement,null,n,null==i?v(r):i),P(n,r),l!=i&&b(r)))}))}function _(e,t,n,o,l,a,c,d,p,b){var h,m,_,y,x,k,w,P=o&&o.__k||i,C=P.length;for(p==r&&(p=null!=c?c[0]:C?v(o,0):null),n.__k=[],h=0;h<t.length;h++)if(null!=(y=n.__k[h]=null==(y=t[h])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y?u(null,y,null,null,y):Array.isArray(y)?u(f,{children:y},null,null,null):null!=y.__e||null!=y.__c?u(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(_=P[h])||_&&y.key==_.key&&y.type===_.type)P[h]=void 0;else for(m=0;m<C;m++){if((_=P[m])&&y.key==_.key&&y.type===_.type){P[m]=void 0;break}_=null}x=j(e,y,_=_||r,l,a,c,d,p,b),(m=y.ref)&&_.ref!=m&&(w||(w=[]),_.ref&&w.push(_.ref,null,y),w.push(m,y.__c||x,y)),null!=x?(null==k&&(k=x),p=g(e,y,_,P,c,x,p),"option"==n.type?e.value="":"function"==typeof n.type&&(n.__d=p)):p&&_.__e==p&&p.parentNode!=e&&(p=v(_))}if(n.__e=k,null!=c&&"function"!=typeof n.type)for(h=c.length;h--;)null!=c[h]&&s(c[h]);for(h=C;h--;)null!=P[h]&&E(P[h],P[h]);if(w)for(h=0;h<w.length;h++)S(w[h],w[++h],w[++h])}function g(e,t,n,o,l,r,i){var a,c,s;if(void 0!==t.__d)a=t.__d,t.__d=void 0;else if(l==n||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),a=null;else{for(c=i,s=0;(c=c.nextSibling)&&s<o.length;s+=2)if(c==r)break e;e.insertBefore(r,i),a=i}return void 0!==a?a:r.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===a.test(t)?n+"px":null==n?"":n}function x(e,t,n,o,l){var r,i,a,c,s;if(l?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(r=e.style,"string"==typeof n)r.cssText=n;else{if("string"==typeof o&&(r.cssText="",o=null),o)for(c in o)n&&c in n||y(r,c,"");if(n)for(s in n)o&&n[s]===o[s]||y(r,s,n[s])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(o||e.addEventListener(t,k,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,k,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!l&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function k(t){this.l[t.type](e.event?e.event(t):t)}function w(e,t,n){var o,l;for(o=0;o<e.__k.length;o++)(l=e.__k[o])&&(l.__=e,l.__e&&("function"==typeof l.type&&l.__k.length>1&&w(l,t,n),t=g(n,l,l,e.__k,null,l.__e,t),"function"==typeof e.type&&(e.__d=t)))}function j(t,n,o,l,r,i,a,s,d){var u,v,b,h,m,g,y,x,k,j,P,S=n.type;if(void 0!==n.constructor)return null;(u=e.__b)&&u(n);try{e:if("function"==typeof S){if(x=n.props,k=(u=S.contextType)&&l[u.__c],j=u?k?k.props.value:u.__:l,o.__c?y=(v=n.__c=o.__c).__=v.__E:("prototype"in S&&S.prototype.render?n.__c=v=new S(x,j):(n.__c=v=new p(x,j),v.constructor=S,v.render=L),k&&k.sub(v),v.props=x,v.state||(v.state={}),v.context=j,v.__n=l,b=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=S.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,S.getDerivedStateFromProps(x,v.__s))),h=v.props,m=v.state,b)null==S.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==S.getDerivedStateFromProps&&x!==h&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(x,j),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(x,v.__s,j)||n.__v===o.__v){v.props=x,v.state=v.__s,n.__v!==o.__v&&(v.__d=!1),v.__v=n,n.__e=o.__e,n.__k=o.__k,v.__h.length&&a.push(v),w(n,s,t);break e}null!=v.componentWillUpdate&&v.componentWillUpdate(x,v.__s,j),null!=v.componentDidUpdate&&v.__h.push((function(){v.componentDidUpdate(h,m,g)}))}v.context=j,v.props=x,v.state=v.__s,(u=e.__r)&&u(n),v.__d=!1,v.__v=n,v.__P=t,u=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(l=c(c({},l),v.getChildContext())),b||null==v.getSnapshotBeforeUpdate||(g=v.getSnapshotBeforeUpdate(h,m)),P=null!=u&&u.type==f&&null==u.key?u.props.children:u,_(t,Array.isArray(P)?P:[P],n,o,l,r,i,a,s,d),v.base=n.__e,v.__h.length&&a.push(v),y&&(v.__E=v.__=null),v.__e=!1}else null==i&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=C(o.__e,n,o,l,r,i,a,d);(u=e.diffed)&&u(n)}catch(t){n.__v=null,e.__e(t,n,o)}return n.__e}function P(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function C(e,t,n,o,l,a,c,s){var d,u,f,p,v,b=n.props,h=t.props;if(l="svg"===t.type||l,null!=a)for(d=0;d<a.length;d++)if(null!=(u=a[d])&&((null===t.type?3===u.nodeType:u.localName===t.type)||e==u)){e=u,a[d]=null;break}if(null==e){if(null===t.type)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,h.is&&{is:h.is}),a=null,s=!1}if(null===t.type)b!==h&&e.data!=h&&(e.data=h);else{if(null!=a&&(a=i.slice.call(e.childNodes)),f=(b=n.props||r).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!s){if(null!=a)for(b={},v=0;v<e.attributes.length;v++)b[e.attributes[v].name]=e.attributes[v].value;(p||f)&&(p&&f&&p.__html==f.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,o,l){var r;for(r in n)"children"===r||"key"===r||r in t||x(e,r,null,n[r],o);for(r in t)l&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||x(e,r,t[r],n[r],o)})(e,h,b,l,s),p?t.__k=[]:(d=t.props.children,_(e,Array.isArray(d)?d:[d],t,n,o,"foreignObject"!==t.type&&l,a,c,r,s)),s||("value"in h&&void 0!==(d=h.value)&&d!==e.value&&x(e,"value",d,b.value,!1),"checked"in h&&void 0!==(d=h.checked)&&d!==e.checked&&x(e,"checked",d,b.checked,!1))}return e}function S(t,n,o){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,o)}}function E(t,n,o){var l,r,i;if(e.unmount&&e.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||S(l,null,n)),o||"function"==typeof t.type||(o=null!=(r=t.__e)),t.__e=t.__d=void 0,null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){e.__e(t,n)}l.base=l.__P=null}if(l=t.__k)for(i=0;i<l.length;i++)l[i]&&E(l[i],n,o);null!=r&&s(r)}function L(e,t,n){return this.constructor(e,n)}e={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return h(n.__E=n)}catch(t){e=t}throw e}},p.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),h(this))},p.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),h(this))},p.prototype.render=f,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,l=r;var M=window.location.href.includes("localhost:4000")?"DEV":"PROD",D={},O={render:void 0},z=function(){D.activePanel="editor",D.activeCodePanel="body",D.activeProject=0,D.projects=[{title:"Example Project",head:'<title>My Site</title>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n<meta name="description" content="">\n<meta name="keywords" content="">\n<meta property="og:type" content="website">\n<meta property="og:url" content="">\n<meta property="og:title" content="">\n<meta property="og:description" content="">',body:"<div style='padding: 20px 0px 0px 0px;'>\n  <h2>Welcome!</h2>\n  <p>To start an empty project, go to \"My Projects\".</p>\n</div>\n<div id='clock-container'>\n  <div class='clock'>\n    <div class='hand hour' data-hour-hand></div>\n    <div class='hand minute' data-minute-hand></div>\n    <div class='hand second' data-second-hand></div>\n    <div class='number number1'>1</div>\n    <div class='number number2'>2</div>\n    <div class='number number3'>3</div>\n    <div class='number number4'>4</div>\n    <div class='number number5'>5</div>\n    <div class='number number6'>6</div>\n    <div class='number number7'>7</div>\n    <div class='number number8'>8</div>\n    <div class='number number9'>9</div>\n    <div class='number number10'>10</div>\n    <div class='number number11'>11</div>\n    <div class='number number12'>12</div>\n  </div>\n</div>\n<div style='padding: 0px 0px;'>\n  <h2>\"Build A Clock With Javascript\"</h2>\n  <p>A project by WebDevSimplified</p>\n</div>",css:"*, *::after, *::before{\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n}\n\nhtml, body {\n  background-color: lightblue;\n  min-height: 100%;\n}\n\nh2, p {\n  color: rgba(0, 0, 0, .8);\n  text-align: center;\n}\n\n#clock-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 50px 0px 25px 0px;\n}\n\n.clock {\n  width: 300px;\n  height: 300px;\n  background-color: rgba(255, 255, 255, .8);\n  border-radius: 50%;\n  border: 2px solid black;\n  position: relative;\n}\n\n.clock .number {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transform: rotate(var(--rotation));\n  font-size: 1.5rem;\n}\n\n.clock .number1 { --rotation: 30deg; }\n.clock .number2 { --rotation: 60deg; }\n.clock .number3 { --rotation: 90deg; }\n.clock .number4 { --rotation: 120deg; }\n.clock .number5 { --rotation: 150deg; }\n.clock .number6 { --rotation: 180deg; }\n.clock .number7 { --rotation: 210deg; }\n.clock .number8 { --rotation: 240deg; }\n.clock .number9 { --rotation: 270deg; }\n.clock .number10 { --rotation: 300deg; }\n.clock .number11 { --rotation: 330deg; }\n\n.clock .hand {\n  --rotation: 0;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  width: 10px;\n  height: 50%;\n  background-color: black;\n  border: 1px solid white;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  z-index: 10;\n  transform-origin: bottom;\n  transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));\n}\n\n.clock::after {\n  content: '';\n  position: absolute;\n  background-color: black;\n  z-index: 11;\n  width: 15px;\n  height: 15px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n}\n\n.clock .second {\n  width: 3px;\n  height: 45%;\n  background-color: red;\n}\n\n.clock .minute {\n  width: 7px;\n  height: 40%;\n  background-color: black;\n}\n\n.clock .hour {\n  width: 10px;\n  height: 35%;\n  background-color: black;\n}",js:"setInterval(setClock, 1000)\n\nconst hourHand = document.querySelector('[data-hour-hand]')\nconst minuteHand = document.querySelector('[data-minute-hand]')\nconst secondHand = document.querySelector('[data-second-hand]')\n\nfunction setClock() {\n    const currentDate = new Date()\n    const secondsRatio = currentDate.getSeconds() / 60\n    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60\n    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12\n\n    setRotation(secondHand, secondsRatio)\n    setRotation(minuteHand, minutesRatio)\n    setRotation(hourHand, hoursRatio)\n}\n\nfunction setRotation(element, rotationRatio) {\n    element.style.setProperty('--rotation', rotationRatio * 360)\n}\n\nsetClock()",videoEmbed:""},{title:"Empty Project 2",head:"",body:"",css:"",js:"",videoEmbed:""},{title:"Empty Project 3",head:"",body:"",css:"",js:"",videoEmbed:""},{title:"Empty Project 4",head:"",body:"",css:"",js:"",videoEmbed:""},{title:"Empty Project 5",head:"",body:"",css:"",js:"",videoEmbed:""}],Object.seal(D),O.editors={head:void 0,body:void 0,css:void 0,js:void 0},O.iframeSrc="",O.videoSettingsOpen=!1,O.embedEditOpen=!1,O.embedEditVal="",O.videoOpen=!0,O.openProjectOpen=!1,O.projectSettings=!1,O.runCache=0,Object.seal(O)},H=function(e){D.activePanel=e,O.render()},R=function(e){var t=O.editors[e].getValue();D.projects[D.activeProject][e]=t},T=function(e){D.activeCodePanel=e,O.render(),O.editors[e].focus()},U=function(e){return indent.html("<!DOCTYPE html>\n  <html"+(e?"":" data-runcache="+O.runCache)+">\n  <head>\n"+D.projects[D.activeProject].head.trim()+"\n    <style>\n"+D.projects[D.activeProject].css.trim()+"\n    </style>\n  </head>\n  <body>\n    "+D.projects[D.activeProject].body.trim()+"\n    <script>\n"+D.projects[D.activeProject].js+"\n    <\/script>\n  </body>\n</html>")},V=function(){O.iframeSrc=U(),O.runCache+=1,O.render()},A=function(e,t){require(["vs/editor/editor.main"],(function(){O.editors[e]=monaco.editor.create(document.getElementById(e),{value:D.projects[D.activeProject][e],language:t,theme:"vs-dark",automaticLayout:!0,minimap:{enabled:!1}}),O.editors[e].addAction({id:"0",label:"",keybindings:[monaco.KeyMod.CtrlCmd|monaco.KeyCode.Enter],run:function(e){return V(),null},enablement:{textFocus:!0}}),O.editors[e].addAction({id:"1",label:"",keybindings:[monaco.KeyMod.Alt|monaco.KeyCode.LeftArrow],run:function(e){return"head"===D.activeCodePanel?(D.activeCodePanel="js",O.render(),void setTimeout((function(){O.editors[D.activeCodePanel].focus()}),0)):"js"===D.activeCodePanel?(D.activeCodePanel="body",O.render(),void setTimeout((function(){O.editors[D.activeCodePanel].focus()}),0)):"body"===D.activeCodePanel?(D.activeCodePanel="css",O.render(),void setTimeout((function(){O.editors[D.activeCodePanel].focus()}),0)):"css"===D.activeCodePanel?(D.activeCodePanel="head",O.render(),void setTimeout((function(){O.editors[D.activeCodePanel].focus()}),0)):null},enablement:{textFocus:!0}}),O.editors[e].addAction({id:"2",label:"",keybindings:[monaco.KeyMod.Alt|monaco.KeyCode.RightArrow],run:function(e){return"head"===D.activeCodePanel?(D.activeCodePanel="css",O.render(),void setTimeout((function(){O.editors[D.activeCodePanel].focus()}),0)):"css"===D.activeCodePanel?(D.activeCodePanel="body",O.render(),void setTimeout((function(){O.editors[D.activeCodePanel].focus()}),0)):"body"===D.activeCodePanel?(D.activeCodePanel="js",O.render(),void setTimeout((function(){O.editors[D.activeCodePanel].focus()}),0)):"js"===D.activeCodePanel?(D.activeCodePanel="head",O.render(),void setTimeout((function(){O.editors[D.activeCodePanel].focus()}),0)):null},enablement:{textFocus:!0}})}))},N=Date.now(),B=Date.now(),F=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentDidMount=function(){var e=this;function t(){dataLayer.push(arguments)}O.render=function(){e.setState({},(function(){for(var e in O.editors)O.editors[e]&&O.editors[e].layout()}))},function(){require.config({paths:{vs:"https://unpkg.com/monaco-editor@0.20.0/min/vs"}}),window.MonacoEnvironment={getWorkerUrl:function(){return e}};var e=URL.createObjectURL(new Blob(["\n    self.MonacoEnvironment = {\n      baseUrl: 'https://unpkg.com/monaco-editor@0.20.0/min/'\n    };\n    importScripts('https://unpkg.com/monaco-editor@0.20.0/min/vs/base/worker/workerMain.js');\n  "],{type:"text/javascript"}));A("head","html"),A("body","html"),A("css","css"),A("js","javascript")}(),V(),window.addEventListener("blur",(function(e){var t=document.activeElement.closest(".iframe-container");t&&t.id&&"video"===t.id&&(H("video"),O.render()),t&&t.id&&"output"===t.id&&(H("output"),O.render())})),window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-174152293-1")},t.prototype.render=function(){return d("div",{class:"w-full h-full bg-light rel"},d("div",{style:"height: 45px; margin-bottom: 5px;",class:"flex flex-justify-between bord-dark-b bg-mid"},d("div",{class:"flex-1 flex"},d("div",{class:"flex p-h-15"},d("div",{class:"flex flex-center bord-dark-r"},d("svg",{width:"20",height:"20","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chalkboard-teacher",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",class:"svg-inline--fa fa-chalkboard-teacher fa-w-20 fa-3x"},d("path",{fill:"rgb(52, 152, 219)",d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z",class:""})),d("div",{style:"padding-left: 8px; padding-right: 10px;"},d("small",null,d("b",null,"Dev Lecture ")),d("small",null,"(Beta)"))),d("div",{class:"flex bord-dark-r"},d("button",{class:"flex flex-center p-h-15",onClick:function(){O.openProjectOpen=!0,O.render()},title:"Select From My Projects"},d("svg",{width:"15",height:"15","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"laptop-code",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",class:"svg-inline--fa fa-laptop-code fa-w-20 fa-3x"},d("path",{fill:"rgb(255, 255, 255)",d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z",class:""})),d("small",{style:"padding-left: 10px;"},d("b",null,"My Projects")))))),d("div",{class:"flex-1 flex flex-center"},d("div",{class:"p-h-15 txt-center"},d("small",{style:"font-size: 14px;"},d("b",null,D.projects[D.activeProject].title)))),d("div",{class:"flex-1 flex flex-justify-end"},d("button",{class:"flex flex-center p-h-15 bord-dark-l bord-dark-r",onClick:function(){O.projectSettings=!0,O.render()},title:"Edit Project Settings"},d("img",{src:"img/gear.svg"}),d("small",{style:"padding-left: 10px;"},d("b",null,"Settings"))),d("a",{class:"flex flex-center clickable hover",onClick:function(e){!function(e){var t=U(!0),n=btoa(t);e.target.setAttribute("href","data:text/html;base64,"+n)}(e)},download:"index.html",title:"Export HTML File"},d("button",{class:"flex flex-center p-h-15 no-ptr"},d("img",{src:"img/download.svg"}),d("small",{style:"padding-left: 10px;"},d("b",null,"Export")))),d("a",{class:"flex flex-center clickable hover bord-dark-l",target:"_blank",href:"https://devlecture.us17.list-manage.com/subscribe?u=c1941282fe209100009b673c8&id=e63d3e93d8"},d("button",{class:"flex flex-center p-h-15 no-ptr"},d("small",{class:"blue",style:"padding-left: 10px;"},d("b",null,"Sign Up")))))),d("div",{class:"flex",style:"height: calc(100% - 50px);"},d("div",{class:"flex-1 flex flex-column"},d("div",{class:(O.videoOpen?"flex-1":"")+" bord-dark rel flex-column",style:"max-height: 400px;"},d("div",{class:"flex",style:"background: rgb(50, 50, 50); height: 35px;"},d("button",{class:"flex flex-center-y p-h-15 flex-1",onClick:function(){O.videoOpen=!O.videoOpen,O.render()}},d("div",{style:"padding-right: 10px;"},d("img",{src:"img/caret-"+(O.videoOpen?"down":"right")+".svg"})),d("div",{class:"flex flex-center"},d("small",null,d("b",null,"Video")))),d("button",{class:"flex flex-center m-0 bord-dark-l w-50",style:"color: white;",onClick:function(){O.videoSettingsOpen=!0,O.render()},title:"Edit Video Embed Code"},d("svg",{width:"15",height:"15","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"code",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",class:"svg-inline--fa fa-code fa-w-20 fa-3x"},d("path",{fill:"rgb(255, 255, 255)",d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z",class:""})))),d("div",{class:"flex-1 bord-dark-t bg-dark w-full flex iframe-container rel bg-dark "+(O.videoOpen?"flex":"disp-none"),style:(O.videoOpen,""),id:"video",dangerouslySetInnerHTML:{__html:D.projects[D.activeProject].videoEmbed?D.projects[D.activeProject].videoEmbed:"<div class='flex flex-center w-full h-full abs top left' style='color: rgba(255, 255, 255, .8); color: white; opacity: .25;'><h3 style='font-weight: 500;'>Embed a video to get started!</h3></div>"}})),d("div",{style:"height: 5px"}),d("div",{class:"flex-1 flex flex-column "+("editor"===D.activePanel?"bord-blue":"bord-dark"),onClick:function(){H("editor")}},d("div",{class:"flex bg-mid h-35"},d("div",{class:"flex flex-center",style:"padding-left: 20px; padding-right: 25px;"},d("small",{style:"letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;"},d("span",{style:"color: rgb(255, 255, 255);"},"index.html"))),d("div",{class:"flex flex-center-x"},d("button",{class:"flex flex-center w-80 "+("head"===D.activeCodePanel?"bg-dark-code bord-dark-code-b no-hover":"bord-dark-b bg-dark")+" bord-dark-r bord-dark-l",onClick:function(){T("head")}},d("small",{style:"letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;"},d("span",{style:"color: rgba(255, 255, 255, .75);"},d("b",null,"<")),d("span",{style:"color: rgb(156, 220, 252);"},"head"),d("span",{style:"color: rgba(255, 255, 255, .75);"},d("b",null,">")))),d("button",{class:"flex flex-center w-80 "+("css"===D.activeCodePanel?"bg-dark-code bord-dark-code-b no-hover":"bord-dark-b bg-dark")+" bord-dark-r",onClick:function(){T("css")}},d("small",{style:"letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;"},d("span",{style:"color: rgba(255, 255, 255, .75);"},d("b",null,"<")),d("span",{style:"color: rgb(156, 220, 252);"},"style"),d("span",{style:"color: rgba(255, 255, 255, .75);"},d("b",null,">")))),d("button",{class:"flex flex-center w-80  "+("body"===D.activeCodePanel?"bg-dark-code bord-dark-code-b no-hover":"bord-dark-b bg-dark")+" bord-dark-r",onClick:function(){T("body")}},d("small",{style:"letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;"},d("span",{style:"color: rgba(255, 255, 255, .75);"},d("b",null,"<")),d("span",{style:"color: rgb(156, 220, 252);"},"body"),d("span",{style:"color: rgba(255, 255, 255, .75);"},d("b",null,">")))),d("button",{class:"flex flex-center w-80 "+("js"===D.activeCodePanel?"bg-dark-code bord-dark-code-b no-hover":"bord-dark-b bg-dark")+" bord-dark-r",onClick:function(){T("js")}},d("small",{style:"letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;"},d("span",{style:"color: rgba(255, 255, 255, .75);"},d("b",null,"<")),d("span",{style:"color: rgb(156, 220, 252);"},"script"),d("span",{style:"color: rgba(255, 255, 255, .75);"},d("b",null,">"))))),d("div",{class:"flex-1 flex flex-justify-end bord-dark-b"},d("button",{id:"run",class:"flex flex-center m-0 p-0 w-50 bord-dark-l",style:" color: white;",onClick:function(){V()},title:"Run Code (CMD + Enter)"},d("img",{src:"img/play.svg"})))),d("div",{id:"editor-container",class:"bg-dark rel flex-1 overflow-hidden",onKeyDown:function(e){!function(e){var t=e.key.toLowerCase();e.repeat||"meta"!==t||(N=Date.now()),e.repeat||"meta"===t||(B=Date.now()),e.metaKey&&(N<B&&"enter"===t&&V(),N<B&&"s"===t&&e.preventDefault())}(e)}},d("div",{class:"w-full h-full abs top left "+("css"!==D.activeCodePanel?"vis-hidden":"vis-visible"),onKeyUp:function(){R("css")}},d("div",{class:"w-full h-full",id:"css"})),d("div",{class:"w-full h-full abs top left "+("body"!==D.activeCodePanel?"vis-hidden":"vis-visible"),onKeyUp:function(){R("body")}},d("div",{class:"w-full h-full",id:"body"})),d("div",{class:"w-full h-full abs top left p-0 m-0 "+("js"!==D.activeCodePanel?"vis-hidden":"vis-visible"),onKeyUp:function(){R("js")}},d("div",{class:"w-full h-full p-0 m-0 ",id:"js"})),d("div",{class:"w-full h-full abs top left "+("head"!==D.activeCodePanel?"vis-hidden":"vis-visible"),onKeyUp:function(){R("head")}},d("div",{class:"w-full h-full",id:"head"}))))),d("div",{style:"width: 5px",id:"container"}),d("div",{class:("output"===D.activePanel?"bord-blue":"bord-dark")+" iframe-container bg-dark",id:"output",style:"flex: 1; display: flex; flex-direction: column;"},d("div",{class:"rel bord-dark-b"},d("div",{class:"flex",style:"background: rgb(50, 50, 50); height: 35px;"},d("div",{class:"flex flex-center ",style:"padding-left: 15px;"},d("svg",{width:"13",height:"13","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"svg-inline--fa fa-arrow-left fa-w-14 fa-3x"},d("path",{fill:"rgba(255, 255, 255, .5)",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",class:""}))),d("div",{class:"flex flex-center p-h-10",style:" padding-left: 15px; transform: rotate(180deg);"},d("svg",{width:"13",height:"13","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"svg-inline--fa fa-arrow-left fa-w-14 fa-3x"},d("path",{fill:"rgba(255, 255, 255, .5)",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",class:""}))),d("button",{class:"flex flex-center p-h-15 bord-dark-l bord-dark-r",style:"margin-right: 15px;",onClick:function(){V()},title:"Run Code (CMD + Enter)"},d("img",{src:"img/redo.svg"})),d("div",{class:"flex w-full h-full p-v-5",style:"padding-right: 5px;"},d("div",{class:"w-full h-full b-r-2 bg-dark bord-dark",style:"padding-left: 10px;"},d("small",{style:"color: rgba(255, 255, 255, .5);"},"https://www.mysite.com"))))),d("iframe",{id:"iframe",style:"border: none; width: 100%; height: 100%;",srcdoc:O.iframeSrc}))),O.videoSettingsOpen&&d("div",{class:"abs top left w-full h-full flex flex-justify-center",style:"z-index: 10; background-color: rgba(0, 0, 0, .1);"},d("div",{class:"w-full overflow-hidden",style:"max-width: 350px; margin-top: 175px;"},d("div",{class:"flex flex-center bg-mid bord-dark p-v-5",style:"border-top-right-radius: 5px; border-top-left-radius: 5px;"},d("small",null,d("b",null,"Video Settings"))),d("div",{class:"p-10 bg-light bord-dark-l bord-dark-r bord-dark-b",style:"border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;"},d("div",{class:"m-5 p-v-5"},d("div",{class:"flex flex-column"},d("small",{class:"bold",style:"width: 100px; padding-bottom: 5px;"},"Embed Code"),d("textarea",{value:D.projects[D.activeProject].videoEmbed,onInput:function(e){var t,n;t=e.target.value,n=t,-1!==t.indexOf("<iframe")&&-1===t.indexOf("script")&&"iframe"!==t||(n=""),D.projects[D.activeProject].videoEmbed=n}}))),d("div",{class:"flex",style:"padding-top: 5px;"},d("button",{class:"b-r-2 bold p-5 w-full bg-green m-5",onClick:function(){O.videoSettingsOpen=!1,O.render()}},"Done"))))),O.openProjectOpen&&d("div",{class:"abs top left w-full h-full flex flex-justify-center",style:"z-index: 10; background-color: rgba(0, 0, 0, .1);"},d("div",{class:"w-full overflow-hidden",style:"max-width: 350px; margin-top: 175px;"},d("div",{class:"flex flex-center bg-mid bord-dark p-v-5",style:"border-top-right-radius: 5px; border-top-left-radius: 5px;"},d("small",null,d("b",null,"Projects"))),d("div",{class:"p-10 bg-light bord-dark-l bord-dark-r bord-dark-b",style:"border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;"},d("div",{class:"m-5",style:"margin-top: 10px;"},D.projects.map((function(e,t){return d("div",{class:"b-r-2 overflow-hidden",style:"margin-bottom: 10px;"},d("button",{class:"w-full txt-left bg-dark p-h-15 p-v-10",onClick:function(){var e;e=t,D.activeCodePanel="body",D.activeProject=e,O.openProjectOpen=!1,V(),O.render(),setTimeout((function(){O.editors.head.setValue(D.projects[D.activeProject].head),O.editors.body.setValue(D.projects[D.activeProject].body),O.editors.css.setValue(D.projects[D.activeProject].css),O.editors.js.setValue(D.projects[D.activeProject].js)}),0)}},d("small",null,d("b",null,e.title))))}))),d("div",{class:"flex",style:"padding-top: 5px;"},d("button",{class:"b-r-2 bold p-5 w-full bg-red m-5",onClick:function(){O.openProjectOpen=!1,O.render()}},"Cancel"))))),O.projectSettings&&d("div",{class:"abs top left w-full h-full flex flex-justify-center",style:"z-index: 10; background-color: rgba(0, 0, 0, .1);"},d("div",{class:"w-full overflow-hidden",style:"max-width: 350px; margin-top: 175px;"},d("div",{class:"flex flex-center bg-mid bord-dark p-v-5",style:"border-top-right-radius: 5px; border-top-left-radius: 5px;"},d("small",null,d("b",null,"Project Settings"))),d("div",{class:"p-10 bg-light bord-dark-l bord-dark-r bord-dark-b",style:"border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;"},d("div",{class:"m-5 p-v-5"},d("div",{class:"flex flex-column"},d("small",{class:"bold",style:"width: 100px; padding-bottom: 5px;"},"Project Title"),d("input",{type:"text",value:D.projects[D.activeProject].title,onInput:function(e){var t;t=e.target.value,D.projects[D.activeProject].title=t,O.render()}}))),d("div",{class:"flex",style:"padding-top: 5px;"},d("button",{class:"b-r-2 bold p-5 w-full bg-green m-5",onClick:function(){O.projectSettings=!1,O.render()}},"Done"))))))},t}(p),I=function(e,t){localforage.getItem("codewithme_app").then((function(n){if(n){for(var o in n)D[o]=n[o];D.projects[D.activeProject].videoEmbed&&(O.embedEditVal=D.projects[D.activeProject].videoEmbed),e()}else t()})).catch((function(e){console.log("error on get ")}))},K=function(){localforage.setItem("codewithme_app",D).then((function(e){var t;t=Date.now().toString()+Math.random().toString(),localStorage.setItem("timestamp",t)})).catch((function(e){console.log(e)}))};window.addEventListener("load",(function(){console.log("Program started."),z(),function(t,n,o){var a,c,s;e.__&&e.__(t,n),c=(a=o===l)?null:o&&o.__k||n.__k,t=d(f,null,[t]),s=[],j(n,(a?n:o||n).__k=t,c||r,r,void 0!==n.ownerSVGElement,o&&!a?[o]:c?null:n.childNodes.length?i.slice.call(n.childNodes):null,s,o||r,a),P(s,t)}(d(F,null),document.body),I((function(){V(),O.render()}),(function(){K()})),window.addEventListener("keyup",K),window.addEventListener("mouseup",K),window.onstorage=function(e){I((function(){V(),O.render(),setTimeout((function(){O.editors.head.setValue(D.projects[D.activeProject].head),O.editors.body.setValue(D.projects[D.activeProject].body),O.editors.css.setValue(D.projects[D.activeProject].css),O.editors.js.setValue(D.projects[D.activeProject].js)}),0)}))}})),"PROD"===M&&window.addEventListener("beforeunload",(function(e){e.returnValue="Are you sure you want to leave?"}));
//# sourceMappingURL=bundle.js.map
