import { Container } from './styles';

export function Button({ children, icon, isRed, ...rest}) {
  return(
    <Container
      type="button"
      isRed={isRed}
      {...rest}
    >
      {children}
    </Container>
  );
}
