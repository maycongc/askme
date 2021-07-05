import styled from 'styled-components';

export const ThemeSwitchButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;

  position: fixed;

  bottom: 1rem;
  right: 1.5rem;

  border: 0;
  border-radius: 25px;

  background-color: ${p => (p.theme.title === 'dark' ? '#344E5D' : '#99810B')};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease;

  img {
    width: 35px;

    transition: all 0.2s ease;
  }

  &:hover {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 400px) {
    width: 45px;
    height: 45px;

    bottom: 2rem;
    right: 3rem;

    &:hover {
      width: 50px;
      height: 50px;
    }
  }
`;
