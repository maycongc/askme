import styled from 'styled-components';

type ModalWrapperProps = {
  isHidden: boolean;
};

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  max-width: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  height: ${p => (p.isHidden ? 0 : '100vh')};
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);

  overflow: hidden;

  align-items: center;
  justify-content: center;

  transition: height 0.2s ease;

  z-index: 9;
`;
