import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Container, Content } from './styles';

import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { ButtonBack } from '../../components/ButtonBack';
import { IngredientCard } from '../../components/IngredientCard';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import receipt from '../../assets/receipt.svg';

export function Details(){
  const [quantity, setQuantity] = useState(1)

  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const pictureUrl = data && `${api.defaults.baseURL}/files/${data.picture}`;
  
  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }

    fetchFood();
  }, []);
  
  function handleBack(){
    navigate(-1);
  }

  function handleSum() {
    setQuantity(quantity + 1);
  }

  function handleSub() {
    if(quantity > 0) {
      setQuantity(quantity - 1);
    }
  }


  return(
    <Container>
      <Header />

      <Content className="content">
        <ButtonBack 
          onClick={handleBack}
        />

        <div className="details-wrapper">
          <img src={pictureUrl} alt="food picture"/>

          <div className="food-details">
            <h2>{data && data.name}</h2>
            <span>{data && data.description}</span>
            <div className="ingredients">
              {
                data && data.ingredients.map(ingredient => (
                  <IngredientCard 
                  key={String(ingredient.id)}
                  name={ingredient.name}
                  />
                ))
              }
            </div>

            <div className="controls">
              <h3>$ {data && data.price}</h3>

              <button 
                className="buttons-minus-plus"
                onClick={handleSub}
              >
                <RiSubtractFill />
              </button>
              
              <span>{quantity}</span>

              <button 
                className="buttons-minus-plus"
                onClick={handleSum}  
              >
                <RiAddFill />
              </button>

              <Button
                isRed
                className="button-include"
              >
                <img src={receipt} alt="receipt" />
                <span>Include</span>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </Content>
    </Container>
  );
}