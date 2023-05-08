import { useQuery } from '@tanstack/react-query'
import { Button } from 'SpaceTraders/components/atoms/Button/Button'
import { Input } from 'SpaceTraders/components/atoms/Input/Input'
import { api } from 'SpaceTraders/utils/api'
import clsx from 'clsx'
import React, { useState } from 'react'
import { z } from 'zod'


export const CreateAgentSchema = z.object({
  agentName: z.string(),
  faction: z.string(),
})

export type ZCreateAgentSchema = z.infer<typeof CreateAgentSchema>

const initialValues = {
  agentName: '',
  faction: '',
}

export const CreateAgent = () => {
  const [values, setValues] = useState<ZCreateAgentSchema>(initialValues)

  const { data, refetch } = api.agent.getAll.useQuery()

  const { mutate } = api.agent.create.useMutation({
    onSuccess: () => refetch()
  })

  const classes = clsx(
    'w-full',
    'p-8',
    'text-rose-500',
    'grid gap-12',
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = () => {
    mutate(values)
  }

  console.log({ data })

  return (
    <div className={classes}>
      <div className="">Get started by creating an agent!</div>
      <div className="grid gap-8">
        <Input value={values.agentName} onChange={handleChange} name="agentName" label="Agent Name" placeholder="StarMeme" />
        <Input value={values.faction} onChange={handleChange} name="faction" label="Faction" placeholder="COSMIC" />
        <Button onClick={handleSubmit}>Sign up</Button>
      </div>
    </div>
  )
}
