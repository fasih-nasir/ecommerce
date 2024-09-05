import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Navbar from './pages/header'
import Top from './pages/top'
import Footer from './pages/footer'
import Contact from './pages/contact'
import Product from './pages/product'
import ProductDetails from './pages/product-details'
function App() {


  return (
 <>
<BrowserRouter>
  <Navbar/>
  <Top />
<Routes>
  <Route path='/'  element={< Home />}></Route>
  <Route path='/About' element={< About />}></Route>
  <Route path='/Contact' element={< Contact />}></Route>
  <Route path='/Product' element={< Product />}></Route>
  <Route path='/product-details/:id' element={<ProductDetails />} />
  
</Routes>
<Footer/>
</BrowserRouter>
 </>
  )
}

export default App
