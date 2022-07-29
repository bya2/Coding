import { ArrayList, ArrayQueue, ArrayStack } from "./ArrayList";

describe("ArrayList", () => {
  it("go", () => {
    const list = new ArrayList([1, 2, 3]);
    expect(list.data).toEqual([1, 2, 3]);
  });

  it("Queue", () => {
    const list = new ArrayQueue([1, 2]);
    list.enqueue(5);
    expect(list.data).toEqual([1, 2, 5]);
  });
});
