import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addMessageSearch } from '../../slices/searchSlice';

export const SearchInput = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addMessageSearch(value));
  }, [value, dispatch]);
  return (
    <div>
      <InputText
        value={value}
        placeholder="Поиск сообщения"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </div>
  );
};
