import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header"
  "main";
  overflow-y: hidden;

  .content::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  > h2 {
    padding: 34.29px 123px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  table {
    flex: 1;
    max-width: 1132px;
    margin: 0 123px;
    border-spacing: 0;

    padding-bottom: 100px;
  }

  table th {
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-right: 2px solid;
    border-color: ${({ theme }) => theme.COLORS.TABLE_BORDER};

    text-align: left;
    padding: 16px 24px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.GRAY_100}
  }

  table th:first-child {
    border-left: 2px solid;
    border-top-left-radius: 8px;
    border-color: ${({ theme }) => theme.COLORS.TABLE_BORDER};
  }

  table th:last-child {
    border-top-right-radius: 8px;
  }

  table td {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    text-align: left;
    padding: 16px 24px;

    border-bottom: 2px solid;
    border-right: 2px solid;
    border-color: ${({ theme }) => theme.COLORS.TABLE_BORDER};
  }

  table td:first-child {
    white-space: nowrap;

    border-left: 2px solid;
    border-color: ${({ theme }) => theme.COLORS.TABLE_BORDER};

    > svg {
      margin-right: 8px;
    }
  }

  @media(max-width: 1278px) {
  > h2 {
    padding: 34.29px 64px;
  }

  table {
    flex: 1;
    max-width: 1132px;
    margin: 0 64px;
    padding-bottom: 64px;
  }
  }
`;