import { createContext } from 'react';
import { IErrorContext } from './interfaces';

export const ErrorContext = createContext<IErrorContext>({
  onHandlingError: () => {},
});
