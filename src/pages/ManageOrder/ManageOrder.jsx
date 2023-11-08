import React, { useEffect } from 'react'
import SingleBanner from '../../components/Banner/SingleBanner'
import img from '../../assets/images/services/5.jpg'
import SingleCart from '../Cart/SingleCart'
import OrderCardButton from './OrderCardButton'
import { useLoaderData } from 'react-router-dom'
export default function ManageOrder() {
  const order = useLoaderData()
  const handleOrder = (text, id) => {
    const updateStatus = { status: text }
      fetch(`http://localhost:5000/serviceorder/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateStatus)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })                 
  }
  return (
    <section>
      <SingleBanner title="Manage All Orders" img={img} />
      <div>
        {
          order.map(order => <SingleCart key={order._id} order={order}
            button={<OrderCardButton handleOrder={handleOrder} id={order._id} status={order.status} />}/>)
        }
      </div>
    </section>
  )
}
