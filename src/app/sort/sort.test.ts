import sort from './sort';

describe('sort', () => {
  it('should sort an array using bubble sort', async () => {
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const sortedArray = [11, 12, 22, 25, 34, 64, 90];
    const result = await sort([...unsortedArray]);
    expect(result).toEqual({ bubble: sortedArray, selection: sortedArray });
  });

  it('should sort an array using selection sort', async () => {
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const sortedArray = [11, 12, 22, 25, 34, 64, 90];
    const result = await sort([...unsortedArray]);
    expect(result).toEqual({ bubble: sortedArray, selection: sortedArray });
  });
});
