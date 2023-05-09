import { Logo } from 'SpaceTraders/components/atoms/Logo/Logo'
import { UserAvatar } from 'SpaceTraders/components/atoms/UserAvatar/UserAvatar'
import { useRouter } from 'next/router'
import React from 'react'

export const Header = () => {
  const router = useRouter()

  return (
    <div className="flex justify-between w-full p-8 border-b-2 border-gray-200 items-center">
      <Logo onClick={() => router.push("/")} />
      <div className="flex gap-8 items-center text-black font-light">
        <div>Contracts</div>
        <div>Ships</div>
        <div>Crew</div>
        <UserAvatar />
      </div>
    </div>
  )
}
