import React, { createRef, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { Model } from '../Model';
import { CodePopup } from '../ModelComponents/CodePopup';

const Notes = ({ data,view }) => {
    const [showmodel,setModel]=useState(false);
    const d=new Date();
    const datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes();


    return (<>
        <div onClick={()=>(setModel(true))} className="p-2 mx-auto border-[1px] border-opacity-50 border-blue-50  max-h-56 h-fit hover:cursor-pointer hover:shadow-[0px_0px_1px_1px_white] bg-zinc-900   rounded-xl overflow-clip w-72 md:w-96 flex flex-col">
            <div className={classNames(' bg-blue-500 rounded-sm flex items-center')}>
                <h1 className='p-2'>data.tite{}</h1>
                <div className=' ' >
                    <article>Date:{datestring}</article>
                </div>
            </div>
            
            <pre className={classNames('break-all text-wrap overflow-hidden w-full ',{ "hidden":view=="list"})}>
                    {JSON.stringify(data, null, 2).substring(0,200)} 
            </pre>
        </div>
        {showmodel && createPortal(<Model children={<CodePopup code={JSON.stringify(data,null,2)}/>} close={setModel}/>,document.body)}
        </>

    );
};

export default Notes;
