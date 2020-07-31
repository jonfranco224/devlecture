var n,u,i,t,r,o,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l){ n[u]=l[u]; }return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function v(n,l,u){var i,t=arguments,r={};for(i in l){ "key"!==i&&"ref"!==i&&(r[i]=l[i]); }if(arguments.length>3){ for(u=[u],i=3;i<arguments.length;i++){ u.push(t[i]); } }if(null!=u&&(r.children=u),"function"==typeof n&&null!=n.defaultProps){ for(i in n.defaultProps){ void 0===r[i]&&(r[i]=n.defaultProps[i]); } }return h(n,r,l&&l.key,l&&l.ref,null)}function h(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(o.__v=o),n.vnode&&n.vnode(o),o}function p(n){return n.children}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l){ return n.__?_(n.__,n.__.__k.indexOf(n)+1):null; }for(var u;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){ return u.__e; } }return "function"==typeof n.type?_(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break} }return k(n)}}function w(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!m.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(m);}function m(){for(var n;m.__r=u.length;){ n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,r,o,f;n.__d&&(o=(r=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},r)).__v=i,t=T(f,r,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==o?_(r):o),$(u,r),t!=o&&k(r)));}); }}function g(n,l,u,i,t,r,o,c,s,v){var y,d,k,w,m,g,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=o?o[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++){ if(null!=(w=u.__k[y]=null==(w=l[y])||"boolean"==typeof w?null:"string"==typeof w||"number"==typeof w?h(null,w,null,null,w):Array.isArray(w)?h(p,{children:w},null,null,null):null!=w.__e||null!=w.__c?h(w.type,w.props,w.key,null,w.__v):w)){if(w.__=u,w.__b=u.__b+1,null===(k=A[y])||k&&w.key==k.key&&w.type===k.type){ A[y]=void 0; }else { for(d=0;d<P;d++){if((k=A[d])&&w.key==k.key&&w.type===k.type){A[d]=void 0;break}k=null;} }m=T(n,w,k=k||f,t,r,o,c,s,v),(d=w.ref)&&k.ref!=d&&(b||(b=[]),k.ref&&b.push(k.ref,null,w),b.push(d,w.__c||m,w)),null!=m?(null==g&&(g=m),s=x(n,w,k,A,o,m,s),"option"==u.type?n.value="":"function"==typeof u.type&&(u.__d=s)):s&&k.__e==s&&s.parentNode!=n&&(s=_(k));} }if(u.__e=g,null!=o&&"function"!=typeof u.type){ for(y=o.length;y--;){ null!=o[y]&&a(o[y]); } }for(y=P;y--;){ null!=A[y]&&I(A[y],A[y]); }if(b){ for(y=0;y<b.length;y++){ H(b[y],b[++y],b[++y]); } }}function x(n,l,u,i,t,r,o){var f,e,c;if(void 0!==l.__d){ f=l.__d,l.__d=void 0; }else if(t==u||r!=o||null==r.parentNode){ n:if(null==o||o.parentNode!==n){ n.appendChild(r),f=null; }else {for(e=o,c=0;(e=e.nextSibling)&&c<i.length;c+=2){ if(e==r){ break n; } }n.insertBefore(r,o),f=o;} }return void 0!==f?f:r.nextSibling}function A(n,l,u,i,t){var r;for(r in u){ "children"===r||"key"===r||r in l||C(n,r,null,u[r],i); }for(r in l){ t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||C(n,r,l[r],u[r],i); }}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u;}function C(n,l,u,i,t){var r,o,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l){ if(r=n.style,"string"==typeof u){ r.cssText=u; }else {if("string"==typeof i&&(r.cssText="",i=null),i){ for(e in i){ u&&e in u||P(r,e,""); } }if(u){ for(c in u){ i&&u[c]===i[c]||P(r,c,u[c]); } }} }else { "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,N,o),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u)); }}function N(l){this.l[l.type](n.event?n.event(l):l);}function z(n,l,u){var i,t;for(i=0;i<n.__k.length;i++){ (t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&z(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l))); }}function T(l,u,i,t,r,o,f,e,c){var a,v,h,y,_,k,w,m,b,x,A,P=u.type;if(void 0!==u.constructor){ return null; }(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(m=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?w=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(m,x):(u.__c=v=new d(m,x),v.constructor=P,v.render=L),b&&b.sub(v),v.props=m,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(m,v.__s))),y=v.props,_=v.state,h){ null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount); }else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(m,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(m,v.__s,x)||u.__v===i.__v){v.props=m,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),z(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(m,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,k);});}v.context=x,v.props=m,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,g(l,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),w&&(v.__E=v.__=null),v.__e=!1;}else { null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,r,o,f,c); }(a=n.diffed)&&a(u);}catch(l){u.__v=null,n.__e(l,u,i);}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j(n,l,u,i,t,r,o,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=r){ for(s=0;s<r.length;s++){ if(null!=(a=r[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,r[s]=null;break} } }if(null==n){if(null===l.type){ return document.createTextNode(d); }n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),r=null,c=!1;}if(null===l.type){ p!==d&&n.data!=d&&(n.data=d); }else {if(null!=r&&(r=e.slice.call(n.childNodes)),v=(p=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=r){ for(p={},y=0;y<n.attributes.length;y++){ p[n.attributes[y].name]=n.attributes[y].value; } }(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,g(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,r,o,f,c)),c||("value"in d&&void 0!==(s=d.value)&&s!==n.value&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1));}return n}function H(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function I(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||H(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount){ try{t.componentWillUnmount();}catch(l){n.__e(l,u);} }t.base=t.__P=null;}if(t=l.__k){ for(o=0;o<t.length;o++){ t[o]&&I(t[o],u,i); } }null!=r&&a(r);}function L(n,l,u){return this.constructor(n,u)}function M(l,u,i){var t,o,c;n.__&&n.__(l,u),o=(t=i===r)?null:i&&i.__k||u.__k,l=v(p,null,[l]),c=[],T(u,(t?u:i||u).__k=l,o||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),$(c,l);}n={__e:function(n,l){for(var u,i;l=l.__;){ if((u=l.__c)&&!u.__){ try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i){ return w(u.__E=u) }}catch(l){n=l;} } }throw n}},d.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),w(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w(this));},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,r=f,o=0;

var ENV = window.location.href.includes('localhost:4000') ? 'DEV' : 'PROD';
var APP = {};
var VIEW = { render: undefined };

var initAppDefault = function () {
  APP.activePanel = 'editor';
  APP.activeCodePanel = 'body';

  APP.activeProject = 'Starter Project';
  APP.projects = {
    'Starter Project': {
      head: '',
      body: '',
      css: '',
      js: '',
      videoEmbed: ''
    }, 'Empty Project 2': {
      head: '',
      body: '',
      css: '',
      js: '',
      videoEmbed: ''
    }, 'Empty Project 3': {
      head: '',
      body: '',
      css: '',
      js: '',
      videoEmbed: ''
    }, 'Empty Project 4': {
      head: '',
      body: '',
      css: '',
      js: '',
      videoEmbed: ''
    }, 'Empty Project 5': {
      head: '',
      body: '',
      css: '',
      js: '',
      videoEmbed: ''
    }
  };
    

  Object.seal(APP);
};

var initViewDefault = function () {
  // VIEW.activeInput = {
  //   id: '',
  //   val: ''
  // }

  VIEW.editors = {
    head: undefined,
    body: undefined,
    css: undefined,
    js: undefined
  };

  VIEW.iframeSrc = '';

  VIEW.videoSettingsOpen = false;

  VIEW.embedEditOpen = false;
  VIEW.embedEditVal = '';
  VIEW.videoOpen = true;

  VIEW.openProjectOpen = false;
  VIEW.projectSettings = false;

  VIEW.runCache = 0;

  Object.seal(VIEW);
};

var newData = function () {
  initAppDefault();
  initViewDefault();
};

var setActivePanel = function (target) {
  APP.activePanel = target;
  
  VIEW.render();
};

var toggleVideoVisible = function () {
  VIEW.videoOpen = !VIEW.videoOpen;
  VIEW.render();
};

var closeVideoSettings = function () {
  VIEW.videoSettingsOpen = false;
  VIEW.render();
};

var openVideoSettings = function () {
  VIEW.videoSettingsOpen = true;
  VIEW.render();
};

var updateEmbedCode = function (val) {
  if (val.indexOf('iframe') === -1) { return }
  if (val.indexOf('script') !== -1) { return }

  APP.projects[APP.activeProject].videoEmbed = val;
};

var updateTarget = function (target) {
  var val = VIEW.editors[target].getValue();
  APP.projects[APP.activeProject][target] = val;
};

var updateCodePanel = function (target) {
  APP.activeCodePanel = target;

  VIEW.render();

  VIEW.editors[target].focus();
};

var updateProjectName = function (val) {
  var newkey = val;
  var key = APP.activeProject;

  APP.projects[newkey] = APP.projects[key];
  APP.activeProject = newkey;
  delete APP.projects[key];

  VIEW.render();
};

var closeProjectSettings = function () {
  VIEW.projectSettings = false;
  VIEW.render();
};

var openProjectSettings = function () {
  VIEW.projectSettings = true;
  VIEW.render();
};

var closeOpenProjectModal = function () {
  VIEW.openProjectOpen = false;
  VIEW.render();
};

var openProjectModal = function () {
  VIEW.openProjectOpen = true;
  VIEW.render();
};

var openProject = function (name) {
  APP.activeCodePanel = 'body';
  APP.activeProject = name;
  VIEW.openProjectOpen = false;

  runCode();
  VIEW.render();
  setTimeout(function () {
    VIEW.editors.head.setValue(APP.projects[APP.activeProject].head);
    VIEW.editors.body.setValue(APP.projects[APP.activeProject].body);
    VIEW.editors.css.setValue(APP.projects[APP.activeProject].css);
    VIEW.editors.js.setValue(APP.projects[APP.activeProject].js);
  }, 0);
};

var renderFile = function (nocache) {
  return indent.html(("<!DOCTYPE html>\n  <html" + (nocache ? '' : (" data-runcache=" + (VIEW.runCache))) + ">\n  <head>\n" + (APP.projects[APP.activeProject].head.trim()) + "\n    <style>\n" + (APP.projects[APP.activeProject].css.trim()) + "\n    </style>\n  </head>\n  <body>\n    " + (APP.projects[APP.activeProject].body.trim()) + "\n    <script>\n" + (APP.projects[APP.activeProject].js) + "\n    </script>\n  </body>\n</html>"))
};

var runCode = function () {
  VIEW.iframeSrc = renderFile();
  VIEW.runCache += 1;

  VIEW.render();
};

var initMonacoEditor = function (target, lang) {
  require(["vs/editor/editor.main"], function () {
    VIEW.editors[target] = monaco.editor.create(document.getElementById(target), {
      value: APP.projects[APP.activeProject][target],
      language: lang,
      theme: 'vs-dark',
      automaticLayout: true,
      minimap: {
        enabled: false
      }
    });

    VIEW.editors[target].addAction({
      id: '0',
      label: '',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
      run: function(ed) {
        runCode();
        return null;
      },
      enablement: {
        textFocus: true,
      }
    });

    VIEW.editors[target].addAction({
      id: '1',
      label: '',
      keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.LeftArrow],
      run: function(ed) {
        if (APP.activeCodePanel === 'head') {
          APP.activeCodePanel = 'js';
          VIEW.render();
          setTimeout(function () { VIEW.editors[APP.activeCodePanel].focus(); }, 0); // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'js') {
          APP.activeCodePanel = 'body';
          VIEW.render();
          setTimeout(function () { VIEW.editors[APP.activeCodePanel].focus(); }, 0); // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'body') {
          APP.activeCodePanel = 'css';
          VIEW.render();
          setTimeout(function () { VIEW.editors[APP.activeCodePanel].focus(); }, 0); // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'css') {
          APP.activeCodePanel = 'head';
          VIEW.render();
          setTimeout(function () { VIEW.editors[APP.activeCodePanel].focus(); }, 0); // TODO: hacky need to fix
          return
        }

        return null;
      },
      enablement: {
        textFocus: true,
      }
    });

    VIEW.editors[target].addAction({
      id: '2',
      label: '',
      keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.RightArrow],
      run: function(ed) {
        if (APP.activeCodePanel === 'head') {
          APP.activeCodePanel = 'css';
          VIEW.render();
          setTimeout(function () { VIEW.editors[APP.activeCodePanel].focus(); }, 0); // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'css') {
          APP.activeCodePanel = 'body';
          VIEW.render();
          setTimeout(function () { VIEW.editors[APP.activeCodePanel].focus(); }, 0); // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'body') {
          APP.activeCodePanel = 'js';
          VIEW.render();
          setTimeout(function () { VIEW.editors[APP.activeCodePanel].focus(); }, 0); // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'js') {
          APP.activeCodePanel = 'head';
          VIEW.render();
          setTimeout(function () { VIEW.editors[APP.activeCodePanel].focus(); }, 0); // TODO: hacky need to fix
          return
        }

        return null;
      },
      enablement: {
        textFocus: true,
      }
    });
  });
};

