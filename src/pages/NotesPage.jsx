import React, { useEffect, useState } from 'react'
import Notes from '../Components/Outletcomponents/Notes';

export const NotesPage = () => {
  const [notes,setnotes]=useState([]);
  async function fetchNotes() {
    try {
      const d=await fetch('http://api.github.com/users/ajay9330/repos');
      const data=await d.json();
      setnotes(data);
    } catch (error) {
      console.log(error);
    }finally{
      
    }
  }
  useEffect(()=>{
    fetchNotes();
  },[])
  return (
    <div className='flex flex-wrap w-full gap-4 md:gap-6 '>{notes.map((x,idx)=><Notes data={x} key={idx}/>)}</div>
  )
}
