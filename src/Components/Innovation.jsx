import React from 'react'
import bulb from '../Assets/bulb.png';

const Innovation = () => {
  return (
    <div>
          <div className="">
              <div className="flex justify-between items-center mt-7 mx-20 leading-7">
                  <div className="left w-[390px] ml-[300px]">
                      <p className='text-[#DE2879] uppercase font-semibold text-xs tracking-widest'>Innovation</p>
                      <h1 className='font-bold text-2xl leading-10 '>Innovation Hub</h1>
                      <p>Transforming innovative ideas into impactful AI solutions by providing a platform for experimentation and growth.</p>
                  </div>
                  <div className="mr-60">
                      <img src={bulb} alt=""  />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Innovation
