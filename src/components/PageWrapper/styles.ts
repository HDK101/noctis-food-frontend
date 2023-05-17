import { styled } from 'styled-components';
import theme from '../../theme';

export const Container = styled.main`
  height: calc(100vh - 60px); 
`;

export const Header = styled.header`
  background-color: ${theme.colors.MAIN};  
  height: 60px;
  width: 100vw;
`;

