import { h, render, Component } from 'preact'
import { APP, VIEW, ENV, newData } from './state'

const setActivePanel = (target) => {
  APP.activePanel = target
  
  VIEW.render()
}

const toggleVideoVisible = () => {
  VIEW.videoOpen = !VIEW.videoOpen
  VIEW.render()
}

const closeVideoSettings = () => {
  VIEW.videoSettingsOpen = false
  VIEW.render()
}

const openVideoSettings = () => {
  VIEW.videoSettingsOpen = true
  VIEW.render()
}

const updateEmbedCode = (val) => {
  let newVal = val
  
  if (val.indexOf('<iframe') === -1 || val.indexOf('script') !== -1 || val === 'iframe') {
    newVal = ''
  }

  APP.projects[APP.activeProject].videoEmbed = newVal
}

const updateTarget = (target) => {
  const val = VIEW.editors[target].getValue()
  APP.projects[APP.activeProject][target] = val
}

const updateCodePanel = (target) => {
  APP.activeCodePanel = target

  VIEW.render()

  VIEW.editors[target].focus()
}

const updateProjectName = (val) => {
  APP.projects[APP.activeProject].title = val
  VIEW.render()
}

const closeProjectSettings = () => {
  VIEW.projectSettings = false
  VIEW.render()
}

const openProjectSettings = () => {
  VIEW.projectSettings = true
  VIEW.render()
}

const closeOpenProjectModal = () => {
  VIEW.openProjectOpen = false
  VIEW.render()
}

const openProjectModal = () => {
  VIEW.openProjectOpen = true
  VIEW.render()
}

const openProject = (name) => {
  APP.activeCodePanel = 'body'
  APP.activeProject = name
  VIEW.openProjectOpen = false

  runCode()
  VIEW.render()
  setTimeout(() => {
    VIEW.editors.head.setValue(APP.projects[APP.activeProject].head)
    VIEW.editors.body.setValue(APP.projects[APP.activeProject].body)
    VIEW.editors.css.setValue(APP.projects[APP.activeProject].css)
    VIEW.editors.js.setValue(APP.projects[APP.activeProject].js)
  }, 0)
}

const renderFile = (nocache) => {
  return indent.html(`<!DOCTYPE html>
  <html${nocache ? '' : ` data-runcache=${VIEW.runCache}`}>
  <head>
${APP.projects[APP.activeProject].head.trim()}
    <style>
${APP.projects[APP.activeProject].css.trim()}
    </style>
  </head>
  <body>
    ${APP.projects[APP.activeProject].body.trim()}
    <script type="text/babel">
${APP.projects[APP.activeProject].js}
    </script>
  </body>
</html>`)
}

const runCode = () => {
  VIEW.iframeSrc = renderFile()
  VIEW.runCache += 1

  VIEW.render()
}

const initMonacoEditor = (target, lang) => {
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
        runCode()
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
          APP.activeCodePanel = 'js'
          VIEW.render()
          setTimeout(() => { VIEW.editors[APP.activeCodePanel].focus() }, 0) // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'js') {
          APP.activeCodePanel = 'body'
          VIEW.render()
          setTimeout(() => { VIEW.editors[APP.activeCodePanel].focus() }, 0) // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'body') {
          APP.activeCodePanel = 'css'
          VIEW.render()
          setTimeout(() => { VIEW.editors[APP.activeCodePanel].focus() }, 0) // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'css') {
          APP.activeCodePanel = 'head'
          VIEW.render()
          setTimeout(() => { VIEW.editors[APP.activeCodePanel].focus() }, 0) // TODO: hacky need to fix
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
          APP.activeCodePanel = 'css'
          VIEW.render()
          setTimeout(() => { VIEW.editors[APP.activeCodePanel].focus() }, 0) // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'css') {
          APP.activeCodePanel = 'body'
          VIEW.render()
          setTimeout(() => { VIEW.editors[APP.activeCodePanel].focus() }, 0) // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'body') {
          APP.activeCodePanel = 'js'
          VIEW.render()
          setTimeout(() => { VIEW.editors[APP.activeCodePanel].focus() }, 0) // TODO: hacky need to fix
          return
        }

        if (APP.activeCodePanel === 'js') {
          APP.activeCodePanel = 'head'
          VIEW.render()
          setTimeout(() => { VIEW.editors[APP.activeCodePanel].focus() }, 0) // TODO: hacky need to fix
          return
        }

        return null;
      },
      enablement: {
        textFocus: true,
      }
    });
  });
}

