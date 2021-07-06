import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font: 500 1.6rem 'Roboto', sans-serif;
  color: #fff;
  background: ${props => props.theme.colors.color1};

  height: 5rem;
  border: 0;
  border-radius: 0.8rem;
  padding: 0 3.2rem;
  gap: 0.6rem;

  cursor: pointer;

  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
