import { Container, Logo, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

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
        <Input 
          label="Senha"
          placeholder="No mínimo 6 caracteres"
        />
        <Button
          isRed
        >
          <span>Entrar</span>
        </Button>

        <ButtonText
          to='/register'
        >
          <span>Criar conta</span>
        </ButtonText>
      </Form>
    </Container>
  );
}