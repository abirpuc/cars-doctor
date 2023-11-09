import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaUserAlt, FaUserCheck } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from '../../../provider/AuthProvider';

export default function Header() {
    const [order, setOrder] = useState(0)
    const { user, logout } = useContext(AuthContext)
    useEffect(() => {
        fetch('http://localhost:5000/serviceorder')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setOrder(data)
        })
    },[user?.email])

    const handleSingOut = () =>{
        logout()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                            </li>
                            {
                                user?.email && <li>
                                    <NavLink activeClassName="active" to="/order">Order</NavLink>
                                </li>
                            }
                            {/* <li>
                                <NavLink>Content</NavLink>
                            </li> */}
                            <li>
                                <NavLink activeClassName="active" to="/service">Service</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/products">Products</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className='text-2xl font-bold tracking-wide'>Cars <span className='text-cyan-500'>Doctors</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink exact activeClassName="active" to="/">Home</NavLink>
                        </li>
                        {
                            user?.email && <li>
                                <NavLink activeClassName="active" to="/order">Order</NavLink>
                            </li>
                        }
                        {/* <li>
                            <NavLink to="/content" activeClassName="active">Content</NavLink>
                        </li> */}
                        <li>
                            <NavLink activeClassName="active" to="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/products">Products</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='mx-2 flex justify-center items-center gap-8'>
                        {
                            user?.email && <NavLink to="/cart" activeClassName="active" className='relative'>
                                <BsFillBagFill className='text-xl text-cyan-500' />
                                <p className='w-[20px] h-[20px] rounded-full bg-cyan-800 flex justify-center items-center absolute bottom-2 left-4'>{order.length}</p>
                            </NavLink>
                        }
                        {
                            user?.email ?
                                <>
                                    <NavLink to="/login">
                                        <FaUserCheck className='text-xl text-cyan-500' />
                                    </NavLink>
                                    <NavLink >
                                        <FiLogOut onClick={handleSingOut} className='text-xl text-cyan-500' />
                                    </NavLink>
                                </>
                                :
                                <NavLink to="/login">
                                    <FaUserAlt className='text-xl text-cyan-500' />
                                </NavLink>
                        }
                        <button className='border border-1 border-cyan-500 p-2 rounded-md text-cyan-600 hover:text-cyan-400'>Appointment</button>
                    </div>
                </div>
            </div>
        </>
    )
}
