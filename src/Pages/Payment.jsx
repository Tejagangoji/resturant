import React from 'react'
import { Link } from 'react-router-dom'

export default function Payment() {
    return (
        <div className='payment'>
            <div className="paymentwrap">
                <h2 className='paymenthead'>Do you want to Success the Payment or Fail?</h2>
                <button className='sucbtn paymentbtns'>Success</button>
                <button className=' faibtn paymentbtns'><Link className='link' to={'/orderfail'}>Failure</Link></button>
            </div>
        </div>
    )
}
