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
  width: 100%;
  font-size: 14px;
  color: ${props => props.theme.colors.gray1};

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.gray1};
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.gray1};
    margin-left: 16px;
  }
`;
