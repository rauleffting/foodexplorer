import { Container } from './styles';

import { IoIosArrowBack } from 'react-icons/io';

export function ButtonBack({ to }) {
  return(
    <Container
      to={to}
    >
      <IoIosArrowBack />
      <span>voltar</span>
    </Container>
  );
}
