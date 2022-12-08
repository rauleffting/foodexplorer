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

  > fieldset.desktop {
    display: flex;
    flex-direction: column;
    border:none;
  }

  > fieldset.mobile {
    display: none;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 32px;

    margin-bottom: 32px;
  }

  #picture-input {
    padding: 0;
    margin: 0;
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
      height: 55px;

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

        white-space: nowrap;

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
    height: 55px;
    flex-wrap: wrap;
    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }

  .small-input {
    display: flex;
    flex-direction: column;
    flex: 1;

    > label {
      height: 100%;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};

      padding-bottom: 8px;
    }

    > select {
      background: none;
      
      border: 1px solid;
      border-color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 5px;

      padding: 16px 14px;
      height: 55px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      
      color: ${({ theme }) => theme.COLORS.WHITE};

      /* Arrow */
      appearance: none;
      >svg {
        color: white;
      }
      background-image: url("data:image/svg+xml,<svg fill='white' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><path d='m0,6l12,12l12,-12l-24,0z'/><path fill='none' d='m0,0l24,0l0,24l-24,0l0,-24z'/></svg>");
      background-repeat: no-repeat;
      background-position: right 0.7rem top 50%;
      background-size: 0.65rem auto;
    }
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

  @media(max-width: 880px) {
    > fieldset.desktop {
      display: none;
    }

    > fieldset.mobile {
      display: flex;
      flex-direction: column;
      gap: 24px;

      border: none;
    }
  }
`;