import {AxiosResponse} from 'axios';
import server from './server';

interface StoreSessionResponse {
  token: string;
}

export async function store(login: string, password: string): Promise<AxiosResponse<StoreSessionResponse>> {
  return server.post('client/sessions', {
    login,
    password,
  });
}
