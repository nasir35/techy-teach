import React from 'react';
import { NavLink } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services] = useServices();
    const slicedServices = services.slice(0,4);
    return (
        <div>
            <section className="section-overlay p-20">
                <div className="section-inside">
                    <h2 className="text-5xl text-center text-custom-color"><span className=" text-red-500">Learn</span> &amp; Skilled with Techy Teach.</h2>
                    <p className="text-xl w-5/6 mx-auto text-center mt-10 text-custom-color">Programming is interesting! Let's learn it in a better and fun way with Techy Teach. We provide best education services by the help of our great instructor.</p>
                    <div className="w-4/12 mx-auto mt-10 grid grid-cols-2 gap-3">
                        <NavLink to="services" className="text-center bg-red-500 hover:bg-white hover:text-red-500 hover:border-white transition font-medium border-2 border-solid border-red-500 text-white rounded px-4 py-3">Our Services</NavLink>
                        <NavLink to="about" className="text-center bg-transparent hover:border-gray-800 hover:bg-gray-800 hover:text-white transition font-medium border-2 border-solid border-red-500 text-red-500 rounded px-4 py-3">About Us</NavLink>
                    </div>
                </div>                
            </section>
            <section className="py-4 mb-12">
                <div className="text-center py-12">
                    <h2 className=" inline-block text-3xl text-custom-color font-semibold pb-4 border-b-4 border-red-500 mb-4">Our Services</h2>
                    <p className="text-xl w-3/5 mx-auto text-custom-color">We provide various courses based on technology. Here are a few of them. You can find more by clicking on Services button.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 w-4/5 mx-auto">
                    {
                        slicedServices.map(service => <Service service={service} key={service.courseId}></Service>)
                    }
                </div>
                
            </section>
        </div>
    );
};

export default Home;