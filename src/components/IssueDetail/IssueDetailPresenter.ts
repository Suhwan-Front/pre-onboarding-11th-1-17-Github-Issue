import styled from 'styled-components';

const DetailWrapper = styled.div`
  width: 100%;
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  max-width: 100%;
  gap: 10px;
`;

const DetailContent = styled.div`
  padding: 20px;
  overflow-y: auto;
  height: 600px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const DetailAvatar = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
`;

export { DetailAvatar, DetailContent, DetailHeader, DetailWrapper };
