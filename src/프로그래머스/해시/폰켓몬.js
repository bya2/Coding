function solution(nums) {
  let 종류 = 0;
  const 가져갈수있는개수 = (nums.length / 2) >> 0;

  nums.reduce((obj, t) => {
    if (!obj[t]) {
      obj[t] = 1;
      ++종류;
    }
  }, {});

  return Math.min(종류, 가져갈수있는개수);
}

const example = `[3,1,2,3]	2
[3,3,3,2,2,4]	3
[3,3,3,2,2,2]	2`;
