import styled from 'styled-components';

export const QuestionWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  height: fit-content;

  overflow: hidden;

  background: ${p =>
    p.theme.title === 'dark' ? p.theme.colors.background3 : ''};
  width: 100%;

  border: 0;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);

  padding: 2.4rem;

  &:hover {
    @keyframes jump {
      0% {
        transform: translate3d(0, 0%, 0);
      }
      100% {
        transform: translate3d(0, -3%, 0);
      }
    }

    animation: jump 0.2s linear alternate forwards;
  }

  p {
    width: 100%;
    height: fit-content;
    font: 400 1.6rem 'Roboto', sans-serif;
    text-align: justify;
  }

  &.highlighted {
    background: ${p =>
      p.theme.title === 'dark' ? p.theme.colors.background2 : '#f4f0ff'};
    border: 1px solid ${p => p.theme.colors.color1};

    .question-footer .question-user-info span {
      color: ${p => p.theme.colors.text1};
    }
  }

  &.answered {
    background: ${p =>
      p.theme.title === 'dark' ? '#1d1d2e' : p.theme.colors.gray3};
    color: ${p => p.theme.colors.gray2};
    .question-footer {
      .question-user-info img {
        filter: brightness(0.8);
      }
    }
  }

  @media (min-width: 801px) {
    border-radius: 0.8rem;
  }
`;

export const QuestionFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.4rem;

  .question-user-info {
    display: flex;
    align-items: center;

    img {
      width: 3.2rem;
      border-radius: 1.6rem;
      margin-right: 0.8rem;
    }

    span {
      font: 400 1.4rem 'Roboto', sans-serif;
      color: ${p => p.theme.colors.gray2};
    }
  }

  .question-actions {
    button {
      cursor: pointer;
      overflow: hidden;
      background: none;
      border: 0;
    }

    .like-content {
      display: flex;
      align-items: flex-end;
      gap: 0.7rem;

      span {
        transition: all 0.2s ease;
        font: 400 1.6rem 'Poppins', sans-serif;
        color: ${p => p.theme.colors.color1};
      }
    }

    button + button {
      margin-left: 1.6rem;
    }

    .check:hover,
    .answer:hover,
    .like:hover,
    img.highlighted,
    img.liked,
    img.answered {
      filter: brightness(0) saturate(100%) invert(32%) sepia(70%)
        saturate(2529%) hue-rotate(238deg) brightness(104%) contrast(98%);
    }

    img.delete:hover,
    img.delete-selected {
      filter: brightness(0) saturate(100%) invert(44%) sepia(100%)
        saturate(4025%) hue-rotate(328deg) brightness(95%) contrast(90%);
    }
  }
`;
