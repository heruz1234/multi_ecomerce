import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

export default function SignUp() {
  return (
    <div>
    <Header />
    <div className='lg:px-20 px-3 py-14' >
       <h1 className='font-medium text-2xl uppercase py-4 '>create account</h1>
       <div className='lg:flex gap-4 lg:min-h-[250px] py-10 px-10 lg:px-20 border  flex-wrap justify-between'>
         <div className="lg:w-[47%]  flex flex-col gap-2">
          <p className=' capitalize font-medium'>First Name</p>
          <input type="text" placeholder='Firstname'  className='lg:px-10 px-5 py-4 border'/>
         </div>
         <div className="lg:w-[47%] flex flex-col gap-2">
          <p className=' capitalize font-medium'>Last Name</p>
          <input type="text" placeholder='Lastname'  className='lg:px-10 px-5 py-4 border'/>
         </div>
         <div className="lg:w-[47%] flex flex-col gap-2">
          <p className=' capitalize font-medium'>Email</p>
          <input type="email" placeholder='Enter your email'  className='lg:px-10 px-5 py-4 border'/>
         </div>
         <div className="lg:w-[47%] flex flex-col gap-2">
          <p className=' capitalize font-medium'>Password</p>
          <input type="password" placeholder='Enter your password' className='lg:px-10 px-5 py-4 border'/>
         </div>
         <p className='py-2 lg:my-0 my-4 px-12 text-center hover:bg-white hover:text-[#ff4b3c] hover:border ease-in-out duration-600 text-white font-semibold text-xl bg-[#ff4b3c] '>Sign Up</p>
         
       </div>
       
    </div>
    <Footer />
    </div>
  )
}
