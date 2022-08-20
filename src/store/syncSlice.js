import { createSlice } from "@reduxjs/toolkit";

const initial_sync = {
  loading: false,
};

const syncSlice = createSlice({
  name: "sync",
  initialState: initial_sync,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export default syncSlice;
