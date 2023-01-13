import * as path from "path";
import { join } from "path";
import * as url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export class Path {
  /**
   * return path from file
   * @param  {...string} paths
   * @returns {string}
   */
  static fromFile(...paths) {
    return path.resolve(__dirname, ...paths);
  }
}

/**
 * @param {Function} solution
 * @param {string[]} examples
 */
const runner = (solution, examples) => {
  examples.forEach((example, index) => {
    let { inputs, answer } = example;
    inputs = inputs.split("\n").map((s) => s.trim());
    answer = answer
      .split("\n")
      .map((s) => s.trim())
      .join("\n");
    const result = solution(inputs);
    console.log(`#${index + 1} ${result === answer ? "SUCCESS" : "FAIL"}`);
    console.log(`---\n${result}\n---\n${answer}\n---`);
  });
};

export default runner;
