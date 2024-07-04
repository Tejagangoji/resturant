import React, { useEffect, useState } from 'react';
import '../styles/menu.css';
import { Navigate, useParams } from 'react-router-dom'
import biryani from '../ascerts/Menubanner/biryani.jfif';
import burger from '../ascerts/Menubanner/burger.jpg';
import dosa from '../ascerts/Menubanner/dosa.jfif';
import miklshake from '../ascerts/Menubanner/milkshake.jfif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Menu() {
    const { category } = useParams();
    const [products, setproducts] = useState([]);
    const filterproducts = products.length > 0 ? products.filter(item => item.category === category) : [];

    useEffect(() => {
        axios.get("http://localhost:5000/getproducts").then(res => { setproducts(res.data) }).catch(err => toast(err.response.data));
    }, []);
    return (
        localStorage.getItem("userlogin") ?
            <div className='menu'>
                <div className="menubanner">
                    <div className='menubennerimg'>
                        {category === "biryani" && <img className='menubanimg' src={biryani} alt="" />}
                        {category === "burger" && <img className='menubanimg' src={burger} alt="" />}
                        {category === "breakfast" && <img className='menubanimg' src={dosa} alt="" />}
                        {category === "milkshakes" && <img className='menubanimg' src={miklshake} alt="" />}
                    </div>
                    <div className='menubannerhead'>
                        <h2 className='menubannerheading'>{category} Menu</h2>
                    </div>
                </div>
                <div className="menudiv">
                    {filterproducts.map((item, index) => {
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
            </div> : <Navigate to={'/login'} />
    )
}
