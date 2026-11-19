import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Products from './pages/Products'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  )
}

export default App