import { createSlice } from "@reduxjs/toolkit";

const initial_counter = {
  known: 0,
  uncertain: 0,
  unknown: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initial_counter,
  reducers: {
    updateCounter: (state, action) => {
      state.known = action.payload.known;
      state.uncertain = action.payload.uncertain;
      state.unknown = action.payload.unknown;
    },
  },
});

export default counterSlice;
