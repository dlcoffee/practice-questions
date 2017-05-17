let fib = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }

  let prevPrev = 0;
  let prev = 1;
  let current;

  for (let i = 1; i < n; i++) {
    current = prev + prevPrev;

    prevPrev = prev;
    prev = current;
  }

  return current;
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));