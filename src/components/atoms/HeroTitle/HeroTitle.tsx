import { useTimeout } from 'SpaceTraders/functions/hooks/useTimeout'
import clsx from 'clsx'
import React from 'react'


export const HeroTitle = () => {
  const timeout = useTimeout(1000)


  const classes = clsx(
    'text-7xl font-bold text-rose-950',
    timeout ? 'opacity-100 scale-100' : 'opacity-0 scale-90',
    'transition-all duration-1000 ease-in-out',
  )

  return (
    <div className={classes}>SpaceTraders</div>
  )
}
