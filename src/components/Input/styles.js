import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    padding-bottom: 8px;
  }

  > input {
    height: 55px;
    
    background: none;

    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;

    padding: 16px 14px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300}
  }

  > input:focus {
    border: 1px solid;
  }
`;