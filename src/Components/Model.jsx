import react, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {createPortal} from 'react-dom';
import { store } from '../appstore/store';
import { setModel } from '../appstore/reducers/accesblity';
export const Model=({children})=>{
    const v=useSelector(state=>state);
    const dispatch=useDispatch();
    
    return(
        <>  
            <div className='absolute max-w-screen max-h-screen h-full w-full overflow-hidden
             bg-black left-0 bg-opacity-75 top-0 flex flex-col items-center justify-center'>
                
                <div style={{animation:'zoomout', animationDuration:'.3s'}} className='max-h-[90%] overflow-hidden h-full w-full flex-1 bg-black max-w-[90%] text-white  '>
                    <span onClick={()=>{dispatch(setModel(false))}} className=' relative top-3 right-3 float-right bg-blue-200  matirail-icons-outlined'>close</span>
                    hi
                    {children}
                </div>                
            </div>
            {/* {createPortal(<p>jjkbkbkb</p>,document.body)} */}
        </>
    );
}