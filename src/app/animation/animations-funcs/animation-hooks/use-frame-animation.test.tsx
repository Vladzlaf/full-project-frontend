import { renderHook } from '@testing-library/react';
import useFrameAnimation from './use-frame-animation';

describe('useFrameAnimation', () => {
  it('update brick ', () => {
    const frameElement = document.createElement('div');
    const brickElement = document.createElement('div');
    const frameRef = { current: frameElement };
    const brickRef = { current: brickElement };

    window.requestAnimationFrame = jest.fn();

    renderHook(() => useFrameAnimation(frameRef, brickRef));

    expect(window.requestAnimationFrame).toHaveBeenCalled();

  });
});