import firebase from 'firebase/app'
import 'firebase/firestore'
import { getUser } from './auth'

export async function findOrCreateUser(
  user: any, createUser: Function, key: string = 'email') {
  
  // Lookup user by `key`

  const db = firebase.firestore()

  const doc = await db
    .collection('users')
    .doc((user as any)[key])
    .get()
 
  // User does not exist, create them!

  if (!doc.exists && user) {

    const userRecord: any = createUser(user)

    // Set user record

    await db
      .collection('users')
      .doc((user as any))
      .set(userRecord)

    // TODO: onSuccess 
 
  }

    // User already exists 

    else {
      // TODO: exists callback
    }

}

export async function getCurrentUser () {
  const currentUser = await getUserData(getUser())
  return currentUser
}

export function getUserData(user: any) {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('users')
      .doc(user.email)
      .get()
      .then((doc) => {
        console.log('GET USER DATA')
        console.log(doc.exists)
        console.log(doc.data())
        if (doc.exists) {
          resolve(doc.data())
        }
      })
      .catch((err) => {
        console.log('error getting user data', err)
        reject(err)
      })
  })
}


export function updateUser(user: any) {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('users')
      .doc(user.userProfile.email)
      .set(user, { merge: false })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => reject(err))
  })
}
