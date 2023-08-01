import sort from 'app/sort/sort';
import React from 'react';

export const AnimationStopButton = () => {
    const array: Array<number> = [...Array(100000)].map(() => Math.floor(Math.random() * 20));

    return (
        <button onClick={ () => {
            sort(array);
          }
        } 
        className="warp__button">Нажми на меня
        </button>
    )
}

export default AnimationStopButton