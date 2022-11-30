import { Container, Logo, Form } from './styles';

import { Input } from '../../components/Input';

import polygon from '../../assets/polygon.svg';

export function SignIn() {
  return(
    <Container>
      <Logo>
        <img src={polygon} alt="polygon"/>
        <h2>food explorer</h2>
      </Logo>

      <Form>
        <header>
          Faça login
        </header>
        <Input 
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
      </Form>
    </Container>
  );
}