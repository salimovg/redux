import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearCart,
  decrement,
  increment,
  removeFromCart,
  selectTotal,
} from '../reducer/cartSlicer'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.data.cart)
  const total = useSelector(selectTotal)
  const totalCount = cart.reduce((sum, i) => sum + i.count, 0)

  return (
    <div className="card">
      <h2>Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="muted">Savat bo'sh</p>
      ) : (
        <>
          <div className="list">
            {cart.map((item) => (
              <div className="row" key={item.id}>
                <div className="row-info">
                  <span className="name">{item.name}</span>
                  <span>{item.price.toLocaleString('ru-RU')} so'm</span>
                  <span>{item.count}x</span>
                </div>
                <div className="row-actions">
                  <button
                    className="btn"
                    disabled={item.count >= item.stock}
                    onClick={() => dispatch(increment(item.id))}
                  >
                    +
                  </button>
                  <button
                    className="btn"
                    disabled={item.count <= 1}
                    onClick={() => dispatch(decrement(item.id))}
                  >
                    -
                  </button>
                  <button
                    className="btn remove"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <div>
              <div className="muted">Jami mahsulot: {totalCount} ta</div>
              <div className="total-sum">
                Umumiy summa: <b>{total.toLocaleString('ru-RU')} so'm</b>
              </div>
            </div>
            <button className="btn clear" onClick={() => dispatch(clearCart())}>
              Savatni tozalash
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart