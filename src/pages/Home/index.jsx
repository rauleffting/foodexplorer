import { useState, useEffect } from 'react';

import { Container, Content, FrontCover } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

import front_cover from '../../assets/front_cover.png';

import { CardAdd } from '../../components/CardAdd';
import { Card } from '../../components/Card';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Home(){
  const { user } = useAuth();

  const [foods, setFoods] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
      async function fetchFoods() {
        const response = await api.get(`/foods?name=${search}&ingredients=${search}`);
        setFoods(response.data);
  }

  fetchFoods();
  }, [search])

  return(
    <Container>
      <Header search={setSearch}/>
      
      <Content className="desktop-content">
        <FrontCover>
          <img src={front_cover} alt="cover" />
          <div className="frontcover-background">
            <div>
              <h2>Sabores inigualáveis</h2>
              <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
            </div>
          </div> 
        </FrontCover>
        <Section title="Pratos principais">
          {
            (user.is_admin == 1) && <CardAdd />
          }
          {
            foods.filter(food => food.category == "prato_principal").map( food => (
              <Card 
                key={String(food.id)}
                data={food}
              />
            ))
          }
        </Section>

        <Section title="Sobremesas">
          {
            (user.is_admin == 1) && <CardAdd />
          }
          {
            foods.filter(food => food.category == "sobremesa").map( food => (
              <Card 
                key={String(food.id)}
                data={food}
              />
            ))
          }
        </Section>
        <Section title="Bebidas">
          {
            (user.is_admin == 1) && <CardAdd />
          }
          {
            foods.filter(food => food.category == "bebida").map( food => (
              <Card 
                key={String(food.id)}
                data={food}
              />
            ))
          }
        </Section>
        <Footer />
      </Content>
    </Container>
  );
}