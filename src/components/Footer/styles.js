import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  .desktop {
    width: 100%;
    height: 77px;
    margin-top: 98px;
    padding: 0 123px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.BG_HEADERFOOTER};
  }

  .mobile {
    display: none;
  }

  @media(max-width: 1279px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;

      width: 100%;
      height: 64px;
      margin-top: 48px;
      padding: 0 64px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: ${({ theme }) => theme.COLORS.BG_HEADERFOOTER};
    }
  }
`;

export const Logo = styled.div`
  margin: 47px 0;
  display: flex;
  align-items: center;

  gap: 11.23px;
  
  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 25.1109px;
    line-height: 29px;

    color: ${({ theme }) => theme.COLORS.FOOTER_LOGO}
  }  

  @media(max-width: 1279px) { 
    margin: 16px 0;
    
    > span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;

      color: ${({ theme }) => theme.COLORS.FOOTER_LOGO}
    }
  }
`;

export const Copyright = styled.span`
  margin: 47px 0;
  
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: ${({ theme }) => theme.COLORS.FOOTER_COPYRIGHT};
`;