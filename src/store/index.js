import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";

const store = configureStore({
  reducer: {
    notes: noteSlice.reducer,
  },
});

export const { addNote, removeNote, toggleNote, hideNewNote } =
  noteSlice.actions;
export default store;
