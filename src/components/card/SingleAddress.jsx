import React from 'react'

export default function SingleAddress({ questionText, Anstext, icon }) {
    return (
        <div className='flex flex-col sm:flex-row justify-start items-center gap-[10px]'>
            {icon}
            <div className='text-center'>
                <p>{questionText}</p>
                <p className='text-xl font-bold'>{Anstext}</p>
            </div>

        </div>
    )
}
