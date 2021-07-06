import styled from 'styled-components';

export const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 1.6rem;
  margin: 0 1rem;

  width: 40rem;
  height: 42rem;

  background: ${p =>
    p.theme.title === 'dark'
      ? p.theme.colors.background3
      : p.theme.colors.background1};

  gap: 2rem;

  h2 {
    width: 20rem;
    font: 700 2rem 'Poppins', sans-serif;
    text-align: center;
  }

  button {
    width: 26rem;

    &:not(:disabled):hover {
      filter: brightness(0.8);
    }
  }

  .cancel {
    margin-top: 1rem;
    width: 10rem;
    height: 4rem;
    color: ${p => p.theme.colors.text2};
    background: ${p =>
      p.theme.title === 'dark' ? '#f0f0f0' : p.theme.colors.gray1};
  }

  @media (min-width: 400px) {
    h2 {
      width: 100%;
      font-size: 2.2rem;
    }
  }
`;

export const LoginButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: fit-content;
  height: fit-content;

  gap: 0.8rem;

  .google {
    background: ${p => p.theme.colors.color3};

    img {
      width: 2.4rem;
    }
  }

  .facebook {
    background: #3b5898;

    img {
      width: 2.6rem;
      filter: invert(100%);
    }
  }

  .github {
    background: rgb(47, 48, 65);

    img {
      width: 2.8rem;
      filter: invert(100%);
    }
  }

  .yahoo {
    background: #720e9e;

    img {
      width: 2.2rem;
      filter: invert(100%);
    }
  }
`;
