import clsx from 'clsx'
import React from 'react'

export type THeaderItem = {
  text: string
  active?: boolean
  ping?: boolean
}


export const HeaderItem = ({ text, active, ping }: THeaderItem) => {

  const classes = clsx(
    'text-rose-950',
    active && 'font-bold',
    `hover:text-rose-950`,
    `transition-colors`,
    `cursor-pointer`,
    `duration-300`,
    `ease-in-out`,
    `hover:scale-110`,
    `transform`,
    `hover:font-bold`,
  )

  return (
    <div className="flex gap-4 items-center">
      <div className={`h-2 w-2 rounded-full ${ping && `animate-ping bg-rose-950`} bg-gray-50`} />
      <div className={classes}>{text}</div>
    </div>
  )
}
