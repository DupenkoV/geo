import { createSlice } from '@reduxjs/toolkit';
import { event, Important } from '../types/types';

const initialState: event[] = [
  {
    date: new Date().toLocaleDateString('ru-Ru', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }),
    importance: Important.high,
    equipment: 'Cisco',
    message: 'Выкинуть',
    responsibility: 'К.В. Дупенко',
  },
  {
    date: new Date().toLocaleDateString('ru-Ru', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }),
    importance: Important.high,
    equipment: 'Cisco',
    message: 'Выкинуть',
    responsibility: 'К.В. Дупенко',
  },
];

const messagesSlice = createSlice({
  name: '@@message',
  initialState,
  reducers: {
    addMessage: (state, action) => {},
  },
});

export const messagesReducer = messagesSlice.reducer;
