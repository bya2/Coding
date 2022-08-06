export const solution = (orders) => {
  let answer = [];
  let max_num = 0;

  const obj_usr_d = orders.reduce((obj, str_order) => {
    const [usr, ...arr_order] = str_order.split(" ");

    if (!obj[usr]) obj[usr] = { n: 0 };

    const len = arr_order.length;

    for (let i = 0; i < len; ++i) {
      if (!obj[usr][arr_order[i]]) {
        obj[usr][arr_order[i]] = true;
        ++obj[usr].n;
      }
    }

    if (max_num < obj[usr].n) max_num = obj[usr].n;

    return obj;
  }, {});

  for (const [usr, content] of Object.entries(obj_usr_d)) {
    if (content.n === max_num) answer.push(usr);
  }

  return answer;
};

export const examples__arr = [
  {
    orders: ["alex pizza pasta", "alex pizza pizza", "alex noodle", "bob pasta", "bob noodle sandwich pasta", "bob steak noodle"],
    answer: ["bob"],
  },
  {
    orders: ["alex pizza pasta steak", "bob noodle sandwich pasta", "choi pizza sandwich pizza", "alex pizza pasta steak"],
    answer: ["alex", "bob"],
  },
];
