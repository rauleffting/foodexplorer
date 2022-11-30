import { Container, Content, FrontCover } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

import front_cover from '../../assets/front_cover.png';

export function Home(){
  return(
    <Container>
      <Header />
      
      <Content className="content">
        <FrontCover>
          <img src={front_cover} alt="cover" />
          <div className="frontcover-background">
            <div>
              <h2>Sabores inigualáveis</h2>
              <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
            </div>
          </div> 
        </FrontCover>
        <Section title="Pratos principais" />
        <Section title="Sobremesas" />
        <Section title="Bebidas" />
        <Footer />
      </Content>
    </Container>
  );
}