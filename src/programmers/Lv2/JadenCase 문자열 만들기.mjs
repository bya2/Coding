export const solution = (s = "") => {
  s = s.toLowerCase();

  const words = s.split(" ");
  

  for (let i = 0; i < words.length; ++i) {
    if (words[i] === "") continue;
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
};

export const isLowerCaseCode = (code) => {
  return code >= 97 && code <= 122;
};
