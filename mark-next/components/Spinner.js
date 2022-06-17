import styled from "@emotion/styled";

export default function Spinner() {
  return (
    <SpinnerContainer>
      <FadingCircle>
        <Circle />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
          <FollowingCircle idx={num} key={num} />
        ))}
      </FadingCircle>
    </SpinnerContainer>
  );
}

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 10000;
`;

const FadingCircle = styled.div`
  margin: 100px auto;
  width: 80px;
  height: 80px;
  position: relative;
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #e62588;
    border-radius: 100%;
    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
  }

  @keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;

const FollowingCircle = styled(Circle)`
  transform: rotate(${(props) => props.idx * 30}deg);

  &:before {
    animation-delay: ${(props) => props.idx / 10}s;
  }
`;
