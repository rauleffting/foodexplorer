import { useState } from 'react';

import { Avatar, Container, Content, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonBack } from '../../components/ButtonBack';
import { Footer } from '../../components/Footer';

import avatarPlaceHolder from '../../assets/avatar_placeholder.png';

import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

export function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return(
    <Container>
      <Header />
      <ButtonBack 
        to="/"
      />
      <Content>
        <div className="content-wrapper">
          <Form>
            <header>
              <span>Detalhes da conta</span>
            </header>
            <Avatar>
              <img 
                src={avatarPlaceHolder} 
                alt="avatar" 
              />

              <label htmlFor="avatar">
                <FiCamera />

                <input 
                  id="avatar"
                  type="file"
                  onChange={() => {}}
                />
              </label>
            </Avatar>

            <div className="input-wrapper">
              <Input 
                label="Nome"
                placeholder="Maria da Silva"
                type="text"
                value={name}
                onChange={() => {}}
              />

              <Input 
                label="E-mail"
                placeholder="mariadasilva@email.com"
                type="text"
                value={email}
                onChange={() => {}}
              />

              <Input 
                label="Senha atual"
                placeholder="********"
                type="password"
                onChange={() => {}}
              />

              <Input 
                label="Nova senha"
                placeholder="********"
                type="password"
                onChange={() => {}}
              />
            </div>


            <Button>
              <span>Salvar</span>
            </Button>
          </Form>

          <Button
            isRed
            to="/requests"
          >
              <span>Histórico de Pedidos</span>
          </Button>
        </div>

        <Footer />
      </Content>

    </Container>
  );
}