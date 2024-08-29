import React, { createRef, useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js/lib/common';
// import 'highlight.js/styles/vs.css'; 
import 'highlight.js/styles/xt256.css'
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { Model } from '../Model';
import { CodePopup } from '../ModelComponents/CodePopup';

const Codes = ({ info,view }) => {
    const coderef = createRef();
    const [showmodel,setModel]=useState(false);
    const d=new Date();
    const datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes();
    useEffect(() => {
        if (coderef.current) {
            hljs.highlightElement(coderef.current);
        //    const highlightedVal= hljs.highlightAuto(JSON.stringify(info));
        //    console.log(highlitedVal);
        }
    }, []);

    return (<>
        <div onClick={()=>(setModel(true))} className="mx-auto  max-h-56 h-fit hover:cursor-pointer hover:shadow-[0px_0px_1px_1px_white] bg-zinc-900   rounded-xl overflow-clip w-72 md:w-96 flex flex-col">
            <div className={classNames('flex items-center')}>
                <h1 className='p-2'>info.tite{}</h1>
                <div className=' ' >
                    <article>Date:{datestring}</article>
                </div>
            </div>
            
            <pre className={classNames('break-all text-wrap overflow-hidden w-full ',{ "hidden":view=="list"})}>
                <code  ref={coderef} >
                    {JSON.stringify(info, null, 2).substring(0,200)} 
                </code>
            </pre>
        </div>
        {showmodel && createPortal(<Model children={<CodePopup code={JSON.stringify(info,null,2)}/>} close={setModel}/>,document.body)}
        </>

    );
};

export default Codes;
