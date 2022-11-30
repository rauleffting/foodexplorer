import { Container, Logo, Search, SignOut } from './styles';

import { ButtonText } from '../ButtonText';
import { Button } from '../Button';

import { RiSearchLine, RiLogoutBoxRLine } from "react-icons/ri";

import polygon from '../../assets/polygon.svg';
import receipt from '../../assets/receipt.svg';

export function Header(){

  return(
    <Container>
      <Logo>
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

      <SignOut>
        <RiLogoutBoxRLine />
      </SignOut>
    </Container>
  );
}