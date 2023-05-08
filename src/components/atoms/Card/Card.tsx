import clsx from 'clsx'
import React from 'react'

export type TCardProps = {
  contents: React.ReactNode
  title?: React.ReactNode
  actions?: React.ReactNode
}

export const Card = ({ contents, title, actions }: TCardProps) => {
  const classes = clsx(
    'bg-white',
    'rounded-lg',
    'shadow-lg',
    `ring-2`,
    `ring-rose-400`,
  )

  return (
    <div className={classes}>
      {title && <div>{title}</div>}
      <div>{contents}</div>
      {actions && <div>{actions}</div>}
    </div>
  )
}
