import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;

  gap: 10px;

  strong {
    text-align: center;
    height: fit-content;
    width: fit-content;
    font: 700 17px 'Poppins', sans-serif;
  }

  img {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`;
