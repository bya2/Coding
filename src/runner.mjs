// TYPE 1 (object)
const runner = (_solution, _examples__arr) => {
  for (const [idx, example__obj] of _examples__arr.entries()) {
    const { answer, ...inputs__obj } = example__obj;
    const inputs__arr = Object.values(inputs__obj);
    const result = _solution(...inputs__arr);
    const is_success = JSON.stringify(answer) === JSON.stringify(result);
    console.log(`#${idx} ${is_success ? "SUCCESS" : "FAIL"}\n`, result, answer);
  }
};

// TYPE 2 (template literals)
// const runner = (_solution = () => {}, _examples = ``) => {
//   const examples__arr = _examples
//     .trim()
//     .split("\n")
//     .map((ex) => ex.split("\t").map((x) => (Number.isNaN(+x) ? x : +x)));

//   for (const [idx, example] of examples__arr.entries()) {
//     const answer = example.pop();
//     const result = _solution(...example);
//     const is_success = JSON.stringify(answer) === JSON.stringify(result);
//     console.log(`#${idx} ${is_success ? "SUCCESS" : "FAIL"}\n`, result, answer);
//   }
// };

export default runner;
