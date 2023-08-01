/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from 'react';

export const useFrameAnimation =  (frame: React.MutableRefObject<HTMLDivElement | null> , brick:React.MutableRefObject<HTMLDivElement | null>) => {
  let position = 0;
  let direction = 2;

  useLayoutEffect(() => {

    const animateSquare = () => {
      position += direction;
      if (!brick.current) { return }
      brick.current.style.left = `${position}px`;
      if (position >= (frame.current?.getBoundingClientRect()
      .width ?? 0) - brick.current?.getBoundingClientRect().width || position <= 0) {
        direction *= -1 ;
  }
    requestAnimationFrame(animateSquare);
  };
  
  animateSquare()
  },[]);
};

export default useFrameAnimation;