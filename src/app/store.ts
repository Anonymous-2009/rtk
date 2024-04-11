import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../states/counter';
import dataReducer from '../states/api'; 
import { apiSlice } from '../redux/data';
import { lata } from '../redux/lata';
import { setupListeners } from '@reduxjs/toolkit/query'
// Adjust the path as necessary

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,[apiSlice.reducerPath]: apiSlice.reducer,
[lata.reducerPath]: lata.reducer,
    // Include the data reducer in your store setup
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, lata.middleware)

});

setupListeners(store.dispatch)