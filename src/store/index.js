import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";
import noteLogic from "./noteLogic";

const store = configureStore({
  reducer: {
    notes: noteSlice.reducer,
    logic: noteLogic.reducer,
  },
});

export const { addNote, removeNote } = noteSlice.actions;
export const { showNote, toggleNote, hideNewNote } = noteLogic.actions;
export default store;
