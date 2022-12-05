// 첫 줄 N, Q
// N-1개의 줄에는 농부 존이 직접 잰 두 동영상 쌍의 USADO. 세 정수 pi, qi, ri. 동영상 pi와 qi가 USADO ri로 서로 연결되어 있음을 뜻.
// Q개의 줄에는 농부 존의 Q개의 질문.
/**
 *  “연관 동영상” 리스트
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  const n = +inputs[0][0];
  const usadoGraph = inputs.slice(1, n);
  const questions = inputs.slice(n).map((s) => s.split(" ").map((e) => +e));
  console.log(usadoGraph, questions);

  const graph = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );

  for (const usado of usadoGraph) {
    const [p, q, r] = usado.split(" ");
    graph[p][q] = +r;
    graph[q][p] = +r;
  }
};

// 가중치 그래프
// 인접 행렬
