import { createSlice } from '@reduxjs/toolkit';
import { event, Important } from '../types/types';
import { nanoid } from '@reduxjs/toolkit';

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
    isRead: false,
    id: nanoid(),
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
    isRead: false,
    id: nanoid(),
  },
];

const messagesSlice = createSlice({
  name: '@@message',
  initialState,
  reducers: {
    changeReadStatus: (state, action) => {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            isRead: true,
          };
        }
        return item;
      });
    },
  },
});

export const messagesReducer = messagesSlice.reducer;
export const { changeReadStatus } = messagesSlice.actions;