const configureMonacoIDE = () => {
  require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.20.0/min/vs' }});
  window.MonacoEnvironment = { getWorkerUrl: () => proxy };

  let proxy = URL.createObjectURL(new Blob([`
    self.MonacoEnvironment = {
      baseUrl: 'https://unpkg.com/monaco-editor@0.20.0/min/'
    };
    importScripts('https://unpkg.com/monaco-editor@0.20.0/min/vs/base/worker/workerMain.js');
  `], { type: 'text/javascript' }));
  
  initMonacoEditor('head', 'html')
  initMonacoEditor('body', 'html')
  initMonacoEditor('css', 'css')
  initMonacoEditor('js', 'javascript')
}

let metaKeyMark = Date.now()
let alphaKeyMark = Date.now()

const listenForShortCuts = (e) => {
  const key = e.key.toLowerCase()
  
  if (!e.repeat && key === 'meta') {
    metaKeyMark = Date.now()
  } 

  if (!e.repeat && key !== 'meta') {
    alphaKeyMark = Date.now()
  }

  if (e.metaKey) {
    if ((metaKeyMark < alphaKeyMark) && key === 'enter') {
      runCode()
    }

    if ((metaKeyMark < alphaKeyMark) && key === 's') {
      e.preventDefault()
    }
  }
}

const downloadFile = (e) => {
  const formattedStr = renderFile(true)
  const base64doc = btoa(formattedStr)
  e.target.setAttribute('href', 'data:text/html;base64,' + base64doc)
}

class View extends Component{
  componentDidMount () {
    VIEW.render = () => {
      this.setState({}, () => {
        for (const key in VIEW.editors) {
          if (VIEW.editors[key]) VIEW.editors[key].layout()
        }
      })
    }

    configureMonacoIDE()
    runCode()

    window.addEventListener('blur', (e) => {
      const elem = document.activeElement.closest('.iframe-container') 
      
      if (elem && elem.id && elem.id === 'video') {
        setActivePanel('video')
        VIEW.render()
      }

      if (elem && elem.id && elem.id === 'output') {
        setActivePanel('output')
        VIEW.render()
      }
    })

    // This is the Global Site Tag (gtag.js) tracking code for this property. Copy and paste this code as the first item into the <HEAD> of every webpage you want to track. If you already have a Global Site Tag on your page, simply add the config line from the snippet below to your existing Global Site Tag.
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-174152293-1');
  }

