import styled from 'styled-components';

export const ThemeSwitchButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.5rem;
  height: 3.5rem;

  position: fixed;

  bottom: 1rem;
  right: 1.5rem;

  border: 0;
  border-radius: 2.5rem;

  background-color: ${p => (p.theme.title === 'dark' ? '#344E5D' : '#99810B')};
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease;

  img {
    width: 3.5rem;

    transition: all 0.2s ease;
  }

  &:hover {
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 400px) {
    width: 4.5rem;
    height: 4.5rem;

    bottom: 2rem;
    right: 3rem;

    &:hover {
      width: 5rem;
      height: 5rem;
    }
  }
`;
