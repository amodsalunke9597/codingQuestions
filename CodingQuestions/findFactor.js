const num = 12;
let factors = [];

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    factors.push(i);
  }
}

console.log(factors);
