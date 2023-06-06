import {HTMLProps} from 'react';
import {Container, CrossImage} from './styles';

import cross from '../../assets/cross.svg';

export default function XButton({ ...rest }: HTMLProps<HTMLButtonElement>) {
  return <Container {...rest}>
    <CrossImage 
      src={cross}
    />
  </Container>;
}
