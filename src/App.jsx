import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login.jsx'
import Home from './pages/auth/Home.jsx'
import Signup from './pages/auth/Signup.jsx'
import CarFinance from './pages/auth/Carfinance.jsx'
function App() {

  return (
  <Router>
    <Routes>
     <Route path ="/Login" element={<Login/>} />
      <Route path ="/Home" element={<Home/>} />
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Car-finance' element={<CarFinance/>}/>
   
   </Routes>
  </Router>
  )
}

export default App
