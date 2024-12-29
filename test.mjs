function a(flag) {
  return new Promise((resolve, reject) => {
    flag ? resolve(1) : reject(2);
  });
}

// a(1).then((n) => {
//   console.log(n);
// });

// console.log(a(0).catch((n) => n));

// console.log(a(1).then((n) => n));

// console.log(Promise.resolve(1));
// console.log(Promise.reject(1).catch(() => {}));

console.log(a(1).then(() => 3));

console.log(
  new Promise(() => {}).then(() => {
    r;
  })
);
