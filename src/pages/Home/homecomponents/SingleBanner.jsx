import React from 'react'

export default function SingleBanner({banner}) {
    const {id, prev, next,title, text, img} = banner
  return (
    <div id={id} className="carousel-item relative w-full h-[400px] md:h-[600px]">
                <img src={img} loading='lazy' className="w-full h-full rounded-md" />
                <div className="absolute gap-4 w-full h-full rounded-md bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='w-3/4 md:w-1/2 ml-[10px] md:ml-20 pt-[px] md:pt-40'>
                        <h1 className='text-4xl md:text-6xl font-semibold text-white my-6'>{title}</h1>
                        <p className='text-white my-4'>{text}</p>
                        <div className='flex gap-4 justify-start items-center'>
                            <button className='bg-cyan-500 text-white p-2 rounded-sm'>Discover More</button>
                            <button className='border-2 border-cyan-500 p-2 text-white'>Latest News</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-[-20px] md:bottom-0 ">
                    <a href={`#${prev}`} className="btn btn-circle">❮</a>
                    <a href={`#${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
  )
}
