import Queue from "./index.mjs";

export const solution = (inputs = [""]) => {
  inputs.shift();
  const queue = new Queue();
  const arr = [];
  for (const input of inputs) {
    const [cmd, value] = input.split(" ");
    if (cmd === "push") queue[cmd](value);
    else arr.push(queue[cmd]());
  }
  return arr.join("\n");
};

export const examples = [
  {
    inputs: `15
    push 1
    push 2
    front
    back
    size
    empty
    pop
    pop
    pop
    size
    empty
    pop
    push 3
    empty
    front`,
    answer: `1
    2
    2
    0
    1
    2
    -1
    0
    1
    -1
    0
    3`,
  },
];
