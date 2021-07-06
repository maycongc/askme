import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 0 1rem;

  width: 59rem;
  height: 36.2rem;

  background: ${p =>
    p.theme.title === 'dark' ? p.theme.colors.background3 : '#fff'};

  border-radius: 1.6rem;

  img {
    width: 5.5rem;
    margin-bottom: 2.4rem;
  }

  h1 {
    font: 700 2.4rem 'Poppins', sans-serif;
    margin-bottom: 1.2rem;
  }

  p {
    width: 22rem;
    text-align: center;
    font: 400 1.6rem 'Roboto', sans-serif;
    color: ${p =>
      p.theme.title === 'dark' ? '#f8f8f8' : p.theme.colors.gray2};
    margin-bottom: 4rem;
  }

  .modal-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10.8rem;
    gap: 0.8rem;

    button {
      height: 5rem;
      max-width: 12.5rem;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 0.8rem;
      border: 0;

      cursor: pointer;

      transition: filter 0.3s;

      font: 500 1.6rem 'Roboto', sans-serif;

      &:hover {
        filter: brightness(0.85);
      }

      &:last-child {
        order: -1;
      }
    }

    .btn-cancel {
      width: 13.2rem;
      height: 5rem;
      color: ${p => p.theme.colors.gray2};
      background: ${p => (p.theme.title === 'dark' ? '#f0f0f0' : '#cecece')};
    }

    .btn-confirm {
      width: 15.9rem;
      height: 5rem;
      color: #fff;
      background: ${p => p.theme.colors.color4};
    }
  }

  @media (min-width: 36rem) {
    .modal-buttons {
      flex-direction: row;
      height: fit-content;

      button:last-child {
        order: +1;
      }
    }
  }
`;
