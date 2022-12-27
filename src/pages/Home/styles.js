import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header"
  "main";

  .desktop-content::-webkit-scrollbar {
    display: none;
  }

  .mobile-content::-webkit-scrollbar {
    display: none;
  }

  .mobile-content {
    display: none;
  }

`;

export const Content = styled.main`
  grid-area: main;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  
`;

export const FrontCover = styled.section`
  margin: 0 124px 420px 124px;
  height: 407px;
  display: flex;

  position: relative;

  > img {
    position: absolute;
    left: -70px;
    top: 17px;
  }

  .frontcover-background {
    position: absolute;
    z-index: -1;

    height: 260px;
    width: 100%;
    margin-top: 164px;

    background: ${({ theme }) => theme.COLORS.BG_FRONTCOVER};

    border-radius: 8px;

    display: flex;
    
    div {
      margin-top: 87px;
      padding-left: 597px;
      padding-right: 46px;

      > h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }

      > span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }
  }

  @media(max-width: 1279px) {
    display: none;
  }
`;