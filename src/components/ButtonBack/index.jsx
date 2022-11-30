import { Container } from './styles';

import { IoIosArrowBack } from 'react-icons/io';

export function ButtonBack() {
  return(
    <Container>
      <IoIosArrowBack />
      <span>voltar</span>
    </Container>
  );
}
