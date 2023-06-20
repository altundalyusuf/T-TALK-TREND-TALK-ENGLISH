import React from 'react'
import t_talk_logo from "../../assets/t_talk_logo.png";

const LoginNavbar = () => {


    return (
        <>
            <div className="navbar bg-black text-white md:h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                            <li><a href='/login' className='btn main-color border-none text-white'>Giriş Yap</a></li>
                            <li><a href='/register' className='btn main-color border-none text-white'>Kayıt Ol</a></li>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl place-content-center">
                        <img src={t_talk_logo} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                        T-TALK
                    </a>
                </div>
                <div className="navbar-end hidden md:flex md:me-4">
                    <div className="flex-none space-x-2">
                        <a href='/login' className="btn main-color border-none text-white ">Giriş Yap</a>
                        <a href='/register' className="btn main-color border-none text-white ">Kayıt Ol</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginNavbar
