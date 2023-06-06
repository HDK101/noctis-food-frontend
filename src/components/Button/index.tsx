import * as React from 'react';
import { ButtonStyle } from './styles';

export default function Button({ children, ...rest }: React.HTMLProps<HTMLButtonElement>) {
  return (
    <ButtonStyle {...rest}>{children}</ButtonStyle>
  );
}