  render () {
    return (
      <div class='w-full h-full bg-light rel'>
        <div style='height: 45px; margin-bottom: 5px;' class='flex flex-justify-between bord-dark-b bg-mid'>
            <div class='flex-1 flex'>
              <div class='flex p-h-15'>
                <div class='flex flex-center bord-dark-r'>
                  <svg width='20' height='20' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chalkboard-teacher" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-chalkboard-teacher fa-w-20 fa-3x"><path fill="rgb(52, 152, 219)" d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z" class=""></path></svg>
                  <div style='padding-left: 8px; padding-right: 10px;'>
                    <small><b>Dev Lecture </b></small>
                    <small>(Beta)</small>
                  </div>
                </div>
                <div class='flex bord-dark-r'>
                  <button class='flex flex-center p-h-15' onClick={() => { openProjectModal() }} title='Select From My Projects'>
                    <svg width='15' height='15' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-laptop-code fa-w-20 fa-3x"><path fill="rgb(255, 255, 255)" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" class=""></path></svg>
                    <small style='padding-left: 10px;'><b>My Projects</b></small>
                  </button>
                </div>
              </div>
            </div>
            <div class='flex-1 flex flex-center'>
              <div class='p-h-15 txt-center'>
                <small style='font-size: 14px;'><b>{APP.projects[APP.activeProject].title}</b></small>
              </div>
            </div>
            <div class='flex-1 flex flex-justify-end'>
              <button class='flex flex-center p-h-15 bord-dark-l bord-dark-r' onClick={() => { openProjectSettings() }} title='Edit Project Settings'>
                <img src='img/gear.svg' />
                <small style='padding-left: 10px;'><b>Settings</b></small>
              </button>
              <a class='flex flex-center clickable hover' onClick={(e) => { downloadFile(e) }} download="index.html" title='Export HTML File'>
                <button class='flex flex-center p-h-15 no-ptr'>
                  <img src='img/download.svg' />
                  <small style='padding-left: 10px;'><b>Export</b></small>
                </button>
              </a>
              <a class='flex flex-center clickable hover bord-dark-l' target="_blank" href='https://devlecture.us17.list-manage.com/subscribe?u=c1941282fe209100009b673c8&id=e63d3e93d8'>
                <button class='flex flex-center p-h-15 no-ptr'>
                  <small class='blue' style='padding-left: 10px;'><b>Sign Up</b></small>
                </button>
              </a>
            </div>
        </div>
        <div class='flex' style='height: calc(100% - 50px);'>
          <div class='flex-1 flex flex-column'>
            {/* Video */}
            <div class={`${VIEW.videoOpen ? 'flex-1' : ''} bord-dark rel flex-column`} style='max-height: 400px;'>
              <div class='flex' style='background: rgb(50, 50, 50); height: 35px;'>
                <button class="flex flex-center-y p-h-15 flex-1" onClick={() => { toggleVideoVisible() }}>
                  <div style='padding-right: 10px;'>
                    <img src={`img/caret-${VIEW.videoOpen ? 'down' : 'right'}.svg`} />
                  </div>
                  <div class='flex flex-center'>
                    <small><b>Video</b></small>
                  </div>
                </button>
                <button class="flex flex-center m-0 bord-dark-l w-50" style='color: white;' onClick={() => { openVideoSettings() }} title='Edit Video Embed Code'>
                  <svg width='15' height='15' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-code fa-w-20 fa-3x"><path fill="rgb(255, 255, 255)" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" class=""></path></svg>

                </button>
              </div>
              <div class={`flex-1 bord-dark-t bg-dark w-full flex iframe-container rel bg-dark ${VIEW.videoOpen ? 'flex' : 'disp-none'}`} style={`${VIEW.videoOpen ? '' : ''}`} id='video'
                dangerouslySetInnerHTML={{__html:
                  APP.projects[APP.activeProject].videoEmbed 
                    ? APP.projects[APP.activeProject].videoEmbed
                    : `<div class='flex flex-center w-full h-full abs top left' style='color: rgba(255, 255, 255, .8); color: white; opacity: .25;'><h3 style='font-weight: 500;'>Embed a video to get started!</h3></div>`
                }}>
              </div> 
            </div>
            
            <div style="height: 5px"></div>
            
            {/* Code Editor */}
            <div class={`flex-1 flex flex-column ${APP.activePanel === 'editor' ? 'bord-blue' : 'bord-dark'}`} onClick={() => { setActivePanel('editor') }}>
              <div class='flex bg-mid h-35'>
                {/* <div class='flex flex-justify-start flex-center-y p-h-15 bord-dark-b' style='padding-right: 25px;'>
                  <small><b>{'<html/>'}</b></small>
                </div> */}
                <div class='flex flex-center' style='padding-left: 20px; padding-right: 25px;'>
                  <small style='letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;'>
                    <span style='color: rgb(255, 255, 255);'>{`index.html`}</span>
                  </small>
                </div>
                <div class='flex flex-center-x'>
                  <button class={`flex flex-center w-80 ${APP.activeCodePanel === 'head' ? 'bg-dark-code bord-dark-code-b no-hover' : 'bord-dark-b bg-dark'} bord-dark-r bord-dark-l`} onClick={() => { updateCodePanel('head') }}>
                    <small style='letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;'>
                      <span style='color: rgba(255, 255, 255, .75);'><b>{`<`}</b></span>
                      <span style='color: rgb(156, 220, 252);'>{`head`}</span>
                      <span style='color: rgba(255, 255, 255, .75);'><b>{`>`}</b></span>
                    </small>
                  </button>
                  <button class={`flex flex-center w-80 ${APP.activeCodePanel === 'css' ? 'bg-dark-code bord-dark-code-b no-hover' : 'bord-dark-b bg-dark'} bord-dark-r`} onClick={() => { updateCodePanel('css') }}>
                  <small style='letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;'>
                      <span style='color: rgba(255, 255, 255, .75);'><b>{`<`}</b></span>
                      <span style='color: rgb(156, 220, 252);'>{`style`}</span>
                      <span style='color: rgba(255, 255, 255, .75);'><b>{`>`}</b></span>
                    </small>
                  </button>
                  <button class={`flex flex-center w-80  ${APP.activeCodePanel === 'body' ? 'bg-dark-code bord-dark-code-b no-hover' : 'bord-dark-b bg-dark'} bord-dark-r`} onClick={() => { updateCodePanel('body') }}>
                    <small style='letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;'>
                      <span style='color: rgba(255, 255, 255, .75);'><b>{`<`}</b></span>
                      <span style='color: rgb(156, 220, 252);'>{`body`}</span>
                      <span style='color: rgba(255, 255, 255, .75);'><b>{`>`}</b></span>
                    </small>
                  </button>
                  <button class={`flex flex-center w-80 ${APP.activeCodePanel === 'js' ? 'bg-dark-code bord-dark-code-b no-hover' : 'bord-dark-b bg-dark'} bord-dark-r`} onClick={() => { updateCodePanel('js') }}>
                    <small style='letter-spacing: 1px; font-family: Monaco; font-size: 11px; font-weight: 400;'>
                      <span style='color: rgba(255, 255, 255, .75);'><b>{`<`}</b></span>
                      <span style='color: rgb(156, 220, 252);'>{`script`}</span>
                      <span style='color: rgba(255, 255, 255, .75);'><b>{`>`}</b></span>
                    </small>
                  </button>
                </div>
                <div class='flex-1 flex flex-justify-end bord-dark-b'>
                  <button id='run' class="flex flex-center m-0 p-0 w-50 bord-dark-l" style=' color: white;' onClick={() => { runCode() }} title='Run Code (CMD + Enter)'>
                    <img src="img/play.svg" />
                  </button>
                </div>
              </div>
              <div id='editor-container' class='bg-dark rel flex-1 overflow-hidden' onKeyDown={(e) => { listenForShortCuts(e) }}>
                <div class={`w-full h-full abs top left ${APP.activeCodePanel !== 'css' ? 'vis-hidden' : 'vis-visible'}`} onKeyUp={() => { updateTarget('css') }}>
                  <div class='w-full h-full' id='css'></div>
                </div>
                <div class={`w-full h-full abs top left ${APP.activeCodePanel !== 'body' ? 'vis-hidden' : 'vis-visible'}`} onKeyUp={() => { updateTarget('body') }}>
                  <div class='w-full h-full' id='body'></div>
                </div>
                <div class={`w-full h-full abs top left p-0 m-0 ${APP.activeCodePanel !== 'js' ? 'vis-hidden' : 'vis-visible'}`} onKeyUp={() => { updateTarget('js') }}>
                  <div class='w-full h-full p-0 m-0 ' id='js'></div>
                </div>
                <div class={`w-full h-full abs top left ${APP.activeCodePanel !== 'head' ? 'vis-hidden' : 'vis-visible'}`} onKeyUp={() => { updateTarget('head') }}>
                  <div class='w-full h-full' id='head'></div>
                </div>
              </div>
            </div>
          </div>
          
          <div style="width: 5px" id='container'></div>
          
          {/* Output */}
          <div
            class={`${APP.activePanel === 'output' ? 'bord-blue' : 'bord-dark'} iframe-container bg-dark`}
            id='output'
            style='flex: 1; display: flex; flex-direction: column;'>
            <div class='rel bord-dark-b'>
              <div class='flex' style='background: rgb(50, 50, 50); height: 35px;'>
                <div class='flex flex-center ' style='padding-left: 15px;'>
                  <svg width='13' height='13' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-left fa-w-14 fa-3x"><path fill="rgba(255, 255, 255, .5)" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" class=""></path></svg>
                </div>
                <div class='flex flex-center p-h-10' style=' padding-left: 15px; transform: rotate(180deg);'>
                  <svg width='13' height='13' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-left fa-w-14 fa-3x"><path fill="rgba(255, 255, 255, .5)" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" class=""></path></svg>
                </div>
                <button class='flex flex-center p-h-15 bord-dark-l bord-dark-r' style='margin-right: 15px;' onClick={() => { runCode() }} title='Run Code (CMD + Enter)'>
                  <img src='img/redo.svg' />
                </button>
                <div class='flex w-full h-full p-v-5' style='padding-right: 5px;'>
                  <div class='w-full h-full b-r-2 bg-dark bord-dark' style='padding-left: 10px;'>
                    <small style="color: rgba(255, 255, 255, .5);">https://www.mysite.com</small>
                  </div>
                </div>
              </div>
            </div>
            <iframe id='iframe' style="border: none; width: 100%; height: 100%;" srcdoc={VIEW.iframeSrc}>
            </iframe>
          </div>
        </div>
        {VIEW.videoSettingsOpen && <div class="abs top left w-full h-full flex flex-justify-center" style="z-index: 10; background-color: rgba(0, 0, 0, .1);">
          <div class="w-full overflow-hidden" style="max-width: 350px; margin-top: 175px;">
              <div class="flex flex-center bg-mid bord-dark p-v-5" style="border-top-right-radius: 5px; border-top-left-radius: 5px;"><small><b>Video Settings</b></small></div>
              <div class="p-10 bg-light bord-dark-l bord-dark-r bord-dark-b" style="border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;">
                <div class="m-5 p-v-5">
                    <div class="flex flex-column">
                      <small class="bold" style="width: 100px; padding-bottom: 5px;">Embed Code</small>
                      <textarea value={APP.projects[APP.activeProject].videoEmbed} onInput={(e) => { updateEmbedCode(e.target.value) }}></textarea>
                    </div>
                </div>
                <div class="flex" style="padding-top: 5px;">
                  <button class="b-r-2 bold p-5 w-full bg-green m-5" onClick={() => { closeVideoSettings() }}>Done</button>
                </div>
              </div>
          </div>
        </div>}
        {VIEW.openProjectOpen && <div class="abs top left w-full h-full flex flex-justify-center" style="z-index: 10; background-color: rgba(0, 0, 0, .1);">
          <div class="w-full overflow-hidden" style="max-width: 350px; margin-top: 175px;">
              <div class="flex flex-center bg-mid bord-dark p-v-5" style="border-top-right-radius: 5px; border-top-left-radius: 5px;"><small><b>Projects</b></small></div>
              <div class="p-10 bg-light bord-dark-l bord-dark-r bord-dark-b" style="border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;">
                <div class="m-5" style='margin-top: 10px;'>
                    {
                      APP.projects.map((proj, i) => {
                        return <div class='b-r-2 overflow-hidden' style='margin-bottom: 10px;'>
                          <button class='w-full txt-left bg-dark p-h-15 p-v-10'  onClick={() => { openProject(i) }}>
                            <small><b>{proj.title}</b></small>
                          </button>
                        </div>
                      })
                    }
                </div>
                <div class="flex" style="padding-top: 5px;">
                  <button class="b-r-2 bold p-5 w-full bg-red m-5" onClick={() => { closeOpenProjectModal() }}>Cancel</button>
                </div>
              </div>
          </div>
        </div>}
        {VIEW.projectSettings && <div class="abs top left w-full h-full flex flex-justify-center" style="z-index: 10; background-color: rgba(0, 0, 0, .1);">
          <div class="w-full overflow-hidden" style="max-width: 350px; margin-top: 175px;">
              <div class="flex flex-center bg-mid bord-dark p-v-5" style="border-top-right-radius: 5px; border-top-left-radius: 5px;"><small><b>Project Settings</b></small></div>
              <div class="p-10 bg-light bord-dark-l bord-dark-r bord-dark-b" style="border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;">
                <div class="m-5 p-v-5">
                    <div class="flex flex-column">
                      <small class="bold" style="width: 100px; padding-bottom: 5px;">Project Title</small>
                      <input type='text' value={APP.projects[APP.activeProject].title} onInput={(e) => { updateProjectName(e.target.value) }}></input>
                    </div>
                </div>
                <div class="flex" style="padding-top: 5px;">
                  <button class="b-r-2 bold p-5 w-full bg-green m-5" onClick={() => { closeProjectSettings() }}>Done</button>
                </div>
              </div>
          </div>
        </div>}
      </div>
    )
  }
}

