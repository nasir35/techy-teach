import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="p-12 text-center">
            <h1 className="text-9xl text-center font-extrabold font-mono text-custom-color p-8">404</h1>
            <h3 className="text-center text-red-500 font-medium text-2xl">Oops! Page not found. <br /> <span className="text-gray-800 block mb-12">This page doesn't exist on this website or it's removed by owner!</span></h3>
            <NavLink to="home" className="bg-gray-800 px-12 py-3 rounded text-white font-medium border-2 border-gray-800 hover:text-gray-800 hover:bg-white mx-auto">Back To Home</NavLink>
        </div>
    );
};

export default NotFound;