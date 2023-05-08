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
    'justify-center',
    'min-h-screen',
    'py-2',
    'bg-gray-800',
    'text-white',
    'text-2xl',
    'font-mono',
  )


  return (
    <main data-testid="PageLayout" className={classes}>{children}</main>
  )
}
