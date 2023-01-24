/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS:
  // 0: 포켓몬의 개수(n), 맞춰야하는 문제의 개수(m)
  // 1~n: 1번 포켓몬 ~ n번 포켓몬 (첫글자 대문자, 그 외 소문자, 일부 마지막만 대문자, 길이:2~20)
  // n+1~: 맞춰야할 문제들

  // OUTPUTS:
  // - 단어 -> 번호
  // - 번호 -> 단어

  const [n, _] = inputs.shift().split(" ").map(Number);

  const map = inputs
    .slice(0, n)
    .reduce((map, t, i) => map.set(t, i).set(i, t), new Map());

  return inputs
    .slice(n)
    .map((o) => (Number.isNaN(+o) ? map.get(o) + 1 : map.get(o - 1)))
    .join("\n");
};

export const examples = [
  {
    inputs: `26 5
    Bulbasaur
    Ivysaur
    Venusaur
    Charmander
    Charmeleon
    Charizard
    Squirtle
    Wartortle
    Blastoise
    Caterpie
    Metapod
    Butterfree
    Weedle
    Kakuna
    Beedrill
    Pidgey
    Pidgeotto
    Pidgeot
    Rattata
    Raticate
    Spearow
    Fearow
    Ekans
    Arbok
    Pikachu
    Raichu
    25
    Raichu
    3
    Pidgey
    Kakuna`,
    answer: `Pikachu
    26
    Venusaur
    16
    14`,
  },
];
