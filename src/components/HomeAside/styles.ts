import styled from 'styled-components';

export const AsideWrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background: ${p =>
    p.theme.title === 'dark'
      ? p.theme.colors.background2
      : p.theme.colors.color1};

  @media (min-width: 930px) {
    flex: 5;
    min-width: 50rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: fit-content;
  padding: 1.2rem 2rem;
  gap: 1rem;

  img {
    max-width: 200px;
  }

  color: ${p =>
    p.theme.title === 'dark' ? p.theme.colors.text1 : p.theme.colors.text2};

  div {
    display: flex;
    flex-direction: column;
    max-width: 28rem;
    width: 100%;
    text-align: center;
    gap: 1rem;

    strong {
      font-size: 1.8rem;
      font-family: 'Poppins', sans-serif;
    }

    p {
      font-size: 1.6rem;
      opacity: 0.7;
    }
  }

  @media (min-width: 455px) {
    flex-direction: row;

    div {
      max-width: 24.7rem;
      gap: 2.5rem;

      strong {
        font-size: 1.9rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: 475px) {
    div {
      max-width: 21.5rem;

      strong {
        font-size: 2.2rem;
      }

      p {
        font-size: 1.8rem;
      }
    }
  }

  @media (min-width: 600px) {
    max-width: 67rem;
    gap: 1.5rem;

    img {
      max-width: 21rem;
    }

    div {
      max-width: 34rem;
      strong {
        font-size: 2.7rem;
      }

      p {
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 930px) {
    flex-direction: column;
    gap: 1.6rem;

    img {
      max-width: 32rem;
    }

    div {
      max-width: 44rem;
      text-align: left;

      strong {
        font-weight: 700;
        font-size: 3.6rem;
        line-height: 4.2rem;
      }

      p {
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 3.2rem;
      }
    }
  }
`;
