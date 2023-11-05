import React from 'react'

export default function SingleBanner({title, img}) {
  return (
    <div className='my-12 relative'>
        <h1 className='text-3xl font-bold text-cyan-500 absolute top-[100px] left-10'>{title}</h1>
        <img src={img} className='h-[300px] w-full rounded-lg' loading='lazy' alt="" />
    </div>
  )
}
