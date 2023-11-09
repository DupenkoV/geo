import React from 'react';
import { Card } from 'primereact/card';
import { useAppSelector } from '../../hooks/reduxHooks';
import './cards.css';
import { event } from '../../types/types';

export const EventCard = () => {
  const messageList = useAppSelector(state => state.messages);

  const className = (item: event) =>
    item.isRead ? 'eventCard' : 'eventCard blue';
  return (
    <div className="cardListWrapper">
      {messageList.map(item => {
        return (
          <Card
            title={item.responsibility}
            key={item.id}
            className={className(item)}>
            <p>Дата: {item.date}</p>
            <p>Важность: {item.importance}</p>
            <p>Оборудование: {item.equipment}</p>
            <p>Сообщение: {item.message}</p>
          </Card>
        );
      })}
    </div>
  );
};
