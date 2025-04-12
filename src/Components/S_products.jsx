import React from 'react'
import Special_product from '../Backend/S_product'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
export default function S_products() {
    
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [{
        breakpoint:480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
  };
 
  return (
    <div className='lg:px-20 px-3'>
      <div className='py-5 flex flex-col gap-1 items-center'>
        <h1 className=' capitalize text-[#ff4c3b] font-medium text-2xl '>our collection</h1>
        <p   className='font-medium uppercase text-3xl lg:text-4xl'>special products</p>
        <span className='w-24 border border-x-0 border-y-2 border-[#ff4c3b]'></span>
      </div>
     
        <div className=' '>
        <Slider {...settings}> 
        {
        Special_product.map((item,index) => {
            return(
           <div className='w-[30%] font-medium'>
            <img className='w-full' src={item.img} alt="" />
            <div className='text-center flex flex-col gap-0.5 px-4 py-2' >
                <p className=' capitalize text-[#ff4c3b] '>{item.date}</p>
                <h1 className=' uppercase '>{item.content}</h1>
                <span className='w-20 my-1 border m-auto border-[#ff4c3b]'></span>
                <p className='text-gray-400 text-sm '>by: {item.author}.... {item.Comment} comment</p>
            </div>
        </div>
          
               )
            })
          } </Slider>
        </div>  
    </div>
  )
}
