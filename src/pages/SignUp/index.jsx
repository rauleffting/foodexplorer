import { useState } from 'react';
import { Container, Logo, Form } from './styles';

import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import polygon from '../../assets/polygon.svg';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password) {
      alert("Fill in all fields!");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("User successfully registered!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Unable to register.");
      }
    })
  }

  return(
    <Container>
      <Logo>
        <img src={polygon} alt="polygon"/>
        <h2>food explorer</h2>
      </Logo>

      <Form>
        <header>
          Create your account
        </header>
        <Input 
          label="Your name"
          placeholder="Example: John Smith"
          onChange={event => setName(event.target.value)}
        />
        <Input 
          label="Email"
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
          onClick={handleSignUp}
        >
          <span>Create account</span>
        </Button>

        <ButtonText
          to="/"
        >
          <span>Already have an account?</span>
        </ButtonText>
      </Form>
    </Container>
  );
}