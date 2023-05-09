import React from 'react'
import { clsx } from 'clsx'

export type TPageLayout = {
  children: React.ReactNode
  className?: string
}

export const PageLayout = ({ children, className }: TPageLayout) => {
  const classes = clsx(
    'flex',
    'flex-col',
    'items-center',
    'min-h-screen',
    'bg-gray-50',
    'text-2xl',
    className
  )

  return (
    <main data-testid="PageLayout" className={classes}>{children}</main>
  )
}
