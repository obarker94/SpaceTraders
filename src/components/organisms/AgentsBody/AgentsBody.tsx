import { AgentCard } from 'SpaceTraders/components/molecules/AgentCard/AgentCard'
import React from 'react'

export const AgentsBody = () => {
  return (
    <div className="w-full min-h-screen flex ">

      <div className="w-96 min-h-screen flex flex-col border-r-2 border-gray-200">
        <div className="grid place-items-center p-4 border-b-2 border-gray-200">
          <button className="bg-gray-700 text-white rounded-lg flex justify-center items-center w-full p-4">
            New Agent
          </button>
        </div>
        <div className="w-96 min-h-screen overflow-y-scroll">
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
        </div>
      </div>
      <div>
        hi
      </div>
    </div>
  )
}
