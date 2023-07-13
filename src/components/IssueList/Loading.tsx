import { keyframes, styled } from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const spin = keyframes`
    to {
    transform: rotate(1turn);
  }
`;

const Cycle = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid white;
  border-radius: 50%;
  border-top-color: royalblue;
  animation: ${spin} 0.8s infinite ease-in-out;
`;

export default function Loading() {
  return (
    <Wrapper>
      <Cycle />
    </Wrapper>
  );
}
