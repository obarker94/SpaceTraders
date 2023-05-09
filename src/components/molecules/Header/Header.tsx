import { UserAvatar } from 'SpaceTraders/components/atoms/UserAvatar/UserAvatar'
import React from 'react'

export const Header = () => {
  return (
    <div className="flex justify-between w-full p-8 border-b-2 border-gray-200 items-center">
      <div>OliverTraders</div>
      <div className="flex gap-8 items-center text-black font-light">
        <div>Contracts</div>
        <div>Ships</div>
        <div>Crew</div>
        <UserAvatar />
      </div>
    </div>
  )
}
