import {useMemo} from "react";
import {Food} from "../../../types/Food";
import {CartButton, Container, Image, ImageContainer} from "./styles";

export interface FoodItemProps {
  item: Food;
  cart: Food[];
  addToCart: (food: Food) => void;
  removeFromCart: (food: Food) => void;
}

export default function FoodItem({ item, cart, removeFromCart, addToCart }: FoodItemProps) {
  const hasFoodInCart = useMemo(() => cart.find(f => f.id === item.id), [cart]);

  const selectedOnClick = hasFoodInCart ? removeFromCart : addToCart;

  return (
    <Container>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <p>{item.name}</p>
      <CartButton onClick={() => selectedOnClick(item)}>
        {hasFoodInCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </CartButton>
    </Container>
  );
}
