import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import { Container, Logo, Search, IconButton, Sidebar } from './styles';

import { ButtonText } from '../ButtonText';
import { Button } from '../Button';

import { RiSearchLine, RiUser3Line, RiLogoutBoxRLine, RiMenuFill } from "react-icons/ri";

import polygon from '../../assets/polygon.svg';
import receipt from '../../assets/receipt.svg';

export function Header({search}){
  const { signOut } = useAuth();
  const navigation = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);

  function handleProfile() {
    navigation("/profile");
  }

  function handleSignOut() {
    alert("Deseja mesmo sair?");
    signOut();
    navigation("/");
  }

  function handleBackHome() {
    navigation("/")
  }

  function handleSidebar() {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true);
  }

  return(
    <Container>
      <div className="desktop">
      <Logo
        onClick={handleBackHome}
      >
        <img src={polygon} alt="logo" />
        <span>
          food explorer
        </span>
      </Logo>
      <ButtonText
        isMyFavorites
      >
          Meus favoritos
      </ButtonText>
      
      <Search>
        <RiSearchLine />
        <input 
          type="text" 
          placeholder="Busque pelas opções de pratos" 
          onChange={event => search(event.target.value)}
        />
      </Search>

      <Button
        isRed
      >
        <img src={receipt} alt="receipt" />
        <span>Meu pedido (0)</span>
      </Button>

      <IconButton
        onClick={handleProfile}
      >
        <RiUser3Line />
      </IconButton>

      <IconButton
        onClick={handleSignOut}
      >
        <RiLogoutBoxRLine />
      </IconButton>
      </div>

      <div className="mobile">
        <Logo
          onClick={handleBackHome}
        >
          <img src={polygon} alt="logo" />
          <span>
            food explorer
          </span>
        </Logo>
        <Search>
          <RiSearchLine />
          <input 
            type="text" 
            placeholder="Pesquisar..." 
            onChange={event => search(event.target.value)}
          />
        </Search>
        
        <IconButton
          onClick={handleSidebar}
        >
          <RiMenuFill/>
        </IconButton>

        <Sidebar showSidebar={showSidebar}>
          <ul>
            <li>
              <a href="">Meus favoritos</a>
            </li>
            <li>
              <a href="">Meu pedido (0)</a>
            </li>
            <li>
              <a onClick={handleProfile}>Perfil</a>
            </li>
            <li>
              <a onClick={handleSignOut}>Sair</a>
            </li>
          </ul>
        </Sidebar>
        
      </div>

    </Container>
  );
}