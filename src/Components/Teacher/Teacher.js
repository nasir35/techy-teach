import React from 'react';

const Teacher = (props) => {
    // console.log(props);
    const {name, img, designation} = props?.teacher?.courseDetails?.instructor;
    return (
        <div className="bg-gray-100 text-center shadow-md pb-3 text-green-200">
          
            <img className="w-full h-64 object-cover object-top" src={img} alt="" />
            <h2 className="text-xl font-medium text-red-600 mt-3">{name}</h2>
            <p className="font-medium text-gray-700">{designation}</p>
        </div>
    );
};

export default Teacher;