import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { contacts: '' },
  reducers: {
    setFilter: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;