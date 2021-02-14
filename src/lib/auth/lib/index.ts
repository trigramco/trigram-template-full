import firebase from 'firebase/app'
import 'firebase/auth'
import { findOrCreateUser } from '@/lib/db'
// use Google
import { doAuth, createUser } from '../providers/google'

export function getUser () {
  return firebase.auth().currentUser
}

export async function watchAuth(cb: Function) {

  // THIS IS NEEDED if you want to delete your account from firestore
  // for testing, it keeps the old auth and leads to an error
  // setting persistence to NONE temporarily and refreshing will solve this problem
  //
  // await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

  // TODO: promisify?

  firebase.auth().onAuthStateChanged((user) => {
    (user) 
      ? cb('LOGGED_IN')
      : cb('LOGGED_OUT')
  })

}

export async function authUser () {

  try {

    // Do Auth 

    const { user, credential } = <{
      user: firebase.User,
      // may contain tokens 
      credential: firebase.auth.OAuthCredential
    }> await doAuth()

    // Find or Create a User

    const theUser = await findOrCreateUser(user, createUser, 'email')        
  
    return theUser
  }

  catch (error) {
    throw(error)
  }
}

export async function logout () {
  await firebase.auth().signOut()
}

export type LOGIN_STATES = 'LOADING' |'LOGGED_IN' | 'LOGGED_OUT'
