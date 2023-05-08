import { HeaderItem } from 'SpaceTraders/components/atoms/HeaderItem/HeaderItem'
import { IconPicker } from 'SpaceTraders/components/atoms/IconPicker/IconPicker'
import { UserAvatar } from 'SpaceTraders/components/atoms/UserAvatar/UserAvatar'
import React from 'react'

export const Header = () => {
  return (
    <div className="p-4 border-b-2 border-gray-200 w-full shadow-md bg-gray-50 shadow-rose-900">
      <div className="flex justify-between items-center">
        <div className="flex gap-8">
          <HeaderItem text="Contract" active ping />
          <HeaderItem text="Crew" />
          <HeaderItem text="Ships" />
        </div>
        <div className="flex gap-6 items-center">
          <IconPicker icon="bell" className="text-rose-950 h-6 w-6" />
          <IconPicker icon="cog" className="text-rose-950 h-6 w-6" />
          <IconPicker icon="logout" className="text-rose-950 h-6 w-6" />
          <UserAvatar />
        </div>
      </div>
    </div>
  )
}
