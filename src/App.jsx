import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate  
} from 'react-router-dom'


import EasyMode from './EasyMode/EasyMode'
import HardMode from './HardMode'
import MediumCategory from './MediumMode/MediumCategory'
import { Navigation } from './Navigation'




function App() {

  
  return <Router>
   
    <Navigation />

    <Routes> <Route path="/" element={<Navigate to="/EasyMode" replace />} />
      <Route path="/EasyMode" element={<EasyMode />} />
      <Route path="/MediumCategory" element={<MediumCategory/>} />
      <Route path="/HardMode" element={<HardMode/>} />

    </Routes>

  </Router>


}

export default App