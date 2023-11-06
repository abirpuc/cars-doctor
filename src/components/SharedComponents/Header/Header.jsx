import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";

export default function Header() {
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
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/checkout">Order</Link>
                            </li>
                            <li>
                                <Link>Content</Link>
                            </li>
                            <li>
                                <Link to="/service">Service</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                        </ul>
                    </div>
                    <p className='text-2xl font-bold tracking-wide'>Cars <span className='text-cyan-500'>Doctors</span></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/checkout">Order</Link>
                        </li>
                        <li>
                            <Link>Content</Link>
                        </li>
                        <li>
                            <Link to="/service">Service</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='mx-2 flex justify-center items-center gap-8'>
                        <BsFillBagFill className='text-xl text-cyan-500' />
                        <FaSearch className='text-xl text-cyan-500' />
                        <button className='border border-1 border-cyan-500 p-2 rounded-md text-cyan-600 hover:text-cyan-400'>Appointment</button>
                    </div>
                </div>
            </div>
        </>
    )
}
