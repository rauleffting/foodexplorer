import { Container } from './styles';

import { IoIosArrowBack } from 'react-icons/io';

import { useNavigate } from 'react-router-dom';

export function ButtonBack({ to }) {
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  return(
    <Container
      onClick={handleBack}
    >
      <IoIosArrowBack />
      <span>back</span>
    </Container>
  );
}
