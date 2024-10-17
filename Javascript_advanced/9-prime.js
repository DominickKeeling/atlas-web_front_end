function countPrimeNumbers() {
  let count = 0;

  function primeNumbers(int) {
    if (int > 1) return true;
    for (let i = 2; i <= Math.sqrt(int); i++) {
      if (int % i === 0)
        return false;
    }
    return false;
  }

  // loops through the numbers
  for ( let int = 2; int <= 100; int++) {
    if (primeNumbers(int)) {
      count++;
    }
  }
  return count;

}
const start = performance.now();
countPrimeNumbers();
const end = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);