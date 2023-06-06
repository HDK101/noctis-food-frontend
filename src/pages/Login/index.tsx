import {AxiosError} from 'axios';
import {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
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
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      login: '',
      password: '',
    },
  });
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
        <Input<LoginForm> 
          rules={{
            required: 'Campo obrigatório',
          }}
          control={control} id='login' label='Login' error={errors.login} />
        <Input<LoginForm> 
          rules={{
            required: 'Campo obrigatório',
          }}
          type="password"
          control={control} id='password' label='Senha' error={errors.password} />
        <Button>Enviar</Button>
        <Link to="/register">Registrar</Link>
      </Form>
    </Container>
  );
}
