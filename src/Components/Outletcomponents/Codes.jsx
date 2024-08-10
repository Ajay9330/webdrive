import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/common';
  const Codes=({info})=>{
    const coderef=useRef(null);
    useEffect(()=>{
        if(coderef.current){
            hljs.highlightElement(coderef.current);
        }
    },info);
    return(
        <>
            <div>
                <div>
                    <pre>
                        <code ref={coderef}>
                            {info?.code}
                        </code>
                    </pre>
                </div>

            </div>
        </>
    )
}
export default Codes;