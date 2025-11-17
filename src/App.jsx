import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  Navigate  
} from 'react-router-dom'


import EasyMode from './EasyMode/EasyMode'
import HardMode from './HardMode'
import MediumCategory from './MediumMode/MediumCategory'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

import { LoaderPage } from './Loader/LoaderPage'
import { useState, useEffect } from 'react'

function App() {

  const [loader, setLoader] = useState(true)

  useEffect(()=> {
    const timer = setTimeout(()=> setLoader(false), 5000)
    return ()=> clearTimeout(timer)
  }, [])


  useGSAP(() => {
    gsap.to('.link', { y:50, delay: 5, duration:2, stagger:1, scale: 1.2})
    gsap.from('.link', {opacity:0, delay: 5, duration:2, stagger:1 })
  })
    
  return <Router>
    {loader && <LoaderPage />}
    <nav className="container"> <Link to='/' ></Link>
      <Link to='/EasyMode' className='link firstPage'>Easy Mode</Link>
      <Link to='/MediumCategory' className='link' >Medium Mode</Link>
      <Link to='/HardMode' className='link' >Hard Mode</Link>
    </nav>

    <Routes> <Route path="/" element={<Navigate to="/EasyMode" replace />} />
      <Route path="/EasyMode" element={<EasyMode />} />
      <Route path="/MediumCategory" element={<MediumCategory/>} />
      <Route path="/HardMode" element={<HardMode/>} />

    </Routes>

  </Router>


}

export default App