import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, products } from '../reducer/cartSlicer'

const Products = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.data.cart)

  return (
    <div className="card">
      <h2>Products</h2>
      <div className="list">
        {products.map((p) => {
          const inCart = cart.find((i) => i.id === p.id)
          const maxed = inCart && inCart.count >= p.stock
          return (
            <div className="row" key={p.id}>
              <div className="row-info">
                <span className="name">{p.name}</span>
                <span>{p.price.toLocaleString('ru-RU')} so'm</span>
                <span className="muted">Omborda: {p.stock}</span>
              </div>
              <div className="row-actions">
                <button
                  className="add"
                  disabled={maxed}
                  onClick={() => dispatch(addToCart(p))}
                >
                  {inCart ? `Qo'shildi (${inCart.count})` : "Savatga qo'shish"}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products
