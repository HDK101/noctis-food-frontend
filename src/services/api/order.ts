import {AxiosResponse} from 'axios';
import {Food} from '../../types/Food';
import {Order} from '../../types/Order';
import server from './server';

export async function all(): Promise<AxiosResponse<Order[]>> {
  return server.get('client/orders');
}

export async function store({
  foods
}: {
  foods: Food[],
}): Promise<AxiosResponse<Order[]>> {
  return server.post('client/orders', {
    foods,
  });
}
