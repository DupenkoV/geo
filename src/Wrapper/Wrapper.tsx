import { useEffect } from 'react';
import { Switcher } from '../component/Switcher/Switcher';
import { EventCard } from '../component/Cards/Cards';
import { Table } from '../component/Table/Table';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { addEvent } from '../slices/messagesSlice';

export const Wrapper = () => {
  const switcher = useAppSelector(state => state.display);
  const dispatch = useAppDispatch();
  const displayStyle = switcher === 'Table' ? <Table /> : <EventCard />;

  useEffect(() => {
    const addNewEvent = setInterval(() => {
      dispatch(addEvent());
    }, 10000);
    return () => clearInterval(addNewEvent);
  }, [dispatch]);
  return (
    <>
      <Switcher />
      {displayStyle}
    </>
  );
};
