import React, { useState } from 'react';
import '../styles/address.css';
import { useAddress } from '../context/Context';
import { useNavigate } from 'react-router-dom';

export default function Address() {
    const navigate = useNavigate();
    const { setaddress } = useAddress();
    const [addr, setaddr] = useState({ name: "", address1: "", address2: "", village: "", city: "", distric: "", state: "", postalcode: "", mobile: "", })
    const chnageHnadler = (e) => {
        setaddr({ ...addr, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setaddress(addr);
        return navigate('/payment');
    }
    return (
        <div className='address'>
            <div className='addresswrap'>
                <h2>Delivery Address</h2>
                <form onSubmit={submitHandler} className='addressform'>
                    <input onChange={chnageHnadler} name='name' className='addresinputs' type="text" placeholder='name' />
                    <input onChange={chnageHnadler} name='address1' className='addresinputs' type="text" placeholder='Address-1' />
                    <input onChange={chnageHnadler} name='address2' className='addresinputs' type="text" placeholder='Address-2' />
                    <input onChange={chnageHnadler} name='village' className='addresinputs' type="text" placeholder='Village' />
                    <input onChange={chnageHnadler} name='city' className='addresinputs' type="text" placeholder='City' />
                    <input onChange={chnageHnadler} name='distric' className='addresinputs' type="text" placeholder='Distric' />
                    <input onChange={chnageHnadler} name='state' className='addresinputs' type="text" placeholder='State' />
                    <input onChange={chnageHnadler} name='postalcode' className='addresinputs' type="text" placeholder='Postal COde' />
                    <input onChange={chnageHnadler} name='mobile' className='addresinputs' type="text" placeholder='Mobile number' />
                    <input className='addresssubbtn' type="submit" value="Go to Paymment" />
                </form>
            </div>
        </div>
    )
}
