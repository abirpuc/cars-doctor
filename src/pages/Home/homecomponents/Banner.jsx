import React from 'react'
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'

export default function Banner() {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[300px] md:h-[600px]">
                <img src={banner1} className="w-full h-full rounded-md" />
                <div className="absolute gap-4 w-full h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='w-3/4 md:w-1/2 ml-[10px] md:ml-20 pt-[px] md:pt-40'>
                        <h1 className='text-4xl md:text-6xl font-semibold text-white my-6'>Affordable Price For Car Servicing</h1>
                        <p className='text-white my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 justify-start items-center'>
                            <button className='bg-cyan-500 text-white p-2 rounded-sm'>Discover More</button>
                            <button className='border-2 border-cyan-500 p-2 text-white'>Latest News</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-[-20px] md:bottom-0 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}
