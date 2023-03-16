import { configureStore } from '@reduxjs/toolkit'
import creditSlice from '../slice/creditSlice'

export const store = configureStore({
  reducer: {creditSlice},
})
