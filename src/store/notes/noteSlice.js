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
    },
    removeNote: (state, action) => {
      console.log("removing note: ");
      state.notes.splice(action.payload, 1);
    },
    replaceNotes: (state, action) => {
      console.log("payload: ", action.payload);
      state.notes = action.payload || [];
    },
  },
});

export default noteSlice;
