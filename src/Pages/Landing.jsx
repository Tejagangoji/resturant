import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/landing.css'
import img1 from '../ascerts/Caregoryimages/1.jpg'
import img2 from '../ascerts/Caregoryimages/2.jpg'
import img3 from '../ascerts/Caregoryimages/3.jpg'
import img4 from '../ascerts/Caregoryimages/4.jpg'
import pro1 from '../ascerts/Landingpromotion/1.jpg'
import pro2 from '../ascerts/Landingpromotion/2.jpg'
import pro3 from '../ascerts/Landingpromotion/3.jpg'
import pro4 from '../ascerts/Landingpromotion/4.jpg'
import pro5 from '../ascerts/Landingpromotion/5.jpg'
import pro6 from '../ascerts/Landingpromotion/6.jpg'
import pro7 from '../ascerts/Landingpromotion/7.jpg'
import pro8 from '../ascerts/Landingpromotion/8.jpg'
import { Link } from 'react-router-dom';


export default function Landing() {
    const [promotion1, setpromotion1] = useState([pro1, pro2, pro3, pro4])
    const [promotion2, setpromotion2] = useState([pro5, pro6, pro7, pro8])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div className='landingpage'>
            <div className="slider">
                <Slider {...settings}>
                    <div className='bg1 sliderbg'>
                    </div>
                    <div className='bg2 sliderbg'>
                    </div>
                    <div className='bg3 sliderbg'>
                    </div>
                    <div className='bg4 sliderbg'>
                    </div>
                </Slider>
            </div>
            <div className="categoryitems">
                <div className="catwrap">
                    <div className="catitems">
                        <Link className='langingmenulink' to={'./menu/burger'}>
                            <img className='cateitemimg' src={img1} alt="hads" />
                            <h3 className="catename">Burger</h3>
                        </Link>
                    </div>
                    <div className="catitems">
                        <Link className='langingmenulink' to={'./menu/biryani'}>
                            <img className='cateitemimg' src={img2} alt="" />
                            <h3 className="catename">Biryani</h3>
                        </Link>
                    </div>
                    <div className="catitems">
                        <Link className='langingmenulink' to={'./menu/milkshakes'}>
                            <img className='cateitemimg' src={img3} alt="" />
                            <h3 className="catename">Milk Shakes</h3>
                        </Link>
                    </div>
                    <div className="catitems">
                        <Link className='langingmenulink' to={'./menu/breakfast'}>
                            <img className='cateitemimg' src={img4} alt="" />
                            <h3 className="catename">Breskfast</h3>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="promotionlanding">
                <div className="promotion1">
                    <h2>Special Items of us</h2>
                    <div className="proimgs">
                        {promotion1.map((pro, index) => {
                            return (
                                <img key={index} className='promotionimg' src={pro} alt="" />
                            )
                        })}
                    </div>
                </div>
                <div className="promotion2">
                    <h2>Top Pics by Customers</h2>
                    <div className="proimgs">
                        {promotion2.map((pro, index) => {
                            return (
                                <img key={index} className='promotionimg' src={pro} alt="" />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}