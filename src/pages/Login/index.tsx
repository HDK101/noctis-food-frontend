import {useForm} from 'react-hook-form';
import {Navigate, useNavigate} from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Form from '../../components/Form';
import Input from '../../components/Input';

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
  const navigate = useNavigate();

  const onSubmit = ({ login, password }: LoginForm) => {
    console.log(login, password);
    navigate('/home');
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
