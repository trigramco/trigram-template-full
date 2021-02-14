import firebase from 'firebase/app'

// Get this from your Firebase app dashboard

const FIREBASE_CONFIG = {
}

export function init () {
  firebase.initializeApp(FIREBASE_CONFIG)
}
