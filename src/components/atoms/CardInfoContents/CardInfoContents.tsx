import clsx from 'clsx'
import React from 'react'

export const CardInfoContents = () => {

  const classes = clsx(
    'w-full',
    'p-8',
    'text-rose-500',
  )
  return (
    <div className={classes}>
      <div>Get started by creating an agent and starting your journey!</div>
    </div>
  )
}
