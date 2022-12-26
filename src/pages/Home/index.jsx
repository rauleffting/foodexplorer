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
        const response = await api.get(`/foods?name=${search}`);
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
              <h2>Unimaginable flavors</h2>
              <span>Feel the care of the preparation with selected ingredients</span>
            </div>
          </div> 
        </FrontCover>
        <Section title="Main course">
          {
            (user.is_admin == 1) && <CardAdd />
          }
          {
            foods.filter(food => food.category == "main_course").map( food => (
              <Card 
                key={String(food.id)}
                data={food}
              />
            ))
          }
        </Section>

        <Section title="Desserts">
          {
            (user.is_admin == 1) && <CardAdd />
          }
          {
            foods.filter(food => food.category == "dessert").map( food => (
              <Card 
                key={String(food.id)}
                data={food}
              />
            ))
          }
        </Section>
        <Section title="Drinks">
          {
            (user.is_admin == 1) && <CardAdd />
          }
          {
            foods.filter(food => food.category == "drink").map( food => (
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