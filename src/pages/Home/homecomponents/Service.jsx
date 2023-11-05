import React, { useState } from 'react'
import ServiceCard from '../../../components/card/ServiceCard'
import { service } from '../../../data/service'

export default function Service() {
    const [services, setService] = useState(service)
    const [serviceCount, setServiceCount] = useState(6)
    return (
        <section className='my-[60px]'>
            <div className='text-center w-1/2 mx-auto'>
                <h5 className='text-cyan-500 text-2xl'>Service</h5>
                <h1 className='text-xl md:text-4xl text-white font-bold my-2'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    services.slice(0,serviceCount).map(ser => <ServiceCard key={ser.id} service={ser}/>)
                }
            </div>
            <div className='text-center'>
                {
                    services.length > 6 && services.length >= serviceCount  && <button onClick={()=>setServiceCount(serviceCount + 3)} className='border-2 border-cyan-400 p-3 rounded-md text-cyan-500 hover:bg-cyan-600 hover:text-white transition-all duration-300'>More Service</button>
                }
               
            </div>
        </section>
    )
}
