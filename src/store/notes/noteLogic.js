import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  state: "notes",
  //state: "hide",
  //state: "dictionary",
  hide: false,
  hideNewNote: true,
  currentNote: {
    title: "No Text Selected",
    text: "Your note will appear here. Just add your first note and click show! :P",
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
    setState: (state, action) => {
      state.state = action.payload;
    },
  },
});

export default noteSlice;
