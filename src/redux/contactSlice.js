import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: (state, action) => {
      return { ...state, contacts: action.payload };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
