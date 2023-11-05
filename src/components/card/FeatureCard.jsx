import React from 'react'

export default function FeatureCard({feature}) {
    const {title, img} = feature;
  return (
    <div className='border border-bottom-2 border-cyan-500 border-bottom-cyan-300 shadow-lg p-4 rounded-md flex flex-col items-center justify-center w-[150px] bg-cyan-500 text-white my-2'>
        <img src={img} className='mb-4 hover:scale-105' loading='lazy' alt="" />
        <p>{title}</p>
    </div>
  )
}
