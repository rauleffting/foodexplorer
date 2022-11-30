import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BG_BODY};

    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.8);
  }

  textarea:focus, input:focus, select:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;
