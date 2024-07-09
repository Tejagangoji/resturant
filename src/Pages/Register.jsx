import React, { useState } from 'react';
import '../styles/login.css';
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const navigate = useNavigate();
    const [register, setregister] = useState({ username: "", email: "", password: "" });
    const changeHandler = (e) => {
        setregister({ ...register, [e.target.name]: e.target.value });
    }
    const submitHnalder = (e) => {
        e.preventDefault();
        axios.post("https://resturantbackend-otgt.onrender.com/register", register).then(res => {toast(res.data); return navigate('/login')}).catch(err => toast(err.response.data));
    }
    return (
        <div onSubmit={submitHnalder} className='login'>
            <div className="loginwrap">
                <div className="loginchilddivs registerimg"></div>
                <div className="loginchilddivs loginformdiv">
                    <form className='loginform'>
                        <h2 className='loginhead'>Create Account</h2>
                        <div className="inputdivs">
                            <FaUserCircle className='loginicons' />
                            <input onChange={changeHandler} name='username' className='logininputs' type="text" placeholder='Username' />
                        </div>
                        <div className="inputdivs">
                            <MdEmail className='loginicons' />
                            <input onChange={changeHandler} name='email' className='logininputs' type="text" placeholder='Email' />
                        </div>
                        <div className="inputdivs">
                            <RiLockPasswordFill className='loginicons' />
                            <input onChange={changeHandler} name='password' className='logininputs' type="password" placeholder='password' />
                        </div>
                        <input type="submit" value="Sign up" className='loginsubmit' />
                        <div className='registerredirect'>Already a member? <Link to={'/login'} className='logintoregister'>Sign in</Link></div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
