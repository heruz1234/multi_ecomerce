import React from 'react'

export default function Sub_banner() {
  return (
    <div className='lg:px-20 px-3'>
       <div className='lg:flex justify-between font-medium '>
            <div className="sub_1 mb-8 lg:mb-0  bg-[black] h-[20vh] lg:h-[40Vh] lg:w-[49%] hover:cursor-pointer flex flex-col justify-center items-end px-14  ">
                 <p className='text-[#ff4c3b] '>10% OFF</p>
                 <h1 className='text-5xl'>MEN</h1>
            </div>
            <div className="sub_2 bg-[black]  h-[20vh] lg:h-[40Vh] lg:w-[49%] hover:cursor-pointer flex flex-col justify-center items-end px-14  ">
                 <p className='text-[#ff4c3b] '>10% OFF</p>
                 <h1 className='text-5xl'>WOMEN</h1>
            </div>
       </div>
    </div>
  )
}