const loadData = (onLoaded, onNew) => {
  //console.time('startRead')
  localforage.getItem(`codewithme_app`).then((stored) => {
    //console.timeEnd('startRead')
    if (stored) {
      for (const key in stored) {
        APP[key] = stored[key]
      }
  
      if (APP.projects[APP.activeProject].videoEmbed) VIEW.embedEditVal = APP.projects[APP.activeProject].videoEmbed

      onLoaded()
    } else {
      onNew()  
    }
  }).catch(function(err) {
    console.log('error on get ')
  });
}

const pingOtherTabs = () => {
  const timestamp = Date.now().toString() + Math.random().toString()
  localStorage.setItem('timestamp', timestamp)
}

const saveData = () => {
  localforage.setItem(`codewithme_app`, APP).then(function(value) {
    pingOtherTabs()
  }).catch(function(err) {
    console.log(err);
  });
}

const onProgramStart = () => {
  console.log('Program started.')

  newData()
  render(<View />, document.body)

  loadData(
    () => { // existing session
      runCode()
      VIEW.render()
    },
    () => { // new session
      saveData()
    }
  )
  
  window.addEventListener('keyup', saveData)
  window.addEventListener('mouseup', saveData)
  window.onstorage = (e) => {
    loadData(
      () => { // existing session
        runCode() // TODO: clean up duplicate in new project
        VIEW.render()
        setTimeout(() => {
          VIEW.editors.head.setValue(APP.projects[APP.activeProject].head)
          VIEW.editors.body.setValue(APP.projects[APP.activeProject].body)
          VIEW.editors.css.setValue(APP.projects[APP.activeProject].css)
          VIEW.editors.js.setValue(APP.projects[APP.activeProject].js)
        }, 0)
      }
    )
  }
}

window.addEventListener('load', onProgramStart)
if (ENV === 'PROD') {
  window.addEventListener('beforeunload', (event) => {
    event.returnValue = `Are you sure you want to leave?`;
  });
}

