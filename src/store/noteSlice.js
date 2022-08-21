import { createSlice } from "@reduxjs/toolkit";

const initial_notes = {
  notes: [],
  hide: false,
  hideNewNote: true,
};

const noteSlice = createSlice({
  name: "notes",
  initialState: initial_notes,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
      console.log("new note added, title: " + action.payload.title);
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
