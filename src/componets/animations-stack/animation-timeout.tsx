/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import useTimeoutAnimation from '../../app/animation/animations-funcs/animation-hooks/use-timeout-animation';

export const AnimationTimeout = () => {
    const containerRef = useRef(null);
    const squereRef = useRef(null);

    useTimeoutAnimation(containerRef, squereRef)    

    return (
        <div className="wrap__page">
            <div className="wrap__page__animation__container">
                <h5>setTimeOut</h5>
                <div ref={containerRef} className="wrap__path wrap__timeout">
                    <div ref={squereRef} className="wrap__path-brick wrap__path__timeout-brick"></div>
                </div>
            </div>
        </div>

    )
}

export default AnimationTimeout