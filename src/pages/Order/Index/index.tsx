import {useQuery} from 'react-query';
import {Container, Order, OrderName} from './styles';
import * as order from '../../../services/api/order';

export default function Index() {
  const { data } = useQuery('orders', () => order.all().then(res => res.data));

  return (
    <Container>
      {data?.map(order => 
        <Order key={order.id}>
          <OrderName>Pedido {order.id}</OrderName>
        </Order>
      )}
    </Container>
  );
}
