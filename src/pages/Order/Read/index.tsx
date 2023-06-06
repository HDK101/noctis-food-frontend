import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom';
import {Container, Food, FoodImage, FoodName} from './styles';
import * as order from '../../../services/api/order';
import {baseURL} from '../../../services/api/server';

export default function Read() {
  const { id } = useParams();
  const { data } = useQuery(['order', id], () => order.read(Number(id)).then(res => res.data));

  return (
    <Container>
      {data?.FoodOrders?.map(food =>
        <Food key={food.id}>
          <FoodImage src={`${baseURL}/images/${food.image}`}></FoodImage>
          <FoodName>{food.name}</FoodName>
          <p>R$ {(food.price / 100).toFixed(2)}</p>
        </Food>
      )}
    </Container>
  );
}
