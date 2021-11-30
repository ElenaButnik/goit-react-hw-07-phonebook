import { createReducer, createSlice } from "@reduxjs/toolkit";
import { changeFilter } from "./actions";

import { getThunkData, addThunkData, deleteThunkData } from "./operations";

export const contactSlice = createSlice({
  name: "contacts",
  initialState: { contact: [], loading: false, error: null },
  extraReducers: {
    [getThunkData.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getThunkData.fulfilled]: (state, action) => {
      return {
        ...state,
        contact: action.payload,
        loading: false,
      };
    },
    [getThunkData.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    [addThunkData.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [addThunkData.fulfilled]: (state, action) => {
      return {
        ...state,
        contact: [action.payload, ...state.contact],
        loading: false,
      };
    },
    [addThunkData.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    [deleteThunkData.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [deleteThunkData.fulfilled]: (state, action) => {
      return {
        ...state,
        contact: state.contact.filter(({ id }) => id !== action.payload),
        loading: false,
      };
    },
    [deleteThunkData.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export default contactSlice.reducer;

export const contactFilter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
