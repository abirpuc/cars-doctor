import React from 'react'
import SingleBanner from '../../components/Banner/SingleBanner'
import servicebanner from '../../assets/images/services/4.jpg'
import serv_1 from '../../assets/images/services/3.jpg'
import ServiceSectionCard from '../../components/card/ServiceSectionCard'
import StepsCard from '../../components/card/StepsCard'
import ServiceType from './components/ServiceType'
import File from './components/File'
import Advertise from './components/Advertise'

export default function Service() {
    return (
        <section className='min-h-screen'>
            <SingleBanner title="Service Details" img={servicebanner} />
            <div className='flex flex-col md:flex-row justify-start items-start gap-6 my-16'>
                <div className='w-full px-4 md:px-0 md:w-[70%]'>
                    <img src={serv_1} className='h-[150px] sm:h-[300px] w-full rounded-md' loading='lazy' alt="" />
                    <div className='my-12'>
                        <h1 className='text-2xl mb-8 text-justify md:text-4xl text-white'>Unique Car Engine Service</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <ServiceSectionCard
                            title="Instant Car Services"
                            text="It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
                        />
                        <ServiceSectionCard
                            title="24/7 Quality Service"
                            text="It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
                        />
                        <ServiceSectionCard
                            title="Easy Customer Service"
                            text="It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
                        />
                        <ServiceSectionCard
                            title="Quality Cost Service"
                            text="It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
                        />
                    </div>
                    <p className='my-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    <div className='my-12'>
                        <h1 className='my-8 text-2xl md:text-4xl text-white'>3 Simple Steps to Process</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-6'>
                            <StepsCard
                                step="01"
                                title="Step One"
                                text="It uses a dictionary of over 200 ."
                            />
                            <StepsCard
                                step="02"
                                title="Step Two"
                                text="It uses a dictionary of over 200 ."
                            />
                            <StepsCard
                                step="03"
                                title="Step Three"
                                text="It uses a dictionary of over 200 ."
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 md:px-0 md:w-[30%]'>
                    <ServiceType />
                    <File />
                    <Advertise />
                    <div className='my-12'>
                        <h1 className='text-2xl md:text-4xl text-white my-4'>Price: $250.00</h1>
                        <button className='text-white bg-cyan-500 p-2 w-full mt-4'>Process Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
