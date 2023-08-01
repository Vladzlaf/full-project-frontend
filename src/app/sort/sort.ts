 const bubbleSort = (arr: Array<number>) => {
  for (let i = 0, endI = arr.length - 1; i < endI; i += 1) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return arr;
};

const selectionSort = (arr: Array<number>) => {
  for (let i = 0, l = arr.length, k = l - 1; i < k; i += 1) {
    let indexMin = i;
    for (let j = i + 1; j < l; j += 1) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
};

export async function sort(arr: Array<number>) {
  const bubbleSorted = await bubbleSort([...arr]);
  const selectionSorted = await selectionSort([...arr]);

  return { bubble: bubbleSorted, selection: selectionSorted };
}

export default sort;