import {Link} from 'react-router-dom';
import { styled } from 'styled-components';
import theme from '../../theme';

export const Header = styled.header`
  background-color: ${theme.colors.MAIN};  
  height: 60px;
  width: 100vw;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  width: 100vw;
`;

export const NavGroup = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavItem = styled(Link)`
  color: ${theme.colors.WHITE};
  transition: padding-bottom 0.5s;

  &:hover {
    color: white;
    padding-bottom: 10px;
  }
`;
