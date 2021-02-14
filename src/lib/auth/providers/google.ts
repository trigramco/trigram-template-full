import firebase from 'firebase/app'
import 'firebase/auth'

export async function doAuth (): Promise<firebase.auth.UserCredential> {

  const db = firebase.firestore()

  // Google login provider

  const  provider = new firebase.auth.GoogleAuthProvider()

  // Let user select their Google account

  provider.setCustomParameters({
    prompt: 'select_account',
  })

  try {

    // Login with a Google popup
    // alt: use redirect 

    const result = await firebase
      .auth()
      .signInWithPopup(provider)

    return result
      // cast required to correctly determine type of credential 🤷

    // const { user, credential } = <{
    //   user: firebase.User, 
    //   credential: firebase.auth.OAuthCredential
    // }>result

    // // This gives you a Google Access Token
    // // You can use it to access the Google API

    // // TODO: return?
    // const { accessToken, idToken } = credential

    // // return the Firebase User 

    // return user
  }

  catch (err) {
    throw(err)  
  }

}

export function createUser (user: any) {
  
  // Create user record based on 
  // Google profile

  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    avatarURL: user.photoURL,
    lastLogin: new Date(),
    firstLogin: new Date()
  }

}
