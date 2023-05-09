import React from 'react'
import { FiAlertTriangle, FiDollarSign, FiInfo, FiBell, FiLogIn, FiLogOut } from 'react-icons/fi'

export const Icons = {
  alert: FiAlertTriangle,
  dollar: FiDollarSign,
  info: FiInfo,
  bell: FiBell,
  login: FiLogIn,
  logout: FiLogOut,
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
