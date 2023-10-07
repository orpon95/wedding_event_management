/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS  from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


const Card = ({ data }) => {
    // console.log(data)
    const {image,price,short_details,service_name,id} = data

    useEffect(()=>{
        AOS.init({
            duration:800,
            offset: 200,
            easing:'ease-in-out'
        })

    },[])
    return (
        <div>
            <div data-aos="fade-up-right" className="card card-compact  bg-base-100 shadow-xl space-y-6">
                <figure><img className='w-full h-[300px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='text-lg font-bold bg-pink-100 inline-block w-max p-3 rounded-lg'>{service_name}</h2>
                    <h2 className="card-title">${price}</h2>
                    <p className='text-lg'>{short_details}</p>
                    <div className="card-actions justify-center my-3">
                       <Link to={`/Details/${id}`} > <button className="btn text-pink-700 border-pink-500">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;