import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='flex items-center  h-[62px] justify-around fixed z-10 top-0 left-0 right-0 bg-gradient-to-r from-[#DE2778] to-[#FA9F54]'>
        <div className="logo h-[62px]">
            <img src={logo} alt="" srcset="" className='h-[62px]' />
        </div>
        <div className=" nav-links">
            <ul className='flex items-center gap-5'>
                <li className='p-2 text-white'>About us</li>
                <li className='p-2 text-white'>Events</li>
                <li className='p-2 text-white'>Teams</li>
                <li className='p-2 text-white'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
