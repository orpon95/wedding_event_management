/* eslint-disable no-unused-vars */
import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='flex gap-2 md:gap-5 items-center justify-center'>
            <div className='  flex-1'> <img className='w-full h-[50vh] md:h-[70vh] rounded-t-full border-t-8 border-pink-300 border-solid my-6' src="https://i.ibb.co/wgdwZKJ/1ecbe59d0b4a94d4b755e5e4acf46e8c.jpg" alt="" /></div>
            <div className='  flex-1 '>
                <h1 className=' text-lg md:text-2xl font-bold lg:text-6xl text-pink-400'>
                    <span > 
                        Perfect Plan!!!, <br />
                        make your wedding 

                    </span>
                    <span className='color-changing-text font-extrabold italic mx-2'  >
                        memorable
                    </span>
                </h1>
            </div>

        </div>
    );
};

export default Banner;