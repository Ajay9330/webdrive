import React from 'react';

const Images = ({ data }) => {


  const d = new Date();
  const formattedDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  const formattedTime = `${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`; // Pad minutes to always show two digits

  return (
    <div className='w-72 grow-[2] border-opacity-10 rounded-xl border-white border-[1px] hover:border-opacity-60 cursor-pointer mx-auto items-center gap-2 p-2 justify-center flex flex-col'>
      <article className='w-full sm:w-full justify-center text-[0.8rem] font-light gap-2 flex'>
        <h2 className='font-normal'>Title</h2>
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </article>
      <div className='w-full h-full'>
        <img 
          className='rounded-2xl object-cover max-h-44 w-full p-2' 
          src={data.url} 
          alt="Descriptive text" 
          loading="lazy"
        />
      </div>
    </div>
  );
}



export default Images;
