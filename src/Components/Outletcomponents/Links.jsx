import React,{useState} from 'react'

const Links = ({data}) => {
  const [showdesc,setshowdesc]=useState(false);
  const d=new Date();

  return (
    <div className=' bg-black overflow-auto m-2 p-2 rounded-md '>
      <div className='flex flex-wrap justify-between gap-4'>
          <a className='w-fit hover:text-blue-500 underline decoration-blue-700 ' href={data.url}>{data.title}</a>
          <article className='w-full sm:w-fit justify-center text-[0.8rem] font-light gap-2 flex'>
              <span className=''>{ d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear() }</span>
              <span>{d.getHours()+":"+d.getMinutes()}</span>
              <button className=' float-right bg-primary2 text-black h-fit px-2 rounded-md active:bg-white' onClick={()=>setshowdesc(!showdesc)}>show</button>
          </article>
          
      </div>
      <div className='bg-white text-black'>
        {showdesc && <p>{data.description}</p>}
      </div>
    </div>
  )
}

export default Links