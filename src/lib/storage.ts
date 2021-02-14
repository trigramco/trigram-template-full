// import '@firebase/storage'

// import { authenticate, checkAuth, isAuthenticated } from './auth'

// import { getFireBaseApp } from './firebase'

// const firebase = getFireBaseApp()

// interface uploadFileProps {
//   file: File
//   filePath: string
// }

// // TODO: randomize filename optionally

// export const uploadFile = async ({
//   file,
//   filePath,
// }: uploadFileProps): Promise<string> => {
//   console.log('User is authenticated => ', isAuthenticated())
//   // let user = checkAuth()
//   // console.log('USER?', JSON.stringify(user))

//   //verify you're actually logged in before trying to upload.
//   //TODO: possible refactor some of this, maybe force auth on the fb singleton.
//   if (!isAuthenticated()) {
//     await authenticate()
//     console.log('Now? User is authenticated => ', isAuthenticated())
//   }

//   const ref = firebase.storage().ref()

//   try {
//     console.log('start upload')
//     const uploadTask = await ref.child(filePath).put(file)
//     console.log('upload complete')
//     const downloadUrl = await uploadTask.ref.getDownloadURL()
//     console.log('got file')
//     return downloadUrl
//   } catch (error) {
//     console.log('Error in uploadFile (storage)', JSON.stringify(error))
//     throw error
//   }

//   //   const progress = () => console.log('progress')
//   //   const error = (e: Error) => console.log('Error: ', e)
//   //   const done = () => console.log('done')

//   //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
//   //     progress,
//   //     error,
//   //     done
//   //   )

//   //   const downloadUrl = await ref
//   //     .child(path)
//   //     .getDownloadURL()

//   //   return downloadUrl

//   // uploadTask.on('')
// }
