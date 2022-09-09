export const solution = (phone_number = "") => {
  const LEN = phone_number.length;
  return Array.from({ length: LEN - 4 }, () => "*").join("") + phone_number.slice(LEN - 4, LEN);
};

export const other_solution = (s) => {
  return "*".repeat(s.length - 4) + s.slice(-4);
};

export const blindPhoneNumber = (s) => {
  return s.replace(/\d(?=\d{4})/g, "*");
};
