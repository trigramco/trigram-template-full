import React, { useState, useEffect } from 'react'
import { clean } from '@/util/css'

interface props {
  children: string
  size?: 1 | 2 | 3 | 4 
  color?: string
}

const baseCss = clean``

const Heading = ({ children, size=1, color }: props) => {

  let css = ''

  // Sizing

  switch (size) {
    case 1 : css += 'text-4xl '; break;
    case 2 : css += 'text-3xl '; break;
    case 3 : css += 'text-2xl '; break;
    case 4 : css += 'text-xl '; break;
  }

  // if (size === 1) {
  //   css += 'text-4xl '
  // }

  // Color 
  
  if (color) {
    css += `text-${color}`
  }

  return (
    <div className={css}>{children}</div>
  )
}

export default Heading
