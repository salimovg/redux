import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../reducer/cartSlicer'

const store = configureStore({
  reducer: {
    data: cartReducer,
  },
})

export default store