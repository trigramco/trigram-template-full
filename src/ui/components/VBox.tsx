import React from 'react'

const VBox = (props: any) => {
  const { children, className, center, vcenter, ...other } = props

  let classes = 'flex flex-col'
  classes = className ? classes.concat(` ${className}`) : classes
  classes = center ? classes.concat(' items-center') : classes
  classes = vcenter ? classes.concat(' justify-center') : classes
  return (
    <div className={classes} {...other}>{children}</div>
  )
}

export default VBox
