import styled from 'styled-components';
import { Button } from '../Button';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 32rem;

  margin: 2rem 3.2rem 4rem;

  > img {
    width: 9.5rem;
    margin-bottom: 4rem;
  }

  h2 {
    font: 700 1.9rem 'Poppins', sans-serif;
    margin-bottom: 2.4rem;
  }

  button {
    height: 4rem;
    width: 80%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: fit-content;
    gap: 1.6rem;

    input {
      width: 80%;
      height: 4rem;
      border-radius: 0.8rem;
      padding: 0 1.6rem;

      background: ${p =>
        p.theme.title === 'dark' ? p.theme.colors.background3 : '#fff'};

      color: ${p => (p.theme.title === 'dark' ? '#fff' : '#000')};
      caret-color: ${p => (p.theme.title === 'dark' ? '#fff' : '#000')};
      border: 1px solid ${props => props.theme.colors.gray1};

      transition: transform 0.3s ease;

      &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.colors.color1};
        transform: scaleX(1.03);
      }
    }
  }

  @media (min-width: 930px) {
    margin: 0 3.2rem 4rem 3.2rem;

    > img {
      width: 14rem;
      margin-bottom: 5.6rem;
    }

    h2 {
      font-size: 2.2rem;
    }

    button {
      width: 100%;
      height: 5rem;
    }

    form input {
      width: 100%;
      height: 5rem;
    }
  }
`;

export const StyledButton = styled(Button)`
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.85);
  }
`;
