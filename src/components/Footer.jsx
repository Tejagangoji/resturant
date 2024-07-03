import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import '../styles/footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footerhead"><h1 className='footerlogo'>Tasty Point</h1></div>
            <div className="footercontact">
                <h3>Contact</h3>
                <div>+91 9876567898</div>
                <div>Tastypoint@gmail.com</div>
            </div>
            <div className="footericons">
                <FaInstagram />
                <FaXTwitter />
                <CiFacebook />
            </div>
        </div>
    )
}
