import {useState} from 'react';
import {useQuery} from 'react-query';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import * as food from '../../services/api/food';
import * as order from '../../services/api/order';
import {Food} from '../../types/Food';
import FoodItem from './FoodItem';
import {BottomContainer, Container, OrderFood, OrderFoodImage, OrderFoodImageContainer, OrderFoodsContainer, TopContainer} from './styles';
import {baseURL} from '../../services/api/server';
import XButton from '../../components/XButton';

export default function Home() {
  const { isLoading, isError, data } = useQuery('foods', () => food.all().then(res => res.data));
  const navigate = useNavigate();
  const [foods, setFoods] = useState<Food[]>([]);
  const [cartSelected, setCartSelected] = useState<boolean>(false);

  const addToCart = (food: Food) => {
    if (!foods.find(f => f.id === food.id)) {
      setFoods([...foods, food]);
    }
  };

  const removeFromCart = (food: Food) => {
    setFoods(foods.filter(f => f.id !== food.id));
  };

  const finishOrder = async() => {
    const { data: orderData } = await order.store({
      foods,
    });

    navigate(`/order/${orderData.id}`);
  };

  return (
    <>
      <div
        style={{
          display: cartSelected ? 'flex' : 'none',
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            boxSizing: 'border-box',
            width: '400px',
            maxHeight: 'calc(100vh - 60px)',
            backgroundColor: 'white',
            pointerEvents: 'all',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
          }}
        >
          <XButton 
            onClick={() => setCartSelected(false)}
          />
          <OrderFoodsContainer>
            {foods.map(food => 
              <OrderFood key={food.id}>
                <OrderFoodImageContainer>
                  <OrderFoodImage src={`${baseURL}/images/${food.image}`} />
                </OrderFoodImageContainer>
                <Button
                  onClick={() => removeFromCart(food)}
                >
                  Remover do carrinho
                </Button>
              </OrderFood>
            )}
          </OrderFoodsContainer>
          <Button 
            onClick={finishOrder}
          >Finalizar pedido</Button>
        </div>
      </div>
      <Container>
        <TopContainer>
          {isLoading ? <Loading /> : null}
          {(!isLoading && !isError) ? data?.map(foodItem => 
            <FoodItem
              cart={foods}
              key={foodItem.id} 
              item={foodItem}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ) : null}
        </TopContainer>
        <BottomContainer>
          <Button
            style={{
              height: '100px',
            }}
            onClick={() => setCartSelected(true)}
          >
            Finalizar pedido
          </Button>
        </BottomContainer>
      </Container>
    </>
  );
}
