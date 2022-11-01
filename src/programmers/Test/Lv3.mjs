import Heap from "../../logic/ArrayHeap.mjs";

/**
 * @param {string[]} operations "연산자 값"
 * - I: 삽입
 * - D: 삭제 (1: maximum, -1: minimum)
 * @return {[number, number]} 큐가 비어있으면 [0,0], 비어있지않으면 [maximum, minimum]
 */
export const solution1 = (operations) => {
  let begin = 0;
  let size = 0;
  for (let i = 0, len = operations.length; i < len; ++i) {
    operations[i][0] === "I" ? ++size : size >= 1 && --size;
    if (size === 0) begin = i;
  }

  if (size === 0) return [0, 0];

  const maxHeap = new Heap((a, b) => a > b);
  const minHeap = new Heap((a, b) => a < b);

  for (let i = begin, len = operations.length; i < len; ++i) {
    let [operator, operand] = operations[i].split(" ");

    if (operator === "I") {
      maxHeap.insert(+operand);
      minHeap.insert(+operand);
      size++;
    } else if (size >= 1) {
      if (operand === "1") {
        maxHeap.poll();
      } else {
        minHeap.poll();
      }
      size--;
    }
  }

  return [maxHeap.poll(), minHeap.poll()];
};

export const examples__arr1 = [
  {
    operations: ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"],
    answer: [0, 0],
  },
  {
    operations: ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"],
    answer: [333, -45],
  },
];

/**
 *
 * @param {number} rows 표 행의 갯수 5~
 * @param {number} selected 초기 선택된 행의 위치 0~
 * @param {string[]} cmd "명령어 값"
 * - U: X칸 위 선택
 * - D: X칸 아래 선택
 * - C: 선택 행 삭제, 바로 아래 행 선택 (삭제된 행이 마지막이면 바로 위 행 선택)
 * - Z: 가장 최근 삭제된 행 복구 (현재 선택된 행이 되돌려지지 않음)
 * @return {string} 삭제 상태
 * - 삭제되지 않은 상태: O
 * - 삭제된 상태: X
 */
export const solution = (rows, selected, cmd) => {
  const status = Array.from({ length: rows }, () => "O");
  const stack = [];

  for (let i = 0, len = cmd.length; i < len; ++i) {
    let [operator, operand] = cmd[i].split(" ");
    operand = +operand;

    switch (operator) {
      case "U":
        selected < operand ? (selected = 0) : (selected -= operand);
        break;
      case "D":
        rows < selected + operand ? (selected = rows) : (selected += operand);
        break;
      case "C":
        stack.push(selected);
        for (let j = selected; j < len; ++j) {
          if (status[j] === "O") {
            status[j] = "X";
            break;
          }
        }
        rows--;
        if (selected > rows) selected--;
        break;
      case "Z":
        const row = stack.pop();
        status[row] = "O";
        if (row <= selected) {
          selected++;
        }
        rows++;
        break;
    }

    console.log(rows, selected, [operator, operand], stack);
  }

  return status.join("");
};

export const examples__arr = [
  {
    n: 8,
    k: 2,
    cmd: ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"],
    answer: "OOOOXOOO",
  },
  {
    n: 8,
    k: 2,
    cmd: ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"],
    answer: "OOXOXOOO",
  },
];
