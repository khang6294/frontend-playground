import React, { useState } from 'react';

export const useField = (type: string, name: string, initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    name,
    onChange,
    type,
    value,
  };
};
