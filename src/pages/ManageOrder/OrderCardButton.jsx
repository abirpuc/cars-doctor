import React, { useState } from 'react'

export default function OrderCardButton({status}) {

    const handleOrder = (e) =>{

    }
    
    return (
        // <button className='bg-cyan-500 text-white px-4 py-2 rounded-md'>Pending</button>
        <ul className={`menu bg-cyan-400 text-white rounded-md menu-horizontal px-1 ${status === 'Approved'?'hidden':'visible'}`}>
            <li>
                <details>
                    <summary>
                        {status}
                    </summary>
                    <ul className="p-2 bg-cyan-600 text-white">
                        <li onClick={()=>setButtonText('Approved')}><a>Approved</a></li>
                        <li onClick={()=>setButtonText('Pending')}><a>Pending</a></li>
                        <li onClick={()=>setButtonText('Cancel')}><a>Cancel</a></li>
                    </ul>
                </details>
            </li>
        </ul>
    )
}
