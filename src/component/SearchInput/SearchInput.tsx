import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

export const SearchInput = () => {
  const [value, setValue] = useState<string>('');

  return (
    <div>
      <InputText
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </div>
  );
};
