import React from 'react'
import { useState } from 'react'
const App = () => {

  const [color, setColor] = useState("black")

  return (
    <div className='h-screen w-screen text-white flex justify-center' style={{backgroundColor: color}}>
        <div className=' p-2 bg-zinc-200 rounded-lg flex flex-wrap gap-2 fixed bottom-10 '>
        <button onClick={() => setColor("#EF4444")} className='px-5 py-2 bg-red-500 rounded-full'>Red</button>
        <button onClick={() => setColor("#22C55E")} className='px-5 py-2 bg-green-500 rounded-full'>Green</button>
        <button onClick={() => setColor("#3B82F6")} className='px-5 py-2 bg-blue-500 rounded-full'>Blue</button>
        <button onClick={() => setColor("#F97316")} className='px-5 py-2 bg-orange-500 rounded-full'>Orange</button>
        <button onClick={() => setColor("#6B7280")} className='px-5 py-2 bg-gray-500 rounded-full'>Gray</button>
        <button onClick={() => setColor("#EAB308")} className='px-5 py-2 bg-yellow-500 rounded-full'>Yellow</button>
        <button onClick={() => setColor("#EC4899")} className='px-5 py-2 bg-pink-500 rounded-full'>Pink</button>
        <button onClick={() => setColor("#A855F7")} className='px-5 py-2 bg-purple-500 rounded-full'>Purple</button>
        <button onClick={() => setColor("#D1D5DB")} className='px-5 py-2 bg-gray-300 rounded-full text-black'>Lavender</button>
          <button onClick={() => setColor("white")} className='px-5 py-2 bg-white rounded-full text-black'>White</button>
          <button onClick={() => setColor("black")} className='px-5 py-2 bg-black rounded-full'>Black</button>
      </div>
    </div>
  )
}

export default App
