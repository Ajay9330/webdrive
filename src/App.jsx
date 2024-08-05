import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, redirect, Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout'
import  Codes  from './Components/Outletcomponents/Codes'
import Files from './Components/Outletcomponents/Files'
import Links from './Components/Outletcomponents/Links'
import Images from './Components/Outletcomponents/Images'
import Notes from './Components/Outletcomponents/Notes'
function App() {

  const [islogin,setlogin]=useState(true);
  return (
    <>
    <Routes>
      {islogin && 
        <Route path='/' element={<Layout/>}>
          <Route  path='codes' element={<Codes/>}/>
          <Route path='files' element={<Files/>}/>
          <Route path='links' element={<Links/>}/>
          <Route path='notes' element={<Notes/>}/>
          <Route path='images' element={<Images/>}/>
        </Route>
      }
      <Route path='*' element={'<div>not found</div>'}/>
      
    </Routes>

    </>
  )
}

export default App
