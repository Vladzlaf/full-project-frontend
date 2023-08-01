/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import useFrameAnimation from '../../app/animation/animations-funcs/animation-hooks/use-frame-animation';

export const AnimationRequestFrame = () => {
  const frameRef = useRef(null) 
  const brickRef = useRef(null)

  useFrameAnimation(frameRef, brickRef)
  
    return (
      <div className="wrap__page">
          <div className="wrap__page__animation__container">
              <h5>requestAnimationFrame</h5>
              <div ref={frameRef} className="wrap__path wrap__request-frame">
                  <div ref={brickRef} id="elem" className="wrap__path-brick wrap__path-request"></div>
              </div>
          </div>
        </div>

    )
}

export default AnimationRequestFrame


