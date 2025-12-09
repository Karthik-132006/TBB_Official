import React from 'react'

const Nav = () => {
  return (
    <nav className="w-full h-40">
      <div className="mx-10 mt-3 flex justify-between items-center bg-black/40 border border-white/10 rounded-xl backdrop-blur-2xl shadow-[0_0_30px_rgba(168,85,247,0.5)] px-10 py-5">
        <div className="flex-col justify-center">
          <h1 className="text-2xl text-white font-bold">The Builder</h1>
          <h1 className="text-2xl text-white font-bold">Brothers</h1>
        </div>
        <div className="flex justify-between items-center w-3xl px-20">
        </div>
      </div>
    </nav>
  )
}
export default Nav
