import { useState } from 'react';
import { Container, Content } from './styles';

import { IoIosArrowBack } from 'react-icons/io';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { IngredientCard } from '../../components/IngredientCard';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import parma from '../../assets/parma.png';
import receipt from '../../assets/receipt.svg';

export function Details(){
  const { quantity, setQuantity } = useState(1);

  return(
    <Container>
      <Header />

      <Content className="content">
        <button className="button-back">
          <IoIosArrowBack />
          <span>voltar</span>
        </button>

        <div className="details-wrapper">
          <img src={parma} alt="food picture"/>

          <div className="food-details">
            <h2>Torradas de Parma</h2>
            <span>Presunto de parma e rúcula em um pão com fermentação natural.</span>
            <div className="ingredients">
              <IngredientCard
              name="pão"
              /> 
              <IngredientCard
              name="presunto"
              /> 
              <IngredientCard
              name="rúcula"
              /> 
            </div>

            <div className="controls">
              <h3>R$ 25.97</h3>

              <button className="buttons-minus-plus">
                <RiSubtractFill />
              </button>
              
              <span>01</span>

              <button className="buttons-minus-plus">
                <RiAddFill />
              </button>

              <Button
                isRed
              >
                <img src={receipt} alt="receipt" />
                <span>Incluir</span>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </Content>
    </Container>
  );
}