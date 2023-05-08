import { useTimeout } from 'SpaceTraders/functions/hooks/useTimeout'
import clsx from 'clsx'
import React from 'react'

export type THeroSubtitleProps = {
  text: string
}

export const HeroSubtitle = ({ text }: THeroSubtitleProps) => {
  const timeout = useTimeout(1000)

  const classes = clsx(
    'text-3xl font-bold text-rose-400',
    timeout ? 'opacity-100 scale-100' : 'opacity-0 scale-90',
    'transition-all duration-1000 ease-in-out',
  )

  return (
    <div className={classes}>{text}</div>
  )
}
