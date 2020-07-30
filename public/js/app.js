// Ace Editor Config
const editor = ace.edit("editor");
const editorContainer = document.querySelector('#editor-container')
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setShowPrintMargin(false);

const defaultStr = `const cvs = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')`

editor.setValue(defaultStr)

// App
const iframe = document.querySelector('#iframe')

const runCode = () => {
  const code = editor.getValue().trim()
  console.clear()
  iframe.srcdoc = `<html><style>html,body{width:100%;height:100%;margin:0;padding:0;}</style><body style='display: flex; justify-content: center; align-items: center;'><canvas id='canvas' width='360' height='640' style='background: white; width: 360px; height: 640px;'></canvas></body><script>${code.trim()}</script></html>`
}

// APP - Shortcuts
let shiftKeyMark = Date.now()
let metaKeyMark = Date.now()
let alphaKeyMark = Date.now()

const setupListeners = (e) => {
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
  }
}

editorContainer.addEventListener('keydown', setupListeners)

const runBtn = document.querySelector('#run')
runBtn.addEventListener('click', () => {
  runCode()
})

const save = () => {
  localStorage.setItem('saved', editor.getValue())
}

// APP - On Load
window.addEventListener('load', () => {
  const saved = localStorage.getItem('saved')

  if (!saved) {
    save()
  } else {
    editor.setValue(saved)
    editor.focus(); //To focus the ace editor
    editor.gotoLine(editor.getSession().getValue().split("\n").length); //Go to end of document based on # of lines
  }

  window.addEventListener('keyup', save)
  window.addEventListener('beforeunload', save)

  runCode()
})

