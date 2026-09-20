function analyzeArr(numbers) {
  if (numbers.length === 0) {
    return { min: null, max: null, average: null };
  }

  let min = numbers[0];
  let max = numbers[0];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const a = numbers[i];

    if (a < min) {
      min = a;
    }

    if (a > max) {
      max = a;
    }

    sum += a;
  }

  const average = sum / numbers.length;

  return {
    min: min,
    max: max,
    average: average
  };
}

const numbers = [5, 7, 2, 9, 1, 8, 3, 4, 12];
console.log(analyzeArr(numbers));