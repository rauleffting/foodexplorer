import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header"
  "main";

  .content::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .details-wrapper {
    display: flex;
    gap: 41px;
    padding: 18px 122px 64px;

    > img {
    width: 389px;
    height: 389px;
    }

    .food-details {
      padding-top: 18px;

      > h2 {
        padding-bottom: 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.GRAY_100}
      }

      > span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.GRAY_100}
      }

      .ingredients {
        display: flex;
        align-items: center;
        gap: 16px;

        margin-top: 32.7px;
      }

      .controls {
        margin-top: 43.49px;
          
        display: flex;
        align-items: center;

        > h3 {
          margin-right: 56.74px;

          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 32px;
          line-height: 160%;

          text-align: center;

          color: ${({ theme }) => theme.COLORS.PRICE};

          white-space: nowrap;
        }

        .buttons-minus-plus {
          margin-right: 17px;
          
          background: transparent;
          border: none;

          svg {
            height: 24px;
            width: 24px;

            color: ${({ theme }) => theme.COLORS.WHITE};
          }
        }

        > span {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 160%;

          margin-right: 17px;
          color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        > button:last-child {
          margin-left: 10px;
        }
      }
    }
  }

  @media(max-width: 1279px) {
    .details-wrapper {
      align-items: center;
      flex-direction: column;

      padding: 18px 64px 0;

      > img {
        width: 220px;
        height: 220px;
      }

      .food-details {
      padding-top: 18px;

      > h2 {
        font-size: 32px;
        line-height: 100%;
      }

      > span {
        font-size: 16px;
        line-height: 100%;
      }

      .ingredients {
        margin-top: 32px;
      }

      .controls {
        margin-top: 32px;

        > h3 {
          margin-right: 24px;

          font-size: 24px;
          line-height: 100%;
        }

        .buttons-minus-plus {
          margin-right: 8px;
          
          svg {
            height: 16px;
            width: 16px;
          }
        }

        > span {
          font-size: 16px;
          line-height: 100%;

          margin-right: 8px;
        }

        > button:last-child {
          margin-left: 8px;
        }
      }

      .button-include {
        max-width: 350px;
      }
    }
    }
  }
`;