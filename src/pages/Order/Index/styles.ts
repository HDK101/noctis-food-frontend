import { styled } from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content:center;
  align-items: center;
`;

export const Order = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 240px;
  width: 240px;
  padding: 20px;
`;

export const OrderName = styled.h1`
  font-size: 24px;
`;
