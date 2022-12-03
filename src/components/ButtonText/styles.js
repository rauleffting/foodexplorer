import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  border: none;
  background: transparent;
  
  display: flex;
  align-items: center;

  > span {
    height: 26px;

    font-family: ${({ isMyFavorites }) => isMyFavorites ? "'Roboto', sans-serif" : "'Poppins', sans-serif"};
    font-style: normal;
    font-weight: ${({ isMyFavorites }) => isMyFavorites ? "400" : "500"}; 
    font-size: ${({ isMyFavorites }) => isMyFavorites ? "16px" : "14px"}; 
    line-height: ${({ isMyFavorites }) => isMyFavorites ? "160%" : "24px"};

    color: ${({ isMyFavorites, theme }) => isMyFavorites ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    white-space: nowrap; 
  }
`;