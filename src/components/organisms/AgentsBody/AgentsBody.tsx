import { AgentPanel } from 'SpaceTraders/components/molecules/AgentPanel/AgentPanel'
import React, { useState } from 'react'
import { AgentsSummary } from '../AgentsSummary/AgentsSummary'
import { Modal } from 'SpaceTraders/components/atoms/Modal/Modal'
import { CreateAgentForm } from 'SpaceTraders/components/molecules/CreateAgentForm/CreateAgentForm'

export const AgentsBody = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="w-full min-h-screen flex ">
      <AgentPanel handleOpen={handleOpen} />
      <AgentsSummary />
      <Modal isOpen={open} handleClose={handleClose} title="Create new agent" content={<CreateAgentForm handleClose={handleClose} />} />
    </div>
  )
}
