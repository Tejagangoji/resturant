import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderSuccess() {
    return (
        <div className='payment'>
            <div className="paymentwrap">
                <h2 className='paymenthead'>Your Order is Successfull. Go to Orders</h2>
                <button className='faibtn paymentbtns'><Link className='link' to={'/orders'}>Orders</Link></button>
            </div>
        </div>
    )
}
