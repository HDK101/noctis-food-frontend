import {AxiosError} from 'axios';
import {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Navigate, useNavigate} from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Form from '../../components/Form';
import Input from '../../components/Input';
import {UserContext} from '../../contexts/UserContext';
import * as session from '../../services/api/session';
import { ErrorResponse } from '../../types/ErrorResponse';
import alerts from '../../libs/alerts';

interface LoginForm {
  login: string;
  password: string;
}

export default function Login() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>();
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async({ login, password }: LoginForm) => {
    try {
      const { data } = await session.store(login, password);
      userContext.setToken?.(data.token);
      navigate('/home');
    } catch (err: unknown) {
      if (err instanceof AxiosError<ErrorResponse>) {
        alerts.fire({
          title: 'Credenciais inválidas',
          showConfirmButton: false,
          timer: 2000,
          icon: 'error',
        });
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input<LoginForm> control={control} id='login' label='Login' />
        <Input<LoginForm> control={control} id='password' label='Senha' />
        <Button>Enviar</Button>
      </Form>
    </Container>
  );
}
