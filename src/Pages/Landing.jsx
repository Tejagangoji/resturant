import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/landing.css'
import img1 from '../ascerts/Caregoryimages/1.jpg'
import img2 from '../ascerts/Caregoryimages/2.jpg'
import img3 from '../ascerts/Caregoryimages/3.jpg'
import img4 from '../ascerts/Caregoryimages/4.jpg'


export default function Landing() {
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
                        <img className='cateitemimg' src={img1} alt="hads" />
                    </div>
                    <div className="catitems">
                        <img className='cateitemimg' src={img2} alt="" />
                    </div>
                    <div className="catitems">
                        <img className='cateitemimg' src={img3} alt="" />
                    </div>
                    <div className="catitems">
                        <img className='cateitemimg' src={img4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}