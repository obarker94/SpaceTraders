import React from 'react'

export const HomeCTA = () => {
  return (
    <div className="row-span-1 w-full h-full grid place-items-center bg-gradient-to-tr from-blue-100 to-red-50 border-b-2">
      <div className="grid gap-8 place-items-center">
        <span className="flex text-6xl">
          <h1 className="font-semibold border-b-2 border-black">Oliver</h1>
          <h1 className="font-extralight">Traders</h1>
        </span>
        <div className="font-extralight">
          When using cURL just ain't cutting it for trading in space.
        </div>
        <button className="px-6 py-4 text-white bg-black rounded-md" onClick={() => signIn("discord")}>
          Get Started
        </button>
      </div>
    </div>
  )
}
