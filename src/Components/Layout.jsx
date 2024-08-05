import React from 'react';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
export const Layout=()=>{
    return(
        <>  
        <Header/>   
            <div className='bg-white flex h-full  '>
            <div className='w-44 h-[calc(100vh-56px)] bg-primary2'><SideBar /></div>
            <div className='flex-1  h-[calc(100vh-56px)] bg-blue-500 text-white flex-col flex '>
            <div className='h-10 bg-white flex p-1 gap-2 justify-around '>
                <div className='bg-primary2 w-16 rounded-sm flex items-center justify-around border-gray-700 border-[1px]'>
                    <button class="material-symbols-outlined text-black bg-blue-500 ">grid_view</button>
                    <button class="material-symbols-outlined text-black ">view_list</button>
                </div>

                <div className=' w-full max-w-[800px] flex'>
                    <input placeholder='Search' className='px-3 placeholder:text-indigo-950 bg-primary2 flex-1 rounded-l-3xl  focus:outline-1 focus:outline-blue-600  outline-gray-300 outline-1 outline ' type="text" name="" id="" />
                    <button className='bg-primary3 w-10 flex items-center justify-center rounded-r-full active:bg-black ' ><span class="material-symbols-outlined">search</span></button>
                </div>
            </div>
            <div className='bg-primary1 flex-1 text-white overflow-y-auto'>
                <Outlet/>
            </div>

            </div>
        </div> 
        </>
    );
}