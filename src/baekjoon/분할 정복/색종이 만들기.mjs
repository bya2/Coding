function countOnesIn2D(arr, x, y, width, height) {
  if (!height) height = width;
  let count = 0;
  for (let i = x; i < x + width; ++i) {
    for (let j = y; j < y + height; ++j) {
      if (arr[i][j]) ++count;
    }
  }
  return count;
}

export const solution = (inputs = [""]) => {
  inputs.shift();
  inputs = inputs.map((input) => input.split(" ").map(Number));

  let zeroSquares = 0,
    oneSquares = 0;

  (function subdivide(x, y, length) {
    const ones = countOnesIn2D(inputs, x, y, length);
    if (ones === 0) zeroSquares++;
    else if (ones === length ** 2) oneSquares++;
    else {
      const subLength = Math.floor(length / 2);
      const nX = x;
      const wY = y;
      const sX = nX + subLength;
      const eY = wY + subLength;
      subdivide(nX, wY, subLength);
      subdivide(nX, eY, subLength);
      subdivide(sX, wY, subLength);
      subdivide(sX, eY, subLength);
    }
  })(0, 0, inputs.length);

  return zeroSquares + "\n" + oneSquares;
};

export const examples = [
  {
    inputs: `8
    1 1 0 0 0 0 1 1
    1 1 0 0 0 0 1 1
    0 0 0 0 1 1 0 0
    0 0 0 0 1 1 0 0
    1 0 0 0 1 1 1 1
    0 1 0 0 1 1 1 1
    0 0 1 1 1 1 1 1
    0 0 1 1 1 1 1 1`,
    answer: `9
    7`,
  },
];
