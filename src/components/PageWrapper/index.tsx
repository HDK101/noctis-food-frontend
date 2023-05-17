import * as React from 'react';
import { Header } from './styles';

export default function PageWrapper({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
