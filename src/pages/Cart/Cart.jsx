import React, { useContext, useEffect, useState } from 'react'
import SingleBanner from '../../components/Banner/SingleBanner'
import img from '../../assets/images/banner/4.jpg'
import SingleCart from './SingleCart'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import CardButton from './CardButton'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

export default function Cart() {
    const myOrder = useLoaderData()
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setOrders(data)
        })
    },[user?.email])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/serviceorder/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const items = orders.filter(order => order._id != id)
                    setOrders(items)
                }
            })
    }

    const handleClearCart = () => {
        fetch('http://localhost:5000/serviceorder', {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('you want to delete your card')
                }
            })
    }

    return (
        <section>
            <SingleBanner title="Cart Details" img={img} />
            <div className='px-2'>
                {
                  orders.length == 0 &&  <h1 className='text-2xl text-cyan-500'>Please check out a service</h1>
                }
                {
                    orders.reverse()?.map(order => <SingleCart key={order._id} order={order} handleDelete={handleDelete} button={<CardButton status={order.status}/>} />)
                }
            </div>
            <div className='flex justify-between items-center my-8'>
                <Link to="/" className='flex justify-between items-center gap-4'>
                    <BsArrow90DegLeft className='text-2xl' />
                    <p>continue shopping</p>
                </Link>
                <div onClick={handleClearCart} className='flex justify-between items-center gap-2 cursor-pointer'>
                    <MdDelete className='text-2xl' />
                    <p>Clear Shopping Cart</p>
                </div>
            </div>
        </section>
    )
}
