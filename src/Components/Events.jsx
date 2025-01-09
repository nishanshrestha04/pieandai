import React from 'react'

const Events = () => {
return (
    <div>
        <h1 className='text-6xl font-bold ml-40 w-1/2 leading-normal'>
            We organize various activities to <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-yellow-400">engage</span> and <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-yellow-400">empower</span> the community:
        </h1>
        <div className="ml-72">
        <div className="mt-40  h-[334px] bg-hackathon bg-no-repeat bg-fit p-20  ">
            <h1 className='text-white text-3xl font-extrabold'>AI Hackathons</h1>
            <p className='text-white font-extrabold w-1/3 pt-6'>Collaborate, innovate, and solve real-world challenges with fellow AI enthusiasts.</p>
            <button className='bg-[#E8C76D] px-[32px] py-[7px] font-bold text-black mt-[40px] rounded-full'>Register for the Next Hackathon</button>

        </div>
        <div className="my-20  h-[334px] bg-colab bg-no-repeat bg-fit p-20  ">
            <h1 className='text-white text-3xl font-extrabold'>Regular Meetings</h1>
            <p className='text-white font-extrabold w-1/3 pt-6'>Fun and collaboratory meetings to keep the community active
            making sure each and every member is heard.</p>
            <button className='bg-[#6DA6E8] px-[32px] py-[7px] font-bold text-black mt-[40px] rounded-full'>See when the next meet is </button>

        </div>
        <div className="my-20  h-[334px] bg-workshop bg-no-repeat bg-fit p-20  ">
            <h1 className='text-white text-3xl font-extrabold'>Hands-On AI Workshops</h1>
            <p className='text-white font-extrabold w-1/3 pt-6'>Interactive sessions to explore AI tools, frameworks, and real-world applications with guidance from experts</p>
            <button className='bg-[#DC6BD9] px-[32px] py-[7px] font-bold text-black mt-[40px] rounded-full'>Join the Next Workshop</button>
        </div>

        <div className="my-20  h-[334px] bg-network bg-no-repeat bg-fit p-20  ">
            <h1 className='text-white text-3xl font-extrabold'>Networking Events</h1>
            <p className='text-white font-extrabold w-1/3 pt-6'>Connect with AI professionals, enthusiasts, and mentors to expand your network and opportunities.</p>
            <button className='bg-[#9CE86D] px-[32px] py-[7px] font-bold text-black mt-[40px] rounded-full'>See Upcoming Networking Events</button>
        </div>
        </div>
    </div>
)
}

export default Events
