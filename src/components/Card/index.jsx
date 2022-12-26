import { useState } from 'react';

import { Container, ButtonFavorite, ButtonEdit, LinkSection } from './styles';

import { RiEditBoxLine, RiHeartFill, RiHeartLine, RiArrowDropRightLine, RiAddFill, RiSubtractFill } from 'react-icons/ri';
import parma from '../../assets/parma.png';

import { Button } from '../Button';

import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function Card({ data }){
  const navigation = useNavigate();

  const { user, foods } = useAuth();

  const pictureUrl = `${api.defaults.baseURL}/files/${data.picture}`;

  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1)

  function handleFavorite() {
    if(!favorite) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }

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
        <ButtonFavorite
          onClick={handleFavorite}
          favorite={favorite}
        >
          {
            favorite ? <RiHeartFill /> : <RiHeartLine />
          }
        </ButtonFavorite>
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
          <span>Include</span>
        </Button>
      </div>
    </Container>
  );
}