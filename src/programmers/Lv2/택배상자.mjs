/**
 * 원래 배치 컨테이너 (1~order.length): 선택된 상자 이전의 상자들을 임시 컨테이너로, 선택된 상자를 트럭 컨테이너로
 * 임시 컨테이너: 마지막 상자가 선택된 상자라면 트럭 컨테이너로, 아니면 종료
 * 트럭 컨테이너
 * @param {number[]} order 원하는 상자 순서
 * @return {number} 상자를 실을 수 있는 개수
 */
export const solution = (order) => {
  let origin = Array.from({ length: order.length }, (_, i) => i + 1);
  const tmp = [];
  const truck = [];

  for (const n of order) {
    const i = origin.findIndex((e) => n === e);

    if (i > -1 && origin.length) {
      tmp.push(...origin.slice(0, i));
      origin = origin.slice(i);
      n === origin[0] && truck.push(origin.shift());
      continue;
    }

    if (n === tmp[tmp.length - 1]) {
      truck.push(tmp.pop());
    } else {
      break;
    }
  }

  return truck.length;
};

export const examples__arr = [
  {
    order: [4, 3, 1, 2, 5],
    answer: 2,
  },
  {
    order: [5, 4, 3, 2, 1],
    answer: 5,
  },
];
