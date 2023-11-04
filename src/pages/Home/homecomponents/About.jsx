import React from 'react'
import about_1 from '../../../assets/images/about_us/person.jpg'
import about_2 from '../../../assets/images/about_us/parts.jpg'

export default function About() {
    return (
        <section className='flex flex-col md:flex-row justify-center items-center gap-y-2 my-8'>
            <div className='w-full md:w-1/2 mb-16'>
                <img className='w-[300px] h-[300] md:w-[460px] md:h-[460px] rounded-md shadow-md' src={about_1} alt="" />
                <div className='absolute'>
                    <img className='w-[180px] md:w-[325px] h-[180px] md:h-[330px] rounded-md shadow-md border-8 border-white relative bottom-[130px] left-[160px]  md:bottom-[265px] md:left-[180px] shadow-md' src={about_2} alt="" />
                </div>
            </div>
            <div className='w-full px-8 md:px-0 md:w-1/2'>
                <h4 className='text-xl text-cyan-500'>About Us</h4>
                <h1 className='text-4xl font-bold my-4 w-1/2 leading-10 text-white'>We are qualified & of experience in this field</h1>
                <div className='pb-4 w-3/4'>
                    <p className='py-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>

                <button className='bg-cyan-600 rounded-md p-3 text-white hover:bg-cyan-700'>Get More info</button>
            </div>
        </section>
    )
}
