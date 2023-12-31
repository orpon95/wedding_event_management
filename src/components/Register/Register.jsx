/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import  { Component } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const [errors, setError] = useState("")
    const { createUser } = useContext(authContext)
    const [UserInfo,setUserInfo]= useState("")
    console.log(UserInfo);

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const PicURL = form.get("picURL")
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password, name)
        // password validation
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            setError("password required Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character:")
            Swal.fire({
                title: `${errors}`,
                text: '',
                icon: 'error',
                confirmButtonText: 'OK'
              })
 
        }
        else {

            setError("")

            createUser(email, password)
                .then(result => {console.log(result.user)
                    // setUserInfo(result.user)
                    updateProfile(result.user, {
                        displayName:name,
                        photoURL:PicURL
                    })
                    setUserInfo(result.user)
                    .then()
                    .catch()
                
                })
                .catch(error => console.error(error))
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'sucessfully registered',
                    showConfirmButton: false,
                    timer: 1500
                  })
        }




    }


    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Register Here!!!</h1>
           
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            {/* name field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            {/* pic field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo url</span>
                                </label>
                                <input name='picURL' type="text" placeholder="enter your photo url" className="input input-bordered" required />
                            </div>
                            {/* email field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* password field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* button */}
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className='my-5'>
                            <h1 className='text-center'>Alreay registered !!!  
                                <Link to={"/Login"}><span className='text-base text-blue-600 underline'> log in here</span></Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;