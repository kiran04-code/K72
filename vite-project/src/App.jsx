import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agent from './pages/Agent'
import Project from './pages/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes >
        < Route path='/' element={<Home/>}/>
        < Route path='/Agent' element={<Agent/>}/>
        < Route path='/Project' element={<Project/>}/>
      </Routes>
    </>
  )
}

export default App
