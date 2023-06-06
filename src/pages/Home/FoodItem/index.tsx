import {useMemo} from 'react';
import {Food} from '../../../types/Food';
import {CartButton, Container, Image, ImageContainer} from './styles';
import { baseURL } from '../../../services/api/server';

export interface FoodItemProps {
  item: Food;
  cart: Food[];
  addToCart: (food: Food) => void;
  removeFromCart: (food: Food) => void;
}

export default function FoodItem({ item, cart, removeFromCart, addToCart }: FoodItemProps) {
  const hasFoodInCart = useMemo(() => cart.find(f => f.id === item.id), [cart]);
  const price = useMemo(() => {
    return `R$ ${(item.price / 100).toFixed(2)}`;
  }, [item.price]);

  const selectedOnClick = hasFoodInCart ? removeFromCart : addToCart;

  return (
    <Container>
      <ImageContainer>
        <Image src={`${baseURL}/images/${item.image}`} />
      </ImageContainer>
      <p>{item.name}</p>
      <p>{price}</p>
      <CartButton onClick={() => selectedOnClick(item)}>
        {hasFoodInCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </CartButton>
    </Container>
  );
}
