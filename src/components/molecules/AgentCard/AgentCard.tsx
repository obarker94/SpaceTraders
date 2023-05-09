import { IconPicker } from 'SpaceTraders/components/atoms/IconPicker/IconPicker'
import React from 'react'

export const AgentCard = () => {
  return (
    <div className="grid gap-4 border-b-2 border-gray-200 pb-8 hover:bg-gray-200 p-8 cursor-pointer transform transition-all duration-100">
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 bg-gray-700 rounded-full" />
        <div className="grid gap-2">
          <div className="font-semibold">BigChungus</div>
          <div className="font-light text-sm">COSMIC</div>
        </div>
      </div>
      <div className="flex gap-4 items-center">

        <div className="flex gap-1 items-center">
          <IconPicker icon="dollar" className="h-4 w-4" />
          <div className="text-sm">100,000</div>
        </div>

        <div className="flex gap-1 items-center text-gray-400">
          <IconPicker icon="info" className="h-4 w-4" />
          <div className="text-sm">The VOID</div>
        </div>

        <div className="flex gap-1 items-center text-gray-400">
          <IconPicker icon="info" className="h-4 w-4" />
          <div className="text-sm">Location</div>
        </div>

      </div>
    </div>
  )
}
