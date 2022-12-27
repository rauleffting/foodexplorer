import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  .desktop {
    grid-area: header;
    width: 100%;
    height: 104px;
    padding: 0 123px;
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.BG_HEADERFOOTER};
  }

  .mobile {
    display: none;
  }
  

  @media(max-width: 1279px) {
    .desktop {
      display: none;
    }

    .mobile {
      grid-area: header;

      width: 100%;
      height: 64px;
      padding: 0 64px;

      display: flex;
      gap: 32px;
      align-items: center;
      justify-content: space-between;

      position: relative;

      background-color: ${({ theme }) => theme.COLORS.BG_HEADERFOOTER};
    }

    .menu{
      background: ${({ theme }) => theme.COLORS.BG_BODY};

      >li {
        background: ${({ theme }) => theme.COLORS.BG_BODY};
      }
    }
  }

  button {
    max-width: 400px;
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

  @media(max-width: 1279px) {
    > svg {
      width: 16px;
      height: 16px;
    }

    > span {
      text-align:left;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;

      white-space: unset;
    }
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

  @media(max-width: 1279px) {
    > svg {
      width: 16px;
      height: 16px;
    }

    min-width: 130px;
  }
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  > svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }
`;

export const Sidebar = styled.div`
  display: ${({ showSidebar }) => showSidebar ? "block" : "none"};

  position: absolute;
  right: 0;
  top: 64px;
  z-index: 2;

  width: 200px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.BG_HEADERFOOTER};

  border-bottom-left-radius: 8px;

  li:first-child {
    margin-top:0;
  }

  li:last-child {
    margin-bottom:0;
  }

  li {
    list-style-type: none;

    margin: 24px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.COLORS.BG_SEARCH};

    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;