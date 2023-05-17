import * as React from 'react';
import { Form as FormStyle } from './styles';

export default function Form({ children }: { children: React.ReactElement}) {
  return (
    <FormStyle>{children}</FormStyle>
  );
}
