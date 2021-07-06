import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: ${p => p.theme.colors.background1};
    color: ${p => p.theme.colors.text1};

    @media (max-width: 1080px) {
      font-size: 1.5rem;
    }

    @media (max-width: 720px) {
      font-size: 1.4rem;
    }
  }

  body, input, button, textarea {
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
