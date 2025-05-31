import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login.jsx'
import Home from './pages/auth/Home.jsx'
import Signup from './pages/auth/Signup.jsx'
import CarFinance from './pages/auth/Carfinance.jsx'
import UsedCars from './pages/auth/UsedCars.jsx'
import CarComparison from './pages/auth/CarComparison.jsx'

function App() {

  return (
  <Router>
    <Routes>
      <Route path ="" element={<Login/>} />
      <Route path ="/Home" element={<Home/>} />
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Car-finance' element={<CarFinance/>}/>
      <Route path='/UsedCars' element={<UsedCars/>}/>
    <Route path='/CarComparison' element={<CarComparison/>}/>
  
   </Routes>
  </Router>
  )
}

export default App
