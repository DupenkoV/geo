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
    message: 'Проверить порты',
    responsibility: 'К.В. Карпенко',
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
    equipment: 'МФУ HP',
    message: 'Заправить картридж',
    responsibility: 'К.В. Дупенко',
    isRead: false,
    id: nanoid(),
  },
];

const messagesSlice = createSlice({
  name: '@@message',
  initialState,
  reducers: {
    addEvent: state => {
      state.push({
        date: new Date().toLocaleDateString('ru-Ru', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }),
        importance: Important.high,
        equipment: 'Cisco',
        message: 'Проверить порты',
        responsibility: 'К.В. Карпенко',
        isRead: false,
        id: nanoid(),
      });
    },
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
export const { changeReadStatus, addEvent } = messagesSlice.actions;
