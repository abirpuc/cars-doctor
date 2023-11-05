import React from 'react'

import ServiceButton from './ServiceButton'
export default function ServiceType() {
  return (
    <div className='p-8 bg-slate-600 rounded-md'>
        <h1 className='text-cyan-500 text-xl font-bold'>Service</h1>
        <ServiceButton
            title="Full Car Repair"
        />
        <ServiceButton
            title="Engine Repair"
        />
        <ServiceButton
            title="Automatic Service"
        />
        <ServiceButton
            title="Engine Oil Change"
        />
        <ServiceButton
            title="Battery Charge"
        />
        
    </div>
  )
}
