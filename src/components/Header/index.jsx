import { Container, Logo, Search, IconButton } from './styles';

import { ButtonText } from '../ButtonText';
import { Button } from '../Button';

import { RiSearchLine, RiUser3Line, RiLogoutBoxRLine } from "react-icons/ri";

import polygon from '../../assets/polygon.svg';
import receipt from '../../assets/receipt.svg';

import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function Header({search}){
  const { signOut } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    alert("Deseja mesmo sair?");
    signOut();
    navigation(-1);
  }

  function handleBackHome() {
    navigation("/")
  }

  return(
    <Container>
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
        to="/profile"
      >
        <RiUser3Line />
      </IconButton>

      <IconButton
        onClick={handleSignOut}
      >
        <RiLogoutBoxRLine />
      </IconButton>
    </Container>
  );
}