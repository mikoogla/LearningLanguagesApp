import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  hide: false,
  hideNewNote: true,
  currentNote: {
    title: "No Text Selected",
    text: "Your note will appear here.",
  },
};

const noteSlice = createSlice({
  name: "logic",
  initialState: initial_state,
  reducers: {
    showNote: (state, action) => {
      state.currentNote = action.payload;
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
