import { Link } from 'react-router-dom';

import styled from "styled-components";

export const Container = styled.button`
  max-width: 225px;
  padding: 30px 0 41.42px 122px;
  display: flex;
  align-items: center;

  background: transparent;
  border: none;

  > svg {
    width: 32px;
    height: 32px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @media(max-width: 1279px) {
    padding-left: 64px;
  }
`;