import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from '../redux/contactSlice';
import { filterReducer } from '../redux/filterSlice';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});