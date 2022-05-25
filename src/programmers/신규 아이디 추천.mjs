// 3 <= id <= 15
// string(lowercase, number, -, _, .)
// .는 처음과 끝 불가, 연속 사용 불가

export const solution = (new_id) => {
  new_id = new_id
    .toLocaleLowerCase("en-US")
    .replace(/[^-\_\.a-z0-9]/g, "")
    .replace(/\.{2,}/g, ".");

  new_id = new_id[0] === "." ? new_id.slice(1) : new_id[new_id.length - 1] === "." ? new_id.slice(0, -1) : new_id;
  new_id = new_id ? new_id : "a";
  new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id;
  new_id = new_id[new_id.length - 1] === "." ? new_id.slice(0, -1) : new_id;

  if (new_id.length <= 2) {
    const char = new_id[new_id.length - 1];
    new_id += new Array(3 - new_id.length).fill(char).join("");
  }

  return new_id;
};

export const other_solution = (new_id) => {
  let id = new_id
    .toLocaleLowerCase("en-US")
    .replace(/[^\w-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  const len = id.length;

  if (len < 3) {
    id += id.charAt(len - 1).repeat(3 - len);
  }

  return id;
};

export const examples__arr = [
  {
    new_id: "...!@BaT#*..y.abcdefghijklm",
    answer: "bat.y.abcdefghi",
  },
  {
    new_id: "z-+.^.",
    answer: "z--",
  },
  {
    new_id: "=.=",
    answer: "aaa",
  },
  {
    new_id: "123_.def",
    answer: "123_.def",
  },
  {
    new_id: "abcdefghijklmn.p",
    answer: "abcdefghijklmn",
  },
];
