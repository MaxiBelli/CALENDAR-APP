import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import calendarReducer from '../slices/calendarSlices'; 
import uiReducer from '../slices/uiSlices';

// Configurar la tienda de Redux con Redux Toolkit
export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    ui: uiReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production', 
});