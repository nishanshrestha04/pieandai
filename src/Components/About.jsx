import React from 'react'
import brain from '../Assets/brain.png';

const About = () => {
return (
    <div>
        <h1 className="bg-gradient-to-r from-[#DE2778] to-[#FA9F54] text-transparent bg-clip-text text-center text-6xl font-semibold">Our Mission & Vision</h1>
        <div className="flex justify-between items-center mt-7 mx-20 leading-7">
            <div className="left w-[390px] ml-[300px]">
                <p className='text-[#B33CDB] uppercase font-semibold text-xs tracking-widest'>Mission</p>
                <h1 className='font-bold text-2xl leading-10 '>AI Education</h1>
                <p>Empowering individuals with comprehensive learning resources, workshops, and expert-led sessions to explore the limitless possibilities of AI.</p>
            </div>
            <div className="right">
                <img src={brain} alt=""  className='mr-60'/>
            </div>
        </div>
    </div>
)
}

export default About
