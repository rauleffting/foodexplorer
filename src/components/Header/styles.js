import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 104px;
  padding: 0 123px;
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BG_HEADERFOOTER};

  @media(max-width: 1279px) {
    
  }
`;

export const Logo = styled.button`
  display: flex;
  align-items: center;
  gap: 11.2px;
  padding-right: 5px;

  background: none;
  border: none;
  
  > svg {
    width: 29.2px;
    height: 29.2px;
  }
  > span {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    white-space: nowrap; 
  }
`; 

export const Search = styled.div`
  min-width: 410px;
  display: flex;
  gap: 14px;
  padding: 12px 14px;
  border-radius: 5px;
  
  background-color: ${({ theme }) => theme.COLORS.BG_SEARCH};
  > svg {
    height: 19.5px;
    width: 19.5px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  > input {
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_200}
  }
  > input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300}
  }
`;

export const IconButton = styled(Link)`
  background: transparent;
  border: none;
  > svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }
`;