import styled from 'styled-components';
import { Button } from '../Button';

export const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 8.9rem;

  display: flex;
  justify-content: center;

  background: ${p =>
    p.theme.title === 'dark' ? p.theme.colors.background3 : ''};

  border-bottom: 1px solid
    ${p =>
      p.theme.title === 'light'
        ? p.theme.colors.gray3
        : p.theme.colors.background2};
`;

export const ContentWrapper = styled.div`
  max-width: 90rem;
  width: 90%;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a img {
    display: flex;
    width: 7rem;
  }

  @media (min-width: 370px) {
    a img {
      width: 9rem;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  gap: 1rem;

  button:nth-child(-n + 2) {
    height: 4rem;
    border-radius: 0.8rem;
    font: 500 1.4rem 'Roboto', sans-serif;
    cursor: pointer;
  }
`;

export const RoomButtonWrapper = styled(Button)`
  padding: 0;
  width: fit-content;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font: 500 1.4rem 'Poppins';

  border: 1px solid ${p => p.theme.colors.color1};
  background-color: ${p => p.theme.colors.color1};

  transition: all 0.3s ease;

  gap: 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${p => p.theme.colors.color1};

    padding: 0 0.8rem;

    img {
      display: flex;
      align-self: center;
      justify-self: center;
      width: 2.1rem;
    }
  }

  span {
    display: none;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: ${p =>
      p.theme.title === 'dark'
        ? p.theme.colors.background1
        : p.theme.colors.background1};
    color: ${p => p.theme.colors.color1};

    padding: 0 0.7rem;

    transition: all 0.3s ease;
  }

  &:hover {
    span {
      background: ${p => p.theme.colors.color1};
      color: #fff;
    }
  }

  @media (min-width: 600px) {
    span {
      display: flex;
    }
  }
`;

export const CloseRoomButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 9.5rem;

  background: ${p => p.theme.colors.background1};
  color: ${p => p.theme.colors.color4};

  border: 1px solid ${p => p.theme.colors.color4};
  padding: 0;

  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.95);
    background: ${p => p.theme.colors.color4};
    color: #fff;
  }

  @media (min-width: 370px) {
    width: 12.1rem;
  }
`;
