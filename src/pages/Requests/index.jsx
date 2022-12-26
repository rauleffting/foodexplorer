import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Requests(){
  return(
    <Container>
      <Header />
      <Content className="content">
        <h2>
          Requests
        </h2>

        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Code</th>
              <th>Details</th>
              <th>Date and time</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="status">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="4" transform="matrix(1 0 0 -1 4.46118 4.57812)" fill="#AB222E"/>
              </svg>
                Pending
              </td>
              <td class="code">00000004</td>
              <td class="details">1 x Radish Salad, 1 x Parma Toast, 1 x Cinnamon tea, 1 x Suco de Maracujá</td>
              <td class="date-time">05/20 at 6:00 pm</td>
            </tr>

            <tr>
              <td class="status">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="4" transform="matrix(1 0 0 -1 4.46118 4.57812)" fill="#FBA94C"/>
              </svg>
                Preparing
              </td>
              <td class="code">00000003</td>
              <td class="details">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td class="date-time">05/20 at 6:00 pm</td>
            </tr>

            <tr>
              <td class="status">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="4" transform="matrix(1 0 0 -1 4.46118 4.57812)" fill="#04D361"/>
              </svg>
                Delivered
              </td>
              <td class="code">00000002</td>
              <td class="details">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td class="date-time">05/20 at 6:00 pm</td>
            </tr>

            <tr>
              <td class="status">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle r="4" transform="matrix(1 0 0 -1 4.46118 4.57812)" fill="#04D361"/>
                </svg>
                Delivered
              </td>
              <td class="code">00000001</td>
              <td class="details">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td class="date-time">05/20 at 6:00 pm</td>
            </tr>
          </tbody>
        </table>
        <Footer />
      </Content>
    </Container>
  );
}