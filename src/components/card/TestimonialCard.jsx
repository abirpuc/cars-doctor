import React from 'react'
import quote from '../../assets/icons/quote.svg'
import man from '../../assets/man.png'
export default function TestimonialCard() {
  return (
    <div className='w-1/2 p-4 rounded-md'>
        <div className='flex justify-between items-center py-4'>
            <div className='flex items-center gap-2'>
                <img src={man} className='w-[50px] h-[50px] rounded-full' loading='lazy' alt="" />
                <div>
                    <p>Name</p>
                    <p>profession</p>
                </div>
            </div>
            <img src={quote} className='w-[56px] h-[56px] contrast-50' loading='lazy' alt="" />
        </div>
        <p className='py-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
    </div>
  )
}
