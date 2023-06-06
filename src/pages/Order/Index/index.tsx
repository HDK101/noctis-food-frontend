import {useQuery} from 'react-query';
import {Container, Order, OrderName} from './styles';
import * as order from '../../../services/api/order';
import Button from '../../../components/Button';
import {useNavigate} from 'react-router-dom';
import {OrderType} from '../../../types/Order';

export default function Index() {
  const { data } = useQuery('orders', () => order.all().then(res => res.data));
  const navigate = useNavigate();

  const onEdit = (order: OrderType) => {
    navigate(`/order/${order.id}`, {
      state: {
        foods: order.FoodOrders,
      },
    });
  };

  return (
    <Container>
      {data?.map(order => 
        <Order key={order.id}>
          <OrderName>Pedido {order.id}</OrderName>
          <Button onClick={() => onEdit(order)}>Editar</Button>
        </Order>
      )}
    </Container>
  );
}
