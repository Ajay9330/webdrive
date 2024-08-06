import React from "react";
import { NavLink } from 'react-router-dom'
export const SideBar = () => {
    return (<>
        <div className="flex flex-col ">
            <button className="  mt-2 flex items-center rounded-r-full shadow-md rounded-l-full h-8  bg-white   mx-5" style={{}}>
                <span class="material-symbols-outlined flex mx-auto shadow-[0px_0px_10px_1px_black] rounded-md  bg-black text-white">add</span>
            </button>
            <ul className="flex-col flex gap-4 mt-4 pr-6">
                <NavLink className=' navlinks ' to='/codes'>
                    <span class=" text-black  font-bold material-symbols-outlined">code</span>Code
                </NavLink>
                <NavLink className='navlinks' to='/notes'>
                    <span class=" text-black  font-bold material-symbols-outlined">text_snippet</span>Notes
                </NavLink>
                <NavLink className='navlinks' to='/links'>
                    <span class=" text-black  font-bold material-symbols-outlined">link </span>Links
                </NavLink>
                <NavLink className='navlinks' to='images'>
                <span class=" text-black  font-bold material-symbols-outlined">image</span>Images
                </NavLink>
                <NavLink className='navlinks' to='/files'>
                    <span class=" text-black  font-bold material-symbols-outlined">folder</span>Files
                </NavLink>
            </ul>
        </div>
        
    </>)
}