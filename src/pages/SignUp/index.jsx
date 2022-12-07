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
      alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
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
          Crie sua conta
        </header>
        <Input 
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          onChange={event => setName(event.target.value)}
        />
        <Input 
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={event => setEmail(event.target.value)}
        />
        <Input 
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={event => setPassword(event.target.value)}
        />
        <Button
          isRed
          onClick={handleSignUp}
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