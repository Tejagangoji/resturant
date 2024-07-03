import React from 'react';
import '../styles/menu.css';
import { useParams } from 'react-router-dom'
import biryani from '../ascerts/Menubanner/biryani.jfif';
import burger from '../ascerts/Menubanner/burger.jpg';
import dosa from '../ascerts/Menubanner/dosa.jfif';
import miklshake from '../ascerts/Menubanner/milkshake.jfif';

export default function Menu() {
    const { category } = useParams();
    return (
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
        </div>
    )
}
