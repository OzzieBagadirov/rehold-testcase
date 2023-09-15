import styled from '@emotion/styled';

const EllipseGradient = styled.div`
  opacity: 1;
  visibility: inherit;

  position: fixed;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  pointer-events: none;

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse, rgba(8, 8, 8, 0) 70%, #080808 110%, #080808 100%);
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(
      ellipse,
      rgba(233, 232, 227, 0) 70%,
      rgba(233, 232, 227, 0.7) 110%,
      rgba(233, 232, 227, 0.95) 100%
    );
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
`;

export default EllipseGradient;
