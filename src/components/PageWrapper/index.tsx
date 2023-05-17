import * as React from 'react';
import { Container, Header } from './styles';

export default function PageWrapper({ children }: { children: React.ReactElement }) {
  return (
    <Container>
      <Header></Header>
      {children}
    </Container>
  );
}
