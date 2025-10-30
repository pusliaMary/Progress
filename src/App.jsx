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

    

function App() {

 
    
  return <Router>

    <nav className="container"> <Link to='/' ></Link>
      <Link to='/EasyMode' className='link firstPage' >Easy Mode</Link>
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