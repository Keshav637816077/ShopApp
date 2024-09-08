import Header from './components/header'
import Footer from './components/footer'
import About from "./components/about"
import Contact from "./components/contact"
import Login from "./components/login" 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/products'
import AddProduct from './components/addProduct'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [products, setProducts] = useState(window.localStorage.getItem('product') ? JSON.pars
  (window.localStorage.getItem('product')) : [])

  useEffect(() => {
    window.localStorage.setItem('products', JSON.stringify(products))
  }, [products])
 
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/about" element = {<About /> } />
            <Route path="/contact" element = {<Contact />} />
            <Route path="/products" element={<Products products={products} setProducts={setProducts}/>} />
            <Route path='/addProduct' element={<AddProduct setProducts={setProducts} products={products} />} />
            <Route path="/*" element = {<Login />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App