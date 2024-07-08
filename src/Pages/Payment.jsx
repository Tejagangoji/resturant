import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAddress, useCart } from '../context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Payment() {
    const navigate = useNavigate();
    const { address, setaddress } = useAddress();
    const { carts, setcarts } = useCart();
    const total = carts.reduce((total, item) => {
        return Number(total) + Number(item.productid.price * item.quantity)
    }, 0);
    const placeOrder = () => {
        axios.post("http://localhost:5000/placeanorder", { userid: localStorage.getItem("userid"), cart: carts, total: total, address: address, status: false }).then(res => { toast(res.data); return navigate('/ordersuccess') }).catch(err => toast(err.response.data));
    }
    return (
        <div className='payment'>
            <div className="paymentwrap">
                <h2 className='paymenthead'>Do you want to Success the Payment or Fail?</h2>
                <button onClick={placeOrder} className='sucbtn paymentbtns'>Success</button>
                <button className=' faibtn paymentbtns'><Link className='link' to={'/orderfail'}>Failure</Link></button>
            </div>
            <ToastContainer />
        </div>
    )
}
