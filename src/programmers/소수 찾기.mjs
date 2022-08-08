export const solution = (numbers) => {
  const result = new Set();

  const chars = numbers.split("");

  const getNumber = (chars, curr) => {
    const chars_len = chars.length;

    if (chars_len) {
      for (let i = 0; i < chars_len; i++) {
        const temp = [...chars];
        temp.splice(i, 1);
        const parseValue = parseInt(curr + chars[i]);
        if (isPrime(parseValue)) {
          result.add(parseValue);
        }

        getNumber(temp, curr + chars[i]);
      }
    }
  };

  const isPrime = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  getNumber(chars, "");

  return result.size;
};

export const examples__arr = [
  {
    numbers: "17",
    answer: 3,
  },
  {
    numbers: "011",
    answer: 2,
  },
];
