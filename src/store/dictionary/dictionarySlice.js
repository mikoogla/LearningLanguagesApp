import { createSlice } from "@reduxjs/toolkit";

const initial_dictionary = {
  dictionary: [],
  known: 0,
  uncertain: 0,
  touched: false,
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: initial_dictionary,
  reducers: {
    addWord: (state, action) => {
      const index = state.dictionary
        .map((e) => e.word)
        .indexOf(action.payload.word);
      if (state.dictionary.map((e) => e.word).includes(action.payload.word)) {
        console.log("word already exists index: " + index);
        state.dictionary[index].state = action.payload.state;
      } else {
        state.dictionary.push({
          id: state.dictionary.length + 1,
          word: action.payload.word,
          state: action.payload.state,
        });
        if (action.payload.state === "known") {
          state.known += 1;
        } else if (action.payload.state === "uncertain") {
          state.uncertain += 1;
        }
      }
    },
    removeWord: (state, action) => {
      state.dictionary.splice(action.payload, 1);
    },
    updateWord: (state, action) => {
      state.dictionary[action.payload.index].word = action.payload.word;
      state.dictionary[action.payload.index].state = action.payload.state;
    },

    replaceDictionary: (state, action) => {
      state.dictionary = action.payload.dictionary;
      state.known = action.payload.known;
      state.uncertain = action.payload.uncertain;
      state.touched = action.payload.touched;
    },
    touch: (state) => {
      state.touched = true;
    },
  },
});

export default dictionarySlice;
