import styled from 'styled-components';

export const ThemeSwitchButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45px;
  height: 45px;

  position: absolute;

  bottom: 3%;
  right: 2%;

  border: 0;
  border-radius: 25px;

  background-color: ${p => (p.theme.title === 'dark' ? '#344E5D' : '#99810B')};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease;

  img {
    width: 35px;

    transition: all 0.2s ease;
  }

  &:hover {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
`;
