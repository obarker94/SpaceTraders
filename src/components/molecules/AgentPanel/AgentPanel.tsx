import React, { useEffect } from 'react'
import { AgentCard } from '../AgentCard/AgentCard'
import { api } from 'SpaceTraders/utils/api'
import { useAppSelector } from 'SpaceTraders/app/hooks'

export type TAgentPanel = {
  handleOpen: () => void
}

export const AgentPanel = ({ handleOpen }: TAgentPanel) => {
  const { data, refetch } = api.agent.getAll.useQuery()
  const { refetch: globalRefetch } = useAppSelector(state => state.globalUtils)

  useEffect(() => {
    refetch()
  }, [globalRefetch])

  return (
    <div className="w-96 min-h-screen flex flex-col border-r-2 border-gray-200">
      <div className="grid place-items-center p-4 border-b-2 border-gray-200">
        <button onClick={handleOpen} className="bg-gray-700 text-white rounded-lg flex justify-center items-center w-full p-4">
          New Agent
        </button>
      </div>
      <div className="w-96 min-h-screen overflow-y-scroll pb-14">
        {data?.map((agent) => <AgentCard key={agent.id} name={agent.name} faction={agent.faction} />)}
      </div>
    </div>
  )
}
