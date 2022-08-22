import { createSlice } from "@reduxjs/toolkit";

const initial_dictionary = {
  dictionary: [
    {
      id: 1,
      word: "testword1",
      state: "known",
    },
    {
      id: 2,
      word: "testword2",
      state: "uncertain",
    },
  ],
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: initial_dictionary,
  reducers: {
    addWord: (state, action) => {
      state.dictionary.push({
        id: state.dictionary.length + 1,
        word: action.payload.word,
        state: action.payload.state,
      });
    },
    removeWord: (state, action) => {
      state.dictionary.splice(action.payload, 1);
    },
    updateWord: (state, action) => {
      state.dictionary[action.payload.index].word = action.payload.word;
      state.dictionary[action.payload.index].state = action.payload.state;
    },
  },
});

export default dictionarySlice;
