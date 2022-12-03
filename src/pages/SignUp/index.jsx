import { Container, Logo, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import polygon from '../../assets/polygon.svg';

export function SignUp() {
  return(
    <Container>
      <Logo>
        <img src={polygon} alt="polygon"/>
        <h2>food explorer</h2>
      </Logo>

      <Form>
        <header>
          Crie sua conta
        </header>
        <Input 
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
        />
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
          <span>Criar conta</span>
        </Button>

        <ButtonText
          to="/"
        >
          <span>Já tenho uma conta</span>
        </ButtonText>
      </Form>
    </Container>
  );
}