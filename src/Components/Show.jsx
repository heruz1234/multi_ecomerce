import React, { useState } from 'react'
import products from '../Backend/Product'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link, useNavigate, useParams } from 'react-router';


export default function Show() {
    const [image ,setImage] = useState('')
  
    
    const navigate = useNavigate()
   const changeImg = (index ,imageurl) => {
        setImage(() => ({[index] : imageurl}))
   };
  
   const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [{
        breakpoint:480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    }]
  };
 

  return (
    
   
       <div  className=' lg:px-20  lg:gap-5 justify-between'>
           <Slider {...settings}>
        {
            products.map((item,index) => {
                return ( 
            <div className="lg:w-[25%] w-[48%]  shadow ">
               <div className='flex relative'>

                <div className='lg:h-[55vh] h-[33vh]  '>
                <Link to={`/single/${item.id}`} > <img  src={image[index] || item.img_1} className='w-full h-full' ></img></Link>
                </div>
               
               <div className="lg:h-[55vh] h-[33vh] mt-0 w-[20%]  absolute flex  flex-col justify-end ">
                    <div>
                        <img onClick={() => changeImg(index, item.img_1)} className='cursor-pointer hover:opacity-100 opacity-40 ' src={ item.img_1} ></img>
                        <img onClick={() => changeImg(index, item.img_2)} className='cursor-pointer hover:opacity-100 opacity-40 ' src={ item.img_2}></img>
                        <img onClick={() => changeImg(index, item.img_3)} className='cursor-pointer hover:opacity-100 opacity-40 ' src={ item.img_3}></img>
                        <img onClick={() => changeImg(index, item.img_4)} className='cursor-pointer hover:opacity-100  opacity-40 ' src={ item.img_4}></img>
                    </div>
               </div>
            
            </div>
            
           
            <div className='py-2 px-2'>
                <div className='flex gap-1'> 
                   <i className='pi pi-star-fill text-yellow-400'></i>                    
                   <i className='pi pi-star-fill text-yellow-400'></i>                    
                   <i className='pi pi-star-fill text-yellow-400'></i>                    
                   <i className='pi pi-star-fill text-yellow-400'></i>                    
                   <i className='pi pi-star'></i>                    
                </div>
                <div>
                    <h3 className='text-sm text-gray-500 capitalize'>{item.name}</h3>
                    <h4 className='text-xl font-medium '>${item.price.toFixed(2)}  <span className='text-sm text-gray-400'>${item.old.toFixed(2)}</span></h4>
                </div>
             </div>

       </div>
                )
            })
        }</Slider>
        </div>
  
  )
}
