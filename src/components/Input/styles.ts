import { styled } from 'styled-components';
import theme from '../../theme';

export const InputContainer = styled.div`
  border-radius: 10px;
  background-color: ${theme.colors.WHITE};
  height: 30px;
  border-radius: 20px;
  border: solid #a0a0a0;
  border-width: 2px;
  display: flex;
  justify-content: center;
`;

export const InputStyle = styled.input`
  width: 90%;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const InputError = styled.p`
  color: ${theme.colors.MAIN};
`;
