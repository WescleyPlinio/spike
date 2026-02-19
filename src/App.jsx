import Index from  './components/Index.jsx' 
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/sobre' element={<Navbar />} />
    </Routes>
  )
}


export default App