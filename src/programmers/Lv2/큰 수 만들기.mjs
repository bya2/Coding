export const solution3 = (number, k) => {
  const numbers = [...number].map((c) => +c);
  const stack = [];
  for (let i = 0, len = numbers.length; i < len; ++i) {
    if (stack.length === 0) {
      stack.push(numbers[i]);
      ++i;
    }

    while (stack[stack.length - 1] < numbers[i]) {
      --k;
      stack.pop();
      if (k === 0) return stack.join("") + numbers.join("").slice(i, numbers.length);
      if (stack.length === 0) break;
    }
    stack.push(numbers[i]);
  }

  return stack.join("").slice(0, numbers.length - k);
};

export const solution = (number, k) => {
  const stack = [number[0]];
  for (let i = 1, len = number.length; i < len; ++i) {
    while (stack[stack.length - 1] < number[i]) {
      --k;
      stack.pop();
      if (k === 0) return stack.join("") + number.slice(i, number.length);
      if (stack.length === 0) break;
    }
    stack.push(number[i]);
  }

  return stack.join("").slice(0, number.length - k);
};

export function solution2(number = "", k = 1) {
  const stack = [];

  for (let i = 0, len = number.length; i < len; ++i) {
    if (stack.length === 0) {
      stack.push(number[i]);
      ++i;
    }

    while (stack[stack.length - 1] < number[i] && k > 0) {
      k--;
      stack.pop();
      if (k === 0) return stack.join("") + number.slice(i, number.length);
      if (stack.length === 0) break;
    }
    stack.push(number[i]);
  }

  return stack.join("").slice(0, number.length - k);
}

export function fail_solution3(number = "", k = 1) {
  let numbers = [...number].map((c) => +c);

  for (let i = 0, mv, mi; k > 0 && i < numbers.length; ++i) {
    mv = numbers[i];
    mi = i;

    for (let j = i + 1, len = k + i; j <= len; ++j) {
      if (mv < numbers[j]) {
        mv = numbers[j];
        mi = j;
      }
    }

    if (mi !== i) {
      numbers.splice(i, mi - i);
      k -= mi - i;
    }
  }

  return numbers.map((c) => c + "").join("");
}

export function fail_solution2(number = "", k = 1) {
  const arr = [...number].map((c) => +c);

  for (let i = 0, maxVal, maxIdx; k > 0 && i < arr.length; ) {
    console.log(arr);

    maxVal = arr[i];
    maxIdx = i;
    let j;
    for (j = 1; j <= k; ++j) {
      const l = i + j;
      if (maxVal < arr[l]) {
        maxVal = arr[l];
        maxIdx = l;
      }
    }

    if (maxIdx === i) {
      console.log("aaa");
      ++i;
    } else {
      console.log("b", k, maxIdx, i, arr.splice(i, maxIdx - i));
      console.log("B", k, maxIdx, i, arr.splice(i + 1, k - (maxIdx - i)));
      k -= maxIdx;
    }
  }

  console.log("k", k);
  return arr
    .map((n) => n + "")
    .slice(-k)
    .join("");
}

export function fail_solution(number = "", k = 1) {
  const dels = [...number].sort((a, b) => +a - +b).slice(0, k);
  console.log(dels);
  const arr = [...number];
  for (let c of dels) {
    const i = arr.findIndex((el) => el === c);
    arr.splice(i, 1);
  }
  return arr.join("");
}

export const examples__arr = [
  {
    number: "1924",
    k: 2,
    answer: "94",
  },
  {
    number: "1231234",
    k: 3,
    answer: "3234",
  },
  {
    number: "4177252841",
    k: 4,
    answer: "775841",
  },
];
