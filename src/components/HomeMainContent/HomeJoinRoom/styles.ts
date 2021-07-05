import styled from 'styled-components';
import { Button } from '../../Button';

export const StyledButton = styled(Button)`
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.85);
  }
`;

export const Separator = styled.div`
  width: 80%;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.gray1};

  margin: 3.2rem 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.gray1};
    margin-right: 1rem;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.gray1};
    margin-left: 1rem;
  }

  @media (min-width: 930px) {
    width: 100%;
  }
`;
