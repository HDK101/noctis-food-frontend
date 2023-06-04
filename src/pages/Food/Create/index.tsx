import Form from '../../../components/Form';
import Input from '../../../components/Input';
import {Container} from './styles';

export default function Index() {
  return (
    <Container>
      <Form>
        <Input name='name'/>
        <Input name='price'/>
      </Form>
    </Container>
  );
}
