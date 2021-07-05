import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: block;
  height: 100vh;
  width: 100%;

  main {
    flex: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 930px) {
    display: flex;
  }
`;

type HeaderProps = {
  gap: boolean;
};

export const HomeHeader = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: ${prop => (prop.gap ? 'space-between' : 'flex-end')};

  width: 100%;
  padding: 0.5rem 1.5rem 1rem;
  height: 8rem;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media (min-width: 320px) {
    padding: 0.5rem 2rem 1rem;
  }
`;

export const BackButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 0.2rem;

  width: fit-content;
  height: 3rem;
  padding: 0 0.5rem;

  background: transparent;
  border: 1px solid ${p => p.theme.colors.color1};
  border-radius: 0.8rem;
  color: ${p => p.theme.colors.color1};

  transition: all 0.3s ease;

  img {
    width: 2rem;
    filter: brightness(0) saturate(100%) invert(32%) sepia(70%) saturate(2529%)
      hue-rotate(238deg) brightness(104%) contrast(98%);
  }

  p {
    display: none;
  }

  &:hover {
    background: ${p => p.theme.colors.color1};

    img {
      filter: saturate(100%);
    }

    p {
      color: #fff;
    }
  }

  @media (min-width: 330px) {
    height: 3.5rem;
    padding: 0 0.6rem;

    img {
      width: 2.4rem;
    }
  }

  @media (min-width: 500px) {
    p {
      display: block;
    }
  }
`;