var configureMonacoIDE = function () {
  require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.20.0/min/vs' }});
  window.MonacoEnvironment = { getWorkerUrl: function () { return proxy; } };

  var proxy = URL.createObjectURL(new Blob(["\n    self.MonacoEnvironment = {\n      baseUrl: 'https://unpkg.com/monaco-editor@0.20.0/min/'\n    };\n    importScripts('https://unpkg.com/monaco-editor@0.20.0/min/vs/base/worker/workerMain.js');\n  "], { type: 'text/javascript' }));
  
  initMonacoEditor('head', 'html');
  initMonacoEditor('body', 'html');
  initMonacoEditor('css', 'css');
  initMonacoEditor('js', 'javascript');
};

var metaKeyMark = Date.now();
var alphaKeyMark = Date.now();

var listenForShortCuts = function (e) {
  var key = e.key.toLowerCase();
  
  if (!e.repeat && key === 'meta') {
    metaKeyMark = Date.now();
  } 

  if (!e.repeat && key !== 'meta') {
    alphaKeyMark = Date.now();
  }

  if (e.metaKey) {
    if ((metaKeyMark < alphaKeyMark) && key === 'enter') {
      runCode();
    }

    if ((metaKeyMark < alphaKeyMark) && key === 's') {
      e.preventDefault();
    }
  }
};

