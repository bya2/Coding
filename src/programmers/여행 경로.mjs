// s: "ICN"
// len: 3
// [a -> b]
// all

// _lv, _port
export const solution = (tickets) => {
  const routes = [];

  const dfs = (_curr_tickets, _loc, _route) => {
    if (_curr_tickets.length === 0) {
      routes.push(_route);
    } else {
      for (const [idx, [from, to]] of _curr_tickets.entries()) {
        if (_loc === from) {
          const new_tickets = [..._curr_tickets];
          new_tickets.splice(idx, 1);
          dfs(new_tickets, to, [..._route, to]);
        }
      }
    }
  };

  dfs(tickets, "ICN", ["ICN"]);

  return routes.sort()[0];
};

export const fail = (tickets) => {
  const q = [];
  const v = [];
  const paths = [];

  const sorted = tickets.sort((prev, curr) => (prev[1] < curr[1] ? -1 : prev[1] > curr[1] ? 1 : 0));
  const begin = sorted.find((ticket) => ticket[0] === "ICN");
  q.push(begin);
  paths.push(begin[0]);

  while (q.length) {
    const curr_t = q.shift();
    v.push(JSON.stringify(curr_t));
    paths.push(curr_t[1]);

    for (const t of sorted) {
      if (v.includes(JSON.stringify(t))) continue;
      if (paths[paths.length - 1] === t[0]) {
        q.push(t);
        break;
      }
    }
  }

  return paths;
};

export const examples__arr = [
  {
    tickets: [
      ["ICN", "JFK"],
      ["HND", "IAD"],
      ["JFK", "HND"],
    ],
    answer: ["ICN", "JFK", "HND", "IAD"],
  },
  {
    tickets: [
      ["ICN", "SFO"],
      ["ICN", "ATL"],
      ["SFO", "ATL"],
      ["ATL", "ICN"],
      ["ATL", "SFO"],
    ],
    answer: ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"],
  },
];
