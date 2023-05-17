import * as React from 'react';
import { Form as FormStyle } from './styles';

export default function Form({ children, ...rest }: React.HTMLProps<HTMLFormElement> & { children: React.ReactElement | React.ReactElement[]}) {
  return (
    <FormStyle {...rest}>{children}</FormStyle>
  );
}
