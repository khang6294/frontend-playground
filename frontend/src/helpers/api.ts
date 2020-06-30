// Contains all the APIs of the application

import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { TEST_BASE_URL } from './constants';

axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  },
);
// Name the function with format: SERVICE | ACTION | MODEL (Ex: facebookGetToken)
const testGetToken = async () => {
  const response: AxiosResponse = await axios.get(`${TEST_BASE_URL}/api/token`);
  return response.data;
};

export { testGetToken };
