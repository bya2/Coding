export function getDivisors4(_n) {
  const v = [];
  const sqrtN = Math.sqrt(_n);
  let p;
  for (let i = 2; i <= sqrtN; ++i) if (_n % i === 0) v.push(i);
  if (v[v.length - 1] === sqrtN) p = v.pop();
  for (const i of [...v]) v.push(_n / i);
  if (typeof p !== "undefined") v.push(p);
  v.push(1);
  v.sort((a, b) => a - b);
  return v;
}

export function getUnsortedDivisors(_n) {
  const v = [];
  for (let i = 2; i <= Math.sqrt(_n); ++i) {
    if (_n % i === 0) {
      v.push(i);
      if (i !== _n / i) v.push(_n / i);
    }
  }
  return v;
}

export function getDivisors3(n) {
  const v1 = [],
    v2 = [];
  const sqrtN = Math.sqrt(n);
  for (let i = 1; i <= sqrtN; ++i) {
    if (n % i === 0) {
      v1.push(i);
      if (i !== sqrtN) v2.unshift(n / i);
    }
  }
  return [v1, v2].flat();
}

export function getDivisors(_n) {
  const v = [];
  for (let i = 1, len = _n / 2; i <= len; ++i) if (_n % i === 0) v.push(i);
  return v;
}

function approximatedSqrt(n) {
  return Math.floor(Math.sqrt(n));
}

function pushNewDivisors(arr, startIndex, x) {
  for (let i = startIndex; i < arr.length; i++) {
    const newDivisor = arr[i] * x;
    arr.push(newDivisor);
  }
}

export function getDivisors2(n) {
  const v = [];
  let countDivisors2 = 0;
  let _n = n;

  while (_n % 2 === 0) {
    v.push(2 << countDivisors2);
    countDivisors2++;
    _n >>= 1;
  }

  let x = 3;
  let nSqrt = approximatedSqrt(_n);

  while (x < nSqrt) {
    let powX = x;
    let vLen = v.length;
    let xIsADivisor = false;

    let powXIsADivisor = _n % x === 0;
    while (powXIsADivisor) {
      _n = Math.floor(_n / x);
      v.push(powX);
      pushNewDivisors(v, vLen, powX);
      powXIsADivisor = _n % x === 0;
      if (powXIsADivisor) {
        powX *= x;
      }
      xIsADivisor = true;
    }
    x += 2;

    if (xIsADivisor) {
      nSqrt = approximatedSqrt(_n);
    }
  }

  if (_n > 1 && _n !== n) {
    const vLen = v.length;
    v.push(_n);
    pushNewDivisors(v, vLen, _n);
  }

  if (v.length > 1) {
    v.sort((a, b) => a - b);
    v.pop();
  }

  return v;
}
