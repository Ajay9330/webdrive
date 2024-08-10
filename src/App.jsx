import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, redirect, Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { CodePage } from './pages/CodePage'
import { FilesPage } from './pages/FilesPage'
import { LinkPage } from './pages/LinkPage'
import { NotesPage } from './pages/NotesPage'
import { ImagePage } from './pages/ImagePage'
function App() {

  const [islogin,setlogin]=useState(true);
  return (
    <>
    <Routes>
      {islogin && 
        <Route path='/' element={<Layout/>}>
          <Route  path='codes' element={<CodePage/>}/>
          <Route path='files' element={<FilesPage/>}/>
          <Route path='links' element={<LinkPage/>}/>
          <Route path='notes' element={<NotesPage/>}/>
          <Route path='images' element={<ImagePage/>}/>
        </Route>
      }
      <Route path='*' element={'<div>not found</div>'}/>
      
    </Routes>

    </>
  )
}

export default App
