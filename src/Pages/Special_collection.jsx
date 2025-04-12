import React from 'react'
import Show from '../Components/Show'

export default function Special_collection() {
  return (
    <div >
        <div className='lg:px-20 px-3 py-10 flex flex-col justify-center items-center'>
            <h1 className=' capitalize lg:text-2xl text-[#ff4c3b]'>Special Offer</h1>
            <p className='lg:text-5xl text-2xl font-bold uppercase lg:font-medium ' > top collection</p>
            <p className=' border w-24 border-[#ff4c3b] mt-2'></p>
            <p className='lg:py-2  flex flex-col justify-center items-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium reprehenderit harum amet  <br />
                repellat tempore aliquam cupiditate a natus? Cum nostrum magnam voluptates reprehenderit  <br/>
                officia ullam incidunt praesentium esse.
            </p>
        </div>   
        <Show /> 
    </div>
  )
}
