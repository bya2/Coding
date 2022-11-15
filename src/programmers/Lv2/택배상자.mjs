/**
 * 원래 배치 컨테이너 (1~order.length): 선택된 상자 이전의 상자들을 임시 컨테이너로, 선택된 상자를 트럭 컨테이너로
 * 임시 컨테이너: 마지막 상자가 선택된 상자라면 트럭 컨테이너로, 아니면 종료
 * 트럭 컨테이너
 * @param {number[]} order 원하는 상자 순서
 * @return {number} 상자를 실을 수 있는 개수
 */
export const solution = (order) => {
  let boxesInTruck = 0;
  let sub = [];

  for (let box = 1; box <= order.length; box++) {
    const target = order[boxesInTruck];
    if (box === target) {
      ++boxesInTruck;
    } else if (sub[sub.length - 1] === target) {
      sub.pop();
      ++boxesInTruck;
      --box;
    } else {
      sub.push(box);
    }
  }

  while (sub.length) {
    if (sub[sub.length - 1] === order[boxesInTruck]) {
      sub.pop();
      ++boxesInTruck;
    } else {
      break;
    }
  }

  return boxesInTruck;
};

/**
 * RUNTIME ERROR + TIME EXCEED
 * @param {number[]} order
 */
export const fail_solution2 = (order) => {
  const origin = Array.from({ length: order.length }, (_, i) => i + 1);
  const tmp = [];
  const truck = [];

  for (const curr of order) {
    if (origin.length && origin[0] <= curr) {
      const d = curr - origin[0];
      tmp.push(...origin.splice(0, d));
      truck.push(origin.shift());
      continue;
    }

    if (tmp.length && tmp[tmp.length - 1] === curr) {
      truck.push(tmp.pop());
    } else {
      break;
    }
  }

  return truck.length;
};

/**
 * RUNTIME ERROR + TIME EXCEED
 * @param {number[]} order
 */
export const fail_solution = (order) => {
  let origin = Array.from({ length: order.length }, (_, i) => i + 1);
  const tmp = [];
  const truck = [];

  for (const n of order) {
    if (origin.length) {
      const i = origin.findIndex((e) => n === e);

      if (i > -1) {
        tmp.push(...origin.slice(0, i));
        origin = origin.slice(i);
        n === origin[0] && truck.push(origin.shift());
        continue;
      }
    }

    if (tmp.length) {
      if (n === tmp[tmp.length - 1]) {
        truck.push(tmp.pop());
      } else {
        break;
      }
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
