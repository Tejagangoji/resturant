import React from 'react';
import '../styles/contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <div className='contact'>
            <div className="contacttext">
                <h2 className='contacth2'>Prefectly Balanced</h2>
                <h1 className='contacth1'>QUALITY & TASTY</h1>
                <div className='contacticons'>
                    <div>
                        <div><FaPhoneAlt className='contacticon'/></div>
                        <div>Call us</div>
                        <div>+91 9867456787</div>
                    </div>
                    <div>
                        <div><FaLocationDot className='contacticon'/></div>
                        <div>Location</div>
                        <div>main center, vijayawada</div>
                    </div>
                    <div>
                        <div><MdEmail className='contacticon'/></div>
                        <div>Email</div>
                        <div>Tastypoint@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
