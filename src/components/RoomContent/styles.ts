import styled from 'styled-components';

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;

  height: fit-content;
  width: 800px;

  padding-bottom: 50px;

  .room-title {
    display: flex;
    margin: 32px 0 24px;
    align-items: center;

    h1 {
      font: 700 24px 'Poppins', sans-serif;
      color: ${p => p.theme.colors.text1};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 107px;
      height: 32px;

      margin-left: 16px;
      background: ${p => p.theme.colors.color2};
      color: #fff;
      font: 500 14px 'Roboto', sans-serif;
      border-radius: 16px;
    }
  }

  form {
    margin-bottom: 32px;

    textarea {
      display: flex;
      width: 100%;
      min-height: 145px;
      overflow: hidden;
      resize: vertical;

      padding: 16px;

      border: 0;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

      background: ${p =>
        p.theme.title === 'dark' ? p.theme.colors.background2 : '#fff'};

      color: ${p => p.theme.title === 'dark' && '#fff'};

      &:focus {
        outline: none;
        border: 1px solid ${p => p.theme.colors.color1};
      }
    }

    .form-footer {
      display: flex;
      width: 100%;

      justify-content: space-between;
      align-items: center;

      margin-top: 16px;

      span {
        font: 500 14px 'Roboto', sans-serif;
        color: #737380;
      }

      div {
        flex-direction: row-reverse;
        align-self: center;

        img {
          width: 32px;
          height: 32px;
        }

        strong {
          font: 500 14px 'Roboto', sans-serif;
        }
      }

      button:first-child {
        border: 0;
        background: none;
        cursor: pointer;
        color: ${p => p.theme.colors.color1};
        text-decoration: underline;
        font: 500 14px 'Roboto', sans-serif;
      }
    }
  }

  .empty-questions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    align-self: center;
    justify-self: center;

    width: 284px;
    height: 100%;

    margin-bottom: 30px;

    img {
      width: 150px;
    }

    strong {
      font: 600 18px 'Poppins', sans-serif;
      margin: 16px 0 8px 0;
    }

    p {
      text-align: center;
      font: 400 14px 'Roboto', sans-serif;
      color: ${p =>
        p.theme.title ? p.theme.colors.gray1 : p.theme.colors.gray2};
    }
  }

  article + article {
    margin-top: 8px;
  }
`;
