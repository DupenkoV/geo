import { createSlice } from '@reduxjs/toolkit';

const displaySlice = createSlice({
  name: '@@display',
  initialState: 'Table',
  reducers: {
    switchDisplay: (state, action) => {
      return action.payload;
    },
  },
});

export const displayReducer = displaySlice.reducer;
export const { switchDisplay } = displaySlice.actions;
