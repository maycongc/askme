import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;

  gap: 1rem;

  strong {
    text-align: center;
    height: fit-content;
    width: fit-content;
    font: 600 1.4rem 'Poppins', sans-serif;
  }

  img {
    display: flex;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
  }

  @media (min-width: 420px) {
    strong {
      font-size: 1.7rem;
    }
  }
`;
