import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="w-4/5 mx-auto p-2 grid grid-cols-2 text-center bg-white text-xl leading-6">
                <div>
                    <h2 className=" text-gray-600 text-3xl font-mono font-semibold italic"><span className="text-red-500">Techy</span> Teach</h2>
                </div>
            <div className="flex items-center justify-center font-semibold font-serif text-custom-color">
                    <NavLink className="mr-5" to="home" activeClassName="linkStyle">Home</NavLink>
                    <NavLink className="mr-5 " to="services" activeClassName="linkStyle">Services</NavLink>
                    <NavLink className="mr-5" to="blogs" activeClassName="linkStyle">Blog</NavLink>
                    <NavLink className="" to="about" activeClassName="linkStyle">About Us</NavLink>
                </div>
            </header>
        </div>
    );
};

export default Header;