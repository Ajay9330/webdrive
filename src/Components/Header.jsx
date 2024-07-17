import React from 'react'

export const Header = () => {
  return (
    <div className=' sticky w-full top-0 bg-primary1 text-white flex justify-between px-3 items-center '>
        <div className='flex p-3 w-64 justify-between items-center'>
            <span className='bg-white w-8 h-8 '>
                tb
            </span>
            <span className='bg-white w-20 h-8 '>
                lo
            </span>
        </div>

        <div className='bg-white text-black  w-56 h-8 rounded-3xl px-3 justify-around flex items-center'>
            <span className=' border-2 w-7 h-7 rounded-full text-center border-black'>
                l
            </span>
            <span className=' border-2 w-7 h-7 rounded-full text-center border-black'>
                p
            </span>
        </div>
    </div>
)
}