var downloadFile = function (e) {
  var formattedStr = renderFile(true);
  var base64doc = btoa(formattedStr);
  e.target.setAttribute('href', 'data:text/html;base64,' + base64doc);
};

var View = /*@__PURE__*/(function (Component) {
  function View () {
    Component.apply(this, arguments);
  }

  if ( Component ) View.__proto__ = Component;
  View.prototype = Object.create( Component && Component.prototype );
  View.prototype.constructor = View;

  View.prototype.componentDidMount = function componentDidMount () {
    var this$1 = this;

    VIEW.render = function () {
      this$1.setState({}, function () {});
    };

    configureMonacoIDE();
    runCode();

    window.addEventListener('blur', function (e) {
      var elem = document.activeElement.closest('.iframe-container'); 
      
      if (elem && elem.id && elem.id === 'video') {
        setActivePanel('video');
        VIEW.render();
      }

      if (elem && elem.id && elem.id === 'output') {
        setActivePanel('output');
        VIEW.render();
      }
    });



    // Adding google analytics
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());

    // gtag('config', 'UA-144729452-1');
  };

  View.prototype.render = function render () {
    return (
      v( 'div', { class: 'w-full h-full bg-light rel' },
        v( 'div', { style: 'height: 45px; margin-bottom: 5px;', class: 'flex flex-justify-between bord-dark-b bg-mid' },
            v( 'div', { class: 'flex-1 flex' },
              v( 'div', { class: 'flex p-h-15' },
                v( 'div', { class: 'flex flex-center bord-dark-r' },
                  v( 'svg', { width: '20', height: '20', 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "chalkboard-teacher", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", class: "svg-inline--fa fa-chalkboard-teacher fa-w-20 fa-3x" }, v( 'path', { fill: "rgb(52, 152, 219)", d: "M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z", class: "" })),
                  v( 'div', { style: 'padding-left: 8px; padding-right: 10px;' },
                    v( 'small', null, v( 'b', null, "Dev Lecture" ) )
                  )
                ),
                v( 'div', { class: 'flex bord-dark-r' },
                  v( 'button', { class: 'flex flex-center p-h-15', onClick: function () { openProjectModal(); }, title: 'Select From My Projects' },
                    v( 'svg', { width: '15', height: '15', 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "laptop-code", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", class: "svg-inline--fa fa-laptop-code fa-w-20 fa-3x" }, v( 'path', { fill: "rgb(255, 255, 255)", d: "M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z", class: "" })),
                    v( 'small', { style: 'padding-left: 10px;' }, v( 'b', null, "My Projects" ))
                  )
                )
              )
            ),
            v( 'div', { class: 'flex-1 flex flex-center' },
              v( 'div', { class: 'p-h-15 txt-center' },
                v( 'small', { style: 'font-size: 14px;' }, v( 'b', null, APP.activeProject ))
              )
            ),
            v( 'div', { class: 'flex-1 flex flex-justify-end' },
              v( 'button', { class: 'flex flex-center p-h-15 bord-dark-l bord-dark-r', onClick: function () { openProjectSettings(); }, title: 'Edit Project Settings' },
                v( 'img', { src: 'img/gear.svg' }),
                v( 'small', { style: 'padding-left: 10px;' }, v( 'b', null, "Settings" ))
              ),
              v( 'a', { class: 'flex flex-center clickable hover', onClick: function (e) { downloadFile(e); }, download: "index.html", title: 'Export HTML File' },
                v( 'button', { class: 'flex flex-center p-h-15 no-ptr' },
                  v( 'img', { src: 'img/download.svg' }),
                  v( 'small', { style: 'padding-left: 10px;' }, v( 'b', null, "Export" ))
                )
              )
            )
        ),
        v( 'div', { class: 'flex', style: 'height: calc(100% - 50px);' },
          v( 'div', { class: 'flex-1 flex flex-column' }
            /* Video */,
            v( 'div', { class: 'bord-dark rel' },
              v( 'div', { class: 'flex', style: 'background: rgb(50, 50, 50); height: 35px;' },
                v( 'button', { class: "flex flex-center-y p-h-15 flex-1 no-ptr", onClick: function () { toggleVideoVisible(); } }
                  /* <div style='padding-right: 10px;'>
                    <img src={`img/caret-${VIEW.videoOpen ? 'down' : 'right'}.svg`} />
                  </div> */,
                  v( 'div', { class: 'flex flex-center' },
                    v( 'small', null, v( 'b', null, "Video" ) )
                  )
                ),
                v( 'button', { class: "flex flex-center m-0 bord-dark-l w-50", style: 'color: white;', onClick: function () { openVideoSettings(); }, title: 'Edit Video Embed Code' },
                  v( 'svg', { width: '15', height: '15', 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "code", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", class: "svg-inline--fa fa-code fa-w-20 fa-3x" }, v( 'path', { fill: "rgb(255, 255, 255)", d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z", class: "" }))

                )
              ),
              v( 'div', { class: ("bord-dark-t bg-dark w-full flex iframe-container rel " + (VIEW.videoOpen ? 'flex' : 'disp-none')), style: ("" + (VIEW.videoOpen ? 'min-height:350px;' : '')), id: 'video', dangerouslySetInnerHTML: {__html:
                  APP.projects[APP.activeProject].videoEmbed ? APP.projects[APP.activeProject].videoEmbed : 
                    "<div class='flex flex-center w-full h-full abs top left' style='color: rgba(255, 255, 255, .8); color: white; opacity: .25;'><h3 style='font-weight: 500;'>Embed a video to get started!</h3></div>"
                } }
              )  
            ),
            
            v( 'div', { style: "height: 5px" })
            
            /* Code Editor */,
            v( 'div', { class: ("flex-1 flex flex-column " + (APP.activePanel === 'editor' ? 'bord-blue' : 'bord-dark')), onClick: function () { setActivePanel('editor'); } },
              v( 'div', { class: 'flex bg-mid h-35' },
                v( 'div', { class: 'flex flex-justify-start flex-center-y p-h-15 bord-dark-b' },
                  v( 'small', null, v( 'b', null, "Code" ) )
                ),
                v( 'div', { class: 'flex flex-center-x' },
                  v( 'button', { class: ("flex flex-center w-80 " + (APP.activeCodePanel === 'head' ? 'bg-dark-code bord-dark-code-b no-hover' : 'bord-dark-b bg-dark') + " bord-dark-r bord-dark-l"), onClick: function () { updateCodePanel('head'); } },
                    v( 'small', { style: 'letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;' }, '<head>')
                  ),
                  v( 'button', { class: ("flex flex-center w-80 " + (APP.activeCodePanel === 'css' ? 'bg-dark-code bord-dark-code-b no-hover' : 'bord-dark-b bg-dark') + " bord-dark-r"), onClick: function () { updateCodePanel('css'); } },
                    v( 'small', { style: 'letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;' }, '<style>')
                  ),
                  v( 'button', { class: ("flex flex-center w-80  " + (APP.activeCodePanel === 'body' ? 'bg-dark-code bord-dark-code-b no-hover' : 'bord-dark-b bg-dark') + " bord-dark-r"), onClick: function () { updateCodePanel('body'); } },
                    v( 'small', { style: 'letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;' }, '<body>')
                  ),
                  v( 'button', { class: ("flex flex-center w-80 " + (APP.activeCodePanel === 'js' ? 'bg-dark-code bord-dark-code-b no-hover' : 'bord-dark-b bg-dark') + " bord-dark-r"), onClick: function () { updateCodePanel('js'); } },
                    v( 'small', { style: 'letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400; ' }, '<script>')
                  )
                ),
                v( 'div', { class: 'flex-1 flex flex-justify-end bord-dark-b' },
                  v( 'button', { id: 'run', class: "flex flex-center m-0 p-0 w-50 bord-dark-l", style: ' color: white;', onClick: function () { runCode(); }, title: 'Run Code (CMD + Enter)' },
                    v( 'img', { src: "img/play.svg" })
                  )
                )
              ),
              v( 'div', { id: 'editor-container', class: 'bg-dark rel flex-1 overflow-hidden', onKeyDown: function (e) { listenForShortCuts(e); } },
                v( 'div', { class: ("w-full h-full abs top left " + (APP.activeCodePanel !== 'css' ? 'vis-hidden' : 'vis-visible')), onKeyUp: function () { updateTarget('css'); } },
                  v( 'div', { class: 'w-full h-full', id: 'css' })
                ),
                v( 'div', { class: ("w-full h-full abs top left " + (APP.activeCodePanel !== 'body' ? 'vis-hidden' : 'vis-visible')), onKeyUp: function () { updateTarget('body'); } },
                  v( 'div', { class: 'w-full h-full', id: 'body' })
                ),
                v( 'div', { class: ("w-full h-full abs top left p-0 m-0 " + (APP.activeCodePanel !== 'js' ? 'vis-hidden' : 'vis-visible')), onKeyUp: function () { updateTarget('js'); } },
                  v( 'div', { class: 'w-full h-full p-0 m-0 ', id: 'js' })
                ),
                v( 'div', { class: ("w-full h-full abs top left " + (APP.activeCodePanel !== 'head' ? 'vis-hidden' : 'vis-visible')), onKeyUp: function () { updateTarget('head'); } },
                  v( 'div', { class: 'w-full h-full', id: 'head' })
                )
              )
            )
          ),
          
          v( 'div', { style: "width: 5px", id: 'container' })
          
          /* Output */,
          v( 'div', {
            class: ((APP.activePanel === 'output' ? 'bord-blue' : 'bord-dark') + " iframe-container bg-dark"), id: 'output', style: 'flex: 1; display: flex; flex-direction: column;' },
            v( 'div', { class: 'rel bord-dark-b' },
              v( 'div', { class: 'flex', style: 'background: rgb(50, 50, 50); height: 35px;' },
                v( 'div', { class: 'flex flex-center ', style: 'padding-left: 15px;' },
                  v( 'svg', { width: '13', height: '13', 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "arrow-left", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-inline--fa fa-arrow-left fa-w-14 fa-3x" }, v( 'path', { fill: "rgba(255, 255, 255, .5)", d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z", class: "" }))
                ),
                v( 'div', { class: 'flex flex-center p-h-10', style: ' padding-left: 15px; transform: rotate(180deg);' },
                  v( 'svg', { width: '13', height: '13', 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "arrow-left", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-inline--fa fa-arrow-left fa-w-14 fa-3x" }, v( 'path', { fill: "rgba(255, 255, 255, .5)", d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z", class: "" }))
                ),
                v( 'button', { class: 'flex flex-center p-h-15 bord-dark-l bord-dark-r', style: 'margin-right: 15px;', onClick: function () { runCode(); }, title: 'Run Code (CMD + Enter)' },
                  v( 'img', { src: 'img/redo.svg' })
                ),
                v( 'div', { class: 'flex w-full h-full p-v-5', style: 'padding-right: 5px;' },
                  v( 'div', { class: 'w-full h-full b-r-2 bg-dark bord-dark', style: 'padding-left: 10px;' },
                    v( 'small', { style: "color: rgba(255, 255, 255, .5);" }, "https://www.mysite.com")
                  )
                )
              )
            ),
            v( 'iframe', { id: 'iframe', style: "border: none; width: 100%; height: 100%;", srcdoc: VIEW.iframeSrc }
            )
          )
        ),
        VIEW.videoSettingsOpen && v( 'div', { class: "abs top left w-full h-full flex flex-justify-center", style: "z-index: 10; background-color: rgba(0, 0, 0, .1);" },
          v( 'div', { class: "w-full overflow-hidden", style: "max-width: 350px; margin-top: 175px;" },
              v( 'div', { class: "flex flex-center bg-mid bord-dark p-v-5", style: "border-top-right-radius: 5px; border-top-left-radius: 5px;" }, v( 'small', null, v( 'b', null, "Video Settings" ) )),
              v( 'div', { class: "p-10 bg-light bord-dark-l bord-dark-r bord-dark-b", style: "border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;" },
                v( 'div', { class: "m-5 p-v-5" },
                    v( 'div', { class: "flex flex-column" },
                      v( 'small', { class: "bold", style: "width: 100px; padding-bottom: 5px;" }, "Embed Code"),
                      v( 'textarea', { value: APP.projects[APP.activeProject].videoEmbed, onInput: function (e) { updateEmbedCode(e.target.value); } })
                    )
                ),
                v( 'div', { class: "flex", style: "padding-top: 5px;" },
                  v( 'button', { class: "b-r-2 bold p-5 w-full bg-green m-5", onClick: function () { closeVideoSettings(); } }, "Done")
                )
              )
          )
        ),
        VIEW.openProjectOpen && v( 'div', { class: "abs top left w-full h-full flex flex-justify-center", style: "z-index: 10; background-color: rgba(0, 0, 0, .1);" },
          v( 'div', { class: "w-full overflow-hidden", style: "max-width: 350px; margin-top: 175px;" },
              v( 'div', { class: "flex flex-center bg-mid bord-dark p-v-5", style: "border-top-right-radius: 5px; border-top-left-radius: 5px;" }, v( 'small', null, v( 'b', null, "Projects" ) )),
              v( 'div', { class: "p-10 bg-light bord-dark-l bord-dark-r bord-dark-b", style: "border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;" },
                v( 'div', { class: "m-5", style: 'margin-top: 10px;' },
                    Object.keys(APP.projects).map(function (name, i) {
                        return v( 'div', { class: 'b-r-2 overflow-hidden', style: 'margin-bottom: 10px;' },
                          v( 'button', { class: 'w-full txt-left bg-dark p-h-15 p-v-10', onClick: function () { openProject(name); } },
                            v( 'small', null, v( 'b', null, name ) )
                          )
                        )
                      })
                ),
                v( 'div', { class: "flex", style: "padding-top: 5px;" },
                  v( 'button', { class: "b-r-2 bold p-5 w-full bg-red m-5", onClick: function () { closeOpenProjectModal(); } }, "Cancel")
                )
              )
          )
        ),
        VIEW.projectSettings && v( 'div', { class: "abs top left w-full h-full flex flex-justify-center", style: "z-index: 10; background-color: rgba(0, 0, 0, .1);" },
          v( 'div', { class: "w-full overflow-hidden", style: "max-width: 350px; margin-top: 175px;" },
              v( 'div', { class: "flex flex-center bg-mid bord-dark p-v-5", style: "border-top-right-radius: 5px; border-top-left-radius: 5px;" }, v( 'small', null, v( 'b', null, "Project Settings" ) )),
              v( 'div', { class: "p-10 bg-light bord-dark-l bord-dark-r bord-dark-b", style: "border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;" },
                v( 'div', { class: "m-5 p-v-5" },
                    v( 'div', { class: "flex flex-column" },
                      v( 'small', { class: "bold", style: "width: 100px; padding-bottom: 5px;" }, "Project Title"),
                      v( 'input', { type: 'text', value: APP.activeProject, onInput: function (e) { updateProjectName(e.target.value); } })
                    )
                ),
                v( 'div', { class: "flex", style: "padding-top: 5px;" },
                  v( 'button', { class: "b-r-2 bold p-5 w-full bg-green m-5", onClick: function () { closeProjectSettings(); } }, "Done")
                )
              )
          )
        )
      )
    )
  };

  return View;
}(d));

