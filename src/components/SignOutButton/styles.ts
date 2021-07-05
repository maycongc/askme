import styled from 'styled-components';

import { Button } from '../Button';

export const ButtonSignOut = styled(Button)`
  width: fit-content;
  height: 3.5rem;
  color: #fff;
  background: ${p => p.theme.colors.color4};
  font: 500 1.5rem 'Roboto', sans-serif;

  border: 0;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;

  cursor: pointer;

  transition: filter 0.3s;

  img {
    width: 2.1rem;
  }

  &:hover {
    filter: brightness(0.85);
  }
`;
