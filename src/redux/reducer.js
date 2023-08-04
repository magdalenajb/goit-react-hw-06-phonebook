import { createReducer } from '@reduxjs/toolkit';
import { filterAction, addContactAction, deleteContactAction } from './actions';
import { nanoid } from 'nanoid';

const defaultContacts = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const localStorageContacts =
  JSON.parse(localStorage.getItem('contactsState')) === null
    ? defaultContacts
    : JSON.parse(localStorage.getItem('contactsState'));

const initialState = {
  contacts: {
    items: localStorageContacts,
    filter: '',
  },
};

export const reducer = createReducer(initialState, {
  [filterAction]: (state, action) => {
    state.contacts.filter = action.payload;
  },

  [addContactAction]: (state, action) => {
    let contact = {};
    const isItUniqueName = state.contacts.items
      .map(e => e.name.toLowerCase())
      .includes(action.payload.name.toLowerCase());
    if (isItUniqueName) {
      return alert(`${action.payload.name} is already in contacts.`);
    } else {
      contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
    }
    state.contacts.items = [...state.contacts.items, contact];
  },

  [deleteContactAction]: (state, action) => {
    state.contacts.items = state.contacts.items.filter(
      ({ id }) => id !== action.payload
    );
  },
});
