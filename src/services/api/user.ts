import {AxiosResponse} from 'axios';
import server from './server';

export interface UserStoreParam {
  name: string;
  login: string;
  password: string;
}

export async function store({ name, login, password }: UserStoreParam): Promise<AxiosResponse<unknown>> {
  return server.post('client/users', {
    name,
    login,
    password,
  });
}
