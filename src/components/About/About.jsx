/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='mt-14 text-center text-4xl font-extrabold border-b-4 color-changing-text'>Who we are  </h1>
            <div className="card gap-0 md:gap-10 card-side bg-base-100 shadow-xl mb-12 ">

                <figure><img className='h-full w-full' src="https://i.ibb.co/vv4bmz2/Wedding-Planners-in-Kolkata.jpg" alt="Movie" /></figure>
                <div className="card-body text-center">

                    <h2 className="card-title mx-auto italic color-changing-text">Planner for Your <br />
                        Perfect Wedding</h2>
                    <p>

                        At <span className='text-lg text-pink-500'>Marry Plan</span>, we understand that your wedding day is one of the most important moments of your life.
                        It's a day filled with dreams, emotions, and memories that will last a lifetime.
                        Our mission is to make your wedding day absolutely unforgettable, by bringing your vision to life with
                        precision, creativity, and meticulous planning.</p>

                </div>
            </div>


            {/* what we do section */}
            <h1 className='mt-14 text-center text-4xl font-extrabold border-b-4 color-changing-text'>What we do   </h1>
            <div className="card gap-10 card-side bg-base-100 shadow-xl my-12">
               
                <div className="card-body text-center">
                <h2 className="card-title mx-auto italic color-changing-text">what we do, we do pation <br />
                        Perfect Wedding</h2>
                    <p>At ,<span className='text-lg text-pink-500'>Marry Plan</span>, we offer a comprehensive range of wedding planning and event management services. From the moment you say "Yes!" to the final dance on your wedding night,
                         we are here to guide you every step of the way. Our services include:</p>
                   
                </div>
                <figure><img className='h-full w-full' src="https://i.ibb.co/c8C45tG/asian-wedding-decor-bridal.jpg" alt="Movie" /></figure>
            </div>

        </div>
    );
};

export default About;