import React, { useEffect, useState } from 'react'
import SingleBanner from '../../components/Banner/SingleBanner'
import img from '../../assets/images/services/5.jpg'
import SingleCart from '../Cart/SingleCart'
import OrderCardButton from './OrderCardButton'
import { useLoaderData } from 'react-router-dom'
export default function ManageOrder() {
  const order = useLoaderData()
  const [orders, setOrders] = useState(order)
  const handleOrder = (text, id) => {
    // const updateStatus = { status: text }
      fetch(`http://localhost:5000/serviceorder/${id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({status:text})
      })
        .then(res => res.json())
        .then(data => {
          
          if(data.modifiedCount > 0){
            const remaining = orders.filter(ord => ord._id != id)
            const approving = orders.find(ord => ord._id === id)
            approving.status = text
            const approvingOrder = [approving, ...remaining]
            setOrders(approvingOrder)
          }
        })                 
  }
  return (
    <section>
      <SingleBanner title="Manage All Orders" img={img} />
      <div>
        {
          orders.map(order => <SingleCart key={order._id} order={order}
            button={<OrderCardButton handleOrder={handleOrder} id={order._id} status={order.status} />}/>)
        }
      </div>
    </section>
  )
}
