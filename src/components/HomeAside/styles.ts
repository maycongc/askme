import styled from 'styled-components';

export const Aside = styled.aside`
  flex: 5;
  height: 100%;
  max-width: 45%;
  min-width: 500px;

  background: ${p =>
    p.theme.title === 'dark'
      ? p.theme.colors.background2
      : p.theme.colors.color1};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0;

  div {
    max-width: 440px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    color: ${p =>
      p.theme.title === 'dark' ? p.theme.colors.text1 : p.theme.colors.text2};

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;

      width: 440px;
    }

    p {
      font: 400 24px 'Roboto', sans-serif;
      line-height: 32px;
      margin-top: 16px;

      opacity: 0.7;

      width: 440px;
      height: 64px;
    }
  }
`;
