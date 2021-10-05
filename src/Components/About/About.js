import React from 'react';
import useServices from '../../Hooks/useServices';
import Teacher from '../Teacher/Teacher';

const About = () => {
    const [teachers] = useServices();
    const uniqueTeachers = teachers.slice(0,3);
    const [,,,, fourth] = teachers;
    uniqueTeachers.push(fourth);
    return (
        <div>
            <div className="bg-gray-50 pt-6">
            <h2 className="w-2/12 mx-auto text-center text-3xl text-custom-color font-semibold pb-2 border-b-4 border-red-500">About Us</h2>
            </div>
            <div className="bg-gray-50 grid grid-cols-2 gap-20 text-center about-div p-12">
                <div>
                    <img src="https://cdn.elearningindustry.com/wp-content/uploads/2018/12/how-to-be-a-good-online-training-instructor-in-5-simple-steps-1024x574.jpg" alt="" className="border rounded-xl"/>
                </div>
                <div className="relative z-10">
                    
                    <p className="text-xl text-custom-color">New Tech is a technology related teaching platform. We work on making technology more easier to understand. We try to present techonology related knowledge to our student in a better and fun way. Our respected instructors are highly qualified on teaching and they know how to solve your problem! We are focusing on student's need. By giving them the very first priority we are making lessons learner friendly. We also arrange many events to make you more active and figure out your creativity. Many of our student's remark our website as the turning element of their life.</p>
                </div>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-2 gap-6 py-12">
                <div>
                    <h2 className=" inline-block text-3xl text-custom-color font-semibold pb-2 border-b-4 border-red-500 mb-4">Why Choose Us?</h2>
                    <p className="font-medium text-custom-color">Because, We provide best education system. We focus on making you skilled on your respected topic. We teach with real world projects.</p>
                    <p className="font-medium text-xl my-5">&#10004; Best Education System</p>
                    <p className="font-medium text-xl my-5">&#10004; Learner Friendly Teaching</p>
                    <p className="font-medium text-xl my-5">&#10004; Learn Through Real world projects</p>
                    <p className="font-medium text-xl my-5">&#10004; Support Through full course</p>
                    <p className="font-medium text-xl my-5">&#10004; Certificate after completion</p>
                </div>
                <div>
                    <img src="https://thumbs.dreamstime.com/b/confident-man-teacher-coach-wearing-headset-speaking-holding-online-lesson-focused-student-wearing-glasses-looking-laptop-180674829.jpg" alt="" className="border rounded-xl"/>
                </div>
            </div>
            {/* Teacher components is causing error. that's why i commented it */}
            {/* <section className="p-12">
                <h2 className="text-center w-3/12 mx-auto text-3xl text-custom-color font-semibold pb-2 border-b-4 border-red-500 mb-4">Our Instructors</h2>
                <p className="font-medium text-custom-color text-center">We have skilled and well trained instructor. here are a few profile of our respected instructors.</p>
            </section>
            <div className="grid grid-cols-4 gap-3 p-12 pt-2">
                {
                    uniqueTeachers.map((teacher) => <Teacher teacher = {teacher}></Teacher>)
                }
             </div> */}
        </div>
    );
};

export default About;