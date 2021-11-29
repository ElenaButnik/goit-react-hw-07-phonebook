import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.contact;
export const getFilter = (state) => state.filter;

export const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

