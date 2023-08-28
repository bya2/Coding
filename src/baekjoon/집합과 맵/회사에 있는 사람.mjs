/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  const [_, ...arr] = inputs;

  const map = arr.reduce((obj, t) => {
    const nm = t.split(" ")[0];
    obj[nm] ? delete obj[nm] : (obj[nm] = 1);
    return obj;
  }, {});

  return Object.keys(map).sort().reverse().join("\n");
};

export const examples = [
  {
    inputs: `4
    Baha enter
    Askar enter
    Baha leave
    Artem enter`,
    answer: `Askar
    Artem`,
  },
];
