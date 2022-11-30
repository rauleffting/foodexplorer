import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Requests(){
  return(
    <Container>
      <Header />

      <Content>
        <h2>
          Pedidos
        </h2>
        <Footer />
      </Content>
    </Container>
  );
}