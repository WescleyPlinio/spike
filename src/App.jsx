import Index from  './pages/Index.jsx' 
import Dubs from  './pages/Dubs.jsx' 
import './App.css'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/dubs' element={<Dubs />} />
    </Routes>
  )
}


export default App