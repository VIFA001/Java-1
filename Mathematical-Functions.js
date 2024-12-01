//Factorial

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(6));

//prime number
function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // num is divisible by i, so it's not prime
    }
  }
  return true; // num is prime
}
console.log(isPrime(10));

//Fibonacci Sequence

function fibonacci(n) {
  let sequence = [];

  // Return an empty array if the number of terms is less than or equal to 0
  if (n <= 0) {
    return sequence;
  }

  // The first two Fibonacci numbers
  sequence.push(0);
  if (n > 1) {
    sequence.push(1);
  }

  // Generate the Fibonacci sequence up to n terms
  for (let i = 2; i < n; i++) {
    let nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
  }

  return sequence;
}
console.log(fibonacci(10));
