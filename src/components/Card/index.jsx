import { useState } from 'react';

import { Container } from './styles';

import { RiEditBoxLine, RiHeartLine, RiArrowDropRightLine, RiAddFill, RiSubtractFill } from 'react-icons/ri';
import parma from '../../assets/parma.png';

import { Button } from '../Button';

export function Card({ data }){

  const [quantity, setQuantity] = useState(1)

  return(
    <Container>
      <div className="top-controls">
        <RiEditBoxLine />
        <RiHeartLine />
      </div>
      
      <img src={parma} alt="food picture" />

      <h2>{data.name}</h2>
      
      <span>{data.description}</span>
      <h3>R$ {data.price}</h3>

      <div className="bottom-controls">
        <button className="quantity-buttons">
          <RiSubtractFill />
        </button>
        
        <span>{quantity}</span>

        <button className="quantity-buttons">
          <RiAddFill />
        </button>
        
        <Button isRed>
          Incluir
        </Button>
      </div>
    </Container>
  );
}