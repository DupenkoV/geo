import React from 'react';
import { InputText } from 'primereact/inputtext';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addMessageSearch } from '../../slices/searchSlice';

export const SearchInput = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <InputText
        placeholder="Поиск сообщения"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(addMessageSearch(e.target.value))
        }
      />
    </div>
  );
};
