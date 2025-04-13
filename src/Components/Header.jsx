import React from 'react'

import list from '../Backend/HeaderData';
import { Link } from 'react-router';
export default function Header() {
   
  return (
    <div >

        <div className='flex justify-between py-7 px-5  lg:px-20 items-center shadow '>
            <img src='../src/Ban/logo.png' alt="" />
            <div  className=' lg:flex hidden justify-between gap-14'>
                <ul className='flex capitalize text-xl items-center gap-7 '>
                {
                    list.map((item,index) => {
                        return (
                            <li className='cursor-pointer hover:text-[#ff4c3b]'> <Link >{item.name}</Link> </li>
                        )
                    })
                }
                </ul>
                <div className='flex  items-center gap-5'>
                    <img src='../src/Ban/search.png' className='cursor-pointer' alt="" />
                    <img src='../src/Ban/setting.png' className='cursor-pointer' alt="" />
                    <img src='../src/Ban/cart.png' className='cursor-pointer' alt="" />
                </div>
            </div>   

        </div>
    </div>
  )
}
