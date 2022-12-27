import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    width: 500px;
    padding: 32px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BG_HEADERFOOTER};

    > button {
      width: 380px;
    }
  }

  @media(min-height: 1270px) {
    > footer {
    position: absolute;
    bottom: 0;
    }
  }
`;

export const Form = styled.form`
  margin: 0 122px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    margin-bottom: 32px;

    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .input-wrapper {
    width: 380px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }

  > button {
    width: 380px;
  }
`;

export const Avatar = styled.div`
  margin-bottom: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.BG_SEARCH};

    position: absolute;
    bottom: 7px;
    right: 7px;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;