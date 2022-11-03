/**
 * 핵심: 양방향 연결 리스트
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
export const solution = (n, k, cmd) => {
  let answer = Array.from({ length: n }, () => "O");

  let root = new Node(0);
  let curNode = root;
  let prevNode = root;
  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;

    if (i === k) {
      curNode = newNode;
    }
  }

  const history = [];
  cmd.map((commandLine) => {
    const [command, count] = commandLine.split(" ");
    let i = 0;
    switch (command) {
      case "U":
        while (i < count && curNode.prev) {
          curNode = curNode.prev;
          i++;
        }
        break;
      case "D":
        while (i < count && curNode.next) {
          curNode = curNode.next;
          i++;
        }
        break;
      case "C":
        history.push(curNode);
        const prev = curNode.prev;
        const next = curNode.next;
        if (prev && next) {
          prev.next = next;
          next.prev = prev;
          curNode = next;
        } else if (prev) {
          prev.next = null;
          curNode = prev;
        } else if (next) {
          next.prev = null;
          curNode = next;
        }
        break;
      case "Z":
        const node = history.pop();
        const prevNode = node.prev;
        const nextNode = node.next;
        if (prevNode) {
          prevNode.next = node;
        }
        if (nextNode) {
          nextNode.prev = node;
        }
        break;
    }
  });

  history.map((node) => {
    answer[node.idx] = "X";
  });
  return answer.join("");
};

export const fail_solution = (rows, selected, cmd) => {
  const status = Array.from({ length: rows }, () => "O");
  const stack = [];

  console.log(rows, selected, stack);
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

    console.log(rows, selected, [operator, operand], stack, status.join(""));
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
