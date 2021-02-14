import React, { useState, useEffect } from 'react'

import VBox from '@/ui/components/VBox'
import HBox from '@/ui/components/HBox'
import Button from '@/ui/components/Button'
import Heading from '@/ui/components/Heading'

import { logout } from '@/lib/auth'
import { getCurrentUser } from '@/lib/db'

const Header = () => {

  const [user, setUser] = useState<any>({})

  useEffect(() => {
    (async () => setUser(await getCurrentUser()))()
  }, [])

  return (
    <HBox vcenter className='min-w-full p-4 justify-between'>
      <Heading size={4} color={'gray-500'}>TRIGRAM-TEMPLATE-FULL</Heading>
      <HBox vcenter>
        <img className='w-10 h-10 rounded-full mr-4' src={user.avatarURL} />
        <Button onClick={logout}>Logout</Button>
      </HBox>
    </HBox>
  )
}

export default Header
