import React from 'react'
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
export default function SingUp() {
    const handleSingUp = event => {
        event.preventDefault()
        console.log("clicked")
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} loading='lazy' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-4xl font-bold pt-8 pl-12'>Login</h1>
                    <form className="card-body" onSubmit={handleSingUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="email" placeholder="email" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='flex flex-col justify-center items-center mb-12'>
                        <p className='text-white text-md mb-4'>or sing-up with</p>
                        <div className='flex justify-center items-center text-3xl gap-4'>
                            <button><FcGoogle /></button>
                            <button><FaFacebook /></button>
                        </div>
                        <p>I Have an Account <Link className='text-xl text-cyan-500' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
