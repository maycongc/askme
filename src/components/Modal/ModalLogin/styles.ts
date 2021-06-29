import styled from 'styled-components';

export const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 16px;

  width: 400px;
  height: 420px;

  background: ${p =>
    p.theme.title === 'dark'
      ? p.theme.colors.background3
      : p.theme.colors.background1};

  gap: 20px;

  h2 {
    font: 700 22px 'Poppins', sans-serif;
  }

  button {
    width: 260px;

    &:not(:disabled):hover {
      filter: brightness(0.8);
    }
  }

  .cancel {
    margin-top: 10px;
    width: 100px;
    height: 40px;
    color: ${p => p.theme.colors.text2};
    background: ${p =>
      p.theme.title === 'dark' ? '#f0f0f0' : p.theme.colors.gray1};
  }
`;

export const LoginButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: fit-content;
  height: fit-content;

  gap: 8px;

  .google {
    background: ${p => p.theme.colors.color3};

    img {
      width: 24px;
    }
  }

  .facebook {
    background: #3b5898;

    img {
      width: 26px;
      filter: invert(100%);
    }
  }

  .github {
    background: rgb(47, 48, 65);

    img {
      width: 28px;
      filter: invert(100%);
    }
  }

  .yahoo {
    background: #720e9e;

    img {
      width: 22px;
      filter: invert(100%);
    }
  }
`;
