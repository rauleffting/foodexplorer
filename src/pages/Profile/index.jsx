import { useState } from 'react';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/avatar_placeholder.png';

import { Avatar, Container, Content, Form } from './styles';

import { FiCamera } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonBack } from '../../components/ButtonBack';
import { Footer } from '../../components/Footer';

import { useNavigate } from 'react-router-dom';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOld, setPasswordOld] = useState('');
  const [passwordNew, setPasswordNew] = useState('');

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigation = useNavigate();

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar() {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return(
    <Container>
      <Header />
      <ButtonBack />
      <Content>
        <div className="content-wrapper">
          <Form>
            <header>
              <span>Detalhes da conta</span>
            </header>
            <Avatar>
              <img 
                src={avatar} 
                alt="avatar" 
              />

              <label htmlFor="avatar">
                <FiCamera />

                <input 
                  id="avatar"
                  type="file"
                  onChange={handleChangeAvatar}
                />
              </label>
            </Avatar>

            <div className="input-wrapper">
              <Input 
                label="Nome"
                type="text"
                placeholder={user.name}
                value={name}
                onChange={event => setName(event.target.value)}
              />

              <Input 
                label="E-mail"
                type="text"
                placeholder={user.email}
                value={email}
                onChange={event => setEmail(event.target.value)}
              />

              <Input 
                label="Senha atual"
                type="password"
                placeholder="Digite sua senha"
                onChange={event => setPasswordOld(event.target.value)}
              />

              <Input 
                label="Nova senha"
                type="password"
                placeholder="Digte sua nova senha"
                onChange={event => setPasswordNew(event.target.value)}
              />
            </div>


            <Button onClick={handleUpdate}>
              <span>Salvar</span>
            </Button>
          </Form>

          <Button
            isRed
            onClick={() => navigation("/requests")}
          >
              <span>Histórico de Pedidos</span>
          </Button>
        </div>

        <Footer />
      </Content>

    </Container>
  );
}