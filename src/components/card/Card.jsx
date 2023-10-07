/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS  from "aos";
import "aos/dist/aos.css";


const Card = ({ data }) => {
    // console.log(data)
    const {image,price,short_details,service_name,id} = data

    useEffect(()=>{
        AOS.init({
            duration:1000,
            offset: 200,
            easing:'ease-in-out'
        })

    },[])
    return (
        <div>
            <div data-aos="fade-up-right" className="card card-compact  bg-base-100 shadow-xl space-y-6">
                <figure><img className='w-full h-[300px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">${price}</h2>
                    <p className='text-lg'>{short_details}</p>
                    <div className="card-actions justify-center my-3">
                        <button className="btn text-pink-700 border-pink-500">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;