import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  min-width: 300px;
  height: 512px;
  padding: 64px;

  background-color: ${({ theme }) => theme.COLORS.CARD_BG};

  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.CARD_BORDER};
  border-radius: 8px;

  > span {
    white-space: nowrap;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > svg {
    width: 176px;
    height: 176px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;