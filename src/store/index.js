import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";
import noteLogic from "./noteLogic";
import dictionarySlice from "./dictionarySlice";

const store = configureStore({
  reducer: {
    notes: noteSlice.reducer,
    dictionary: dictionarySlice.reducer,
    logic: noteLogic.reducer,
  },
});

export const { addNote, removeNote } = noteSlice.actions;
export const { showNote, toggleNote, hideNewNote } = noteLogic.actions;
export const { addWord, removeWord, updateWord } = dictionarySlice.actions;
export default store;
