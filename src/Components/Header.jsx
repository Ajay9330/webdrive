import React, { useState } from 'react'
import light from './../assets/sun-svg.svg'
import menu from '../assets/menu_open.svg'
import logoicon from '../assets/logo_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { setMode, setSideBar, toggleMode } from '../appstore/reducers/accesblity'
import{} from '../appstore/reducers/userSlice';
import Profile from './Profile'
import { NavLink } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { Model } from './Model'
export const Header = () => {
    const dispach=useDispatch();
    const theme=useSelector(state=>state.tools.mode);
    const isopen=useSelector(state=>state.tools.isSidebaropen);
    const userInfo=useSelector(state=>state.user.userInfo);
    const [show,setShowProfile]=useState(false);
  return (
    <div className=' sticky  w-full  top-0 bg-zinc-900 backdrop-blur-xl  text-white flex justify-between px-3 items-center '>
        <div className='flex p-3 w-64 justify-around items-center'>
            <button onClick={()=>dispach(setSideBar(!isopen))} className=' w-8 h-8 '>
                <img src={menu} alt="" />
            </button>
            <NavLink to='/' className='bg-black max-w-32 p-2 gap-2 h-8 rounded-md text-sm font-black hover:shadow-xl flex justify-center items-center'>
                <img className='w-6' src={logoicon} alt="" />
                <span className='hidden md:block'>Webdrive</span>
            </NavLink>
        </div>

        <div className='bg-zinc-200 text-black  w-56 h-8 rounded-3xl px-3 justify-around flex items-center' >
            <span onClick={()=>dispach(toggleMode())} className=' border-2 w-7 h-7 rounded-full text-center border-gray-500 bg-white cursor-pointer select-none active:scale-[0.95] transition-all duration-75'>
                {theme=="light"?<span className="material-symbols-outlined">dark_mode</span>
                :<img src={light} alt="" srcSet="" />}
            </span>
            
            <div className=' cursor-pointer border-2 w-7 h-7 flex border-gray-500  justify-center items-center rounded-full text-center '>
                {userInfo ? <div className='rounded-full bg-white' onClick={()=>setShowProfile(true)}>
                    <img className='rounded-full' src={userInfo?.photoURL} alt=" " />
                </div> 
               : <NavLink className="h-full w-full flex items-center justify-center " to="/signin">
                <span className="text-[18px] material-symbols-outlined">person_add</span>   
                </NavLink>  }       
            </div>
            {show && userInfo &&createPortal(<Model close={setShowProfile}><Profile/></Model>,document.body)}

        </div>
    </div>
)
}
