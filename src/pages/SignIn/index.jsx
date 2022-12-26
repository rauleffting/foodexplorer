import { useState } from 'react';

import { Container, Logo, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import polygon from '../../assets/polygon.svg';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return(
    <Container>
      <Logo>
        <img src={polygon} alt="polygon"/>
        <h2>food explorer</h2>
      </Logo>

      <Form>
        <header>
          Sign in
        </header>
        <Input 
          label="Email"
          type="text"
          placeholder="Example: example@example.com.br"
          onChange={event => setEmail(event.target.value)}
        />
        <Input 
          label="Password"
          type="password"
          placeholder="At least 6 characters"
          onChange={event => setPassword(event.target.value)}
        />
        <Button
          isRed
          onClick={handleSignIn}
        >
          <span>Log in</span>
        </Button>

        <ButtonText
          to='/register'
        >
          <span>Sign up</span>
        </ButtonText>
      </Form>
    </Container>
  );
}