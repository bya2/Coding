import process from "process";
export const solution = () => {
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
      b = Number(n[1]);

    // for (let i = 0; i < a; ++i) {
    //   for (let j = 0; j < b; ++j) {
    //     process.stdout.write("*");
    //   }
    //   process.stdout.write("\n");
    // }

    const row = "*".repeat(a);
    for (let i = 0; i < b; ++i) {
      console.log(row);
    }
  });
};
