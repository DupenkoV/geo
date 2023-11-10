import { useEffect, useState } from 'react';
import { Switcher } from '../Switcher/Switcher';
import { EventCard } from '../Cards/Cards';
import { Table } from '../Table/Table';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addEvent } from '../../slices/messagesSlice';
import { SearchInput } from '../SearchInput/SearchInput';
import './wrapper.css';

export const Wrapper = () => {
  let messageList = useAppSelector(state => state.messages);
  const [renderMessage, setRenderMessage] = useState(messageList);
  const searchText = useAppSelector(state => state.searchMessage);
  const switcher = useAppSelector(state => state.display);
  const dispatch = useAppDispatch();

  //Фильтрация списка событий
  useEffect(() => {
    const result = messageList.filter(item => {
      if (searchText.length === 0) {
        return item;
      } else {
        return item.message.toLowerCase().includes(searchText.toLowerCase());
      }
    });
    setRenderMessage(result);
  }, [searchText, messageList]);

  const displayStyle =
    switcher === 'Table' ? (
      <Table messageList={renderMessage} />
    ) : (
      <EventCard messageList={renderMessage} />
    );

  //Добавление новой карточке по таймеру раз в 10 сек
  useEffect(() => {
    const addNewEvent = setInterval(() => {
      dispatch(addEvent());
    }, 10000);
    return () => clearInterval(addNewEvent);
  }, [dispatch]);

  return (
    <>
      <div className="header">
        <Switcher />
        <SearchInput />
      </div>

      {displayStyle}
    </>
  );
};
