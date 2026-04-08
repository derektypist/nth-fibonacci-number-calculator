function fibonacci(n) {
  let sequence = [0, 1];
  let i = sequence.length;
  while (i <= n) {
    sequence.push(sequence[i-1] + sequence[i-2]);
    i += 1;
  }

  return sequence[n];
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(15));
