import React from 'react'

export type TPageBody = {
  children: React.ReactNode
}

export const PageBody = ({ children }: TPageBody) => {
  return (
    <div className="w-full h-full p-16 flex grow rounded-xl">
      <div className="bg-gray-50 w-full rounded-xl shadow-md">{children}</div>
    </div>
  )
}
