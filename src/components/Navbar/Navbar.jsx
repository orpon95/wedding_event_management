/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* navbar */}
            <div className="navbar flex-col md:flex-row bg-pink-400  rounded-md items-center ">
                <div className=" md:navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1(sm)</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><NavLink to={"/About"}>About Us</NavLink></li>
                            <li><NavLink to={"/Gallery"}> Gallery</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-14' src="https://i.ibb.co/pykQffJ/76938-duck-logo-vector-wedding-hd-image-free-png.png" alt="" />
                        <a className="btn btn-ghost normal-case text-xl">Marry-plan</a>
                    </div>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1(lg)</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to={"/About"}>About Us</NavLink></li>
                        <li><NavLink to={"/Gallery"}> Gallery</NavLink></li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 my-5 items-cente md:gap-5">
                    <Link> <button className='btn '> Register</button></Link>
                    <Link> <button className='btn'> Log in</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;