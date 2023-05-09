import React from 'react'

export type TLogoProps = {
  onClick?: () => void
}

export const Logo = ({ onClick }: TLogoProps) => {
  return (
    <div className="flex cursor-pointer" onClick={onClick}>
      <div className="font-semibold border-b-2 border-black">Oliver</div>
      <div className="font-light">Traders</div>
    </div>
  )
}
