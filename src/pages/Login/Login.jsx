import React, { useContext } from 'react'
import img from '../../assets/images/login/login.svg'
import {FaFacebook} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'
export default function Login() {

    const {singInUser} = useContext(AuthContext)
    const {googleSingIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate  = useNavigate()

    let from = location.state?.from?.pathname || "/"

    const handleLogin = event =>{
        event.preventDefault()
        
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        singInUser(email, password)
        .then(result=>{
            const user = result.user
            console.log(user)
            navigate(from, { replace: true });
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    const handleGoogleSingIn = ()=>{
        googleSingIn()
        .then((result) =>{
            const user = result.user
            navigate(from, { replace: true });

        }).catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} loading='lazy' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-4xl font-bold pt-8 pl-12'>Login</h1>
                    <form className="card-body" onSubmit={handleLogin}>
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
                        <p className='text-white text-md mb-4'>or sing-in with</p>
                        <div className='flex justify-center items-center text-3xl gap-4'>
                            <button onClick={handleGoogleSingIn}><FcGoogle/></button>
                            <button><FaFacebook/></button>
                        </div>
                        <p>Have an Account? <Link className='text-xl text-cyan-500' to="/singup">Sing Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
