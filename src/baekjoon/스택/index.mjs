/**
 *
 * @param {string} s
 * @param {string} b
 * @returns {string}
 */
export function boom(s, b) {
  const STACK = [];

  for (let i = 0; i < s.length; ++i) {
    let flag = false;
    const char = s[i];
    const bTail = b[b.length - 1];

    if (char === bTail) {
      for (let j = 0; j < bLen - 1; ++j) {
        if (STACK[STACK.length - 1 - j] === b[b.length - 2 - j]) continue;
        flag = true;
        s;
        break;
      }

      if (flag) STACK.push(char);
      else {
        for (let k = 0; k < bLen - 1; ++k) {
          STACK.pop();
        }
      }
    } else {
      STACK.push(char);
    }
  }

  return STACK.length ? STACK.join("") : "FRULA";
}
