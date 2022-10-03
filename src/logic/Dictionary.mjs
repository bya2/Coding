import { alphabets } from "../misc/utils.mjs";

export default class Dict extends Map {
  maximumLengthOfWord = 5;
  letterMap = new Map();

  constructor(letters = alphabets.split("")) {
    super();
    if (letters instanceof Array && letters.length > 0) {
      this.letterMap = letters.reduce((map, letter, i) => (map.set(letter, i), map), new Map());
    }
  }

  get numberOfCharacters() {
    return this.letterMap.size;
  }

  upsertChar(char, index) {
    this.set(char, index);
  }

  deleteChar(char) {
    this.delete(char);
  }

  indexOf(word = "") {
    const costs = this.getCosts();
    return word.split("").reduce((acc, curr, i) => acc + this.letterMap.get(curr) * costs[i] + 1, 0);
  }

  getCosts(maxLenOfWord = this.maximumLengthOfWord, numOfChars = this.numberOfCharacters) {
    const costList = [0];
    for (let i = 0; i < maxLenOfWord; ++i) costList.push(costList[i] * numOfChars + 1);
    costList.reverse();
    return costList;
  }
}
