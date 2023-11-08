import React, { useContext, useState } from 'react'
import checkout from '../assets/images/checkout/checkout.png'
import SingleBanner from '../components/Banner/SingleBanner'
import SingleInput from '../components/form/SingleInput'
import TextArea from '../components/form/TextArea'
import FormButton from '../components/form/FormButton'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CheckOut() {
    const { title, img, price } = useLoaderData()
    const { user } = useContext(AuthContext)
    const date = new Date()
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const handleForm = (event) => {
        event.preventDefault()

        const form = event.target
        const name = `${form.first_name.value} ${form.last_name.value}`
        const phone = form.phone.value
        const email = user?.email || 'UnRegistered'
        const orderDate = formattedDate
        const message = form.message.value
        const image = img
        const productPrice = price
        const status = "pending"
        const serviceName = title

        const order = {
            name, phone, email, orderDate, message, image, productPrice, status, serviceName
        }

        fetch('http://localhost:5000/serviceorder', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    const notify = () => toast("Wow so easy!");
                    form.reset()
                }
            })

    }

    return (
        <section>
            <ToastContainer />
            <SingleBanner
                img={checkout}
                title="Check Out"
                name={`Service Name: ${title}`}
            />
            <form className="my-12 bg-slate-600 py-16 rounded-lg flex flex-col px-2 md:px-16" onSubmit={handleForm}>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-6 my-4'>
                    <SingleInput placeholder="enter your first name" name="first_name" type="text" />
                    <SingleInput placeholder="enter your last name" name="last_name" type="text" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-6'>
                    <SingleInput placeholder="enter phone " name="phone" type="number" />
                    <SingleInput placeholder="enter email" defaultValue={user?.email} name="email" type="email" />
                </div>
                <TextArea name="message" />
                <FormButton name="Place order" />
            </form>
        </section>
    )
}
