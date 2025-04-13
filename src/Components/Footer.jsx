import React from 'react'

export default function Footer() {
  return (
    <div className='lg:px-20 px-3 py-4 lg:py-8 text-gray-400 flex flex-col gap-4 items-center lg:gap-15 bg-gray-100'>
      <div className=' border-b-1 lg:flex lg:pb-8 pb-4'>
        <div className=" text-center lg:border-r-1 lg:w-[50%] ">
            <h1 className='lg:text-2xl text-xl text-black font-bold'>KNOW IT ALL FIRST!</h1>
            <p className=' opacity-0 lg:opacity-100'>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
        </div>
        <div className="flex gap-4 mx-auto items-center">
            <input type="text" className='py-2 px-3 text-black shadow '  placeholder='Enter your email'/>
            <p className=' text-white bg-[#ff4b3c] py-2 px-5 font-medium'>SUBSCRIBE</p>
        </div>
      </div>
      <div className="lg:flex justify-between">
        <div className="lg:w-[30%]">
            <img src='../src/Ban/logo.png' alt="" className='pb-4' />
            <p className='hidden lg:flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, unde. Laborum esse,blanditiis porro consequuntur, totam incidunt. Accusantium, odit ipsam nesciunt consequatur et iste.</p>
        </div>
        <div className="flex flex-col gap-4">
            <h1 className='text-2xl capitalize text-black font-bold'>My account</h1>
            <ul className="lg:flex hidden flex-col gap-2">
                <li>Womens</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li>Featured</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h1 className='text-2xl capitalize text-black font-bold'>why we choose</h1>
            <ul className="lg:flex hidden flex-col gap-2">
                <li>Shipping & Return</li>
                <li>Secure Shopping</li>
                <li>Gallary</li>
                <li>Affiliates</li>
                <li>Contacts</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4 lg:w-[20%]">
            <h1 className='text-2xl capitalize text-black font-bold'>store information</h1>
            <ul className="lg:flex hidden flex-col gap-2">
                <li>Multikart Demo Store, Demo Store India 345-659</li>
                <li>Call Us: 123-456-7898</li>
                <li>Email Us: Support@Fiot.Com</li>
                <li>Fax: 123456</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
