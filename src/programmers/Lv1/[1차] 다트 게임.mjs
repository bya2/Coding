import ArrStack from "../../logic/ArrayStack.mjs";
export const solution = (s = "") => {
  function solution(dartResult = "") {
    const bonusMap = [``, `S`, `D`, `T`];
    const optionMap = {
      "*": 2,
      "#": -1,
    };

    /**
     * 보너스 점수 계산 Single(S), Double(D), Triple(T)
     * @param bonusMap
     * @returns {function(*, *=)}
     */
    const bonusCheck = (bonusMap) => {
      return (data, str) => {
        const isBonus = bonusMap.indexOf(str);
        if (isBonus > 0) {
          const index = data.index,
            currentNum = data.currentNum;
          data.points[index] = Math.pow(Number(currentNum), isBonus);
          data.explanation[index] = `${currentNum}^${isBonus}`;
        }

        return data;
      };
    };

    /**
     * 옵션 점수 계산
     * 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
     * 아차상(#) 당첨 시 해당 점수는 마이너스된다.
     * @param optionMap
     * @returns {function(*, *)}
     */
    const optionCheck = (optionMap) => {
      return (data, str) => {
        const index = data.index,
          prev = index - 1,
          option = optionMap[str];
        switch (str) {
          case "*":
            data.points[index] = data.points[index] * option;
            data.explanation[index] = `${data.explanation[index]}*${option}`;
            if (prev > -1) {
              data.points[prev] = data.points[prev] * option;
              data.explanation[prev] = `${data.explanation[prev]}*${option}`;
            }
            break;

          case "#":
            data.points[index] = data.points[index] * option;
            data.explanation[index] = `${data.explanation[index]}*(${option})`;
            break;
        }

        return data;
      };
    };

    /**
     * 현재 점수 체크
     * @param data
     * @param str
     */
    const currentNumCheck = (data, str) => {
      const num = Number(str);
      if (!isNaN(num)) {
        if (data.points[data.index]) {
          data.index++;
          data.currentNum = ``;
        }

        data.currentNum += str;
      }
    };

    /**
     * 점수 총합을 구하기 위해.
     * @param data
     * @param index
     * @param array
     */
    const lastIndexCheck = (data, index, array) => {
      if (index >= array.length - 1) {
        data.answer = data.points.reduce((answer, num) => {
          return answer + num;
        }, 0);
      }
    };

    /**
     * String reduce 함수
     * @param bonusMap
     * @param optionMap
     * @returns {function(*=, *=, *=, *=)}
     */
    const reduce = (bonusMap, optionMap) => {
      const bc = bonusCheck(bonusMap);
      const oc = optionCheck(optionMap);

      return (data, str, index, array) => {
        //숫자 체크
        currentNumCheck(data, str);
        //보너스 체크
        bc(data, str);
        //옵션 체크
        oc(data, str);
        //마지막 체크
        lastIndexCheck(data, index, array);

        return data;
      };
    };

    const getAnswer = reduce(bonusMap, optionMap);
    const data = {
      currentNum: ``,
      index: 0,
      points: [],
      explanation: [],
      answer: 0,
    };

    dartResult.split("").reduce(getAnswer, data);
    return data.answer;
  }
};

export const other_solution = (s = "") => {
  let sArr = s.match(/\d+[SDT]|[#*]/g);
  let arr = [];
  let st = 0;
  let ar = 0;
  let n = -1;
  for (let i = 0, len = sArr.length; i < len; ++i) {
    switch (sArr[i]) {
      case "*":
        ++st;
        break;
      case "#":
        ++ar;
        break;
      default:
        if (st) {
          arr[n - 1] *= 2 * st;
          arr[n] *= 2 * st;
          st = 0;
        }
        if (ar) {
          arr[n] *= -1 * ar;
          ar = 0;
        }
        let score = sArr[i].slice(0, -1);
        let area = sArr[i].slice(-1);
        area = area === "S" ? 1 : area === "D" ? 2 : area === "T" ? 3 : 0;
        score = Math.pow(+score, area);
        arr.push(score);
        n++;
    }
  }

  if (st) {
    arr[n - 1] *= 2 * st;
    arr[n] *= 2 * st;
    st = 0;
  }
  if (ar) {
    arr[n] *= -1 * ar;
    ar = 0;
  }

  return arr.reduce((a, b) => a + b, 0);
};

export const fail_solution = (s = "") => {
  let arr = [];
  for (let i = 0, n = 0, st = 0, ar = 0, len = s.length; i < len; ++i) {
    switch (s[i]) {
      case "*":
        ++st;
        break;
      case "#":
        ++ar;
        break;
      default:
        if (st) {
          arr[n - 1] *= 2 * st;
          arr[n] *= 2 * st;
          st = 0;
        }
        if (ar) {
          arr[n] *= -1 * ar;
          ar = 0;
        }
        let j = 1;
        while (typeof +s[i + j] !== "string") {
          console.log(j);
          ++j;
        }

        let [score, area] = s.slice(i, i + j).split("");
        area = area === "S" ? 1 : area === "D" ? 2 : area === "T" ? 3 : 0;
        score = Math.pow(+score, area);
        arr.push(score);
        ++n;
        i += j + 1;
    }
  }
  console.log(arr);
  return arr.reduce((a, b) => a + b, 0);
};

export const examples__arr = [
  {
    s: "1D2S#10S",
    answer: 9,
  },
];
