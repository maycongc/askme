import styled from 'styled-components';

import { Button } from '../Button';

export const ButtonSignOut = styled(Button)`
  height: 35px;
  color: #fff;
  background: ${p => p.theme.colors.color4};
  font: 500 15px 'Roboto', sans-serif;

  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10px;

  cursor: pointer;

  transition: filter 0.3s;

  img {
    width: 21px;
    margin-right: 5px;
  }

  &:hover {
    filter: brightness(0.85);
  }
`;
