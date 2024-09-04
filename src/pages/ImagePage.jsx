import React, { useEffect, useState } from 'react'
import Images from '../Components/Outletcomponents/Images'
import classNames from 'classnames';
export const ImagePage = () => {
  const [imgdata,setImgData]=useState([]);
  const fetchImgData=async()=>{
    try {
      // const res=await fetch('https://picsum.photos/v2/list'); 
      const res=await fetch('https://jsonplaceholder.typicode.com/photos') 
      const data= await res.json();
      setImgData(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchImgData();
  },[])  
  return (
    <div className={classNames('flex flex-wrap justify-center w-full gap-2')}>
      {imgdata.map(d=><Images data={d} />)}
      
    </div>
  )
}
