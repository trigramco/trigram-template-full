import React from 'react'
import { AuthComponent as Auth } from '@/lib/auth'

import Login from './Login'
import Main from './Main'

interface AppProps {}

function App({}: AppProps) {

  return <Auth
    Loading={<h1>Checking...</h1>}
    Fail={<Login />}
    Success={<Main />}
  />

}

export default App
