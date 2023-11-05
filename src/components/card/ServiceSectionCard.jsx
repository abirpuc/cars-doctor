import React from 'react'

export default function ServiceSectionCard({title, text}) {
  return (
    <div className='rounded-md border-t-2 border-cyan-600 p-4 shadow-sm bg-slate-500'>
      <h1 className='text-2xl text-white my-2'>{title}</h1>
      <p className='text-white'>{text}</p>
    </div>
  )
}
