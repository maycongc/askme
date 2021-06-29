import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 89px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${p =>
    p.theme.title === 'dark' ? p.theme.colors.background3 : ''};

  border-bottom: 1px solid
    ${p =>
      p.theme.title === 'light'
        ? p.theme.colors.gray3
        : p.theme.colors.background2};

  padding: 20px 120px;

  a img {
    display: flex;
    width: 90px;
  }

  .buttons {
    display: flex;
    align-items: center;
    width: fit-content;

    gap: 10px;

    button:nth-child(-n + 2) {
      height: 40px;
      border-radius: 8px;
      font: 500 14px 'Roboto', sans-serif;
      cursor: pointer;
    }

    .room-button {
      padding: 0;
      width: fit-content;
      overflow: hidden;

      display: flex;
      align-items: center;
      justify-content: space-between;

      font: 500 14px 'Poppins';

      border: 1px solid ${p => p.theme.colors.color1};
      background-color: ${p => p.theme.colors.color1};

      transition: all 0.3s ease;

      gap: 0;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: ${p => p.theme.colors.color1};

        padding: 0 8px;

        img {
          display: flex;
          align-self: center;
          justify-self: center;
          width: 21px;
        }
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background: ${p =>
          p.theme.title === 'dark'
            ? p.theme.colors.background1
            : p.theme.colors.background1};
        color: ${p => p.theme.colors.color1};

        padding: 0 7px;

        transition: all 0.3s ease;
      }

      &:hover {
        span {
          background: ${p => p.theme.colors.color1};
          color: #fff;
        }
      }
    }

    .close-room {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 121px;

      background: ${p => p.theme.colors.background1};
      color: ${p => p.theme.colors.color4};

      border: 1px solid ${p => p.theme.colors.color4};
      padding: 0;

      transition: all 0.3s ease;

      &:hover {
        filter: brightness(0.95);
        background: ${p => p.theme.colors.color4};
        color: #fff;
      }
    }
  }
`;
