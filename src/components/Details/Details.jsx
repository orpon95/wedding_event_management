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
            <h1>{singleData.full_details}</h1>
        </div>
    );
};

export default Details;