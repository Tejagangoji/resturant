import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useCart, useProducts } from '../context/Context';
import { Link } from 'react-router-dom';

export default function Wholemenu() {
    const { products } = useProducts();
    const { cart, setcart } = useCart();
    const cartproducts = cart.length > 0 ? cart.map(item => item.productid._id) : [];
    console.log(cartproducts);
    //const [products, setproducts] = useState([]);
    const biryani = products.length > 0 ? products.filter(item => item.category === "biryani") : [];
    const burger = products.length > 0 ? products.filter(item => item.category === "burger") : [];
    const milkshakes = products.length > 0 ? products.filter(item => item.category === "milkshakes") : [];
    const breakfast = products.length > 0 ? products.filter(item => item.category === "breakfast") : [];
    const addtocart = (id) => {
        axios.post("http://localhost:5000/addtocart", { userid: localStorage.getItem("userid"), productid: id, quantity: 1 }).then(res => { setcart(res.data); toast("added to cart") }).catch(err => toast(err.response.data));
    }
    /* useEffect(() => {
        axios.get("http://localhost:5000/getproducts").then(res => { setproducts(res.data) }).catch(err => toast(err.response.data));
    }, []); */
    return (
        <div className='wholemenu'>
            <h1 style={{ textAlign: "center" }}>Menu</h1>
            <h2 style={{ paddingLeft: "2rem" }}>Biryani</h2>
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
                                <div>{cartproducts.includes(item._id) ? <button className='menuitemaddbtn'><Link className='link' to={'/cart'}>Go to Cart</Link></button> : <button onClick={() => addtocart(item._id)} className='menuitemaddbtn'>Add</button>}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 style={{ paddingLeft: "2rem" }}>Burger</h2>
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
                                <div>{cartproducts.includes(item._id) ? <button className='menuitemaddbtn'><Link className='link' to={'/cart'}>Go to Cart</Link></button> : <button onClick={() => addtocart(item._id)} className='menuitemaddbtn'>Add</button>}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 style={{ paddingLeft: "2rem" }}>Breakfast</h2>
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
                                <div>{cartproducts.includes(item._id) ? <button className='menuitemaddbtn'><Link className='link' to={'/cart'}>Go to Cart</Link></button> : <button onClick={() => addtocart(item._id)} className='menuitemaddbtn'>Add</button>}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 style={{ paddingLeft: "2rem" }}>Milk Shakes</h2>
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
                                <div>{cartproducts.includes(item._id) ? <button className='menuitemaddbtn'><Link className='link' to={'/cart'}>Go to Cart</Link></button> : <button onClick={() => addtocart(item._id)} className='menuitemaddbtn'>Add</button>}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ToastContainer />
        </div>
    )
}
