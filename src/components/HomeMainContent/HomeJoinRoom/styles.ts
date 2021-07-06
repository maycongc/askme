import styled from 'styled-components';

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
