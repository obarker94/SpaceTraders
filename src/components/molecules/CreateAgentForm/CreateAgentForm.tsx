import { setGlobalRefetch } from 'SpaceTraders/app/globalUtils/globalUtilsSlice'
import { useAppDispatch } from 'SpaceTraders/app/hooks'
import { TCreateAgentSchema } from 'SpaceTraders/server/api/routers/agent'
import { api } from 'SpaceTraders/utils/api'
import React, { ChangeEvent, useState } from 'react'

export type TCreateAgentForm = {
  handleClose: () => void
}

export const CreateAgentForm = ({ handleClose }: TCreateAgentForm) => {
  const dispatch = useAppDispatch()
  const { mutate } = api.agent.create.useMutation({
    onSuccess: () => {
      handleClose()
      dispatch(setGlobalRefetch())
    }
  })

  const [values, setValues] = useState(initialValues)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = () => mutate(values)

  return (
    <div className="grid gap-6">
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          You can swap between agents at any time!
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label className=" text-black">Agent Name:</label>
          <input className="p-2 ring-2 ring-gray-500 rounded-md" placeholder="MAVERICK" name="agentName" onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <label className=" text-black">Faction</label>
          <input className="p-2 ring-2 ring-gray-500 rounded-md" placeholder="COSMIC" name="faction" onChange={handleChange} />
        </div>
      </div>
      <div className="mt-4">
        <button onClick={handleSubmit} className="bg-gray-700 text-white rounded-lg flex justify-center items-center w-full p-4">
          New Agent
        </button>
      </div>
    </div>
  )
}

const initialValues = {
  agentName: ``,
  faction: ``,
} satisfies TCreateAgentSchema
