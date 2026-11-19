import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const cart = useSelector((state) => state.data.cart)
  const total = cart.reduce((sum, i) => sum + i.price * i.count, 0)

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-links">
            <NavLink to="/" className="link">
              Products
            </NavLink>
            <NavLink to="/cart" className="link">
              Cart
              {cart.length > 0 && <sup className="badge">{cart.length}</sup>}
            </NavLink>
          </div>
          <div className="header-total">
            Jami: <b>{total.toLocaleString('ru-RU')} so'm</b>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header