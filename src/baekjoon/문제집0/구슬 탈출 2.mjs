class AdjacencyListGraph extends Map {
  /**
   * 인접 리스트 그래프 노드 추가(인접 리스트의 키에 해당하는 노드를 추가)
   * @param obj
   */
  add(obj) {
    if (this.has(obj)) {
      console.warn(WARN_NodeAlreadyExist);
    } else {
      this.set(obj, new Set());
    }
  }

  /**
   * 인접 리스트 그래프 노드 제거(연결된 노드들에 매핑되는 각 리스트에서 노드를 제거하고, 인접 리스트의 키에 해당하는 노드를 제거)
   * @param obj
   */
  remove(obj) {
    if (this.has(obj)) {
      for (let adj of this.get(obj)) this.get(adj).delete(obj);
      this.delete(obj);
    } else {
      console.warn(WARN_NoSuchNodeExist);
    }
  }

  /**
   * 인접 리스트 그래프의 노드 간 간선 추가(인접 리스트의 키에 매핑되는 리스트에 노드를 추가)
   * @param obj1
   * @param obj2
   */
  connect(obj1, obj2) {
    if (this.has(obj1) && this.has(obj2)) {
      this.get(obj1).add(obj2);
      this.get(obj2).add(obj1);
    } else {
      console.warn(WARN_NoSuchNodeExist);
    }
  }

  /**
   * 인접 리스트 그래프의 노드들 간 간선 추가
   * @param list
   */
  connectTo(list) {
    for (const [obj1, obj2] of list) {
      this.connect(obj1, obj2);
    }
  }

  /**
   * 인접 리스트 그래프의 모든 노드 간 간선 추가
   */
  connectAll() {
    for (const obj1 of this.keys()) {
      for (const obj2 of this.keys()) {
        if (obj1 !== obj2) {
          this.connect(obj1, obj2);
        }
      }
    }
  }

  /**
   * 인접 리스트 그래프의 노드 간 간선 제거(인접 리스트의 키에 매핑되는 리스트에서 노드를 제거)
   * @param obj1
   * @param obj2
   */
  disconnect(obj1, obj2) {
    if (this.has(obj1) && this.has(obj2)) {
      this.get(obj1).delete(obj2);
      this.get(obj2).delete(obj1);
    } else {
      console.warn(WARN_NoSuchNodeExist);
    }
  }

  /**
   * 깊이 우선 탐색을 통해 높이 등 그래프 정보를 리턴
   * @param validator
   */
  searchDepthFirst(validator) {
    const marked = new Map();
    let height = 0;

    const searchChild = (curr, depth = 0) => {
      if (height < depth) height = depth;

      marked.set(curr, true);
      for (const adj of this.get(curr)) {
        if (!marked.get(adj)) {
          if (validator?.(adj) ?? true) {
            searchChild(adj, depth + 1);
          }
        }
      }
      marked.set(curr, false);
    };

    for (const root of this.keys()) {
      if (validator?.(root) ?? true) {
        searchChild(root, 0);
      }
    }

    return {
      height,
    };
  }

  /**
   * 너비 우선 탐색을 통해 노드의 개수, 높이 등 그래프 정보를 리턴
   * @param root
   */
  searchBreadthFirst(root) {
    const queue = [root];
    const marked = new Map([[root, true]]);

    let n = 0;
    let depth = 0;
    for (; queue.length > 0; ++depth) {
      for (let size = queue.length; size > 0; --size, ++n) {
        const curr = queue.shift();
        for (const adj of this.get(curr)) {
          if (!marked.get(adj)) {
            queue.push(adj);
            marked.set(adj, true);
          }
        }
      }
    }

    return {
      n,
      height: depth,
    };
  }

  /**
   * 간선을 제거하여 분리된 각 그래프의 정점의 개수 목록을 리턴
   * @param list
   */
  separateGraphAndGetNumberOfNodes(list) {
    return list.map(([obj1, obj2]) => {
      this.disconnect(obj1, obj2);
      const { n: a } = this.searchBreadthFirst(obj1);
      const { n: b } = this.searchBreadthFirst(obj2);
      this.connect(obj1, obj2);
      return [a, b];
    });
  }
}

/**
 * 구슬 탈출 2
 * - 빨간 구슬 구멍에 빼기
 * - 파란 구슬 구멍에 x
 * - 세로n 가로m
 * - 왼오위아 기울이기
 * - 최소 몇 번에 빨간 구슬을 빼는지
 * @param {string[]} inputs
 * - .: 빈 칸
 * - #: 벽
 * - o: 구멍
 * - R: 구슬(빨강)
 * - B: 구슬(파랑)
 */
export const solution = (inputs) => {
  const dict = {
    blank: ".",
    wall: "#",
    hole: "o",
    red: "R",
    blue: "B",
  };

  const dir = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3,
  };

  const [n, m] = [+inputs[0][0], +inputs[0][2]];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let [rx, ry, bx, by, hx, hy] = [0, 0, 0, 0, 0, 0];

  const map = inputs.slice(1).map((s, i) => {
    const row = [...s];
    row.forEach((col, j) => {
      if (col === dict.red) [rx, ry] = [i, j];
      else if (col === dict.blue) [bx, by] = [i, j];
      else if (col === dict.hole) [hx, hy] = [i, j];
    });
    return row;
  });

  map[rx][ry] = dict.blank;
  map[bx][by] = dict.blank;

  const move = (d) => {
    while (1) {
      switch (d) {
        case dir.TOP:
          break;
        case dir.RIGHT:
          break;
        case dir.BOTTOM:
          break;
        case dir.LEFT:
          break;
        default:
      }
    }
  };

  let count = -1;
  const queue = [[rx, ry, bx, by, 1]];

  while (queue.length) {
    for (let dir = 0; dir < 4; ++dir) {
      
    }
  }
};
