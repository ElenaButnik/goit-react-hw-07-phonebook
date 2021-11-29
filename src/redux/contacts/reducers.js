import { createReducer, createSlice } from "@reduxjs/toolkit";
import {changeFilter} from './actions';
//import * as contactsActions from "./actions";
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
        //  [...state.contact, ...action.payload],
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
        contact: [...state.contact, ...action.payload],
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
        contact: state.contact.filter(({id}) => id !== action.payload),
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

// export const contacts = createReducer([], {
//   [getThunkData.fulfilled] : (state, action) =>  {
//     return [...state, ...action.payload];
//   },
// });

// export const loading = createReducer(false, {
//   [getThunkData.pending]: (_, action) => true,
//   [getThunkData.fulfilled]: (_, action) => false,
//   [getThunkData.rejected]: (_, action) => false,
// })

// export const error = createReducer(null, {
//   [getThunkData.rejected] : (_, action) =>  action.payload,
// })

//const initialState = [];

// const contactList = (state = initialState, action) => {
//   switch (action.type) {
//     case "contact/add":
//       return [...state, action.payload];

//       case "contact/delete":
//       return state.filter(contact => contact.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

// export const contactList = createReducer(initialState, {
//   "contact/add": (state, { payload }) => [...state, payload],
//   "contact/delete": (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });


// const contactFilter = (state = "", action) => {
//   return state;
// };
