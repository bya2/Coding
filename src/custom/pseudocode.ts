import { Queue } from "./List";
import { noop } from "../misc/util";

export const pseudocodeOfBFS = (root: any, cb?: Function, ...args: any[]) => {
  let queue = new Queue();
  root.marked = true;
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    let d = (cb || noop)(...args);
    if (d) return d;
    for (let adjNode of node.adjacent) {
      if (!adjNode.marked) {
        adjNode.marked = true;
        queue.enqueue(adjNode);
      }
    }
  }
};

export const pseudocodeOfDFS = (node: any, cb?: Function, ...args: any[]) => {
  if (node === null) return;

  let d = (cb || noop)(...args);
  if (d) return d;
  node.marked = true;

  for (let adjNode of node.adjacent) {
    if (!adjNode.marked) {
      pseudocodeOfDFS(node);
    }
  }
};

export const pseudocodeOfHeap = () => {};

export const pseudocodeOfHeapSearch = () => {};

export const pseudocodeOfBubbleSort = () => {};

export const pseudocodeOfGCD = (a: number, b: number): number => {
  // 최대공약수
  // 1. A,B를 서로 나눌 때, 나누어진다면 b가 최대 공약수
  // 2. A,B가 서로 나뉘어지지 않는다면, B와 A를 B로 나눈 나머지를 다시 나누기
  // 3. 서로 나뉘어지면, A%B가 최대공약수. 안나뉘어지면 2번 반복

  if (b === 0) return a;
  return pseudocodeOfGCD(b, a % b);
};

export const pseudocodeOfLCD = (a: number, b: number): number => {
  // 최소공배수
  return (a * b) / pseudocodeOfGCD(a, b);
};

export const getDivisors = (n: number): number[] => {
  const divisors: number[] = [];

  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};