var loadData = function (onLoaded, onNew) {
  //console.time('startRead')
  localforage.getItem("codewithme_app").then(function (stored) {
    //console.timeEnd('startRead')
    if (stored) {
      for (var key in stored) {
        APP[key] = stored[key];
      }
  
      if (APP.projects[APP.activeProject].videoEmbed) { VIEW.embedEditVal = APP.projects[APP.activeProject].videoEmbed; }

      onLoaded();
    } else {
      onNew();  
    }
  }).catch(function(err) {
    console.log('error on get ');
  });
};

var pingOtherTabs = function () {
  var timestamp = Date.now().toString() + Math.random().toString();
  localStorage.setItem('timestamp', timestamp);
};

var saveData = function () {
  localforage.setItem("codewithme_app", APP).then(function(value) {
    pingOtherTabs();
  }).catch(function(err) {
    console.log(err);
  });
};

var onProgramStart = function () {
  console.log('Program started.');

  newData();
  M(v( View, null ), document.body);

  loadData(
    function () { // existing session
      runCode();
      VIEW.render();
    },
    function () { // new session
      saveData();
    }
  );
  
  window.addEventListener('keyup', saveData);
  window.addEventListener('mouseup', saveData);
  window.onstorage = function (e) {
    loadData(
      function () { // existing session
        runCode(); // TODO: clean up duplicate in new project
        VIEW.render();
        setTimeout(function () {
          VIEW.editors.head.setValue(APP.projects[APP.activeProject].head);
          VIEW.editors.body.setValue(APP.projects[APP.activeProject].body);
          VIEW.editors.css.setValue(APP.projects[APP.activeProject].css);
          VIEW.editors.js.setValue(APP.projects[APP.activeProject].js);
        }, 0);
      }
    );
  };
};

window.addEventListener('load', onProgramStart);
if (ENV === 'PROD') {
  window.addEventListener('beforeunload', function (event) {
    event.returnValue = "Are you sure you want to leave?";
  });
}
//# sourceMappingURL=bundle.js.map
