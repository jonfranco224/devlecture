export const ENV = window.location.href.includes('localhost:4000') ? 'DEV' : 'PROD'
export const APP = {}
export const VIEW = { render: undefined }

const exampleHead = `<title>My Site</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="description" content="">
<meta name="keywords" content="">
<meta property="og:type" content="website">
<meta property="og:url" content="">
<meta property="og:title" content="">
<meta property="og:description" content="">`

const exampleCSS = `*, *::after, *::before{
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

html, body {
  background-color: lightblue;
  min-height: 100%;
}

h2, p {
  color: rgba(0, 0, 0, .8);
  text-align: center;
}

#clock-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 25px 0px;
}

.clock {
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, .8);
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
}

.clock .number {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: rotate(var(--rotation));
  font-size: 1.5rem;
}

.clock .number1 { --rotation: 30deg; }
.clock .number2 { --rotation: 60deg; }
.clock .number3 { --rotation: 90deg; }
.clock .number4 { --rotation: 120deg; }
.clock .number5 { --rotation: 150deg; }
.clock .number6 { --rotation: 180deg; }
.clock .number7 { --rotation: 210deg; }
.clock .number8 { --rotation: 240deg; }
.clock .number9 { --rotation: 270deg; }
.clock .number10 { --rotation: 300deg; }
.clock .number11 { --rotation: 330deg; }

.clock .hand {
  --rotation: 0;
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 10px;
  height: 50%;
  background-color: black;
  border: 1px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 10;
  transform-origin: bottom;
  transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));
}

.clock::after {
  content: '';
  position: absolute;
  background-color: black;
  z-index: 11;
  width: 15px;
  height: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.clock .second {
  width: 3px;
  height: 45%;
  background-color: red;
}

.clock .minute {
  width: 7px;
  height: 40%;
  background-color: black;
}

.clock .hour {
  width: 10px;
  height: 35%;
  background-color: black;
}`

const exampleBody = `<div style='padding: 20px 0px 0px 0px;'>
  <h2>Welcome!</h2>
  <p>To start an empty project, go to "My Projects".</p>
</div>
<div id='clock-container'>
  <div class='clock'>
    <div class='hand hour' data-hour-hand></div>
    <div class='hand minute' data-minute-hand></div>
    <div class='hand second' data-second-hand></div>
    <div class='number number1'>1</div>
    <div class='number number2'>2</div>
    <div class='number number3'>3</div>
    <div class='number number4'>4</div>
    <div class='number number5'>5</div>
    <div class='number number6'>6</div>
    <div class='number number7'>7</div>
    <div class='number number8'>8</div>
    <div class='number number9'>9</div>
    <div class='number number10'>10</div>
    <div class='number number11'>11</div>
    <div class='number number12'>12</div>
  </div>
</div>
<div style='padding: 0px 0px;'>
  <h2>"Build A Clock With Javascript"</h2>
  <p>A project by WebDevSimplified</p>
</div>`

const exampleJS = `setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()`

const exampleEmbed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Ki0XXrlKlHY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

const initAppDefault = () => {
  APP.activePanel = 'editor'
  APP.activeCodePanel = 'body'

  APP.activeProject = 0
  APP.projects = [
    {
      title: 'Example Project',
      head: exampleHead,
      body: exampleBody,
      css: exampleCSS,
      js: exampleJS,
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