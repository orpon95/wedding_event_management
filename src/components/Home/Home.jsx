/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../card/card';
import Banner from '../Banner/Banner';



const Home = () => {
    const datas = useLoaderData()
    // console.log(datas);
    return (
        <div>

            <Banner></Banner>
            <h3 className='p-3 text-4xl text-pink-400 text-center italic my-6 font-bold border-b-8 border-pink-200 '> Our services</h3>
            {/* <hr className='h-[30px]'/> */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
                {

                    datas.map(data => <Card key={data.id} data={data}></Card>)


                }
            </div>
        </div>
    );
};

export default Home;