import {useForm} from 'react-hook-form';
import Form from '../../components/Form';

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Form>
      <p>hello</p>
    </Form>
  );
}
