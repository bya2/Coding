export const solution = (a, b) => {
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let days = b;
  for (let i = 1; i < a; ++i) {
    if (i === 2) days += 29;
    else if (i <= 7) {
      if (i % 2 === 1) days += 31;
      else days += 30;
    } else {
      if (i % 2 === 1) days += 30;
      else days += 31;
    }
  }

  return dayOfWeek[(days + 4) % 7];
};

export const other_solution = (a, b) => {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
};
