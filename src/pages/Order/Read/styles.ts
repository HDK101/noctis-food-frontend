import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content:center;
  align-items: center;
`;

export const Food = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 240px;
  width: 240px;
  padding: 20px;
`;

export const FoodName = styled.h1`
  font-size: 18px;
`;

export const FoodImageContainer = styled.div`
  height: 180px;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FoodImage = styled.img`
  height: 180px;
  width: 240px;
`;
