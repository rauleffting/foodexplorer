import { useState } from 'react';

import { Container, ButtonEdit, LinkSection } from './styles';

import { RiEditBoxLine, RiHeartLine, RiArrowDropRightLine, RiAddFill, RiSubtractFill } from 'react-icons/ri';
import parma from '../../assets/parma.png';

import { Button } from '../Button';

import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function Card({ data }){
  const navigation = useNavigate();

  const { user, foods } = useAuth();

  const pictureUrl = `${api.defaults.baseURL}/files/${data.picture}`;

  const [quantity, setQuantity] = useState(1)

  function handleEditFood() {
    navigation(`/editfood/${data.id}`);
  }

  function handleFoodDetails() {
    navigation(`/details/${data.id}`);
  }

  function handleSum() {
    setQuantity(quantity+1);
  }

  function handleSub() {
    if(quantity > 0) {
      setQuantity(quantity-1);
    }
  }

  return(
    <Container>
      <div className="top-controls">
        <RiHeartLine />
        {
          (user.is_admin == 1) && 
            <ButtonEdit
              onClick={handleEditFood}
            >
              <RiEditBoxLine /> 
            </ButtonEdit>
        }
      </div>
      <LinkSection
        onClick={handleFoodDetails}
      >
      <img src={pictureUrl} alt="food picture" />

      <h2>{data.name}</h2>
      <span>{data.description}</span>
      </LinkSection>

      <h3>R$ {data.price}</h3>

      <div className="bottom-controls">
        <button 
          className="quantity-buttons"
          onClick={handleSub}
        >
          <RiSubtractFill />
        </button>
        
        <span>{quantity}</span>

        <button 
          className="quantity-buttons"
          onClick={handleSum}
        >
          <RiAddFill />
        </button>
        
        <Button isRed>
          <span>Incluir</span>
        </Button>
      </div>
    </Container>
  );
}