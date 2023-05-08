import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export const UserAvatar = () => {
  const session = useSession()
  const userImage = session?.data?.user?.image

  if (!userImage || userImage === null) return <div>UserAvatar</div>
  return (
    <Image
      src={userImage}
      alt="User Avatar"
      width={50}
      height={50}
      className="rounded-full ring-4 ring-rose-950"
    />

  )
}
