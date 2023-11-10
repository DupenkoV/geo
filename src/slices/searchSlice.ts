import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: '@@searh',
  initialState: '',
  reducers: {
    addMessageSearch: (state, action) => {
      return action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const { addMessageSearch } = searchSlice.actions;
