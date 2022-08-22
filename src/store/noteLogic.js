import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  //adding this instead of hide to toggle notes/dictionary in one button
  state: "notes",
  //state: "hide",
  //state: "dictionary",
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
    //replace toggle with this
    switchState: (state) => {
      if (state.state === "hide") {
        state.state = "notes";
      } else if (state.state === "notes") {
        state.state = "dictionary";
      } else if (state.state === "dictionary") {
        state.state = "hide";
      } else {
        state.state = "notes";
      }
    },
  },
});

export default noteSlice;
