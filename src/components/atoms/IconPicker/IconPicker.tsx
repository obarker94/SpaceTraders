import React from 'react'
import { FiUser, FiAlertTriangle, FiLogIn, FiLogOut, FiSettings, FiBell } from 'react-icons/fi'

export const Icons = {
  user: FiUser,
  alert: FiAlertTriangle,
  logout: FiLogOut,
  login: FiLogIn,
  cog: FiSettings,
  bell: FiBell
}

export type TIcons = keyof typeof Icons

export type TIconPickerProps = {
  icon: TIcons,
  className?: string
}

export const IconPicker = ({ icon, className }: TIconPickerProps) => {
  const Icon = Icons[icon]
  if (!Icon) return <Icons.alert />

  return <Icon className={className} />
}
