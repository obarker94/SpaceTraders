import clsx from 'clsx'
import React from 'react'

export type TCardTitleProps = {
  text: string
  className?: string
}

export const CardTitle = ({ text, className }: TCardTitleProps) => {
  const classes = clsx(
    'p-8',
    'text-2xl',
    'font-bold',
    'text-rose-400',
    className,
  )
  return (
    <div className={classes}>{text}</div>
  )
}
