import * as React from 'react';
import { Header, Nav, NavGroup, NavItem } from './styles';

export default function PageWrapper({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Header>
        <Nav>
          <NavGroup>
            <NavItem to="/home">Página Principal</NavItem> 
            <NavItem to="/lol">Página Principal</NavItem> 
          </NavGroup>
          <NavGroup>
            <NavItem to="/lol">Página Principal</NavItem> 
          </NavGroup>
        </Nav>
      </Header>
      {children}
    </>
  );
}
