import React from 'react'
import { clsx } from 'clsx'

export type TPageLayout = {
  children: React.ReactNode
}

export const PageLayout = ({ children }: TPageLayout) => {
  const classes = clsx(
    'flex',
    'flex-col',
    'items-center',
    'min-h-screen',
    'bg-gradient-to-b',
    'from-rose-950',
    'to-gray-900',
    'text-white',
    'text-2xl',
    'font-mono',
  )


  return (
    <main data-testid="PageLayout" className={classes}>{children}</main>
  )
}
