import React from 'react'
import SingleAddress from '../../../components/card/SingleAddress'
import { TbCalendarStats } from 'react-icons/tb'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoLocation } from 'react-icons/io5'
export default function Address() {
    return (
        <section className='bg-white rounded-md px-12 py-12 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <SingleAddress
                questionText="We Are Open Sunday to Thursday"
                Anstext="7:00AM - 9:00PM"
                icon={<TbCalendarStats className='text-4xl text-cyan-400' />}
            />
            <SingleAddress
                questionText="Have a Question?"
                Anstext="+880140987****69"
                icon={<BiSolidPhoneCall className='text-4xl text-cyan-400' />}
            />
            <SingleAddress
                questionText="Need a Repair? our address"
                Anstext="Shulakbohar, Chittagong, Bangladesh"
                icon={<IoLocation className='text-4xl text-cyan-400' />}
            />
        </section>
    )
}
