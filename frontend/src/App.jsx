import './App.css'
import Navbar from "./components/Navbar"
import Register from "./components/authentication/Register"
import ShowProducts from "./components/ShowProducts"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/authentication/Login'
import ProductWithID from './components/ProductWithID'
import PrivateComponent from './components/authentication/PrivateComponent'
import Search from './components/Search'
import Cart from './components/cart'
import NotFound from './components/not-found'


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route element={<PrivateComponent />}>
          <Route path='/' element={<ShowProducts />} />
          <Route path='/product/:id' element={<ProductWithID />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' exact element={<Cart />} />
        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* If no any other route matches then it will redirect to 404 NOT Found */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
