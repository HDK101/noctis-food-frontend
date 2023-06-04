import {Container, Food} from './styles';

export default function Read() {
  const foods = [{ id: 1 }];

  return (
    <Container>
      {foods.map(food =>
        <Food key={food.id}></Food>
      )}
    </Container>
  );
}
