import React from 'react'

export type TButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: TButtonProps) => {
  const { children, ...rest } = props
  return (
    <button
      className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}
