import React from 'react'

export default function Advertise() {
    return (
        <div className='flex flex-col justify-center items-center p-6 rounded-md bg-black'>
            <p className='text-xl font-semibold'>Cars <span className='text-cyan-500'>Doctor</span></p>
            <h1 className='text-xl text-center w-3/4 my-4'>Need Help? We are Here to Help You</h1>
            <div className='bg-white p-4 rounded-md relative mb-8'>
                <h1 className='text-md font-bold'><span className='text-cyan-500'>Cars Doctor</span> Special</h1>
                <p>Save up to <span className='text-cyan-500'>60% off</span></p>
                <button className='absolute bg-cyan-600 p-2 rounded-sm left-8 text-white'>Get A Quote</button>
            </div>
        </div>
    )
}
