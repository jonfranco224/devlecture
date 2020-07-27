export const ENV = window.location.href.includes('localhost:4000') ? 'DEV' : 'PROD'
export const APP = {}
export const VIEW = { render: undefined }

const initAppDefault = () => {
  APP.start = ''

  Object.seal(APP)
}

const initViewDefault = () => {
  VIEW.activeInput = {
    id: '',
    val: ''
  }

  Object.seal(VIEW)
}

export const newData = () => {
  initAppDefault()
  initViewDefault()
}