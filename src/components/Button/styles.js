import { Link } from 'react-router-dom'

import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  gap: 11px;

  background-color: ${({ theme, isRed }) => isRed ? theme.COLORS.REDBUTTON_BG : theme.COLORS.GRAYBUTTON_BG};

  border-radius: 5px;
  border: ${({ theme, isRed }) => isRed ? "none" : "1px solid #FFFFFF"};

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};

    width: 32px;
    height: 32px;
  }

  > span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    white-space: nowrap; 
  }
`;