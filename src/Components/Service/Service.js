import React from 'react';
import Rating from '../Rating/Rating';

const Service = (props) => {
    const {img, courseDetails } =props.service;
    const {title, shortDp, rating, instructor} = courseDetails;
    const {name} = instructor;
    const firstBtnStyle = 'bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition font-medium border-2 border-solid border-red-500 text-white rounded px-6 py-1 mr-2';
    const secondBtnStyle = 'bg-transparent hover:border-gray-800 hover:bg-gray-800 hover:text-white transition font-medium border-2 border-solid border-gray-800 text-gray-800 rounded px-6 py-1';
    return (
        <div className="rounded p-3 shadow-md border-2 border-solid border-gray-200 text-custom-color">
            <img className={`border rounded object-cover ${props.callingFrom ? "h-44" : ""}`} src={img} alt="image" />
            <h2 className="text-2xl font-medium mb-3 mt-3">{title}</h2> <hr />
            <p className="mb-3 mt-3">{<Rating rating = {rating}></Rating>} <b>({rating})</ b></p>
            <p className="mb-3">{shortDp}</p>
            <h5 className="mb-3 font-medium">Instructor : {name}</h5>
            <button className={firstBtnStyle}>Enroll Now</button> <button className={secondBtnStyle}>See Details</button>
        </div>
    );
};

export default Service;