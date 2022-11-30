import { Container } from './styles';

export function ButtonText({ children, isMyFavorites, ...rest }){
  return(
    <Container
      isMyFavorites={isMyFavorites}
    >
      <span>
        {children}
      </span>
    </Container>
  );
}