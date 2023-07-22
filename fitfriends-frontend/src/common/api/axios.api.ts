import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';

import { ConstantEnum } from '../enum/constant.enum';


const REQUEST_TIMEOUT = 5000;


export const axiosApi = ((): AxiosInstance => {
  const api = axios.create({
    baseURL: ConstantEnum.BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = sessionStorage.getItem(ConstantEnum.ACCESS_TOKEN);

      if (token) {
        config.headers!['Authorization'] = `Bearer ${token}`;
      }

      return config;
    },
  );

  return api;
})();

