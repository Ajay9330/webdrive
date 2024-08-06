import React from 'react'
import light from './../assets/sun-svg.svg'
import menu from '../assets/menu_open.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setSideBar } from '../appstore/reducers/accesblity'
export const Header = () => {
    const dispach=useDispatch();
    const isopen=useSelector(state=>state.tools.isSidebaropen);
  return (
    <div className=' sticky w-full top-0 bg-primary1 text-white flex justify-between px-3 items-center '>
        <div className='flex p-3 w-64 justify-between items-center'>
            <button onClick={()=>dispach(setSideBar(!isopen))} className=' w-8 h-8 '>
                <img src={menu} alt="" />
            </button>
            <span className='bg-white w-20 h-8 '>
                lo
            </span>
        </div>

        <div className='bg-white text-black  w-56 h-8 rounded-3xl px-3 justify-around flex items-center'>
            <span className=' border-2 w-7 h-7 rounded-full text-center border-black'>
            <span class="material-symbols-outlined">dark_mode</span>
            </span>
            <span className=' border-2 w-7 h-7 rounded-full text-center border-black'>
                <img src={light} alt="" srcset="" />
            </span>
        </div>
    </div>
)
}
