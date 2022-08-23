import { createSlice } from "@reduxjs/toolkit";

const initial_dictionary = {
  dictionary: [],
  known: 0,
  uncertain: 0,
  wordState: "unknown",
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: initial_dictionary,
  reducers: {
    addWord: (state, action) => {
      if (state.dictionary.map((e) => e.word).includes(action.payload.word)) {
        console.log("word already exists");
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
    findWordState: (state, action) => {
      if (state.dictionary !== undefined) {
        const index = state.dictionary
          .map((e) => e.word)
          .indexOf(action.payload.word);
        if (index !== -1) {
          return state.dictionary[index].state;
        } else {
          return "unknown";
        }
      } else {
        return "unknown";
      }
    },
  },
});

export default dictionarySlice;
//export wordState;
