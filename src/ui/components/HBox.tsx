import React from 'react'

const HBox = (props: any) => {
  const { children, className, center, vcenter, ...other } = props

  let classes = 'flex'
  classes = className ? classes.concat(` ${className}`) : classes
  classes = center ? classes.concat(' justify-center') : classes
  classes = vcenter ? classes.concat(' items-center') : classes
  return (
    <div className={classes} {...other}>{children}</div>
  )
}

export default HBox
