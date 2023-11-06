import React from 'react'

export default function OrderCardButton() {
    return (
        // <button className='bg-cyan-500 text-white px-4 py-2 rounded-md'>Pending</button>
        <ul className="menu bg-cyan-400 text-white rounded-md menu-horizontal px-1">
            <li>
                <details>
                    <summary>
                        Approved
                    </summary>
                    <ul className="p-2 bg-cyan-600 text-white">
                        <li><a>Approved</a></li>
                        <li><a>Pending</a></li>
                        <li><a>Cancel</a></li>
                    </ul>
                </details>
            </li>
        </ul>
    )
}
