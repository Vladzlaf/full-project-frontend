/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from 'react';

export const useTimeoutAnimation =  (frame: React.MutableRefObject<HTMLDivElement | null> , brick:React.MutableRefObject<HTMLDivElement | null>) => {
    let position = 0;
    let direction = 2;

    useLayoutEffect(() => {

        const animateSquareWithSetTimeout = () => {
            position += direction;
            const frameWidth = frame.current?.getBoundingClientRect().width ?? 0;
            const brickWidth = brick.current?.getBoundingClientRect().width ?? 0;
            if (!brick.current) { return }
            brick.current.style.left = `${position}px` ;
            if (position >= frameWidth - brickWidth || position <= 0) {
              direction *= -1;
            }
        setTimeout(animateSquareWithSetTimeout, 5);
    };
    animateSquareWithSetTimeout();
    },[]);
};

export default useTimeoutAnimation