import React from 'react'
import SingleBanner from '../../components/Banner/SingleBanner'
import img from '../../assets/images/services/5.jpg'
import SingleCart from '../Cart/SingleCart'
import OrderCardButton from './OrderCardButton'
export default function ManageOrder() {
  return (
    <section>
        <SingleBanner title="Manage All Orders" img={img}/>
        <div>
            <SingleCart button={<OrderCardButton/>}/>
        </div>
    </section>
  )
}
