import { Card } from 'SpaceTraders/components/atoms/Card/Card'
import { HomeCTA } from 'SpaceTraders/components/molecules/HomeCTA/HomeCTA'
import React from 'react'

export const HomeBody = () => {
  return (
    <div className="grid grid-rows-2 grow w-full">
      <HomeCTA />
      <div className="row-span-1 w-full h-full grid place-items-center">
        <div className="grid grid-cols-3 w-2/3 gap-16 p-8">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
