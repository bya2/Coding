const solution = (inputs) => {};

/**
 * 여러 줄 입력
 */
(() => {
  import("readline").then((readline) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const inputs = [];

    rl.on("line", (line) => {
      inputs.push(line.toString());
    }).on("close", () => {
      console.log(solution(inputs));
      process.exit();
    });
  });
})();

(() => {
  import("readline").then((readline) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const inputs = [];

    rl.on("line", (line) => {
      inputs.push(line.toString());
    }).on("close", () => {
      console.log(solution(inputs));
      process.exit();
    });
  });
})();
