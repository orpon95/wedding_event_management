/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut,googlesign } = useContext(authContext)
    const [loggedinUser,setLoggedInUser] = useState("")
    // signout
    const handleSignOut = () => {
         logOut()
            .then( ()=>{
                setLoggedInUser("")
            })
            .error()
    }

    // google sign
    const handleGoogle = ()=>{
        googlesign()
        .then(result => {
            // console.log(result.user.photoURL)
            setLoggedInUser(result.user)
        })
        .catch(err => console.log(err))
    }
    console.log(loggedinUser.photoURL);
    return (
        <div>
            {/* navbar */}
            <div className="navbar flex-col  bg-pink-400  rounded-md items-center ">
                <div className=" flex justify-between">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1(sm)</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}
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
                        {/* <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1(lg)</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                        <li><NavLink to={"/About"}>About Us</NavLink></li>
                        <li><NavLink to={"/Gallery"}> Gallery</NavLink></li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-4 my-5 items-center md:gap-5">
                    <NavLink to={"/Register"} > <button className='btn '> Register</button></NavLink>
                    {
                        user ? <button onClick={handleSignOut} className='btn mt-2'> sign out</button> :

                            <NavLink to={"/Login"}> <button className='btn'> Log in</button></NavLink>


                    }
                    <button className='btn' onClick={handleGoogle}>Sign in with google</button>
                    {
                        user && <div className='flex items-center gap-3'>
                            <h1 className='bg-pink-100 p-2 rounded-lg font-bold'>
                               {user?.displayName}
                            </h1>
                            <p><img className='w-3/6 h-[40px] rounded-full' src={user?.photoURL} alt="" /></p>


                        </div>
                    }
                    {
                        loggedinUser&& <div>
                            <h1 className='bg-pink-100 p-2 rounded-lg font-bold flex items-center '>
                                {/* <span> <img src={loggedinUser.photoURL} alt="" /></span> */}
                                <p><img className='w-3/6 rounded-full' src={loggedinUser.photoURL} alt="" /></p>

                              {loggedinUser.displayName}
                            </h1>
                            {/* <p> pic : <img src={loggedinUser.photoURL} alt="" /> </p> */}
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;