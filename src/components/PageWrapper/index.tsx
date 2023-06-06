import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../../contexts/UserContext';
import { Header, Nav, NavGroup, NavItem } from './styles';

export default function PageWrapper({ children }: { children: React.ReactElement }) {
  const navigate = useNavigate();
  const { signed, signOut } = React.useContext(UserContext);
  const mainTo = signed ? '/home' : '/';
  const mainText = signed ? 'Página Principal' : 'Login';

  return (
    <>
      <Header>
        <Nav>
          <NavGroup>
            <NavItem to={mainTo}>{mainText}</NavItem> 
            {signed ? (
              <>
                <NavItem to="/order">Pedidos</NavItem> 
                <NavItem onClick={() => {
                  signOut();
                  navigate('/');
                }}>Sair</NavItem> 
              </>
            )
              : null}
          </NavGroup>
        </Nav>
      </Header>
      {children}
    </>
  );
}
