export const solution = (inputs = [""]) => {
  inputs.shift();
  inputs = inputs.map((input) => [...input].map(Number));
};

export const examples = [
  {
    inputs: `8
    11110000
    11110000
    00011100
    00011100
    11110000
    11110000
    11110011
    11110011`,
    answer: `((110(0101))(0010)1(0001))`,
  },
];
