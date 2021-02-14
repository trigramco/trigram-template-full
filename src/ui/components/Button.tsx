import React, { useState, useEffect } from 'react'
import { clean } from '@/util/css'

enum buttonTypes {
  primary = 'PRIMARY',
  secondary = 'SECONDARY',
  simple = 'SIMPLE'
}

interface props {
  type?: buttonTypes 
  children: JSX.Element[] | JSX.Element | string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const primaryButtonCss = clean`
    inline-flex 
    items-center 
    justify-start 
    py-3
    px-5 
    mt-3 
    transition-colors 
    duration-500 
    bg-gray-300 
    rounded 
    text-black-400 
    hover:bg-gray-100
`

// const HBox = (props: any) => {
//   const { children, className, center, vcenter, ...other } = props

const Button = ({ type=buttonTypes['primary'], onClick, children, ...other }: props) => {

  console.log(other)

  let css = ''
  if (type === 'PRIMARY') {
    css += primaryButtonCss
  }

  return (
    <button className={css} onClick={onClick}>{children}</button>
  )
}

export default Button
