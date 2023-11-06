import React from 'react'
import SingleBanner from '../../components/Banner/SingleBanner'
import service from '../../assets/images/services/5.jpg'
import SingleInput from '../../components/form/SingleInput'
import TextArea from '../../components/form/TextArea'
import FormButton from '../../components/form/FormButton'

export default function AddService() {
    const handleForm = (event) => {
        event.preventDefault()
        console.log("form btn clicked")
    }
    return (
        <section>
            <SingleBanner title="Add New Service" img={service} />
            <form className="my-12 bg-slate-600 py-16 rounded-lg flex flex-col px-2 md:px-16" onSubmit={handleForm}>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-6 my-4'>
                    <SingleInput placeholder="enter your first name" name="first-name" type="text" />
                    <SingleInput placeholder="enter your last name" name="last-name" type="text" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-6'>
                    <SingleInput placeholder="enter phone " name="phone" type="number" />
                    <SingleInput placeholder="enter email" name="email" type="email" />
                </div>
                <TextArea />
                <FormButton name="Add New Form" />
            </form>
        </section>
    )
}
