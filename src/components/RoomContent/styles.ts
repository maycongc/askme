import styled from 'styled-components';
import { Button } from '../Button';

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;

  height: fit-content;
  max-width: 80rem;
  width: 100%;

  padding-bottom: 5rem;

  article + article {
    margin-top: 0.8rem;
  }
`;

export const RoomTitleWrapper = styled.div`
  display: flex;
  margin: 2rem 0 1.5rem;
  padding: 0 2rem;
  align-items: center;

  h1 {
    font: 700 1.8rem 'Poppins', sans-serif;
    color: ${p => p.theme.colors.text1};
    text-align: center;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1.2rem;
    gap: 0.5rem;

    width: fit-content;
    height: 3.2rem;

    margin-left: 1.6rem;
    background: ${p => p.theme.colors.color2};
    color: #fff;
    font: 500 1.4rem 'Roboto', sans-serif;
    border-radius: 1.6rem;

    p {
      display: none;
    }
  }

  @media (min-width: 500px) {
    margin: 3.2rem 0 2.4rem;

    h1 {
      font: 700 2.4rem 'Poppins', sans-serif;
      color: ${p => p.theme.colors.text1};
    }

    span p {
      display: initial;
    }
  }
`;

export const FormWrapper = styled.form`
  margin-bottom: 3.2rem;
  padding: 0 1.2rem;

  textarea {
    display: flex;
    width: 100%;
    min-height: 14.5rem;
    overflow: hidden;
    resize: vertical;

    padding: 1.6rem;

    border: 0;
    border-radius: 0.8rem;
    box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.1);

    background: ${p =>
      p.theme.title === 'dark' ? p.theme.colors.background2 : '#fff'};

    color: ${p => p.theme.title === 'dark' && '#fff'};

    &:focus {
      outline: none;
      border: 0.1rem solid ${p => p.theme.colors.color1};
    }
  }

  @media (min-width: 800px) {
    padding: 0;
  }
`;

export const FormFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.6rem;

  span {
    font: 500 1.4rem 'Roboto', sans-serif;
    color: #737380;

    button {
      border: 0;
      background: none;
      color: ${p => p.theme.colors.color1};
      text-decoration: underline;
      font: 500 1.4rem 'Roboto', sans-serif;
    }
  }

  div {
    flex-direction: row-reverse;
    align-self: center;

    img {
      width: 3.2rem;
      height: 3.2rem;
    }

    strong {
      font: 500 1.4rem 'Roboto', sans-serif;
    }
  }
`;

export const FormSubmitButtonWrapper = styled(Button)`
  width: 10rem;

  @media (min-width: 400px) {
    width: fit-content;
    height: 4rem;
  }

  @media (min-width: 500px) {
    height: 5rem;
  }
`;

export const EmptyQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  align-self: center;
  justify-self: center;

  width: 28.4rem;
  height: 100%;

  margin-bottom: 3rem;

  img {
    width: 15rem;
  }

  strong {
    font: 600 1.8rem 'Poppins', sans-serif;
    margin: 1.6rem 0 0.8rem 0;
  }

  p {
    text-align: center;
    font: 400 1.4rem 'Roboto', sans-serif;
    color: ${p =>
      p.theme.title ? p.theme.colors.gray1 : p.theme.colors.gray2};
  }
`;
