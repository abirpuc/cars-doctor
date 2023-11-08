import React from 'react'

export default function SingleInput({placeholder, name, type,defaultValue}) {
  return (
    <>
        <input className='p-3 w-full bg-gray-200 outline-none focus:outline-2 focus:outline-cyan-500 rounded-md text-black' type={type} name={name} defaultValue={defaultValue} placeholder={placeholder} />
    </>
  )
}
