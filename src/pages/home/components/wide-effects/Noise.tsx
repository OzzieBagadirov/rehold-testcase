import styled from '@emotion/styled';

const Noise = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 99999;
  overflow: hidden;
  width: 100%;
  height: 100%;

  opacity: 0.9;

  :before {
    content: '';
    position: absolute;
    animation: noise 1.2s steps(3) both infinite;
    will-change: auto;
    background-image: url(https://www.cosmos.so/wp-content/themes/cosmos/public/build/background-noise-17e314f3.png);
    background-size: 100px;
    width: 200%;
    height: 200%;
    left: -50%;
    top: -50%;
    opacity: 0.3;
  }

  @keyframes noise {
    0% {
      transform: translate3d(1%, -1%, 0);
    }

    10% {
      transform: translate3d(-5%, -2%, 0);
    }

    20% {
      transform: translate3d(10%, 5%, 0);
    }

    30% {
      transform: translate3d(5%, -11%, 0);
    }

    40% {
      transform: translate3d(-12%, -5%, 0);
    }

    50% {
      transform: translate3d(10%, 9%, 0);
    }

    60% {
      transform: translate3d(15%, 0, 0);
    }

    70% {
      transform: translate3d(-10%, 8%, 0);
    }

    80% {
      transform: translate3d(10%, 2%, 0);
    }

    90% {
      transform: translate3d(1%, 5%, 0);
    }

    to {
      transform: translate3d(0, 8%, 0);
    }
  }
`;

export default Noise;
