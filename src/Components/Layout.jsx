import React, { useEffect } from 'react';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {Model} from './Model';
import { useSelector } from 'react-redux';
import { Search } from './Search';
export const Layout=()=>{
    const model=useSelector(state=>state.tools.isModelopen);
    const isopen=useSelector(state=>state.tools.isSidebaropen);
    useEffect(()=>{
        
    })
    return(
        <>  
        <Header/>   
            <div className='bg-white flex h-full  '>
            <div className={`absolute overflow-hidden md:static w-44 transition-all h-[calc(100vh-56px)] bg-primary2 ${!isopen && ' -translate-x-44 md:translate-x-0 md:w-12'}`}><SideBar /></div>

            <div className='flex-1  h-[calc(100vh-56px)] bg-blue-500 text-white flex-col flex '>
                <Search/>
            <div className='bg-primary1 flex-1 text-white '>
                <Outlet/>
            </div>
            {model && <Model><div className='w-full h-full bg-blue-100'>hi</div></Model>}
            </div>
        </div> 
        </>
    );
}