import './App.css'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



import EasyMode from './EasyMode'
import MediumMode from './MediumMode'
import HardMode from './HardMode'

function App() {
  
  const [input, setInput] = useState('')
  
  const [easyList, setEasyList] = useState([])

  const [inputSubmited,setInputSubmited] = useState('')

  const [doneList, setDoneList] = useState([])

  
  
  return <Router>
    <nav className="container"> <Link to='/'></Link>
      <Link to='/EasyMode' className='link firstPage'>Easy Mode</Link>
      <Link to='/MediumMode' className='link'>Medium Mode</Link>
      <Link to='/HardMode' className='link'>Hard Mode</Link>
    </nav>

    <Routes> <Route path="/" element={<EasyMode input={input} easyList={easyList} setEasyList={setEasyList} setInput={setInput} inputSubmited={inputSubmited} setInputSubmited={setInputSubmited} doneList={doneList} setDoneList={setDoneList}/>} />
      <Route path="/EasyMode" element={<EasyMode />} />
      <Route path="/MediumMode" element={<MediumMode/>} />
      <Route path="/HardMode" element={<HardMode/>} />

    </Routes>

  </Router>


}

export default App