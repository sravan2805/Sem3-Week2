import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection  from './Pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Order from './Pages/Order'
import Navbar from './Components/Navbar'
import './index.css'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
        <Navbar/>
        <Searchbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collection' element={<Collection/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/product/:productId' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/place-order' element={<PlaceOrder/>} />
            <Route path='/orders' element={<Order/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App