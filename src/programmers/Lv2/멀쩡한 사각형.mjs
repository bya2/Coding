const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

export const solution = (w, h) => {
  return w * h - (w + h - gcd(w, h));
};

export const other_solution = (w, h) => {
  const slope = h / w;
  let result = 0;

  for (let i = 1; i <= w; ++i) {
    result += Math.ceil(slope * i);
  }

  return (w * h - result) * 2;
};

/*
1. 그래프를 그리고 보면(예시로 나온 이미지를 좌우반전 시키면) 왼쪽아래끝에서 (0, 0) 오른쪽위끝으로 (8, 12)그래프가 그려집니다

2. 여기서 x = 0을 대입하면 y = 0이기 때문에 원점에 있어서 어떠한 사각형도 1차함수가 지나가지 않습니다

3. x = 1을 대입하면 y = 1.5이기 때문에 1.5개의 사각형이 대각선 밑에 존재하게 됩니다

4. 여기서 1.5개의 사각형을 쓸 수 없게 된것은 사실 2개의 사각형을 쓸 수 없는 것과 같기때문에 올림처리를 해줍니다

5. x = 2를 대입하면 y = 3이고 3개의 사각형이 대각선 밑에 존재합니다

6. x = 3을 대입하면 5개의 사각형(4.5개의 사각형)이 대각선 밑에 존재합니다

7. 즉 기울기 * x (1 ~ w)을 모두 더해주면 대각선의 밑에 있는 사각형의 갯수를 표현할 수 있습니다

8. 사각형의 총 갯수 = h * w이므로 h * w - result는 위에 있는 사각형의 갯수를 표현한다는 뜻인데 아랫쪽에 하나가 더 있으므로 *2를해서 return하면 됩니다

*/

export const examples__arr = [
  {
    w: 8,
    h: 12,
    answer: 80,
  },
];
