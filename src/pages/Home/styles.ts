import { styled } from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 60px);
  box-sizing: border-box;
`;

export const TopContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
  height: calc(80vh - 60px);
  max-height: calc(80vh - 60px);
  box-sizing: border-box;
  overflow-y: scroll;
  justify-content: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(20vh);
`;

export const OrderFoodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const OrderFood = styled.div`
  height: 280px;
  display: flex;
  gap: 10px;
  padding: 10px 0;
  flex-direction: column;
`;

export const OrderFoodImageContainer = styled.div`
  height: 280px;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderFoodImage = styled.img`
  height: 180px;
  width: 320px;
`;
