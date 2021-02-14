import React, { useState, useEffect } from 'react'
import { authUser } from '@/lib/auth'
import Button from '@/ui/components/Button'
import VBox from '@/ui/components/VBox'

const Login = () => {
  return (
    <VBox center className='bg-black min-w-full min-h-screen'>      
      <h1>Login</h1>
      <Button onClick={authUser}>Login</Button>
    </VBox>
  )
}

export default Login
