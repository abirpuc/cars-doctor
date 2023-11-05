import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
export default function ProductCard({ product }) {
    const { name, price, img, review } = product;
    // console.log(typeof(review))
    return (
        <div className="border-1 border-gray-500 p-4 rounded-md shadow-xl bg-slate-700 text-center">
            <div className='overflew-hidden'>
                <img className='rounded-md bg-white h-[200px] w-full hover:scale-105 transition-all duration-300 overflow-hidden' src={img} alt="" />
            </div>
            <div className='my-4 text-center'>
                <p className='text-xl font-bold text-white'>{name}</p>
                {/* <p className='text-yellow-400 w-1/2 mx-auto mt-2 flex justify-start items-center'>
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                </p> */}
                <p className='text-cyan-500 mt-2'>{price}</p>
            </div>
            <button className='text-cyan-500 border-2 border-cyan-500 p-2'>Add To Card</button>
        </div>
    )
}
