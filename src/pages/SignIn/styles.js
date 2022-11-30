import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  gap: 306px;
`;

export const Logo =styled.div`
  display: flex;
  align-items: center;
  gap: 19px;

  > img {
    width: 49.43px;
    height: 47.5px;
  }

  > h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 42.4815px;
    line-height: 50px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  margin: 142.12px 108px 141.12px 0;
  padding: 64px;

  width: 476px;

  background: ${({ theme }) => theme.COLORS.BG_SIGNFORM};

  border-radius: 16px;

  header {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`;