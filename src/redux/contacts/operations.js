import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://61a1187a6c3b400017e69bf3.mockapi.io";

export const getThunkData = createAsyncThunk(
  "getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addThunkData = createAsyncThunk(
  "addContacts",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
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
