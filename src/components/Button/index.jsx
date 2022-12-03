import { Container } from './styles';

export function Button({ children, icon, isRed, to, ...rest}) {
  return(
    <Container
      type="button"
      isRed={isRed}
      to={to}
      {...rest}
    >
      {children}
    </Container>
  );
}
