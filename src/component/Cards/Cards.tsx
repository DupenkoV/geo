import { Card } from 'primereact/card';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import './cards.css';
import { event } from '../../types/types';
import React, { useState, useEffect } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { changeReadStatus } from '../../slices/messagesSlice';

export const EventCard = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(9);
  const [activeCard, setActiveCard] = useState('');
  const dispatch = useAppDispatch();

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const messageList = useAppSelector(state => state.messages);

  const className = (item: event) => {
    if (item.id === activeCard && item.isRead === false) {
      return 'eventCard blue active';
    }
    return item.isRead ? 'eventCard' : 'eventCard blue';
  };

  useEffect(() => {
    const handleSpaceDelete = (e: KeyboardEvent) => {
      if (e.key === ' ' && activeCard) {
        dispatch(changeReadStatus(activeCard));
        setActiveCard('');
      }
    };
    document.addEventListener('keydown', handleSpaceDelete);
    return () => {
      document.removeEventListener('keydown', handleSpaceDelete);
    };
  }, [activeCard, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.eventCard')) {
        setActiveCard('');
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="cardListWrapper">
        {messageList.slice(first, first + rows).map(item => {
          return (
            <Card
              title={item.responsibility}
              key={item.id}
              className={className(item)}
              onClick={() => setActiveCard(item.id)}>
              <p>Дата: {item.date}</p>
              <p>Важность: {item.importance}</p>
              <p>Оборудование: {item.equipment}</p>
              <p>Сообщение: {item.message}</p>
            </Card>
          );
        })}
      </div>
      <div className="card">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={messageList.length}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};
