import React from "react";
import {NavLink} from 'react-router-dom'
export const SideBar=()=>{
    return(
        <ul className="flex-col flex gap-4 mt-4 pr-6">
            <NavLink className='navlinks' to='/codes'>Code</NavLink>
            <NavLink className='navlinks' to='/notes'>Notes</NavLink>
            <NavLink className='navlinks' to='/links'>Links</NavLink>
            <NavLink className='navlinks' to='images'>Images</NavLink>
            <NavLink className='navlinks' to='/files'>Files</NavLink>
        </ul>
    )
}