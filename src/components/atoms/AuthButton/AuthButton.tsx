import clsx from 'clsx'
import React from 'react'

export const AuthButton = () => {
  const classes = clsx(
    'text-rose-950',
    `hover:text-rose-950`,
    `transition-colors`,
    `cursor-pointer`,
    `duration-300`,
    `ease-in-out`,
    `hover:scale-110`,
    `transform`,
    `hover:font-bold`,
    `text-md`
  )

  return (
    <div className="flex gap-4 items-center bg-gray-300 rounded-xl px-4 py-2 shadow-md">
      <div className={classes}>Sign In</div>
    </div>
  )
}
