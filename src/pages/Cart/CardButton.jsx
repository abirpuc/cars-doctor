import React from 'react'

export default function CardButton({status}) {
  return (
    <button className='bg-cyan-500 text-white rounded-md p-2'>{status}</button>
  )
}
