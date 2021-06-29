import styled from 'styled-components';

type ModalWrapperProps = {
  isHidden: boolean;
};

export const ModalWrapper = styled.div<ModalWrapperProps>`
  display: flex;
  position: absolute;
  height: ${p => (p.isHidden ? 0 : '100vh')};
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);

  overflow: hidden;

  align-items: center;
  justify-content: center;

  transition: height 0.2s ease;

  z-index: 9;
`;
