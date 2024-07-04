import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Wholemenu() {
    const [products, setproducts] = useState([]);
    const biryani = products.length > 0 ? products.filter(item => item.category === "biryani") : [];
    const burger = products.length > 0 ? products.filter(item => item.category === "burger") : [];
    const milkshakes = products.length > 0 ? products.filter(item => item.category === "milkshakes") : [];
    const breakfast = products.length > 0 ? products.filter(item => item.category === "breakfast") : [];
    useEffect(() => {
        axios.get("http://localhost:5000/getproducts").then(res => { setproducts(res.data) }).catch(err => toast(err.response.data));
    }, []);
    return (
        <div className='wholemenu'>
            <h1 style={{textAlign: "center"}}>Menu</h1>
            <h2 style={{paddingLeft: "2rem"}}>Biryani</h2>
            <div className="menudiv">
                {biryani.map((item, index) => {
                    return (
                        <div className='menuitemdiv' key={index}>
                            <div className='menuitemp1'>
                                <img className='menuitemp1img' src={item.image} alt="" />
                            </div>
                            <div>
                                <div className='menuitemtitle'>{item.name}</div>
                                <div className='menuitemprice'>RS: {item.price} /-</div>
                                <div><button className='menuitemaddbtn'>Add</button></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 style={{paddingLeft: "2rem"}}>Burger</h2>
            <div className="menudiv">
                {burger.map((item, index) => {
                    return (
                        <div className='menuitemdiv' key={index}>
                            <div className='menuitemp1'>
                                <img className='menuitemp1img' src={item.image} alt="" />
                            </div>
                            <div>
                                <div className='menuitemtitle'>{item.name}</div>
                                <div className='menuitemprice'>RS: {item.price} /-</div>
                                <div><button className='menuitemaddbtn'>Add</button></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 style={{paddingLeft: "2rem"}}>Breakfast</h2>
            <div className="menudiv">
                {breakfast.map((item, index) => {
                    return (
                        <div className='menuitemdiv' key={index}>
                            <div className='menuitemp1'>
                                <img className='menuitemp1img' src={item.image} alt="" />
                            </div>
                            <div>
                                <div className='menuitemtitle'>{item.name}</div>
                                <div className='menuitemprice'>RS: {item.price} /-</div>
                                <div><button className='menuitemaddbtn'>Add</button></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 style={{paddingLeft: "2rem"}}>Milk Shakes</h2>
            <div className="menudiv">
                {milkshakes.map((item, index) => {
                    return (
                        <div className='menuitemdiv' key={index}>
                            <div className='menuitemp1'>
                                <img className='menuitemp1img' src={item.image} alt="" />
                            </div>
                            <div>
                                <div className='menuitemtitle'>{item.name}</div>
                                <div className='menuitemprice'>RS: {item.price} /-</div>
                                <div><button className='menuitemaddbtn'>Add</button></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ToastContainer />
        </div>
    )
}
