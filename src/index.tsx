import React from 'react'
import ReactDOM from 'react-dom'
import App from './ui/views/App'
import './index.css'
import * as firebase from '@/lib/firebase'

// Initialize Firebase

firebase.init()

// Render React app to DOM

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
