import * as fs from "fs";
import * as path from "path";
import * as url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

class Path {
  /**
   * return path from file
   * @param  {...string} paths
   * @returns {string}
   */
  static fromFile(...paths) {
    return path.resolve(__dirname, ...paths);
  }
}

const runner = (solution) => {
  const INPUT_DATA = process.platform === "linux" ? "/dev/stdin" : Path.fromFile("input.txt");
  const inputs = fs.readFileSync(INPUT_DATA).toString().trim().split("\n");
  solution(inputs);
};

export default runner;
