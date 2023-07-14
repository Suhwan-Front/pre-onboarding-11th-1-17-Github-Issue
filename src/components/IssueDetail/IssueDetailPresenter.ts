import styled from 'styled-components';

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
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
  margin: 0 auto;

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
