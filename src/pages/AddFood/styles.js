import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-areas:
  "header"
  "main";

  .content::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.main`
  grid-area: main;

  overflow-y: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 0 123px;

  > header {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    padding-bottom: 32px;
  }

  > fieldset {
    display: flex;
    flex-direction: column;
    border:none;
  }

  .input-wrapper {
    display: flex;
    gap: 32px;

    margin-bottom: 32px;
  }

  #picture-input {
    > span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};

      padding-bottom: 8px;
    }

    > label {
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      background: none;

      border: 1px solid;
      border-color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 5px;
      padding: 12px 32px;

      svg {
        width: 24px;
        height: 24px;

        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-right: 8px;
      }

      span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      input {
        display: none;
      }
    }
  }

  #ingredient-input {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;
    flex-wrap: wrap;
    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }

  .small-input {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .big-input {
    display: flex;
    flex-direction: column;
    flex: 3;

    > span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};

      padding-bottom: 8px;
    }
  }

  .text-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    > label {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};

      padding-bottom: 8px;
    }

    > textarea {
      background: none;

      border: 1px solid;
      border-color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 5px;

      padding: 14px;

      color: ${({ theme }) => theme.COLORS.WHITE};

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
    }

    textarea::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: right;

    >   button {
      width: 357px;
      height: 48px;
    }
  }
`;