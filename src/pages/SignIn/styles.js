import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 306px;

  @media (max-width: 1280px) {
    height: 100%;
    width: 100%;
    padding: 48px;

    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export const Logo =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;
  width: 100%;
  height: 100%;

  margin-left: 108px;

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

    white-space: nowrap;
  }

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 16px;

    margin: 0;
    padding: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  margin: 142.12px auto auto auto;
  padding: 64px;

  width: 100%;
  margin: 5%;

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

  animation: fadeIn 1s;

  box-shadow: 0px 0px 7px 1px rgba(255, 255, 255, 0.1);

  @keyframes fadeIn {
    0%{
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
  }

  @media (max-width: 1280px) {
    align-items:center;
    margin: 0;
    padding: 48px;
    gap: 24px;

    max-height: 520px;
    max-width: 450px;

    header {
      font-size: 28px;
      line-height: 16px;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;