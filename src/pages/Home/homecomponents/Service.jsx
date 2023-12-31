import React, { useEffect, useState } from 'react'
import ServiceCard from '../../../components/card/ServiceCard'
// import { service } from '../../../data/service'
import SectionHeading from '../../../components/Heading/SectionHeading'
import Button from '../../../components/Button'

export default function Service() {

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const [services, setService] = useState([])
    const [serviceCount, setServiceCount] = useState(6)
    const handleButton = () => {
        setServiceCount(serviceCount + 3)
    }

    return (
        <section className='my-[60px]'>
            <SectionHeading
                name="Service"
                title="Our Service Area"
                text="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <div className='my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    services.slice(0, serviceCount).map(ser => <ServiceCard key={ser.service_id} service={ser} />)
                }
            </div>
            <div className='text-center'>
                {
                    services.length > serviceCount && services.length >= serviceCount &&
                    <Button handleButton={handleButton} name="More Service"></Button>
                }

            </div>
        </section>
    )
}
