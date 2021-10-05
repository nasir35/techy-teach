import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-gray-900 p-4">
            <div className="w-4/5 mx-auto grid grid-cols-2 gap-10 mb-5 pb-4 border-b-2 border-white">
                <div className="text-white">
                    <h2 className="text-2xl">&#10063; Techy Teach</h2>
                    <p className="mb-6 text-gray-300 pl-5">It's a platform of best education services. Our Goal is to make you more skilled with a better fun learning way.</p>

                    <h2 className="text-2xl">&#10063; Useful links</h2>
                    <NavLink to="services">&emsp;&#128279; Our Services</NavLink><br />
                    <NavLink to="blogs">&emsp;&#128279; Blogs</NavLink><br />
                    <NavLink to="about">&emsp;&#128279; About Us</NavLink><br />

                    <h2 className="text-2xl mt-6">&#10063; Connect With Us</h2>
                    <a href="#" target="_blank" className="mr-5">&emsp;Youtube</a>
                    <a href="#" target="_blank" className="mr-5">Facebook</a>
                    <a href="#" target="_blank" className="mr-5">Twitter</a>
                    <a href="#" target="_blank" className="mr-5">Instagram</a>
                </div>
                <div>
                    <h2 className="text-white mb-4 text-2xl w-4/5 text-center">Contact with us</h2>
                    <input type="text" placeholder="Full Name" className="w-4/5 rounded box-border px-2 py-1 mb-3" />
                    <input type="email" placeholder="E-mail Address" className="w-4/5 rounded box-border px-2 py-1 mb-3" /><br />
                    <textarea name="" id="" cols="20" rows="5" placeholder="Message" className="w-4/5 rounded box-border px-2 pr-3 py-1 mb-2"></textarea> <br />
                    <button className="w-4/5 px-12 py-2 hover:text-white hover:bg-red-500 bg-yellow-400 hover:border-gray-500 text-gray-800 font-medium rounded">Submit</button>
                </div>
            </div>
            <div>
                <p className="text-center text-white"><span className="text-xl">&copy;</span> 2021 <a href ="https://www.facebook.com/muhammadnasir358" target="_blank" className=" text-gray-400 font-semibold border-b border-gray-300">Designed by - Nasir</a> | All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;