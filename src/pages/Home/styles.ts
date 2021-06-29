import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  align-items: stretch;

  main {
    flex: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

type HeaderProps = {
  gap: boolean;
};

export const HomeHeader = styled.header<HeaderProps>`
  display: flex;
  align-items: flex-end;
  justify-content: ${prop => (prop.gap ? 'space-between' : 'flex-end')};
  padding: 0 80px;
  width: 100%;
  height: 80px;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .back-button {
    width: fit-content;
    height: 35px;
    padding: 0 10px;

    background: none;
    border: 1px solid ${p => p.theme.colors.color1};
    color: ${p => p.theme.colors.color1};

    img {
      filter: brightness(0) saturate(100%) invert(32%) sepia(70%)
        saturate(2529%) hue-rotate(238deg) brightness(104%) contrast(98%);
    }

    transition: all 0.3s ease;

    &:hover {
      background: ${p => p.theme.colors.color1};
      color: #fff;

      img {
        filter: saturate(100%);
      }
    }
  }
`;
