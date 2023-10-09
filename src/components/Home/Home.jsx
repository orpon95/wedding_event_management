/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../card/card';
import Banner from '../Banner/Banner';
import AOS from "aos";
import "aos/dist/aos.css";



const Home = () => {
    const datas = useLoaderData()
    // console.log(datas);
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-out'
        })

    }, [])
    return (
        <div>

            <Banner></Banner>
            <h3 data-aos="fade-up-right" className='p-3 text-4xl text-pink-400 text-center italic my-6 font-bold border-b-8 border-pink-200 '> Our services</h3>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
                {

                    datas.map(data => <Card key={data.id} data={data}></Card>)


                }
            </div>

            {/* meet organiser section */}


            <div className='my-32'>
                <h1 data-aos="fade-up-right" className='text-5xl font-extrabold text-center text-pink-400 border-b-4 border-r-pink-500'>Our organiser</h1>
                <div className='flex my-32 justify-center items-center gap-7'>
                    {/* title div */}


                    <div data-aos="fade-up-right" className='space-y-3'>
                        <h1 className='text-4xl font-bold text-pink-600'>meet our creative organiser</h1>
                        <p className='text-2xl italic'>
                            All the professionls are working here!!!
                        </p>


                    </div>
                    {/* pic div */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        <div data-aos="fade-up-right"  ><img className='w-full h-[280px]  rounded-2xl' src="https://i.ibb.co/nnySJk0/boys-dp-from-funkylife-34.jpg" alt="" /></div>
                        <div data-aos="fade-up-right"><img className='w-full h-[280px] rounded-2xl' src="https://i.ibb.co/d6qKWVC/desktop-wallpaper-smart-boy-posted-by-ryan-tremblay-smart-and-attitude-boys-thumbnail.jpg" alt="" /></div>
                        <div data-aos="fade-up-right"><img className='w-full h-[280px] rounded-2xl' src="https://i.ibb.co/Kq6dkZJ/download-1.jpg" alt="" /></div>
                        <div data-aos="fade-up-right"><img className='w-full h-[280px] rounded-2xl' src="https://i.ibb.co/fSd3Kds/download.jpg" alt="" />

                        </div>

                    </div>



                </div>
            </div>

            {/* contacct us */}
            <h2 className='text-3xl text-pink-400 text-center border-b-4 border-pink-400'>contact details</h2>

            <div className='flex flex-wrap justify-between my-4 ' >

                <div data-aos="fade-up-right"><h1 className='text-xl font-bold'>phone:</h1>
                    <h3>+021588455</h3>
                    <h3>+646546456</h3>

                </div>
                <div data-aos="fade-up-right"><h1 className='text-xl font-bold'>address</h1>
                    <h2>sayedabad,1280/c <br />
                        Dhaka
                    </h2>

                </div>
                <div data-aos="fade-up-right"><h2 className='text-xl font-bold'>
                    email:

                </h2>
                    <h3 className='underline text-blue-500'>support@gmai.com</h3>
                    <h3 className='underline text-blue-500'>maryplan@gmailcom</h3>

                </div>
            </div>
        </div>
    );
};

export default Home;