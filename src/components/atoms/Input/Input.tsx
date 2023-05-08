import React from 'react'
import { z } from 'zod'

export const InputSchema = z.object({
  label: z.string(),
  placeholder: z.string(),
  value: z.string(),
})

export type InputProps = z.infer<typeof InputSchema> & React.InputHTMLAttributes<HTMLInputElement>


export const Input = (props: InputProps) => {
  const { label, placeholder, value, ...rest } = props

  return (
    <label className="grid gap-2">
      <span className="text-rose-500 font-bold">{label}</span>
      <input
        className="form-input mt-1 block w-full ring-2 rounded-md ring-rose-500 p-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
        placeholder={placeholder}
        value={value}
        {...rest}
      />
    </label>

  )
}
