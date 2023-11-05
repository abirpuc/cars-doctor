import React from 'react'

export default function StepsCard({step, title, text}) {
  return (
    <div className='flex flex-col justify-center items-center px-4 border border-cyan-500 rounded-md py-4'>
        <p className='w-[60px] h-[60px] rounded-full flex justify-center items-center bg-cyan-300/80'>
            <p className='w-[45px] h-[45px] rounded-full flex justify-center items-center bg-cyan-600 text-white'>
                {step}
            </p>
        </p>
        <h1 className='text-xl my-4'>{title}</h1>
        <p className='w-3/4 mx-auto text-center'>{text}</p>
    </div>
  )
}
