import { Container, Logo, Search, IconButton } from './styles';

import { ButtonText } from '../ButtonText';
import { Button } from '../Button';

import { RiSearchLine, RiUser3Line, RiLogoutBoxRLine } from "react-icons/ri";

import polygon from '../../assets/polygon.svg';
import receipt from '../../assets/receipt.svg';

export function Header(){

  function handleSignOut() {
    alert('Deseja mesmo sair?')
  }

  return(
    <Container>
      <Logo
        to="/"
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
        <input type="text" placeholder="Busque pelas opções de pratos" />
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