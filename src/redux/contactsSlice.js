import { createSlice, nanoid } from '@reduxjs/toolkit';
import { StartState } from './const';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialValue = { contacts: StartState };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialValue,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
