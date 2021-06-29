import styled from 'styled-components';
import { Button } from '../../Button';

export const StyledButton = styled(Button)`
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.85);
  }
`;

export const Span = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.gray2};
  margin-top: 16px;

  .link-button {
    font: 400 14px 'Roboto', sans-serif;
    color: ${p => p.theme.colors.color2};
    background: none;
    border: 0;
    cursor: pointer;

    transition: all 0.1s ease;

    &:hover {
      filter: brightness(0.85);
    }
  }
`;
