import { AdjacencyListGraph } from "js-functions";

/**
 * 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  let [line1, ...lines] = inputs;
  const [n, m, v] = line1.split(" ");
  const edges = lines.map((edge) => edge.split(" "));

  const graph = new AdjacencyListGraph()

  console.log(n, m, v, lines);
};

const dfs = () => {};
