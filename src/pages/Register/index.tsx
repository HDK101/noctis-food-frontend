import {AxiosError} from 'axios';
import {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Navigate, useNavigate} from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Form from '../../components/Form';
import Input from '../../components/Input';
import {UserContext} from '../../contexts/UserContext';
import * as user from '../../services/api/user';
import { ErrorResponse } from '../../types/ErrorResponse';
import alerts from '../../libs/alerts';

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<user.UserStoreParam>();
  const navigate = useNavigate();

  const onSubmit = async(formData: user.UserStoreParam) => {
    try {
      await user.store(formData);
      navigate('/');
    } catch (err: unknown) {
      if (err instanceof AxiosError<ErrorResponse>) {
        alerts.fire({
          title: 'Dados inválidos',
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
        <Input<user.UserStoreParam> 
          rules={{
            required: 'Campo obrigatório',
          }}
          control={control} id='name' label='Nome' />
        <Input<user.UserStoreParam> 
          rules={{
            required: 'Campo obrigatório',
          }}
          control={control} id='login' label='Login' />
        <Input<user.UserStoreParam> 
          rules={{
            required: 'Campo obrigatório',
          }}
          type='password'
          error={errors.password}
          control={control} id='password' label='Senha' />
        <Button>Enviar</Button>
      </Form>
    </Container>
  );
}
