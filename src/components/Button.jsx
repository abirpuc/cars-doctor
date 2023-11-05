import React from 'react'

export default function Button({handleButton,name}) {
  return (
    <button onClick={handleButton} className='border-2 border-cyan-400 p-3 rounded-md text-cyan-500 hover:bg-cyan-600 hover:text-white transition-all duration-300 mx-auto'>{name}</button>
  )
}
