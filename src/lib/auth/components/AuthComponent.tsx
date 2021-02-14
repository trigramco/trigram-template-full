import React, { useState, useEffect } from 'react'
import { watchAuth, LOGIN_STATES } from '../lib/index'

interface AuthProps {
  Loading: React.ReactNode
  Fail: React.ReactNode  
  Success: React.ReactNode
  // provider: 'Google' | 'Twitter'
}

function Auth ({Loading, Fail, Success}: AuthProps) {

  const [authStatus, setAuthStatus] = useState<LOGIN_STATES>('LOADING')

  useEffect(() => {
    // Watch auth status
    watchAuth(setAuthStatus)
  }, [])

  return <div>{
    authStatus === 'LOGGED_OUT'
      ? Fail
      : authStatus === 'LOADING'
        ? Loading
        : Success
  }</div>
}

export default Auth
