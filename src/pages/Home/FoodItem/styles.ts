import { styled } from 'styled-components';
import theme from '../../../theme';

export const Container = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60%;
  overflow: hidden;
  border-radius: 20px;
`;

export const Image = styled.img`
  height: 100%;
`;

export const CartButton = styled.button`
  height: 50px;
  width: 90%;
  border-radius: 8px;
  background-color: ${theme.colors.MAIN};
  color: ${theme.colors.WHITE};
  font-weight: 600;
`;
