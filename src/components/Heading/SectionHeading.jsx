import React from 'react'

export default function SectionHeading({name, title, text}) {
    return (
        <div className='text-center w-full md:w-1/2 mx-auto'>
            <h5 className='text-cyan-500 text-2xl'>{name}</h5>
            <h1 className='text-xl md:text-4xl text-white font-bold my-2'>{title}</h1>
            <p>{text}</p>
        </div>
    )
}
