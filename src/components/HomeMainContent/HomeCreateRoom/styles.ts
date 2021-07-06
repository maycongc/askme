import styled from 'styled-components';

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.gray2};
  margin-top: 1.6rem;
  align-items: center;

  button {
    width: fit-content;
    height: fit-content;
    font: 400 1.4rem 'Roboto', sans-serif;
    color: ${p => p.theme.colors.color2};
    background: none;
    border: 0;
    cursor: pointer;

    transition: all 0.1s ease;

    &:hover {
      filter: brightness(0.85);
    }
  }

  @media (min-width: 930px) {
    display: initial;
    justify-content: center;
    width: 100%;
    gap: 0.4rem;
  }
`;
