export const ENV = window.location.href.includes('localhost:4000') ? 'DEV' : 'PROD'
export const APP = {}
export const VIEW = { render: undefined }

const initAppDefault = () => {
  APP.activePanel = 'editor'
  APP.activeCodePanel = 'body'

  APP.activeProject = 0
  APP.projects = [
    {
      title: 'Starter Project',
      head: '',
      body: '',
      css: '',
      js: '',
      videoEmbed: ''
    }, {
      title: 'Empty Project 2',
      head: '',
      body: '',
      css: '',
      js: '',
      videoEmbed: ''
    }, {
      title: 'Empty Project 3',
      head: '',
      body: '',
      css: '',
      js: '',
      videoEmbed: ''
    }, {
      title: 'Empty Project 4',
      head: '',
      body: '',
      css: '',
      js: '',
      videoEmbed: ''
    }, {
      title: 'Empty Project 5',
      head: '',
      body: '',
      css: '',
      js: '',
      videoEmbed: ''
    }
  ]

  Object.seal(APP)
}

const initViewDefault = () => {
  // VIEW.activeInput = {
  //   id: '',
  //   val: ''
  // }

  VIEW.editors = {
    head: undefined,
    body: undefined,
    css: undefined,
    js: undefined
  }

  VIEW.iframeSrc = ''

  VIEW.videoSettingsOpen = false

  VIEW.embedEditOpen = false
  VIEW.embedEditVal = ''
  VIEW.videoOpen = true

  VIEW.openProjectOpen = false
  VIEW.projectSettings = false

  VIEW.runCache = 0

  Object.seal(VIEW)
}

export const newData = () => {
  initAppDefault()
  initViewDefault()
}