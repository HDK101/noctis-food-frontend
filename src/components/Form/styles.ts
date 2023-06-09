import { styled } from 'styled-components';
import theme from '../../theme';

export const Form = styled.form`
  background-color: ${theme.colors.WHITE};
  padding: 25px;
  max-width: 500px;
  min-width: 300px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
