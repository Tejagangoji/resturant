import React from 'react'
import { Link } from 'react-router-dom'

export default function Orderfail() {
    return (
        <div className='payment'>
            <div className="paymentwrap">
                <h2 className='paymenthead'>Sorry You Payment is failed. Go to home</h2>
                <button className=' faibtn paymentbtns'><Link className='link' to={'/'}>Returm to Home</Link></button>
            </div>
        </div>
    )
}
