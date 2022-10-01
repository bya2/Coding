export const solution = (price, money, count) => {
  let need = 0;
  for (let i = 1; i <= count; ++i) {
    need += price * i;
  }
  let remain = need - money;
  return remain > 0 ? remain : 0;
};

export const 가우스의공식 = (price, money, count) => {
  // 가우스의 공식: 1~n의 합: n(n+1)/2
  const remain = (price * count * (count + 1)) / 2 - money;
  return remain > 0 ? remain : 0;
};
