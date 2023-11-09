import React, { useState } from 'react'

export default function OrderCardButton({ status, id, handleOrder }) {

    return (
        <ul className={`menu bg-cyan-400 text-white rounded-md menu-horizontal px-1 ${status === 'Approved'?'bg-green-500': ''}`}>
            <li>
                <details>
                    <summary>
                        {status}
                    </summary>
                    <ul className="p-2 bg-cyan-600 text-white">
                        <li onClick={() => handleOrder('Approved', id)}><a>Approved</a></li>
                        <li onClick={() => handleOrder('Pending', id)}><a>Pending</a></li>
                    </ul>
                </details>
            </li>
        </ul>
        // <button className='bg-cyan-500 p-2 rounded-md' onClick={()=>handleOrder(id)}>{status}</button>
    )
}
