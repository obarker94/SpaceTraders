import React from 'react'

export type TLineCardProps = {
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string
}

export const LineCard = ({ title, content, className }: TLineCardProps) => {
  return (
    <div className={`ring-2 ring-black rounded-lg p-8 grid gap-2 ${className}`}>
      {title}
      {content}
    </div>
  )
}
