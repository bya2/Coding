/**
 * @param {string} m 기억한 멜로디
 * @param {string[]} musicinfos 방송된 곡의 정보 배열 ["음악시작시각(HH:MM>=00:00),끝난시각(HH:MM<=23:59),음악제목,악보정보"]
 * @return {string} 음악제목
 */
export const solution = (m, musicinfos) => {
  let tmp;
  let maximum = 0;

  const mLen = m.length;
  const matchM = m.match(/[A-G]#?/g);
  const matchMLen = matchM.length;

  for (const musicinfo of musicinfos) {
    let [sTime, eTime, title, info] = musicinfo.split(",");
    sTime = sTime.split(":").map((n) => +n);
    eTime = eTime.split(":").map((n) => +n);
    const minutes = (eTime[0] - sTime[0]) * 60 + (eTime[1] - sTime[1]);
    if (minutes < matchMLen) continue;
    const matchInfo = info.match(/[A-G]#?/g);
    const infoLen = matchInfo.length;
    const [q, r] = [~~(minutes / infoLen), minutes % infoLen];
    info = info.repeat(q) + matchInfo.slice(0, r).join("") + "Z";

    for (let i = 0, len = info.length - mLen; i < len; ++i) {
      const sliceInfo = info.substring(i, i + mLen);
      if (sliceInfo === m && info[i + mLen] !== "#" && maximum < minutes) {
        tmp = title;
        maximum = minutes;
        break;
      }
    }
  }

  return tmp ?? "(None)";
};

export const examples__arr = [
  {
    m: "ABCDEFG",
    musicinfos: ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"],
    answer: "HELLO",
  },
  {
    m: "CC#BCC#BCC#BCC#B",
    musicinfos: ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"],
    answer: "FOO",
  },
  {
    m: "ABC",
    musicinfos: ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"],
    answer: "WORLD",
  },
  {
    m: "CC#BCC#BCC#",
    musicinfos: ["03:00,03:08,FOO,CC#B"],
    answer: "FOO",
  },
];
