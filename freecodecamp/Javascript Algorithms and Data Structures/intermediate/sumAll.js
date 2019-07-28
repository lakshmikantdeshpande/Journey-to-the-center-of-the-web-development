function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
