import * as React from 'react';
import { Header, Nav, NavItem } from './styles';

export default function PageWrapper({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Header>
        <Nav>
          <NavItem to="/lol">Página Principal</NavItem> 
          <NavItem to="/lol">Página Principal</NavItem> 
          <NavItem to="/lol">Página Principal</NavItem> 
        </Nav>
      </Header>
      {children}
    </>
  );
}
