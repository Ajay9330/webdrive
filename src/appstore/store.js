import { configureStore } from '@reduxjs/toolkit'
import tools from './reducers/accesblity'
export const store = configureStore({
  reducer: {
    tools
  },
})