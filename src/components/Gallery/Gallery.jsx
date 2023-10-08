/* eslint-disable no-unused-vars */
import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h1 className='text-4xl font-extrabold text-pink-400  text-center my-7 border-b-4'>Our valuable Client</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-7'>
            <div>
                <img className='w-[90%] h-[45vh] rounded-xl' src="https://i.ibb.co/2SvJzP9/0d84f76839ff1bbc33aa359a00432dc9.jpg" alt="" />
                <div className='text-center my-4 space-y-1'>

                    <h2 className='text-lg bg-pink-200 font-bold text-pink-700 inline-block w-max p-2 rounded-lg'> 12/25/2005</h2>
                    <h1 className='text-base font-semibold'>Anas and fatiha</h1>
                    <h2>dhaka,bangladesh</h2>
                </div>


            </div>
            <div><img className='w-[90%] h-[45vh]' src="https://i.ibb.co/RTHH8Qg/Farjad-Farheen-609.jpg" alt="" />
                <div className='text-center my-4 space-y-1'>

                    <h2 className='text-lg bg-pink-200 font-bold text-pink-700 inline-block w-max p-2 rounded-lg'>11/5/2002</h2>
                    <h1 className='text-base font-semibold'>Ohab and tonni</h1>
                    <h2>faridpur,bangladesh</h2>

                </div>
            </div>
            <div><img className='w-[90%] h-[45vh]' src="https://i.ibb.co/6WnCYgX/images-1.jpg" alt="" />
                <div className='text-center my-4 space-y-1'>

                    <h2 className='text-lg bg-pink-200 font-bold text-pink-700 inline-block w-max p-2 rounded-lg'>2/5/2006</h2>
                    <h1 className='text-base font-semibold'>Dihan AND Moriom</h1>
                    <h2>dhaka,bangladesh</h2>
                </div>

            </div>
            <div><img className='w-[90%] h-[45vh]' src="https://i.ibb.co/Lnk33Fw/images-2.jpg" alt="" />
                <div className='text-center my-4 space-y-1'>
                    <h2 className='text-lg bg-pink-200 font-bold text-pink-700 inline-block w-max p-2 rounded-lg'>6/9/2006</h2>
                    <h1 className='text-base font-semibold'>Ashfak and Naeema</h1>
                    <h2>Tangail,bangladesh</h2>
                </div>
            </div>
            <div><img className='w-[90%] h-[45vh]' src="https://i.ibb.co/TYbQnb4/images-3.jpg" alt="" />
                <div className='text-center my-4 space-y-1'>
                    <h2 className='text-lg bg-pink-200 font-bold text-pink-700 inline-block w-max p-2 rounded-lg'>7/3/2009</h2>
                    <h1 className='text-base font-semibold'>Yeasin and HUR</h1>
                    <h2>Noakhali,bangladesh</h2>
                </div>
            </div>
            <div><img className='w-[90%] h-[45vh]' src="https://i.ibb.co/dGdP7ZX/images-4.jpg" alt="" />
                <div className='text-center my-4 space-y-1'>
                    <h2 className='text-lg bg-pink-200 font-bold text-pink-700 inline-block w-max p-2 rounded-lg'>7/1/2016</h2>
                    <h1 className='text-base font-semibold'>Abdul Hai and Oishi</h1>
                    <h3>Pirojpur,bangladesh</h3>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Gallery;