import { styled } from "styled-components";
import theme from "../../../theme";

export const Container = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
`;

export const ImageContainer = styled.div`
  width: 90%;
  height: 60%;
  background-color: red;
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
