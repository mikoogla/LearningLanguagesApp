import { createSlice } from "@reduxjs/toolkit";

const initial_notes = {
  notes: [],
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
      state.notes.splice(action.payload, 1);
    },
  },
});

export default noteSlice;
