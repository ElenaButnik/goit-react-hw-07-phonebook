import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
///import * as contactsActions from "./actions";
//import * as ContactsAPI from "../../services/ContactsAPI";

axios.defaults.baseURL = "https://61a1187a6c3b400017e69bf3.mockapi.io";

// export const getData = () => async (dispatch) => {
//   dispatch(contactsActions.getContactsRequest());

//   try {
//     const contacts = await ContactsAPI.fetchContacts();
//     dispatch(contactsActions.getContactsSuccess());
//   } catch (error) {
//     dispatch(contactsActions.getContactsError(error));
//   }
// };

export const getThunkData = createAsyncThunk(
  "getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const  contacts  = await axios.get(`/contacts`);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addThunkData = createAsyncThunk(
  "addContacts",
  async (contact, { rejectWithValue }) => {
    try {
      const contacts  = await axios.post(`/contacts`, contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteThunkData = createAsyncThunk(
  "deleteContacts",
  async (contactID, { rejectWithValue }) => {
    try {
      const {
        data: { id },
      } = await axios.delete(`/contacts/${contactID}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
