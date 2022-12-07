import { Container } from './styles';

import { RiAddCircleLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function CardAdd({ data }){
  const navigation = useNavigate();

  const { user } = useAuth();

  function handleAddFood() {
    navigation("/addfood")
  }

  return(
    <Container
      onClick={handleAddFood}
    >
      <span>Criar novo prato</span>
      <RiAddCircleLine />
    </Container>
  );
}