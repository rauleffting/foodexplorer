import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.main`


  > h2 {
    padding: 34.29px 123px 0;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;