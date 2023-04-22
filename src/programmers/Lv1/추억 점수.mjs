export const solution = (names, yearning, photo) => {
  const map = names.reduce((map, t, i) => map.set(t, yearning[i]), new Map());
  return photo.map((arr) =>
    arr.reduce((sum, name) => sum + (map.get(name) || 0), 0)
  );
};
