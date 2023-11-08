import React from 'react'

export default function TextArea({name}) {
  return (
    <textarea className='my-4 bg-gray-300 text-black rounded-lg h-[150px] md:h-[200px] p-4 outline-none focus:outline focus:outline-cyan-500 resize-none' name={name}></textarea>
  )
}
