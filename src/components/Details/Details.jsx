/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const intId = parseInt(id)
    // console.log(id);
    
    const singleData = data.find(aData => aData.id === intId
        
    )
    console.log(singleData , intId)
    return (
        <div>
            <h1 className='text-3xl font-bold text-center border-b-2 border-pink-400   my-4'>{singleData.service_name}</h1>
            <h1 className='text-xl md:text-2xl font-medium my-6 text-center italic'>{singleData.full_details}</h1>
        </div>
    );
};

export default Details;