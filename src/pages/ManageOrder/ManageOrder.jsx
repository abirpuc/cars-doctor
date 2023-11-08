import React from 'react'
import SingleBanner from '../../components/Banner/SingleBanner'
import img from '../../assets/images/services/5.jpg'
import SingleCart from '../Cart/SingleCart'
import OrderCardButton from './OrderCardButton'
import { useLoaderData } from 'react-router-dom'
export default function ManageOrder() {
  const order = useLoaderData()
  console.log(order)
  return (
    <section>
        <SingleBanner title="Manage All Orders" img={img}/>
        <div>
           {
            order.map(order =>  <SingleCart key={order._id} order={order} button={<OrderCardButton status={order.status}/>}/>)
           }
        </div>
    </section>
  )
}
