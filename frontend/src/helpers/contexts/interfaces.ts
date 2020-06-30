import { AxiosError } from 'axios';

export interface IErrorContext {
  onHandlingError: (error: AxiosError) => void;
}
