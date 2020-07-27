import { h, render, Component } from 'preact'
import { APP, VIEW, ENV, newData } from './state'

class View extends Component{
  componentDidMount () {
    VIEW.render = () => {
      this.setState({}, () => {})
    }

    // Adding google analytics
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());

    // gtag('config', 'UA-144729452-1');
  }

  render () {
    return (
      <div>Start</div>
    )
  }
}

const loadData = ({ onLoaded, onError }) => {
  //console.time('startRead')
  localforage.getItem('discotek').then((stored) => {
    //console.timeEnd('startRead')
    for (const key in stored) {
      APP[key] = stored[key]
    }

    onLoaded()
  }).catch(function(err) {
    console.log(err)
    onError()
  });
}

const saveData = () => {
  setTimeout(() => {
    console.time('startwrite')
    localforage.setItem('discotek', APP).then(function(value) {
      console.timeEnd('startwrite')
    }).catch(function(err) {
      console.log(err);
    });
  }, 50)
}

const onProgramStart = () => {
  console.log('Program started.')

  newData()
  render(<View />, document.body)
  
  loadData({
    onLoaded: () => {
      VIEW.render()
    },
    onError: () => {}
  })

  // setupKeyListeners()
  
  // window.addEventListener('keyup', saveData)
  // window.addEventListener('mouseup', saveData)
}

window.addEventListener('load', onProgramStart)
if (ENV === 'PROD') {
  window.addEventListener('beforeunload', (event) => {
    event.returnValue = `Are you sure you want to leave?`;
  });
}

