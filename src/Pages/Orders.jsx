import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/order.css';

export default function Orders() {
    const [order, setorder] = useState([]);
    //const products = order.length > 0 ? order.map(item => item.cart.map(pro => pro.productid)) : [];
    //console.log(order);
    useEffect(() => {
        axios.get(`https://resturantbackend-otgt.onrender.com/getorders/${localStorage.getItem("userid")}`).then(res => { setorder(res.data) }).catch(err => toast(err.response.data));
    }, []);
    return (
        <div className='orders'>
            <div className="orderswrap">
                {order.length > 0 ? order.map(item => {
                    return (
                        <div key={item._id} className="ordersdiv">
                            <div className="orderdivleft">
                                <div><h2>{item.address.name}</h2></div>
                                <div>Value: RS {item.total} /-</div>
                                <div className="orderstatus">Status: {item.status ? "Delivered" : "Yet to Delivered"} </div>
                            </div>
                            <div className="orderitems">
                                {item.cart.map(pro => {
                                    return (
                                        <div key={pro.productid._id} className="orderprodiv">
                                            <div className="prodivimg">
                                                <img className='proorderimg' src={pro.productid.image} alt="jkbv" />
                                            </div>
                                            <div className="proorderdetails">
                                                <div className="productorderdetname">{pro.productid.name}</div>
                                                <div className="productorderdetprice">Rs {pro.productid.price} /-</div>
                                                <div className="productorderdetprice">quantity: {pro.quantity}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }) : <div>
                    <center>NO orders Yet</center>
                </div>}
            </div>
            <ToastContainer />
        </div>
    )
}
