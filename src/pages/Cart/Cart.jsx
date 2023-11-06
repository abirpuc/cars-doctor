import React from 'react'
import SingleBanner from '../../components/Banner/SingleBanner'
import img from '../../assets/images/banner/4.jpg'
import SingleCart from './SingleCart'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import CardButton from './CardButton'

export default function Cart() {
    return (
        <section>
            <SingleBanner title="Cart Details" img={img} />
            <div className='px-2'>
                <SingleCart button={<CardButton/>}/>
                <SingleCart button={<CardButton/>}/>
                <SingleCart button={<CardButton/>}/>
                <SingleCart button={<CardButton/>}/>
                <SingleCart button={<CardButton/>}/>
            </div>
            <div className='flex justify-between items-center my-8'>
                <div className='flex justify-between items-center gap-4'>
                    <BsArrow90DegLeft className='text-2xl'/>
                    <p>continue shopping</p>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <MdDelete className='text-2xl'/>
                    <p>Clear Shopping Cart</p>
                </div>
            </div>
        </section>
    )
}
