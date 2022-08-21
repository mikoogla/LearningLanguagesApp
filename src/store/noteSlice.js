import { createSlice } from "@reduxjs/toolkit";

const initial_notes = {
  products: [],
  hide: false,
  hideNewNote: true,
};

const noteSlice = createSlice({
  name: "notes",
  initialState: initial_notes,
  reducers: {
    addNote: (state, action) => {
      console.log("adding  note: ");
    },
    removeNote: (state, action) => {
      console.log("removing note: ");
    },
    toggleNote: (state) => {
      state.hide = !state.hide;
    },
    hideNewNote: (state) => {
      state.hideNewNote = !state.hideNewNote;
    },
  },
});

export default noteSlice;
