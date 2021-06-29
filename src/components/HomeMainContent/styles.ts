import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  height: 100%;

  margin: 0 32px 40px 32px;

  > img {
    width: 140px;
    margin-bottom: 56px;
  }

  h2 {
    font: 700 22px 'Poppins', sans-serif;
    margin-bottom: 24px;
  }

  button + button {
    margin-top: 8px;
  }

  form {
    width: 100%;
    height: fit-content;

    > input {
      width: 320px;
      height: 50px;
      background: ${p =>
        p.theme.title === 'dark' ? p.theme.colors.background3 : '#fff'};

      color: ${p => (p.theme.title === 'dark' ? '#fff' : '#000')};
      caret-color: ${p => (p.theme.title === 'dark' ? '#fff' : '#000')};
      border: 1px solid ${props => props.theme.colors.gray1};
      border-radius: 8px;

      padding: 0 16px;
      margin-bottom: 16px;

      &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.colors.color1};
      }
    }

    button {
      width: 100%;
    }
  }
`;
