import { Card } from 'SpaceTraders/components/atoms/Card/Card'
import { CardTitle } from 'SpaceTraders/components/atoms/CardTitle/CardTitle'
import { HeroSubtitle } from 'SpaceTraders/components/atoms/HeroSubtitle/HeroSubtitle'
import { HeroTitle } from 'SpaceTraders/components/atoms/HeroTitle/HeroTitle'
import { CreateAgent } from 'SpaceTraders/components/molecules/CreateAgent/CreateAgent'
import React from 'react'

export const QuickStart = () => {
  return (
    <div className="p-8 w-full h-full">
      <div className="w-full h-full grid place-items-center">
        <div className="grid gap-8 text-center">
          <HeroTitle />
          <HeroSubtitle text="A T3 Client built for the game" />
        </div>
        <div className="grid grid-cols-1 gap-8 w-1/3">
          <Card
            title={<CardTitle text="Create an Agent" />}
            contents={<CreateAgent />}
          />
        </div>
      </div>
    </div>
  )
}
