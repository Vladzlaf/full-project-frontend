import { render, renderHook } from '@testing-library/react';
import useTimeoutAnimation from './use-timeout-animation';

describe('calling settimeout func', () => {
    it('update  brick', () => {
        const frameElement = document.createElement('div');
        const brickElement = document.createElement('div');
        const frameRef = {current: frameElement};
        const brickRef = {current: brickElement};

      

        renderHook(() => {useTimeoutAnimation(frameRef, brickRef)})

        expect(true)
    });
});