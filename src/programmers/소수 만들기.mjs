const isPrimeNumber = (_num) => {
  if (_num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(_num)); i++) {
    if (_num % i === 0) {
      return false;
    }
  }

  return true;
};

export const solution = (_nums) => {
  let result = 0;
  const numsLen = _nums.length;
  for (let i = 0; i < numsLen - 2; ++i) {
    for (let j = i + 1; j < numsLen - 1; ++j) {
      for (let k = j + 1; k < numsLen; ++k) {
        const sum = _nums[i] + _nums[j] + _nums[k];
        if (isPrimeNumber(sum)) {
          ++result;
        }
      }
    }
  }
  return result;
};

export const examples__arr = [
  {
    nums: [1, 2, 3, 4],
    answer: 1,
  },
  {
    nums: [1, 2, 7, 6, 4],
    answer: 4,
  },
];
