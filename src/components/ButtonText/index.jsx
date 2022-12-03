import { Container } from './styles';

export function ButtonText({ to, children, isMyFavorites, ...rest }){
  return(
    <Container
      to={to}
      isMyFavorites={isMyFavorites}
    >
      <span>
        {children}
      </span>
    </Container>
  );
}