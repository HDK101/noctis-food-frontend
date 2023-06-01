import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`;

export const OrderFoodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const OrderFood = styled.div`
  height: 240px;
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px 0;
  flex-direction: column;
`;

export const OrderFoodImageContainer = styled.div`
  height: 120px;
  width: 120px;
  background-color: blue;
`;
