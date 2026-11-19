import { createSlice } from '@reduxjs/toolkit'

export const products = [
  { id: 1, name: 'Pencil', price: 10000, stock: 4 },
  { id: 2, name: 'Notebook', price: 5000, stock: 10 },
  { id: 3, name: 'Pen', price: 3000, stock: 20 },
  { id: 4, name: 'Eraser', price: 2000, stock: 8 },
  { id: 5, name: 'Ruler', price: 4000, stock: 6 },
  { id: 6, name: 'Backpack', price: 150000, stock: 3 },
]

const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const item = state.cart.find((i) => i.id === product.id)
      if (item) {
        if (item.count < item.stock) item.count += 1
      } else {
        state.cart.push({ ...product, count: 1 })
      }
    },
    increment: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload)
      if (item && item.count < item.stock) item.count += 1
    },
    decrement: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload)
      if (item && item.count > 1) item.count -= 1
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload)
    },
    clearCart: (state) => {
      state.cart = []
    },
  },
})

export const { addToCart, increment, decrement, removeFromCart, clearCart } =
  cartSlice.actions

export const selectTotal = (state) =>
  state.data.cart.reduce((sum, i) => sum + i.price * i.count, 0)

export default cartSlice.reducer