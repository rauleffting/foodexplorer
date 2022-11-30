import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 55px;
    height: 55px;
  }

  > span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;