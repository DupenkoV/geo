import { configureStore } from '@reduxjs/toolkit';
import { messagesReducer } from '../slices/messagesSlice';
import { displayReducer } from '../slices/displaySlice';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    display: displayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
