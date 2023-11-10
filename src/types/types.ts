export enum Important {
  high = 'Высокая',
  Middle = 'Средняя',
  low = 'Низкая',
}

export interface eventMessage {
  date: string;
  importance: Important;
  equipment: string;
  message: string;
  responsibility: string;
  isRead: boolean;
  id: string;
}
