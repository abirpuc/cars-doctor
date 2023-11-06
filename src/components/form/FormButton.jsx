import React from 'react'

export default function FormButton({name, handleForm}) {
  return (
    <button className='p-3 bg-cyan-400 text-white rounded-md my-6' onClick={handleForm}>{name}</button>
  )
}
