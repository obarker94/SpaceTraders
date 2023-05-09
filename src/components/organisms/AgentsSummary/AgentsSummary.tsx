import { LineCard } from 'SpaceTraders/components/atoms/LineCard/LineCard'
import React from 'react'

export const AgentsSummary = () => {
  return (
    <div className="p-16 flex flex-col gap-16 w-full">
      <div className="">
        <div className="text-3xl font-bold mb-4">Agents</div>
        <div className="font-light">Summary Information</div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 w-full gap-8">
          <LineCard title={<div className="text-sm font-light">Most Played</div>} content={<div className="">Big Chungus</div>} />
          <LineCard title={<div className="text-sm font-light">Most Played</div>} content={<div className="">Big Chungus</div>} />
          <LineCard title={<div className="text-sm font-light">Most Played</div>} content={<div className="">Big Chungus</div>} />
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 w-full gap-16">
          <LineCard title={<div className="text-sm font-light">Most Played</div>} content={<div className="py-16">Big Chungus</div>} />
          <div className="grid grid-cols-5 w-full gap-8">
            <LineCard className="col-span-3" title={<div className="text-sm font-light">Most Played</div>} content={<div className="py-16">Big Chungus</div>} />
            <LineCard className="col-span-2" title={<div className="text-sm font-light">Most Played</div>} content={<div className="py-16">Big Chungus</div>} />
          </div>
        </div>
      </div>
    </div>
  )
}
