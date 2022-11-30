import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  padding: 6.5px 16px;
  gap: 8px;

  border: ${({ isNew }) => isNew ? '1px dashed' : 'none'};
  border-color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : 'none'};
  border-radius: 8px;

  background: ${({ theme, isNew }) => isNew ? 'none' : theme.COLORS.GRAYBUTTON_BG};

  input {
    background: none;

    border: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${({ isNew, theme }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
  }

  button {
    width: 16px;
    height: 16px;

    display: flex;
    align-items: center;

    background: none;
    border: none;

    svg {
      color: ${({ isNew, theme }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
    }
  }
`;