import React, { useEffect, useRef } from 'react';

import styled from '@emotion/styled';

const CursorWrapper = styled.div`
  z-index: 999;
  mix-blend-mode: difference;
  position: fixed;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;

  pointer-events: none;
`;

const CursorDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #fff9;
  border-radius: 50%;
  transform-origin: center;
`;

const Cursor = () => {
  const cursorRef = useRef<any>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const moveHandler = (event: any) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - cursorRef.current.clientWidth / 4;
      positionRef.current.mouseY = mouseY - cursorRef.current.clientHeight / 4;
    };

    document.addEventListener('mousemove', moveHandler);
    return () => {
      document.removeEventListener('mousemove', moveHandler);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
        positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.04;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.04;
        if (
          Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) <
          0.04
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      cursorRef.current!.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);

  return (
    <CursorWrapper ref={cursorRef}>
      <CursorDot />
    </CursorWrapper>
  );
};

export default Cursor;
