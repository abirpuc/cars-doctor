import React from 'react'

export default function SingleBanner({ title, img, name }) {
  return (
    <div className='my-12 relative'>
      <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full h-full rounded-md'>
        <h1 className='text-3xl font-bold pt-[80px] pl-[60px] text-cyan-500 '>{title}</h1>
        <h1 className='text-3xl font-bold pt-[80px] pl-[60px] text-cyan-500 '>{name}</h1>
        
      </div>
      <img src={img} className='h-[300px] w-full rounded-lg' loading='lazy' alt="" />
    </div>
  )
}
