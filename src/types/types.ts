export enum Important {
  high = 'Высокая',
  Middle = 'Средняя',
  low = 'Низкая',
}

export interface event {
  date: string;
  importance: Important;
  equipment: string;
  message: string;
  responsibility: string;
  isRead?: false;
}
