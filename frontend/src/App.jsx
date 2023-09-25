import './App.css'
import Navbar from "./components/Navbar"
import Register from "./components/authentication/Register"
import ShowProducts from "./components/ShowProducts"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/authentication/Login'
import ProductWithID from './components/ProductWithID'
import PrivateComponent from './components/authentication/PrivateComponent'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route element={<PrivateComponent />}>
          <Route path='/' element={<ShowProducts />} />
          <Route path='/product/:id' element={<ProductWithID />} />
        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
