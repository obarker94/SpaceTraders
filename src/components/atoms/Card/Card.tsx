import React from 'react'

export const Card = () => {
  return (
    <div className="bg-gray-100/75 p-8 rounded-lg shadow-md grid gap-8">
      <div className="text-3xl">Header</div>
      <div className=" font-light">
        Integer ac urna id justo varius feugiat.
      </div>
      <div className="font-light">
        Duis quis ex posuere ex elementum sagittis.
      </div>
      <button className="px-6 py-4 text-white bg-black rounded-md">
        Get Started
      </button>
    </div>
  )
}
