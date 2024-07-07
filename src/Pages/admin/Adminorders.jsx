import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Adminorders() {
  const [order, setorder] = useState([]);
  const chnagestatus = ({ id, status }) => {
    axios.put(`http://localhost:5000/updateorders/${id}`, { status: status }).then(res => { toast(res.data) }).catch(err => toast(err.response.data));
  }
  useEffect(() => {
    axios.get(`http://localhost:5000/getorders`).then(res => { setorder(res.data) }).catch(err => toast(err.response.data));
  }, []);
  return (
    <div className='adminorder'>
      <div className="adminorderwrap">
        {order.length > 0 && order.map(item => {
          return (
            <div key={item._id} className="ordersdiv">
              <div className="orderdivleft">
                <div><h2>{item.userid.userid}</h2></div>
                <div>Value: RS {item.total} /-</div>
                <div className="orderstatus">Status: {item.status ? "Delivered" : "Yet to Delivered"} </div>
                <div className="classchnagestaorde"><button onClick={() => chnagestatus({ id: item._id, status: !item.status })} className='classchnagestaorde'>Change Status</button></div>
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
        })}
      </div>
      <ToastContainer />
    </div>
  )
}
