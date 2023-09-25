import './App.css'
import Navbar from "./components/Navbar"
import Register from "./components/authentication/Register"
import ShowProducts from "./components/ShowProducts"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/authentication/Login'
import ProductWithID from './components/ProductWithID'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<ShowProducts />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductWithID />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
