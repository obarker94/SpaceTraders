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
    'bg-gray-50',
    'text-2xl',
  )

  return (
    <main data-testid="PageLayout" className={classes}>{children}</main>
  )
}
