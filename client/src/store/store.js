import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

// Configurar la tienda de Redux con Redux Toolkit
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production', // Habilitar las herramientas de desarrollo solo en entorno de desarrollo
});