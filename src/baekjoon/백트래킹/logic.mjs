export function combine(length) {
  const combinations = [];

  const recur = (acc, marked) => {
    if (acc.length === length) {
      combinations.push(acc.join(" "));
      return;
    }

    for (const char of this) {
      if (!marked[char]) recur([...acc, char], { ...marked, [char]: true });
    }
  };

  recur(
    [],
    this.reduce((obj, t) => ((obj[t] = false), obj), {})
  );

  return combinations;
}

export function combine2(length) {
  const combinations = [];

  const recur = (acc, index) => {
    if (acc.length === length) {
      combinations.push(acc.join(" "));
      return;
    }

    for (let i = index, len = this.length; i < len; ++i) {
      recur([...acc, this[i]], i + 1);
    }
  };

  recur([], 0);

  return combinations;
}

export function combine3(length) {
  const combinations = [];

  const recur = (acc) => {
    if (acc.length === length) {
      combinations.push(acc.join(" "));
      return;
    }

    for (let i = 0, len = this.length; i < len; ++i) {
      recur([...acc, this[i]]);
    }
  };

  recur([]);

  return combinations;
}
