import { Link } from 'react-router-dom';

import styled, { ThemeConsumer } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 300px;
  height: 512px;

  background-color: ${({ theme }) => theme.COLORS.CARD_BG};

  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.CARD_BORDER};
  border-radius: 8px;

  .top-controls {
    width: 100%;
    display: flex;
    justify-content:space-between;

    padding: 16px 16px 13.22px 16px;

    > svg {
      width: 32px;
      height: 32px;

      color: ${({ theme }) => theme.COLORS.CARD_ICONS};
    }
  }

  > h3 {
    padding-bottom: 17px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.PRICE}
  }

  .bottom-controls{
    display: flex;
    align-items: center;
    gap: 17px;
    
    margin-bottom: 36px;

    .quantity-buttons {
      background: transparent;

      border: none;

      width: 24px;
      height: 24px;
      padding: 0;

      svg {
        width: 24px;
        height: 24px;
  
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    button {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;


export const LinkSection = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background: none;
  border: none;

  > img {
    width: 176px;
    height: 176px;

    padding-bottom: 16px;
  }

  > h2 {
    padding: 0 22.5px 18px;

    white-space: nowrap;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > span {
    width: 220px;
    padding-bottom: 16px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const ButtonFavorite = styled.button`
  display: flex;
  background: none;
  border: none;

  > svg {
      width: 32px;
      height: 32px;
      
      color: ${({ theme, favorite }) => favorite ? theme.COLORS.FAVORITE_BUTTON : theme.COLORS.CARD_ICONS};
  }
`;

export const ButtonEdit = styled.button`
  display: flex;
  background: none;
  border: none;

  > svg {
      width: 32px;
      height: 32px;

      color: ${({ theme }) => theme.COLORS.CARD_ICONS};
  }
`;