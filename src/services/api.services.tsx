import axios, { AxiosResponse } from 'axios';
import { ResponseData } from '../interfaces/response-data';

const BASE_URL = 'http://localhost:9000/';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function createSession(
  host: string,
  title: string,
  password: string
): Promise<AxiosResponse<ResponseData>> {
  return api.post('/session', {
    title,
    host,
    password,
  });
}

export function connectSession(
  host: string,
  password: string,
  socket: string
): Promise<AxiosResponse<ResponseData>> {
  return api.post(
    `/connect/${socket}`,
    // JSON.stringify({
    { host, password }
    // })
  );
}

export function verifySocket(
  url: string
): Promise<AxiosResponse<ResponseData>> {
  return api.get('/connect', {
    params: {
      url,
    },
  });
}
