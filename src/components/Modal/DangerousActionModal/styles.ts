import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 590px;
  height: 362px;

  background: ${p =>
    p.theme.title === 'dark' ? p.theme.colors.background3 : '#fff'};

  border-radius: 16px;

  img {
    width: 55px;
    margin-bottom: 24px;
  }

  h1 {
    font: 700 24px 'Poppins', sans-serif;
    margin-bottom: 12px;
  }

  p {
    font: 400 16px 'Roboto', sans-serif;
    color: ${p =>
      p.theme.title === 'dark' ? '#f8f8f8' : p.theme.colors.gray2};
    margin-bottom: 40px;
  }

  .modal-buttons {
    display: flex;
    width: 299px;
    height: 50px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 8px;
      border: 0;

      cursor: pointer;

      transition: filter 0.3s;

      font: 500 16px 'Roboto', sans-serif;

      &:hover {
        filter: brightness(0.85);
      }
    }

    .btn-cancel {
      width: 132px;
      height: 50px;
      color: ${p => p.theme.colors.gray2};
      background: ${p => (p.theme.title === 'dark' ? '#f0f0f0' : '#cecece')};

      margin-right: 10px;
    }

    .btn-confirm {
      width: 159px;
      height: 50px;
      color: #fff;
      background: ${p => p.theme.colors.color4};
    }
  }
`;
