import React from 'react';
import AnimationButton from '../animaions-page/animation-button';

export const AnimationCustom = () => {
    return (
        <div className="wrap__page">
            <div className="wrap__page__animation__container">
                <h5>custom</h5>
                <div className="wrap__path wrap__custom">
                    <div className="wrap__path-brick wrap__custom"></div>
                </div>
            </div>
            <AnimationButton/>
        </div>

    )
}

export default AnimationCustom