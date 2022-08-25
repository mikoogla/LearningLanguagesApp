import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./notes/noteSlice";
import noteLogic from "./notes/noteLogic";
import dictionarySlice from "./dictionary/dictionarySlice";
import counterSlice from "./counterSlice";
const store = configureStore({
  reducer: {
    notes: noteSlice.reducer,
    dictionary: dictionarySlice.reducer,
    logic: noteLogic.reducer,
    counter: counterSlice.reducer,
  },
});

export const { addNote, removeNote } = noteSlice.actions;
export const { showNote, toggleNote, hideNewNote, switchState, setState } =
  noteLogic.actions;
export const {
  addWord,
  removeWord,
  updateWord,
  findWordState,
  wordState,
  replaceDictionary,
  touch,
} = dictionarySlice.actions;
export const { updateCounter } = counterSlice.actions;
export default store;
