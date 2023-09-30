import { isEnclosed } from "./logic.mjs";

export const solution = (inputs = [""]) => {
  inputs.pop();
  return inputs.map((s) => (isEnclosed.call(s) ? "yes" : "no")).join("\n");
};

export const examples = [
  {
    inputs: `So when I die (the [first] I will see in (heaven) is a score list).
    [ first in ] ( first out ).
    Half Moon tonight (At least it is better than no Moon at all].
    A rope may form )( a trail in a maze.
    Help( I[m being held prisoner in a fortune cookie factory)].
    ([ (([( [ ] ) ( ) (( ))] )) ]).
     .
    .`,
    answer: `yes
    yes
    no
    no
    no
    yes
    yes`,
  },
];
