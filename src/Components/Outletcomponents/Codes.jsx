import React, { createRef, useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js/lib/common';
// import 'highlight.js/styles/vs.css';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { Model } from '../Model';
import { CodePopup } from '../ModelComponents/CodePopup';

const Codes = ({ info,view,key }) => {
    const coderef = createRef();
    const [showmodel,setModel]=useState(false);
    useEffect(() => {
        console.log( key);
        if (coderef.current) {
            hljs.highlightElement(coderef.current);
        }
    }, []);

    return (<>
        <div onClick={()=>(setModel(true))} className="mx-auto  max-h-56 h-fit hover:cursor-pointer hover:shadow-[0px_0px_3px_4px_blue] bg-slate-500  rounded-3xl overflow-clip max-w-96 flex flex-col">
            <h1 className='p-2'>info.tite{}</h1>
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
