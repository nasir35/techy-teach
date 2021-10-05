import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices()
    return (
        <div>
            <section className="py-4">
                <div className="text-center py-12">
                    <h2 className=" inline-block text-3xl text-custom-color font-semibold pb-2 border-b-4 border-red-500 mb-4">Our Services</h2>
                    <p className="text-xl w-3/5 mx-auto text-custom-color">We provide various courses based on technology. Find your desired course and start learning from today.</p>
                </div>
                <div className="grid grid-cols-3 gap-8 w-5/6 mx-auto">
                    {
                        services.map(service => <Service service={service} callingFrom = 'services' key={service.courseId}></Service>)
                    }
                </div>
                
            </section>
        </div>
    );
};

export default Services;