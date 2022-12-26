import { Container, Logo, Copyright } from './styles';

import polygonfooter from '../../assets/polygonfooter.svg';

export function Footer() {
  return(
    <Container>
      <div className="desktop">
        <Logo>
          <img src={polygonfooter} alt="logo" />
          <span>
            food explorer
          </span>
        </Logo>

        <Copyright>
          © 2022 - All rights reserved.
        </Copyright>
      </div>


      <div className="mobile">
        <Logo>
          <img src={polygonfooter} alt="logo" />
          <span>
            food explorer
          </span>
        </Logo>

        <Copyright>
          © 2022 - All rights reserved.
        </Copyright>
      </div>
    </Container>
  );
}