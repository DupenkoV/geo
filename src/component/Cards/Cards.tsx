import { Card } from 'primereact/card';
import { useAppDispatch } from '../../hooks/reduxHooks';
import './cards.css';
import { eventMessage } from '../../types/types';
import { useState, useEffect } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { changeReadStatus } from '../../slices/messagesSlice';
import { useDoubleTap } from 'use-double-tap';

interface EventCardProp {
  messageList: eventMessage[];
}

export const EventCard: React.FC<EventCardProp> = ({ messageList }) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(9);
  const [activeCard, setActiveCard] = useState('');
  const dispatch = useAppDispatch();

  //Хук, необходимый для отработки события двойного тапа по карточке
  const doubleTap = useDoubleTap(e => {
    dispatch(changeReadStatus(activeCard));
  });

  //Внесение изменений в стейт, необходимых для пагинации
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  //Присвоение класса карточке события для визуализации активно/непрочитано/прочитано
  const className = (item: eventMessage) => {
    if (item.id === activeCard && item.isRead === false) {
      return 'eventCard blue active';
    }

    return item.isRead ? 'eventCard' : 'eventCard blue';
  };

  //Отслеживание нажатия пробела для изменения статуса на "прочитано"
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

  //Отслеживание клика мышки для отмены статуса активности карточки
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
      <div className="cardListWrapper" {...doubleTap}>
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
