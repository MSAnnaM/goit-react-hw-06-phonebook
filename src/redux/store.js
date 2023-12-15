import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../redux/contactSlice';
import filterReducer from '../redux/filterSlice';

export default configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});