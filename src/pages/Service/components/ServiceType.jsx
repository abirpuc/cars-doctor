import React, { useContext } from 'react'

import ServiceButton from './ServiceButton'
import { useLoaderData } from 'react-router-dom'
export default function ServiceType({serviceData}) {
  return (
    <div className='p-8 bg-slate-600 rounded-md'>
        <h1 className='text-cyan-500 text-xl font-bold'>Service</h1>
        {
            serviceData?.map(service => <ServiceButton key={service.service_id} service={service}/>)
        }
    </div>
  )
}
