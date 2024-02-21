import { createSlice } from '@reduxjs/toolkit';
// import initialContacts from '../data/initialContacts.json';
import { fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.error = null),
          (state.items = action.payload);
      })
      .addCase(fetchContacts.rejected, handleRejected),
  reducers: {
    // addContact: (state, action) => {
    //   state.contacts.push(action.payload);
    // },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    removeAllContact: state => {
      state.contacts = state.contacts.filter(contact => !contact);
    },
  },
});

export const { addContact, removeContact, removeAllContact } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
