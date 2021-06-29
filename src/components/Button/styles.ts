import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font: 500 16px 'Roboto', sans-serif;
  color: #fff;
  background: ${props => props.theme.colors.color1};

  height: 50px;
  border: 0;
  border-radius: 8px;
  padding: 0 32px;
  gap: 6px;

  cursor: pointer;

  transition: filter 0.3s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
